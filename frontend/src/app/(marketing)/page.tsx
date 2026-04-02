/* eslint-disable sort-imports */
import { HomeBusinessScroll } from "@/components/marketing/home/home-business-scroll";
import { HomeFifthScroll } from "@/components/marketing/home/home-fifth-scroll";
import { HomeHero } from "@/components/marketing/home/home-hero";
import { HomeSecondScroll } from "@/components/marketing/home/home-second-scroll";
import { HomeSixthScroll } from "@/components/marketing/home/home-sixth-scroll";
import { HomeThirdScroll } from "@/components/marketing/home/home-third-scroll";
import { fetchMarketingPageByRoute } from "@/lib/api/wordpress";
import { routePaths } from "@/lib/constants/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const revalidate = 60;

export const metadata = buildPageMetadata({
  title: "Find EV Chargers Anytime, Anywhere",
  description:
    "Find live EV charging stations, start charging fast, and get the Massive Charging app for a connected charging experience.",
  path: routePaths.home
});

export default async function MarketingHomePage() {
  // Fetch homepage data from WP. Falls back to component defaults if WP page
  // isn't created yet or the plugin isn't active.
  const wpPage = await fetchMarketingPageByRoute("/").catch(() => null);
  const hp = wpPage?.homepage;

  return (
    <>
      <HomeHero
        statusText={hp?.hero.status_text || undefined}
        titleMain={hp?.hero.title_main || undefined}
        titleAnytime={hp?.hero.title_anytime || undefined}
        titleAccent={hp?.hero.title_accent || undefined}
        subtitle={hp?.hero.subtitle || undefined}
        ctaPrimaryLabel={hp?.hero.cta_primary_label || undefined}
        ctaPrimaryHref={hp?.hero.cta_primary_href || undefined}
        ctaSecondaryLabel={hp?.hero.cta_secondary_label || undefined}
        livePanelTitle={hp?.hero.live_panel_title || undefined}
        liveStations={hp?.hero.live_stations.length ? hp.hero.live_stations : undefined}
      />
      <HomeSixthScroll
        badge={hp?.membership.badge || undefined}
        headingWhite={hp?.membership.heading_white || undefined}
        headingGold={hp?.membership.heading_gold || undefined}
        subtitle={hp?.membership.subtitle || undefined}
        perks={hp?.membership.perks.length ? hp.membership.perks : undefined}
        ctaLabel={hp?.membership.cta_label || undefined}
        ctaHref={hp?.membership.cta_href || undefined}
      />
      <HomeSecondScroll
        eyebrow={hp?.home_charger.eyebrow || undefined}
        titleLine1={hp?.home_charger.title_line1 || undefined}
        titleLine2={hp?.home_charger.title_line2 || undefined}
        ctaPrimaryLabel={hp?.home_charger.cta_primary_label || undefined}
        ctaPrimaryHref={hp?.home_charger.cta_primary_href || undefined}
        ctaSecondaryLabel={hp?.home_charger.cta_secondary_label || undefined}
        ctaSecondaryHref={hp?.home_charger.cta_secondary_href || undefined}
      />
      <HomeThirdScroll
        headingLine1={hp?.app.heading_line1 || undefined}
        headingLine2={hp?.app.heading_line2 || undefined}
        subtitle={hp?.app.subtitle || undefined}
        ctaLabel={hp?.app.cta_label || undefined}
        featureLabels={hp?.app.features.length ? hp.app.features : undefined}
      />
      <HomeBusinessScroll
        kicker={hp?.business.kicker || undefined}
        titleLine1={hp?.business.title_line1 || undefined}
        titleLine2={hp?.business.title_line2 || undefined}
        subtitle={hp?.business.subtitle || undefined}
        ctaLabel={hp?.business.cta_label || undefined}
        incomeBadge={hp?.business.income_badge || undefined}
      />
      <HomeFifthScroll
        vehicleChip={hp?.guide.vehicle_chip || undefined}
        heading={hp?.guide.heading || undefined}
        subheading={hp?.guide.subheading || undefined}
        description={hp?.guide.description || undefined}
        chips={hp?.guide.chips.length ? hp.guide.chips : undefined}
        ctaLabel={hp?.guide.cta_label || undefined}
        ctaHref={hp?.guide.cta_href || undefined}
      />
    </>
  );
}
