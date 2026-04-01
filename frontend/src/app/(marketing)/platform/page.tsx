import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/platform" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "Operator Platform",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "EV charging platform",
    "white-label charging CMS",
    "charging station management",
    "operator dashboard",
    "OCPI",
    "UPI charging"
  ]
});

export default function PlatformRoutePage() {
  return <MarketingContentPage content={pageContent} />;
}
