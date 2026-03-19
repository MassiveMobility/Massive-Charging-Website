import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "Hospital Charging",
  description:
    "Legacy hospital charging route has been scaffolded for migration.",
  path: "/hospital-charging",
  noIndex: true
});

export default function HospitalChargingPage() {
  return (
    <MarketingRoutePlaceholder
      title="Hospital Charging"
      routePath="/hospital-charging"
      description="Legacy hospital charging route has been scaffolded for migration."
    />
  );
}
