import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { PlansOffersPage } from "@/features/marketing/components/plans-offers-page";

const routePath = "/plans-offers" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "Pricing and Offers",
  description: pageContent.description,
  path: routePath
});

export default function PlansOffersRoutePage() {
  return <PlansOffersPage />;
}
