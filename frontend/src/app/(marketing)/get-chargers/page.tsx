import { buildPageMetadata } from "@/lib/seo/metadata";
import { ChargerIntakeForm } from "@/features/marketing/components/charger-intake-form";

const routePath = "/get-chargers" as const;

export const metadata = buildPageMetadata({
  title: "Get Chargers",
  description:
    "Submit charger setup requirements for home, commercial, fleet, or public EV charging deployment.",
  path: routePath
});

export default function GetChargersPage() {
  return <ChargerIntakeForm />;
}
