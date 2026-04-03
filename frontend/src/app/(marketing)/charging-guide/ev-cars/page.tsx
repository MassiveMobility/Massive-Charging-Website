import { buildPageMetadata } from "@/lib/seo/metadata";
import { EvCarsCataloguePage } from "@/features/marketing/components/ev-cars-catalogue-page";
import { fetchEvCarsFromWordPress } from "@/lib/wp-api/ev-cars";

const routePath = "/charging-guide/ev-cars" as const;

// Mark as dynamic to prevent prerendering during build
// WordPress API data is fetched at request time with ISR caching
export const dynamic = "force-dynamic";

export const metadata = buildPageMetadata({
  title: "EV Cars Catalogue",
  description:
    "Browse all electric vehicles with specs, pricing, battery capacity, range, and charging-guide links.",
  path: routePath
});

export default async function ChargingGuideEvCarsPage() {
  // Fetch EV cars from WordPress API - source of truth for vehicle data
  // Falls back gracefully if API is unavailable
  const cars = await fetchEvCarsFromWordPress();

  return <EvCarsCataloguePage cars={cars} />;
}
