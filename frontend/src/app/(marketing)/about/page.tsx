import { Badge } from "@/components/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { componentStylePresets } from "@/lib/config/design-system";
import { fetchWpPageBySlug } from "@/lib/api/wordpress";
import { Heading } from "@/components/ui";
import { routePaths } from "@/lib/constants/routes";
import { Section } from "@/components/shared";
import { Stack } from "@/components/shared";
import { Text } from "@/components/ui";

const fallbackTitle = "About Massive Charging";
const fallbackDescription =
  "Learn how Massive Charging approaches EV charging deployment with reliability-first design, operational clarity, and long-term scalability.";

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

async function getAboutWpPage() {
  return fetchWpPageBySlug("about", { revalidate: 300 }).catch(() => null);
}

export async function generateMetadata() {
  const wpPage = await getAboutWpPage();

  return buildPageMetadata({
    title: wpPage?.title.rendered ?? fallbackTitle,
    description:
      wpPage?.yoast_head_json?.description ||
      (wpPage ? stripHtml(wpPage.excerpt.rendered) : "") ||
      fallbackDescription,
    path: routePaths.about
  });
}

const operatingPrinciples = [
  "Reliability-first infrastructure planning for real-world charging demand",
  "Operational transparency through clear ownership and measurable service levels",
  "Future-ready architecture that supports growth in sites, fleets, and workflows"
];

export default async function AboutPage() {
  const wpPage = await getAboutWpPage();

  if (wpPage) {
    return (
      <Section aria-labelledby="about-title" padding="lg" tone="surface">
        <Stack gap="md">
          <Badge styleConfig={componentStylePresets.badge.brand}>About</Badge>
          <Heading id="about-title" level={1} styleConfig={componentStylePresets.heading.pageTitle}>
            {wpPage.title.rendered}
          </Heading>
          <div dangerouslySetInnerHTML={{ __html: wpPage.content.rendered }} />
        </Stack>
      </Section>
    );
  }

  return (
    <>
      <Section aria-labelledby="about-title" padding="lg" tone="surface">
        <Stack gap="md">
          <Badge styleConfig={componentStylePresets.badge.brand}>About</Badge>
          <Heading id="about-title" level={1} styleConfig={componentStylePresets.heading.pageTitle}>
            Built for dependable EV charging operations
          </Heading>
          <Text styleConfig={componentStylePresets.text.leadMuted}>
            Massive Charging focuses on delivering charging experiences that stay fast, reliable, and
            easy to operate as demand grows.
          </Text>
        </Stack>
      </Section>

      <Section aria-labelledby="principles-title" tone="surface">
        <Stack gap="md">
          <Heading id="principles-title" level={2} styleConfig={componentStylePresets.heading.sectionTitle}>
            Operating principles
          </Heading>
          <Stack as="ul" gap="sm">
            {operatingPrinciples.map((principle) => (
              <li key={principle}>
                <Text styleConfig={componentStylePresets.text.body}>{principle}</Text>
              </li>
            ))}
          </Stack>
        </Stack>
      </Section>
    </>
  );
}
