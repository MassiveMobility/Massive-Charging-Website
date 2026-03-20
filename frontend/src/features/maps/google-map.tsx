"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";

import type { GeoPoint, GoogleMapMarker } from "@/features/maps/types";
import {
  type GoogleMapsNamespace,
  loadGoogleMapsApi
} from "@/features/maps/google-maps-loader";

const DEFAULT_CENTER: GeoPoint = { lat: 20.5937, lng: 78.9629 };
const DEFAULT_MARKER_COLOR = "#1d4ed8";
const SELECTED_MARKER_COLOR = "#0f172a";

type GoogleMapInstance = InstanceType<GoogleMapsNamespace["Map"]>;
type GoogleMarkerInstance = InstanceType<GoogleMapsNamespace["Marker"]>;
type GoogleInfoWindowInstance = InstanceType<GoogleMapsNamespace["InfoWindow"]>;

type GoogleMapProps = {
  className?: string;
  style?: CSSProperties;
  center?: GeoPoint;
  zoom?: number;
  markers?: GoogleMapMarker[];
  selectedMarkerId?: string | null;
  autoFitToMarkers?: boolean;
  onMarkerSelect?: (marker: GoogleMapMarker) => void;
  onInfoWindowDetailsClick?: (marker: GoogleMapMarker) => void;
  infoWindowDetailsLabel?: string;
  options?: Record<string, unknown>;
  loadingFallback?: ReactNode;
  errorFallback?: ReactNode;
  emptyFallback?: ReactNode;
};

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const INFO_DETAILS_BUTTON_CLASS = "mcn-map-info-details-btn";

const buildInfoWindowContent = (
  marker: GoogleMapMarker,
  withDetailsButton: boolean,
  infoWindowDetailsLabel: string
) => {
  const subtitle = marker.subtitle
    ? `<div style="margin-top:4px;color:#475569;font-size:12px;line-height:1.45;">${escapeHtml(
        marker.subtitle
      )}</div>`
    : "";

  const detailsButton = withDetailsButton
    ? `<button type="button" class="${INFO_DETAILS_BUTTON_CLASS}" style="margin-top:10px;border:0;border-radius:8px;background:#E50000;color:#fff;padding:8px 12px;font-size:12px;line-height:1;font-weight:600;cursor:pointer;">${escapeHtml(
        infoWindowDetailsLabel
      )}</button>`
    : "";

  return `<div style="min-width:180px;padding:4px 0;font-family:ui-sans-serif,system-ui,sans-serif;"><div style="color:#0f172a;font-size:14px;font-weight:600;">${escapeHtml(
    marker.title
  )}</div>${subtitle}${detailsButton}</div>`;
};

const buildMarkerIcon = (maps: GoogleMapsNamespace, color: string, selected: boolean) => {
  const size = selected ? 38 : 32;
  const pin = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32" fill="none">
      <path d="M16 2.667c-5.15 0-9.333 4.048-9.333 9.04 0 6.387 7.46 14.485 8.287 15.369a1.43 1.43 0 0 0 2.092 0c.827-.884 8.287-8.982 8.287-15.368 0-4.993-4.184-9.041-9.333-9.041Z" fill="${selected ? SELECTED_MARKER_COLOR : color}"/>
      <circle cx="16" cy="11.75" r="4.167" fill="white"/>
    </svg>
  `;

  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(pin)}`,
    scaledSize: new maps.Size(size, size),
    anchor: new maps.Point(size / 2, size - 2)
  };
};

/**
 * Shared Google Maps React wrapper with controlled markers and details callbacks.
 */
export const GoogleMap = ({
  className,
  style,
  center,
  zoom = 11,
  markers = [],
  selectedMarkerId = null,
  autoFitToMarkers = true,
  onMarkerSelect,
  onInfoWindowDetailsClick,
  infoWindowDetailsLabel = "View full details",
  options,
  loadingFallback,
  errorFallback,
  emptyFallback
}: GoogleMapProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapsRef = useRef<GoogleMapsNamespace | null>(null);
  const mapRef = useRef<GoogleMapInstance | null>(null);
  const infoWindowRef = useRef<GoogleInfoWindowInstance | null>(null);
  const markerInstancesRef = useRef(new Map<string, GoogleMarkerInstance>());
  const markerConfigRef = useRef(new Map<string, GoogleMapMarker>());
  const onMarkerSelectRef = useRef(onMarkerSelect);
  const onInfoWindowDetailsClickRef = useRef(onInfoWindowDetailsClick);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  onMarkerSelectRef.current = onMarkerSelect;
  onInfoWindowDetailsClickRef.current = onInfoWindowDetailsClick;

  const effectiveCenter = useMemo(
    () => center ?? markers[0]?.position ?? DEFAULT_CENTER,
    [center, markers]
  );

  const wireInfoWindowDetailsClick = (marker: GoogleMapMarker) => {
    const maps = mapsRef.current;
    const infoWindow = infoWindowRef.current;
    if (!maps || !infoWindow || !onInfoWindowDetailsClickRef.current) return;

    maps.event?.clearInstanceListeners(infoWindow);
    infoWindow.addListener?.("domready", () => {
      const detailsButton = document.querySelector(
        `.${INFO_DETAILS_BUTTON_CLASS}`
      ) as HTMLButtonElement | null;
      if (!detailsButton) return;

      detailsButton.onclick = (event) => {
        event.preventDefault();
        onInfoWindowDetailsClickRef.current?.(marker);
      };
    });
  };

  useEffect(() => {
    let active = true;

    void loadGoogleMapsApi(["maps"])
      .then((maps) => {
        if (!active || !containerRef.current) return;

        mapsRef.current = maps;
        const baseOptions = {
          center: effectiveCenter,
          zoom,
          clickableIcons: false,
          fullscreenControl: false,
          gestureHandling: "cooperative",
          mapTypeControl: false,
          streetViewControl: false,
          zoomControl: true,
          ...options
        };

        if (!mapRef.current) {
          mapRef.current = new maps.Map(containerRef.current, baseOptions);
        } else {
          mapRef.current.setOptions(baseOptions);
        }

        setErrorMessage(null);
        setIsReady(true);
      })
      .catch((error) => {
        if (!active) return;
        setErrorMessage(
          error instanceof Error ? error.message : "Unable to load Google Maps."
        );
      });

    return () => {
      active = false;
    };
  }, [effectiveCenter, options, zoom]);

  useEffect(() => {
    const maps = mapsRef.current;
    const map = mapRef.current;
    if (!maps || !map || !isReady) return;

    if (!infoWindowRef.current) {
      infoWindowRef.current = new maps.InfoWindow();
    }

    markerInstancesRef.current.forEach((marker) => {
      maps.event?.clearInstanceListeners(marker);
      marker.setMap(null);
    });
    markerInstancesRef.current.clear();
    markerConfigRef.current.clear();

    if (!markers.length) {
      infoWindowRef.current.close();
      return;
    }

    const bounds = new maps.LatLngBounds();

    markers.forEach((marker) => {
      const instance = new maps.Marker({
        map,
        position: marker.position,
        title: marker.title,
        icon: buildMarkerIcon(
          maps,
          marker.accentColor ?? DEFAULT_MARKER_COLOR,
          marker.id === selectedMarkerId
        )
      });

      instance.addListener("click", () => {
        onMarkerSelectRef.current?.(marker);
        infoWindowRef.current?.setContent(
          buildInfoWindowContent(
            marker,
            Boolean(onInfoWindowDetailsClickRef.current),
            infoWindowDetailsLabel
          )
        );
        infoWindowRef.current?.open({ anchor: instance, map });
        wireInfoWindowDetailsClick(marker);
      });

      markerInstancesRef.current.set(marker.id, instance);
      markerConfigRef.current.set(marker.id, marker);
      bounds.extend(marker.position);
    });

    if (selectedMarkerId) {
      const selectedMarker = markerInstancesRef.current.get(selectedMarkerId);
      const selectedConfig = markerConfigRef.current.get(selectedMarkerId);

      if (selectedMarker && selectedConfig) {
        map.panTo(selectedConfig.position);
        map.setZoom(Math.max(zoom, 11));
        infoWindowRef.current.setContent(
          buildInfoWindowContent(
            selectedConfig,
            Boolean(onInfoWindowDetailsClickRef.current),
            infoWindowDetailsLabel
          )
        );
        infoWindowRef.current.open({ anchor: selectedMarker, map });
        wireInfoWindowDetailsClick(selectedConfig);
        return;
      }
    }

    infoWindowRef.current.close();

    if (!autoFitToMarkers) return;
    if (markers.length === 1) {
      const firstMarker = markers[0];
      if (!firstMarker) return;
      map.panTo(firstMarker.position);
      map.setZoom(zoom);
      return;
    }

    map.fitBounds(bounds, 56);
  }, [autoFitToMarkers, infoWindowDetailsLabel, isReady, markers, selectedMarkerId, zoom]);

  useEffect(() => {
    const markerInstances = markerInstancesRef.current;
    const markerConfigs = markerConfigRef.current;

    return () => {
      const maps = mapsRef.current;
      markerInstances.forEach((marker) => {
        maps?.event?.clearInstanceListeners(marker);
        marker.setMap(null);
      });

      markerInstances.clear();
      markerConfigs.clear();
      infoWindowRef.current?.close();
      infoWindowRef.current = null;
    };
  }, []);

  useEffect(() => {
    const maps = mapsRef.current;
    const map = mapRef.current;
    const container = containerRef.current;
    if (!maps || !map || !container || !isReady) return;

    const refreshMapSize = () => {
      const googleEvent = maps.event as {
        trigger?: (instance: unknown, eventName: string) => void;
      };

      googleEvent.trigger?.(map, "resize");
      map.panTo(effectiveCenter);
    };

    const resizeObserver = new ResizeObserver(() => {
      refreshMapSize();
    });

    resizeObserver.observe(container);
    window.addEventListener("resize", refreshMapSize);
    window.requestAnimationFrame(refreshMapSize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", refreshMapSize);
    };
  }, [effectiveCenter, isReady]);

  const overlayContent =
    errorMessage != null ? (
      errorFallback ?? (
        <div className="map-overlay__content">
          <div className="map-overlay__title">Google Maps unavailable</div>
          <div className="map-overlay__body">{errorMessage}</div>
        </div>
      )
    ) : markers.length === 0 && !center ? (
      emptyFallback ?? (
        <div className="map-overlay__content">
          <div className="map-overlay__title">No map data available</div>
          <div className="map-overlay__body">
            Provide a center point or at least one marker to render the map.
          </div>
        </div>
      )
    ) : !isReady ? (
      loadingFallback ?? null
    ) : null;

  return (
    <div className={cx("map-canvas", className)} style={style}>
      <div
        ref={containerRef}
        className={cx(
          "map-canvas__map",
          isReady ? "map-canvas__map--ready" : "map-canvas__map--loading"
        )}
      />

      {overlayContent ? (
        <div className="map-overlay">{overlayContent}</div>
      ) : null}
    </div>
  );
};
