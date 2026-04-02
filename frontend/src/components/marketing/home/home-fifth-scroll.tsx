import Link from "next/link";

const DEFAULT_CHIPS = ["Costs", "Infrastructure", "Charging Types", "Best Practices"];

export type HomeFifthScrollProps = {
  vehicleChip?: string | undefined;
  heading?: string | undefined;
  subheading?: string | undefined;
  description?: string | undefined;
  chips?: string[] | undefined;
  ctaLabel?: string | undefined;
  ctaHref?: string | undefined;
};

export function HomeFifthScroll({
  vehicleChip = "2W, 3W, 4W",
  heading = "Own an EV or Planning to Buy One?",
  subheading = "Confused about Charging Cost & Required Infrastructure?",
  description = "Get Detailed Charging Guide for your Vehicles",
  chips = DEFAULT_CHIPS,
  ctaLabel = "Explore Charging Guide",
  ctaHref = "/charging-guide",
}: HomeFifthScrollProps) {
  return (
    <section className="home-fifth-v2" id="ev-charging-guide">
      <div className="home-fifth-v2__container">
        <div className="home-fifth-v2__grid">
          <div className="home-fifth-v2__left">
            <div className="home-fifth-v2__vehicle-chip">
              <span className="home-fifth-v2__vehicle-chip-text">{vehicleChip}</span>
            </div>

            <h2 className="home-fifth-v2__heading">{heading}</h2>

            <p className="home-fifth-v2__subheading">{subheading}</p>

            <p className="home-fifth-v2__description">{description}</p>

            <div className="home-fifth-v2__chips">
              {chips.map((chip) => (
                <span className="home-fifth-v2__chip" key={chip}>
                  <span className="home-fifth-v2__chip-text">{chip}</span>
                </span>
              ))}
            </div>

            <div className="home-fifth-v2__cta">
              <Link className="home-fifth-v2__cta-button" href={ctaHref as `/${string}`}>
                {ctaLabel}
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
