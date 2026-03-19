import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "EV Cars Catalogue",
  description:
    "Legacy charging-guide EV cars route has been scaffolded for migration.",
  path: "/charging-guide/ev-cars",
  noIndex: true
});

export default function ChargingGuideEvCarsPage() {
  return (
    <MarketingRoutePlaceholder
      title="EV Cars Catalogue"
      routePath="/charging-guide/ev-cars"
      description="Legacy charging-guide EV cars route has been scaffolded for migration."
    />
  );
}
