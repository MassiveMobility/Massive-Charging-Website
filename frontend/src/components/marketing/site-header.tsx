import { siteConfig } from "@/lib/config/site";

import { marketingPrimaryNavigation } from "@/lib/constants/navigation";

import { routePaths } from "@/lib/constants/routes";

import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell">
        <Link className="brand-link" href={routePaths.home}>
          {siteConfig.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="nav-list">
            {marketingPrimaryNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
