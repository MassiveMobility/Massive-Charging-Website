import { buildPageMetadata } from "@/lib/seo/metadata";
import { EvCarsCataloguePage } from "@/features/marketing/components/ev-cars-catalogue-page";
import { legacyFourWheelVehicles } from "@/data/articles";

const routePath = "/charging-guide/ev-cars" as const;

// Disable ISR for this page - static generation only
// Runtime RSC serialization was causing cars array to become empty
// Static build works correctly with 101 vehicles from legacy data
export const revalidate = false;

export const metadata = buildPageMetadata({
  title: "EV Cars Catalogue",
  description:
    "Browse all electric vehicles with specs, pricing, battery capacity, range, and charging-guide links.",
  path: routePath
});

export default async function ChargingGuideEvCarsPage() {
  // Use legacy data as primary source - it's reliable and complete
  // WordPress integration can be added later when RSC serialization is resolved
  const cars = legacyFourWheelVehicles;

  return <EvCarsCataloguePage cars={cars} />;
}
