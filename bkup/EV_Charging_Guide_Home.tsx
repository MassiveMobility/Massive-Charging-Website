import React, { useState, useEffect } from 'react';

/* Modules */
import HowToChargeCard from '../modules/HowToChargeCard';
import CarSearchBar from '../modules/CarSearchBar';
import ProductCard from '../modules/ProductCard'; 
import { RecommendedChargersRail } from '../modules/RecommendedChargersRail'; // [MIGRATED]

/* Project Atoms */
import Container from '../atoms/Container';
import Text from '../atoms/Text';

/* Services */
import { bringProducts } from '../services/productService'; 

/**
 * EV_Charging_Guide_Home
 * Primary page wrapper integrating the charging guide, vehicle search, 
 * curated product rail, and the full product catalog.
 */
const EV_Charging_Guide_Home = () => {
  const [products, setProducts] = useState<any[]>([]);

  // [1] Fetch live product hardware from Strapi v5
  useEffect(() => {
    const loadProducts = async () => {
      const data = await bringProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <main style={{ paddingBottom: 'var(--space-8)' }}>
      {/* 1. Step-by-Step Charging Infrastructure Guide */}
      <HowToChargeCard />
      
      {/* 2. Live Vehicle Telemetry & Specification Search */}
      <CarSearchBar />

      {/* 3. [MIGRATED] Recommended Product Rail */}
      {/* Placed here to catch the user's attention after car specifications */}
      <section style={{ marginTop: 'var(--space-8)' }}>
        <Container>
          <RecommendedChargersRail 
            products={products.slice(0, 4)} // Showing top 4 curated items as recommendations
            onConnect={(p) => console.log("Connecting to:", p.display_name)}
          />
        </Container>
      </section>

      {/* 4. Full Product Hardware Registry (Final Section) */}
      <section style={{ marginTop: 'var(--space-8)' }}>
        <Container>
          <div style={{ marginBottom: 'var(--space-6)', textAlign: 'left' }}>
            <Text size="6" weight="900" style={{ color: 'var(--p-ink-900)' }}>Complete Hardware Registry</Text>
            <Text size="3" color="muted">Direct-fit solutions for your vehicle's technical requirements.</Text>
          </div>

          {/* Responsive Flex Grid for Product Cards */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 'var(--space-4)', 
            justifyContent: 'flex-start' 
          }}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default EV_Charging_Guide_Home;