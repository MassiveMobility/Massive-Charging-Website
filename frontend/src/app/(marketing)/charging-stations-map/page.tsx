import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "Charging Stations Map",
  description:
    "Legacy charging-station discovery route has been scaffolded for migration.",
  path: "/charging-stations-map",
  noIndex: true
});

export default function ChargingStationsMapPage() {
  return (
    <MarketingRoutePlaceholder
      title="Charging Stations Map"
      routePath="/charging-stations-map"
      description="Legacy charging-station discovery route has been scaffolded for migration."
    />
  );
}
