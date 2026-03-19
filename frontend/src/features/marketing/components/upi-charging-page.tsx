import Image from "next/image";
import Link from "next/link";

const PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=in.one.charging&hl=en_IN";

const stats = [
  { hint: "Last 7 days", icon: "/location_on.svg", label: "Stations", value: "100+" },
  { hint: "Scan to charge", icon: "/qr_code_scanner.svg", label: "Start time", value: "< 20s" },
  { hint: "No wallets", icon: "/credit_card.svg", label: "Payments", value: "UPI" },
  { hint: "Verified card", icon: "/verified_user.svg", label: "Secure", value: "Verified" }
] as const;

const steps = [
  { description: "Open any UPI app and scan the charger QR.", icon: "/qrBox.svg", title: "Scan the QR" },
  {
    description: "Review connector, tariff, and session details before payment.",
    icon: "/checked.svg",
    title: "Confirm the session"
  },
  {
    description: "Charging starts instantly after payment authorization.",
    icon: "/scooter.svg",
    title: "Start Charging"
  }
] as const;

/**
 * Legacy UPI charging page migrated to Next.js with centralized styling.
 */
export function UpiChargingPage() {
  return (
    <div className="upi-charging">
      <section className="upi-charging__hero">
        <div className="upi-charging__container">
          <div className="upi-charging__grid">
            <div className="upi-charging__left">
              <div className="upi-charging__badge">
                <span className="upi-charging__badge-dot" />
                <span className="upi-charging__badge-text">Quick on-the-go charging</span>
              </div>

              <h1 className="upi-charging__heading">
                Scan UPI <span className="upi-charging__heading-accent">&amp; Charge EV</span>
              </h1>

              <p className="upi-charging__subtitle">
                No app installation required. Pay from any UPI app and start a verified charging session in seconds.
              </p>

              <div className="upi-charging__buttons">
                <Link className="legacy-btn legacy-btn--primary" href="/charging-guide">
                  Get UPI Chargers
                </Link>
                <a className="legacy-btn legacy-btn--outline" href={PLAYSTORE_URL} rel="noopener noreferrer" target="_blank">
                  Get 1C EV App
                </a>
              </div>
            </div>

            <aside className="upi-charging__right">
              <article className="fun-facts-card">
                <div className="fun-facts-card__header">
                  <div className="fun-facts-card__title">
                    <Image alt="bolt icon" height={20} src="/electric_bolt.png" width={20} />
                    <span className="fun-facts-card__title-text">Fun facts</span>
                  </div>
                  <span className="fun-facts-card__upi-badge">UPI Ready</span>
                </div>

                <div className="fun-facts-card__stats">
                  {stats.map((stat) => (
                    <div className="stat-box" key={stat.label}>
                      <div className="stat-box__label">
                        <Image alt="" height={16} src={stat.icon} width={16} />
                        <span className="stat-box__label-text">{stat.label}</span>
                      </div>
                      <div className="stat-box__value">{stat.value}</div>
                      <div className="stat-box__hint">{stat.hint}</div>
                    </div>
                  ))}
                </div>

                <div className="fun-facts-card__banner">
                  <span className="fun-facts-card__banner-text">Scan with any UPI app. Confirm and start in seconds.</span>
                </div>
              </article>
            </aside>
          </div>
        </div>
      </section>

      <section className="fast-starts">
        <div className="fast-starts__container">
          <div className="fast-starts__grid">
            <div className="fast-starts__left">
              <div className="upi-charging__badge">
                <span className="upi-charging__badge-dot" />
                <span className="upi-charging__badge-text">Charge EV with UPI</span>
              </div>

              <h2 className="fast-starts__heading">Build for fast starts, not app fatigue.</h2>
              <p className="fast-starts__description">
                Massive UPI charging flow lets drivers begin sessions in seconds with familiar payment behavior.
              </p>

              <div className="upi-charging__buttons">
                <Link className="legacy-btn legacy-btn--primary" href="/charging-stations-map">
                  Locate chargers
                </Link>
                <button className="legacy-btn legacy-btn--outline" type="button">
                  Works with any UPI app
                </button>
              </div>
            </div>

            <div className="fast-starts__right">
              <div className="fast-starts__right-content">
                <div className="fast-starts__steps">
                  {steps.map((step) => (
                    <article className="step-card" key={step.title}>
                      <Image alt={step.title} className="step-card__icon" height={44} src={step.icon} width={44} />
                      <p className="step-card__title">{step.title}</p>
                      <p className="step-card__description">{step.description}</p>
                    </article>
                  ))}
                </div>

                <article className="one-app-banner">
                  <div className="one-app-banner__content">
                    <p className="one-app-banner__title">One app to rule them all</p>
                    <p className="one-app-banner__description">
                      Use the 1C app for discovery, receipts, and unified charging history.
                    </p>
                  </div>
                  <div className="one-app-banner__button">
                    <a className="legacy-btn legacy-btn--primary" href={PLAYSTORE_URL} rel="noopener noreferrer" target="_blank">
                      Get 1C EV App
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
