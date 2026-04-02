import { buildPageMetadata } from "@/lib/seo/metadata";
import { EvCarsCataloguePage } from "@/features/marketing/components/ev-cars-catalogue-page";
import { fetchEvCarsFromWp } from "@/lib/api/wp-adapters";
import { legacyFourWheelVehicles } from "@/data/articles";

const routePath = "/charging-guide/ev-cars" as const;

export const metadata = buildPageMetadata({
  title: "EV Cars Catalogue",
  description:
    "Browse all electric vehicles with specs, pricing, battery capacity, range, and charging-guide links.",
  path: routePath
});

export default async function ChargingGuideEvCarsPage() {
  // Try WordPress first; fall back to static legacy JSON if WP is unavailable
  let cars = legacyFourWheelVehicles;

  try {
    const wpCars = await fetchEvCarsFromWp();
    // Only use WordPress data if it has items
    if (wpCars && wpCars.length > 0) {
      cars = wpCars;
    }
  } catch {
    // Fall back to legacy data on any error
    cars = legacyFourWheelVehicles;
  }

  return <EvCarsCataloguePage cars={cars} />;
}
