import React from 'react';
import './MassiveSystem.css'; 
import { 
  Activity, Home, Smartphone, Zap, 
  ArrowRight, Download, Search, Check, 
  MapPin, BatteryCharging 
} from 'lucide-react';

// --- IMPORT LOCAL ASSETS ---
// Adjust the number of "../" based on your actual folder depth relative to src/assets
import heroMainImg from '../../assets/hero-main.png';

// --- 1. TYPES & INTERFACES ---

type DesignConcept = 
  | 'Hero_Split'          // <--- NEW CONCEPT
  | 'Split_Screen_Benefit';

type ButtonIntent = 
  | 'primary' | 'secondary' | 'ghost' | 'link' | 'link_arrow';

type IconName = string; 

interface ButtonData {
  label: string;
  intent: ButtonIntent;
  icon?: IconName;
}

interface SegmentData {
  kicker?: { text: string; icon: IconName; };
  core: { heading: string; subheading?: string; body?: string; };
  buttons?: ButtonData[];
  pill?: { text: string; icon?: IconName; };
  badge?: { text: string; icon?: IconName; };
  badges?: { text: string; icon: IconName; }[];
  media?: { src: string; alt: string; };
  list?: { text: string; icon: IconName; }[];
  layout?: 'default' | 'reversed'; // <--- Added for Segment B flipping
}

interface SchemaItem {
  id: string;
  concept: DesignConcept;
  data: SegmentData;
}

// --- 2. THE CONTENT SCHEMA ---

const UPI_CONTENT: SchemaItem[] = [
  // Segment A: HERO (Text Left / Image Right)
  {
    id: "A",
    concept: "Hero_Split", // Changed from Immersive_Gateway
    data: {
      kicker: { text: "Quick On-The-Go Charging", icon: "Zap" },
      core: {
        heading: "Scan UPI & Charge EV",
        subheading: "No App Installation Required", 
      },
      buttons: [
        { label: "Find UPI Chargers", intent: "primary", icon: "Search" }
      ],
      badges: [
        { text: "100+ Charging Stations", icon: "BatteryCharging" } 
      ],
      media: { 
        src: heroMainImg, // <--- Using the imported image
        alt: "Charger with UPI" 
      }
    }
  },

  // Segment B: APP BANNER (Flipped: Image Left / Text Right)
  {
    id: "B",
    concept: "Split_Screen_Benefit",
    data: {
      layout: 'reversed', // <--- Altered accordingly to create zig-zag pattern
      kicker: { text: "Hassle Free Charging", icon: "Smartphone" }, 
      core: {
        heading: "Tired of Downloading 100 EV Apps?",
        subheading: "Get 1 App to Rule them All",
        body: "Be free of maintaining 100 wallets and charge straight from UPI"
      },
      buttons: [
        { label: "Get 1C EV App", intent: "primary" }
      ],
      pill: { text: "Ultimate EV Charging App" },
      media: { 
        src: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop", 
        alt: "Mobile App" 
      }
    }
  }
];

// --- 3. HELPER COMPONENTS ---

const IconMap: React.FC<{ name?: IconName; className?: string }> = ({ name, className }) => {
  const icons: Record<string, any> = {
    Zap: Zap,
    Activity: Activity,
    Home: Home,
    Smartphone: Smartphone,
    Search: Search,
    Download: Download,
    Check: Check,
    MapPin: MapPin,
    BatteryCharging: BatteryCharging,
  };

  const IconComponent = name ? icons[name] : Activity;
  return IconComponent ? <IconComponent className={className} size={20} /> : null;
};

const Button: React.FC<ButtonData> = ({ label, intent, icon }) => {
  const intentClassMap: Record<string, string> = {
    primary: "btn-primary",
    secondary: "btn-outline",
    ghost: "btn-ghost",
    link: "btn-link",
    link_arrow: "btn-link",
  };

  const className = `btn ${intentClassMap[intent] || 'btn-primary'}`;

  return (
    <button className={className}>
      {icon && <IconMap name={icon} />}
      {label}
      {intent === 'link_arrow' && <ArrowRight size={16} />}
    </button>
  );
};

// --- 4. DESIGN CONCEPT COMPONENTS ---

// Concept A: HERO SPLIT (New)
const HeroSplit: React.FC<{ data: SegmentData }> = ({ data }) => (
  <section className="m-section" style={{ paddingBottom: 0 }}>
    <div className="m-container">
      {/* 50-50 Grid */}
      <div className="m-grid" style={{ alignItems: 'center', minHeight: '80vh' }}>
        
        {/* Left: Text Content */}
        <div style={{ gridColumn: 'span 6', paddingRight: 'var(--space-8)' }}>
           {data.kicker && (
            <div className="pill pill-accent" style={{ marginBottom: 'var(--space-6)' }}>
              <IconMap name={data.kicker.icon} />
              {data.kicker.text}
            </div>
          )}
          
          {/* Using t-hero for maximum size */}
          <h1 className="t-hero" style={{ color: 'var(--text-ink)', marginBottom: 'var(--space-4)' }}>
            {data.core.heading}
          </h1>
          
          <p className="t-h3" style={{ color: 'var(--text-ink-light)', marginBottom: 'var(--space-8)', fontWeight: 400 }}>
            {data.core.subheading}
          </p>

          <div className="m-flex m-gap-4">
            {data.buttons?.map((btn, i) => <Button key={i} {...btn} />)}
          </div>

          {data.badges && (
            <div className="m-flex m-gap-4" style={{ marginTop: 'var(--space-12)' }}>
              {data.badges.map((b, i) => (
                <div key={i} className="badge-store" style={{ background: 'var(--bg-tech-wash)' }}>
                  <IconMap name={b.icon} /> {b.text}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Hero Image */}
        <div style={{ gridColumn: 'span 6', position: 'relative' }}>
           {/* Decorative Blob */}
           <div style={{ 
             position: 'absolute', top: '10%', right: '10%', width: '80%', height: '80%', 
             background: 'var(--bg-flow-light)', filter: 'blur(80px)', zIndex: -1, borderRadius: '50%' 
           }} />
           
           <img 
             src={data.media?.src} 
             alt={data.media?.alt} 
             style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-xl)', transform: 'scale(1.05)' }} 
            />
        </div>

      </div>
    </div>
  </section>
);

// Concept B: Split Screen (Product Banner) - UPDATED TO SUPPORT REVERSE
const SplitScreenBenefit: React.FC<{ data: SegmentData }> = ({ data }) => {
  const isReversed = data.layout === 'reversed';

  return (
    <section className="m-section concept-b">
      <div className="m-container">
        <div className="concept-b-card">
          
          {/* Content Side - Order shifts based on layout prop */}
          <div className="concept-b-content-side" style={{ order: isReversed ? 2 : 1 }}>
            {data.kicker && (
              <div className="t-small" style={{ color: 'var(--action-primary)', fontWeight: 700, textTransform: 'uppercase', marginBottom: 'var(--space-4)' }}>
                {data.kicker.text}
              </div>
            )}
            
            <h2 className="t-h2" style={{ marginBottom: 'var(--space-2)' }}>{data.core.heading}</h2>
            
            <p className="t-h3" style={{ color: 'var(--text-ink-light)', marginBottom: 'var(--space-4)' }}>
              {data.core.subheading}
            </p>

            <p className="t-body" style={{ marginBottom: 'var(--space-6)' }}>
              {data.core.body}
            </p>
            
            {data.pill && (
               <div className="pill" style={{ background: 'var(--bg-flow-light)', color: 'var(--action-primary)', alignSelf: 'flex-start', marginBottom: 'var(--space-6)' }}>
                  {data.pill.text}
               </div>
            )}
            
            <div className="m-flex m-gap-4">
               {data.buttons?.map((btn, i) => <Button key={i} {...btn} />)}
            </div>
          </div>

          {/* Media Side */}
          <div className="concept-b-media-side" style={{ order: isReversed ? 1 : 2 }}>
             <img src={data.media?.src} alt={data.media?.alt} style={{ maxWidth: '90%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
          </div>

        </div>
      </div>
    </section>
  );
};

// --- 5. MAIN RENDERER ---

const UPIChargingPage: React.FC = () => {
  return (
    <div className="massive-theme" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      {UPI_CONTENT.map((segment) => {
        switch (segment.concept) {
          case 'Hero_Split':
            return <HeroSplit key={segment.id} data={segment.data} />;
          case 'Split_Screen_Benefit':
            return <SplitScreenBenefit key={segment.id} data={segment.data} />;
          default:
            return null;
        }
      })}

      <footer className="m-section" style={{ background: 'var(--bg-infra-navy)', color: 'var(--text-inverse-muted)', textAlign: 'center' }}>
        <p className="t-small">© 2024 Massive Charging Network. UPI Enabled.</p>
      </footer>
    </div>
  );
};

export default UPIChargingPage;