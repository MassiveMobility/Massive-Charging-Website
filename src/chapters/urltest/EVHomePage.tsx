import React from 'react';
import { 
  Activity, Home, Smartphone, Briefcase, Crown, Check, 
  ArrowRight, Download, Search, MapPin, Zap, CreditCard, 
  Users, BatteryCharging 
} from 'lucide-react';

// --- 1. TYPESCRIPT INTERFACES ---

type DesignConcept = 
  | 'Immersive_Gateway' | 'Split_Screen_Benefit' | 'Orbit_Layout' 
  | 'ROI_Highlight' | 'Editorial_Card' | 'VIP_Ticket';

type ButtonIntent = 
  | 'primary' | 'ghost' | 'outline' | 'link' | 'link_arrow' 
  | 'gradient' | 'solid_white' | 'solid_gold';

// Use 'any' for the icon map to avoid version conflicts
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

// --- 2. THE CONTENT SCHEMA ---

const CONTENT_SCHEMA: SchemaItem[] = [
  {
    id: "A",
    concept: "Immersive_Gateway",
    data: {
      kicker: { text: "Charging Network Is Live", icon: "Pulse" },
      core: {
        heading: "Find Chargers Anytime. Anywhere",
        subheading: "Live life at 100%",
      },
      buttons: [
        { label: "Find Chargers", intent: "primary", icon: "Search" },
        { label: "Get App", intent: "ghost", icon: "Download" }
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
        { label: "Get EV Charger", intent: "outline" },
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

// --- 3. CSS STYLES (INJECTED) ---

const PAGE_CSS = `
  /* Global Resets for this Component */
  .ev-wrapper { font-family: 'Inter', system-ui, sans-serif; color: #1f2937; line-height: 1.5; width: 100%; overflow-x: hidden; }
  .ev-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 10; }
  
  /* Utilities */
  .ev-flex { display: flex; }
  .ev-flex-col { flex-direction: column; }
  .ev-items-center { align-items: center; }
  .ev-justify-between { justify-content: space-between; }
  .ev-justify-center { justify-content: center; }
  .ev-gap-2 { gap: 8px; }
  .ev-gap-4 { gap: 16px; }
  .ev-gap-6 { gap: 24px; }
  .ev-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
  
  @media (min-width: 768px) {
    .ev-grid-2 { grid-template-columns: 1fr 1fr; }
    .ev-grid-3 { grid-template-columns: 1fr 1fr 1fr; }
    .ev-text-left-md { text-align: left !important; }
    .ev-align-start-md { align-items: flex-start !important; }
  }

  /* Buttons */
  .ev-btn { padding: 12px 24px; border-radius: 50px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; border: none; transition: transform 0.2s; text-decoration: none; font-size: 16px; }
  .ev-btn:hover { transform: translateY(-2px); }
  .ev-btn-primary { background: #16a34a; color: white; }
  .ev-btn-ghost { background: rgba(255,255,255,0.15); color: white; backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.3); }
  .ev-btn-outline { border: 2px solid #111827; background: transparent; color: #111827; }
  .ev-btn-link { background: none; color: #2563eb; padding: 0; }
  .ev-btn-link_arrow { background: none; color: #2563eb; padding: 0; font-weight: 700; }
  .ev-btn-gradient { background: linear-gradient(90deg, #2563eb, #9333ea); color: white; box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4); }
  .ev-btn-solid_white { background: white; color: #1e3a8a; }
  .ev-btn-solid_gold { background: linear-gradient(90deg, #facc15, #eab308, #ca8a04); color: black; border: 1px solid #fde047; }

  /* Kickers & Badges */
  .ev-kicker { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 99px; text-transform: uppercase; font-size: 12px; font-weight: 700; letter-spacing: 0.05em; margin-bottom: 16px; }
  .ev-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(0,0,0,0.6); color: white; padding: 8px 12px; border-radius: 6px; font-size: 12px; border: 1px solid rgba(255,255,255,0.2); }

  /* --- CONCEPT A: IMMERSIVE GATEWAY --- */
  .concept-a { height: 90vh; min-height: 600px; display: flex; align-items: center; position: relative; background: #000; overflow: hidden; }
  .concept-a-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.6; }
  .concept-a-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent); }
  .concept-a-content { position: relative; max-width: 600px; color: white; }
  .concept-a h1 { font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 800; line-height: 1.1; margin: 16px 0; }
  .concept-a p { font-size: 1.25rem; color: #d1d5db; margin-bottom: 32px; }
  .concept-a-pill { position: absolute; top: 24px; right: 24px; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); color: white; padding: 8px 16px; border-radius: 8px; font-size: 0.875rem; border: 1px solid rgba(255,255,255,0.2); }

  /* --- CONCEPT B: SPLIT SCREEN --- */
  .concept-b { padding: 80px 0; background: #f9fafb; }
  .concept-b-card { background: white; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); border: 1px solid #f3f4f6; }
  .concept-b-content { padding: 48px; display: flex; flex-direction: column; justify-content: center; }
  .concept-b-media { background: #f3f4f6; display: flex; align-items: center; justify-content: center; padding: 40px; position: relative; }
  .concept-b h2 { font-size: 2.5rem; font-weight: 700; margin-bottom: 8px; color: #111827; }
  .concept-b-sub { font-size: 1.25rem; color: #6b7280; margin-bottom: 24px; }
  .concept-b-list-item { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; font-weight: 500; color: #374151; }
  .concept-b-check { color: #16a34a; background: #dcfce7; padding: 4px; border-radius: 50%; width: 20px; height: 20px; display: flex; justify-content: center; align-items: center; }

  /* --- CONCEPT C: ORBIT --- */
  .concept-c { padding: 100px 0; background: #0f172a; color: white; position: relative; overflow: hidden; text-align: center; }
  .concept-c-bg { position: absolute; inset: 0; background: radial-gradient(circle at center, #1e3a8a 0%, #0f172a 70%); z-index: 0; }
  .concept-c h2 { font-size: 3rem; font-weight: 700; margin-bottom: 16px; }
  .concept-c-sub { font-size: 1.5rem; color: #bfdbfe; margin-bottom: 40px; max-width: 600px; margin-left: auto; margin-right: auto; }
  .concept-c-phone { width: 280px; height: 550px; border: 8px solid #334155; border-radius: 40px; overflow: hidden; background: black; margin: 0 auto; box-shadow: 0 0 50px rgba(37,99,235,0.3); }
  .concept-c-item { display: flex; align-items: center; gap: 16px; margin: 20px 0; justify-content: center; }
  .concept-c-icon { background: #1e293b; padding: 12px; border-radius: 12px; color: #60a5fa; }
  
  /* --- CONCEPT D: ROI --- */
  .concept-d { padding: 80px 0; background: #1e3a8a; color: white; }
  .concept-d h2 { font-size: 2.5rem; font-weight: 700; margin-bottom: 16px; }
  .concept-d p { color: #bfdbfe; font-size: 1.25rem; margin-bottom: 32px; max-width: 500px; }
  .concept-d-card { background: white; color: #1e3a8a; padding: 32px; border-radius: 16px; transform: rotate(2deg); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); text-align: center; }
  .concept-d-amount { font-size: 3rem; font-weight: 800; background: -webkit-linear-gradient(#1d4ed8, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

  /* --- CONCEPT E: EDITORIAL --- */
  .concept-e { padding: 0 0 80px 0; margin-top: -40px; position: relative; z-index: 20; }
  .concept-e-card { background: #f5f5f4; border-top: 4px solid #d6d3d1; border-radius: 16px; padding: 40px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
  .concept-e h2 { font-family: Georgia, serif; font-style: italic; font-size: 2.25rem; color: #292524; margin-bottom: 12px; }
  .concept-e-img-wrap { transform: rotate(6deg); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2); border-radius: 8px; overflow: hidden; max-width: 250px; margin: 0 auto; }

  /* --- CONCEPT F: VIP --- */
  .concept-f { padding: 80px 0; background: #000; border-top: 1px solid #422006; }
  .concept-f-border { background: linear-gradient(135deg, #1f2937, #000); border: 1px solid #ca8a04; border-radius: 24px; padding: 4px; max-width: 900px; margin: 0 auto; }
  .concept-f-inner { border: 1px dashed #ca8a04; border-radius: 20px; padding: 40px; }
  .concept-f h2 { font-family: serif; font-size: 3rem; background: linear-gradient(to right, #fde047, #eab308); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 32px; }
  .concept-f li { color: #d1d5db; display: flex; items-center; gap: 12px; margin-bottom: 12px; font-size: 1.1rem; }
  .concept-f-bullet { color: #eab308; font-size: 1.5rem; line-height: 1; }
`;

// --- 4. COMPONENTS ---

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

const Button: React.FC<ButtonData> = ({ label, intent, icon }) => {
  return (
    <button className={`ev-btn ev-btn-${intent}`}>
      {icon && <IconMap name={icon} />}
      {label}
      {intent === 'link_arrow' && <ArrowRight size={16} />}
    </button>
  );
};

// --- DESIGN CONCEPT COMPONENTS ---

const ImmersiveGateway: React.FC<{ data: SegmentData }> = ({ data }) => (
  <section className="concept-a">
    <img src={data.media?.src} alt={data.media?.alt} className="concept-a-bg" />
    <div className="concept-a-overlay"></div>
    <div className="ev-container" style={{ width: '100%' }}>
      <div className="concept-a-content">
        {data.kicker && (
          <div className="ev-kicker" style={{ background: '#22c55e', color: 'white' }}>
            <IconMap name={data.kicker.icon} />
            {data.kicker.text}
          </div>
        )}
        <h1>{data.core.heading}</h1>
        <p>{data.core.subheading}</p>
        <div className="ev-flex" style={{ gap: '16px', flexWrap: 'wrap' }}>
          {data.buttons?.map((btn, i) => <Button key={i} {...btn} />)}
        </div>
        {data.badges && (
          <div className="ev-flex" style={{ gap: '16px', marginTop: '32px', opacity: 0.8 }}>
            {data.badges.map((b, i) => (
              <div key={i} className="ev-badge">
                <IconMap name={b.icon} /> {b.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    {data.pill && (
      <div className="concept-a-pill">
        {data.pill.text}
      </div>
    )}
  </section>
);

const SplitScreenBenefit: React.FC<{ data: SegmentData }> = ({ data }) => (
  <section className="concept-b">
    <div className="ev-container">
      <div className="concept-b-card">
        <div className="ev-grid ev-grid-2" style={{ gap: 0 }}>
          <div className="concept-b-content">
            {data.kicker && (
              <div className="ev-kicker" style={{ color: '#16a34a', paddingLeft: 0 }}>
                <IconMap name={data.kicker.icon} /> {data.kicker.text}
              </div>
            )}
            <h2>{data.core.heading}</h2>
            <p className="concept-b-sub">{data.core.subheading}</p>
            {data.badge && (
              <div style={{ background: '#dcfce7', color: '#15803d', padding: '6px 12px', borderRadius: '6px', fontWeight: 'bold', display: 'inline-block', marginBottom: '24px', alignSelf: 'flex-start' }}>
                {data.badge.text}
              </div>
            )}
            <div style={{ marginBottom: '32px' }}>
              {data.list?.map((item, i) => (
                <div key={i} className="concept-b-list-item">
                  <div className="concept-b-check"><IconMap name={item.icon} /></div>
                  {item.text}
                </div>
              ))}
            </div>
            <div className="ev-flex ev-items-center" style={{ gap: '24px' }}>
              {data.buttons?.map((btn, i) => <Button key={i} {...btn} />)}
            </div>
          </div>
          <div className="concept-b-media">
            <img src={data.media?.src} alt={data.media?.alt} style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const OrbitLayout: React.FC<{ data: SegmentData }> = ({ data }) => (
  <section className="concept-c">
    <div className="concept-c-bg"></div>
    <div className="ev-container">
      {data.kicker && (
        <div className="ev-kicker" style={{ border: '1px solid #3b82f6', color: '#93c5fd' }}>
          {data.kicker.text}
        </div>
      )}
      <h2>{data.core.heading}</h2>
      <p className="concept-c-sub">{data.core.subheading}</p>

      <div className="ev-grid ev-grid-3 ev-items-center" style={{ marginTop: '48px' }}>
        <div className="ev-flex ev-flex-col" style={{ gap: '24px', alignItems: 'center' }}>
          {data.list?.slice(0, 3).map((item, i) => (
             <div key={i} className="concept-c-item">
               <span>{item.text}</span>
               <div className="concept-c-icon"><IconMap name={item.icon} /></div>
             </div>
          ))}
        </div>

        <div className="ev-justify-center ev-flex">
           <div className="concept-c-phone">
             <img src={data.media?.src} alt="App" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
           </div>
        </div>

        <div className="ev-flex ev-flex-col" style={{ gap: '24px', alignItems: 'center' }}>
           {data.list?.slice(3).map((item, i) => (
             <div key={i} className="concept-c-item" style={{ flexDirection: 'row-reverse' }}>
               <span>{item.text}</span>
               <div className="concept-c-icon"><IconMap name={item.icon} /></div>
             </div>
          ))}
          <div style={{ marginTop: '24px' }}>
             {data.buttons?.map((btn, i) => <Button key={i} {...btn} />)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ROIHighlight: React.FC<{ data: SegmentData }> = ({ data }) => (
  <section className="concept-d">
    <div className="ev-container">
      <div className="ev-grid ev-grid-2 ev-items-center">
        <div>
          {data.kicker && (
            <div className="ev-kicker" style={{ color: '#facc15' }}>
              <IconMap name={data.kicker.icon} /> {data.kicker.text}
            </div>
          )}
          <h2>{data.core.heading}</h2>
          <p>{data.core.subheading}</p>
          <div style={{ marginTop: '24px' }}>
            {data.buttons?.map((btn, i) => <Button key={i} {...btn} />)}
          </div>
        </div>

        {data.badge && (
          <div className="ev-flex ev-justify-center">
            <div className="concept-d-card">
              <p style={{ textTransform: 'uppercase', fontSize: '0.875rem', fontWeight: 700, color: '#9ca3af' }}>Monthly Potential</p>
              <div className="concept-d-amount">
                {data.badge.text.split(" ")[0]} {data.badge.text.split(" ")[1]}
              </div>
              <p style={{ fontSize: '1.125rem', fontWeight: 700 }}>{data.badge.text.split(" ").slice(2).join(" ")}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  </section>
);

const EditorialCard: React.FC<{ data: SegmentData }> = ({ data }) => (
  <section className="concept-e">
    <div className="ev-container">
      <div className="concept-e-card">
        <div className="ev-grid ev-grid-2 ev-items-center">
          <div>
            {data.pill && (
              <span style={{ background: '#e7e5e4', color: '#57534e', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', display: 'inline-block', marginBottom: '16px' }}>
                {data.pill.text}
              </span>
            )}
            <h2>{data.core.heading}</h2>
            <p style={{ color: '#57534e', fontSize: '1.125rem' }}>{data.core.subheading}</p>
            <div style={{ marginTop: '16px' }}>
              {data.buttons?.map((btn, i) => <Button key={i} {...btn} />)}
            </div>
          </div>
          <div className="ev-flex ev-justify-center">
            <div className="concept-e-img-wrap">
               <img src={data.media?.src} alt={data.media?.alt} style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const VIPTicket: React.FC<{ data: SegmentData }> = ({ data }) => (
  <section className="concept-f">
    <div className="ev-container">
      <div className="concept-f-border">
        <div className="concept-f-inner">
          <div className="ev-grid ev-grid-2">
            <div>
              {data.kicker && (
                <div className="ev-kicker" style={{ color: '#eab308' }}>
                  <IconMap name={data.kicker.icon} /> {data.kicker.text}
                </div>
              )}
              <h2>{data.core.heading}</h2>
              <div style={{ marginTop: '24px' }}>
                {data.buttons?.map((btn, i) => <Button key={i} {...btn} />)}
              </div>
            </div>
            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '40px' }}>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {data.list?.map((item, i) => (
                  <li key={i}>
                    <span className="concept-f-bullet">♦</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- MAIN RENDERER ---

const EVHomePage: React.FC = () => {
  return (
    <div className="ev-wrapper">
      <style>{PAGE_CSS}</style>
      
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
      
      <footer style={{ background: 'black', color: '#6b7280', padding: '40px 0', textAlign: 'center', fontSize: '14px' }}>
        © 2024 EV Charging App. All Rights Reserved.
      </footer>
    </div>
  );
};

export default EVHomePage;