import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "EV Charging Station Business",
  description:
    "Legacy EV charging station business route has been scaffolded for migration.",
  path: "/ev-charging-station-business",
  noIndex: true
});

export default function EvChargingStationBusinessPage() {
  return (
    <MarketingRoutePlaceholder
      title="EV Charging Station Business"
      routePath="/ev-charging-station-business"
      description="Legacy EV charging station business route has been scaffolded for migration."
    />
  );
}
