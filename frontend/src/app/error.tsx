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

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main-content">
      <Section padding="md" role="alert" tone="surface">
        <Stack gap="md">
          <Badge styleConfig={componentStylePresets.badge.danger}>
            Something went wrong
          </Badge>
          <Heading level={1} styleConfig={componentStylePresets.heading.stateTitle}>
            We could not load this page.
          </Heading>
          <Text styleConfig={componentStylePresets.text.body}>
            Please try again. If this keeps happening, contact the team with the page URL.
          </Text>
          <Button onClick={reset} styleConfig={buttonStylePresets.brandSolid}>
            Try again
          </Button>
        </Stack>
      </Section>
    </main>
  );
}
