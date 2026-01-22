import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Layout Molecules */
import Navbar from './components/layout/Navbar'; 
import { Footer } from './components/layout/Footer';

/* Atoms */
import Surface from './components/atoms/Surface';

/* Modules - Importing the new Hero component */
import Hero from './components/modules/Hero'; 

/* Pages */
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
                Hero now serves as the high-impact entry point for Massivecharging.com 
            */}
            <Route path="/" element={<Hero />} />
            
            {/* [PATH: /ev-charging-guide] 
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