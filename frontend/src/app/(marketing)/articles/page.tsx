import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Articles",
  description:
    "Explore EV charging strategy articles focused on deployment planning, uptime, and scalable charging operations.",
  path: "/articles"
});

const articlePreviewItems = [
  {
    summary: "A practical architecture baseline for reliable public charging programs.",
    title: "Designing EV charging networks for operational uptime"
  },
  {
    summary: "How modular route and feature boundaries reduce long-term migration risk.",
    title: "Scaling charging platforms without architecture debt"
  }
];

export default function ArticlesPage() {
  return (
    <>
      <section aria-labelledby="articles-title" className="hero">
        <p className="eyebrow">Articles</p>
        <h1 id="articles-title">Insights for EV charging growth teams</h1>
        <p className="lead">
          The article platform is scaffolded for future CMS-backed publishing with role-based editorial
          workflows.
        </p>
      </section>

      <section aria-labelledby="article-preview-title" className="surface">
        <h2 id="article-preview-title">Publishing placeholder content</h2>
        <div className="card-grid" role="list">
          {articlePreviewItems.map((item) => (
            <article className="card" key={item.title} role="listitem">
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
