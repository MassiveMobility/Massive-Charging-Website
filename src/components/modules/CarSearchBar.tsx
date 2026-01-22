import React, { useState, useEffect } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../atoms/Container';
import Text from '../atoms/Text';
import Surface from '../atoms/Surface';
import Button from '../atoms/Button';
import { bringCars } from '../services/carService';

const CarSearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const [isActiveGlow, setIsActiveGlow] = useState(false);

  /* [MOBILE LOGIC] Hook to track screen width */
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const guideTypes = ["Cars", "Scooters", "Rickshaw", "Trucks", "Busses"];

  useEffect(() => {
    const fetchDefault = async () => {
      const allCars = await bringCars();
      const defaultCar = allCars.find((c: any) => c.Model === "eMax 7") || allCars[0];
      setSelectedCar(defaultCar);
    };
    fetchDefault();
  }, []);

  useEffect(() => {
    if (query.length > 1) {
      const search = async () => {
        const data = await bringCars(query);
        setResults(data);
        setIsDropdownOpen(true);
      };
      search();
    } else {
      setResults([]);
      setIsDropdownOpen(false);
    }
  }, [query]);

  const handleSelect = (car: any) => {
    setSelectedCar(car);
    setQuery('');
    setIsDropdownOpen(false);
  };

  const triggerHubGlow = () => {
    setIsActiveGlow(true);
    setTimeout(() => setIsActiveGlow(false), 1000);
  };

  return (
    <div style={{ paddingBlock: isMobile ? 'var(--space-4)' : 'var(--space-8)', backgroundColor: 'var(--surface-base)' }}>
      <Container>
        <Surface variant="base" style={{ padding: isMobile ? 'var(--space-2)' : 'var(--space-4)', borderRadius: 'var(--radius-3)', border: '1px solid var(--stroke-subtle)', boxShadow: 'var(--shadow-high)' }}>
          
          <div style={{ 
            display: isMobile ? 'flex' : 'grid', 
            flexDirection: isMobile ? 'column' : 'initial',
            gridTemplateColumns: isMobile ? 'none' : '1fr 2fr 1.2fr', 
            gap: 'var(--space-4)', 
            alignItems: 'stretch' 
          }}>
            
            {/* [1] COLUMN 1: CATEGORY NAVIGATION */}
            <div style={{ 
                display: 'flex', 
                flexDirection: isMobile ? 'row' : 'column', 
                borderRight: isMobile ? 'none' : '1px solid var(--stroke-subtle)',
                borderBottom: isMobile ? '1px solid var(--stroke-subtle)' : 'none',
                paddingRight: isMobile ? '0' : 'var(--space-2)',
                paddingBottom: isMobile ? 'var(--space-3)' : '0',
                gap: 'var(--space-3)', 
                overflowX: isMobile ? 'auto' : 'visible',
                whiteSpace: 'nowrap'
            }}>
              {!isMobile && <Text size="1" weight="700" color="muted">Vehicle Segment</Text>}
              <div style={{ display: 'flex', flexDirection: isMobile ? 'row' : 'column', gap: 'var(--space-2)', width: '100%' }}>
                {guideTypes.map((type, idx) => {
                  const isAvailable = type === "Cars";
                  return (
                    <div 
                      key={idx} 
                      onClick={() => isAvailable && triggerHubGlow()}
                      style={{ 
                        flexShrink: 0,
                        padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-1)', 
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                        backgroundColor: 'var(--surface-card)', boxShadow: 'var(--shadow-low)', border: '1px solid var(--stroke-subtle)',
                        cursor: isAvailable ? 'pointer' : 'not-allowed', 
                        opacity: isAvailable ? 1 : 0.4,
                        filter: isAvailable ? 'none' : 'grayscale(1)',
                        transition: 'all 0.2s',
                        gap: isMobile ? 'var(--space-2)' : '0'
                      }}
                    >
                      <Text size="2" weight="500">{type}</Text>
                      <ChevronRight size={12} color={isAvailable ? "var(--p-blue-data)" : "var(--p-gray-400)"} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* [2] COLUMN 2: HUB WITH TRIGGERED GLOW */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              paddingInline: isMobile ? '0' : 'var(--space-4)', 
              gap: 'var(--space-4)', 
              alignItems: 'center',
              borderRadius: 'var(--radius-2)',
              transition: 'all 0.6s ease',
              border: isActiveGlow ? '1px solid var(--p-green-live)' : '1px solid transparent',
              boxShadow: isActiveGlow ? '0 0 20px rgba(0, 230, 118, 0.4)' : 'none'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', alignItems: 'center', textAlign: 'center', maxWidth: '450px', width: '100%' }}>
                <Text size={isMobile ? "4" : "5"} weight="900" style={{ color: 'var(--p-ink-900)' }}>Discover Charging Requirements</Text>
                <Text size="2" color="muted">Search for any EV brand or car</Text>
              </div>

              <div style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
                <Surface variant="card" style={{ display: 'flex', alignItems: 'center', padding: 'var(--space-2) var(--space-3)', borderRadius: 'var(--radius-full)', border: '1px solid var(--stroke-strong)', gap: 'var(--space-2)', boxShadow: 'var(--shadow-low)' }}>
                  <Search size={18} color="var(--p-blue-data)" />
                  <input type="text" placeholder="BYD eMax 7..." value={query} onChange={(e) => setQuery(e.target.value)} style={{ flex: 1, border: 'none', outline: 'none', fontSize: 'var(--text-2)', background: 'transparent', color: 'var(--p-ink-900)' }} />
                </Surface>

                {isDropdownOpen && results.length > 0 && (
                  <Surface variant="base" style={{ position: 'absolute', top: '110%', left: 0, right: 0, zIndex: 100, borderRadius: 'var(--radius-2)', boxShadow: 'var(--shadow-high)', border: '1px solid var(--stroke-strong)', maxHeight: '200px', overflowY: 'auto' }}>
                    {results.map((car) => (
                      <div key={car.id} onClick={() => handleSelect(car)} style={{ padding: 'var(--space-2)', cursor: 'pointer', borderBottom: '1px solid var(--stroke-subtle)' }}>
                        <Text weight="700" size="2">{car.Brand} {car.Model}</Text>
                      </div>
                    ))}
                  </Surface>
                )}
              </div>
            </div>

            {/* [3] COLUMN 3: DATA CARD */}
            <Surface variant="base" style={{ borderRadius: 'var(--radius-2)', display: 'flex', flexDirection: 'column', border: '1px solid var(--stroke-subtle)', boxShadow: 'var(--shadow-high)', overflow: 'hidden', height: 'fit-content' }}>
              <div style={{ padding: 'var(--space-1) var(--space-2)', backgroundColor: 'var(--p-gray-50)', borderBottom: '1px solid var(--stroke-subtle)', display: 'flex', gap: '4px' }}>
                <Text size="1" weight="700" style={{ textTransform: 'uppercase' }}>{selectedCar?.Brand || 'Select'}</Text>
                <Text size="1" weight="900" style={{ color: 'var(--p-blue-data)', textTransform: 'uppercase' }}>{selectedCar?.Model || 'Vehicle'}</Text>
              </div>
              
              <div style={{ padding: 'var(--space-3)', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                {selectedCar ? (
                  <>
                    <div style={{ display: 'flex', gap: '4px', alignItems: 'baseline' }}>
                      <Text size="1" color="muted" style={{ minWidth: '85px' }}>Claimed Range:</Text>
                      <Text size="2" weight="700">{selectedCar.Claimed_Range_km}</Text>
                      <Text size="1" weight="700" style={{ color: 'var(--p-green-live)' }}>km</Text>
                    </div>
                    <div style={{ display: 'flex', gap: '4px', alignItems: 'baseline' }}>
                      <Text size="1" color="muted" style={{ minWidth: '85px' }}>Battery:</Text>
                      <Text size="2" weight="700">{selectedCar.Battery_Capacity_kWh}</Text>
                      <Text size="1" weight="700" style={{ color: 'var(--p-green-live)' }}>kWh</Text>
                    </div>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <Text size="1" color="muted" style={{ minWidth: '85px' }}>Connector:</Text>
                      <Text size="2" weight="700" style={{ color: 'var(--p-blue-data)' }}>CCS Type 2</Text>
                    </div>
                    <div style={{ display: 'flex', gap: '4px', marginBottom: 'var(--space-2)' }}>
                      <Text size="1" color="muted" style={{ minWidth: '85px' }}>Charge Time:</Text>
                      <Text size="2" weight="700" style={{ color: 'var(--p-blue-data)' }}>{selectedCar.AC_Charging_Power_kW ? `${Math.round(selectedCar.Battery_Capacity_kWh / selectedCar.AC_Charging_Power_kW)} hrs` : 'N/A'}</Text>
                    </div>

                    <Link to={`/charging-guide/${selectedCar.documentId}`} style={{ textDecoration: 'none' }}>
                      <button 
                        onMouseEnter={() => setIsBtnHovered(true)} onMouseLeave={() => setIsBtnHovered(false)}
                        className="btn-master-guide"
                        style={{ 
                          width: '100%', 
                          paddingBlock: 'var(--space-1)', 
                          backgroundColor: isBtnHovered ? 'var(--p-green-live)' : 'var(--p-blue-data)', 
                          color: 'var(--p-white)', 
                          border: 'none', 
                          borderRadius: 'var(--radius-full)', 
                          fontWeight: 900, 
                          fontSize: 'var(--text-1)', 
                          cursor: 'pointer', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          gap: '8px', 
                          transition: 'all 0.2s ease', 
                          boxShadow: isBtnHovered ? '0 0 15px var(--p-green-live)' : '0 0 10px rgba(41, 121, 255, 0.3)'
                        }}
                      >
                        <style>{`.btn-master-guide:active { transform: scale(0.96); box-shadow: 0 0 25px var(--p-green-live), 0 0 40px var(--p-green-live) !important; filter: brightness(1.2); }`}</style>
                        View Master Guide <ChevronRight size={14} />
                      </button>
                    </Link>
                  </>
                ) : (
                  <Text color="muted" size="1" style={{ fontFamily: 'var(--font-mono)' }}>INITIALIZING...</Text>
                )}
              </div>
            </Surface>
          </div>
        </Surface>
      </Container>
    </div>
  );
};

export default CarSearchBar;