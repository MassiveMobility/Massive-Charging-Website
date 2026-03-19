import { buildPageMetadata } from "@/lib/seo/metadata";
import { ScenarioRoutePage } from "@/features/marketing/components/scenario-route-page";

const routePath = "/society-charging" as const;

export const metadata = buildPageMetadata({
  title: "Society Charging",
  description: "Set up EV charging for apartment societies and RWAs with scalable rollout planning.",
  path: routePath
});

export default function ScenarioPage() {
  return <ScenarioRoutePage routePath={routePath} />;
}
