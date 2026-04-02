import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/for/oems" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "For Vehicle OEMs",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "EV OEM charging partner",
    "vehicle OEM charging infrastructure",
    "OEM app charging integration",
    "multi-CPO roaming",
    "EV charging ecosystem India"
  ]
});

export default function ForOemsRoutePage() {
  return <MarketingContentPage content={pageContent} />;
}
