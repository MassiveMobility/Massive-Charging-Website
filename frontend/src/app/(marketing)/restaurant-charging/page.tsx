import { buildPageMetadata } from "@/lib/seo/metadata";
import { ScenarioRoutePage } from "@/features/marketing/components/scenario-route-page";

const routePath = "/restaurant-charging" as const;

export const metadata = buildPageMetadata({
  title: "Restaurant Charging",
  description: "Enable EV charging at restaurants and cafes for better customer experience and retention.",
  path: routePath
});

export default function ScenarioPage() {
  return <ScenarioRoutePage routePath={routePath} />;
}
