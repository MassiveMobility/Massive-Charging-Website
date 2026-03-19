// src/features/HomeCharging/index.jsx
import React, { useState } from 'react';
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

  // ✅ NEW: form state (minimal)
  const [formValues, setFormValues] = useState({
    name: '',
    mobile: '',
    email: '',
    selections: {} // { [groupLabel]: [selectedOptions...] }
  });

  // ✅ NEW: popup state
  const [showPopup, setShowPopup] = useState(false);

  // ✅ NEW: input handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ NEW: checkbox toggle handler
  const toggleCheckbox = (groupLabel, option) => {
    setFormValues((prev) => {
      const current = prev.selections[groupLabel] || [];
      const next = current.includes(option)
        ? current.filter((x) => x !== option)
        : [...current, option];

      return {
        ...prev,
        selections: {
          ...prev.selections,
          [groupLabel]: next
        }
      };
    });
  };

 const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx5ZrJeNukduFWUlpSahWcQiorMFHyCAfG9wIFt_i1yVgjF_U4AungnkQGjDURMEfCD/exec";

const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    name: formValues.name,
    mobile: formValues.mobile,
    email: formValues.email,
    selections: formValues.selections,
    pageUrl: window.location.href
  };

  const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });

  const out = await res.json();
  console.log(out);
  
  // show popup
    setShowPopup(true);
    window.setTimeout(() => setShowPopup(false), 2500);
};

  return (
    <div className="hc-container" style={{ position: 'relative' }}>

      {/* ✅ Green glass popup */}
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            padding: '14px 18px',
            borderRadius: '14px',
            background: 'rgba(34, 197, 94, 0.22)', // green glass
            border: '1px solid rgba(34, 197, 94, 0.35)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
            color: '#0f3d1e',
            textAlign: 'center',
            minWidth: '280px',
            maxWidth: '92vw'
          }}
          role="status"
          aria-live="polite"
        >
          <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '4px' }}>
            Form Submitted
          </div>
          <div style={{ fontSize: '0.95rem', opacity: 0.9 }}>
            We will get back to you shortly
          </div>
        </div>
      )}
      
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

            <form onSubmit={handleSubmit}>
              {/* Basic Details */}
              <div className="hc-input-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="hc-input"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="hc-input"
                  value={formValues.mobile}
                  onChange={handleInputChange}
                />
              </div>
              <div className="hc-input-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Email (Optional)"
                  className="hc-input"
                  style={{ width: '100%' }}
                  value={formValues.email}
                  onChange={handleInputChange}
                />
              </div>

              {/* Requirement Snapshot */}
              {connection.checkboxGroups.map((group, idx) => (
                <div key={idx} className="hc-checkbox-group">
                  <label style={{ fontWeight: 'bold', display: 'block' }}>{group.label}</label>
                  <div className="hc-checkbox-options">
                    {group.options.map((opt, optIdx) => {
                      const checked = (formValues.selections[group.label] || []).includes(opt);

                      return (
                        <label key={optIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleCheckbox(group.label, opt)}
                          />
                          <span>{opt}</span>
                        </label>
                      );
                    })}
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
