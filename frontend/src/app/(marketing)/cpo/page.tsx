import { buildPageMetadata } from "@/lib/seo/metadata";
import { CpoIndexPage } from "@/features/marketing/components/cpo-index-page";
import { cpoSegments } from "@/features/marketing/data/cpo";

const routePath = "/cpo" as const;

export const metadata = buildPageMetadata({
  title: "CPO",
  description:
    "Browse all CPO scenario types for EV charging deployment across residential, commercial, fleet, and institutional segments.",
  path: routePath
});

export default function CpoPage() {
  return (
    <CpoIndexPage
      intro={{
        badge: "CPO Index",
        title: "Choose your EV charging scenario",
        description:
          "Explore deployment models by segment and open detailed setup pages for each CPO route."
      }}
      segments={cpoSegments}
    />
  );
}
