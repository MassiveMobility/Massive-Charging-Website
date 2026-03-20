import { buildPageMetadata } from "@/lib/seo/metadata";
import { EvCarsCataloguePage } from "@/features/marketing/components/ev-cars-catalogue-page";
import { legacyFourWheelVehicles } from "@/data/articles";

const routePath = "/charging-guide/ev-cars" as const;

export const metadata = buildPageMetadata({
  title: "EV Cars Catalogue",
  description:
    "Legacy EV cars catalogue migrated to Next.js with searchable vehicle cards and charging-guide links.",
  path: routePath
});

export default function ChargingGuideEvCarsPage() {
  return <EvCarsCataloguePage cars={legacyFourWheelVehicles} />;
}
