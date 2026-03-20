import { articlePreviewItems } from "@/data/articles";
import { Badge } from "@/components/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Card } from "@/components/ui";
import { componentStylePresets } from "@/lib/config/design-system";
import { Grid } from "@/components/shared";
import { Heading } from "@/components/ui";
import { routePaths } from "@/lib/constants/routes";
import { Section } from "@/components/shared";
import { Stack } from "@/components/shared";
import { Text } from "@/components/ui";

export const metadata = buildPageMetadata({
  title: "Articles",
  description:
    "Explore EV charging strategy articles focused on deployment planning, uptime, and scalable charging operations.",
  path: routePaths.articles
});

export default function ArticlesPage() {
  return (
    <>
      <Section aria-labelledby="articles-title" padding="lg" tone="surface">
        <Stack gap="md">
          <Badge styleConfig={componentStylePresets.badge.brand}>
            Articles
          </Badge>
          <Heading id="articles-title" level={1} styleConfig={componentStylePresets.heading.pageTitle}>
            Insights for EV charging growth teams
          </Heading>
          <Text styleConfig={componentStylePresets.text.leadMuted}>
            The article platform is scaffolded for future CMS-backed publishing with role-based
            editorial workflows.
          </Text>
        </Stack>
      </Section>

      <Section aria-labelledby="article-preview-title" tone="surface">
        <Stack gap="md">
          <Heading
            id="article-preview-title"
            level={2}
            styleConfig={componentStylePresets.heading.sectionTitle}
          >
            Publishing placeholder content
          </Heading>
          <Grid as="ul" columns="2" gap="md">
            {articlePreviewItems.map((item) => (
              <Card as="li" interactive key={item.title} styleConfig={componentStylePresets.card.default}>
                <Heading level={3} styleConfig={componentStylePresets.heading.cardTitle}>
                  {item.title}
                </Heading>
                <Text styleConfig={componentStylePresets.text.bodyMuted}>{item.summary}</Text>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Section>
    </>
  );
}
