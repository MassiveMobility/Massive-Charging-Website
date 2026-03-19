"use client";

import type { LinkStyleConfig } from "@/lib/config/design-system";
import type { NavigationItem } from "@/lib/constants/navigation";

import { buildLinkStyleVariables } from "@/components/ui/link-style";
import { cn } from "@/lib/utils/cn";
import { MobileMenu } from "@/components/shared/mobile-menu";
import { usePathname } from "next/navigation";

import NextLink from "next/link";

export type SiteNavProps = {
  ariaLabel: string;
  className?: string;
  items: readonly NavigationItem[];
  linkStyleConfig: LinkStyleConfig;
  showActiveState?: boolean;
  showMobileMenu?: boolean;
};

/**
 * Shared navigation pattern with active-link semantics and optional mobile drawer support.
 */
export function SiteNav({
  ariaLabel,
  className,
  items,
  linkStyleConfig,
  showActiveState = true,
  showMobileMenu = true
}: SiteNavProps) {
  const pathname = usePathname();
  const linkVariables = buildLinkStyleVariables(linkStyleConfig);

  return (
    <nav aria-label={ariaLabel} className={cn("site-nav", className)}>
      <ul className={cn("nav-list", "site-nav__list", showMobileMenu && "site-nav__list--desktop")}>
        {items.map((item) => {
          const isActive = showActiveState && isRouteActive(pathname, item.href);

          return (
            <li key={item.href}>
              <NextLink
                aria-current={isActive ? "page" : undefined}
                className={cn("ui-link", "ui-link--nav", isActive && "ui-link--active")}
                href={item.href}
                style={linkVariables}
              >
                {item.label}
              </NextLink>
            </li>
          );
        })}
      </ul>

      {showMobileMenu ? (
        <MobileMenu
          ariaLabel={ariaLabel}
          items={items}
          linkStyleConfig={linkStyleConfig}
          pathname={pathname}
          showActiveState={showActiveState}
        />
      ) : null}
    </nav>
  );
}

function isRouteActive(currentPathname: string, routePath: string) {
  if (routePath === "/") {
    return currentPathname === routePath;
  }

  return currentPathname === routePath || currentPathname.startsWith(`${routePath}/`);
}
