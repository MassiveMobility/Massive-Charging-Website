import { Badge } from "@/components/ui";
import { buildLinkStyleVariables } from "@/components/ui/link-style";
import { componentStylePresets } from "@/lib/config/design-system";
import { Container } from "@/components/shared";
import { routePaths } from "@/lib/constants/routes";
import { Section } from "@/components/shared";
import { Stack } from "@/components/shared";
import { Text } from "@/components/ui";

import type { ReactNode } from "react";

import NextLink from "next/link";

type PlatformLayoutProps = {
  children: ReactNode;
};

export default function PlatformLayout({ children }: PlatformLayoutProps) {
  return (
    <div className="platform-shell">
      <header className="platform-header">
        <Container className="platform-header__row" width="content">
          <Stack gap="sm">
            <Badge styleConfig={componentStylePresets.badge.neutral}>
              Platform area
            </Badge>
            <Text styleConfig={componentStylePresets.text.smallMuted}>
              Protected authentication and role-based access control will be added in upcoming migration
              steps.
            </Text>
          </Stack>
          <Text as="span" styleConfig={componentStylePresets.text.smallMuted}>
            <NextLink
              className="ui-link"
              href={routePaths.home}
              style={buildLinkStyleVariables(componentStylePresets.link.default)}
            >
              Back to public website
            </NextLink>
          </Text>
        </Container>
      </header>
      <main id="main-content">
        <Section padding="md" tone="transparent" width="content">
          <Stack gap="lg">{children}</Stack>
        </Section>
      </main>
    </div>
  );
}
