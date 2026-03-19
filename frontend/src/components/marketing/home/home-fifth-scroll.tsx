import Link from "next/link";

const CHIPS = ["Costs", "Infrastructure", "Charging Types", "Best Practices"] as const;

export function HomeFifthScroll() {
  return (
    <section className="home-fifth-v2" id="ev-charging-guide">
      <div className="home-fifth-v2__container">
        <div className="home-fifth-v2__grid">
          <div className="home-fifth-v2__left">
            <div className="home-fifth-v2__vehicle-chip">
              <span className="home-fifth-v2__vehicle-chip-text">2W, 3W, 4W</span>
            </div>

            <h2 className="home-fifth-v2__heading">Own an EV or Planning to Buy One?</h2>

            <p className="home-fifth-v2__subheading">
              Confused about Charging Cost &amp; Required Infrastructure?
            </p>

            <p className="home-fifth-v2__description">Get Detailed Charging Guide for your Vehicles</p>

            <div className="home-fifth-v2__chips">
              {CHIPS.map((chip) => (
                <span className="home-fifth-v2__chip" key={chip}>
                  <span className="home-fifth-v2__chip-text">{chip}</span>
                </span>
              ))}
            </div>

            <div className="home-fifth-v2__cta">
              <Link className="home-fifth-v2__cta-button" href="/charging-guide">
                Explore Charging Guide
              </Link>
            </div>
          </div>

          <div className="home-fifth-v2__right">
            <img
              alt="EV Charging Product Manual"
              className="home-fifth-v2__manual-image"
              loading="lazy"
              src="/product manual.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
