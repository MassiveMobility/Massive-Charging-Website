import Link from "next/link";

export type HomeSecondScrollProps = {
  eyebrow?: string | undefined;
  titleLine1?: string | undefined;
  titleLine2?: string | undefined;
  ctaPrimaryLabel?: string | undefined;
  ctaPrimaryHref?: string | undefined;
  ctaSecondaryLabel?: string | undefined;
  ctaSecondaryHref?: string | undefined;
};

export function HomeSecondScroll({
  eyebrow = "One App, Every Network",
  titleLine1 = "Install Your Personal",
  titleLine2 = "EV Charger at Home",
  ctaPrimaryLabel = "Get My Home Charger",
  ctaPrimaryHref = "/ev-charging-station-business#choose",
  ctaSecondaryLabel = "View Installation Guide",
  ctaSecondaryHref = "/ev-charging-station-business#choose",
}: HomeSecondScrollProps) {
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
                <span>{eyebrow}</span>
              </p>

              <h2 className="home-second-v2__title">
                <span className="home-second-v2__title-line">{titleLine1}</span>
                <span className="home-second-v2__title-line">{titleLine2}</span>
              </h2>

              <div className="home-second-v2__spacer">
                <img alt="" aria-hidden="true" className="home-second-v2__arrow" src="/arrow_insert.svg" />

                <div className="home-second-v2__actions">
                  <Link className="home-second-v2__button home-second-v2__button--primary" href={ctaPrimaryHref as `/${string}`}>
                    {ctaPrimaryLabel}
                  </Link>
                  <Link className="home-second-v2__button home-second-v2__button--secondary" href={ctaSecondaryHref as `/${string}`}>
                    {ctaSecondaryLabel}
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
