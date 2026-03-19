import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "Apartment Resident Charging",
  description:
    "Legacy apartment-resident charging route has been scaffolded for migration.",
  path: "/apartment-resident",
  noIndex: true
});

export default function ApartmentResidentPage() {
  return (
    <MarketingRoutePlaceholder
      title="Apartment Resident Charging"
      routePath="/apartment-resident"
      description="Legacy apartment-resident charging route has been scaffolded for migration."
    />
  );
}
