import Link from "next/link";

/**
 * Temporary placeholder page while the station map experience is being rebuilt.
 */
export function ChargingStationsMapComingSoonPage() {
  return (
    <section aria-labelledby="charging-map-coming-soon-title" className="ev-shop-page">
      <div className="ev-shop-page__container">
        <div className="ev-shop-page__badge">Charging Stations Map</div>
        <h1 className="ev-shop-page__title" id="charging-map-coming-soon-title">
          Coming Soon
        </h1>
        <p className="ev-shop-page__description">
          We are upgrading the public charging map to deliver cleaner search, more reliable live
          status, and better route planning.
        </p>
        <div className="ev-shop-page__actions">
          <Link className="ev-shop-page__cta ev-shop-page__cta--primary" href="/charging-guide">
            Explore Charging Guide
          </Link>
          <Link className="ev-shop-page__cta ev-shop-page__cta--secondary" href="/contact">
            Contact Massive Charging
          </Link>
        </div>
      </div>
    </section>
  );
}
