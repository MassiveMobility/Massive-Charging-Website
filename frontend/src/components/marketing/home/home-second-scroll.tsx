import Link from "next/link";

export function HomeSecondScroll() {
  return (
    <section className="home-second-v2" id="ev-home-charging">
      <div aria-hidden="true" className="home-second-v2__line" />
      <div aria-hidden="true" className="home-second-v2__clip" />

      <div className="home-second-v2__content">
        <div className="home-second-v2__container">
          <div className="home-second-v2__grid">
            <div className="home-second-v2__left">
              <p className="home-second-v2__eyebrow">
                <img alt="" aria-hidden="true" className="home-second-v2__bolt" src="/bolt.png" />
                <span>One App, Every Network</span>
              </p>

              <h2 className="home-second-v2__title">
                <span className="home-second-v2__title-line">Install Your Personal</span>
                <span className="home-second-v2__title-line">EV Charger at Home</span>
              </h2>

              <div className="home-second-v2__spacer">
                <img alt="" aria-hidden="true" className="home-second-v2__arrow" src="/arrow_insert.svg" />

                <div className="home-second-v2__actions">
                  <Link className="home-second-v2__button home-second-v2__button--primary" href="/ev-charging-station-business#choose">
                    Get My Home Charger
                  </Link>
                  <Link className="home-second-v2__button home-second-v2__button--secondary" href="/ev-charging-station-business#choose">
                    View Installation Guide
                  </Link>
                </div>
              </div>
            </div>

            <div className="home-second-v2__right">
              <img
                alt="EV Home Charger"
                className="home-second-v2__hero-image"
                src="/Group 27821.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
