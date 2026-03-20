import Link from "next/link";

/**
 * Legacy-parity "coming soon" route for EV charging shop.
 */
export function EvChargingShopPage() {
  return (
    <section className="ev-shop-page">
      <div className="ev-shop-page__container">
        <div className="ev-shop-page__badge">EV Charging Shop</div>
        <h1 className="ev-shop-page__title">Coming Soon</h1>
        <p className="ev-shop-page__description">
          We are building a focused marketplace for chargers, accessories, and installation kits.
        </p>
        <div className="ev-shop-page__actions">
          <Link className="ev-shop-page__cta ev-shop-page__cta--primary" href="/charging-guide">
            Explore Charging Guide
          </Link>
          <Link className="ev-shop-page__cta ev-shop-page__cta--secondary" href="/get-chargers">
            Request Product Recommendation
          </Link>
        </div>
      </div>
    </section>
  );
}
