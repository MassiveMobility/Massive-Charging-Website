import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "Pricing & Offers",
  description:
    "Legacy pricing and offers route has been scaffolded for migration.",
  path: "/plans-offers",
  noIndex: true
});

export default function PlansOffersPage() {
  return (
    <MarketingRoutePlaceholder
      title="Pricing & Offers"
      routePath="/plans-offers"
      description="Legacy pricing and offers route has been scaffolded for migration."
    />
  );
}
