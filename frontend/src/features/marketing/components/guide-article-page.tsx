import type {
  LegacyCoreMessageBlock,
  LegacyGuideArticleSummary
} from "@/data/articles";

import Link from "next/link";

type GuideArticlePageProps = {
  article: LegacyGuideArticleSummary;
  blocks: LegacyCoreMessageBlock[];
  /** Raw HTML from WordPress content.rendered. When provided, replaces block rendering. */
  wpContent?: string;
};

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function TableRenderer({ rawText }: { rawText: string }) {
  const rows = rawText
    .trim()
    .split("\n")
    .filter((row) => !row.includes("---"))
    .map((row) => row.split("|").filter((cell) => cell.trim() !== "").map((cell) => cell.trim()));

  if (!rows.length) {
    return null;
  }

  const header = rows[0] ?? [];
  const bodyRows = rows.slice(1);

  return (
    <div className="legacy-guide-article__table-wrap">
      <table className="legacy-guide-article__table">
        <thead>
          <tr>
            {header.map((cell) => (
              <th key={cell}>{cell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyRows.map((row, rowIndex) => (
            <tr key={`${row.join("|")}-${rowIndex}`}>
              {row.map((cell) => (
                <td key={`${cell}-${rowIndex}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type WpTocItem = { id: string; level: string; text: string };

/**
 * Extracts h2/h3 headings from WordPress HTML, injects id attributes so
 * in-page anchor links work, and returns TOC items alongside the patched HTML.
 */
function processWpContent(html: string): { html: string; tocItems: WpTocItem[] } {
  const tocItems: WpTocItem[] = [];

  const processed = html.replace(
    /<(h[23])([^>]*)>([\s\S]*?)<\/\1>/gi,
    (_match, tag: string, attrs: string, inner: string) => {
      const text = inner.replace(/<[^>]+>/g, "").trim();
      if (!text) return _match;

      const id = slugifyHeading(text);
      const level = tag.toLowerCase() === "h2" ? "heading_1" : "heading_2";
      tocItems.push({ id, level, text });

      // Skip if id already present (e.g. from WP block editor)
      if (/\bid=/.test(attrs)) return _match;
      return `<${tag} id="${id}"${attrs}>${inner}</${tag}>`;
    }
  );

  return { html: processed, tocItems };
}

/**
 * Legacy article renderer for /charging-guide/[slug].
 */
export function GuideArticlePage({ article, blocks, wpContent }: GuideArticlePageProps) {
  // For WP HTML content: extract headings and inject IDs in one pass
  const { html: renderedWpContent, tocItems: wpTocItems } = wpContent
    ? processWpContent(wpContent)
    : { html: "", tocItems: [] };

  const tocItems = wpContent
    ? wpTocItems
    : blocks
        .filter((block) => ["heading_1", "heading_2", "heading_3"].includes(block.block_type))
        .map((block) => ({
          id: slugifyHeading(block.text || ""),
          level: block.block_type,
          text: block.text
        }));

  const renderBlock = (block: LegacyCoreMessageBlock) => {
    const blockId = slugifyHeading(block.text || "");

    if (block.block_type === "heading_1") {
      return (
        <h2 className="legacy-guide-article__h2" id={blockId} key={block.block_id}>
          {block.text}
        </h2>
      );
    }

    if (block.block_type === "heading_2") {
      return (
        <h3 className="legacy-guide-article__h3" id={blockId} key={block.block_id}>
          {block.text}
        </h3>
      );
    }

    if (block.block_type === "heading_3") {
      return (
        <h4 className="legacy-guide-article__h4" id={blockId} key={block.block_id}>
          {block.text}
        </h4>
      );
    }

    if (block.block_type === "body") {
      return (
        <p className="legacy-guide-article__body" key={block.block_id}>
          {block.text}
        </p>
      );
    }

    if (block.block_type === "list") {
      const items = block.text
        .split("\n")
        .map((item) => item.replace(/^- /, "").trim())
        .filter(Boolean);

      return (
        <ul className="legacy-guide-article__list" key={block.block_id}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    }

    if (block.block_type === "table") {
      return <TableRenderer key={block.block_id} rawText={block.text} />;
    }

    if (block.block_type === "divider") {
      return <hr className="legacy-guide-article__divider" key={block.block_id} />;
    }

    return null;
  };

  return (
    <div className="legacy-guide-article">
      <header className="legacy-guide-article__hero">
        <div className="legacy-guide-article__container">
          <div className="legacy-guide-article__badge">EV Charging Guide</div>
          <h1 className="legacy-guide-article__title">{article.title}</h1>
          <p className="legacy-guide-article__meta">
            {article.author} | {article.createdAt || "Updated recently"}
          </p>
        </div>
      </header>

      <main className="legacy-guide-article__main">
        <div className="legacy-guide-article__container legacy-guide-article__layout">
          <article className="legacy-guide-article__content">
            <Link className="legacy-guide-article__back-link" href="/charging-guide/ev-cars">
              Back to EV cars
            </Link>
            {wpContent ? (
              // WordPress HTML — sanitised by WP kses; headings have id attrs injected above
              // eslint-disable-next-line react/no-danger
              <div className="legacy-guide-article__blocks" dangerouslySetInnerHTML={{ __html: renderedWpContent }} />
            ) : (
              <div className="legacy-guide-article__blocks">{blocks.map(renderBlock)}</div>
            )}
            <div className="legacy-guide-article__cta-wrap">
              <Link className="legacy-guide-article__cta" href="/get-chargers">
                Talk to an EV charging expert
              </Link>
            </div>
          </article>

          <aside className="legacy-guide-article__toc">
            <div className="legacy-guide-article__toc-card">
              <h2>Table of Contents</h2>
              <nav aria-label="Article table of contents">
                {tocItems.length ? (
                  tocItems.map((item) => (
                    <a
                      className={`legacy-guide-article__toc-link ${item.level === "heading_3" ? "legacy-guide-article__toc-link--nested" : ""}`}
                      href={`#${item.id}`}
                      key={`${item.id}-${item.text}`}
                    >
                      {item.text}
                    </a>
                  ))
                ) : (
                  <p>No headings found.</p>
                )}
              </nav>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
