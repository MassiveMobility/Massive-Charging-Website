import { buildPageMetadata } from "@/lib/seo/metadata";
import { HomeHero } from "@/components/marketing/home/home-hero";
import { routePaths } from "@/lib/constants/routes";

export const metadata = buildPageMetadata({
  title: "Find EV Chargers Anytime, Anywhere",
  description:
    "Find live EV charging stations, start charging fast, and get the Massive Charging app for a connected charging experience.",
  path: routePaths.home
});

export default function MarketingHomePage() {
  return <HomeHero />;
}
