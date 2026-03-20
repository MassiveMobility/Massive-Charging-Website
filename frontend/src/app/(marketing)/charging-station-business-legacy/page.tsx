import { buildPageMetadata } from "@/lib/seo/metadata";
import { CpoMenuPage } from "@/features/marketing/components/cpo-menu-page";
import { cpoSegments } from "@/features/marketing/data/cpo";

const routePath = "/charging-station-business-legacy" as const;

export const metadata = buildPageMetadata({
  title: "Charging Station Business Legacy",
  description:
    "Legacy charging-station-business landing route with segment-based setup selection.",
  path: routePath
});

export default function ChargingStationBusinessLegacyPage() {
  return <CpoMenuPage segments={cpoSegments} />;
}
