import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "Fleet Charging",
  description:
    "Legacy fleet charging route has been scaffolded for migration.",
  path: "/fleet-charging",
  noIndex: true
});

export default function FleetChargingPage() {
  return (
    <MarketingRoutePlaceholder
      title="Fleet Charging"
      routePath="/fleet-charging"
      description="Legacy fleet charging route has been scaffolded for migration."
    />
  );
}
