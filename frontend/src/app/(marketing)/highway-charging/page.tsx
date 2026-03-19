import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "Highway Charging",
  description:
    "Legacy highway charging route has been scaffolded for migration.",
  path: "/highway-charging",
  noIndex: true
});

export default function HighwayChargingPage() {
  return (
    <MarketingRoutePlaceholder
      title="Highway Charging"
      routePath="/highway-charging"
      description="Legacy highway charging route has been scaffolded for migration."
    />
  );
}
