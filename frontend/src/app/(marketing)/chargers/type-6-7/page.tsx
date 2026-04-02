import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/chargers/type-6-7" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "Type-6 & Type-7 EV Chargers",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "Type-6 charger",
    "Type-7 charger",
    "2-wheeler EV charger",
    "3-wheeler EV charger",
    "IEC 62196-2-6",
    "IS 17017-2-6",
    "two-wheeler charging India"
  ]
});

export default function ChargersType67RoutePage() {
  return <MarketingContentPage content={pageContent} />;
}
