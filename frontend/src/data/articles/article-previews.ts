export type ArticlePreviewItem = {
  title: string;
  summary: string;
};

/**
 * Marketing-facing article previews for /articles.
 * Kept outside route components so content data has one canonical home.
 */
export const articlePreviewItems: ArticlePreviewItem[] = [
  {
    summary: "A practical architecture baseline for reliable public charging programs.",
    title: "Designing EV charging networks for operational uptime"
  },
  {
    summary: "How modular route and feature boundaries reduce long-term migration risk.",
    title: "Scaling charging platforms without architecture debt"
  }
];
