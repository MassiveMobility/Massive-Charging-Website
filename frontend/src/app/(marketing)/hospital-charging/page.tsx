import { buildPageMetadata } from "@/lib/seo/metadata";
import { ScenarioRoutePage } from "@/features/marketing/components/scenario-route-page";

const routePath = "/hospital-charging" as const;

export const metadata = buildPageMetadata({
  title: "Hospital Charging",
  description: "Install EV charging for hospitals and institutions with reliability-first operational planning.",
  path: routePath
});

export default function ScenarioPage() {
  return <ScenarioRoutePage routePath={routePath} />;
}
