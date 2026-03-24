"use client";

import { useEffect } from "react";

const scanPageHTML = `
  <!-- TOPBAR -->
  <div class="topbar">
    <div class="logo-wrap">
      <div class="logo-massive">
        <img src="https://massivecharging.com/massive-charging-logo.svg" alt="Massive Charging"
          onerror="this.onerror=null;this.parentNode.innerHTML='<span class=\\'logo-massive-fallback\\'><span class=\\'r\\'>MASSIVE</span> CHARGING</span>'" />
      </div>
      <div class="divider-x">\u00d7</div>
      <a href="https://www.bharattaxi.com/" target="_blank" rel="noopener" class="logo-bt">
        <div class="logo-bt-icon">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M3 17l2-8h14l2 8H3z" fill="#92400E"/>
            <path d="M7 17v2h2v-2M15 17v2h2v-2" stroke="#92400E" stroke-width="1.5" stroke-linecap="round"/>
            <rect x="6" y="10" width="4" height="3" rx="0.5" fill="#92400E"/>
            <rect x="14" y="10" width="4" height="3" rx="0.5" fill="#92400E"/>
          </svg>
        </div>
        <div class="logo-bt-text">BHARAT TAXI</div>
      </a>
    </div>
    <div class="lang-toggle">
      <button class="lang-btn active" id="btn-en" onclick="setLang('en')">EN</button>
      <button class="lang-btn" id="btn-hi" onclick="setLang('hi')">\u0939\u093F\u0902</button>
    </div>
  </div>

  <!-- HERO -->
  <div class="hero reveal">
    <div class="hero-glow"></div>
    <div class="hero-badge">Live Charging Network</div>
    <h1 class="hero-headline en">Power Up<br/><span class="accent">Your Future</span></h1>
    <h1 class="hero-headline-hi">\u0905\u092A\u0928\u0947 <span class="accent">\u092D\u0935\u093F\u0937\u094D\u092F</span> \u0915\u094B<br/>\u091A\u093E\u0930\u094D\u091C \u0915\u0930\u0947\u0902</h1>
    <p class="hero-sub en">India\u2019s fastest-growing EV charging network \u2014 now with Bharat Taxi.</p>
    <p class="hero-sub-hi hi" style="margin-top:10px;font-size:14px;color:var(--text-2);line-height:1.55;">\u092D\u093E\u0930\u0924 \u0915\u0940 \u0924\u0947\u091C\u093C\u0940 \u0938\u0947 \u092C\u0922\u093C\u0924\u0940 EV \u091A\u093E\u0930\u094D\u091C\u093F\u0902\u0917 \u0928\u0947\u091F\u0935\u0930\u094D\u0915 \u2014 \u0905\u092C Bharat Taxi \u0915\u0947 \u0938\u093E\u0925\u0964</p>
  </div>

  <!-- STATS -->
  <div class="stats reveal">
    <div class="stat-chip">
      <div class="stat-num">1500+</div>
      <div class="stat-label en">Chargers</div>
      <div class="stat-label-hi hi" style="font-size:11px;color:var(--red-dark);margin-top:4px;font-weight:600;">\u091A\u093E\u0930\u094D\u091C\u0930</div>
    </div>
    <div class="stat-chip">
      <div class="stat-num">30+</div>
      <div class="stat-label en">Cities</div>
      <div class="stat-label-hi hi" style="font-size:11px;color:var(--red-dark);margin-top:4px;font-weight:600;">\u0936\u0939\u0930</div>
    </div>
  </div>

  <!-- SECTION 1: APP -->
  <div class="section reveal">
    <div class="section-tag en">01 \u2014 Charging App</div>
    <div class="section-tag hi" style="display:none;">01 \u2014 \u091A\u093E\u0930\u094D\u091C\u093F\u0902\u0917 \u0910\u092A</div>
    <h2 class="section-title en">Charge Smarter<br/>with Massive</h2>
    <h2 class="section-title-hi">Massive \u0915\u0947 \u0938\u093E\u0925<br/>\u0938\u094D\u092E\u093E\u0930\u094D\u091F \u091A\u093E\u0930\u094D\u091C\u093F\u0902\u0917</h2>
    <p class="section-desc en">Find chargers near you, pay via UPI, monitor battery health \u2014 all from one app.</p>
    <p class="section-desc-hi hi" style="font-size:14px;color:var(--text-2);margin-top:8px;line-height:1.6;">\u092A\u093E\u0938 \u0915\u0947 \u091A\u093E\u0930\u094D\u091C\u0930 \u0916\u094B\u091C\u0947\u0902, UPI \u0938\u0947 \u092A\u0947\u092E\u0947\u0902\u091F \u0915\u0930\u0947\u0902, \u092C\u0948\u091F\u0930\u0940 \u0939\u0947\u0932\u094D\u0925 \u091F\u094D\u0930\u0948\u0915 \u0915\u0930\u0947\u0902 \u2014 \u090F\u0915 \u0939\u0940 \u0910\u092A \u092E\u0947\u0902\u0964</p>
    <div class="app-row">
      <a href="https://play.google.com/store/apps/details?id=in.one.charging&hl=en_IN" target="_blank" rel="noopener" class="cta-store">
        <svg class="cta-store-icon" viewBox="0 0 24 24" fill="none">
          <path d="M3.18 23.72A2 2 0 0 1 2 21.9V2.1A2 2 0 0 1 3.18.28L14.07 12 3.18 23.72z" fill="#00D46A"/>
          <path d="M17.63 15.43l-11.5 6.63 9.06-9.06 2.44 2.43z" fill="#FFD900"/>
          <path d="M21.56 13.17A2 2 0 0 1 22 14a2 2 0 0 1-.44.83l-2.99 1.72-2.7-2.7 2.7-2.7 2.99 1.72z" fill="#FF3333"/>
          <path d="M6.13 2.94l11.5 6.63-2.44 2.43-9.06-9.06z" fill="#00B0FF"/>
        </svg>
        <div class="cta-store-text">
          <span class="cta-store-sub en">Download on</span>
          <span class="cta-store-sub hi" style="display:none;">\u0921\u093E\u0909\u0928\u0932\u094B\u0921 \u0915\u0930\u0947\u0902</span>
          <span class="cta-store-name">Google Play</span>
        </div>
      </a>
      <a href="https://apps.apple.com/in/app/1c-ev-charging/id6478754214" target="_blank" rel="noopener" class="cta-store">
        <svg class="cta-store-icon" viewBox="0 0 24 24" fill="none">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="#fff"/>
        </svg>
        <div class="cta-store-text">
          <span class="cta-store-sub en">Download on</span>
          <span class="cta-store-sub hi" style="display:none;">\u0921\u093E\u0909\u0928\u0932\u094B\u0921 \u0915\u0930\u0947\u0902</span>
          <span class="cta-store-name">App Store</span>
        </div>
      </a>
    </div>
  </div>

  <!-- SECTION 2: BUSINESS -->
  <div class="section alt reveal">
    <div class="section-tag en">02 \u2014 Business Opportunity</div>
    <div class="section-tag hi" style="display:none;">02 \u2014 \u0935\u094D\u092F\u093E\u092A\u093E\u0930 \u0915\u093E \u0905\u0935\u0938\u0930</div>
    <h2 class="section-title en">Start Your EV Charging<br/>Business Today</h2>
    <h2 class="section-title-hi">\u0906\u091C \u0939\u0940 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902<br/>EV \u091A\u093E\u0930\u094D\u091C\u093F\u0902\u0917 \u092C\u093F\u091C\u093C\u0928\u0947\u0938</h2>
    <p class="section-desc en">Convert any space into a revenue-generating charging station. We provide the hardware, software & full support.</p>
    <p class="section-desc-hi hi" style="font-size:14px;color:var(--text-2);margin-top:8px;line-height:1.6;">\u0915\u094B\u0908 \u092D\u0940 \u091C\u0917\u0939 \u092C\u0928 \u0938\u0915\u0924\u0940 \u0939\u0948 \u091A\u093E\u0930\u094D\u091C\u093F\u0902\u0917 \u0938\u094D\u091F\u0947\u0936\u0928\u0964 \u0939\u092E \u0926\u0947\u0924\u0947 \u0939\u0948\u0902 Hardware, Software \u0914\u0930 \u092A\u0942\u0930\u093E Support\u0964</p>
    <div class="pills">
      <div class="pill"><span class="icon">\ud83d\udd0c</span><span class="en">Charger Hardware</span><span class="hi" style="display:none;">\u091A\u093E\u0930\u094D\u091C\u0930 \u0939\u093E\u0930\u094D\u0921\u0935\u0947\u092F\u0930</span></div>
      <div class="pill"><span class="icon">\ud83d\udcbb</span><span class="en">Software Suite</span><span class="hi" style="display:none;">\u0938\u0949\u092B\u094D\u091F\u0935\u0947\u092F\u0930</span></div>
      <div class="pill"><span class="icon">\ud83d\udee0\ufe0f</span><span class="en">End-to-End Support</span><span class="hi" style="display:none;">\u092A\u0942\u0930\u093E \u0938\u092A\u094B\u0930\u094D\u091F</span></div>
      <div class="pill"><span class="icon">\ud83d\udcb0</span><span class="en">\u20b980,000+ Monthly</span><span class="hi" style="display:none;">\u20b980,000+ \u092E\u093E\u0938\u093F\u0915</span></div>
    </div>
    <a href="https://forms.1charging.com/franchise-application" target="_blank" rel="noopener" class="cta-primary">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="en">Setup Your EV Charging Business</span>
      <span class="hi" style="display:none;">EV \u091A\u093E\u0930\u094D\u091C\u093F\u0902\u0917 \u092C\u093F\u091C\u093C\u0928\u0947\u0938 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902</span>
    </a>
  </div>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer-links">
      <a href="https://massivecharging.com/" target="_blank">Home</a>
      <a href="https://massivecharging.com/privacy" target="_blank">Privacy Policy</a>
      <a href="https://massivecharging.com/terms" target="_blank">Terms of Service</a>
      <a href="https://massivecharging.com/ev-charging-station-business" target="_blank">About Us</a>
      <a href="https://massivecharging.com/charging-stations-map" target="_blank">Find Chargers</a>
    </div>
    <div class="footer-copy">Copyright 2026 Massive Charging. All Rights Reserved.</div>
  </footer>
`;

const scanPageStyles = `
  .scan-wrapper {
    max-width: 480px;
    margin: 0 auto;
    min-height: 100vh;
    background: var(--bg);
    position: relative;
    box-shadow: 0 0 40px rgba(0,0,0,0.08);
  }
  @media (min-width: 481px) {
    body { background: #e5e5e5 !important; }
  }
  :root {
    --red: #E8202A;
    --red-dark: #C0151E;
    --red-light: rgba(232,32,42,0.07);
    --red-border: rgba(232,32,42,0.18);
    --black: #0F0F0F;
    --bg: #F7F7F5;
    --surface: #FFFFFF;
    --card-alt: #EFEFED;
    --border: rgba(0,0,0,0.08);
    --border-mid: rgba(0,0,0,0.11);
    --text: #111111;
    --text-2: #555555;
    --muted: #999999;
    --green: #16A34A;
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04);
    --shadow-md: 0 4px 16px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.05);
    --font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: var(--bg) !important;
    color: var(--text) !important;
    font-family: var(--font) !important;
    min-height: 100vh;
    overflow-x: hidden;
  }
  .topbar {
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: var(--shadow-sm);
  }
  .logo-wrap { display: flex; align-items: center; gap: 12px; }
  .logo-massive img { height: 26px; width: auto; display: block; }
  .logo-massive-fallback { font-size: 14px; font-weight: 800; letter-spacing: -0.02em; }
  .logo-massive-fallback .r { color: var(--red); }
  .divider-x { font-size: 16px; color: var(--muted); font-weight: 700; }
  .logo-bt { display: flex; align-items: center; gap: 6px; text-decoration: none; }
  .logo-bt-icon {
    width: 26px; height: 26px;
    background: #FEF08A; border: 1px solid #FDE047;
    border-radius: 6px; display: flex; align-items: center; justify-content: center;
  }
  .logo-bt-icon svg { width: 16px; height: 16px; }
  .logo-bt-text { font-size: 12px; font-weight: 800; color: #92400E; letter-spacing: 0.03em; }
  .lang-toggle {
    display: flex;
    background: var(--card-alt);
    border: 1px solid var(--border-mid);
    border-radius: 24px; overflow: hidden;
  }
  .lang-btn {
    padding: 5px 13px; font-size: 11px; font-family: var(--font);
    font-weight: 700; color: var(--muted); background: transparent;
    border: none; cursor: pointer; transition: all 0.2s; letter-spacing: 0.04em;
  }
  .lang-btn.active { background: var(--red); color: #fff; border-radius: 24px; }
  .hero {
    background: var(--surface);
    padding: 28px 20px 24px;
    text-align: center;
    position: relative; overflow: hidden;
    border-bottom: 1px solid var(--border);
  }
  .hero-glow {
    position: absolute; top: -80px; left: 50%;
    transform: translateX(-50%);
    width: 320px; height: 320px;
    background: radial-gradient(circle, rgba(232,32,42,0.05) 0%, transparent 68%);
    pointer-events: none;
  }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(22,163,74,0.08); border: 1px solid rgba(22,163,74,0.22);
    border-radius: 20px; padding: 5px 12px;
    font-size: 11px; font-weight: 600; color: var(--green);
    letter-spacing: 0.05em; text-transform: uppercase;
    margin-bottom: 16px; position: relative; z-index: 1;
  }
  .hero-badge::before {
    content: ''; width: 6px; height: 6px;
    background: var(--green); border-radius: 50%; display: inline-block;
    animation: pulse 1.8s infinite;
  }
  @keyframes pulse {
    0%,100%{opacity:1;transform:scale(1);}
    50%{opacity:0.35;transform:scale(0.6);}
  }
  .hero-headline {
    font-size: 36px; font-weight: 800;
    line-height: 1.05; letter-spacing: -0.02em; color: var(--black);
    position: relative; z-index: 1;
  }
  .hero-headline .accent { color: var(--red); }
  .hero-headline-hi {
    display: none; font-size: 30px; font-weight: 800;
    line-height: 1.1; color: var(--black);
    position: relative; z-index: 1;
  }
  .hero-headline-hi .accent { color: var(--red); }
  .hero-sub { margin-top: 10px; font-size: 14px; color: var(--text-2); line-height: 1.55; position: relative; z-index: 1; }
  .hero-sub-hi { display: none; }
  .stats {
    display: flex; gap: 10px; padding: 16px 20px;
    background: var(--surface); border-bottom: 1px solid var(--border);
  }
  .stat-chip {
    flex: 1; background: var(--red-light); border: 1px solid var(--red-border);
    border-radius: 12px; padding: 14px 10px; text-align: center;
  }
  .stat-num { font-size: 28px; font-weight: 800; color: var(--red); line-height: 1; }
  .stat-label { font-size: 11px; color: var(--red-dark); margin-top: 4px; font-weight: 600; letter-spacing: 0.02em; }
  .stat-label-hi { display: none; }
  .section { padding: 24px 20px; background: var(--surface); border-top: 1px solid var(--border); }
  .section.alt { background: var(--bg); }
  .section-tag {
    font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
    text-transform: uppercase; color: var(--red); margin-bottom: 8px;
  }
  .section-title {
    font-size: 24px; font-weight: 800;
    line-height: 1.1; letter-spacing: -0.01em; color: var(--black);
  }
  .section-title-hi { display: none; font-size: 22px; font-weight: 800; line-height: 1.12; color: var(--black); }
  .section-desc { font-size: 14px; color: var(--text-2); margin-top: 8px; line-height: 1.6; }
  .section-desc-hi { display: none; }
  .pills { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
  .pill {
    background: var(--surface); border: 1px solid var(--border-mid);
    border-radius: 20px; padding: 7px 13px; font-size: 12px; font-weight: 600;
    color: var(--text); display: flex; align-items: center; gap: 5px;
    box-shadow: var(--shadow-sm);
  }
  .pill span.icon { font-size: 13px; }
  .cta-primary {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    width: 100%; padding: 16px 20px; background: var(--red); color: #fff;
    font-family: var(--font); font-size: 15px; font-weight: 700;
    border: none; border-radius: 14px; text-decoration: none; cursor: pointer;
    margin-top: 20px; letter-spacing: 0.01em;
    box-shadow: 0 4px 16px rgba(232,32,42,0.26);
    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
    position: relative; overflow: hidden;
  }
  .cta-primary::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 55%);
    pointer-events: none;
  }
  .cta-primary:active { transform: scale(0.98); background: var(--red-dark); box-shadow: 0 2px 8px rgba(232,32,42,0.18); }
  .app-row { display: flex; gap: 10px; margin-top: 20px; }
  .cta-store {
    flex: 1; display: flex; align-items: center; justify-content: center; gap: 9px;
    padding: 13px 10px; background: var(--black);
    border-radius: 14px; text-decoration: none; color: #fff;
    box-shadow: var(--shadow-md);
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .cta-store:active { transform: scale(0.97); box-shadow: var(--shadow-sm); }
  .cta-store-icon { width: 22px; height: 22px; flex-shrink: 0; }
  .cta-store-sub { font-size: 10px; color: rgba(255,255,255,0.5); display: block; line-height: 1; }
  .cta-store-name { font-size: 14px; font-weight: 700; display: block; line-height: 1.35; color: #fff; }
  .footer {
    padding: 20px 20px 32px; border-top: 1px solid var(--border);
    text-align: center; background: var(--bg);
  }
  .footer-links { display: flex; justify-content: center; flex-wrap: wrap; gap: 4px 14px; margin-bottom: 10px; }
  .footer-links a { font-size: 11px; color: var(--muted); text-decoration: none; }
  .footer-links a:hover { color: var(--red); }
  .footer-copy { font-size: 11px; color: #BBBBBB; }
  .reveal { opacity: 0; transform: translateY(14px); transition: opacity 0.45s ease, transform 0.45s ease; }
  .reveal.visible { opacity: 1; transform: none; }
  body.lang-hi .en { display: none !important; }
  body.lang-hi .hi { display: block !important; }
  body.lang-hi .hero-headline-hi { display: block !important; }
  body.lang-hi .hero-headline { display: none !important; }
  body.lang-hi .hero-sub { display: none !important; }
  body.lang-hi .hero-sub-hi { display: block !important; }
  body.lang-hi .stat-label { display: none !important; }
  body.lang-hi .stat-label-hi { display: block !important; }
  body.lang-hi .section-title { display: none !important; }
  body.lang-hi .section-title-hi { display: block !important; }
  body.lang-hi .section-desc { display: none !important; }
  body.lang-hi .section-desc-hi { display: block !important; }
  .hi { display: none; }
`;

export default function ScanPage() {
  useEffect(() => {
    // Language toggle
    (window as any).setLang = function (lang: string) {
      const body = document.body;
      const btnEn = document.getElementById("btn-en");
      const btnHi = document.getElementById("btn-hi");
      if (lang === "hi") {
        body.classList.add("lang-hi");
        btnHi?.classList.add("active");
        btnEn?.classList.remove("active");
        document.querySelectorAll<HTMLElement>(".pill .hi").forEach((el) => (el.style.display = "inline"));
        document.querySelectorAll<HTMLElement>(".pill .en").forEach((el) => (el.style.display = "none"));
        document.querySelectorAll<HTMLElement>(".cta-primary .hi").forEach((el) => (el.style.display = "inline"));
        document.querySelectorAll<HTMLElement>(".cta-primary .en").forEach((el) => (el.style.display = "none"));
        document.querySelectorAll<HTMLElement>(".cta-store-sub.hi").forEach((el) => (el.style.display = "block"));
        document.querySelectorAll<HTMLElement>(".cta-store-sub.en").forEach((el) => (el.style.display = "none"));
        document.querySelectorAll<HTMLElement>(".section-tag.hi").forEach((el) => (el.style.display = "block"));
        document.querySelectorAll<HTMLElement>(".section-tag.en").forEach((el) => (el.style.display = "none"));
      } else {
        body.classList.remove("lang-hi");
        btnEn?.classList.add("active");
        btnHi?.classList.remove("active");
        document.querySelectorAll<HTMLElement>(".pill .hi").forEach((el) => (el.style.display = "none"));
        document.querySelectorAll<HTMLElement>(".pill .en").forEach((el) => (el.style.display = "inline"));
        document.querySelectorAll<HTMLElement>(".cta-primary .hi").forEach((el) => (el.style.display = "none"));
        document.querySelectorAll<HTMLElement>(".cta-primary .en").forEach((el) => (el.style.display = "inline"));
        document.querySelectorAll<HTMLElement>(".cta-store-sub.hi").forEach((el) => (el.style.display = "none"));
        document.querySelectorAll<HTMLElement>(".cta-store-sub.en").forEach((el) => (el.style.display = "block"));
        document.querySelectorAll<HTMLElement>(".section-tag.hi").forEach((el) => (el.style.display = "none"));
        document.querySelectorAll<HTMLElement>(".section-tag.en").forEach((el) => (el.style.display = "block"));
      }
    };

    // Reveal animation
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) setTimeout(() => entry.target.classList.add("visible"), i * 80);
        });
      },
      { threshold: 0.06 }
    );
    reveals.forEach((el) => observer.observe(el));
    setTimeout(
      () =>
        reveals.forEach((el) => {
          if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("visible");
        }),
      80
    );

    return () => {
      observer.disconnect();
      delete (window as any).setLang;
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: scanPageStyles }} />
      <div className="scan-wrapper" dangerouslySetInnerHTML={{ __html: scanPageHTML }} />
    </>
  );
}
