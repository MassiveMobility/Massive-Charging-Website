import "server-only";

import type { WpEvCar, WpMarketingPage } from "@/types/wordpress";

import type { LegacyVehicleCatalogueItem } from "@/data/articles/legacy-guide-data";
import type { MarketingContent } from "@/features/marketing/data/general-pages";

import { fetchMarketingPageByRoute, fetchWpEvCars } from "@/lib/api/wordpress";

// ── EV Car adapter ────────────────────────────────────────────────────────────

/**
 * Maps a WpEvCar REST response to the LegacyVehicleCatalogueItem shape
 * expected by EvCarsCataloguePage.
 *
 * Fields not stored in WordPress (Realworld_Range, Vehicle_Variant) are
 * left undefined — the component already handles missing values gracefully.
 */
export function adaptWpEvCar(car: WpEvCar): LegacyVehicleCatalogueItem {
  return {
    // WP post ID used as a stable unique key in place of the original Vehicle_ID
    Vehicle_ID: String(car.id),
    Manufacturer: car.acf.make ?? "",
    Vehicle_Name: car.acf.model ?? "",
    Category_ID: "CAT_006",
    // Spread optional fields only when present — required by exactOptionalPropertyTypes
    ...(car.acf.battery_kwh  && { Battery_Capacity: car.acf.battery_kwh }),
    ...(car.acf.range_km     && { Claimed_Range:     car.acf.range_km }),
    ...(car.acf.connector    && { Charging_Type:     car.acf.connector }),
    ...(car.acf.price_inr    && { Price:             car.acf.price_inr }),
    // guide_slug links to the /charging-guide/[slug] article for this vehicle
    slug: car.acf.guide_slug || null,
    title: car.title.rendered,
  };
}

/**
 * Fetches EV cars from WordPress and returns them adapted to
 * LegacyVehicleCatalogueItem[]. Returns null if WordPress is unavailable
 * or not configured so callers can fall back to static JSON data.
 */
export async function fetchEvCarsFromWp(
  opts: { revalidate?: number } = {}
): Promise<LegacyVehicleCatalogueItem[] | null> {
  try {
    const cars = await fetchWpEvCars({ perPage: 200, revalidate: opts.revalidate ?? 300 });
    return cars.map(adaptWpEvCar);
  } catch {
    return null;
  }
}

// ── Marketing Page adapter ────────────────────────────────────────────────────

/**
 * Maps a WpMarketingPage REST response to the MarketingContent shape
 * expected by MarketingContentPage. Empty strings become undefined so
 * optional sections are omitted correctly.
 */
export function adaptWpMarketingPage(page: WpMarketingPage): MarketingContent {
  const str = (v: string) => v || undefined;

  return {
    badge: page.badge,
    title: page.title,
    description: page.description,
    ...(page.primary_cta   && { primaryCta:   page.primary_cta }),
    ...(page.secondary_cta && { secondaryCta: page.secondary_cta }),
    ...(page.stats.length  && { stats: page.stats }),
    ...(str(page.card_title) && { cardTitle: page.card_title }),
    ...(page.cards.length  && { cards: page.cards }),
    ...(str(page.steps_title) && { stepsTitle: page.steps_title }),
    ...(page.steps.length  && { steps: page.steps }),
    ...(str(page.faq_title) && { faqTitle: page.faq_title }),
    ...(page.faqs.length   && { faqs: page.faqs }),
    ...(str(page.note)     && { note: page.note }),
  };
}

/**
 * Fetches a marketing page from WordPress and adapts it to MarketingContent.
 * Returns null if the page doesn't exist in WP yet (allows fallback to
 * general-pages.ts during migration).
 */
export async function fetchMarketingContentByRoute(
  routePath: string,
  opts: { revalidate?: number } = {}
): Promise<MarketingContent | null> {
  try {
    const page = await fetchMarketingPageByRoute(routePath, { revalidate: opts.revalidate ?? 60 });
    if (!page) return null;
    return adaptWpMarketingPage(page);
  } catch {
    return null;
  }
}
