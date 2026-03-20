import coreMessageBlockRaw from "@/data/articles/legacy/core_message_block.json";
import vehicleGuideRaw from "@/data/articles/legacy/vehicle_guide.json";

export type LegacyVehicleMaster = {
  Vehicle_ID: string;
  Manufacturer: string;
  Vehicle_Name: string;
  Category_ID: string;
};

export type LegacyVehicleDetail = {
  Vehicle_ID: string;
  Vehicle_Variant?: string;
  Battery_Capacity?: string;
  Claimed_Range?: string;
  Realworld_Range?: string;
  Charging_Type?: string;
  Price?: string;
  Guide_ID?: string;
};

export type LegacyGuideArticleRecord = {
  Guide_ID: string;
  Guide_Type: string;
  cmsg_id: string;
  Context: string;
};

export type LegacyCoreMessageRecord = {
  cmsg_id: string;
  title: string;
  status?: string;
  author?: string;
  created_at?: string;
};

export type LegacyCategoryGuideMapRecord = {
  Category_ID: string;
  Guide_ID: string;
};

export type LegacyCoreMessageBlock = {
  block_id: string;
  cmsg_id: string;
  block_order: string;
  block_type: "heading_1" | "heading_2" | "heading_3" | "body" | "list" | "table" | "divider" | string;
  text: string;
  src?: string;
  alt?: string;
  meta_json?: string;
};

type LegacyVehicleGuideData = {
  Vehicle_master: LegacyVehicleMaster[];
  "4w_vehicle_details": LegacyVehicleDetail[];
  Guide_article: LegacyGuideArticleRecord[];
  Core_message: LegacyCoreMessageRecord[];
  Category_Guide_Map: LegacyCategoryGuideMapRecord[];
};

type LegacyCoreMessageBlocksData = {
  Core_message_blocks: LegacyCoreMessageBlock[];
};

/**
 * Single source of truth for all legacy charging-guide article data.
 * This module owns:
 * 1) Raw legacy JSON contracts
 * 2) Parsing and normalization
 * 3) Query helpers consumed by guide routes/components
 */
const vehicleGuideData = vehicleGuideRaw as LegacyVehicleGuideData;
const coreMessageBlockData = coreMessageBlockRaw as LegacyCoreMessageBlocksData;

/**
 * Legacy-compatible slug function used across guide routes.
 */
export function slugifyLegacyTitle(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export type LegacyGuideArticleSummary = {
  guideId: string;
  guideType: string;
  context: string;
  cmsgId: string;
  slug: string;
  title: string;
  status: string;
  author: string;
  createdAt: string;
};

export type LegacyVehicleCatalogueItem = LegacyVehicleMaster &
  LegacyVehicleDetail & {
    slug: string | null;
    title: string | null;
  };

const coreMessageById = new Map(
  vehicleGuideData.Core_message.map((message) => [message.cmsg_id, message])
);

const guideById = new Map(
  vehicleGuideData.Guide_article.map((guide) => [guide.Guide_ID, guide])
);

const detailByVehicleId = new Map(
  vehicleGuideData["4w_vehicle_details"].map((detail) => [detail.Vehicle_ID, detail])
);

const blocksByMessageId = new Map<string, LegacyCoreMessageBlock[]>();
for (const block of coreMessageBlockData.Core_message_blocks) {
  const current = blocksByMessageId.get(block.cmsg_id) ?? [];
  current.push(block);
  blocksByMessageId.set(block.cmsg_id, current);
}

for (const [messageId, blocks] of blocksByMessageId.entries()) {
  blocks.sort((a, b) => Number(a.block_order) - Number(b.block_order));
  blocksByMessageId.set(messageId, blocks);
}

export const legacyGuideArticles: LegacyGuideArticleSummary[] = vehicleGuideData.Guide_article.map(
  (guide) => {
    const message = coreMessageById.get(guide.cmsg_id);
    const title = message?.title ?? guide.Context;

    return {
      author: message?.author ?? "Massive",
      cmsgId: guide.cmsg_id,
      context: guide.Context,
      createdAt: message?.created_at ?? "",
      guideId: guide.Guide_ID,
      guideType: guide.Guide_Type,
      slug: slugifyLegacyTitle(title),
      status: message?.status ?? "published",
      title
    };
  }
);

export const legacyGuideArticleBySlug = new Map(
  legacyGuideArticles.map((article) => [article.slug, article])
);

export const legacyFourWheelVehicles: LegacyVehicleCatalogueItem[] = vehicleGuideData.Vehicle_master
  .filter((vehicle) => vehicle.Category_ID === "CAT_006")
  .map((vehicle) => {
    const detail = detailByVehicleId.get(vehicle.Vehicle_ID);
    const guideId = detail?.Guide_ID;
    const guide = guideId ? guideById.get(guideId) : undefined;
    const message = guide ? coreMessageById.get(guide.cmsg_id) : undefined;

    return {
      ...vehicle,
      ...detail,
      slug: message?.title ? slugifyLegacyTitle(message.title) : null,
      title: message?.title ?? null
    };
  });

export function getLegacyGuideArticleBySlug(slug: string): LegacyGuideArticleSummary | null {
  return legacyGuideArticleBySlug.get(slug) ?? null;
}

export function getLegacyGuideBlocksByMessageId(messageId: string): LegacyCoreMessageBlock[] {
  return blocksByMessageId.get(messageId) ?? [];
}

export function getLegacyCategoryArticles(categoryId: string): LegacyGuideArticleSummary[] {
  const guideIds = vehicleGuideData.Category_Guide_Map.filter(
    (entry) => entry.Category_ID === categoryId
  ).map((entry) => entry.Guide_ID);

  const guideIdSet = new Set(guideIds);

  return legacyGuideArticles.filter((article) => guideIdSet.has(article.guideId));
}

export function getLegacyArticleForVehicle(vehicle: LegacyVehicleCatalogueItem): LegacyGuideArticleSummary | null {
  if (!vehicle.Guide_ID) {
    return null;
  }

  const guide = guideById.get(vehicle.Guide_ID);
  if (!guide) {
    return null;
  }

  const message = coreMessageById.get(guide.cmsg_id);
  if (!message) {
    return null;
  }

  return {
    author: message.author ?? "Massive",
    cmsgId: guide.cmsg_id,
    context: guide.Context,
    createdAt: message.created_at ?? "",
    guideId: guide.Guide_ID,
    guideType: guide.Guide_Type,
    slug: slugifyLegacyTitle(message.title),
    status: message.status ?? "published",
    title: message.title
  };
}
