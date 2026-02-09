import React from 'react';
import './MassiveSystem.css'; // <--- IMPORTS YOUR LOCAL "SANDBOXED" STYLES
import { 
  Activity, Home, Smartphone, Briefcase, Crown, Check, 
  ArrowRight, Download, Search, MapPin, Zap, CreditCard, 
  Users, BatteryCharging 
} from 'lucide-react';

// --- 1. TYPES & INTERFACES ---

type DesignConcept = 
  | 'Immersive_Gateway' | 'Split_Screen_Benefit' | 'Orbit_Layout' 
  | 'ROI_Highlight' | 'Editorial_Card' | 'VIP_Ticket';

// Updated: Added 'secondary' to the allowed intents
type ButtonIntent = 
  | 'primary' | 'secondary' | 'ghost' | 'link' | 'link_arrow' 
  | 'gradient' | 'solid_white' | 'solid_gold';

// Using 'any' for icon to prevent strict-mode conflicts
type IconName = string; 

interface ButtonData {
  label: string;
  intent: ButtonIntent;
  icon?: IconName;
  target?: string;
}

interface ListItem {
  text: string;
  icon?: IconName;
}

interface SegmentData {
  kicker?: { text: string; icon: IconName; };
  core: { heading: string; subheading?: string; body?: string; };
  buttons?: ButtonData[];
  pill?: { text: string; icon?: IconName; };
  badge?: { text: string; icon?: IconName; type?: 'hero_metric' | 'standard'; };
  badges?: { text: string; icon: IconName; target?: string; }[];
  list?: ListItem[];
  media?: { type: 'image' | 'video' | 'icon'; src: string; alt: string; };
}

interface SchemaItem {
  id: string;
  concept: DesignConcept;
  data: SegmentData;
}

// --- 2. THE CONTENT SCHEMA (The "Meta Labels") ---

const CONTENT_SCHEMA: SchemaItem[] = [
  {
    id: "A",
    concept: "Immersive_Gateway",
    data: {
      kicker: { text: "Charging Network Is Live", icon: "Pulse" },
      core: {
        heading: "Find Chargers Anytime. Anywhere.",
        subheading: "Live life at 100%",
      },
      buttons: [
        { label: "Find Chargers", intent: "primary", icon: "Search" }, // Green
        { label: "Get App", intent: "ghost", icon: "Download" } // White Border (Dark Mode Ghost)
      ],
      pill: { text: "Sponsored by PayTm" },
      badges: [
        { text: "Get it from Playstore", icon: "Playstore" },
        { text: "Get it from Appstore", icon: "Appstore" }
      ],
      media: { type: "image", src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop", alt: "EV Charger" }
    }
  },
  {
    id: "B",
    concept: "Split_Screen_Benefit",
    data: {
      kicker: { text: "Private Home Charging", icon: "Home" },
      core: {
        heading: "Set-Up your Personal Charging Infrastructure",
        subheading: "Safe & Cost Effective",
      },
      buttons: [
        { label: "Get EV Charger", intent: "secondary" }, // <--- CHANGED: Black Border / Empty
        { label: "Read Charging Guide", intent: "link" }
      ],
      badge: { text: "100% Charge in 10h" },
      list: [
        { text: "Charge Safely At Home", icon: "Check" },
        { text: "Save Money & Time", icon: "Check" },
        { text: "Control Charger Remotely", icon: "Check" },
        { text: "Monitor Consumption", icon: "Check" }
      ],
      media: { type: "image", src: "https://images.unsplash.com/photo-1620857388652-3cb611f7c050?q=80&w=2070&auto=format&fit=crop", alt: "Home Charger" }
    }
  },
  {
    id: "C",
    concept: "Orbit_Layout",
    data: {
      kicker: { text: "EV Charging App", icon: "Smartphone" },
      core: {
        heading: "Get 1C Charging App",
        subheading: "One App For All Activities",
        body: "Control all charging activities from single app in your phone."
      },
      buttons: [
        { label: "Get EV Charging App", intent: "gradient" }
      ],
      list: [
        { text: "Locate Chargers", icon: "MapPin" },
        { text: "Start & Stop", icon: "Zap" },
        { text: "Pay for Charging", icon: "CreditCard" },
        { text: "Join Community", icon: "Users" },
        { text: "Battery Health", icon: "BatteryCharging" }
      ],
      media: { type: "image", src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop", alt: "App Interface" }
    }
  },
  {
    id: "D",
    concept: "ROI_Highlight",
    data: {
      kicker: { text: "Set Up Charger and Earn", icon: "Rupee" },
      core: {
        heading: "Set-up your EV Charging Station",
        subheading: "Convert empty land into EV Charging Station and earn monthly income",
        body: "Get Hardware and Software to run Charging Station."
      },
      buttons: [
        { label: "How To Setup Station", intent: "solid_white" } 
      ],
      badge: { text: "₹ 80,000+ monthly income", type: "hero_metric" }
    }
  },
  {
    id: "E",
    concept: "Editorial_Card",
    data: {
      core: {
        heading: "Own an EV or Planning to Buy One?",
        subheading: "Confused about Charging Cost & Required Infrastructure?",
        body: "Get Detailed Charging Guide for your Vehicles"
      },
      buttons: [
        { label: "Explore Charging Guide", intent: "link_arrow" }
      ],
      pill: { text: "2W, 3W, 4W" },
      media: { type: "image", src: "https://plus.unsplash.com/premium_photo-1681488102377-508003f49ce1?q=80&w=2070&auto=format&fit=crop", alt: "Booklet" }
    }
  },
  {
    id: "F",
    concept: "VIP_Ticket",
    data: {
      kicker: { text: "Exclusive Membership", icon: "Crown" },
      core: {
        heading: "Become a Pro Member"
      },
      buttons: [
        { label: "Get Massive Membership", intent: "solid_gold" }
      ],
      list: [
        { text: "Charging Discounts" },
        { text: "Charging Pass" },
        { text: "Access to Premium Stations" },
        { text: "Points on Each Charge" },
        { text: "Discount on Hardware" }
      ]
    }
  }
];

// --- 3. HELPER COMPONENTS ---

const IconMap: React.FC<{ name?: IconName; className?: string }> = ({ name, className }) => {
  const icons: Record<string, any> = {
    Pulse: Activity,
    Home: Home,
    Search: Search,
    Download: Download,
    Check: Check,
    Smartphone: Smartphone,
    MapPin: MapPin,
    Zap: Zap,
    CreditCard: CreditCard,
    Users: Users,
    BatteryCharging: BatteryCharging,
    Rupee: Briefcase,
    Crown: Crown,
    Playstore: Download,
    Appstore: Download
  };

  const IconComponent = name ? icons[name] : Activity;
  return IconComponent ? <IconComponent className={className} size={20} /> : null;
};

// The Button now uses the CLASSES from MassiveSystem.css
const Button: React.FC<ButtonData> = ({ label, intent, icon }) => {
  // Mapping intent strings to CSS classes
  const intentClassMap: Record<string, string> = {
    primary: "btn-primary",       // Green
    secondary: "btn-outline",     // Black Border, Empty (Your requested Secondary)
    ghost: "btn-ghost",           // White Border (Keep this for dark mode Hero)
    outline: "btn-outline",       // Alias
    gradient: "btn-gradient",
    link: "btn-link",
    link_arrow: "btn-link",
    solid_white: "btn-ghost", 
    solid_gold: "btn-primary" 
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

// --- 4. DESIGN CONCEPT COMPONENTS (Using CSS Classes) ---

const ImmersiveGateway: React.FC<{ data: SegmentData }> = ({ data }) => (
  <section className="concept-a">
    <div className="concept-a-media-layer">
       <img src={data.media?.src} alt={data.media?.alt} />
    </div>
    <div className="concept-a-overlay"></div>
    
    <div className="m-container">
      <div className="concept-a-content">
        {data.kicker && (
          <div className="pill pill-accent" style={{ marginBottom: 'var(--space-4)' }}>
            <IconMap name={data.kicker.icon} />
            {data.kicker.text}
          </div>
        )}
        <h1 className="t-hero">{data.core.heading}</h1>
        <p className="t-body-lg" style={{ color: 'var(--text-inverse-muted)', margin: 'var(--space-4) 0 var(--space-8) 0' }}>
          {data.core.subheading}
        </p>
        
        <div className="m-flex m-gap-4">
          {data.buttons?.map((btn, i) => <Button key={i} {...btn} />)}
        </div>

        {data.badges && (
          <div className="m-flex m-gap-4" style={{ marginTop: 'var(--space-8)', opacity: 0.8 }}>
            {data.badges.map((b, i) => (
              <div key={i} className="badge-store">
                <IconMap name={b.icon} /> {b.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </section>
);

const SplitScreenBenefit: React.FC<{ data: SegmentData }> = ({ data }) => (
  <section className="m-section concept-b">
    <div className="m-container">
      <div className="concept-b-card">
        
        {/* Content Side */}
        <div className="concept-b-content-side">
          {data.kicker && (
            <div className="t-small" style={{ color: 'var(--action-primary)', fontWeight: 700, textTransform: 'uppercase', marginBottom: 'var(--space-4)' }}>
              {data.kicker.text}
            </div>
          )}
          <h2 className="t-h2" style={{ marginBottom: 'var(--space-2)' }}>{data.core.heading}</h2>
          <p className="t-body" style={{ marginBottom: 'var(--space-6)' }}>{data.core.subheading}</p>
          
          {data.badge && (
             <div className="pill" style={{ background: 'var(--bg-flow-light)', color: 'var(--action-primary)', alignSelf: 'flex-start', marginBottom: 'var(--space-6)' }}>
                {data.badge.text}
             </div>
          )}

          <div style={{ marginBottom: 'var(--space-8)' }}>
            {data.list?.map((item, i) => (
              <div key={i} className="list-check-item">
                <div className="list-icon-box"><Check size={14} /></div>
                {item.text}
              </div>
            ))}
          </div>
          
          <div className="m-flex m-gap-4">
             {data.buttons?.map((btn, i) => <Button key={i} {...btn} />)}
          </div>
        </div>

        {/* Media Side */}
        <div className="concept-b-media-side">
           <img src={data.media?.src} alt="Product" style={{ maxWidth: '80%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
        </div>

      </div>
    </div>
  </section>
);

const OrbitLayout: React.FC<{ data: SegmentData }> = ({ data }) => (
  <section className="m-section concept-c">
    <div className="m-container">
      {data.kicker && <div className="pill pill-tech" style={{ marginBottom: 'var(--space-6)' }}>{data.kicker.text}</div>}
      
      <h2 className="t-h2" style={{ marginBottom: 'var(--space-4)' }}>{data.core.heading}</h2>
      <p className="t-body-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>{data.core.subheading}</p>

      <div className="concept-c-grid">
        {/* Left Col */}
        <div className="concept-c-left">
           {data.list?.slice(0, 3).map((item, i) => (
             <div key={i} className="concept-c-item">
               <div className="list-icon-box" style={{ background: 'var(--bg-tech-wash)', color: 'var(--text-ink)' }}><IconMap name={item.icon} /></div>
               <span>{item.text}</span>
             </div>
           ))}
        </div>

        {/* Center Phone */}
        <div className="concept-c-phone-frame">
           <img src={data.media?.src} alt="App" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
        </div>

        {/* Right Col */}
        <div className="concept-c-right">
           {data.list?.slice(3).map((item, i) => (
             <div key={i} className="concept-c-item">
               <div className="list-icon-box" style={{ background: 'var(--bg-tech-wash)', color: 'var(--text-ink)' }}><IconMap name={item.icon} /></div>
               <span>{item.text}</span>
             </div>
           ))}
           <div style={{ marginTop: 'var(--space-6)', display: 'flex', justifyContent: 'flex-end' }}>
             {data.buttons?.map((btn, i) => <Button key={i} {...btn} />)}
           </div>
        </div>
      </div>

    </div>
  </section>
);

const ROIHighlight: React.FC<{ data: SegmentData }> = ({ data }) => (
  <section className="m-section concept-d">
    <div className="m-container">
      <div className="m-grid" style={{ alignItems: 'center' }}>
        <div style={{ gridColumn: 'span 7' }}>
           {data.kicker && <div className="pill pill-gold" style={{ marginBottom: 'var(--space-4)' }}>{data.kicker.text}</div>}
           <h2 className="t-h2" style={{ marginBottom: 'var(--space-4)' }}>{data.core.heading}</h2>
           <p className="t-body-lg" style={{ color: 'var(--text-inverse-muted)', marginBottom: 'var(--space-8)' }}>{data.core.subheading}</p>
           <div className="m-flex m-gap-4">
             {data.buttons?.map((btn, i) => <Button key={i} {...btn} />)}
           </div>
        </div>
        <div style={{ gridColumn: 'span 5' }}>
           {data.badge && (
             <div className="concept-d-stat-card">
                <div className="t-small" style={{ textTransform: 'uppercase', fontWeight: 700, color: 'var(--text-ink-muted)' }}>Monthly Potential</div>
                <div className="concept-d-value">{data.badge.text.split(" ")[0]} {data.badge.text.split(" ")[1]}</div>
                <div className="t-h3">{data.badge.text.split(" ").slice(2).join(" ")}</div>
             </div>
           )}
        </div>
      </div>
    </div>
  </section>
);

const EditorialCard: React.FC<{ data: SegmentData }> = ({ data }) => (
  <section className="concept-e-wrapper">
    <div className="m-container">
      <div className="concept-e-card">
        <div style={{ flex: 1 }}>
          {data.pill && <div className="pill" style={{ background: '#E7E5E4', marginBottom: 'var(--space-4)' }}>{data.pill.text}</div>}
          <h2 className="concept-e-title">{data.core.heading}</h2>
          <p className="t-body" style={{ margin: 'var(--space-4) 0' }}>{data.core.subheading}</p>
          {data.buttons?.map((btn, i) => <Button key={i} {...btn} />)}
        </div>
        <div style={{ width: '250px', transform: 'rotate(3deg)', boxShadow: 'var(--shadow-xl)' }}>
           <img src={data.media?.src} alt="Guide" style={{ borderRadius: 'var(--radius-sm)' }} />
        </div>
      </div>
    </div>
  </section>
);

const VIPTicket: React.FC<{ data: SegmentData }> = ({ data }) => (
  <section className="m-section concept-f">
    <div className="m-container">
      <div className="concept-f-border">
        <div className="concept-f-inner">
           {data.kicker && <div className="pill pill-gold" style={{ marginBottom: 'var(--space-6)' }}>{data.kicker.text}</div>}
           <h2 className="t-h1" style={{ marginBottom: 'var(--space-8)' }}>{data.core.heading}</h2>
           
           <div className="m-grid">
             <div style={{ gridColumn: 'span 6', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="m-flex m-flex-col m-gap-4">
                  {data.buttons?.map((btn, i) => <Button key={i} {...btn} />)}
                </div>
             </div>
             <div style={{ gridColumn: 'span 6', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: 'var(--space-8)', textAlign: 'left' }}>
                {data.list?.map((item, i) => (
                  <div key={i} className="list-check-item" style={{ color: 'var(--text-inverse-muted)' }}>
                    <span style={{ color: 'var(--accent-gold)' }}>♦</span> {item.text}
                  </div>
                ))}
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

// --- 5. MAIN RENDERER ---

const EVHomePage: React.FC = () => {
  return (
    // !!! IMPORTANT: The class "massive-theme" activates your CSS file !!!
    // Added flex gap of 24px between segments
    <div className="massive-theme" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {CONTENT_SCHEMA.map((segment) => {
        switch (segment.concept) {
          case 'Immersive_Gateway':
            return <ImmersiveGateway key={segment.id} data={segment.data} />;
          case 'Split_Screen_Benefit':
            return <SplitScreenBenefit key={segment.id} data={segment.data} />;
          case 'Orbit_Layout':
            return <OrbitLayout key={segment.id} data={segment.data} />;
          case 'ROI_Highlight':
            return <ROIHighlight key={segment.id} data={segment.data} />;
          case 'Editorial_Card':
            return <EditorialCard key={segment.id} data={segment.data} />;
          case 'VIP_Ticket':
            return <VIPTicket key={segment.id} data={segment.data} />;
          default:
            return null;
        }
      })}
      
      {/* Simple Footer for context */}
      <footer className="m-section" style={{ background: 'var(--bg-infra-navy)', color: 'var(--text-inverse-muted)', textAlign: 'center' }}>
        <p className="t-small">© 2024 Massive Charging Network. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default EVHomePage;