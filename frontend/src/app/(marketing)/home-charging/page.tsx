import { buildPageMetadata } from "@/lib/seo/metadata";
import { ScenarioRoutePage } from "@/features/marketing/components/scenario-route-page";

const routePath = "/home-charging" as const;

export const metadata = buildPageMetadata({
  title: "Home Charging Setup",
  description: "Plan EV charging for independent homes with practical infra and deployment guidance.",
  path: routePath
});

export default function ScenarioPage() {
  return <ScenarioRoutePage routePath={routePath} />;
}
