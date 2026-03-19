import { Badge } from "@/components/ui";
import { buildLinkStyleVariables } from "@/components/ui/link-style";
import { componentStylePresets } from "@/lib/config/design-system";
import { Heading } from "@/components/ui";
import { routePaths } from "@/lib/constants/routes";
import { Section } from "@/components/shared";
import { Stack } from "@/components/shared";
import { Text } from "@/components/ui";

import NextLink from "next/link";

export default function NotFound() {
  return (
    <main id="main-content">
      <Section padding="md" tone="surface">
        <Stack gap="md">
          <Badge styleConfig={componentStylePresets.badge.danger}>
            404
          </Badge>
          <Heading level={1} styleConfig={componentStylePresets.heading.stateTitle}>
            Page not found
          </Heading>
          <Text styleConfig={componentStylePresets.text.body}>
            The page you requested does not exist or has moved.
          </Text>
          <Text styleConfig={componentStylePresets.text.body}>
            <NextLink
              className="ui-link"
              href={routePaths.home}
              style={buildLinkStyleVariables(componentStylePresets.link.default)}
            >
              Return to homepage
            </NextLink>
          </Text>
        </Stack>
      </Section>
    </main>
  );
}
