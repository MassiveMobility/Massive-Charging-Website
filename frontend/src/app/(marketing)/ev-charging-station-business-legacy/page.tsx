import { buildPageMetadata } from "@/lib/seo/metadata";
import { ChargingBusinessFreshPage } from "@/features/marketing/components/charging-business-fresh-page";

const routePath = "/ev-charging-station-business-legacy" as const;

export const metadata = buildPageMetadata({
  title: "EV Charging Station Business Legacy",
  description:
    "Legacy EV charging station business route preserved as a full page instead of redirect.",
  path: routePath
});

export default function EvChargingStationBusinessLegacyPage() {
  return <ChargingBusinessFreshPage />;
}
