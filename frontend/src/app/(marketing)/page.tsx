import { buildPageMetadata } from "@/lib/seo/metadata";
import { HomeBusinessScroll } from "@/components/marketing/home/home-business-scroll";
import { HomeFifthScroll } from "@/components/marketing/home/home-fifth-scroll";
import { HomeHero } from "@/components/marketing/home/home-hero";
import { HomeSecondScroll } from "@/components/marketing/home/home-second-scroll";
import { HomeSixthScroll } from "@/components/marketing/home/home-sixth-scroll";
import { HomeThirdScroll } from "@/components/marketing/home/home-third-scroll";
import { routePaths } from "@/lib/constants/routes";

export const metadata = buildPageMetadata({
  title: "Find EV Chargers Anytime, Anywhere",
  description:
    "Find live EV charging stations, start charging fast, and get the Massive Charging app for a connected charging experience.",
  path: routePaths.home
});

export default function MarketingHomePage() {
  return (
    <>
      <HomeHero />
      <HomeSixthScroll />
      <HomeSecondScroll />
      <HomeThirdScroll />
      <HomeBusinessScroll />
      <HomeFifthScroll />
    </>
  );
}
