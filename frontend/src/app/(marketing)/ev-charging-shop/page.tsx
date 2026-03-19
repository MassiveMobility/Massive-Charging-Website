import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "EV Charging Shop",
  description:
    "Legacy EV charging shop route has been scaffolded for migration.",
  path: "/ev-charging-shop",
  noIndex: true
});

export default function EvChargingShopPage() {
  return (
    <MarketingRoutePlaceholder
      title="EV Charging Shop"
      routePath="/ev-charging-shop"
      description="Legacy EV charging shop route has been scaffolded for migration."
    />
  );
}
