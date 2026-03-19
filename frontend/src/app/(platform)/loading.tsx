import { Badge } from "@/components/ui";
import { componentStylePresets } from "@/lib/config/design-system";
import { Section } from "@/components/shared";
import { Stack } from "@/components/shared";
import { Text } from "@/components/ui";

export default function PlatformLoading() {
  return (
    <Section aria-busy="true" aria-live="polite" padding="md" tone="surface" width="none">
      <Stack gap="sm">
        <Badge styleConfig={componentStylePresets.badge.neutral}>
          Loading platform route
        </Badge>
        <Text styleConfig={componentStylePresets.text.body}>
          Preparing admin workspace placeholder...
        </Text>
      </Stack>
    </Section>
  );
}
