import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/for/cpos" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "For Charging Point Operators",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "CPO",
    "charging point operator",
    "EV charging network",
    "OCPI",
    "charging CMS",
    "UPI charging",
    "Gridwatch"
  ]
});

export default function ForCposRoutePage() {
  return <MarketingContentPage content={pageContent} />;
}
