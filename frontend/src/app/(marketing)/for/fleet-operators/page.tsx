import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/for/fleet-operators" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "EV Charging Solutions for Fleet Operators | Massive Charging",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "EV charging solutions for fleet operators",
    "fleet EV charging infrastructure",
    "captive charging partner",
    "fleet charging management",
    "EV fleet charging platform",
    "corporate wallet for EV fleets",
    "depot charging solutions"
  ]
});

export default function ForFleetOperatorsRoutePage() {
  return <MarketingContentPage content={pageContent} />;
}
