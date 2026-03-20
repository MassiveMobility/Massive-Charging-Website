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
 * Legacy pricing route rebuilt with the centralized dark plans-page style contract.
 */
export function PlansOffersPage() {
  return (
    <section className="plans-page">
      <div className="plans-page__container">
        <header className="plans-page__hero">
          <p className="plans-page__label">Subscribe to</p>
          <h1>ELITE</h1>
          <p>Membership plans for frequent charging users.</p>
        </header>

        <div className="plans-page__cards">
          {plans.map((plan) => (
            <article
              className={`plans-page__card ${plan.highlighted ? "plans-page__card--highlighted" : ""}`}
              key={plan.name}
            >
              <h2>{plan.name}</h2>
              <p className="plans-page__price">{plan.price}</p>
              <p className="plans-page__original">{plan.originalPrice}</p>
              <p className="plans-page__duration">{plan.duration}</p>
            </article>
          ))}
        </div>

        <p className="plans-page__policy">Only for personal use, commercial use is prohibited.</p>

        <section className="plans-page__benefits">
          <h2>Benefits</h2>
          <div className="plans-page__benefit-grid">
            {benefits.map((benefit) => (
              <article className="plans-page__benefit-card" key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="plans-page__cta-wrap">
          <a
            className="plans-page__cta"
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
