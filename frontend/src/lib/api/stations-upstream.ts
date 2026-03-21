import "server-only";

import { getServerEnv } from "@/lib/env/server";

export type StationQueryPayload = {
  lat: number;
  lon: number;
  max_dist: number;
  search?: string;
};

class UpstreamStationsError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "UpstreamStationsError";
    this.status = status;
  }
}

const asRecord = (value: unknown): Record<string, unknown> | null =>
  value !== null && typeof value === "object" ? (value as Record<string, unknown>) : null;

const getStationsApiConfig = () => {
  const env = getServerEnv();
  const baseUrl = env.STATIONS_API_BASE_URL?.trim();
  const bearerToken = env.STATIONS_API_BEARER_TOKEN?.trim();
  const xApiKey = env.STATIONS_API_X_API?.trim();

  if (!baseUrl) {
    throw new UpstreamStationsError(
      "Missing STATIONS_API_BASE_URL. Add it to frontend/.env to enable stations API integration.",
      500
    );
  }

  if (!bearerToken) {
    throw new UpstreamStationsError(
      "Missing STATIONS_API_BEARER_TOKEN. Add it to frontend/.env to enable stations API integration.",
      500
    );
  }

  if (!xApiKey) {
    throw new UpstreamStationsError(
      "Missing STATIONS_API_X_API. Add it to frontend/.env to enable stations API integration.",
      500
    );
  }

  return { baseUrl, bearerToken, xApiKey };
};

const buildHeaders = (bearerToken: string, xApiKey: string): HeadersInit => ({
  "Content-Type": "application/json",
  "x-api": xApiKey,
  "x-api-key": xApiKey,
  Authorization: `Bearer ${bearerToken}`
});

const extractErrorMessage = (payload: unknown): string | null => {
  const record = asRecord(payload);
  if (!record) return null;

  const message = record.message;
  if (typeof message === "string" && message.trim().length > 0) {
    return message.trim();
  }

  const error = record.error;
  if (typeof error === "string" && error.trim().length > 0) {
    return error.trim();
  }

  return null;
};

const callUpstreamJson = async (input: string, init: RequestInit): Promise<unknown> => {
  const response = await fetch(input, {
    ...init,
    cache: "no-store"
  });

  const text = await response.text();
  let payload: unknown = null;

  if (text.trim().length > 0) {
    try {
      payload = JSON.parse(text);
    } catch {
      payload = text;
    }
  }

  if (!response.ok) {
    const errorMessage =
      extractErrorMessage(payload) ?? `Stations upstream request failed with status ${response.status}.`;
    throw new UpstreamStationsError(errorMessage, response.status);
  }

  return payload;
};

const setGeoQueryParams = (url: URL, payload: StationQueryPayload) => {
  url.searchParams.set("lat", String(payload.lat));
  url.searchParams.set("lon", String(payload.lon));
  url.searchParams.set("max_dist", String(payload.max_dist));
  if (payload.search) {
    url.searchParams.set("search", payload.search);
  }
};

/**
 * Fetches nearby station collection from the upstream API.
 */
export async function fetchNearbyStationsFromUpstream(payload: StationQueryPayload) {
  const { baseUrl, bearerToken, xApiKey } = getStationsApiConfig();
  const upstreamUrl = new URL("/api/web/stations", baseUrl);

  return callUpstreamJson(upstreamUrl.toString(), {
    method: "POST",
    headers: buildHeaders(bearerToken, xApiKey),
    body: JSON.stringify(payload)
  });
}

/**
 * Fetches a single station from the upstream API. It tries GET (with query params)
 * first, then falls back to POST body for APIs that validate geo params in body.
 */
export async function fetchStationByIdFromUpstream(
  stationId: string,
  payload: StationQueryPayload
) {
  const { baseUrl, bearerToken, xApiKey } = getStationsApiConfig();
  const upstreamUrl = new URL(`/api/web/station/${encodeURIComponent(stationId)}`, baseUrl);
  setGeoQueryParams(upstreamUrl, payload);

  try {
    return await callUpstreamJson(upstreamUrl.toString(), {
      method: "GET",
      headers: buildHeaders(bearerToken, xApiKey)
    });
  } catch (error) {
    if (
      error instanceof UpstreamStationsError &&
      (error.status === 400 || error.status === 405 || error.status === 415)
    ) {
      return callUpstreamJson(upstreamUrl.toString(), {
        method: "POST",
        headers: buildHeaders(bearerToken, xApiKey),
        body: JSON.stringify(payload)
      });
    }

    throw error;
  }
}

const readFiniteNumber = (value: unknown): number | null => {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }

  return null;
};

/**
 * Validates station geo query payload used by both list and details endpoints.
 */
export const parseStationQueryPayload = (payload: unknown): StationQueryPayload => {
  const body = asRecord(payload);
  if (!body) {
    throw new UpstreamStationsError("Request body must be a JSON object.", 400);
  }

  const lat = readFiniteNumber(body.lat);
  const lon = readFiniteNumber(body.lon);
  const maxDist = readFiniteNumber(body.max_dist);
  const searchRaw = body.search;
  const search =
    typeof searchRaw === "string" && searchRaw.trim().length > 0
      ? searchRaw.trim()
      : undefined;

  if (lat === null || lon === null || maxDist === null) {
    throw new UpstreamStationsError("lat, lon, and max_dist must be valid numbers.", 400);
  }

  if (maxDist <= 0) {
    throw new UpstreamStationsError("max_dist must be greater than 0.", 400);
  }

  return {
    lat,
    lon,
    max_dist: maxDist,
    ...(search ? { search } : {})
  };
};

export const isUpstreamStationsError = (error: unknown): error is UpstreamStationsError =>
  error instanceof UpstreamStationsError;
