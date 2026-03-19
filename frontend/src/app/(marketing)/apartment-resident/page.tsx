import { buildPageMetadata } from "@/lib/seo/metadata";
import { ScenarioRoutePage } from "@/features/marketing/components/scenario-route-page";

const routePath = "/apartment-resident" as const;

export const metadata = buildPageMetadata({
  title: "Apartment Resident Charging",
  description: "Install EV charging in assigned apartment slots with permission and safety guidance.",
  path: routePath
});

export default function ScenarioPage() {
  return <ScenarioRoutePage routePath={routePath} />;
}
