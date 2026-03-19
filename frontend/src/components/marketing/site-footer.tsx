import type { CSSProperties } from "react";
import type { SiteFooterStyleConfig } from "@/lib/config/design-system";

import { siteConfig } from "@/lib/config/site";

import { marketingFooterNavigation } from "@/lib/constants/navigation";

import { buildLinkStyleVariables } from "@/components/ui/link-style";
import { Container } from "@/components/shared";
import { Text } from "@/components/ui";

import NextLink from "next/link";

type SiteFooterProps = {
  styleConfig: SiteFooterStyleConfig;
};

export function SiteFooter({ styleConfig }: SiteFooterProps) {
  return (
    <footer
      className="site-footer"
      style={
        {
          "--nav-list-gap": styleConfig.navGap,
          "--shell-bg": styleConfig.shellBackground,
          "--shell-border-color": styleConfig.shellBorderColor,
          "--shell-filter": styleConfig.shellBackdropFilter,
          "--shell-row-gap": styleConfig.rowGap,
          "--shell-row-padding-block": styleConfig.rowPaddingBlock
        } as CSSProperties
      }
    >
      <Container className="site-footer__row" width="content">
        <Text className="site-footer__legal" styleConfig={styleConfig.legalTextStyle}>
          {siteConfig.name}
        </Text>
        <nav aria-label="Footer">
          <ul className="nav-list">
            {marketingFooterNavigation.map((item) => (
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
    </footer>
  );
}
