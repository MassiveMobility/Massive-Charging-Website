import { buildPageMetadata } from "@/lib/seo/metadata";
import { PlansOffersPage } from "@/features/marketing/components/plans-offers-page";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";

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
