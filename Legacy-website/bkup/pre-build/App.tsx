import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Layout Molecules */
import Navbar from './components/layout/Navbar'; 
import { Footer } from './components/layout/Footer';

/* Atoms */
import Surface from './components/atoms/Surface';

/* Pages */
import EV_Charging_Guide_Home from './components/pages/EV_Charging_Guide_Home';
import { EVChargingGuidePage } from './components/pages/EVChargingGuidePage';
import { EVIndividualGuide } from './components/pages/EVIndividualGuide'; // [NEW] Import the migrated guide

function App() {
  return (
    <Router>
      <Surface variant="base" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            {/* Primary Step-by-Step Guide */}
            <Route path="/" element={<EV_Charging_Guide_Home />} />
            
            {/* Technical Vehicle Registry */}
            <Route path="/registry" element={<EVChargingGuidePage />} />

            {/* [NEW] Individual EV Dynamic Guide Route */}
            <Route path="/charging-guide/:documentId" element={<EVIndividualGuide />} />
          </Routes>
        </main>

        <Footer />

      </Surface>
    </Router>
  );
}

export default App;