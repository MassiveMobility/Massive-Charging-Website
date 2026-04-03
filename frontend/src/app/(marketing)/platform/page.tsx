import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/platform" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "EV Charging Management Platform for Scalable Charging Networks",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "EV charging management platform",
    "EV charging software",
    "EV charging CMS",
    "OCPP platform",
    "OCPI roaming",
    "charging station management system",
    "white-label charging platform",
    "operator dashboard",
    "EV charging backend"
  ]
});

export default function PlatformRoutePage() {
  return <MarketingContentPage content={pageContent} />;
}
