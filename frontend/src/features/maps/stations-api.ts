import type { GeoPoint } from "@/features/maps/types";

export type StationStatus = "open" | "unavailable";
export type ConnectorType = "AC" | "DC";

export type ChargingStation = {
  id: string;
  name: string;
  address: string;
  position: GeoPoint;
  connectorType: ConnectorType;
  status: StationStatus;
  rating: number;
};

export type StationPanelDetails = {
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

export type StationQueryPayload = {
  lat: number;
  lon: number;
  max_dist: number;
  search?: string;
};

/** All station requests go through the internal Next.js proxy so that
 *  secrets (bearer token, x-api-key) stay on the server. */

const DEFAULT_WORKING_DAYS =
  "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday";

const asRecord = (value: unknown): Record<string, unknown> | null =>
  value !== null && typeof value === "object" ? (value as Record<string, unknown>) : null;

const readFirstString = (...values: unknown[]): string | null => {
  for (const value of values) {
    if (typeof value === "string") {
      const trimmed = value.trim();
      if (trimmed.length > 0) return trimmed;
    }
  }
  return null;
};

const readFirstNumber = (...values: unknown[]): number | null => {
  for (const value of values) {
    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }

    if (typeof value === "string") {
      const parsed = Number(value);
      if (Number.isFinite(parsed)) {
        return parsed;
      }
    }
  }

  return null;
};

const toStringArray = (value: unknown): string[] => {
  if (!Array.isArray(value)) return [];
  return value
    .map((entry) => (typeof entry === "string" ? entry.trim() : ""))
    .filter((entry) => entry.length > 0);
};

const unwrapDataLayer = (payload: unknown): unknown => {
  const payloadRecord = asRecord(payload);
  if (!payloadRecord) return payload;
  return payloadRecord.data ?? payloadRecord.result ?? payloadRecord;
};

const extractCollection = (payload: unknown): unknown[] => {
  const unwrapped = unwrapDataLayer(payload);
  if (Array.isArray(unwrapped)) return unwrapped;

  const record = asRecord(unwrapped);
  if (!record) return [];

  const candidates = [record.stations, record.items, record.docs, record.results];
  for (const candidate of candidates) {
    if (Array.isArray(candidate)) {
      return candidate;
    }
  }

  return [];
};

const normalizeConnectorType = (value: unknown): ConnectorType => {
  const normalized = readFirstString(value)?.toUpperCase() ?? "";
  return normalized.includes("DC") ? "DC" : "AC";
};

const normalizeStatus = (value: unknown): StationStatus => {
  if (typeof value === "boolean") {
    return value ? "open" : "unavailable";
  }

  const normalized = readFirstString(value)?.toLowerCase() ?? "";
  if (
    normalized.includes("open") ||
    normalized.includes("available") ||
    normalized === "active"
  ) {
    return "open";
  }

  return "unavailable";
};

const buildStationAddress = (station: Record<string, unknown>): string => {
  const location = asRecord(station.location);
  const city = readFirstString(station.cityTown, station.city, location?.cityTown, location?.city);
  const state = readFirstString(station.state, location?.state);
  const country = readFirstString(station.country, location?.country);

  const coreAddress =
    readFirstString(
      station.address,
      station.fullAddress,
      station.locationAddress,
      location?.address,
      location?.fullAddress
    ) ?? "Address unavailable";

  const locationSuffix = [city, state, country].filter(Boolean).join(", ");
  if (!locationSuffix) return coreAddress;

  if (coreAddress.toLowerCase().includes(locationSuffix.toLowerCase())) {
    return coreAddress;
  }

  return `${coreAddress}, ${locationSuffix}`;
};

const extractLatLon = (station: Record<string, unknown>): { lat: number; lon: number } | null => {
  const location = asRecord(station.location);
  const loc = asRecord(station.loc);
  const coordinates = asRecord(station.coordinates);
  const geo = asRecord(station.geo);

  const locationCoordinates = Array.isArray(location?.coordinates)
    ? location.coordinates
    : null;
  const locCoordinates = Array.isArray(loc?.coordinates) ? loc.coordinates : null;

  const lat = readFirstNumber(
    locationCoordinates?.[1],
    locCoordinates?.[1],
    station.lat,
    station.latitude,
    station.locationLat,
    location?.lat,
    location?.latitude,
    loc?.lat,
    loc?.latitude,
    coordinates?.lat,
    coordinates?.latitude,
    geo?.lat,
    geo?.latitude
  );

  const lon = readFirstNumber(
    locationCoordinates?.[0],
    locCoordinates?.[0],
    station.lon,
    station.lng,
    station.longitude,
    station.locationLon,
    location?.lon,
    location?.lng,
    location?.longitude,
    loc?.lon,
    loc?.lng,
    loc?.longitude,
    coordinates?.lon,
    coordinates?.lng,
    coordinates?.longitude,
    geo?.lon,
    geo?.lng,
    geo?.longitude
  );

  if (lat === null || lon === null) return null;
  return { lat, lon };
};

const buildSummaryFromRaw = (entry: unknown, index: number): ChargingStation | null => {
  const station = asRecord(entry);
  if (!station) return null;

  const coords = extractLatLon(station);
  if (!coords) return null;

  const id =
    readFirstString(station._id, station.id, station.stationPublicId, station.stationId) ??
    `station-${index + 1}`;

  const name =
    readFirstString(station.stationName, station.name, station.title) ?? `Charging Station ${index + 1}`;

  const chargerType = normalizeConnectorType(
    station.connectorType ?? station.chargingType ?? station.chargeType
  );

  const status = normalizeStatus(
    station.status ?? station.availabilityStatus ?? station.openNow ?? station.isAvailable
  );

  const rating = readFirstNumber(station.rating, station.avgRating, station.userRating) ?? 0;

  return {
    id,
    name,
    address: buildStationAddress(station),
    position: { lat: coords.lat, lng: coords.lon },
    connectorType: chargerType,
    status,
    rating
  };
};

const extractPrimaryRecord = (payload: unknown): Record<string, unknown> | null => {
  const unwrapped = unwrapDataLayer(payload);
  const direct = asRecord(unwrapped);
  if (direct) return direct;

  if (Array.isArray(unwrapped)) {
    return asRecord(unwrapped[0]);
  }

  return null;
};

const formatTimeValue = (value: unknown, fallback: string) =>
  readFirstString(value) ?? fallback;

const formatDateValue = (value: unknown, fallback: string): string => {
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (trimmed.length > 0) return trimmed;
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    const date = new Date(value);
    if (!Number.isNaN(date.valueOf())) {
      return date.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
    }
  }

  return fallback;
};

export const buildFallbackStationDetails = (station: ChargingStation): StationPanelDetails => {
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
      contactNumber: "-",
      createdBy: "-",
      stationIncharge: "-",
      organizationType: "1c",
      createdAt: "-",
      lastModified: "-"
    },
    amenities: []
  };
};

const toPanelDetails = (payload: unknown, fallbackStation: ChargingStation): StationPanelDetails => {
  const fallback = buildFallbackStationDetails(fallbackStation);
  const station = extractPrimaryRecord(payload);
  if (!station) return fallback;

  const location = asRecord(station.location);
  const otherDetails = asRecord(station.otherDetails);

  const lat = readFirstNumber(station.lat, station.latitude, location?.lat, location?.latitude);
  const lon = readFirstNumber(
    station.lon,
    station.lng,
    station.longitude,
    location?.lon,
    location?.lng,
    location?.longitude
  );

  return {
    stationPublicId:
      readFirstString(station.stationPublicId, station._id, station.id, station.stationId) ??
      fallback.stationPublicId,
    gridConnectionPowerCapacity:
      readFirstString(station.gridConnectionPowerCapacity, station.gridPowerCapacity) ??
      fallback.gridConnectionPowerCapacity,
    gridPhase: readFirstString(station.gridPhase) ?? fallback.gridPhase,
    hubWalletConversionRate:
      readFirstString(station.hubWalletConversionRate) ?? fallback.hubWalletConversionRate,
    location: {
      address:
        readFirstString(station.address, location?.address, location?.fullAddress) ??
        fallback.location.address,
      pinCode: readFirstString(station.pinCode, location?.pinCode) ?? fallback.location.pinCode,
      cityTown: readFirstString(station.cityTown, station.city, location?.cityTown, location?.city) ??
        fallback.location.cityTown,
      state: readFirstString(station.state, location?.state) ?? fallback.location.state,
      country: readFirstString(station.country, location?.country) ?? fallback.location.country,
      latitude: lat?.toFixed(6) ?? fallback.location.latitude,
      longitude: lon?.toFixed(6) ?? fallback.location.longitude
    },
    otherDetails: {
      timings: formatTimeValue(station.timings ?? otherDetails?.timings, fallback.otherDetails.timings),
      workingDays:
        formatTimeValue(
          station.workingDays ?? otherDetails?.workingDays,
          fallback.otherDetails.workingDays
        ),
      contactNumber:
        readFirstString(station.contactNumber, otherDetails?.contactNumber) ??
        fallback.otherDetails.contactNumber,
      createdBy:
        readFirstString(station.createdBy, otherDetails?.createdBy) ?? fallback.otherDetails.createdBy,
      stationIncharge:
        readFirstString(station.stationIncharge, otherDetails?.stationIncharge) ??
        fallback.otherDetails.stationIncharge,
      organizationType:
        readFirstString(station.organizationType, otherDetails?.organizationType) ??
        fallback.otherDetails.organizationType,
      createdAt: formatDateValue(
        station.createdAt ?? otherDetails?.createdAt,
        fallback.otherDetails.createdAt
      ),
      lastModified: formatDateValue(
        station.lastModified ?? station.updatedAt ?? otherDetails?.lastModified,
        fallback.otherDetails.lastModified
      )
    },
    amenities:
      toStringArray(station.amenities).length > 0
        ? toStringArray(station.amenities)
        : fallback.amenities
  };
};

const getErrorMessageFromPayload = (payload: unknown): string | null => {
  const record = asRecord(payload);
  if (!record) return null;

  const message = readFirstString(record.message, record.error);
  if (message) return message;

  const dataRecord = asRecord(record.data);
  return dataRecord ? readFirstString(dataRecord.message, dataRecord.error) : null;
};

const requestStationsApi = async (
  proxyPath: string,
  payload: StationQueryPayload,
  signal?: AbortSignal
) => {
  const response = await fetch(proxyPath, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: signal ?? null
  });

  const responsePayload = (await response.json().catch(() => null)) as unknown;

  if (!response.ok) {
    const message =
      getErrorMessageFromPayload(responsePayload) ??
      "Stations service request failed. Please try again.";
    throw new Error(message);
  }

  return responsePayload;
};

/**
 * Fetches nearby stations via internal Next.js proxy route and normalizes output for UI rendering.
 */
export async function fetchNearbyStations(
  payload: StationQueryPayload,
  signal?: AbortSignal
): Promise<ChargingStation[]> {
  const responsePayload = await requestStationsApi("/api/stations", payload, signal);
  return extractCollection(responsePayload)
    .map((entry, index) => buildSummaryFromRaw(entry, index))
    .filter((entry): entry is ChargingStation => entry !== null);
}

/**
 * Fetches station details by id via internal proxy route and maps response to drawer data model.
 */
export async function fetchStationDetails(
  stationId: string,
  payload: StationQueryPayload,
  fallbackStation: ChargingStation,
  signal?: AbortSignal
): Promise<StationPanelDetails> {
  const responsePayload = await requestStationsApi(
    `/api/stations/${encodeURIComponent(stationId)}`,
    payload,
    signal
  );
  return toPanelDetails(responsePayload, fallbackStation);
}
