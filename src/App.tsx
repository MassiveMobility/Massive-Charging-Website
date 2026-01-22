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
// IMPORT THE NEW COMPONENT
import EV_Charging_Guide_Home from './components/pages/EV_Charging_Guide_Home'; 

function App() {
  return (
    <Router>
      <Surface variant="base" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            
            {/* NEW ROUTE: Search Portal Home */}
            <Route path="/charging-guide" element={<EV_Charging_Guide_Home />} />

            <Route path="/ev-charging-guide" element={<EVChargingGuidePage />} />

            {/* Dynamic route for individual vehicle technical specifications */}
            <Route path="/charging-guide/:documentId" element={<EVIndividualGuide />} />
          </Routes>
        </main>

        <Footer />

      </Surface>
    </Router>
  );
}

export default App;