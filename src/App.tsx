import React, { useEffect, useMemo, useState, createContext, useContext } from "react";
import "./index.css"; // ← This line is CRITICAL
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Layout Molecules */
import Navbar from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";

/* Atoms */
import Surface from "./components/atoms/Surface";

/* Pages */
import Home_Page from "./pages/Home/Home_Page";
import ThemeSamplerPage from "./pages/ThemeSamplerPage";
import EVJourneyReport from "./chapters/urltest/EVJourneyReport";
import PinkTestPage from "./chapters/urltest/PinkTestPage";
import UPIChargingPage from "./chapters/urltest/UPIChargingPage";
import PricingPage from "./chapters/urltest/PricingPage";
import TestHome from "./test/Home";
import HomeSchemaPage from "./test/Home_Schema_Page";
import ChargingStationBusiness_Test from "./test/ChargingStationBusiness_Test";
import ChargingBusinessFreshHome from "./pages/Charging-Station_Business/Fresh/FreshHome";

import { EVChargingGuidePage } from "./components/pages/EVChargingGuidePage";
import EVChargingGuide_Dashboard from "./Querycode/EVChargingGuide_Dashboard";
import EVCarsCatalogue from "./Querycode/EVCarsCatalogue";
import ChargingGuidePage from "./Querycode/ChargingGuidePage";

import StationBizHomePage from "./pages/Station_Biz_HomePage";
import EvChargingStationHomePage from "./pages/Charging-Station_Business/ev-charging-station-home-page";
import Master_Form from "./pages/Master_Form";

import CPOTypeMenuPage from "./pages/Charging-Station_Business/CPO_Types/CPOTypeMenuPage";
import CPOTypeIndividualPage from "./pages/Charging-Station_Business/CPO_Types/CPOTypeIndividualPage";
import CPOTypeIndexPage from "./pages/Charging-Station_Business/CPO_Types/CPOTypeIndexPage";

import EvGuideHomeDashboard from "./pages/Charging_Guide/EvGuideHomeDashboard";
import ScrollToHash from "./components/layout/ScrollToHash";


/* --- 1. THE UNIVERSAL COMPONENT (Factory) --- */
import UniversalLandingPage from "./features/HomeCharging";

/* --- 2. THE DATASETS (Fuel) --- */
import {
  landingContent,
  apartmentResidentContent,
  apartmentSocietyContent,
  gatedCommunityContent,
  pgCoLivingContent,
  retailShopContent,
  restaurantCafeContent,
  mallCommercialContent,
  fleetOperatorContent,
  fuelPumpHighwayContent,
  hospitalInstitutionContent,
} from "./features/HomeCharging/all-scenarios-data";



/* =========================
   SOURCE OF TRUTH CONTEXT
   ========================= */

type AppDataContextValue = {
  vehicleGuideData: any | null;
  coreMessageBlockData: any | null;
  loading: boolean;
  error: string | null;
};

const AppDataContext = createContext<AppDataContextValue | null>(null);

export function useAppData() {
  const ctx = useContext(AppDataContext);
  if (!ctx) throw new Error("useAppData must be used inside <AppDataContext.Provider>");
  return ctx;
}

function App() {
  // Source-of-truth state (loaded once in App)
  const [vehicleGuideData, setVehicleGuideData] = useState<any | null>(null);
  const [coreMessageBlockData, setCoreMessageBlockData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        // NOTE: These files MUST exist in /public
        // public/vehicle_guide.json
        // public/Core_message_block.json
        const [vehicleRes, messageRes] = await Promise.all([
          fetch("/vehicle_guide.json", { cache: "no-store" }),
          fetch("/Core_message_block.json", { cache: "no-store" }),
        ]);

        if (!vehicleRes.ok) {
          throw new Error(`vehicle_guide.json fetch failed (${vehicleRes.status})`);
        }
        if (!messageRes.ok) {
          throw new Error(`Core_message_block.json fetch failed (${messageRes.status})`);
        }

        const [vehicleJson, messageJson] = await Promise.all([
          vehicleRes.json(),
          messageRes.json(),
        ]);

        if (cancelled) return;

        setVehicleGuideData(vehicleJson);
        setCoreMessageBlockData(messageJson);
        setLoading(false);

        console.log("✅ App Source-of-Truth JSON Loaded");
      } catch (e: any) {
        if (cancelled) return;
        console.error("❌ App JSON load error:", e);
        setError(e?.message || "Unknown JSON load error");
        setLoading(false);
      }
    };

    loadData();
    return () => {
      cancelled = true;
    };
  }, []);

  const appDataValue: AppDataContextValue = useMemo(
    () => ({
      vehicleGuideData,
      coreMessageBlockData,
      loading,
      error,
    }),
    [vehicleGuideData, coreMessageBlockData, loading, error]
  );

  return (
    <Router>
      <ScrollToTop />
          <ScrollToHash />
      <AppDataContext.Provider value={appDataValue}>
        <Surface
          variant="base"
          style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          <Navbar />

          <main style={{ flex: 1 }}>
            <Routes>
              {/* --- MAIN HOME PAGE --- */}
              <Route path="/" element={<Home_Page />} />
              <Route path="/themesampler" element={<ThemeSamplerPage />} />
              <Route path="/temp-home" element={<Home_Page />} />

              <Route path="/temp-05" element={<EvGuideHomeDashboard />} />
              <Route path="/destest" element={<TestHome />} />
              <Route path="/flathome" element={<HomeSchemaPage />} />
              <Route path="/csb-test" element={<ChargingStationBusiness_Test />} />
              <Route path="/fresh" element={<ChargingBusinessFreshHome />} />

              {/* --- EXISTING ROUTES --- */}
              <Route path="/ev-charging-guide" element={<EVChargingGuidePage />} />
              <Route path="/pinktest" element={<PinkTestPage />} />
              <Route path="/upi-charging" element={<UPIChargingPage />} />
              <Route path="/plans-offers" element={<PricingPage />} />
              <Route path="/EV-Trip-Report" element={<EVJourneyReport />} />

              {/* 🔄 QUERY PAGES (still receiving props, but also available via context everywhere) */}
              <Route
                path="/charging-guide"
                element={<EVChargingGuide_Dashboard database={vehicleGuideData} />}
              />
              <Route
                path="/charging-guide/ev-cars"
                element={<EVCarsCatalogue database={vehicleGuideData} />}
              />
              <Route
                path="/charging-guide/:slug"
                element={
                  <ChargingGuidePage
                    vehicleGuideData={vehicleGuideData}
                    coreMessageBlockData={coreMessageBlockData}
                  />
                }
              />

              {/* Station biz */}
              <Route path="/charging-station-business" element={<StationBizHomePage />} />
              <Route
                path="/ev-charging-station-business"
                element={<EvChargingStationHomePage />}
              />

              {/* CPO */}
              <Route path="/cpo" element={<CPOTypeIndexPage />} />
              <Route path="/cpo/*" element={<CPOTypeIndividualPage />} />
              <Route path="/charging-station-biz" element={<CPOTypeMenuPage />} />
              <Route path="/cpo/:segment/:cpoId" element={<CPOTypeIndividualPage />} />

              {/* Form */}
              <Route path="/get-chargers" element={<Master_Form />} />

              {/* --- DYNAMIC LANDING PAGES (11 SCENARIOS) --- */}
              <Route path="/home-charging" element={<UniversalLandingPage data={landingContent} />} />
              <Route
                path="/apartment-resident"
                element={<UniversalLandingPage data={apartmentResidentContent} />}
              />
              <Route
                path="/society-charging"
                element={<UniversalLandingPage data={apartmentSocietyContent} />}
              />
              <Route
                path="/community-charging"
                element={<UniversalLandingPage data={gatedCommunityContent} />}
              />
              <Route path="/pg-charging" element={<UniversalLandingPage data={pgCoLivingContent} />} />
              <Route
                path="/retail-charging"
                element={<UniversalLandingPage data={retailShopContent} />}
              />
              <Route
                path="/restaurant-charging"
                element={<UniversalLandingPage data={restaurantCafeContent} />}
              />
              <Route
                path="/mall-charging"
                element={<UniversalLandingPage data={mallCommercialContent} />}
              />
              <Route
                path="/fleet-charging"
                element={<UniversalLandingPage data={fleetOperatorContent} />}
              />
              <Route
                path="/highway-charging"
                element={<UniversalLandingPage data={fuelPumpHighwayContent} />}
              />
              <Route
                path="/hospital-charging"
                element={<UniversalLandingPage data={hospitalInstitutionContent} />}
              />
            </Routes>
          </main>

          <Footer />
        </Surface>
      </AppDataContext.Provider>
    </Router>
  );
}

export default App;
