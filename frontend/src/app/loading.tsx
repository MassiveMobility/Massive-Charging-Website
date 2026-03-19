import { Badge } from "@/components/ui";
import { componentStylePresets } from "@/lib/config/design-system";
import { Section } from "@/components/shared";
import { Stack } from "@/components/shared";
import { Text } from "@/components/ui";

export default function Loading() {
  return (
    <main aria-busy="true" aria-live="polite" id="main-content">
      <Section padding="md" tone="surface">
        <Stack gap="sm">
          <Badge styleConfig={componentStylePresets.badge.neutral}>
            Loading
          </Badge>
          <Text styleConfig={componentStylePresets.text.body}>Preparing the page...</Text>
        </Stack>
      </Section>
    </main>
  );
}
