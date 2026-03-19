import { siteConfig } from "@/lib/config/site";

import { marketingFooterNavigation } from "@/lib/constants/navigation";

import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <p>{siteConfig.name}</p>
        <nav aria-label="Footer">
          <ul className="nav-list">
            {marketingFooterNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
