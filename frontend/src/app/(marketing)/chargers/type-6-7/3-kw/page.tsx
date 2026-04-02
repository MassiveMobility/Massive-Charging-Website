import { buildPageMetadata } from "@/lib/seo/metadata";
import { getMarketingPageContent } from "@/features/marketing/data/general-pages";
import { MarketingContentPage } from "@/features/marketing/components/marketing-content-page";

const routePath = "/chargers/type-6-7/3-kw" as const;
const pageContent = getMarketingPageContent(routePath);

export const metadata = buildPageMetadata({
  title: "3kW Type-6 EV Charger",
  description: pageContent.description,
  path: routePath,
  keywords: [
    "Type-6 charger",
    "3kW 2-wheeler EV charger",
    "IEC 62196-2-6",
    "IS 17017-2-6",
    "electric scooter charger India",
    "3-wheeler EV charger"
  ]
});

export default function ChargersType67_3kwRoutePage() {
  return (
    <MarketingContentPage content={pageContent}>
      <div className="marketing-content__container">
        <h2 className="marketing-content__section-title">Technical specifications</h2>
        <table className="marketing-content__spec-table">
          <tbody>
            <tr><th>Output power</th><td>3 kW</td></tr>
            <tr><th>Input supply</th><td>230V single-phase AC (165–264V range)</td></tr>
            <tr><th>DC output voltage</th><td>40–58V DC</td></tr>
            <tr><th>Max output current</th><td>0–50A</td></tr>
            <tr><th>Charging profile</th><td>CC-CV (constant current / constant voltage)</td></tr>
            <tr><th>Connector type</th><td>Type-6 (IEC 62196-2-6 / IS 17017-2-6)</td></tr>
            <tr><th>Battery chemistry</th><td>LFP compatible</td></tr>
            <tr><th>Communication protocol</th><td>OCPP 1.6J</td></tr>
            <tr><th>Regulatory compliance</th><td>IS-17017-25</td></tr>
            <tr><th>Protection rating</th><td>IP54</td></tr>
            <tr><th>Cooling</th><td>Forced air</td></tr>
            <tr><th>Operating temperature</th><td>0°C to +55°C</td></tr>
            <tr><th>Authentication</th><td>QR / App</td></tr>
          </tbody>
        </table>
      </div>
    </MarketingContentPage>
  );
}
