import React from 'react';

/* Modules */
import CarSearchBar from '../modules/CarSearchBar';

/**
 * EV_Charging_Guide_Home
 * Refactored to act as a dedicated Search Portal.
 * All secondary rails and hardware registries have been removed.
 */
const EV_Charging_Guide_Home = () => {
  return (
    <main style={{ paddingBottom: 'var(--space-8)' }}>
      {/* 1. PRIMARY MODULE: Vehicle Telemetry & Specification Search */}
      <CarSearchBar />
      
      {/* [CLEANUP] All secondary sections and product data hooks removed */}
    </main>
  );
};

export default EV_Charging_Guide_Home;