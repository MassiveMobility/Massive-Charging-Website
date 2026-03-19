import { Badge } from "@/components/ui";
import { buildLinkStyleVariables } from "@/components/ui/link-style";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Button } from "@/components/ui";
import { buttonStylePresets } from "@/lib/config/design-system";
import { Card } from "@/components/ui";
import { componentStylePresets } from "@/lib/config/design-system";
import { Grid } from "@/components/shared";
import { Heading } from "@/components/ui";
import { Input } from "@/components/ui";
import { routePaths } from "@/lib/constants/routes";
import { Section } from "@/components/shared";
import { Select } from "@/components/ui";
import { Stack } from "@/components/shared";
import { Text } from "@/components/ui";
import { Textarea } from "@/components/ui";

import NextLink from "next/link";

export const metadata = buildPageMetadata({
  title: "EV Charging Infrastructure Built for Reliability",
  description:
    "Massive Charging builds EV charging infrastructure programs with enterprise-grade uptime, clear operations, and scale-ready deployment planning.",
  path: routePaths.home
});

const migrationFocus = [
  "Server-rendered, crawlable marketing pages with semantic landmarks",
  "Route ownership and rendering strategy inventory to support migration tracking",
  "Centralized metadata helper for consistent SEO and AI discoverability output",
  "Domain-driven folder contracts for navigation, SEO, and content workflows"
];

export default function MarketingHomePage() {
  return (
    <>
      <Section aria-labelledby="home-title" padding="lg" tone="brand">
        <Stack gap="md">
          <Badge styleConfig={componentStylePresets.badge.warning}>Step 04 foundation</Badge>
          <Heading id="home-title" level={1} styleConfig={componentStylePresets.heading.heroInverse}>
            Massive Charging public platform foundation
          </Heading>
          <Text styleConfig={componentStylePresets.text.inverseLead}>
            This stage introduces centralized design tokens and reusable primitives so future pages stay
            consistent, accessible, and fast to evolve.
          </Text>
        </Stack>
      </Section>

      <Section aria-labelledby="migration-focus-title" tone="surface">
        <Stack gap="md">
          <Heading
            id="migration-focus-title"
            level={2}
            styleConfig={componentStylePresets.heading.sectionTitle}
          >
            Step 04 delivery focus
          </Heading>
          <Stack as="ul" gap="sm">
            {migrationFocus.map((item) => (
              <li key={item}>
                <Text styleConfig={componentStylePresets.text.body}>{item}</Text>
              </li>
            ))}
          </Stack>
        </Stack>
      </Section>

      <Section aria-labelledby="explore-routes-title" tone="surface">
        <Stack gap="md">
          <Heading
            id="explore-routes-title"
            level={2}
            styleConfig={componentStylePresets.heading.sectionTitle}
          >
            Marketing route placeholders
          </Heading>
          <Text styleConfig={componentStylePresets.text.leadMuted}>
            These routes are prepared for upcoming content migration and can now consume shared
            primitives instead of page-specific styles.
          </Text>
          <Grid as="ul" columns="3" gap="md">
            <Card as="li" interactive styleConfig={componentStylePresets.card.default}>
              <Heading level={3} styleConfig={componentStylePresets.heading.cardTitle}>
                About Massive Charging
              </Heading>
              <Text styleConfig={componentStylePresets.text.bodyMuted}>
                Mission, operating principles, and reliability strategy overview.
              </Text>
              <NextLink
                className="ui-link"
                href={routePaths.about}
                style={buildLinkStyleVariables(componentStylePresets.link.default)}
              >
                Open About page
              </NextLink>
            </Card>
            <Card as="li" interactive styleConfig={componentStylePresets.card.default}>
              <Heading level={3} styleConfig={componentStylePresets.heading.cardTitle}>
                Articles and insights
              </Heading>
              <Text styleConfig={componentStylePresets.text.bodyMuted}>
                Publishing foundation for SEO-first, long-form content operations.
              </Text>
              <NextLink
                className="ui-link"
                href={routePaths.articles}
                style={buildLinkStyleVariables(componentStylePresets.link.default)}
              >
                Open Articles page
              </NextLink>
            </Card>
            <Card as="li" interactive styleConfig={componentStylePresets.card.default}>
              <Heading level={3} styleConfig={componentStylePresets.heading.cardTitle}>
                Contact and partnerships
              </Heading>
              <Text styleConfig={componentStylePresets.text.bodyMuted}>
                Intake route for EV charging deployment and collaboration requests.
              </Text>
              <NextLink
                className="ui-link"
                href={routePaths.contact}
                style={buildLinkStyleVariables(componentStylePresets.link.default)}
              >
                Open Contact page
              </NextLink>
            </Card>
          </Grid>
        </Stack>
      </Section>

      <Section aria-labelledby="design-system-preview-title" tone="muted">
        <Stack gap="md">
          <Heading
            id="design-system-preview-title"
            level={2}
            styleConfig={componentStylePresets.heading.sectionTitle}
          >
            Internal design-system validation
          </Heading>
          <Text styleConfig={componentStylePresets.text.bodyMuted}>
            This preview section validates responsive layout, semantic text styles, form controls, and
            interaction states for the new primitives.
          </Text>
          <Grid columns="2" gap="lg">
            <Card styleConfig={componentStylePresets.card.default}>
              <Stack gap="sm">
                <Heading level={3} styleConfig={componentStylePresets.heading.cardTitle}>
                  Button and badge states
                </Heading>
                <Text styleConfig={componentStylePresets.text.bodyMuted}>
                  Use shared variants instead of one-off button styles in pages.
                </Text>
                <div className="layout-inline">
                  <Badge styleConfig={componentStylePresets.badge.brand}>Primary</Badge>
                  <Badge styleConfig={componentStylePresets.badge.success}>Stable</Badge>
                  <Badge styleConfig={componentStylePresets.badge.danger}>Alert</Badge>
                </div>
                <div className="layout-inline">
                  <Button styleConfig={buttonStylePresets.brandSolid}>Primary action</Button>
                  <Button styleConfig={buttonStylePresets.neutralOutline}>Secondary action</Button>
                  <Button styleConfig={buttonStylePresets.dangerGhost}>Destructive action</Button>
                </div>
              </Stack>
            </Card>
            <Card styleConfig={componentStylePresets.card.default}>
              <Stack gap="sm">
                <Heading level={3} styleConfig={componentStylePresets.heading.cardTitle}>
                  Form controls and accessibility
                </Heading>
                <Input
                  hint="A descriptive hint helps users and assistive technologies."
                  label="Project name"
                  placeholder="City expansion plan"
                  styleConfig={componentStylePresets.field.inputDefault}
                />
                <Select label="Priority" styleConfig={componentStylePresets.field.inputDefault}>
                  <option value="high">High priority rollout</option>
                  <option value="medium">Medium priority rollout</option>
                  <option value="low">Exploration</option>
                </Select>
                <Textarea
                  error="This shows the semantic error state token."
                  label="Deployment notes"
                  placeholder="Share constraints, timeline, and station volume..."
                  styleConfig={componentStylePresets.field.inputDefault}
                />
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Section>
    </>
  );
}
