"use client";

import { Badge } from "@/components/ui";
import { Button } from "@/components/ui";
import { buttonStylePresets } from "@/lib/config/design-system";
import { componentStylePresets } from "@/lib/config/design-system";
import { Heading } from "@/components/ui";
import { Section } from "@/components/shared";
import { Stack } from "@/components/shared";
import { Text } from "@/components/ui";
import { useEffect } from "react";

type PlatformErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function PlatformError({ error, reset }: PlatformErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section padding="md" role="alert" tone="surface" width="none">
      <Stack gap="md">
        <Badge styleConfig={componentStylePresets.badge.danger}>
          Platform route error
        </Badge>
        <Heading level={1} styleConfig={componentStylePresets.heading.stateTitle}>
          We could not load this admin page.
        </Heading>
        <Text styleConfig={componentStylePresets.text.body}>
          Please retry. If this keeps happening, share the route details with the team.
        </Text>
        <Button onClick={reset} styleConfig={buttonStylePresets.brandSolid}>
          Retry
        </Button>
      </Stack>
    </Section>
  );
}
