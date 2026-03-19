import React, { useState } from 'react';
import { 
  Zap, 
  Battery, 
  Clock, 
  TrendingUp, 
  Activity,
  ChevronRight,
  Gauge,
  Plug
} from 'lucide-react';
import Surface from '../atoms/Surface';
import Text from '../atoms/Text';

const CarDetailCard = ({ car }: { car: any }) => {
  // [1] State to handle the hover "Pop" effect
  const [isHovered, setIsHovered] = useState(false);

  // Logic for the random charging time (16-22h)
  const chargeTime = car.chargeTime || Math.floor(Math.random() * (22 - 16 + 1) + 16);

  // [2] Dynamic Styles for the Pop Effect
  const popStyle = isHovered ? {
    transform: 'translateY(-12px) scale(1.03)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    borderColor: 'var(--p-blue-data)'
  } : {
    transform: 'translateY(0px) scale(1)',
    boxShadow: 'var(--shadow-high)',
    borderColor: 'var(--stroke-subtle)'
  };

  return (
    <Surface 
      variant="base" 
      style={{ 
        width: '340px', 
        borderRadius: 'var(--radius-3)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--surface-base)',
        border: '1px solid',
        cursor: 'pointer',
        
        /* Smooth cubic-bezier for a mechanical 'pop' feel */
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', 
        ...popStyle 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. HEADER: Vehicle Identity */}
      <div style={{ padding: 'var(--space-4)', paddingBottom: 'var(--space-1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Text size="1" weight="900" style={{ color: 'var(--p-blue-data)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)' }}>
              {car.Brand}
            </Text>
            <Text size="5" weight="900" style={{ color: 'var(--p-ink-900)', marginTop: 'var(--space-0-5)' }}>
              {car.Model}
            </Text>
          </div>
          <Surface variant="card" style={{ padding: 'var(--space-1)', borderRadius: 'var(--radius-2)', backgroundColor: 'var(--surface-card)' }}>
            <Zap size={20} color="var(--p-blue-data)" />
          </Surface>
        </div>
      </div>

      {/* 2. VISUAL METRIC: Range Hero Inset */}
      <div style={{ paddingInline: 'var(--space-4)', paddingBlock: 'var(--space-1)' }}>
        <div style={{ 
          position: 'relative',
          height: '110px',
          backgroundColor: 'var(--p-slate-900)', 
          borderRadius: 'var(--radius-2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          border: '1px solid var(--p-slate-800)',
          padding: 'var(--space-3)',
          overflow: 'hidden'
        }}>
          <Activity size={80} color="var(--p-blue-data)" style={{ position: 'absolute', right: -10, opacity: 0.1 }} />
          
          <div style={{ zIndex: 1 }}>
            <span style={{ fontSize: 'var(--text-6)', fontWeight: 900, color: 'var(--p-white)', fontFamily: 'var(--font-mono)' }}>
              {car.Claimed_Range_km}
            </span>
            <span style={{ fontSize: 'var(--text-2)', fontWeight: 700, color: 'var(--p-gray-400)', marginLeft: '4px', fontFamily: 'var(--font-mono)' }}>KM</span>
            <Text size="1" weight="700" style={{ color: 'var(--p-blue-data)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Max Range
            </Text>
          </div>

          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '3px', background: 'var(--p-slate-800)' }}>
             <div style={{ width: '85%', height: '3px', background: 'var(--p-green-live)' }}></div>
          </div>
        </div>
      </div>

      {/* 3. CORE STATISTICS: Live Data */}
      <div style={{ paddingInline: 'var(--space-4)', paddingBlock: 'var(--space-2)', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
        <Surface style={{ padding: 'var(--space-2)', borderRadius: 'var(--radius-2)', backgroundColor: 'var(--surface-card)', border: '1px solid var(--stroke-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Battery size={16} color="var(--p-gray-400)" />
            <Text size="1" weight="700" color="muted">Battery</Text>
          </div>
          <Text size="2" weight="900" style={{ fontFamily: 'var(--font-mono)' }}>{car.Battery_Capacity_kWh} kWh</Text>
        </Surface>

        <Surface style={{ padding: 'var(--space-2)', borderRadius: 'var(--radius-2)', backgroundColor: 'var(--surface-card)', border: '1px solid var(--stroke-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Gauge size={16} color="var(--p-gray-400)" />
            <Text size="1" weight="700" color="muted">Connector</Text>
          </div>
          <Text size="2" weight="900" style={{ fontFamily: 'var(--font-mono)', color: 'var(--p-red-brand)' }}>CCS2</Text>
        </Surface>
      </div>

      {/* 4. CHARGING PROFILE: Logic-driven Requirements */}
      <div style={{ paddingInline: 'var(--space-4)', paddingBottom: 'var(--space-2)' }}>
        <Surface style={{ padding: 'var(--space-3)', backgroundColor: 'var(--p-gray-50)', borderRadius: 'var(--radius-2)', border: '1px solid var(--stroke-subtle)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <TrendingUp size={14} color="var(--p-gold)" />
            <div style={{ display: 'flex', gap: '4px', alignItems: 'baseline' }}>
              <Text size="1" color="muted" weight="700">Needs:</Text>
              <Text size="2" weight="900" style={{ fontFamily: 'var(--font-mono)' }}>7.4kW AC</Text>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Clock size={14} color="var(--p-blue-data)" />
            <div style={{ display: 'flex', gap: '4px', alignItems: 'baseline' }}>
              <Text size="1" color="muted" weight="700">Time:</Text>
              <Text size="2" weight="900" style={{ fontFamily: 'var(--font-mono)' }}>{chargeTime}H</Text>
            </div>
          </div>
        </Surface>
      </div>

      {/* 5. FOOTER: Action Button */}
      <div style={{ padding: 'var(--space-4)', paddingTop: 'var(--space-1)' }}>
        <button style={{ 
          width: '100%', 
          backgroundColor: 'var(--p-slate-900)', 
          color: 'var(--p-white)', 
          paddingBlock: 'var(--space-2)', 
          borderRadius: 'var(--radius-full)',
          fontWeight: 900,
          fontSize: 'var(--text-1)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--space-1)',
          transition: 'all 0.2s ease'
        }}>
          VIEW MASTER GUIDE
          <ChevronRight size={14} />
        </button>
      </div>
    </Surface>
  );
};

export default CarDetailCard;