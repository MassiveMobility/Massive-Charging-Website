import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/marketplace" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "EV Chargers Marketplace",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "buy EV charger India",
    "EV charging hardware",
    "AC charger price India",
    "DC fast charger India",
    "EV charger supplier"
  ]
});

export default function MarketplaceRoutePage() {
  return <MarketingContentPage content={pageContent} />;
}
