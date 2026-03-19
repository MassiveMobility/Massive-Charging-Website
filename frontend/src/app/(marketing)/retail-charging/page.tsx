import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "Retail Charging",
  description:
    "Legacy retail charging route has been scaffolded for migration.",
  path: "/retail-charging",
  noIndex: true
});

export default function RetailChargingPage() {
  return (
    <MarketingRoutePlaceholder
      title="Retail Charging"
      routePath="/retail-charging"
      description="Legacy retail charging route has been scaffolded for migration."
    />
  );
}
