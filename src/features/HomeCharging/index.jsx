// src/features/HomeCharging/index.jsx
import React from 'react';
import './styles.css'; 
// DELETED: import { landingContent } from './data'; <--- No longer needed!

// CHANGE 1: Accept 'data' as a prop
const UniversalLandingPage = ({ data }) => {
  
  // CHANGE 2: Safety Check (prevents crash if data is missing)
  if (!data) {
    return <div className="p-10 text-center">Loading content...</div>;
  }

  // CHANGE 3: Unpack from the 'data' prop, not the file
  const { hero, consideration, connection } = data;

  return (
    <div className="hc-container">
      
      {/* --- MODULE A: HERO SECTION --- */}
      <section className="hc-section hc-hero">
        <div className="hc-wrapper">
          <div className="hc-trust-pill">{hero.trustPill}</div>
          
          <h1>{hero.title}</h1>
          <p>{hero.body}</p>

          <button className="hc-btn-primary">{hero.actionText}</button>
          
          <div style={{ marginTop: '20px', fontSize: '0.9rem', color: '#666' }}>
            👉 Check if your home is EV-charging ready.
          </div>
        </div>
      </section>

      {/* --- MODULE B: CONSIDERATION SECTION --- */}
      <section className="hc-section">
        <div className="hc-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>{consideration.title}</h2>
            <p style={{ color: '#666' }}>{consideration.subtitle}</p>
          </div>

          <div className="hc-cards-grid">
            {consideration.cards.map((card, index) => (
              <div key={index} className="hc-card">
                <div className="hc-card-icon">{card.icon}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{card.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.5' }}>{card.text}</p>
              </div>
            ))}

            {/* CTA Card */}
            <div className="hc-cta-card">
              {consideration.ctaCard}
            </div>
          </div>
        </div>
      </section>

      {/* --- MODULE C: CONNECTION SECTION --- */}
      <section className="hc-section" style={{ background: 'white' }}>
        <div className="hc-wrapper" style={{ maxWidth: '800px' }}>
          
          <div className="hc-form-container">
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h2 style={{ fontSize: '2rem' }}>{connection.title}</h2>
              <p>{connection.subtitle}</p>
            </div>

            <form>
              {/* Basic Details */}
              <div className="hc-input-row">
                <input type="text" placeholder="Name" className="hc-input" />
                <input type="tel" placeholder="Mobile Number" className="hc-input" />
              </div>
              <div className="hc-input-row">
                <input type="email" placeholder="Email (Optional)" className="hc-input" style={{ width: '100%' }} />
              </div>

              {/* Requirement Snapshot */}
              {connection.checkboxGroups.map((group, idx) => (
                <div key={idx} className="hc-checkbox-group">
                  <label style={{ fontWeight: 'bold', display: 'block' }}>{group.label}</label>
                  <div className="hc-checkbox-options">
                    {group.options.map((opt, optIdx) => (
                      <label key={optIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        <input type="checkbox" />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <button type="submit" className="hc-submit-btn">Submit Request</button>
            </form>

            {/* Human Exit Points */}
            <div style={{ textAlign: 'center', marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
              <p style={{ marginBottom: '15px', color: '#666' }}>Prefer to connect directly?</p>
              <div className="hc-contact-links">
                <button className="hc-outline-btn">📞 Call Us</button>
                <button className="hc-outline-btn">💬 WhatsApp Us</button>
                <button className="hc-outline-btn">📧 Email Us</button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default UniversalLandingPage;