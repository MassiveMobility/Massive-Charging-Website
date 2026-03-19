import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Container from '../atoms/Container';
import Text from '../atoms/Text';
import Surface from '../atoms/Surface';
import CarDetailCard from './CarDetailCard';
import { bringCars } from '../services/carService';

const CarSearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  return (
    <div style={{ paddingBlock: 'var(--space-8)', backgroundColor: 'var(--surface-base)' }}>
      <Container>
        {/* MASTER DASHBOARD: Height is now determined by child content */}
        <Surface 
          variant="base" 
          style={{ 
            padding: 'var(--space-6)',
            borderRadius: 'var(--radius-3)',
            border: '1px solid var(--stroke-subtle)',
            boxShadow: 'var(--shadow-high)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '2fr 1fr', 
            gap: 'var(--space-8)',
            alignItems: 'stretch' // Ensures columns match the tallest child (Right Column)
          }}>
            
            {/* [1] LEFT COLUMN: Top-Left Aligned */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'flex-start', 
              alignItems: 'flex-start',     
              textAlign: 'left',            
              gap: 'var(--space-6)', 
              padding: 'var(--space-4)'
            }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                <Text size="6" weight="700" style={{ color: 'var(--p-ink-900)' }}>
                  Discover Charging Requirement 
                </Text>
                <Text size="3" color="muted">
                  Identify charging requirements for any electric vehicle.
                </Text>
              </div>

              <div style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
                <Surface variant="base" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  padding: 'var(--space-3)', 
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--stroke-subtle)',
                  boxShadow: 'var(--shadow-low)',
                  gap: 'var(--space-2)'
                }}>
                  <Search size={20} color="var(--p-gray-400)" />
                  <input 
                    type="text"
                    placeholder="Search by Brand or Model..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{ 
                      flex: 1, 
                      border: 'none', 
                      outline: 'none', 
                      fontSize: 'var(--text-3)',
                      background: 'transparent',
                      textAlign: 'left'
                    }}
                  />
                </Surface>

                {isDropdownOpen && results.length > 0 && (
                  <Surface variant="base" style={{ 
                    position: 'absolute',
                    top: '110%',
                    left: '0',
                    right: '0',
                    zIndex: 100,
                    maxHeight: '300px',
                    overflowY: 'auto',
                    borderRadius: 'var(--radius-2)',
                    boxShadow: 'var(--shadow-high)',
                    border: '1px solid var(--stroke-subtle)'
                  }}>
                    {results.map((car) => (
                      <div 
                        key={car.id}
                        onClick={() => handleSelect(car)}
                        style={{ padding: 'var(--space-4)', cursor: 'pointer', borderBottom: '1px solid var(--stroke-subtle)' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--surface-card)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <Text weight="700" size="3">{car.Brand} {car.Model}</Text>
                        <Text size="1" color="muted" style={{ fontFamily: 'var(--font-mono)' }}>{car.Variant}</Text>
                      </div>
                    ))}
                  </Surface>
                )}
              </div>
            </div>

            {/* [2] RIGHT COLUMN: Height Driver */}
            <div style={{ 
              backgroundColor: 'var(--surface-card)', 
              borderRadius: 'var(--radius-3)',
              border: '1px solid var(--stroke-subtle)',
              padding: 'var(--space-4)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {selectedCar ? (
                <CarDetailCard car={selectedCar} />
              ) : (
                <Text color="muted" style={{ fontFamily: 'var(--font-mono)' }}>INITIALIZING...</Text>
              )}
            </div>

          </div>
        </Surface>
      </Container>
    </div>
  );
};

export default CarSearchBar;