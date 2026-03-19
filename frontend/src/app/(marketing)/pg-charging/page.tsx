import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "PG Charging",
  description:
    "Legacy PG charging route has been scaffolded for migration.",
  path: "/pg-charging",
  noIndex: true
});

export default function PgChargingPage() {
  return (
    <MarketingRoutePlaceholder
      title="PG Charging"
      routePath="/pg-charging"
      description="Legacy PG charging route has been scaffolded for migration."
    />
  );
}
