const plans = [
  { duration: "for 12 months", highlighted: true, name: "Elite", originalPrice: "₹1399", price: "₹1299" },
  { duration: "for 6 months", highlighted: false, name: "Pro", originalPrice: "₹849", price: "₹749" },
  { duration: "for 1 month", highlighted: false, name: "Starter", originalPrice: "₹249", price: "₹149" }
] as const;

const benefits = [
  { description: "Every time you charge your EV", title: "10% Flat Cashback" },
  { description: "Faster resolution and dedicated help", title: "Priority Customer Support" },
  { description: "Get notified before session ends", title: "Free Session Alerts" },
  { description: "Skip line at premium stations", title: "VIP Queue Access" },
  { description: "Exclusive accessory discounts", title: "Member-Only Deals" },
  { description: "Longer hours for priority members", title: "Extended Support Hours" }
] as const;

/**
 * Legacy pricing route rebuilt with dark visual treatment.
 */
export function PlansOffersPage() {
  return (
    <section className="plans-legacy">
      <div className="plans-legacy__bg" />
      <div className="plans-legacy__container">
        <header className="plans-legacy__hero">
          <p>Subscribe to</p>
          <h1>ELITE</h1>
          <div className="plans-legacy__pill">Subscription Plans</div>
        </header>

        <div className="plans-legacy__cards">
          {plans.map((plan) => (
            <article className={`plans-legacy__card ${plan.highlighted ? "plans-legacy__card--highlighted" : ""}`} key={plan.name}>
              <h2>{plan.price}</h2>
              <p className="plans-legacy__original">{plan.originalPrice}</p>
              <p className="plans-legacy__duration">{plan.duration}</p>
            </article>
          ))}
        </div>

        <p className="plans-legacy__policy">Only for personal use, commercial use is prohibited.</p>

        <section className="plans-legacy__benefits">
          <h2>Benefits</h2>
          <div className="plans-legacy__benefit-grid">
            {benefits.map((benefit) => (
              <article className="plans-legacy__benefit-card" key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="plans-legacy__cta-wrap">
          <a
            className="plans-legacy__cta"
            href="https://play.google.com/store/apps/details?id=in.one.charging&hl=en_IN"
            rel="noopener noreferrer"
            target="_blank"
          >
            Join Elite
          </a>
        </div>
      </div>
    </section>
  );
}
