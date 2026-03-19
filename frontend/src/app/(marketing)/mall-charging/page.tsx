import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "Mall Charging",
  description:
    "Legacy mall charging route has been scaffolded for migration.",
  path: "/mall-charging",
  noIndex: true
});

export default function MallChargingPage() {
  return (
    <MarketingRoutePlaceholder
      title="Mall Charging"
      routePath="/mall-charging"
      description="Legacy mall charging route has been scaffolded for migration."
    />
  );
}
