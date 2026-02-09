import React from 'react';
import './MassiveSystem.css'; 
import { Check, X, Crown, Zap, Shield } from 'lucide-react';

// --- 1. EXTENDED TYPES ---

type DesignConcept = 'Header_Simple' | 'Pricing_Table_3_Col';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardData {
  tier: 'Normal' | 'Pro' | 'Elite';
  price: string;
  originalPrice?: string;
  description: string;
  features: PricingFeature[];
  buttonLabel: string;
  isPopular?: boolean;
}

interface SegmentData {
  heading?: string;
  subheading?: string;
  cards?: PricingCardData[]; // New field for pricing cards
}

interface SchemaItem {
  id: string;
  concept: DesignConcept;
  data: SegmentData;
}

// --- 2. CONTENT SCHEMA ---

const PRICING_CONTENT: SchemaItem[] = [
  {
    id: "Header",
    concept: "Header_Simple",
    data: {
      heading: "Choose Your Charging Plan",
      subheading: "Flexible plans for every type of EV owner. Upgrade anytime."
    }
  },
  {
    id: "Plans",
    concept: "Pricing_Table_3_Col",
    data: {
      cards: [
        {
          tier: "Normal",
          price: "Free",
          description: "Perfect for occasional charging.",
          buttonLabel: "Get Started",
          features: [
            { text: "Access to 100+ Chargers", included: true },
            { text: "Pay-as-you-go Rates", included: true },
            { text: "Community Support", included: true },
            { text: "Slot Reservation", included: false },
            { text: "Zero Convenience Fee", included: false },
          ]
        },
        {
          tier: "Pro",
          price: "₹149",
          originalPrice: "₹250",
          description: "Best value for daily commuters.",
          buttonLabel: "Go Pro",
          isPopular: true,
          features: [
            { text: "Access to 100+ Chargers", included: true },
            { text: "Discounted Rates (5% Off)", included: true },
            { text: "Priority Support", included: true },
            { text: "Slot Reservation", included: true },
            { text: "Zero Convenience Fee", included: true },
          ]
        },
        {
          tier: "Elite",
          price: "₹799",
          description: "VIP treatment & maximum savings.",
          buttonLabel: "Become Elite",
          features: [
            { text: "All Pro Features", included: true },
            { text: "Free Charging (First 50 Units)", included: true },
            { text: "Dedicated Account Manager", included: true },
            { text: "Home Charger Maintenance", included: true },
            { text: "Roadside Assistance", included: true },
          ]
        }
      ]
    }
  }
];

// --- 3. COMPONENTS ---

const PricingCard: React.FC<{ data: PricingCardData }> = ({ data }) => {
  // Determine style classes based on Tier
  let cardClass = "pricing-card";
  let btnClass = "btn btn-outline"; // Default
  let iconColor = "var(--text-ink)";

  if (data.isPopular) {
    cardClass += " featured";
    btnClass = "btn btn-primary"; // Green button
    iconColor = "var(--action-primary)";
  } else if (data.tier === 'Elite') {
    cardClass += " elite";
    btnClass = "btn btn-gradient"; // Gradient or Gold button
    iconColor = "var(--accent-gold)";
  }

  return (
    <div className={cardClass}>
      {data.isPopular && (
        <div className="pill pill-accent" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }}>
          Most Popular
        </div>
      )}
      
      {/* Header */}
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <h3 className="t-h3" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
           {data.tier === 'Elite' && <Crown size={20} color="var(--accent-gold)" />}
           {data.tier === 'Pro' && <Zap size={20} fill="currentColor" color="var(--action-primary)" />}
           {data.tier}
        </h3>
        <p className="t-body" style={{ fontSize: 'var(--text-sm)', marginTop: '4px' }}>{data.description}</p>
      </div>

      {/* Price */}
      <div className="price-box">
        {data.originalPrice && <span className="price-original">{data.originalPrice}</span>}
        <span className="price-main">{data.price}</span>
        {data.price !== 'Free' && <span className="price-period">/month</span>}
      </div>

      {/* Button */}
      <button className={btnClass} style={{ width: '100%', marginBottom: 'var(--space-8)' }}>
        {data.buttonLabel}
      </button>

      {/* Features List */}
      <div style={{ flex: 1 }}>
        {data.features.map((feat, i) => (
          <div key={i} className="list-check-item" style={{ fontSize: 'var(--text-sm)', color: data.tier === 'Elite' ? 'var(--text-inverse-muted)' : 'inherit' }}>
            {feat.included ? (
              <Check size={16} color={iconColor} style={{ flexShrink: 0 }} />
            ) : (
              <X size={16} color="var(--text-ink-muted)" style={{ flexShrink: 0, opacity: 0.5 }} />
            )}
            <span style={{ opacity: feat.included ? 1 : 0.5, textDecoration: feat.included ? 'none' : 'line-through' }}>
              {feat.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 4. SECTIONS ---

const PricingHeader: React.FC<{ data: SegmentData }> = ({ data }) => (
  <section className="m-section" style={{ paddingBottom: 'var(--space-8)', textAlign: 'center' }}>
    <div className="m-container">
      <h1 className="t-h2" style={{ marginBottom: 'var(--space-4)' }}>{data.heading}</h1>
      <p className="t-body-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>{data.subheading}</p>
    </div>
  </section>
);

const PricingTable: React.FC<{ data: SegmentData }> = ({ data }) => (
  <section className="m-section concept-pricing" style={{ paddingTop: 0 }}>
    <div className="m-container">
      <div className="pricing-grid">
        {data.cards?.map((card, i) => (
          <PricingCard key={i} data={card} />
        ))}
      </div>
    </div>
  </section>
);

// --- 5. MAIN PAGE ---

const PricingPage: React.FC = () => {
  return (
    <div className="massive-theme">
      {PRICING_CONTENT.map((segment) => {
        switch (segment.concept) {
          case 'Header_Simple':
            return <PricingHeader key={segment.id} data={segment.data} />;
          case 'Pricing_Table_3_Col':
            return <PricingTable key={segment.id} data={segment.data} />;
          default:
            return null;
        }
      })}

      {/* Trust Footer */}
      <footer className="m-section" style={{ textAlign: 'center', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="m-container">
           <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', opacity: 0.7 }}>
              <div className="pill" style={{ background: 'transparent' }}><Shield size={16}/> Secure Payment</div>
              <div className="pill" style={{ background: 'transparent' }}><Zap size={16}/> Instant Activation</div>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;