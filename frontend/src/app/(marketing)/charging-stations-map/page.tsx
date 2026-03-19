import { buildPageMetadata } from "@/lib/seo/metadata";
import { ChargingStationsExplorer } from "@/features/marketing/components/charging-stations-explorer";

const routePath = "/charging-stations-map" as const;

export const metadata = buildPageMetadata({
  title: "Charging Stations Map",
  description:
    "Search and browse EV charging stations with connector type, status, and route direction support.",
  path: routePath
});

export default function ChargingStationsMapPage() {
  return <ChargingStationsExplorer />;
}
