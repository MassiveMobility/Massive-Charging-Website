import Link from "next/link";

const PERKS = [
  "Points on Each Charge",
  "Charging Discounts",
  "Charging Pass",
  "Access to Premium Stations",
  "Discount on Hardware"
] as const;

export function HomeSixthScroll() {
  return (
    <section className="home-sixth-v2" id="exclusive-membership">
      <div className="home-sixth-v2__card">
        <div className="home-sixth-v2__top-bar">
          <div className="home-sixth-v2__badge-wrapper">
            <img alt="" aria-hidden="true" className="home-sixth-v2__sparkle" src="/Flare.svg" />
            <div className="home-sixth-v2__badge">
              <span className="home-sixth-v2__badge-text">Exclusive Membership</span>
            </div>
          </div>
        </div>

        <h2 className="home-sixth-v2__heading">
          <span className="home-sixth-v2__heading-white">Become an </span>
          <span className="home-sixth-v2__heading-gold">Elite Member</span>
        </h2>

        <p className="home-sixth-v2__subtitle">
          <span className="home-sixth-v2__subtitle-text">
            Premium perks, priority access, and better savings
          </span>
          <img alt="" aria-hidden="true" className="home-sixth-v2__bolt-icon" loading="lazy" src="/Group 27792.svg" />
          <span className="home-sixth-v2__subtitle-text">every time you charge.</span>
        </p>

        <div className="home-sixth-v2__perks">
          {PERKS.map((perk) => (
            <div className="home-sixth-v2__perk" key={perk}>
              <span className="home-sixth-v2__perk-text">{perk}</span>
            </div>
          ))}
        </div>

        <Link className="home-sixth-v2__cta" href="/plans-offers">
          <span className="home-sixth-v2__cta-text">Get Massive Membership</span>
        </Link>
      </div>
    </section>
  );
}
