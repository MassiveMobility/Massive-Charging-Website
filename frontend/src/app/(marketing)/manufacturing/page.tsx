import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/manufacturing" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "EV Charger Manufacturing",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "EV charger manufacturer India",
    "AC EV charger",
    "DC fast charger India",
    "Type-6 charger",
    "OCPP charger India"
  ]
});

export default function ManufacturingRoutePage() {
  return <MarketingContentPage content={pageContent} />;
}
