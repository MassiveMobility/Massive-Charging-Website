import { buildPageMetadata } from "@/lib/seo/metadata";
import { ChargingStationsExplorer } from "@/features/marketing/components/charging-stations-explorer";

const routePath = "/charging-stations-map" as const;

export const metadata = buildPageMetadata({
  title: "Find EV Charging Stations Across India",
  description:
    "Discover nearby EV charging stations, view live map locations, and open turn-by-turn directions with Massive Charging.",
  path: routePath
});

export default function ChargingStationsMapPage() {
  return <ChargingStationsExplorer />;
}
