"use client";

import {
  ArrowRight,
  Building2,
  CalendarDays,
  Copy,
  Info,
  MapPin,
  Phone,
  Search,
  Star,
  User,
  X
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  buildFallbackStationDetails,
  fetchNearbyStations,
  fetchStationDetails
} from "@/features/maps/stations-api";
import {
  buildGoogleMapsDirectionsToUrl,
  buildGoogleMapsPlaceUrl,
  type GeoPoint,
  GoogleMap
} from "@/features/maps";
import type {
  ChargingStation,
  StationPanelDetails,
  StationQueryPayload,
  StationStatus
} from "@/features/maps/stations-api";

const STATUS_META: Record<StationStatus, { label: string; className: string }> = {
  open: {
    label: "Open Now",
    className: "stations-map__status stations-map__status--open"
  },
  unavailable: {
    label: "Unavailable",
    className: "stations-map__status stations-map__status--unavailable"
  }
};

const DEFAULT_STATION_QUERY: StationQueryPayload = {
  lat: 28.456869,
  lon: 77.093169,
  max_dist: 500
};

const INDIA_CENTER: GeoPoint = { lat: 22.9734, lng: 78.6569 };
const INDIA_BOUNDS = {
  north: 37.6,
  south: 6.4,
  west: 68.1,
  east: 97.4
};

/**
 * Full map experience for /charging-stations-map backed by live API data.
 */
export function ChargingStationsExplorer() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [stations, setStations] = useState<ChargingStation[]>([]);
  const [isStationsLoading, setIsStationsLoading] = useState(true);
  const [stationsError, setStationsError] = useState<string | null>(null);

  const [selectedStationId, setSelectedStationId] = useState<string | null>(null);
  const [detailsStationId, setDetailsStationId] = useState<string | null>(null);
  const [detailsByStationId, setDetailsByStationId] = useState<
    Record<string, StationPanelDetails>
  >({});
  const [isDetailsLoading, setIsDetailsLoading] = useState(false);
  const [detailsError, setDetailsError] = useState<string | null>(null);

  useEffect(() => {
    const routeSearch = searchParams.get("search")?.trim() ?? "";
    setSearchTerm((previous) => (previous === routeSearch ? previous : routeSearch));
  }, [searchParams]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedSearchTerm(searchTerm.trim());
    }, 300);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  useEffect(() => {
    const currentSearch = searchParams.get("search")?.trim() ?? "";
    if (currentSearch === debouncedSearchTerm) return;

    const nextParams = new URLSearchParams(searchParams.toString());
    if (debouncedSearchTerm) {
      nextParams.set("search", debouncedSearchTerm);
    } else {
      nextParams.delete("search");
    }

    const nextQuery = nextParams.toString();
    const nextUrl = nextQuery ? `${pathname}?${nextQuery}` : pathname;
    router.replace(nextUrl, { scroll: false });
  }, [debouncedSearchTerm, pathname, router, searchParams]);

  useEffect(() => {
    const controller = new AbortController();

    const run = async () => {
      setIsStationsLoading(true);
      setStationsError(null);

      try {
        const queryPayload: StationQueryPayload = {
          ...DEFAULT_STATION_QUERY,
          ...(debouncedSearchTerm ? { search: debouncedSearchTerm } : {})
        };
        const fetchedStations = await fetchNearbyStations(queryPayload, controller.signal);
        setStations(fetchedStations);
      } catch (error) {
        if (controller.signal.aborted) return;

        const message =
          error instanceof Error
            ? error.message
            : "Unable to load charging stations right now.";
        setStationsError(message);
        setStations([]);
      } finally {
        if (!controller.signal.aborted) {
          setIsStationsLoading(false);
        }
      }
    };

    void run();

    return () => {
      controller.abort();
    };
  }, [debouncedSearchTerm]);

  const filteredStations = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase();
    if (!normalizedQuery) {
      return stations;
    }

    return stations.filter((station) => {
      const searchValue = `${station.name} ${station.address}`.toLowerCase();
      return searchValue.includes(normalizedQuery);
    });
  }, [searchTerm, stations]);

  useEffect(() => {
    if (!filteredStations.length) {
      setSelectedStationId(null);
      return;
    }

    if (
      selectedStationId &&
      !filteredStations.some((station) => station.id === selectedStationId)
    ) {
      setSelectedStationId(null);
    }
  }, [filteredStations, selectedStationId]);

  useEffect(() => {
    if (selectedStationId || !filteredStations.length) return;

    const firstStation = filteredStations[0];
    if (firstStation) {
      setSelectedStationId(firstStation.id);
    }
  }, [filteredStations, selectedStationId]);

  const selectedStation = useMemo(
    () =>
      filteredStations.find((station) => station.id === selectedStationId) ??
      null,
    [filteredStations, selectedStationId]
  );

  const detailsStation = useMemo(
    () => stations.find((station) => station.id === detailsStationId) ?? null,
    [detailsStationId, stations]
  );

  useEffect(() => {
    if (!detailsStation || detailsByStationId[detailsStation.id]) {
      return;
    }

    const controller = new AbortController();

    const run = async () => {
      setIsDetailsLoading(true);
      setDetailsError(null);

      try {
        const details = await fetchStationDetails(
          detailsStation.id,
          DEFAULT_STATION_QUERY,
          detailsStation,
          controller.signal
        );

        if (controller.signal.aborted) return;

        setDetailsByStationId((previous) => ({
          ...previous,
          [detailsStation.id]: details
        }));
      } catch (error) {
        if (controller.signal.aborted) return;

        const fallbackDetails = buildFallbackStationDetails(detailsStation);
        setDetailsByStationId((previous) => ({
          ...previous,
          [detailsStation.id]: fallbackDetails
        }));

        const message =
          error instanceof Error
            ? error.message
            : "Unable to load full station details right now.";
        setDetailsError(message);
      } finally {
        if (!controller.signal.aborted) {
          setIsDetailsLoading(false);
        }
      }
    };

    void run();

    return () => {
      controller.abort();
    };
  }, [detailsByStationId, detailsStation]);

  const detailsData = useMemo(() => {
    if (!detailsStation) return null;
    return (
      detailsByStationId[detailsStation.id] ??
      buildFallbackStationDetails(detailsStation)
    );
  }, [detailsByStationId, detailsStation]);

  const markers = useMemo(
    () =>
      filteredStations.map((station) => ({
        id: station.id,
        position: station.position,
        title: station.name,
        subtitle: station.address,
        accentColor: station.status === "open" ? "#1d4ed8" : "#9ca3af"
      })),
    [filteredStations]
  );

  const mapOptions = useMemo<Record<string, unknown>>(
    () => ({
      gestureHandling: "greedy",
      minZoom: 5,
      mapTypeId: "roadmap",
      restriction: {
        latLngBounds: INDIA_BOUNDS,
        strictBounds: false
      },
      styles: [
        {
          featureType: "administrative.country",
          elementType: "geometry.stroke",
          stylers: [
            { visibility: "on" },
            { color: "#1f2937" },
            { weight: 1.2 }
          ]
        },
        {
          featureType: "administrative.province",
          elementType: "geometry.stroke",
          stylers: [
            { visibility: "on" },
            { color: "#64748b" },
            { weight: 0.8 }
          ]
        }
      ]
    }),
    []
  );

  const openDirections = (station: ChargingStation) => {
    window.open(
      buildGoogleMapsDirectionsToUrl(station.position),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="stations-map">
      <section className="stations-map__shell">
        <div className="stations-map__grid">
          <aside className="stations-map__sidebar">
            <div className="stations-map__sidebar-inner">
              <div className="stations-map__search-wrap">
                <Search className="stations-map__search-icon" size={20} />
                <input
                  aria-label="Search charging stations by name or location"
                  className="stations-map__search-input"
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search location..."
                  type="search"
                  value={searchTerm}
                />
              </div>

              <div className="stations-map__chip">EV Charging Stations</div>

              <div className="stations-map__list">
                {isStationsLoading ? (
                  <div className="stations-map__empty">Loading stations...</div>
                ) : stationsError ? (
                  <div className="stations-map__empty">
                    {stationsError}
                  </div>
                ) : filteredStations.length ? (
                  filteredStations.map((station) => {
                    const isSelected = station.id === selectedStation?.id;
                    const status = STATUS_META[station.status];

                    return (
                      <div
                        aria-label={`Open station details for ${station.name}`}
                        className={`stations-map__card ${isSelected ? "stations-map__card--active" : ""}`}
                        key={station.id}
                        onClick={() => setSelectedStationId(station.id)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            setSelectedStationId(station.id);
                          }
                        }}
                        role="button"
                        tabIndex={0}
                      >
                        <div className="stations-map__card-top">
                          <div>
                            <h3 className="stations-map__card-title">
                              {station.name}
                            </h3>
                            <p className="stations-map__card-address">
                              {station.address}
                            </p>
                          </div>
                          <span className="stations-map__connector">
                            {station.connectorType}
                          </span>
                        </div>

                        <div className="stations-map__meta-row">
                          <span className={status.className}>{status.label}</span>
                          <span className="stations-map__rating">
                            <Star size={11} />
                            {station.rating.toFixed(1)}
                          </span>
                        </div>

                        <div className="stations-map__actions">
                          <a
                            className="stations-map__link"
                            href={buildGoogleMapsPlaceUrl(
                              station.position,
                              station.name
                            )}
                            onClick={(event) => event.stopPropagation()}
                            rel="noreferrer"
                            target="_blank"
                          >
                            Open in Google Maps
                          </a>
                          <button
                            className="stations-map__directions"
                            onClick={(event) => {
                              event.stopPropagation();
                              openDirections(station);
                            }}
                            type="button"
                          >
                            Directions <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="stations-map__empty">
                    No stations match your search.
                  </div>
                )}
              </div>
            </div>
          </aside>

          <div className="stations-map__map-area">
            <GoogleMap
              autoFitToMarkers={selectedStation == null}
              center={selectedStation?.position ?? INDIA_CENTER}
              className="stations-map__map-canvas"
              infoWindowDetailsLabel="View full details"
              markers={markers}
              onInfoWindowDetailsClick={(marker) => {
                setSelectedStationId(marker.id);
                setDetailsStationId(marker.id);
              }}
              onMarkerSelect={(marker) => setSelectedStationId(marker.id)}
              options={mapOptions}
              selectedMarkerId={selectedStation?.id ?? null}
              zoom={selectedStation ? 7 : 5}
            />

            {detailsStation && detailsData ? (
              <aside className="stations-map__details">
                <div className="stations-map__details-top">
                  <div>
                    <h3 className="stations-map__details-title">
                      {detailsStation.name}
                    </h3>
                    <p className="stations-map__details-address">
                      {detailsStation.address}
                    </p>
                  </div>
                  <button
                    aria-label="Close details panel"
                    className="stations-map__details-close"
                    onClick={() => setDetailsStationId(null)}
                    type="button"
                  >
                    <X size={18} />
                  </button>
                </div>

                {isDetailsLoading ? (
                  <p className="stations-map__details-note">
                    Loading full station details...
                  </p>
                ) : null}

                {detailsError && !isDetailsLoading ? (
                  <p className="stations-map__details-note">{detailsError}</p>
                ) : null}

                <div className="stations-map__id-box">
                  <div className="stations-map__id-label">Station ID</div>
                  <div className="stations-map__id-row">
                    <code className="stations-map__id-value">
                      {detailsData.stationPublicId}
                    </code>
                    <button
                      className="stations-map__copy-btn"
                      onClick={() =>
                        navigator.clipboard.writeText(detailsData.stationPublicId)
                      }
                      type="button"
                    >
                      <Copy size={12} />
                      Copy
                    </button>
                  </div>
                </div>

                <div className="stations-map__metrics-grid">
                  <div className="stations-map__metric-card">
                    <div className="stations-map__metric-label">
                      Grid connection power capacity
                    </div>
                    <div className="stations-map__metric-value">
                      {detailsData.gridConnectionPowerCapacity}
                    </div>
                  </div>
                  <div className="stations-map__metric-card">
                    <div className="stations-map__metric-label">Grid phase</div>
                    <div className="stations-map__metric-value">
                      {detailsData.gridPhase}
                    </div>
                  </div>
                </div>

                <div className="stations-map__metric-row">
                  <div className="stations-map__metric-label">
                    Hub Wallet Conversion Rate
                  </div>
                  <div className="stations-map__metric-value">
                    {detailsData.hubWalletConversionRate}
                  </div>
                </div>

                <div className="stations-map__detail-group">
                  <div className="stations-map__group-title">
                    <MapPin size={13} />
                    Location
                  </div>
                  <div className="stations-map__group-box">
                    <div>
                      <span>Address:</span> {detailsData.location.address}
                    </div>
                    <div>
                      <span>Pin code:</span> {detailsData.location.pinCode}
                    </div>
                    <div>
                      <span>City/Town:</span> {detailsData.location.cityTown}
                    </div>
                    <div>
                      <span>State:</span> {detailsData.location.state}
                    </div>
                    <div>
                      <span>Country:</span> {detailsData.location.country}
                    </div>
                    <div>
                      <span>Latitude:</span> {detailsData.location.latitude}
                    </div>
                    <div>
                      <span>Longitude:</span> {detailsData.location.longitude}
                    </div>
                  </div>
                </div>

                <div className="stations-map__detail-group">
                  <div className="stations-map__group-title">
                    <Info size={13} />
                    Other Details
                  </div>
                  <div className="stations-map__group-box stations-map__group-box--spaced">
                    <div>
                      <span>Timings:</span> {detailsData.otherDetails.timings}
                    </div>
                    <div>
                      <span>Working days:</span> {detailsData.otherDetails.workingDays}
                    </div>
                    <div className="stations-map__icon-line">
                      <Phone size={14} />
                      <span>{detailsData.otherDetails.contactNumber}</span>
                    </div>
                    <div className="stations-map__icon-line">
                      <User size={14} />
                      <span>Created by: {detailsData.otherDetails.createdBy}</span>
                    </div>
                    <div>
                      <span>Station Incharge:</span>{" "}
                      {detailsData.otherDetails.stationIncharge}
                    </div>
                    <div className="stations-map__icon-line">
                      <Building2 size={14} />
                      <span>
                        Organization Type: {detailsData.otherDetails.organizationType}
                      </span>
                    </div>
                    <div className="stations-map__icon-line">
                      <CalendarDays size={14} />
                      <span>Created At: {detailsData.otherDetails.createdAt}</span>
                    </div>
                    <div className="stations-map__icon-line">
                      <CalendarDays size={14} />
                      <span>
                        Last modified: {detailsData.otherDetails.lastModified}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="stations-map__detail-group">
                  <div className="stations-map__amenities-title">Amenities</div>
                  <div className="stations-map__amenities">
                    {detailsData.amenities.length ? (
                      detailsData.amenities.map((amenity) => (
                        <span className="stations-map__amenity-pill" key={amenity}>
                          {amenity}
                        </span>
                      ))
                    ) : (
                      <span className="stations-map__amenity-pill">Not specified</span>
                    )}
                  </div>
                </div>

                <div className="stations-map__details-actions">
                  <button
                    className="stations-map__details-directions"
                    onClick={() => openDirections(detailsStation)}
                    type="button"
                  >
                    Directions <ArrowRight size={18} />
                  </button>
                </div>
              </aside>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
