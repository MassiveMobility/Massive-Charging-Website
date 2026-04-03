import Link from "next/link";

import { footerColumns } from "@/lib/constants/navigation";

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/massivecharging", label: "Facebook" },
  { href: "https://www.instagram.com/massivecharging", label: "Instagram" },
  { href: "https://x.com/massivecharging", label: "Twitter" },
  { href: "https://www.linkedin.com/company/massivecharging", label: "LinkedIn" }
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
        <div className="site-footer-v2__columns-grid">
          {footerColumns.map((column) => (
            <nav key={column.title} className="site-footer-v2__column">
              <h2 className="site-footer-v2__column-title">{column.title}</h2>
              <ul className="site-footer-v2__column-links">
                {column.links.map((link) => (
                  <li
                    key={link.href}
                    className={`site-footer-v2__column-link-item ${
                      link.indent ? "site-footer-v2__column-link-item--indent" : ""
                    } ${link.divider ? "site-footer-v2__column-link-item--divider" : ""}`}
                  >
                    <Link href={link.href} className="site-footer-v2__column-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="site-footer-v2__divider-horizontal" />

      <div className="site-footer-v2__footer">
        <nav aria-label="Follow Massive Charging" className="site-footer-v2__social-links">
          <h3 className="site-footer-v2__social-title">Follow Us</h3>
          {SOCIAL_LINKS.map((link) => (
            <a
              className="site-footer-v2__social-link"
              href={link.href}
              key={link.label}
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.label}
            </a>
          ))}
        </nav>

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
