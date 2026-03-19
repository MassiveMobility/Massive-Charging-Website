import { buildPageMetadata } from "@/lib/seo/metadata";
import { ScenarioRoutePage } from "@/features/marketing/components/scenario-route-page";

const routePath = "/pg-charging" as const;

export const metadata = buildPageMetadata({
  title: "PG Charging",
  description: "Offer EV charging for PG and co-living properties with low-maintenance setup models.",
  path: routePath
});

export default function ScenarioPage() {
  return <ScenarioRoutePage routePath={routePath} />;
}
