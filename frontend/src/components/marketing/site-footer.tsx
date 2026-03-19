import Link from "next/link";

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/massivecharging", label: "Facebook" },
  { href: "https://www.instagram.com/massivecharging", label: "Instagram" },
  { href: "https://x.com/massivecharging", label: "Twitter" },
  { href: "https://www.linkedin.com/company/massivecharging", label: "LinkedIn" }
] as const;

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/ev-charging-station-business", label: "About Us" },
  { href: "/charging-stations-map", label: "Services" },
  { href: "/get-chargers", label: "Contact" }
] as const;

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/sitemap", label: "Sitemap" }
] as const;

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer site-footer-v2">
      <div className="site-footer-v2__main">
        <div className="site-footer-v2__left">
          <section className="site-footer-v2__column" aria-label="Company information">
            <h2 className="site-footer-v2__column-title">Company</h2>
            <p className="site-footer-v2__column-text site-footer-v2__address">
              Plot No. 2, Spring House Coworking, third floor, Sector-43, Gurugram, Haryana - 122002.
            </p>
            <div className="site-footer-v2__red-logo">
              <img alt="Massive Charging" className="site-footer-v2__red-logo-image" src="/red-logo.svg" />
            </div>
          </section>

          <nav aria-label="Follow Massive Charging" className="site-footer-v2__column">
            <h2 className="site-footer-v2__column-title">Follow Us</h2>
            {SOCIAL_LINKS.map((link) => (
              <a
                className="site-footer-v2__column-link"
                href={link.href}
                key={link.label}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <nav aria-label="Quick links" className="site-footer-v2__column">
            <h2 className="site-footer-v2__column-title">Quick Links</h2>
            {QUICK_LINKS.map((link) => (
              <Link className="site-footer-v2__column-link" href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="site-footer-v2__divider-vertical" />

        <section className="site-footer-v2__right" aria-label="Mobile app call to action">
          <h2 className="site-footer-v2__right-title">The Ultimate EV Charging App</h2>
          <p className="site-footer-v2__right-desc">
            Experience charging made simple. Find, manage, and optimize your electric journey all from one powerful
            app.
          </p>
          <a
            className="site-footer-v2__cta-btn"
            href="https://play.google.com/store/apps/details?id=in.one.charging&hl=en_IN"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="site-footer-v2__cta-text">Get Started Now</span>
          </a>
        </section>
      </div>

      <div className="site-footer-v2__divider-horizontal" />

      <div className="site-footer-v2__footer">
        <nav aria-label="Legal links" className="site-footer-v2__footer-links">
          {LEGAL_LINKS.map((link, index) => (
            <span className="site-footer-v2__footer-link-wrap" key={link.label}>
              {index > 0 ? <span className="site-footer-v2__footer-separator">|</span> : null}
              <Link className="site-footer-v2__footer-link" href={link.href}>
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
        <span className="site-footer-v2__footer-copyright">
          Copyright {currentYear} Massive Charging. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
