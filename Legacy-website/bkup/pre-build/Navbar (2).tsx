import React, { useState, useEffect, useRef } from 'react';
import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

/* Import Atoms */
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import Surface from '../atoms/Surface';
import Container from '../atoms/Container';

const Navbar = () => {
  const [showPopout, setShowPopout] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowPopout(false);
      }
    };

    if (showPopout) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopout]);

  return (
    <Surface variant="secondary" style={{ 
      position: 'sticky', 
      top: 0, 
      zIndex: 100, 
      borderBottom: '1px solid var(--stroke-subtle)', 
      paddingBlock: 'var(--space-2)' 
    }}>
      <Container style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        
        {/* LEFT ZONE: Branding - [FIXED] Wrapped in Link to Root */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 'var(--space-1)', flex: 1, color: 'inherit' }}>
          <div style={{ 
            width: '32px', 
            height: '32px', 
            backgroundColor: 'var(--p-red-brand)', 
            borderRadius: 'var(--radius-1)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <Zap size={18} color="white" fill="white" />
          </div>
          <Text size="4" weight="500">Massive Charging</Text>
        </Link>

        {/* RIGHT ZONE: Combined Menu + Button */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 'var(--space-6)', 
          justifyContent: 'flex-end',
          flex: 2 
        }}>
          
          <nav style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
            {/* [FIXED] Home pointed to root path / */}
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Text size="3" weight="500" style={{ cursor: 'pointer' }}>Home</Text>
            </Link>
            
            <Text size="3" weight="500" style={{ cursor: 'pointer' }}>EV Chargers</Text>
            
            {/* Guide with Popout */}
            <div 
              ref={menuRef}
              style={{ position: 'relative' }}
              onClick={() => setShowPopout(!showPopout)}
            >
              <div style={{ cursor: 'pointer' }}>
                <Text size="3" weight="500">Guide</Text>
              </div>

              {showPopout && (
                <Surface style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  width: '240px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  paddingBlock: 'var(--space-2)',
                  paddingInline: 'var(--space-3)',
                  marginTop: 'var(--space-1)',
                  borderRadius: 'var(--radius-2)',
                  border: '1px solid var(--stroke-subtle)',
                  boxShadow: 'var(--shadow-high)',
                  backgroundColor: 'var(--p-white)',
                  zIndex: 110,
                  gap: 'var(--space-1)', 
                  animation: 'popoutFade 0.2s ease-out'
                }}>
                  <style>{`
                    @keyframes popoutFade {
                      from { opacity: 0; transform: translateY(-4px); }
                      to { opacity: 1; transform: translateY(0); }
                    }
                  `}</style>
                  
                  <Link to="/" style={{ textDecoration: 'none', width: '100%' }}>
                    <Text size="3" weight="600" style={{ color: 'var(--p-blue-data)' }}>
                      Guiding Tool
                    </Text>
                  </Link>

                  <Link to="/registry" style={{ textDecoration: 'none', width: '100%' }}>
                    <Text size="3" weight="400" style={{ color: 'var(--p-blue-data)', textAlign: 'left' }}>
                      EV Cars Charging Guide
                    </Text>
                  </Link>
                </Surface>
              )}
            </div>

            <Text size="3" weight="500" style={{ cursor: 'pointer' }}>About</Text>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button variant="mid" style={{ width: 'auto' }}>
              Charge EV
            </Button>
          </div>
        </div>
      </Container>
    </Surface>
  );
};

export default Navbar;