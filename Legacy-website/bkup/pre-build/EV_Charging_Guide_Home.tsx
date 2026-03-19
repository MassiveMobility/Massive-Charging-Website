import React, { useState, useEffect } from 'react';

/* Modules */
import CarSearchBar from '../modules/CarSearchBar';
import { RecommendedChargersRail } from '../modules/RecommendedChargersRail';

/* Project Atoms */
import Container from '../atoms/Container';

/* Services */
import { bringProducts } from '../services/productService'; 

/**
 * EV_Charging_Guide_Home
 * Refactored for extreme vertical breathing room (Space 20).
 */
const EV_Charging_Guide_Home = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await bringProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <main style={{ paddingBottom: 'var(--space-8)' }}>
      {/* 1. TOP PRIORITY: Vehicle Search Module */}
      <CarSearchBar />

      {/* 2. SECONDARY: Recommended Product Rail */}
      <section style={{ 
        /* HERE: Space 20 Calculation (8px * 20 = 160px) */
        marginTop: 'calc(var(--e-viz-base) * 20)' 
      }}> 
        <Container>
          <RecommendedChargersRail 
            products={products.slice(0, 4)} 
            onConnect={(p) => console.log("Connecting to:", p.display_name)}
          />
        </Container>
      </section>
    </main>
  );
};

export default EV_Charging_Guide_Home;