import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/society-charging" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "Society EV Charging Solutions for Apartments & RWAs | Massive Charging",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "society EV charging solutions",
    "apartment EV charging",
    "EV charging for RWAs",
    "gated community EV charging",
    "residential EV charging setup",
    "EV charging for housing societies",
    "apartment parking EV charger"
  ]
});

export default function SocietyChargingPage() {
  return <MarketingContentPage content={pageContent} />;
}
