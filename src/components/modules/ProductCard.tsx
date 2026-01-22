import React from 'react';
import { 
  Wifi, 
  Bluetooth, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Settings 
} from 'lucide-react';

/* Project Atoms */
import Surface from '../atoms/Surface';
import Text from '../atoms/Text';

const ProductCard = ({ product }: { product: any }) => {
  // [1] Define Base URL for Strapi Media Assets
  const BASE_URL = "https://strapi.adirishi.net";

  // [2] Extract Image URL from populated field
  // Strapi returns relative paths like /uploads/image.png
  const imageObj = product.product_testimg;
  const imageUrl = imageObj?.url ? `${BASE_URL}${imageObj.url}` : null;

  return (
    <Surface 
      variant="base" 
      style={{ 
        width: '320px', 
        borderRadius: 'var(--radius-3)',
        border: '1px solid var(--stroke-subtle)',
        boxShadow: 'var(--shadow-high)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--surface-base)',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.borderColor = 'var(--p-blue-data)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.borderColor = 'var(--stroke-subtle)';
      }}
    >
      {/* 1. PRODUCT IMAGE CONTAINER */}
      <div style={{ 
        position: 'relative',
        height: '240px', 
        backgroundColor: 'var(--p-gray-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid var(--stroke-subtle)',
        overflow: 'hidden'
      }}>
        {/* Render Live Strapi Image or Technical Placeholder */}
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={product.display_name} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform 0.5s ease'
            }} 
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        ) : (
          <div style={{ 
            width: '100%', 
            height: '100%', 
            backgroundColor: 'var(--p-slate-800)', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center',
            gap: 'var(--space-1)'
          }}>
             <Zap size={48} color="var(--p-blue-data)" />
             <Text size="1" weight="900" style={{ color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase' }}>Hardware Schematic</Text>
          </div>
        )}

        {/* Floating Badge: Power Class */}
        <div style={{ 
          position: 'absolute', top: 'var(--space-2)', right: 'var(--space-2)',
          backgroundColor: 'var(--p-green-live)', padding: '4px 12px', borderRadius: 'var(--radius-full)',
          boxShadow: 'var(--shadow-low)', zIndex: 2
        }}>
          <Text size="1" weight="900" style={{ color: 'var(--p-slate-900)' }}>{product.max_power_kw}kW</Text>
        </div>
      </div>

      {/* 2. PRODUCT IDENTITY */}
      <div style={{ padding: 'var(--space-2)', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
        
        <Text size="4" weight="700" style={{ color: 'var(--p-ink-900)', lineHeight: 'var(--lh-2)' }}>
          {product.display_name}
        </Text>
      </div>

      {/* 3. TECHNICAL SPECIFICATIONS & SMART ICONS */}
      <div style={{ paddingInline: 'var(--space-4)', paddingBottom: 'var(--space-2)', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
        
        {/* Connector Details */}
        <div style={{ 
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: 'var(--space-1)', backgroundColor: 'var(--p-gray-50)', borderRadius: 'var(--radius-2)',
          border: '1px solid var(--stroke-subtle)'
        }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={16} color="var(--p-gray-400)" />
              <Text size="1" weight="700" color="muted">Interface</Text>
           </div>
           <Text size="2" weight="900" style={{ fontFamily: 'var(--font-mono)', color: 'var(--p-red-brand)' }}>
             {product.connector_type}
           </Text>
        </div>

        {/* Connectivity Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', borderTop: '1px solid var(--stroke-subtle)', paddingTop: 'var(--space-3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
             <Wifi size={16} color="var(--p-blue-data)" />
             <Text size="1" weight="700">WIFI</Text>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
             <Bluetooth size={16} color="var(--p-blue-data)" />
             <Text size="1" weight="700">BT</Text>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: 'auto' }}>
             <Settings size={16} color="var(--p-gray-400)" />
             <Text size="1" weight="700" color="muted">{product.input_phase?.replace('_', ' ')}</Text>
          </div>
        </div>
      </div>

      {/* 4. FOOTER ACTION */}
      <div style={{ padding: 'var(--space-4)', paddingTop: 0 }}>
        <button style={{ 
          width: '100%', 
          backgroundColor: 'var(--p-slate-900)', 
          color: 'var(--p-white)', 
          paddingBlock: 'var(--space-3)', 
          borderRadius: 'var(--radius-2)',
          fontWeight: 900,
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--space-2)',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--p-blue-data)';
          e.currentTarget.style.transform = 'scale(1.02)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--p-slate-900)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
        >
          BUY CHARGER
          <ArrowRight size={18} />
        </button>
      </div>
    </Surface>
  );
};

export default ProductCard;