import {
  getLegacyCategoryArticles,
  legacyFourWheelVehicles
} from "@/data/articles";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegacyGuideHomePage } from "@/features/marketing/components/legacy-guide-home-page";
import { fetchEvCarsFromWp } from "@/lib/api/wp-adapters";

const routePath = "/charging-guide" as const;

export const metadata = buildPageMetadata({
  title: "Charging Guide",
  description:
    "Everything you need to know about EV charging: vehicle guides, charging station info, trip reports, and EV 101.",
  path: routePath
});

export default async function ChargingGuideRoutePage() {
  // Category article listings come from the legacy dataset (slugs + titles only)
  const articlesByCategory = {
    CAT_003: getLegacyCategoryArticles("CAT_003").map((article) => ({
      slug: article.slug,
      title: article.title
    })),
    CAT_004: getLegacyCategoryArticles("CAT_004").map((article) => ({
      slug: article.slug,
      title: article.title
    })),
    CAT_005: getLegacyCategoryArticles("CAT_005").map((article) => ({
      slug: article.slug,
      title: article.title
    }))
  };

  // Vehicle search: prefer WordPress (live-editable), fall back to static JSON
  const wpCars = await fetchEvCarsFromWp();
  const vehicleSource = wpCars ?? legacyFourWheelVehicles;

  return (
    <LegacyGuideHomePage
      articlesByCategory={articlesByCategory}
      vehicles={vehicleSource.map((vehicle) => ({
        battery: vehicle.Battery_Capacity ?? "",
        claimedRange: vehicle.Claimed_Range ?? "",
        connector: vehicle.Charging_Type ?? "",
        guideSlug: vehicle.slug,
        id: vehicle.Vehicle_ID,
        manufacturer: vehicle.Manufacturer,
        name: vehicle.Vehicle_Name,
        price: vehicle.Price ?? "",
        realRange: vehicle.Realworld_Range ?? "",
        variant: vehicle.Vehicle_Variant ?? ""
      }))}
    />
  );
}
