import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/chargers/dc/120-dual-gun" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "120kW DC Fast Charger",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "120kW DC charger",
    "DC fast charger India",
    "CCS-2 charger",
    "dual gun charger",
    "highway EV charger",
    "OCPP 2.0.1 charger"
  ]
});

export default function ChargersDc120kwRoutePage() {
  return (
    <MarketingContentPage content={pageContent}>
      <div className="marketing-content__container">
        <h2 className="marketing-content__section-title">Technical specifications</h2>
        <table className="marketing-content__spec-table">
          <tbody>
            <tr><th>Output power</th><td>120 kW</td></tr>
            <tr><th>Input supply</th><td>350–460V three-phase AC</td></tr>
            <tr><th>DC output voltage</th><td>350–1000V</td></tr>
            <tr><th>Max output current</th><td>250A per gun</td></tr>
            <tr><th>Number of guns</th><td>2 (simultaneous)</td></tr>
            <tr><th>Connector type</th><td>CCS-2</td></tr>
            <tr><th>Communication protocol</th><td>OCPP 1.6J / OCPP 2.0.1</td></tr>
            <tr><th>High-level communication</th><td>ISO 15118 / DIN SPEC 70121</td></tr>
            <tr><th>Protection rating</th><td>IP54</td></tr>
            <tr><th>Cooling</th><td>Forced air</td></tr>
            <tr><th>Operating temperature</th><td>-25°C to +55°C</td></tr>
            <tr><th>Dimensions (W×D×H)</th><td>1725 × 500 × 700 mm</td></tr>
            <tr><th>Weight</th><td>&lt;350 kg</td></tr>
            <tr><th>Authentication</th><td>QR / UPI / RFID / App</td></tr>
          </tbody>
        </table>
      </div>
    </MarketingContentPage>
  );
}
