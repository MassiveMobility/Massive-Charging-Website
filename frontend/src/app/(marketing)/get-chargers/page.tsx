import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "Get Chargers",
  description:
    "Legacy charger inquiry route has been scaffolded for migration.",
  path: "/get-chargers",
  noIndex: true
});

export default function GetChargersPage() {
  return (
    <MarketingRoutePlaceholder
      title="Get Chargers"
      routePath="/get-chargers"
      description="Legacy charger inquiry route has been scaffolded for migration."
    />
  );
}
