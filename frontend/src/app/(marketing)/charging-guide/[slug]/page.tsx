import {
  getLegacyGuideArticleBySlug,
  getLegacyGuideBlocksByMessageId,
  legacyGuideArticles
} from "@/data/articles";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { fetchWpPostBySlug } from "@/lib/api/wordpress";
import { GuideArticlePage } from "@/features/marketing/components/guide-article-page";

type ChargingGuideSlugPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return legacyGuideArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ChargingGuideSlugPageProps) {
  // Prefer WP title if available for accurate SEO
  let title = "Charging Guide Article";
  let description = "EV charging article for practical setup and operations guidance.";

  const wpPost = await fetchWpPostBySlug(params.slug).catch(() => null);
  if (wpPost) {
    title = wpPost.title.rendered;
    description = wpPost.yoast_head_json?.description ?? `EV charging guide: ${title}`;
  } else {
    const article = getLegacyGuideArticleBySlug(params.slug);
    if (article) {
      title = article.title;
      description = `Legacy charging guide article: ${article.title}`;
    }
  }

  return buildPageMetadata({
    title,
    description,
    path: "/charging-guide" as const
  });
}

export default async function ChargingGuideSlugPage({ params }: ChargingGuideSlugPageProps) {
  // ── 1. Try WordPress first ────────────────────────────────────────────────────
  const wpPost = await fetchWpPostBySlug(params.slug).catch(() => null);

  if (wpPost) {
    // Synthesise a minimal article summary for the page header
    const article = {
      author: "Massive",
      cmsgId: "",
      context: "",
      createdAt: wpPost.modified
        ? new Date(wpPost.modified).toLocaleDateString("en-IN", { dateStyle: "medium" })
        : "",
      guideId: "",
      guideType: "",
      slug: wpPost.slug,
      status: wpPost.status,
      title: wpPost.title.rendered
    };

    return (
      <GuideArticlePage
        article={article}
        blocks={[]}
        wpContent={wpPost.content.rendered}
      />
    );
  }

  // ── 2. Fall back to static legacy data ────────────────────────────────────────
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

  return (
    <GuideArticlePage
      article={article}
      blocks={getLegacyGuideBlocksByMessageId(article.cmsgId)}
    />
  );
}
