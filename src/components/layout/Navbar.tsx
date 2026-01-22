import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/* Import Atoms */
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import Surface from '../atoms/Surface';
import Container from '../atoms/Container';
import MCNLogo from '../../assets/MCN Logo.png'; 

const Navbar = () => {
  const [showPopout, setShowPopout] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close popout when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowPopout(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    /* OUTER WRAPPER */
    <Surface style={{ 
      position: 'sticky', 
      top: 0, 
      zIndex: 100, 
      backgroundColor: '#000000', 
      width: '100%',
      display: 'flex', 
      justifyContent: 'center', 
      paddingBlock: '4px' 
    }}>
      
      {/* INNER CONTAINER */}
      <Container style={{ 
        display: 'flex', 
        width: '100%', 
        maxWidth: '1296px', 
        paddingInline: '48px', 
        paddingBlock: '8px', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: 'transparent'
      }}>
        
        {/* LEFT ZONE: Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img 
            src={MCNLogo} 
            alt="Massive Charging Logo"
            style={{ height: '40px', width: 'auto', display: 'block' }} 
          />
        </Link>

        {/* RIGHT GROUP: Menu + Button snapped together */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '48px' 
        }}>
          
          {/* Menu Items */}
          <nav style={{ 
            display: 'flex', 
            gap: '24px', 
            alignItems: 'center',
            fontFamily: '"Inter", sans-serif'
          }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Text style={{ color: '#FFFFFF', fontFamily: 'inherit', fontSize: '16px', fontWeight: 400 }}>Home</Text>
            </Link>
            
            <Link to="/chargers" style={{ textDecoration: 'none' }}>
              <Text style={{ color: '#FFFFFF', fontFamily: 'inherit', fontSize: '16px', fontWeight: 400 }}>EV Chargers</Text>
            </Link>

            {/* Guide Section with Popout */}
            <div ref={menuRef} style={{ position: 'relative' }}>
              <div 
                style={{ cursor: 'pointer' }} 
                onClick={() => setShowPopout(!showPopout)}
              >
                <Text style={{ color: '#FFFFFF', fontFamily: 'inherit', fontSize: '16px', fontWeight: 400 }}>Guide</Text>
              </div>
              
              {showPopout && (
                <Surface style={{
                  position: 'absolute', top: '100%', right: 0, width: '240px',
                  display: 'flex', flexDirection: 'column', paddingBlock: '12px', paddingInline: '16px',
                  marginTop: '12px', borderRadius: '8px', backgroundColor: '#FFFFFF',
                  boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)', zIndex: 110, gap: '8px'
                }}>
                  {/* UPDATED: Points to the new /charging-guide portal */}
                  <Link to="/charging-guide" style={{ textDecoration: 'none' }} onClick={() => setShowPopout(false)}>
                    <Text size="3" weight="600" style={{color: '#000'}}>Guiding Tool</Text>
                  </Link>

                  <Link to="/ev-charging-guide" style={{ textDecoration: 'none' }} onClick={() => setShowPopout(false)}>
                    <Text size="3" style={{color: '#000'}}>EV Cars Charging Guide</Text>
                  </Link>
                </Surface>
              )}
            </div>

            <Link to="/about" style={{ textDecoration: 'none' }}>
              <Text style={{ color: '#FFFFFF', fontFamily: 'inherit', fontSize: '16px', fontWeight: 400 }}>About</Text>
            </Link>
          </nav>

          {/* Explore Button */}
          <Link to="/charging-guide" style={{ textDecoration: 'none' }}>
            <Button style={{ 
              backgroundColor: '#39BD8A', 
              color: '#FFFFFF',
              padding: '10px 20px', 
              borderRadius: '8px',
              fontSize: '16px', 
              fontWeight: 400, 
              border: 'none',
              fontFamily: '"Inter", sans-serif',
              cursor: 'pointer'
            }}>
              Explore
            </Button>
          </Link>
        </div>

      </Container>
    </Surface>
  );
};

export default Navbar;