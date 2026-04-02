import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/for/evse-manufacturers-installers" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "For EVSE Manufacturers & Installers",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "EVSE manufacturer partnership",
    "EV charger OEM India",
    "EPC EV charging",
    "white-label EV CMS",
    "EV charging installation partner"
  ]
});

export default function ForEvseManufacturersInstallersRoutePage() {
  return <MarketingContentPage content={pageContent} />;
}
