import { buildPageMetadata } from "@/lib/seo/metadata";
import { EvTripReportPage } from "@/features/marketing/components/ev-trip-report-page";

const routePath = "/EV-Trip-Report" as const;

export const metadata = buildPageMetadata({
  title: "EV Trip Report",
  description:
    "Field insights from real EV travel episodes covering charger discovery, reliability, and route planning behavior.",
  path: routePath
});

export default function EVTripReportPage() {
  return <EvTripReportPage />;
}
