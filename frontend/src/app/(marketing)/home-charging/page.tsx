import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "Home Charging",
  description:
    "Legacy home-charging landing route has been scaffolded for migration.",
  path: "/home-charging",
  noIndex: true
});

export default function HomeChargingPage() {
  return (
    <MarketingRoutePlaceholder
      title="Home Charging"
      routePath="/home-charging"
      description="Legacy home-charging landing route has been scaffolded for migration."
    />
  );
}
