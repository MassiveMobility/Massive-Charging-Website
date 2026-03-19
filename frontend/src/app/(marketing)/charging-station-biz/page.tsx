import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "Charging Station Biz",
  description:
    "Legacy charging station business menu route has been scaffolded for migration.",
  path: "/charging-station-biz",
  noIndex: true
});

export default function ChargingStationBizPage() {
  return (
    <MarketingRoutePlaceholder
      title="Charging Station Biz"
      routePath="/charging-station-biz"
      description="Legacy charging station business menu route has been scaffolded for migration."
    />
  );
}
