import { buildPageMetadata } from "@/lib/seo/metadata";
import { ScenarioRoutePage } from "@/features/marketing/components/scenario-route-page";

const routePath = "/mall-charging" as const;

export const metadata = buildPageMetadata({
  title: "Mall Charging",
  description: "Plan EV charging for commercial complexes and malls with scalable business operations.",
  path: routePath
});

export default function ScenarioPage() {
  return <ScenarioRoutePage routePath={routePath} />;
}
