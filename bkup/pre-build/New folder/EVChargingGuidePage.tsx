import React, { useState, useEffect } from "react";
import { Search, Zap, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
/* [NEW] Import Link for navigation */
import { Link } from "react-router-dom";

/* Project Atoms */
import Container from "../atoms/Container";
import Surface from "../atoms/Surface";
import Text from "../atoms/Text";

/* Services */
import { bringCars } from "../services/carService";

const EVListCard = ({ car, isActive, onHover }: { car: any; isActive: boolean; onHover: (car: any) => void }) => {
  return (
    /* [FIX] Wrap card in Link to enable navigation on click while preserving hover logic */
    <Link 
      to={`/charging-guide/${car.documentId}`}
      style={{ display: 'block', textDecoration: 'none' }} 
      onMouseEnter={() => onHover(car)}
    >
      <Surface
        variant="none"
        style={{
          display: 'flex',
          alignItems: 'stretch',
          overflow: 'hidden',
          transition: 'all 0.2s ease-in-out',
          borderLeft: isActive ? '4px solid var(--p-blue-data)' : '4px solid transparent',
          cursor: 'pointer',
          padding: 0,
          backgroundColor: isActive ? 'var(--p-white)' : 'var(--p-gray-50)',
          transform: isActive ? 'scale(1.02)' : 'scale(1)',
          boxShadow: isActive ? 'var(--shadow-high)' : 'var(--shadow-low)',
        }}
      >
        <div style={{ 
          width: '80px', 
          backgroundColor: 'var(--p-slate-900)', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: 'var(--space-2)',
          borderRight: '1px solid var(--stroke-subtle)'
        }}>
          <Text size="3" weight="900" style={{ color: 'var(--p-white)', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>
            {car.Battery_Capacity_kWh}
          </Text>
          <Text size="1" weight="700" style={{ color: 'var(--p-blue-data)', textTransform: 'uppercase', marginTop: '4px' }}>kWh</Text>
        </div>
        <div style={{ flex: 1, padding: 'var(--space-3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Text size="3" weight="900" style={{ color: 'var(--p-ink-900)' }}>{car.Brand} {car.Model}</Text>
          <Text size="1" color="muted" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{car.Variant}</Text>
          <Text size="1" weight="700" color="muted" style={{ marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {car.Claimed_Range_km} KM Range
          </Text>
        </div>
      </Surface>
    </Link>
  );
};

export const EVChargingGuidePage = () => {
  const [cars, setCars] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCar, setActiveCar] = useState<any>(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await bringCars();
      setCars(data);
      if (data.length > 0 && !activeCar) setActiveCar(data[0]);
    };
    loadData();
  }, []);

  const filteredCars = cars.filter((c) =>
    `${c.Brand} ${c.Model}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: 'var(--surface-base)', minHeight: '100vh', paddingBottom: 'var(--space-8)' }}>
      {/* Header Section */}
      <Container style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-6)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
          <Text size="6" weight="900" style={{ color: 'var(--p-ink-900)' }}>4W EV Charging Guide</Text>
          <Text size="3" color="muted">Live life at 100% with smart charging options</Text>
        </div>
        
        <Surface variant="card" style={{ 
          maxWidth: '600px', margin: '0 auto', display: 'flex', alignItems: 'center', 
          padding: 'var(--space-3)', borderRadius: 'var(--radius-full)', 
          border: '1px solid var(--p-gray-400)', boxShadow: 'var(--shadow-low)'
        }}>
          <Search size={20} color="var(--p-gray-400)" />
          <input 
            type="text" 
            placeholder="Search for your EV..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', paddingInline: 'var(--space-2)', fontSize: 'var(--text-3)' }}
          />
        </Surface>
      </Container>

      <Container>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: 'var(--space-8)', 
          alignItems: 'start'
        }} className="desktop-grid">
          <style>{`
            @media (min-width: 1024px) {
              .desktop-grid {
                grid-template-columns: 2fr 1fr !important;
              }
            }
          `}</style>
          
          {/* LEFT: List Section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-3)' }}>
            {filteredCars.map((car) => (
              <EVListCard 
                key={car.id} 
                car={car} 
                isActive={activeCar?.id === car.id} 
                onHover={setActiveCar} 
              />
            ))}
          </div>

          {/* RIGHT: Sticky Sidebar with Navbar Offset */}
          <div style={{ 
            position: 'sticky', 
            top: '100px', 
            alignSelf: 'start' 
          }}>
            <AnimatePresence mode="wait">
              {activeCar && (
                <motion.div
                  key={activeCar.id}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <Surface variant="base" style={{ overflow: 'hidden', boxShadow: 'var(--shadow-high)', border: '1px solid var(--stroke-subtle)', borderRadius: 'var(--radius-3)' }}>
                    {/* Header of Sidebar */}
                    <div style={{ padding: 'var(--space-6)', backgroundColor: 'var(--p-slate-900)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <Text size="5" weight="900" style={{ color: 'var(--p-white)' }}>{activeCar.Brand} {activeCar.Model}</Text>
                        <Text size="2" style={{ color: 'var(--p-gray-400)', marginTop: '4px' }}>{activeCar.Variant}</Text>
                      </div>
                      <Zap size={24} color="var(--p-blue-data)" />
                    </div>

                    {/* Content of Sidebar */}
                    <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
                        <Surface style={{ padding: 'var(--space-3)', backgroundColor: 'var(--p-gray-50)', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 'var(--radius-2)' }}>
                          <Text size="4" weight="900" style={{ fontFamily: 'var(--font-mono)' }}>{activeCar.Battery_Capacity_kWh}</Text>
                          <Text size="1" color="muted" weight="700">kWh Battery</Text>
                        </Surface>
                        <Surface style={{ padding: 'var(--space-3)', backgroundColor: 'var(--p-gray-50)', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 'var(--radius-2)' }}>
                          <Text size="4" weight="900" style={{ fontFamily: 'var(--font-mono)' }}>{activeCar.Claimed_Range_km}</Text>
                          <Text size="1" color="muted" weight="700">KM Range</Text>
                        </Surface>
                      </div>

                      <div style={{ borderTop: '1px solid var(--stroke-subtle)', paddingTop: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text size="2" color="muted">Port Type</Text>
                            <Text size="2" weight="900" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>{activeCar.Charging_Port_Type}</Text>
                         </div>
                         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text size="2" color="muted">DC Max Charge</Text>
                            <Text size="2" weight="900" style={{ fontFamily: 'var(--font-mono)', color: 'var(--p-green-live)' }}>{activeCar.DC_Fast_Charging_Max_kW} kW</Text>
                         </div>
                      </div>

                      {/* [FIX] Sidebar Button Integrated with Link */}
                      <Link 
                        to={`/charging-guide/${activeCar.documentId}`} 
                        style={{ textDecoration: 'none' }}
                      >
                        <button style={{ 
                          width: '100%', paddingBlock: 'var(--space-3)', backgroundColor: 'var(--p-blue-data)', 
                          color: 'var(--p-white)', border: 'none', borderRadius: 'var(--radius-2)', 
                          fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', 
                          justifyContent: 'center', gap: '8px', transition: 'all 0.2s ease'
                        }}>
                          View Master Guide <ChevronRight size={18} />
                        </button>
                      </Link>
                    </div>
                  </Surface>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </div>
  );
};