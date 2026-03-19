import { GuideArticlePage } from "@/features/marketing/components/guide-article-page";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getLegacyGuideArticleBySlug } from "@/features/marketing/data/legacy-guide-data";
import { getLegacyGuideBlocksByMessageId } from "@/features/marketing/data/legacy-guide-data";
import { legacyGuideArticles } from "@/features/marketing/data/legacy-guide-data";

type ChargingGuideSlugPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return legacyGuideArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: ChargingGuideSlugPageProps) {
  const article = getLegacyGuideArticleBySlug(params.slug);

  if (!article) {
    return buildPageMetadata({
      title: "Charging Guide Article",
      description: "EV charging article for practical setup and operations guidance.",
      path: "/charging-guide" as const
    });
  }

  return buildPageMetadata({
    title: article.title,
    description: `Legacy charging guide article: ${article.title}`,
    path: "/charging-guide" as const
  });
}

export default function ChargingGuideSlugPage({ params }: ChargingGuideSlugPageProps) {
  const article = getLegacyGuideArticleBySlug(params.slug);

  if (!article) {
    return (
      <section className="legacy-guide-article__main">
        <div className="legacy-guide-article__container">
          <article className="legacy-guide-article__content">
            <h1 className="legacy-guide-article__title">Guide not found</h1>
            <p className="legacy-guide-article__meta">
              This slug does not exist in the legacy guide dataset.
            </p>
          </article>
        </div>
      </section>
    );
  }

  return <GuideArticlePage article={article} blocks={getLegacyGuideBlocksByMessageId(article.cmsgId)} />;
}
