import { notFound } from "next/navigation";

import { buildPageMetadata } from "@/lib/seo/metadata";
import { fetchAllMarketingPages, fetchMarketingPageByRoute } from "@/lib/api/wordpress";
import { adaptWpMarketingPage } from "@/lib/api/wp-adapters";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

export const revalidate = 60;
export const dynamicParams = true;

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateStaticParams() {
  try {
    const pages = await fetchAllMarketingPages();
    return pages
      .filter((p) => p.route_path && p.route_path !== "/")
      .map((p) => ({
        slug: p.route_path.replace(/^\//, "").split("/"),
      }));
  } catch {
    // WP plugin not yet active — no static params; pages resolve at runtime via ISR
    return [];
  }
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const routePath = "/" + slug.join("/");
  const page = await fetchMarketingPageByRoute(routePath);
  if (!page) return {};

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: routePath as `/${string}`,
  });
}

export default async function MarketingCatchAllPage({ params }: Props) {
  const { slug } = await params;
  const routePath = "/" + slug.join("/");

  const page = await fetchMarketingPageByRoute(routePath);
  if (!page) notFound();

  const content = adaptWpMarketingPage(page);

  const hasSpecTable = page.spec_table.length > 0;

  return (
    <MarketingContentPage content={content}>
      {hasSpecTable ? (
        <div className="marketing-content__container">
          <h2 className="marketing-content__section-title">Technical specifications</h2>
          <table className="marketing-content__spec-table">
            <tbody>
              {page.spec_table.map((row) => (
                <tr key={row.label}>
                  <th>{row.label}</th>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </MarketingContentPage>
  );
}
