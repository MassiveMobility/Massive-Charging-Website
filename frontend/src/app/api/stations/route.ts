import { NextResponse } from "next/server";

import {
  fetchNearbyStationsFromUpstream,
  isUpstreamStationsError,
  parseStationQueryPayload
} from "@/lib/api/stations-upstream";

export const dynamic = "force-dynamic";

/**
 * Internal proxy endpoint for nearby stations.
 * Keeps bearer token on the server and prevents exposing secrets to browser code.
 */
export async function POST(request: Request) {
  try {
    const rawBody = (await request.json()) as unknown;
    const payload = parseStationQueryPayload(rawBody);
    const upstreamPayload = await fetchNearbyStationsFromUpstream(payload);
    return NextResponse.json(upstreamPayload, { status: 200 });
  } catch (error) {
    if (isUpstreamStationsError(error)) {
      return NextResponse.json({ message: error.message }, { status: error.status });
    }

    return NextResponse.json(
      { message: "Unable to fetch nearby charging stations right now." },
      { status: 500 }
    );
  }
}
