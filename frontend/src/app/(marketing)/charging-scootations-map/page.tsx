import { buildPageMetadata } from "@/lib/seo/metadata";
import { redirect } from "next/navigation";

const routePath = "/charging-scootations-map" as const;

export const metadata = buildPageMetadata({
  title: "Charging Scootations Map Redirect",
  description:
    "Legacy alias route that redirects to the canonical charging stations map page.",
  path: routePath
});

export default function ChargingScootationsMapRoutePage() {
  redirect("/charging-stations-map");
}
