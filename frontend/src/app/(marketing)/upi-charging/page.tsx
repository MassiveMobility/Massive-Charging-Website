import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "UPI Charging",
  description:
    "Legacy UPI charging route has been scaffolded for migration.",
  path: "/upi-charging",
  noIndex: true
});

export default function UpiChargingPage() {
  return (
    <MarketingRoutePlaceholder
      title="UPI Charging"
      routePath="/upi-charging"
      description="Legacy UPI charging route has been scaffolded for migration."
    />
  );
}
