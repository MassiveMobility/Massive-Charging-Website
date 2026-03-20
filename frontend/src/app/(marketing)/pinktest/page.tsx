import { buildPageMetadata } from "@/lib/seo/metadata";
import { PinkTestPage } from "@/features/marketing/components/pink-test-page";

const routePath = "/pinktest" as const;

export const metadata = buildPageMetadata({
  title: "Pink Test",
  description:
    "Legacy pink theme QA page used to validate route rendering, interaction, and visual parity.",
  path: routePath
});

export default function PinkTestRoutePage() {
  return <PinkTestPage />;
}
