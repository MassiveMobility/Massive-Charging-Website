import { buildPageMetadata } from "@/lib/seo/metadata";
import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

export const metadata = buildPageMetadata({
  title: "CPO",
  description:
    "Legacy CPO index route has been scaffolded for migration.",
  path: "/cpo",
  noIndex: true
});

export default function CpoPage() {
  return (
    <MarketingRoutePlaceholder
      title="CPO"
      routePath="/cpo"
      description="Legacy CPO index route has been scaffolded for migration."
    />
  );
}
