import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Reusing your existing styles

const MenuPage = () => {
  
  // The Master List of all your pages
  const menuItems = [
    { title: "Independent Home", icon: "🏠", path: "/home-charging" },
    { title: "Apartment Resident", icon: "🚗", path: "/apartment-resident" },
    { title: "Apartment Society / RWA", icon: "🏢", path: "/society-charging" },
    { title: "Gated Community", icon: "🏘️", path: "/community-charging" },
    { title: "PG / Co-living", icon: "🛏️", path: "/pg-charging" },
    { title: "Retail Shop", icon: "🏪", path: "/retail-charging" },
    { title: "Restaurant / Café", icon: "🍽️", path: "/restaurant-charging" },
    { title: "Mall / Commercial", icon: "🏬", path: "/mall-charging" },
    { title: "Delivery Fleet", icon: "🚚", path: "/fleet-charging" },
    { title: "Fuel Pump / Highway", icon: "⛽", path: "/highway-charging" },
    { title: "Hospital / Institution", icon: "🏥", path: "/hospital-charging" },
  ];

  return (
    <div className="hc-container">
      <section className="hc-section hc-hero">
        <div className="hc-wrapper">
          <div className="hc-trust-pill">Massive Charging Network</div>
          <h1>Find Your Charging Solution</h1>
          <p>Select your property type to see the perfect EV charging plan for you.</p>
        </div>
      </section>

      <section className="hc-section">
        <div className="hc-wrapper">
          
          {/* Reuse the Grid Layout */}
          <div className="hc-cards-grid">
            {menuItems.map((item, index) => (
              <Link 
                to={item.path} 
                key={index} 
                style={{ textDecoration: 'none' }}
              >
                {/* Reusing .hc-card with a hover effect */}
                <div className="hc-card" style={{ 
                  textAlign: 'center', 
                  height: '100%', 
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none'; // Or back to original shadow
                }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>
                    {item.icon}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    color: '#111827', 
                    fontWeight: 'bold' 
                  }}>
                    {item.title}
                  </h3>
                  <div style={{ 
                    marginTop: '12px', 
                    color: '#2563eb', 
                    fontWeight: '500', 
                    fontSize: '0.9rem' 
                  }}>
                    View Plan →
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default MenuPage;