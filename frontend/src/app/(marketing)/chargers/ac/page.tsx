import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/chargers/ac" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "AC EV Chargers",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "AC EV charger",
    "AC charging station",
    "7.4kW charger",
    "22kW charger",
    "Type-2 charger",
    "home EV charger India",
    "commercial AC charging"
  ]
});

export default function ChargersAcRoutePage() {
  return <MarketingContentPage content={pageContent} />;
}
