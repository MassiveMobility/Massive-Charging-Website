import { Badge } from "@/components/ui";
import { componentStylePresets } from "@/lib/config/design-system";
import { Heading } from "@/components/ui";
import { Section } from "@/components/shared";
import { Stack } from "@/components/shared";
import { Text } from "@/components/ui";

type MarketingRoutePlaceholderProps = {
  title: string;
  routePath: string;
  description: string;
};

/**
 * Temporary route scaffold used during legacy URL migration.
 * Keeps routes crawlable while section-specific UI/content is migrated in follow-up steps.
 */
export function MarketingRoutePlaceholder({
  title,
  routePath,
  description
}: MarketingRoutePlaceholderProps) {
  return (
    <Section aria-labelledby="marketing-route-placeholder-title" padding="lg" tone="surface">
      <Stack gap="md">
        <Badge styleConfig={componentStylePresets.badge.brand}>Route Ready</Badge>
        <Heading
          id="marketing-route-placeholder-title"
          level={1}
          styleConfig={componentStylePresets.heading.pageTitle}
        >
          {title}
        </Heading>
        <Text styleConfig={componentStylePresets.text.leadMuted}>{description}</Text>
        <Text styleConfig={componentStylePresets.text.bodyMuted}>
          Legacy route path: <strong>{routePath}</strong>
        </Text>
      </Stack>
    </Section>
  );
}
