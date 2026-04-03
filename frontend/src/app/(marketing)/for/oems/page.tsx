import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/for/oems" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "EV Charging Ecosystem Partner for OEMs | Massive Charging",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "EV charging solutions for OEMs",
    "OEM charging ecosystem partner",
    "OEM app charging integration",
    "multi-CPO charging integration",
    "home charger installation for EV OEMs",
    "charging analytics for OEMs"
  ]
});

export default function ForOemsRoutePage() {
  return <MarketingContentPage content={pageContent} />;
}
