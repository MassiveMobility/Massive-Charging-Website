import Link from "next/link";

const DEFAULT_PERKS = [
  "Points on Each Charge",
  "Charging Discounts",
  "Charging Pass",
  "Access to Premium Stations",
  "Discount on Hardware",
];

export type HomeSixthScrollProps = {
  badge?: string | undefined;
  headingWhite?: string | undefined;
  headingGold?: string | undefined;
  subtitle?: string | undefined;
  perks?: string[] | undefined;
  ctaLabel?: string | undefined;
  ctaHref?: string | undefined;
};

export function HomeSixthScroll({
  badge = "Exclusive Membership",
  headingWhite = "Become an ",
  headingGold = "Elite Member",
  subtitle = "Premium perks, priority access, and better savings every time you charge.",
  perks = DEFAULT_PERKS,
  ctaLabel = "Get Massive Membership",
  ctaHref = "/plans-offers",
}: HomeSixthScrollProps) {
  return (
    <section className="home-sixth-v2" id="exclusive-membership">
      <div className="home-sixth-v2__card">
        <div className="home-sixth-v2__top-bar">
          <div className="home-sixth-v2__badge-wrapper">
            <img alt="" aria-hidden="true" className="home-sixth-v2__sparkle" src="/Flare.svg" />
            <div className="home-sixth-v2__badge">
              <span className="home-sixth-v2__badge-text">{badge}</span>
            </div>
          </div>
        </div>

        <h2 className="home-sixth-v2__heading">
          <span className="home-sixth-v2__heading-white">{headingWhite}</span>
          <span className="home-sixth-v2__heading-gold">{headingGold}</span>
        </h2>

        <p className="home-sixth-v2__subtitle">
          <span className="home-sixth-v2__subtitle-text">{subtitle}</span>
        </p>

        <div className="home-sixth-v2__perks">
          {perks.map((perk) => (
            <div className="home-sixth-v2__perk" key={perk}>
              <span className="home-sixth-v2__perk-text">{perk}</span>
            </div>
          ))}
        </div>

        <Link className="home-sixth-v2__cta" href={ctaHref as `/${string}`}>
          <span className="home-sixth-v2__cta-text">{ctaLabel}</span>
        </Link>
      </div>
    </section>
  );
}
