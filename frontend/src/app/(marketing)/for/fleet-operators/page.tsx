import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/for/fleet-operators" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "For Fleet Operators",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "fleet EV charging",
    "captive charging infrastructure",
    "fleet charging management",
    "corporate EV charging",
    "fleet depot charging India"
  ]
});

export default function ForFleetOperatorsRoutePage() {
  return <MarketingContentPage content={pageContent} />;
}
