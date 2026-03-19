import { buildPageMetadata } from "@/lib/seo/metadata";
import { CpoMenuPage } from "@/features/marketing/components/cpo-menu-page";
import { cpoSegments } from "@/features/marketing/data/cpo";

const routePath = "/charging-station-biz" as const;

export const metadata = buildPageMetadata({
  title: "Charging Station Biz",
  description:
    "Legacy charging-station-biz menu route with category-to-scenario navigation.",
  path: routePath
});

export default function ChargingStationBizPage() {
  return <CpoMenuPage segments={cpoSegments} />;
}
