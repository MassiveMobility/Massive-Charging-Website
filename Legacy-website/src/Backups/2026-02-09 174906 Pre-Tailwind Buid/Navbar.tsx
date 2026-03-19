import React from 'react';
import { Link } from 'react-router-dom';

/* Import Atoms */
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import Surface from '../atoms/Surface';
import Container from '../atoms/Container';
import MCNLogo from '../../assets/MCN Logo.png'; 

const Navbar = () => {
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
          gap: '32px' /* Reduced gap slightly to fit more items */
        }}>
          
          {/* Menu Items */}
          <nav style={{ 
            display: 'flex', 
            gap: '20px', /* Tighter gap for the longer list */
            alignItems: 'center',
            fontFamily: '"Inter", sans-serif'
          }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Text style={{ color: '#FFFFFF', fontFamily: 'inherit', fontSize: '16px', fontWeight: 400 }}>Home</Text>
            </Link>
            
            <Link to="/upi-charging" style={{ textDecoration: 'none' }}>
              <Text style={{ color: '#FFFFFF', fontFamily: 'inherit', fontSize: '16px', fontWeight: 400 }}>UPI Charging</Text>
            </Link>

            <Link to="/plans-offers" style={{ textDecoration: 'none' }}>
              <Text style={{ color: '#FFFFFF', fontFamily: 'inherit', fontSize: '16px', fontWeight: 400 }}>Plans & Offers</Text>
            </Link>

            {/* 🔄 UPDATED: Direct link to Charging Guide (removed dropdown) */}
            <Link to="/charging-guide" style={{ textDecoration: 'none' }}>
              <Text style={{ color: '#FFFFFF', fontFamily: 'inherit', fontSize: '16px', fontWeight: 400 }}>EV Charging Guide</Text>
            </Link>

            <Link to="/shop" style={{ textDecoration: 'none' }}>
              <Text style={{ color: '#FFFFFF', fontFamily: 'inherit', fontSize: '16px', fontWeight: 400 }}>Shop</Text>
            </Link>

            {/* UPDATED LINK: Points to the new business route */}
            <Link to="/ev-charging-business" style={{ textDecoration: 'none' }}>
              <Text style={{ color: '#FFFFFF', fontFamily: 'inherit', fontSize: '16px', fontWeight: 400 }}>For Business</Text>
            </Link>

            <Link to="/buy-chargers" style={{ textDecoration: 'none' }}>
              <Text style={{ color: '#FFFFFF', fontFamily: 'inherit', fontSize: '16px', fontWeight: 400 }}>Buy EV Chargers</Text>
            </Link>
          </nav>

          {/* Primary CTA Button */}
          <Link to="/find-chargers" style={{ textDecoration: 'none' }}>
            <Button style={{ 
              backgroundColor: '#39BD8A', 
              color: '#FFFFFF',
              padding: '10px 20px', 
              borderRadius: '8px',
              fontSize: '16px', 
              fontWeight: 400, 
              border: 'none',
              fontFamily: '"Inter", sans-serif',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}>
              Find EV Chargers
            </Button>
          </Link>
        </div>

      </Container>
    </Surface>
  );
};

export default Navbar;
