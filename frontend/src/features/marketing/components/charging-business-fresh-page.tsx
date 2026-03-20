import Link from "next/link";

const setupItems = [
  { category: "Home", path: "/home-charging", title: "Independent Home" },
  { category: "Residential", path: "/apartment-resident", title: "Apartment Resident" },
  { category: "Residential", path: "/society-charging", title: "Apartment Society / RWA" },
  { category: "Residential", path: "/community-charging", title: "Gated Community" },
  { category: "Residential", path: "/pg-charging", title: "PG / Co-living" },
  { category: "Commercial", path: "/retail-charging", title: "Retail Shop" },
  { category: "Commercial", path: "/restaurant-charging", title: "Restaurant / Cafe" },
  { category: "Commercial", path: "/mall-charging", title: "Mall / Commercial" },
  { category: "Fleet", path: "/fleet-charging", title: "Delivery Fleet" },
  { category: "Highway", path: "/highway-charging", title: "Fuel Pump / Highway" },
  { category: "Commercial", path: "/hospital-charging", title: "Hospital / Institution" }
] as const;

const operationsChips = [
  "App + Payments + Billing",
  "Remote Monitoring",
  "Installation & Maintenance",
  "AC / DC Options",
  "Operator Payouts"
] as const;

const steps = [
  {
    body: "A parking bay, a storefront, a society, or a highway stop. If EV traffic exists, there is a charging opportunity.",
    title: "1) You bring the site"
  },
  {
    body: "Massive deploys hardware, software, payments, monitoring, and support as one stack.",
    title: "2) We deploy the stack"
  },
  {
    body: "Set tariffs, track sessions, and receive payouts while uptime operations stay monitored.",
    title: "3) You earn per session"
  }
] as const;

/**
 * Legacy /ev-charging-station-business "fresh" landing adapted for Next.js.
 */
export function ChargingBusinessFreshPage() {
  return (
    <div className="business-fresh">
      <section className="business-fresh__hero">
        <div className="business-fresh__hero-overlay" />
        <div className="business-fresh__container">
          <div className="business-fresh__hero-grid">
            <div className="business-fresh__copy">
              <div className="business-fresh__badge">Charging Station Business</div>
              <h1>
                Start Your Charging Station
                <br />
                <span>Run it like a business</span>
              </h1>
              <p>
                Hardware, software, payments, monitoring, and support built for real charging operations.
              </p>
              <div className="business-fresh__actions">
                <Link className="business-fresh__cta business-fresh__cta--primary" href="#choose">
                  Discover Requirement
                </Link>
                <Link className="business-fresh__cta business-fresh__cta--ghost" href="#choose">
                  Get Detailed Guide
                </Link>
              </div>
              <div className="business-fresh__chips">
                {operationsChips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </div>

            <article className="business-fresh__dashboard">
              <h2>Operator Dashboard</h2>
              <p className="business-fresh__dashboard-subtitle">Live status, sessions, payouts</p>
              <p className="business-fresh__earning-label">Estimated monthly earning</p>
              <p className="business-fresh__earning-value">₹ 80,000+</p>
              <p className="business-fresh__earning-note">~18 sessions/day x ₹150/session</p>
              <div className="business-fresh__dashboard-grid">
                <div>
                  <span>Uptime</span>
                  <strong>99.2%</strong>
                </div>
                <div>
                  <span>Sessions</span>
                  <strong>18/day</strong>
                </div>
                <div>
                  <span>Tariff</span>
                  <strong>₹/kWh</strong>
                </div>
                <div>
                  <span>Payouts</span>
                  <strong>Weekly</strong>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="business-fresh__how">
        <div className="business-fresh__container">
          <h2>How It Works</h2>
          <div className="business-fresh__steps">
            {steps.map((step) => (
              <article key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="business-fresh__choose" id="choose">
        <div className="business-fresh__container">
          <h2>Choose your existing setup. We&apos;ll show what you can build.</h2>
          <p>Select a scenario and open the detailed route for requirements, operation model, and deployment fit.</p>

          <div className="business-fresh__setup-grid">
            {setupItems.map((item) => (
              <Link className="business-fresh__setup-card" href={item.path} key={item.path}>
                <span className="business-fresh__setup-category">{item.category}</span>
                <h3>{item.title}</h3>
                <span className="business-fresh__setup-link">View Plan &gt;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
