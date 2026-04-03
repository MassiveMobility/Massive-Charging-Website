import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/for/evse-manufacturers-installers" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "EVSE Partnership for Manufacturers & Installers | Massive Charging",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "EVSE partnership for manufacturers and installers",
    "EV charger installation partner",
    "EV charger EPC partner",
    "white-label EV CMS for OEMs",
    "EVSE deployment partner",
    "OCPP CMS for charger OEMs",
    "EV charging hardware installation and maintenance"
  ]
});

export default function ForEvseManufacturersInstallersRoutePage() {
  return <MarketingContentPage content={pageContent} />;
}
