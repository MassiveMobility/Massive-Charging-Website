import "server-only";

import type { LegacyVehicleCatalogueItem } from "@/data/articles/legacy-guide-data";
import type { WpEvCar } from "@/types/wordpress";

import { fetchWpEvCars } from "@/lib/api/wordpress";

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
