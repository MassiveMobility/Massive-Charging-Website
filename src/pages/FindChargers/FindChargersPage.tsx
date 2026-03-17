import { useEffect, useMemo, useState, type CSSProperties } from "react";
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
  X,
} from "lucide-react";
import { GoogleMap } from "../../shared/maps/GoogleMap";
import type { GeoPoint } from "../../shared/maps/types";
import {
  buildGoogleMapsDirectionsToUrl,
  buildGoogleMapsPlaceUrl,
} from "../../shared/maps/utils";

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
    rating: 4.9,
  },
  {
    id: "station-noida-1",
    name: "Noida Sector 62 Fast Hub",
    address: "Sector 62, Noida, Uttar Pradesh",
    position: { lat: 28.6265, lng: 77.3736 },
    connectorType: "DC",
    status: "open",
    rating: 4.8,
  },
  {
    id: "station-lucknow-1",
    name: "Lucknow Gomti Riverfront",
    address: "Gomti Nagar, Lucknow, Uttar Pradesh",
    position: { lat: 26.8501, lng: 80.9921 },
    connectorType: "AC",
    status: "open",
    rating: 4.4,
  },
  {
    id: "station-chennai-1",
    name: "Chennai Marina Charge Point",
    address: "Marina Beach Road, Chennai, Tamil Nadu",
    position: { lat: 13.0827, lng: 80.2707 },
    connectorType: "DC",
    status: "open",
    rating: 4.7,
  },
  {
    id: "station-coimbatore-1",
    name: "Coimbatore Avinashi Road",
    address: "Avinashi Road, Coimbatore, Tamil Nadu",
    position: { lat: 11.0168, lng: 76.9558 },
    connectorType: "AC",
    status: "open",
    rating: 4.3,
  },
  {
    id: "station-bengaluru-1",
    name: "Bengaluru ORR Mega Charge",
    address: "Outer Ring Road, Bengaluru, Karnataka",
    position: { lat: 12.9716, lng: 77.5946 },
    connectorType: "DC",
    status: "open",
    rating: 4.6,
  },
  {
    id: "station-hyderabad-1",
    name: "Hyderabad Hitec City Point",
    address: "HITEC City, Hyderabad, Telangana",
    position: { lat: 17.385, lng: 78.4867 },
    connectorType: "DC",
    status: "open",
    rating: 4.5,
  },
  {
    id: "station-kochi-1",
    name: "Kochi Marine Drive Station",
    address: "Marine Drive, Kochi, Kerala",
    position: { lat: 9.9312, lng: 76.2673 },
    connectorType: "AC",
    status: "open",
    rating: 4.4,
  },
  {
    id: "station-mumbai-1",
    name: "Mumbai BKC UltraCharge",
    address: "Bandra Kurla Complex, Mumbai, Maharashtra",
    position: { lat: 19.076, lng: 72.8777 },
    connectorType: "DC",
    status: "open",
    rating: 4.6,
  },
  {
    id: "station-pune-1",
    name: "Pune Hinjawadi EV Plaza",
    address: "Hinjawadi Phase 1, Pune, Maharashtra",
    position: { lat: 18.5204, lng: 73.8567 },
    connectorType: "AC",
    status: "open",
    rating: 4.3,
  },
  {
    id: "station-ahmedabad-1",
    name: "Ahmedabad SG Highway",
    address: "SG Highway, Ahmedabad, Gujarat",
    position: { lat: 23.0225, lng: 72.5714 },
    connectorType: "AC",
    status: "open",
    rating: 4.4,
  },
  {
    id: "station-jaipur-1",
    name: "Jaipur Ajmer Road Plaza",
    address: "Ajmer Road, Jaipur, Rajasthan",
    position: { lat: 26.9124, lng: 75.7873 },
    connectorType: "DC",
    status: "open",
    rating: 4.5,
  },
  {
    id: "station-indore-1",
    name: "Indore AB Road Charging Point",
    address: "AB Road, Indore, Madhya Pradesh",
    position: { lat: 22.7196, lng: 75.8577 },
    connectorType: "AC",
    status: "open",
    rating: 4.3,
  },
  {
    id: "station-bhopal-1",
    name: "Bhopal MP Nagar Hub",
    address: "MP Nagar Zone 1, Bhopal, Madhya Pradesh",
    position: { lat: 23.2599, lng: 77.4126 },
    connectorType: "DC",
    status: "unavailable",
    rating: 4.1,
  },
  {
    id: "station-kolkata-1",
    name: "Kolkata Bypass eHub",
    address: "EM Bypass, Kolkata, West Bengal",
    position: { lat: 22.5726, lng: 88.3639 },
    connectorType: "DC",
    status: "open",
    rating: 4.5,
  },
  {
    id: "station-bhubaneswar-1",
    name: "Bhubaneswar Smart City Charger",
    address: "Janpath Road, Bhubaneswar, Odisha",
    position: { lat: 20.2961, lng: 85.8245 },
    connectorType: "AC",
    status: "open",
    rating: 4.2,
  },
  {
    id: "station-guwahati-1",
    name: "Guwahati River Side Station",
    address: "Near Brahmaputra Riverside, Guwahati, Assam",
    position: { lat: 26.1445, lng: 91.7362 },
    connectorType: "DC",
    status: "open",
    rating: 4.2,
  },
  {
    id: "station-vijayawada-1",
    name: "Vijayawada Benz Circle Hub",
    address: "Benz Circle, Vijayawada, Andhra Pradesh",
    position: { lat: 16.5062, lng: 80.648 },
    connectorType: "DC",
    status: "open",
    rating: 4.3,
  },
  {
    id: "station-dwarka-1",
    name: "MCD Parking Sector 10",
    address: "Sector 10 MCD parking, Dwarka, New Delhi",
    position: { lat: 28.5795, lng: 77.0566 },
    connectorType: "DC",
    status: "unavailable",
    rating: 4.0,
  },
];

const shuffleStations = <T,>(items: T[]) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const STATIONS = shuffleStations(BASE_STATIONS);

const STATUS_META: Record<StationStatus, { label: string; className: string }> = {
  open: {
    label: "Open Now",
    className: "text-emerald-600",
  },
  unavailable: {
    label: "Unavailable",
    className: "text-red-500",
  },
};

const INDIA_CENTER: GeoPoint = { lat: 22.9734, lng: 78.6569 };
const INDIA_BOUNDS = {
  north: 37.6,
  south: 6.4,
  west: 68.1,
  east: 97.4,
};

const buttonFontStyle: CSSProperties = {
  fontFamily: "'TT Fors Trial', Inter, sans-serif",
  fontWeight: 500,
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
      longitude: "77.09472",
    },
    otherDetails: {
      timings: "12:00 am - 11:59 pm",
      workingDays: DEFAULT_WORKING_DAYS,
      contactNumber: "+91 9988776655",
      createdBy: "Anchal",
      stationIncharge: "Anchal",
      organizationType: "1c",
      createdAt: "17/02/2026 01:48 pm",
      lastModified: "17/03/2026 10:55 am",
    },
    amenities: ["local_hospital"],
  },
};

export default function FindChargersPage() {
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

  const markers = useMemo(
    () =>
      filteredStations.map((station) => ({
        id: station.id,
        position: station.position,
        title: station.name,
        subtitle: station.address,
        accentColor: station.status === "open" ? "#1d4ed8" : "#9ca3af",
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
        strictBounds: false,
      },
      styles: [
        {
          featureType: "administrative.country",
          elementType: "geometry.stroke",
          stylers: [{ visibility: "on" }, { color: "#1f2937" }, { weight: 1.2 }],
        },
        {
          featureType: "administrative.province",
          elementType: "geometry.stroke",
          stylers: [{ visibility: "on" }, { color: "#64748b" }, { weight: 0.8 }],
        },
      ],
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
        longitude: station.position.lng.toFixed(5),
      },
      otherDetails: {
        timings: "12:00 am - 11:59 pm",
        workingDays: DEFAULT_WORKING_DAYS,
        contactNumber: "+91 9000000000",
        createdBy: "Anchal",
        stationIncharge: "Anchal",
        organizationType: "1c",
        createdAt: "17/02/2026 01:48 pm",
        lastModified: "17/03/2026 10:55 am",
      },
      amenities: ["local_hospital"],
    };
  };
  return (
    <div className="w-full bg-slate-100">
      <section className="mx-auto max-w-[1920px]">
        <div className="grid min-h-[calc(100vh-84px)] grid-cols-1 lg:grid-cols-[420px_minmax(0,1fr)]">
          <aside className="border-b border-slate-200 bg-white lg:border-b-0 lg:border-r">
            <div className="px-5 pb-5 pt-6">
              <div className="relative">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                  size={20}
                />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search location..."
                  className="w-full border-b border-slate-300 bg-transparent py-2 pl-10 pr-2 text-base text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>

              <div className="mt-3 inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-500">
                EV Charging Stations
              </div>

              <div className="mt-5 space-y-3 overflow-y-auto pr-1 lg:max-h-[calc(100vh-210px)]">
                {filteredStations.length ? (
                  filteredStations.map((station) => {
                    const isSelected = station.id === selectedStation?.id;
                    const status = STATUS_META[station.status];
                    return (
                      <article
                        key={station.id}
                        onClick={() => setSelectedStationId(station.id)}
                        className={`cursor-pointer rounded-xl border p-3 transition ${
                          isSelected
                            ? "border-slate-900 bg-white shadow-md"
                            : "border-slate-200 bg-white shadow-sm hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-lg leading-tight font-semibold text-slate-900">
                              {station.name}
                            </h3>
                            <p className="mt-1 text-sm text-slate-500">{station.address}</p>
                          </div>
                          <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-800">
                            {station.connectorType}
                          </span>
                        </div>

                        <div className="mt-3 flex items-center gap-3">
                          <span className={`text-xs font-semibold ${status.className}`}>
                            {status.label}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-md bg-slate-900 px-1.5 py-0.5 text-xs font-semibold text-white">
                            <Star size={11} className="fill-current" />
                            {station.rating.toFixed(1)}
                          </span>
                        </div>

                        <div className="mt-3 flex items-center gap-2">
                          <a
                            href={buildGoogleMapsPlaceUrl(station.position, station.name)}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-medium text-slate-500 underline"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Open in Google Maps
                          </a>
                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              openDirections(station);
                            }}
                            className="ml-auto inline-flex items-center justify-center gap-1.5 rounded-mcn-lg bg-mcn-red px-3.5 py-1.5 text-xs text-mcn-text-inverse shadow-[0_10px_30px_rgba(229,0,0,0.22)] transition duration-fast ease-ease-out-standard hover:bg-mcn-red-hover"
                            style={buttonFontStyle}
                          >
                            Directions <ArrowRight size={14} />
                          </button>
                        </div>
                      </article>
                    );
                  })
                ) : (
                  <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
                    No stations match your search.
                  </div>
                )}
              </div>
            </div>
          </aside>

          <div className="relative min-h-[460px] lg:min-h-[calc(100vh-84px)]">
            <GoogleMap
              className="h-full min-h-[460px] rounded-none lg:min-h-[calc(100vh-84px)]"
              center={selectedStation?.position ?? INDIA_CENTER}
              zoom={selectedStation ? 7 : 5}
              markers={markers}
              selectedMarkerId={selectedStation?.id ?? null}
              autoFitToMarkers={selectedStation == null}
              onMarkerSelect={(marker) => setSelectedStationId(marker.id)}
              onInfoWindowDetailsClick={(marker) => {
                setSelectedStationId(marker.id);
                setDetailsStationId(marker.id);
              }}
              infoWindowDetailsLabel="View full details"
              options={mapOptions}
            />

            {detailsStation ? (
              <aside className="absolute left-4 top-8 z-20 w-[min(92vw,380px)] max-h-[calc(100%-96px)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{detailsStation.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{detailsStation.address}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDetailsStationId(null)}
                    className="rounded-md p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                    aria-label="Close details panel"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <div className="text-xs font-medium text-slate-500">Station ID</div>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <code className="text-xs font-semibold text-slate-900">
                      {getStationDetails(detailsStation).stationPublicId}
                    </code>
                    <button
                      type="button"
                      onClick={() =>
                        navigator.clipboard.writeText(
                          getStationDetails(detailsStation).stationPublicId
                        )
                      }
                      className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-xs text-slate-600 hover:bg-slate-100"
                    >
                      <Copy size={12} />
                      Copy
                    </button>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-slate-200 p-3">
                    <div className="text-xs text-slate-500">Grid connection power capacity</div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">
                      {getStationDetails(detailsStation).gridConnectionPowerCapacity}
                    </div>
                  </div>
                  <div className="rounded-lg border border-slate-200 p-3">
                    <div className="text-xs text-slate-500">Grid Phase</div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">
                      {getStationDetails(detailsStation).gridPhase}
                    </div>
                  </div>
                </div>

                <div className="mt-3 rounded-lg border border-slate-200 p-3">
                  <div className="text-xs text-slate-500">Hub Wallet Conversion Rate</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">
                    {getStationDetails(detailsStation).hubWalletConversionRate}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <MapPin size={13} />
                    Location
                  </div>
                  <div className="mt-2 space-y-1 rounded-lg border border-slate-200 p-3 text-sm text-slate-700">
                    <div><span className="font-medium text-slate-500">Address:</span> {getStationDetails(detailsStation).location.address}</div>
                    <div><span className="font-medium text-slate-500">Pin code:</span> {getStationDetails(detailsStation).location.pinCode}</div>
                    <div><span className="font-medium text-slate-500">City/Town:</span> {getStationDetails(detailsStation).location.cityTown}</div>
                    <div><span className="font-medium text-slate-500">State:</span> {getStationDetails(detailsStation).location.state}</div>
                    <div><span className="font-medium text-slate-500">Country:</span> {getStationDetails(detailsStation).location.country}</div>
                    <div><span className="font-medium text-slate-500">Latitude:</span> {getStationDetails(detailsStation).location.latitude}</div>
                    <div><span className="font-medium text-slate-500">Longitude:</span> {getStationDetails(detailsStation).location.longitude}</div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <Info size={13} />
                    Other Details
                  </div>
                  <div className="mt-2 space-y-2 rounded-lg border border-slate-200 p-3 text-sm text-slate-700">
                    <div><span className="font-medium text-slate-500">Timings:</span> {getStationDetails(detailsStation).otherDetails.timings}</div>
                    <div><span className="font-medium text-slate-500">Working days:</span> {getStationDetails(detailsStation).otherDetails.workingDays}</div>
                    <div className="inline-flex items-center gap-2">
                      <Phone size={14} className="text-slate-500" />
                      <span>{getStationDetails(detailsStation).otherDetails.contactNumber}</span>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <User size={14} className="text-slate-500" />
                      <span>
                        Created by: {getStationDetails(detailsStation).otherDetails.createdBy}
                      </span>
                    </div>
                    <div><span className="font-medium text-slate-500">Station Incharge:</span> {getStationDetails(detailsStation).otherDetails.stationIncharge}</div>
                    <div className="inline-flex items-center gap-2">
                      <Building2 size={14} className="text-slate-500" />
                      <span>
                        Organization Type: {getStationDetails(detailsStation).otherDetails.organizationType}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <CalendarDays size={14} className="text-slate-500" />
                      <span>
                        Created At: {getStationDetails(detailsStation).otherDetails.createdAt}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <CalendarDays size={14} className="text-slate-500" />
                      <span>
                        Last modified: {getStationDetails(detailsStation).otherDetails.lastModified}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Amenities
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {getStationDetails(detailsStation).amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => openDirections(detailsStation)}
                    className="inline-flex items-center justify-center gap-2 rounded-mcn-lg bg-mcn-red px-5 py-2.5 text-mt-down-1 text-mcn-text-inverse shadow-[0_10px_30px_rgba(229,0,0,0.22)] transition duration-fast ease-ease-out-standard hover:bg-mcn-red-hover"
                    style={buttonFontStyle}
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

