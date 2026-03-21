import { NextResponse } from "next/server";

import {
  fetchStationByIdFromUpstream,
  isUpstreamStationsError,
  parseStationQueryPayload
} from "@/lib/api/stations-upstream";

export const dynamic = "force-dynamic";

/**
 * Internal proxy endpoint for station details by id.
 * The browser calls this route; server forwards request to upstream with bearer auth.
 */
export async function POST(
  request: Request,
  context: { params: { id: string } }
) {
  const stationId = context.params.id?.trim();

  if (!stationId) {
    return NextResponse.json({ message: "Station id is required." }, { status: 400 });
  }

  try {
    const rawBody = (await request.json()) as unknown;
    const payload = parseStationQueryPayload(rawBody);
    const upstreamPayload = await fetchStationByIdFromUpstream(stationId, payload);
    return NextResponse.json(upstreamPayload, { status: 200 });
  } catch (error) {
    if (isUpstreamStationsError(error)) {
      return NextResponse.json({ message: error.message }, { status: error.status });
    }

    return NextResponse.json(
      { message: "Unable to fetch station details right now." },
      { status: 500 }
    );
  }
}
