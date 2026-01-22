import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Layout Molecules */
import Navbar from './components/layout/Navbar'; 
import { Footer } from './components/layout/Footer';

/* Atoms */
import Surface from './components/atoms/Surface';

/* Pages */
/* [HOME] This now serves as the default entry point */
import EV_Charging_Guide_Home from './components/pages/EV_Charging_Guide_Home';
/* [REGISTRY] The full technical vehicle list */
import { EVChargingGuidePage } from './components/pages/EVChargingGuidePage';
/* [DYNAMIC] The individual telemetry page for a specific car */
import { EVIndividualGuide } from './components/pages/EVIndividualGuide'; 

function App() {
  return (
    <Router>
      {/* Global Machine Surface Wrapper */}
      <Surface variant="base" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        <Navbar />

        {/* Dynamic Viewport */}
        <main style={{ flex: 1 }}>
          <Routes>
            {/* [PATH: /] 
               Mapped to your Search-First Guiding Tool Module 
            */}
            <Route path="/" element={<EV_Charging_Guide_Home />} />
            
            {/* [PATH: /registry] 
               Mapped to the full EV Specification Database 
            */}
            <Route path="/ev-charging-guide" element={<EVChargingGuidePage />} />

            {/* [PATH: /charging-guide/:documentId] 
               Dynamic route for individual vehicle technical specifications 
            */}
            <Route path="/charging-guide/:documentId" element={<EVIndividualGuide />} />
          </Routes>
        </main>

        <Footer />

      </Surface>
    </Router>
  );
}

export default App;