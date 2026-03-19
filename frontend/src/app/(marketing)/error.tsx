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

type MarketingErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function MarketingError({ error, reset }: MarketingErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section padding="md" role="alert" tone="surface">
      <Stack gap="md">
        <Badge styleConfig={componentStylePresets.badge.danger}>
          Marketing route error
        </Badge>
        <Heading level={1} styleConfig={componentStylePresets.heading.stateTitle}>
          We could not render this page.
        </Heading>
        <Text styleConfig={componentStylePresets.text.body}>
          Please retry. If the issue persists, share this URL with the team.
        </Text>
        <Button onClick={reset} styleConfig={buttonStylePresets.brandSolid}>
          Try again
        </Button>
      </Stack>
    </Section>
  );
}
