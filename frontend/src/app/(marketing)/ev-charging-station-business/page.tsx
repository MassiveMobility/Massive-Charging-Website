import { buildPageMetadata } from "@/lib/seo/metadata";
import { ChargingBusinessFreshPage } from "@/features/marketing/components/charging-business-fresh-page";

const routePath = "/ev-charging-station-business" as const;

export const metadata = buildPageMetadata({
  title: "EV Charging Station Business",
  description:
    "Legacy fresh charging-station-business page migrated to Next.js with setup pathways and business workflow sections.",
  path: routePath
});

export default function EvChargingStationBusinessRoutePage() {
  return <ChargingBusinessFreshPage />;
}
