import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/home-charging" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "Home EV Charging Solutions | Massive Charging",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "home EV charging solutions",
    "home EV charger installation",
    "residential EV charger",
    "EV home charging setup",
    "home charger pre-delivery installation",
    "EV charger for home India"
  ]
});

export default function HomeChargingPage() {
  return <MarketingContentPage content={pageContent} />;
}
