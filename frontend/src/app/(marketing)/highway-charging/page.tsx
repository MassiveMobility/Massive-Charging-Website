import { buildPageMetadata } from "@/lib/seo/metadata";
import { ScenarioRoutePage } from "@/features/marketing/components/scenario-route-page";

const routePath = "/highway-charging" as const;

export const metadata = buildPageMetadata({
  title: "Highway Charging",
  description: "Deploy highway and transit EV charging setups for reliable fast-turnaround sessions.",
  path: routePath
});

export default function ScenarioPage() {
  return <ScenarioRoutePage routePath={routePath} />;
}
