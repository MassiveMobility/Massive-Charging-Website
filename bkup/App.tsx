import React from 'react';
/* Layout Molecules */
import Navbar from './components/layout/Navbar'; 
import { Footer } from './components/layout/Footer';
/* Atoms */
import Surface from './components/atoms/Surface';
/* Modules */
import HowToChargeCard from './components/modules/HowToChargeCard';

function App() {
  return (
    <Surface variant="base" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. Top Navigation (Internal Container) */}
      <Navbar />

      {/* 2. Main Content Area */}
      <main style={{ flex: 1 }}>
        {/* [1] Module handles its own internal Container and spacing */}
        <HowToChargeCard />
      </main>

      {/* 3. Bottom Footer (Internal Container) */}
      <Footer />

    </Surface>
  );
}

export default App;