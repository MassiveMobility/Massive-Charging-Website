import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Layout Molecules */
import Navbar from './components/layout/Navbar'; 
import { Footer } from './components/layout/Footer';

/* Atoms */
import Surface from './components/atoms/Surface';

/* Modules */
import Hero from './components/modules/Hero'; 

/* Pages */
import { EVChargingGuidePage } from './components/pages/EVChargingGuidePage';
import { EVIndividualGuide } from './components/pages/EVIndividualGuide'; 
import EV_Charging_Guide_Home from './components/pages/EV_Charging_Guide_Home'; 
import MenuPage from './features/HomeCharging/MenuPage';

/* --- 1. THE UNIVERSAL COMPONENT (Factory) --- */
import UniversalLandingPage from './features/HomeCharging'; 

/* --- 2. THE DATASETS (Fuel) --- */
/* Note: Ensure all your const exports are in this one file: features/HomeCharging/all-scenarios-data.js */
import { 
  landingContent,             // 1. Home Owner
  apartmentResidentContent,   // 2. Apartment Resident
  apartmentSocietyContent,    // 3. Society / RWA
  gatedCommunityContent,      // 4. Gated Community
  pgCoLivingContent,          // 5. PG / Co-living
  retailShopContent,          // 6. Retail Shop
  restaurantCafeContent,      // 7. Restaurant
  mallCommercialContent,      // 8. Mall
  fleetOperatorContent,       // 9. Fleet
  fuelPumpHighwayContent,     // 10. Fuel Pump
  hospitalInstitutionContent  // 11. Hospital
} from './features/HomeCharging/all-scenarios-data';


function App() {
  return (
    <Router>
      <Surface variant="base" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            
            {/* --- EXISTING ROUTES --- */}
            <Route path="/charging-guide" element={<EV_Charging_Guide_Home />} />
            <Route path="/ev-charging-guide" element={<EVChargingGuidePage />} />
            <Route path="/charging-guide/:documentId" element={<EVIndividualGuide />} />
            <Route path="/charging-directory" element={<MenuPage />} />


            {/* --- NEW DYNAMIC LANDING PAGES (11 SCENARIOS) --- */}
            
            {/* 1. Independent Home Owner */}
            <Route 
              path="/home-charging" 
              element={<UniversalLandingPage data={landingContent} />} 
            />

            {/* 2. Apartment Resident (Individual) */}
            <Route 
              path="/apartment-resident" 
              element={<UniversalLandingPage data={apartmentResidentContent} />} 
            />

            {/* 3. Apartment Society / RWA */}
            <Route 
              path="/society-charging" 
              element={<UniversalLandingPage data={apartmentSocietyContent} />} 
            />

            {/* 4. Gated Community */}
            <Route 
              path="/community-charging" 
              element={<UniversalLandingPage data={gatedCommunityContent} />} 
            />

            {/* 5. PG / Co-living */}
            <Route 
              path="/pg-charging" 
              element={<UniversalLandingPage data={pgCoLivingContent} />} 
            />

            {/* 6. Retail Shop */}
            <Route 
              path="/retail-charging" 
              element={<UniversalLandingPage data={retailShopContent} />} 
            />

            {/* 7. Restaurant / Café */}
            <Route 
              path="/restaurant-charging" 
              element={<UniversalLandingPage data={restaurantCafeContent} />} 
            />

            {/* 8. Mall / Commercial */}
            <Route 
              path="/mall-charging" 
              element={<UniversalLandingPage data={mallCommercialContent} />} 
            />

            {/* 9. Delivery Fleet */}
            <Route 
              path="/fleet-charging" 
              element={<UniversalLandingPage data={fleetOperatorContent} />} 
            />

            {/* 10. Fuel Pump / Highway */}
            <Route 
              path="/highway-charging" 
              element={<UniversalLandingPage data={fuelPumpHighwayContent} />} 
            />

            {/* 11. Hospital / Institution */}
            <Route 
              path="/hospital-charging" 
              element={<UniversalLandingPage data={hospitalInstitutionContent} />} 
            />

          </Routes>
        </main>

        <Footer />

      </Surface>
    </Router>
  );
}

export default App;