import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/franchise" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "EV Charging Franchise",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "EV charging franchise India",
    "EV charging station business",
    "Massive Charging franchise",
    "EV station investment",
    "charging station franchise model"
  ]
});

export default function FranchiseRoutePage() {
  return <MarketingContentPage content={pageContent} />;
}
