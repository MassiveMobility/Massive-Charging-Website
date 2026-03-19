import { buildPageMetadata } from "@/lib/seo/metadata";
import { UpiChargingPage } from "@/features/marketing/components/upi-charging-page";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";

const routePath = "/upi-charging" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "UPI Charging",
  description: pageContent.description,
  path: routePath
});

export default function UpiChargingRoutePage() {
  return <UpiChargingPage />;
}
