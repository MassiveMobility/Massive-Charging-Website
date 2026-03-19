import { Badge } from "@/components/ui";
import { componentStylePresets } from "@/lib/config/design-system";
import { Section } from "@/components/shared";
import { Stack } from "@/components/shared";
import { Text } from "@/components/ui";

export default function MarketingLoading() {
  return (
    <Section aria-busy="true" aria-live="polite" padding="md" tone="surface">
      <Stack gap="sm">
        <Badge styleConfig={componentStylePresets.badge.neutral}>
          Loading marketing content
        </Badge>
        <Text styleConfig={componentStylePresets.text.body}>Preparing page sections...</Text>
      </Stack>
    </Section>
  );
}
