import { buildPageMetadata } from "@/lib/seo/metadata";
import { ChargingStationsMapComingSoonPage } from "@/features/marketing/components/charging-stations-map-coming-soon-page";

const routePath = "/charging-scootations-map" as const;

export const metadata = buildPageMetadata({
  title: "Charging Scootations Map | Coming Soon",
  description:
    "The Massive Charging station map is temporarily unavailable while we ship an upgraded experience.",
  path: routePath
});

export default function ChargingScootationsMapRoutePage() {
  return <ChargingStationsMapComingSoonPage />;
}
