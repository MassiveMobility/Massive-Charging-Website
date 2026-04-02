import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/gridwatch" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "Gridwatch — EV Network Audit Software",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "EV charging network audit",
    "Gridwatch",
    "EV SLA monitoring",
    "charging uptime validation",
    "EV network analytics India"
  ]
});

export default function GridwatchRoutePage() {
  return <MarketingContentPage content={pageContent} />;
}
