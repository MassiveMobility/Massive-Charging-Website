import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "Charging Guide",
  description:
    "Legacy charging guide index route has been scaffolded for migration.",
  path: "/charging-guide",
  noIndex: true
});

export default function ChargingGuidePage() {
  return (
    <MarketingRoutePlaceholder
      title="Charging Guide"
      routePath="/charging-guide"
      description="Legacy charging guide index route has been scaffolded for migration."
    />
  );
}
