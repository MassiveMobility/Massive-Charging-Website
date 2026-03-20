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

import {
  buildGoogleMapsDirectionsToUrl,
  buildGoogleMapsPlaceUrl
} from "@/features/maps/utils";
import type { GeoPoint } from "@/features/maps/types";
import { GoogleMap } from "@/features/maps/google-map";

type StationStatus = "open" | "unavailable";
type ConnectorType = "AC" | "DC";

type ChargingStation = {
  id: string;
  name: string;
  address: string;
  position: GeoPoint;
  connectorType: ConnectorType;
  status: StationStatus;
  rating: number;
};

type StationPanelDetails = {
  stationPublicId: string;
  gridConnectionPowerCapacity: string;
  gridPhase: string;
  hubWalletConversionRate: string;
  location: {
    address: string;
    pinCode: string;
    cityTown: string;
    state: string;
    country: string;
    latitude: string;
    longitude: string;
  };
  otherDetails: {
    timings: string;
    workingDays: string;
    contactNumber: string;
    createdBy: string;
    stationIncharge: string;
    organizationType: string;
    createdAt: string;
    lastModified: string;
  };
  amenities: string[];
};

const BASE_STATIONS: ChargingStation[] = [
  {
    id: "station-gurgaon-1",
    name: "Sector 43 EV Station",
    address: "Sector 43, Gurgaon, Haryana",
    position: { lat: 28.46238, lng: 77.09472 },
    connectorType: "AC",
    status: "open",
    rating: 4.9
  },
  {
    id: "station-noida-1",
    name: "Noida Sector 62 Fast Hub",
    address: "Sector 62, Noida, Uttar Pradesh",
    position: { lat: 28.6265, lng: 77.3736 },
    connectorType: "DC",
    status: "open",
    rating: 4.8
  },
  {
    id: "station-lucknow-1",
    name: "Lucknow Gomti Riverfront",
    address: "Gomti Nagar, Lucknow, Uttar Pradesh",
    position: { lat: 26.8501, lng: 80.9921 },
    connectorType: "AC",
    status: "open",
    rating: 4.4
  },
  {
    id: "station-chennai-1",
    name: "Chennai Marina Charge Point",
    address: "Marina Beach Road, Chennai, Tamil Nadu",
    position: { lat: 13.0827, lng: 80.2707 },
    connectorType: "DC",
    status: "open",
    rating: 4.7
  },
  {
    id: "station-coimbatore-1",
    name: "Coimbatore Avinashi Road",
    address: "Avinashi Road, Coimbatore, Tamil Nadu",
    position: { lat: 11.0168, lng: 76.9558 },
    connectorType: "AC",
    status: "open",
    rating: 4.3
  },
  {
    id: "station-bengaluru-1",
    name: "Bengaluru ORR Mega Charge",
    address: "Outer Ring Road, Bengaluru, Karnataka",
    position: { lat: 12.9716, lng: 77.5946 },
    connectorType: "DC",
    status: "open",
    rating: 4.6
  },
  {
    id: "station-hyderabad-1",
    name: "Hyderabad Hitec City Point",
    address: "HITEC City, Hyderabad, Telangana",
    position: { lat: 17.385, lng: 78.4867 },
    connectorType: "DC",
    status: "open",
    rating: 4.5
  },
  {
    id: "station-kochi-1",
    name: "Kochi Marine Drive Station",
    address: "Marine Drive, Kochi, Kerala",
    position: { lat: 9.9312, lng: 76.2673 },
    connectorType: "AC",
    status: "open",
    rating: 4.4
  },
  {
    id: "station-mumbai-1",
    name: "Mumbai BKC UltraCharge",
    address: "Bandra Kurla Complex, Mumbai, Maharashtra",
    position: { lat: 19.076, lng: 72.8777 },
    connectorType: "DC",
    status: "open",
    rating: 4.6
  },
  {
    id: "station-pune-1",
    name: "Pune Hinjawadi EV Plaza",
    address: "Hinjawadi Phase 1, Pune, Maharashtra",
    position: { lat: 18.5204, lng: 73.8567 },
    connectorType: "AC",
    status: "open",
    rating: 4.3
  },
  {
    id: "station-ahmedabad-1",
    name: "Ahmedabad SG Highway",
    address: "SG Highway, Ahmedabad, Gujarat",
    position: { lat: 23.0225, lng: 72.5714 },
    connectorType: "AC",
    status: "open",
    rating: 4.4
  },
  {
    id: "station-jaipur-1",
    name: "Jaipur Ajmer Road Plaza",
    address: "Ajmer Road, Jaipur, Rajasthan",
    position: { lat: 26.9124, lng: 75.7873 },
    connectorType: "DC",
    status: "open",
    rating: 4.5
  },
  {
    id: "station-indore-1",
    name: "Indore AB Road Charging Point",
    address: "AB Road, Indore, Madhya Pradesh",
    position: { lat: 22.7196, lng: 75.8577 },
    connectorType: "AC",
    status: "open",
    rating: 4.3
  },
  {
    id: "station-bhopal-1",
    name: "Bhopal MP Nagar Hub",
    address: "MP Nagar Zone 1, Bhopal, Madhya Pradesh",
    position: { lat: 23.2599, lng: 77.4126 },
    connectorType: "DC",
    status: "unavailable",
    rating: 4.1
  },
  {
    id: "station-kolkata-1",
    name: "Kolkata Bypass eHub",
    address: "EM Bypass, Kolkata, West Bengal",
    position: { lat: 22.5726, lng: 88.3639 },
    connectorType: "DC",
    status: "open",
    rating: 4.5
  },
  {
    id: "station-bhubaneswar-1",
    name: "Bhubaneswar Smart City Charger",
    address: "Janpath Road, Bhubaneswar, Odisha",
    position: { lat: 20.2961, lng: 85.8245 },
    connectorType: "AC",
    status: "open",
    rating: 4.2
  },
  {
    id: "station-guwahati-1",
    name: "Guwahati River Side Station",
    address: "Near Brahmaputra Riverside, Guwahati, Assam",
    position: { lat: 26.1445, lng: 91.7362 },
    connectorType: "DC",
    status: "open",
    rating: 4.2
  },
  {
    id: "station-vijayawada-1",
    name: "Vijayawada Benz Circle Hub",
    address: "Benz Circle, Vijayawada, Andhra Pradesh",
    position: { lat: 16.5062, lng: 80.648 },
    connectorType: "DC",
    status: "open",
    rating: 4.3
  },
  {
    id: "station-dwarka-1",
    name: "MCD Parking Sector 10",
    address: "Sector 10 MCD parking, Dwarka, New Delhi",
    position: { lat: 28.5795, lng: 77.0566 },
    connectorType: "DC",
    status: "unavailable",
    rating: 4.0
  }
];

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

const INDIA_CENTER: GeoPoint = { lat: 22.9734, lng: 78.6569 };
const INDIA_BOUNDS = {
  north: 37.6,
  south: 6.4,
  west: 68.1,
  east: 97.4
};

const DEFAULT_WORKING_DAYS =
  "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday";

const STATION_DETAILS_BY_ID: Record<string, StationPanelDetails> = {
  "station-gurgaon-1": {
    stationPublicId: "6994243bba66cbac87dd0618",
    gridConnectionPowerCapacity: "3.3",
    gridPhase: "single",
    hubWalletConversionRate: "-",
    location: {
      address: "Sector 43",
      pinCode: "122001",
      cityTown: "Gurgaon",
      state: "Haryana",
      country: "India",
      latitude: "28.46238",
      longitude: "77.09472"
    },
    otherDetails: {
      timings: "12:00 am - 11:59 pm",
      workingDays: DEFAULT_WORKING_DAYS,
      contactNumber: "+91 9988776655",
      createdBy: "Anchal",
      stationIncharge: "Anchal",
      organizationType: "1c",
      createdAt: "17/02/2026 01:48 pm",
      lastModified: "17/03/2026 10:55 am"
    },
    amenities: ["local_hospital"]
  }
};

const STATIONS = [...BASE_STATIONS];

const getStationDetails = (station: ChargingStation): StationPanelDetails => {
  const mappedDetails = STATION_DETAILS_BY_ID[station.id];
  if (mappedDetails) return mappedDetails;

  const addressParts = station.address.split(",").map((part) => part.trim());
  const cityTown = addressParts[1] ?? "Unknown";
  const state = addressParts[addressParts.length - 1] ?? "Unknown";

  return {
    stationPublicId: station.id,
    gridConnectionPowerCapacity: station.connectorType === "DC" ? "120" : "22",
    gridPhase: station.connectorType === "DC" ? "three" : "single",
    hubWalletConversionRate: "1.00",
    location: {
      address: addressParts[0] ?? station.address,
      pinCode: "-",
      cityTown,
      state,
      country: "India",
      latitude: station.position.lat.toFixed(5),
      longitude: station.position.lng.toFixed(5)
    },
    otherDetails: {
      timings: "12:00 am - 11:59 pm",
      workingDays: DEFAULT_WORKING_DAYS,
      contactNumber: "+91 9000000000",
      createdBy: "Anchal",
      stationIncharge: "Anchal",
      organizationType: "1c",
      createdAt: "17/02/2026 01:48 pm",
      lastModified: "17/03/2026 10:55 am"
    },
    amenities: ["local_hospital"]
  };
};

/**
 * Full legacy-parity map experience for /charging-stations-map.
 */
export function ChargingStationsExplorer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStationId, setSelectedStationId] = useState<string | null>(null);
  const [detailsStationId, setDetailsStationId] = useState<string | null>(null);

  const filteredStations = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase();
    if (!normalizedQuery) {
      return STATIONS;
    }

    return STATIONS.filter((station) => {
      const searchValue = `${station.name} ${station.address}`.toLowerCase();
      return searchValue.includes(normalizedQuery);
    });
  }, [searchTerm]);

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

  const selectedStation = useMemo(
    () =>
      filteredStations.find((station) => station.id === selectedStationId) ??
      null,
    [filteredStations, selectedStationId]
  );

  const detailsStation = useMemo(
    () => STATIONS.find((station) => station.id === detailsStationId) ?? null,
    [detailsStationId]
  );

  const detailsData = useMemo(
    () => (detailsStation ? getStationDetails(detailsStation) : null),
    [detailsStation]
  );

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
          stylers: [{ visibility: "on" }, { color: "#1f2937" }, { weight: 1.2 }]
        },
        {
          featureType: "administrative.province",
          elementType: "geometry.stroke",
          stylers: [{ visibility: "on" }, { color: "#64748b" }, { weight: 0.8 }]
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
                {filteredStations.length ? (
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
                            <h3 className="stations-map__card-title">{station.name}</h3>
                            <p className="stations-map__card-address">{station.address}</p>
                          </div>
                          <span className="stations-map__connector">{station.connectorType}</span>
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
                            href={buildGoogleMapsPlaceUrl(station.position, station.name)}
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
                    <h3 className="stations-map__details-title">{detailsStation.name}</h3>
                    <p className="stations-map__details-address">{detailsStation.address}</p>
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

                <div className="stations-map__id-box">
                  <div className="stations-map__id-label">Station ID</div>
                  <div className="stations-map__id-row">
                    <code className="stations-map__id-value">{detailsData.stationPublicId}</code>
                    <button
                      className="stations-map__copy-btn"
                      onClick={() => navigator.clipboard.writeText(detailsData.stationPublicId)}
                      type="button"
                    >
                      <Copy size={12} />
                      Copy
                    </button>
                  </div>
                </div>

                <div className="stations-map__metrics-grid">
                  <div className="stations-map__metric-card">
                    <div className="stations-map__metric-label">Grid connection power capacity</div>
                    <div className="stations-map__metric-value">
                      {detailsData.gridConnectionPowerCapacity}
                    </div>
                  </div>
                  <div className="stations-map__metric-card">
                    <div className="stations-map__metric-label">Grid phase</div>
                    <div className="stations-map__metric-value">{detailsData.gridPhase}</div>
                  </div>
                </div>

                <div className="stations-map__metric-row">
                  <div className="stations-map__metric-label">Hub Wallet Conversion Rate</div>
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
                    <div><span>Address:</span> {detailsData.location.address}</div>
                    <div><span>Pin code:</span> {detailsData.location.pinCode}</div>
                    <div><span>City/Town:</span> {detailsData.location.cityTown}</div>
                    <div><span>State:</span> {detailsData.location.state}</div>
                    <div><span>Country:</span> {detailsData.location.country}</div>
                    <div><span>Latitude:</span> {detailsData.location.latitude}</div>
                    <div><span>Longitude:</span> {detailsData.location.longitude}</div>
                  </div>
                </div>

                <div className="stations-map__detail-group">
                  <div className="stations-map__group-title">
                    <Info size={13} />
                    Other Details
                  </div>
                  <div className="stations-map__group-box stations-map__group-box--spaced">
                    <div><span>Timings:</span> {detailsData.otherDetails.timings}</div>
                    <div><span>Working days:</span> {detailsData.otherDetails.workingDays}</div>
                    <div className="stations-map__icon-line">
                      <Phone size={14} />
                      <span>{detailsData.otherDetails.contactNumber}</span>
                    </div>
                    <div className="stations-map__icon-line">
                      <User size={14} />
                      <span>Created by: {detailsData.otherDetails.createdBy}</span>
                    </div>
                    <div><span>Station Incharge:</span> {detailsData.otherDetails.stationIncharge}</div>
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
                      <span>Last modified: {detailsData.otherDetails.lastModified}</span>
                    </div>
                  </div>
                </div>

                <div className="stations-map__detail-group">
                  <div className="stations-map__amenities-title">Amenities</div>
                  <div className="stations-map__amenities">
                    {detailsData.amenities.map((amenity) => (
                      <span className="stations-map__amenity-pill" key={amenity}>
                        {amenity}
                      </span>
                    ))}
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
