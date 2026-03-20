import { buildPageMetadata } from "@/lib/seo/metadata";
import { CpoDetailPage } from "@/features/marketing/components/cpo-detail-page";
import { getCpoScenarioFromSlug } from "@/features/marketing/data/cpo";

type CpoCatchAllPageProps = {
  params: {
    slug: string[];
  };
};

export function generateMetadata({ params }: CpoCatchAllPageProps) {
  const scenario = getCpoScenarioFromSlug(params.slug);
  const canonicalPath = "/cpo" as const;

  if (!scenario) {
    return buildPageMetadata({
      title: "CPO Scenario",
      description: "Detailed CPO scenario route for EV charging deployment planning.",
      path: canonicalPath
    });
  }

  return buildPageMetadata({
    title: scenario.label,
    description:
      scenario.hero?.body ??
      "Detailed CPO scenario route for EV charging deployment planning.",
    path: canonicalPath
  });
}

export default function CpoCatchAllPage({ params }: CpoCatchAllPageProps) {
  const scenario = getCpoScenarioFromSlug(params.slug);

  if (!scenario) {
    return (
      <section className="cpo-detail__section">
        <div className="cpo-detail__container">
          <h1 className="cpo-detail__title">CPO scenario not found</h1>
          <p className="cpo-detail__description">
            This legacy CPO route has no matching scenario entry. Use the index page to open a valid scenario.
          </p>
        </div>
      </section>
    );
  }

  return <CpoDetailPage scenario={scenario} />;
}
