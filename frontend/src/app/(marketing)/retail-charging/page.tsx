import { buildPageMetadata } from "@/lib/seo/metadata";
import { ScenarioRoutePage } from "@/features/marketing/components/scenario-route-page";

const routePath = "/retail-charging" as const;

export const metadata = buildPageMetadata({
  title: "Retail Shop Charging",
  description: "Add EV charging to retail storefronts to improve footfall and customer dwell time.",
  path: routePath
});

export default function ScenarioPage() {
  return <ScenarioRoutePage routePath={routePath} />;
}
