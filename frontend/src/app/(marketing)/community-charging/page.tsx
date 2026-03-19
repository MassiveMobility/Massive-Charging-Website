import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "Community Charging",
  description:
    "Legacy community-charging route has been scaffolded for migration.",
  path: "/community-charging",
  noIndex: true
});

export default function CommunityChargingPage() {
  return (
    <MarketingRoutePlaceholder
      title="Community Charging"
      routePath="/community-charging"
      description="Legacy community-charging route has been scaffolded for migration."
    />
  );
}
