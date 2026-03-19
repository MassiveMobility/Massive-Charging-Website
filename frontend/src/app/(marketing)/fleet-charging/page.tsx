import { buildPageMetadata } from "@/lib/seo/metadata";
import { ScenarioRoutePage } from "@/features/marketing/components/scenario-route-page";

const routePath = "/fleet-charging" as const;

export const metadata = buildPageMetadata({
  title: "Fleet Charging",
  description: "Build depot-focused EV charging infrastructure for delivery and transport fleets.",
  path: routePath
});

export default function ScenarioPage() {
  return <ScenarioRoutePage routePath={routePath} />;
}
