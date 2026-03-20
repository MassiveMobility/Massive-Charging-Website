export { articlePreviewItems } from "@/data/articles/article-previews";
export { chargingGuideArticleBySlug, chargingGuideArticles, evCarCatalogue } from "@/data/articles/guide-data";
export {
  getLegacyArticleForVehicle,
  getLegacyCategoryArticles,
  getLegacyGuideArticleBySlug,
  getLegacyGuideBlocksByMessageId,
  legacyFourWheelVehicles,
  legacyGuideArticleBySlug,
  legacyGuideArticles,
  slugifyLegacyTitle
} from "@/data/articles/legacy-guide-data";

export type { EvCarItem, GuideArticle, GuideSection } from "@/data/articles/guide-data";

export type {
  LegacyCoreMessageBlock,
  LegacyGuideArticleRecord,
  LegacyGuideArticleSummary,
  LegacyVehicleCatalogueItem,
  LegacyVehicleDetail,
  LegacyVehicleMaster
} from "@/data/articles/legacy-guide-data";
