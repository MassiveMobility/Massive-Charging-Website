import {
  getLegacyCategoryArticles,
  legacyFourWheelVehicles
} from "@/data/articles";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { LegacyGuideHomePage } from "@/features/marketing/components/legacy-guide-home-page";

const routePath = "/charging-guide" as const;

export const metadata = buildPageMetadata({
  title: "Charging Guide",
  description:
    "Legacy charging-guide experience migrated to Next.js with category navigation, EV search, and article-level pages.",
  path: routePath
});

export default function ChargingGuideRoutePage() {
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

  return (
    <LegacyGuideHomePage
      articlesByCategory={articlesByCategory}
      vehicles={legacyFourWheelVehicles.map((vehicle) => ({
        battery: vehicle.Battery_Capacity || "",
        claimedRange: vehicle.Claimed_Range || "",
        connector: vehicle.Charging_Type || "",
        guideSlug: vehicle.slug,
        id: vehicle.Vehicle_ID,
        manufacturer: vehicle.Manufacturer,
        name: vehicle.Vehicle_Name,
        price: vehicle.Price || "",
        realRange: vehicle.Realworld_Range || "",
        variant: vehicle.Vehicle_Variant || ""
      }))}
    />
  );
}
