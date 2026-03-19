import Link from "next/link";

/**
 * Legacy-parity "coming soon" route for EV charging shop.
 */
export function EvChargingShopPage() {
  return (
    <section className="ev-shop-legacy">
      <div className="ev-shop-legacy__overlay" />
      <div className="ev-shop-legacy__container">
        <div className="ev-shop-legacy__badge">EV Charging Shop</div>
        <h1 className="ev-shop-legacy__title">Coming Soon</h1>
        <p className="ev-shop-legacy__description">
          We are building a focused marketplace for chargers, accessories, and installation kits.
        </p>
        <div className="ev-shop-legacy__actions">
          <Link className="ev-shop-legacy__cta ev-shop-legacy__cta--primary" href="/charging-guide">
            Explore Charging Guide
          </Link>
          <Link className="ev-shop-legacy__cta ev-shop-legacy__cta--secondary" href="/get-chargers">
            Request Product Recommendation
          </Link>
        </div>
      </div>
    </section>
  );
}
