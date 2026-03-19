import { Badge } from "@/components/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { componentStylePresets } from "@/lib/config/design-system";
import { Heading } from "@/components/ui";
import { routePaths } from "@/lib/constants/routes";
import { Section } from "@/components/shared";
import { Stack } from "@/components/shared";
import { Text } from "@/components/ui";

export const metadata = buildPageMetadata({
  title: "Admin Article Workflow Placeholder",
  description: "Scaffold route for role-based article drafting, review, and publishing operations.",
  path: routePaths.adminArticles,
  noIndex: true
});

const plannedWorkflowStages = [
  "Draft creation with validation and autosave support",
  "Review, approval, and publish actions with role-based permissions",
  "Scheduled publishing and editorial status tracking for operations independence"
];

export default function AdminArticlesPage() {
  return (
    <>
      <Section aria-labelledby="admin-articles-title" padding="md" tone="surface" width="none">
        <Stack gap="md">
          <Badge styleConfig={componentStylePresets.badge.neutral}>
            Admin articles
          </Badge>
          <Heading
            id="admin-articles-title"
            level={1}
            styleConfig={componentStylePresets.heading.pageTitle}
          >
            Editorial workflow route placeholder
          </Heading>
          <Text styleConfig={componentStylePresets.text.leadMuted}>
            This page establishes the route contract for an upcoming admin publishing experience.
          </Text>
        </Stack>
      </Section>

      <Section aria-labelledby="workflow-title" tone="surface" width="none">
        <Stack gap="md">
          <Heading id="workflow-title" level={2} styleConfig={componentStylePresets.heading.sectionTitle}>
            Planned workflow stages
          </Heading>
          <Stack as="ul" gap="sm">
            {plannedWorkflowStages.map((stage) => (
              <li key={stage}>
                <Text styleConfig={componentStylePresets.text.body}>{stage}</Text>
              </li>
            ))}
          </Stack>
        </Stack>
      </Section>
    </>
  );
}
