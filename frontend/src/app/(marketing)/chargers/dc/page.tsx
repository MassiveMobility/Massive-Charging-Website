import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/chargers/dc" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "DC Fast Chargers",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "DC fast charger",
    "DC EV charger India",
    "commercial EV charger",
    "public charging station",
    "highway charger",
    "fleet charging"
  ]
});

export default function ChargersDcRoutePage() {
  return <MarketingContentPage content={pageContent} />;
}
