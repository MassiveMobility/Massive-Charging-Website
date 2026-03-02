import React from "react";
import "./BottomBar.css";

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/massivecharging" },
  { label: "Instagram", href: "https://www.instagram.com/massivecharging" },
  { label: "Twitter", href: "https://x.com/massivecharging" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/massivecharging" },
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/ev-charging-station-business" },
  { label: "Services", href: "/find-chargers" },
  { label: "Contact", href: "/get-chargers" },
];

export default function BottomBar() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bottom-bar">
      {/* Section 1: Main content (90% height) */}
      <div className="bottom-bar__main">
        {/* Left 70% – Three columns */}
        <div className="bottom-bar__left">
          {/* Column 1: Company */}
          <div className="bottom-bar__column">
            <h3 className="bottom-bar__column-title">Company</h3>
            <p className="bottom-bar__column-text bottom-bar__address">
              Plot No. 2, Spring House Coworking, third floor, Sector-43,
              Gurugram, Haryana – 122002.
            </p>
            <div className="bottom-bar__red-logo">
              <img src="/red-logo.svg" alt="Massive Charging" />
            </div>
          </div>

          {/* Column 2: Follow Us */}
          <div className="bottom-bar__column">
            <h3 className="bottom-bar__column-title">Follow Us</h3>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bottom-bar__column-link"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Column 3: Quick Links */}
          <div className="bottom-bar__column">
            <h3 className="bottom-bar__column-title">Quick Links</h3>
            {QUICK_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="bottom-bar__column-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Vertical divider */}
        <div className="bottom-bar__divider-vertical" />

        {/* Right 30% */}
        <div className="bottom-bar__right">
          <h3 className="bottom-bar__right-title">
            The Ultimate EV Charging App
          </h3>
          <p className="bottom-bar__right-desc">
            Experience charging made simple. Find, manage, and optimize your
            electric journey all from one powerful app.
          </p>
          <a href="https://play.google.com/store/apps/details?id=in.one.charging&hl=en_IN" target="_blank" rel="noopener noreferrer" className="bottom-bar__cta-btn" style={{ textDecoration: "none" }}>
            <span className="bottom-bar__cta-text">Get Started Now</span>
          </a>
        </div>
      </div>

      {/* Horizontal divider */}
      <div className="bottom-bar__divider-horizontal" />

      {/* Section 2: Bottom bar (10% height) */}
      <div className="bottom-bar__footer">
        <div className="bottom-bar__footer-links">
          <a href="/privacy" className="bottom-bar__footer-link">
            Privacy Policy
          </a>
          <span className="bottom-bar__footer-separator">|</span>
          <a href="/terms" className="bottom-bar__footer-link">
            Terms of Service
          </a>
          <span className="bottom-bar__footer-separator">|</span>
          <a href="/sitemap" className="bottom-bar__footer-link">
            Sitemap
          </a>
        </div>
        <span className="bottom-bar__footer-copyright">
          &copy; {currentYear} Massive Charging. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
