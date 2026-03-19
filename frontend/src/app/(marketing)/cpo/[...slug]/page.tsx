import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

type CpoCatchAllPageProps = {
  params: {
    slug: string[];
  };
};

export default function CpoCatchAllPage({ params }: CpoCatchAllPageProps) {
  const joinedSlug = params.slug.join("/");

  return (
    <MarketingRoutePlaceholder
      title={`CPO Route: ${joinedSlug}`}
      routePath={`/cpo/${joinedSlug}`}
      description="Legacy CPO nested route has been scaffolded for migration."
    />
  );
}
