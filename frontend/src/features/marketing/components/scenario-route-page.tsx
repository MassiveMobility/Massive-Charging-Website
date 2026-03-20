import {
  type ScenarioRoutePath,
  scenarioRouteToCpoId
} from "@/features/marketing/data/scenario-routes";
import { getCpoScenarioById } from "@/features/marketing/data/cpo";
import { notFound } from "next/navigation";
import { ScenarioContentPage } from "@/features/marketing/components/scenario-content-page";

type ScenarioRoutePageProps = {
  routePath: ScenarioRoutePath;
};

/**
 * Route wrapper that resolves a fixed scenario page from the centralized map.
 */
export function ScenarioRoutePage({ routePath }: ScenarioRoutePageProps) {
  const scenarioId = scenarioRouteToCpoId[routePath];
  const scenario = getCpoScenarioById(scenarioId);

  if (!scenario) {
    notFound();
  }

  return <ScenarioContentPage scenario={scenario} />;
}
