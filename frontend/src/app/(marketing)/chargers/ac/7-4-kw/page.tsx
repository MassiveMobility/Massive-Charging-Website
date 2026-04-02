import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/chargers/ac/7-4-kw" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "7.4kW AC EV Charger",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "7.4kW AC charger",
    "home EV charger India",
    "Type-2 charger",
    "single phase EV charger",
    "wall mount EV charger",
    "OCPP charger"
  ]
});

export default function ChargersAc74kwRoutePage() {
  return (
    <MarketingContentPage content={pageContent}>
      <div className="marketing-content__container">
        <h2 className="marketing-content__section-title">Technical specifications</h2>
        <table className="marketing-content__spec-table">
          <tbody>
            <tr><th>Output power</th><td>7.4 kW</td></tr>
            <tr><th>Input supply</th><td>180–275V single-phase AC, 32A</td></tr>
            <tr><th>Connector type</th><td>Type-2 (Mode 3)</td></tr>
            <tr><th>Communication protocol</th><td>OCPP 1.6J / OCPP 2.0.1</td></tr>
            <tr><th>Protection rating</th><td>IP65 / IK10</td></tr>
            <tr><th>Cooling</th><td>Natural air (passive)</td></tr>
            <tr><th>Dimensions (W×D×H)</th><td>280 × 235 × 100 mm</td></tr>
            <tr><th>Weight</th><td>5.5 kg</td></tr>
            <tr><th>Mounting</th><td>Wall mount</td></tr>
            <tr><th>Authentication</th><td>App / QR / RFID</td></tr>
          </tbody>
        </table>
      </div>
    </MarketingContentPage>
  );
}
