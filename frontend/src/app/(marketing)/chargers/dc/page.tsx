import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/chargers/dc" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "DC Fast Chargers 30–240 kW | Commercial EV Charging Hardware in India",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "DC fast charger",
    "DC EV charger",
    "commercial DC charger",
    "EV fast charging station",
    "high-power charger",
    "fleet charging",
    "highway charger",
    "DC charger India",
    "CCS-2 charger",
    "OCPP charger"
  ]
});

export default function ChargersDcRoutePage() {
  return <MarketingContentPage content={pageContent} />;
}
