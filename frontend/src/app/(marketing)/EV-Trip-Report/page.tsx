import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "EV Trip Report",
  description:
    "Legacy EV trip report route has been scaffolded for migration.",
  path: "/EV-Trip-Report",
  noIndex: true
});

export default function EVTripReportPage() {
  return (
    <MarketingRoutePlaceholder
      title="EV Trip Report"
      routePath="/EV-Trip-Report"
      description="Legacy EV trip report route has been scaffolded for migration."
    />
  );
}
