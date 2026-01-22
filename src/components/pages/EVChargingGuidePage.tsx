import React, { useState, useEffect } from "react";
import { Search, Zap, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

/* Project Atoms */
import Container from "../atoms/Container";
import Surface from "../atoms/Surface";
import Text from "../atoms/Text";

/* Services */
import { bringCars } from "../services/carService";

const EVListCard = ({ car, isActive, isMobile, onClick }: { car: any; isActive: boolean; isMobile: boolean; onClick: (car: any) => void }) => {
  const content = (
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
        transform: isActive && !isMobile ? 'scale(1.02)' : 'scale(1)',
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
  );

  /* On Mobile, clicking triggers the drawer. On Desktop, it navigates but also hovers. */
  return isMobile ? (
    <div onClick={() => onClick(car)} style={{ display: 'block' }}>{content}</div>
  ) : (
    <Link to={`/charging-guide/${car.documentId}`} style={{ display: 'block', textDecoration: 'none' }} onMouseEnter={() => onClick(car)}>
      {content}
    </Link>
  );
};

export const EVChargingGuidePage = () => {
  const [cars, setCars] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCar, setActiveCar] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  /* [MOBILE LOGIC] */
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const data = await bringCars();
      setCars(data);
      if (data.length > 0 && !activeCar) setActiveCar(data[0]);
    };
    loadData();
  }, []);

  const handleCardInteraction = (car: any) => {
    setActiveCar(car);
    if (isMobile) setIsDrawerOpen(true);
  };

  const filteredCars = cars.filter((c) =>
    `${c.Brand} ${c.Model}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: 'var(--surface-base)', minHeight: '100vh', paddingBottom: 'var(--space-8)' }}>
      {/* Header Section */}
      <Container style={{ paddingTop: isMobile ? 'var(--space-4)' : 'var(--space-8)', paddingBottom: 'var(--space-6)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
          <Text size={isMobile ? "5" : "6"} weight="900" style={{ color: 'var(--p-ink-900)' }}>4W EV Charging Guide</Text>
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
          gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr', 
          gap: 'var(--space-8)', 
          alignItems: 'start'
        }}>
          
          {/* LEFT: List Section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-3)' }}>
            {filteredCars.map((car) => (
              <EVListCard 
                key={car.id} 
                car={car} 
                isMobile={isMobile}
                isActive={activeCar?.id === car.id} 
                onClick={handleCardInteraction} 
              />
            ))}
          </div>

          {/* RIGHT: Desktop Sidebar (Hidden on Mobile) */}
          {!isMobile && (
            <div style={{ position: 'sticky', top: '100px', alignSelf: 'start' }}>
              <AnimatePresence mode="wait">
                {activeCar && (
                  <motion.div
                    key={activeCar.id}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <SidebarContent activeCar={activeCar} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </Container>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMobile && isDrawerOpen && activeCar && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 2000 }}
            />
            {/* Drawer */}
            <motion.div 
              initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2001, maxHeight: '90vh', overflowY: 'auto' }}
            >
              <Surface variant="base" style={{ borderTopLeftRadius: 'var(--radius-4)', borderTopRightRadius: 'var(--radius-4)', border: '1px solid var(--stroke-subtle)', boxShadow: 'var(--shadow-high)' }}>
                <div style={{ padding: 'var(--space-2)', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '40px', height: '4px', backgroundColor: 'var(--p-gray-300)', borderRadius: '2px' }} />
                </div>
                <div style={{ position: 'absolute', top: '16px', right: '16px' }} onClick={() => setIsDrawerOpen(false)}>
                    <X size={24} color="var(--p-gray-600)" />
                </div>
                <SidebarContent activeCar={activeCar} />
              </Surface>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

/* Shared UI for Desktop Sidebar and Mobile Drawer */
const SidebarContent = ({ activeCar }: { activeCar: any }) => (
  <div style={{ overflow: 'hidden' }}>
    <div style={{ padding: 'var(--space-6)', backgroundColor: 'var(--p-slate-900)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div>
        <Text size="5" weight="900" style={{ color: 'var(--p-white)' }}>{activeCar.Brand} {activeCar.Model}</Text>
        <Text size="2" style={{ color: 'var(--p-gray-400)', marginTop: '4px' }}>{activeCar.Variant}</Text>
      </div>
      <Zap size={24} color="var(--p-blue-data)" />
    </div>

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

      <Link to={`/charging-guide/${activeCar.documentId}`} style={{ textDecoration: 'none' }}>
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
  </div>
);