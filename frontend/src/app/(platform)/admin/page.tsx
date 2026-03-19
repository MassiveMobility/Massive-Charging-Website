import { Badge } from "@/components/ui";
import { buildLinkStyleVariables } from "@/components/ui/link-style";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { componentStylePresets } from "@/lib/config/design-system";
import { Heading } from "@/components/ui";
import { routePaths } from "@/lib/constants/routes";
import { Section } from "@/components/shared";
import { Stack } from "@/components/shared";
import { Text } from "@/components/ui";

import NextLink from "next/link";

export const metadata = buildPageMetadata({
  title: "Admin Platform Placeholder",
  description: "Platform shell for upcoming role-based admin and content workflows.",
  path: routePaths.admin,
  noIndex: true
});

const adminArchitectureChecklist = [
  "Protected route boundary under the platform route group",
  "Clear separation between public marketing and operational workflows",
  "No-index metadata to keep placeholder platform routes out of public search results"
];

export default function AdminHomePage() {
  return (
    <>
      <Section aria-labelledby="admin-title" padding="md" tone="surface" width="none">
        <Stack gap="md">
          <Badge styleConfig={componentStylePresets.badge.neutral}>
            Admin
          </Badge>
          <Heading id="admin-title" level={1} styleConfig={componentStylePresets.heading.pageTitle}>
            Platform workspace placeholder
          </Heading>
          <Text styleConfig={componentStylePresets.text.leadMuted}>
            This route reserves the structure for authentication, RBAC, and content operations without
            leaking platform concerns into public marketing routes.
          </Text>
        </Stack>
      </Section>

      <Section aria-labelledby="admin-checklist-title" tone="surface" width="none">
        <Stack gap="md">
          <Heading
            id="admin-checklist-title"
            level={2}
            styleConfig={componentStylePresets.heading.sectionTitle}
          >
            Architecture baseline in this route
          </Heading>
          <Stack as="ul" gap="sm">
            {adminArchitectureChecklist.map((item) => (
              <li key={item}>
                <Text styleConfig={componentStylePresets.text.body}>{item}</Text>
              </li>
            ))}
          </Stack>
        </Stack>
      </Section>

      <Section aria-labelledby="admin-links-title" tone="surface" width="none">
        <Stack gap="sm">
          <Heading
            id="admin-links-title"
            level={2}
            styleConfig={componentStylePresets.heading.sectionTitle}
          >
            Next placeholder route
          </Heading>
          <Text styleConfig={componentStylePresets.text.body}>
            <NextLink
              className="ui-link"
              href={routePaths.adminArticles}
              style={buildLinkStyleVariables(componentStylePresets.link.default)}
            >
              Go to article operations placeholder
            </NextLink>
          </Text>
        </Stack>
      </Section>
    </>
  );
}
