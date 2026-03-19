import { MarketingRoutePlaceholder } from "@/components/marketing/marketing-route-placeholder";

type ChargingGuideSlugPageProps = {
  params: {
    slug: string;
  };
};

export default function ChargingGuideSlugPage({ params }: ChargingGuideSlugPageProps) {
  return (
    <MarketingRoutePlaceholder
      title={`Charging Guide: ${params.slug}`}
      routePath={`/charging-guide/${params.slug}`}
      description="Legacy charging-guide dynamic article route has been scaffolded for migration."
    />
  );
}
