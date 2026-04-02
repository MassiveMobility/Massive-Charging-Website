const PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=in.one.charging&hl=en_IN";

function BoltIcon() {
  return (
    <svg
      aria-hidden="true"
      className="home-business-v2__income-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

export type HomeBusinessScrollProps = {
  kicker?: string | undefined;
  titleLine1?: string | undefined;
  titleLine2?: string | undefined;
  subtitle?: string | undefined;
  ctaLabel?: string | undefined;
  incomeBadge?: string | undefined;
};

export function HomeBusinessScroll({
  kicker = "Setup your charger and earn",
  titleLine1 = "Start Your EV Charging",
  titleLine2 = "Business",
  subtitle = "Covert empty land into EV Charging Station and earn monthly income. Get Hardware and Software to run Charging Station.",
  ctaLabel = "Get EV Charging App",
  incomeBadge = "Rs 80,000+ monthly income",
}: HomeBusinessScrollProps) {
  return (
    <section className="home-business-v2">
      <div className="home-business-v2__container">
        <div className="home-business-v2__left">
          <p className="home-business-v2__kicker">{kicker}</p>

          <h2 className="home-business-v2__title">
            <span className="home-business-v2__title-line">{titleLine1}</span>
            <span className="home-business-v2__title-line">{titleLine2}</span>
          </h2>

          <p className="home-business-v2__subtitle">{subtitle}</p>

          <a className="home-business-v2__cta" href={PLAYSTORE_URL} rel="noopener noreferrer" target="_blank">
            {ctaLabel}
          </a>

          <div className="home-business-v2__income-badge">
            <BoltIcon />
            <span>{incomeBadge}</span>
          </div>
        </div>

        <div className="home-business-v2__right">
          <img
            alt="EV Charging Business"
            className="home-business-v2__hero-image"
            src="/Group 27823.svg"
          />
        </div>
      </div>
    </section>
  );
}
