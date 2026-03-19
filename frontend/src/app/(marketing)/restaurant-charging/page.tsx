import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "Restaurant Charging",
  description:
    "Legacy restaurant charging route has been scaffolded for migration.",
  path: "/restaurant-charging",
  noIndex: true
});

export default function RestaurantChargingPage() {
  return (
    <MarketingRoutePlaceholder
      title="Restaurant Charging"
      routePath="/restaurant-charging"
      description="Legacy restaurant charging route has been scaffolded for migration."
    />
  );
}
