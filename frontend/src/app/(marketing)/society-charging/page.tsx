import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "Society Charging",
  description:
    "Legacy society-charging route has been scaffolded for migration.",
  path: "/society-charging",
  noIndex: true
});

export default function SocietyChargingPage() {
  return (
    <MarketingRoutePlaceholder
      title="Society Charging"
      routePath="/society-charging"
      description="Legacy society-charging route has been scaffolded for migration."
    />
  );
}
