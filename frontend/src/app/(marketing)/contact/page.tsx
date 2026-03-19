import { Badge } from "@/components/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { componentStylePresets } from "@/lib/config/design-system";
import { Heading } from "@/components/ui";
import { routePaths } from "@/lib/constants/routes";
import { Section } from "@/components/shared";
import { Stack } from "@/components/shared";
import { Text } from "@/components/ui";

export const metadata = buildPageMetadata({
  title: "Contact Massive Charging",
  description:
    "Connect with Massive Charging to discuss EV charging deployment scope, operational needs, and launch timelines.",
  path: routePaths.contact
});

const intakeChecklist = [
  "Target city or region for deployment",
  "Expected charger count and projected utilization",
  "Launch timeline and operational constraints"
];

export default function ContactPage() {
  return (
    <>
      <Section aria-labelledby="contact-title" padding="lg" tone="surface">
        <Stack gap="md">
          <Badge styleConfig={componentStylePresets.badge.brand}>
            Contact
          </Badge>
          <Heading id="contact-title" level={1} styleConfig={componentStylePresets.heading.pageTitle}>
            Start a deployment conversation
          </Heading>
          <Text styleConfig={componentStylePresets.text.leadMuted}>
            Share your charging goals and constraints so the team can scope the right rollout strategy.
          </Text>
        </Stack>
      </Section>

      <Section aria-labelledby="intake-title" tone="surface">
        <Stack gap="md">
          <Heading id="intake-title" level={2} styleConfig={componentStylePresets.heading.sectionTitle}>
            What to include in your request
          </Heading>
          <Stack as="ul" gap="sm">
            {intakeChecklist.map((item) => (
              <li key={item}>
                <Text styleConfig={componentStylePresets.text.body}>{item}</Text>
              </li>
            ))}
          </Stack>
        </Stack>
      </Section>
    </>
  );
}
