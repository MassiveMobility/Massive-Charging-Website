import type { CSSProperties } from "react";
import type { SiteHeaderStyleConfig } from "@/lib/config/design-system";

import { siteConfig } from "@/lib/config/site";

import { marketingPrimaryNavigation } from "@/lib/constants/navigation";
import { routePaths } from "@/lib/constants/routes";

import { buildLinkStyleVariables } from "@/components/ui/link-style";
import { Container } from "@/components/shared";
import { Heading } from "@/components/ui";

import NextLink from "next/link";

type SiteHeaderProps = {
  styleConfig: SiteHeaderStyleConfig;
};

export function SiteHeader({ styleConfig }: SiteHeaderProps) {
  return (
    <header
      className="site-header"
      style={
        {
          "--brand-link-color": styleConfig.brandLinkColor,
          "--brand-link-hover-color": styleConfig.brandHoverColor,
          "--nav-list-gap": styleConfig.navGap,
          "--shell-bg": styleConfig.shellBackground,
          "--shell-border-color": styleConfig.shellBorderColor,
          "--shell-filter": styleConfig.shellBackdropFilter,
          "--shell-row-gap": styleConfig.rowGap,
          "--shell-row-padding-block": styleConfig.rowPaddingBlock
        } as CSSProperties
      }
    >
      <Container className="site-header__row" width="content">
        <Heading className="brand-link" level={2} styleConfig={styleConfig.brandHeadingStyle}>
          <NextLink
            className="ui-link"
            href={routePaths.home}
            style={buildLinkStyleVariables(styleConfig.brandLinkStyle)}
          >
            {siteConfig.name}
          </NextLink>
        </Heading>
        <nav aria-label="Primary">
          <ul className="nav-list">
            {marketingPrimaryNavigation.map((item) => (
              <li key={item.href}>
                <NextLink
                  className="ui-link"
                  href={item.href}
                  style={buildLinkStyleVariables(styleConfig.navigationLinkStyle)}
                >
                  {item.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
