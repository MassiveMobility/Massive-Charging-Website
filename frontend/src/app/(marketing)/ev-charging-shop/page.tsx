import { buildPageMetadata } from "@/lib/seo/metadata";
import { EvChargingShopPage } from "@/features/marketing/components/ev-charging-shop-page";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";

const routePath = "/ev-charging-shop" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "EV Charging Shop",
  description: pageContent.description,
  path: routePath
});

export default function EvChargingShopRoutePage() {
  return <EvChargingShopPage />;
}
