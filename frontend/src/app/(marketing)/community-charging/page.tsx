import { buildPageMetadata } from "@/lib/seo/metadata";
import { ScenarioRoutePage } from "@/features/marketing/components/scenario-route-page";

const routePath = "/community-charging" as const;

export const metadata = buildPageMetadata({
  title: "Community Charging",
  description: "Deploy EV charging across gated communities with phased infrastructure planning.",
  path: routePath
});

export default function ScenarioPage() {
  return <ScenarioRoutePage routePath={routePath} />;
}
