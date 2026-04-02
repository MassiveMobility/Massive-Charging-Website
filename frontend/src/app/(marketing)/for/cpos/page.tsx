import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/for/cpos" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "EV Charging Management System for CPOs | Charge Point Operator Platform",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "CPO platform",
    "charge point operator software",
    "EV charging management system",
    "OCPP charging platform",
    "charge point operator",
    "EV charging CMS",
    "OCPI integration",
    "tariff management",
    "CPO network management",
    "charger monitoring"
  ]
});

export default function ForCposRoutePage() {
  return <MarketingContentPage content={pageContent} />;
}
