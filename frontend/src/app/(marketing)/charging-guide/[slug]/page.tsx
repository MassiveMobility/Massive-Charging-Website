import { fetchWpPostBySlug, fetchWpPosts } from "@/lib/api/wordpress";
import {
  getLegacyGuideArticleBySlug,
  getLegacyGuideBlocksByMessageId
} from "@/data/articles";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { GuideArticlePage } from "@/features/marketing/components/guide-article-page";
import { notFound } from "next/navigation";

type ChargingGuideSlugPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const wpPosts = await fetchWpPosts({ perPage: 200, revalidate: 300 }).catch(() => []);
  return wpPosts.map((post) => ({ slug: post.slug }));
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

  // ── 2. Fallback policy ────────────────────────────────────────────────────────
  // Vehicle charging guides must be served from WordPress only.
  // Non-vehicle legacy guides can still render from static JSON for now.
  const article = getLegacyGuideArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  if (article.guideType === "vehicle_guide") {
    notFound();
  }

  return (
    <GuideArticlePage
      article={article}
      blocks={getLegacyGuideBlocksByMessageId(article.cmsgId)}
    />
  );
}
