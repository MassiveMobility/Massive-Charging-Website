import { buildPageMetadata } from "@/lib/seo/metadata";
import { EvCarsCataloguePage } from "@/features/marketing/components/ev-cars-catalogue-page";
import { fetchEvCarsFromWp } from "@/lib/api/wp-adapters";

const routePath = "/charging-guide/ev-cars" as const;

export const metadata = buildPageMetadata({
  title: "EV Cars Catalogue",
  description:
    "Browse all electric vehicles with specs, pricing, battery capacity, range, and charging-guide links.",
  path: routePath
});

export default async function ChargingGuideEvCarsPage() {
  // WordPress only (no static fallback)
  const wpCars = await fetchEvCarsFromWp();
  const cars = wpCars ?? [];

  return <EvCarsCataloguePage cars={cars} />;
}
