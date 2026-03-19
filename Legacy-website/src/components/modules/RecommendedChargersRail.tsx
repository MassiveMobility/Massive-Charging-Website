import React from "react";

/* Project Atoms - Fixed to use Default Imports */
import Surface from "../atoms/Surface";
import Text from "../atoms/Text";

/* Corrected Default Import for ProductCard */
import ProductCard from "./ProductCard";

type RecommendedChargersRailProps = {
  products: any[];
  carModel?: string;
  onConnect?: (p: any) => void;
};

export const RecommendedChargersRail = ({
  products,
  carModel,
  onConnect,
}: RecommendedChargersRailProps) => {
  return (
    <div style={{ width: '100%' }}> 
      <Surface 
        style={{ 
          borderRadius: 'var(--radius-3)', 
          border: '1px solid var(--stroke-subtle)', 
          backgroundColor: 'var(--p-white)', 
          padding: 'var(--space-3)' 
        }}
      >
        {/* Header Section */}
        <div style={{ marginBottom: 'var(--space-2)' }}>
          <Text
            weight="900"
            size="5"
            style={{ 
              color: 'var(--p-ink-900)', 
              textTransform: 'uppercase', 
              letterSpacing: '-0.02em' 
            }}
          >
            Recommended Chargers
          </Text>
          <div style={{ height: '4px', width: '48px', backgroundColor: 'var(--p-blue-data)', marginTop: '4px' }} />
        </div>

        {products.length === 0 ? (
          <Surface 
            style={{ 
              padding: 'var(--space-2)', 
              border: '1px solid var(--stroke-subtle)', 
              borderRadius: 'var(--radius-2)',
              backgroundColor: 'var(--p-gray-50)' 
            }}
          >
            <Text color="muted" size="2">
              No chargers identified for this platform.
            </Text>
            <Text color="muted" size="1" style={{ marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
              Check API: /api/product-cores
            </Text>
          </Surface>
        ) : (
          /* Horizontal Scroll Rail */
          <div style={{ 
            display: 'flex', 
            overflowX: 'auto', 
            gap: 'var(--space-3)', 
            paddingBottom: 'var(--space-2)',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
            <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
            {products.map((p) => (
              <div key={p.id} style={{ minWidth: '300px' }}>
                <ProductCard product={p} onConnect={onConnect} />
              </div>
            ))}
          </div>
        )}

        <Text size="1" color="muted" style={{ fontStyle: 'italic', marginTop: 'var(--space-1)' }}>
          Slide to explore hardware{carModel ? ` compatible with ${carModel}` : ""}.
        </Text>
      </Surface>
    </div>
  );
};