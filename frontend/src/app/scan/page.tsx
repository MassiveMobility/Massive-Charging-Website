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
    </div>
    <div class="lang-toggle">
      <button class="lang-btn" id="btn-en" onclick="setLang('en')">EN</button>
      <button class="lang-btn active" id="btn-hi" onclick="setLang('hi')">\u0939\u093F\u0902</button>
    </div>
  </div>

  <!-- HERO -->
  <div class="hero reveal">
    <div class="hero-glow"></div>
    <div class="hero-badge">Live Charging Network</div>
    <h1 class="hero-headline en">Power Up<br/><span class="accent">Your Future</span></h1>
    <h1 class="hero-headline-hi">\u0906\u092A\u0915\u0940 <span class="accent">\u0908\u0935\u0940 \u092F\u093E\u0924\u094D\u0930\u093E</span> \u0915\u093E<br/>\u092D\u0930\u094B\u0938\u0947\u092E\u0902\u0926 \u0938\u093E\u0925\u0940</h1>
    <p class="hero-sub en">India\u2019s fastest-growing EV charging network.</p>
    <p class="hero-sub-hi hi" style="margin-top:10px;font-size:14px;color:var(--text-2);line-height:1.55;">\u092D\u093E\u0930\u0924 \u0915\u093E \u0938\u092C\u0938\u0947 \u0924\u0947\u091C\u093C\u0940 \u0938\u0947 \u092C\u0922\u093C\u0924\u093E EV \u091A\u093E\u0930\u094D\u091C\u093F\u0902\u0917 \u0928\u0947\u091F\u0935\u0930\u094D\u0915\u0964</p>
  </div>

  <!-- STATS -->
  <div class="stats reveal">
    <div class="stat-chip">
      <div class="stat-num">1500+</div>
      <div class="stat-label en">Chargers</div>
      <div class="stat-label-hi hi" style="font-size:11px;color:var(--red-dark);margin-top:4px;font-weight:600;">\u091A\u093E\u0930\u094D\u091C\u093F\u0902\u0917 \u0938\u094D\u091F\u0947\u0936\u0928</div>
    </div>
    <div class="stat-chip">
      <div class="stat-num">30+</div>
      <div class="stat-label en">Cities</div>
      <div class="stat-label-hi hi" style="font-size:11px;color:var(--red-dark);margin-top:4px;font-weight:600;">\u0936\u0939\u0930\u094B\u0902 \u092E\u0947\u0902</div>
    </div>
  </div>

  <!-- NAV BOXES -->
  <div class="nav-boxes reveal">
    <a href="/scan/app" class="nav-box">
      <div class="nav-box-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2.5" stroke="var(--red)" stroke-width="2"/><circle cx="12" cy="18" r="1.2" fill="var(--red)"/><line x1="9" y1="5" x2="15" y2="5" stroke="var(--red)" stroke-width="1.5" stroke-linecap="round"/></svg>
      </div>
      <div class="nav-box-content">
        <div class="nav-box-tag en">01 \u2014 Charging App</div>
        <div class="nav-box-tag hi" style="display:none;">01 \u2014 \u091A\u093E\u0930\u094D\u091C\u093F\u0902\u0917 \u0910\u092A</div>
        <div class="nav-box-title en">Charge Smarter with Massive</div>
        <div class="nav-box-title hi" style="display:none;">Massive \u0910\u092A \u0938\u0947 \u0906\u0938\u093E\u0928 \u091A\u093E\u0930\u094D\u091C\u093F\u0902\u0917</div>
        <div class="nav-box-sub en">Download the app & start charging</div>
        <div class="nav-box-sub hi" style="display:none;">\u0910\u092A \u0921\u093E\u0909\u0928\u0932\u094B\u0921 \u0915\u0930\u0947\u0902, \u0924\u0941\u0930\u0902\u0924 \u091A\u093E\u0930\u094D\u091C\u093F\u0902\u0917 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902</div>
      </div>
      <div class="nav-box-arrow">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="var(--red)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
    </a>
    <a href="/scan/business" class="nav-box">
      <div class="nav-box-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V7l7-4 7 4v14" stroke="var(--red)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="9" y="13" width="6" height="8" rx="0.5" stroke="var(--red)" stroke-width="1.5"/><line x1="12" y1="9" x2="12" y2="11" stroke="var(--red)" stroke-width="1.5" stroke-linecap="round"/></svg>
      </div>
      <div class="nav-box-content">
        <div class="nav-box-tag en">02 \u2014 Business Opportunity</div>
        <div class="nav-box-tag hi" style="display:none;">02 \u2014 \u0935\u094D\u092F\u093E\u092A\u093E\u0930 \u0915\u093E \u0905\u0935\u0938\u0930</div>
        <div class="nav-box-title en">Start Your EV Charging Business</div>
        <div class="nav-box-title hi" style="display:none;">\u0905\u092A\u0928\u093E EV \u091A\u093E\u0930\u094D\u091C\u093F\u0902\u0917 \u0915\u093E\u0930\u094B\u092C\u093E\u0930 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902</div>
        <div class="nav-box-sub en">Earn \u20b980,000+ monthly with us</div>
        <div class="nav-box-sub hi" style="display:none;">\u0939\u092E\u093E\u0930\u0947 \u0938\u093E\u0925 \u091C\u0941\u0921\u093C\u0947\u0902, \u0939\u0930 \u092E\u0939\u0940\u0928\u0947 \u20b980,000+ \u0915\u092E\u093E\u090F\u0902</div>
      </div>
      <div class="nav-box-arrow">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="var(--red)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
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
    padding: 44px 20px 36px;
    text-align: center;
    position: relative; overflow: hidden;
    border-bottom: 1px solid var(--border);
  }
  .hero-glow {
    position: absolute; top: -60px; left: 50%;
    transform: translateX(-50%);
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(232,32,42,0.06) 0%, transparent 68%);
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
    font-size: 42px; font-weight: 800;
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
  .hero-sub { margin-top: 14px; font-size: 15px; color: var(--text-2); line-height: 1.55; position: relative; z-index: 1; }
  .hero-sub-hi { display: none; }
  .stats {
    display: flex; gap: 12px; padding: 20px 20px;
    background: var(--surface); border-bottom: 1px solid var(--border);
  }
  .stat-chip {
    flex: 1; background: var(--red-light); border: 1px solid var(--red-border);
    border-radius: 14px; padding: 18px 10px; text-align: center;
  }
  .stat-num { font-size: 32px; font-weight: 800; color: var(--red); line-height: 1; }
  .stat-label { font-size: 12px; color: var(--red-dark); margin-top: 5px; font-weight: 600; letter-spacing: 0.02em; }
  .stat-label-hi { display: none; }
  /* NAV BOXES */
  .nav-boxes {
    padding: 20px 20px 24px;
    display: flex; flex-direction: column; gap: 12px;
    background: var(--bg);
  }
  .nav-box {
    display: flex; align-items: center; gap: 14px;
    background: var(--surface);
    border: 1px solid var(--border-mid);
    border-radius: 16px;
    padding: 18px 16px;
    text-decoration: none; color: inherit;
    box-shadow: var(--shadow-sm);
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .nav-box:active { transform: scale(0.98); box-shadow: none; }
  .nav-box-icon {
    width: 48px; height: 48px; flex-shrink: 0;
    background: var(--red-light); border: 1px solid var(--red-border);
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
  }
  .nav-box-content { flex: 1; min-width: 0; }
  .nav-box-tag {
    font-size: 10px; font-weight: 700; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--red); margin-bottom: 3px;
  }
  .nav-box-title {
    font-size: 15px; font-weight: 800; color: var(--black);
    line-height: 1.2; letter-spacing: -0.01em;
  }
  .nav-box-sub {
    font-size: 12px; color: var(--text-2); margin-top: 2px;
  }
  .nav-box-arrow {
    flex-shrink: 0; opacity: 0.5;
  }
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
  body.lang-hi .nav-box-tag.en { display: none !important; }
  body.lang-hi .nav-box-tag.hi { display: block !important; }
  body.lang-hi .nav-box-title.en { display: none !important; }
  body.lang-hi .nav-box-title.hi { display: block !important; }
  body.lang-hi .nav-box-sub.en { display: none !important; }
  body.lang-hi .nav-box-sub.hi { display: block !important; }
  .hi { display: none; }
`;

export default function ScanPage() {
  useEffect(() => {
    // Language toggle
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).setLang = function (lang: string) {
      const body = document.body;
      const btnEn = document.getElementById("btn-en");
      const btnHi = document.getElementById("btn-hi");
      if (lang === "hi") {
        body.classList.add("lang-hi");
        btnHi?.classList.add("active");
        btnEn?.classList.remove("active");
        document.querySelectorAll<HTMLElement>(".nav-box-tag.hi, .nav-box-title.hi, .nav-box-sub.hi").forEach((el) => (el.style.display = "block"));
        document.querySelectorAll<HTMLElement>(".nav-box-tag.en, .nav-box-title.en, .nav-box-sub.en").forEach((el) => (el.style.display = "none"));
      } else {
        body.classList.remove("lang-hi");
        btnEn?.classList.add("active");
        btnHi?.classList.remove("active");
        document.querySelectorAll<HTMLElement>(".nav-box-tag.hi, .nav-box-title.hi, .nav-box-sub.hi").forEach((el) => (el.style.display = "none"));
        document.querySelectorAll<HTMLElement>(".nav-box-tag.en, .nav-box-title.en, .nav-box-sub.en").forEach((el) => (el.style.display = "block"));
      }
    };

    const initialSetLang = (window as { setLang?: (lang: string) => void }).setLang;
    initialSetLang?.("hi");

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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
