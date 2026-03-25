"use client";

import { useEffect } from "react";

const appPageHTML = `
  <!-- TOPBAR -->
  <div class="topbar">
    <div class="logo-wrap">
      <div class="logo-massive">
        <img src="https://massivecharging.com/massive-charging-logo.svg" alt="Massive Charging"
          onerror="this.onerror=null;this.parentNode.innerHTML='<span class=\\'logo-massive-fallback\\'><span class=\\'r\\'>MASSIVE</span> CHARGING</span>'" />
      </div>
    </div>
    <div class="lang-toggle">
      <button class="lang-btn active" id="btn-en" onclick="setLang('en')">EN</button>
      <button class="lang-btn" id="btn-hi" onclick="setLang('hi')">\u0939\u093F\u0902</button>
    </div>
  </div>

  <!-- BACK -->
  <a href="/scan" class="back-bar">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="var(--text-2)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    <span class="en">Back</span>
    <span class="hi" style="display:none;">\u0935\u093E\u092A\u0938</span>
  </a>

  <!-- HERO -->
  <div class="page-hero reveal">
    <div class="hero-glow"></div>
    <div class="page-icon">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2.5" stroke="#fff" stroke-width="2"/><circle cx="12" cy="18" r="1.2" fill="#fff"/><line x1="9" y1="5" x2="15" y2="5" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>
    </div>
    <div class="page-tag en">01 \u2014 Charging App</div>
    <div class="page-tag hi" style="display:none;">01 \u2014 \u091A\u093E\u0930\u094D\u091C\u093F\u0902\u0917 \u0910\u092A</div>
    <h1 class="page-title en">Charge Smarter<br/>with Massive</h1>
    <h1 class="page-title hi" style="display:none;">Massive \u0915\u0947 \u0938\u093E\u0925<br/>\u0938\u094D\u092E\u093E\u0930\u094D\u091F \u091A\u093E\u0930\u094D\u091C\u093F\u0902\u0917</h1>
    <p class="page-desc en">Find chargers near you, pay via UPI, monitor battery health \u2014 all from one app.</p>
    <p class="page-desc hi" style="display:none;">\u092A\u093E\u0938 \u0915\u0947 \u091A\u093E\u0930\u094D\u091C\u0930 \u0916\u094B\u091C\u0947\u0902, UPI \u0938\u0947 \u092A\u0947\u092E\u0947\u0902\u091F \u0915\u0930\u0947\u0902, \u092C\u0948\u091F\u0930\u0940 \u0939\u0947\u0932\u094D\u0925 \u091F\u094D\u0930\u0948\u0915 \u0915\u0930\u0947\u0902 \u2014 \u090F\u0915 \u0939\u0940 \u0910\u092A \u092E\u0947\u0902\u0964</p>
  </div>

  <!-- FEATURES -->
  <div class="features reveal">
    <div class="feature-card">
      <div class="feature-icon">\u26A1</div>
      <div class="feature-text">
        <div class="feature-title en">Find Nearest Charger</div>
        <div class="feature-title hi" style="display:none;">\u0928\u091C\u093C\u0926\u0940\u0915\u0940 \u091A\u093E\u0930\u094D\u091C\u0930 \u0916\u094B\u091C\u0947\u0902</div>
        <div class="feature-sub en">Real-time availability across 30+ cities</div>
        <div class="feature-sub hi" style="display:none;">30+ \u0936\u0939\u0930\u094B\u0902 \u092E\u0947\u0902 \u0930\u093F\u092F\u0932-\u091F\u093E\u0907\u092E \u0909\u092A\u0932\u092C\u094D\u0927\u0924\u093E</div>
      </div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">\uD83D\uDCB3</div>
      <div class="feature-text">
        <div class="feature-title en">Pay via UPI</div>
        <div class="feature-title hi" style="display:none;">UPI \u0938\u0947 \u092A\u0947\u092E\u0947\u0902\u091F</div>
        <div class="feature-sub en">Quick & secure payments with any UPI app</div>
        <div class="feature-sub hi" style="display:none;">\u0915\u093F\u0938\u0940 \u092D\u0940 UPI \u0910\u092A \u0938\u0947 \u0924\u0947\u091C\u093C \u0914\u0930 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u092D\u0941\u0917\u0924\u093E\u0928</div>
      </div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">\uD83C\uDFD9\uFE0F</div>
      <div class="feature-text">
        <div class="feature-title en">30+ Cities</div>
        <div class="feature-title hi" style="display:none;">30+ \u0936\u0939\u0930</div>
        <div class="feature-sub en">Rapidly expanding across India</div>
        <div class="feature-sub hi" style="display:none;">\u092A\u0942\u0930\u0947 \u092D\u093E\u0930\u0924 \u092E\u0947\u0902 \u0924\u0947\u091C\u093C\u0940 \u0938\u0947 \u092C\u0922\u093C \u0930\u0939\u093E \u0939\u0948</div>
      </div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">\uD83D\uDCCD</div>
      <div class="feature-text">
        <div class="feature-title en">1500+ Chargers</div>
        <div class="feature-title hi" style="display:none;">1500+ \u091A\u093E\u0930\u094D\u091C\u0930</div>
        <div class="feature-sub en">India\u2019s fastest-growing charging network</div>
        <div class="feature-sub hi" style="display:none;">\u092D\u093E\u0930\u0924 \u0915\u093E \u0938\u092C\u0938\u0947 \u0924\u0947\u091C\u093C\u0940 \u0938\u0947 \u092C\u0922\u093C\u0924\u093E \u091A\u093E\u0930\u094D\u091C\u093F\u0902\u0917 \u0928\u0947\u091F\u0935\u0930\u094D\u0915</div>
      </div>
    </div>
  </div>

  <!-- DOWNLOAD -->
  <div class="download-section reveal">
    <h2 class="download-title en">Download the App</h2>
    <h2 class="download-title hi" style="display:none;">\u0910\u092A \u0921\u093E\u0909\u0928\u0932\u094B\u0921 \u0915\u0930\u0947\u0902</h2>
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

const appPageStyles = `
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
    display: flex; align-items: center; justify-content: space-between;
    position: sticky; top: 0; z-index: 100;
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
    display: flex; background: var(--card-alt);
    border: 1px solid var(--border-mid); border-radius: 24px; overflow: hidden;
  }
  .lang-btn {
    padding: 5px 13px; font-size: 11px; font-family: var(--font);
    font-weight: 700; color: var(--muted); background: transparent;
    border: none; cursor: pointer; transition: all 0.2s; letter-spacing: 0.04em;
  }
  .lang-btn.active { background: var(--red); color: #fff; border-radius: 24px; }
  /* BACK BAR */
  .back-bar {
    display: flex; align-items: center; gap: 4px;
    padding: 10px 16px;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    font-size: 13px; font-weight: 600; color: var(--text-2);
    text-decoration: none;
  }
  .back-bar:active { background: var(--card-alt); }
  /* PAGE HERO */
  .page-hero {
    background: var(--red);
    padding: 40px 24px 36px;
    text-align: center;
    position: relative; overflow: hidden;
  }
  .hero-glow {
    position: absolute; top: -60px; left: 50%;
    transform: translateX(-50%);
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 68%);
    pointer-events: none;
  }
  .page-icon {
    width: 64px; height: 64px; margin: 0 auto 16px;
    background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25);
    border-radius: 16px;
    display: flex; align-items: center; justify-content: center;
  }
  .page-tag {
    font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
    text-transform: uppercase; color: rgba(255,255,255,0.7); margin-bottom: 8px;
  }
  .page-title {
    font-size: 32px; font-weight: 800; color: #fff;
    line-height: 1.1; letter-spacing: -0.02em;
  }
  .page-desc {
    font-size: 15px; color: rgba(255,255,255,0.8);
    margin-top: 10px; line-height: 1.55;
  }
  /* FEATURES */
  .features {
    padding: 20px 20px;
    display: flex; flex-direction: column; gap: 10px;
  }
  .feature-card {
    display: flex; align-items: center; gap: 14px;
    background: var(--surface);
    border: 1px solid var(--border-mid);
    border-radius: 14px;
    padding: 16px 14px;
    box-shadow: var(--shadow-sm);
  }
  .feature-icon {
    width: 44px; height: 44px; flex-shrink: 0;
    background: var(--red-light); border: 1px solid var(--red-border);
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 20px;
  }
  .feature-text { flex: 1; }
  .feature-title { font-size: 14px; font-weight: 700; color: var(--black); }
  .feature-sub { font-size: 12px; color: var(--text-2); margin-top: 2px; }
  /* DOWNLOAD */
  .download-section {
    padding: 24px 20px 28px;
    background: var(--surface);
    border-top: 1px solid var(--border);
  }
  .download-title {
    font-size: 20px; font-weight: 800; color: var(--black);
    text-align: center; margin-bottom: 16px;
  }
  .app-row { display: flex; gap: 10px; }
  .cta-store {
    flex: 1; display: flex; align-items: center; justify-content: center; gap: 9px;
    padding: 14px 10px; background: var(--black);
    border-radius: 14px; text-decoration: none; color: #fff;
    box-shadow: var(--shadow-md);
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .cta-store:active { transform: scale(0.97); box-shadow: var(--shadow-sm); }
  .cta-store-icon { width: 22px; height: 22px; flex-shrink: 0; }
  .cta-store-sub { font-size: 10px; color: rgba(255,255,255,0.5); display: block; line-height: 1; }
  .cta-store-name { font-size: 14px; font-weight: 700; display: block; line-height: 1.35; color: #fff; }
  /* FOOTER */
  .footer {
    padding: 20px 20px 32px; border-top: 1px solid var(--border);
    text-align: center; background: var(--bg);
  }
  .footer-links { display: flex; justify-content: center; flex-wrap: wrap; gap: 4px 14px; margin-bottom: 10px; }
  .footer-links a { font-size: 11px; color: var(--muted); text-decoration: none; }
  .footer-links a:hover { color: var(--red); }
  .footer-copy { font-size: 11px; color: #BBBBBB; }
  /* REVEAL */
  .reveal { opacity: 0; transform: translateY(14px); transition: opacity 0.45s ease, transform 0.45s ease; }
  .reveal.visible { opacity: 1; transform: none; }
  /* LANG */
  body.lang-hi .en { display: none !important; }
  body.lang-hi .hi { display: block !important; }
  .hi { display: none; }
`;

export default function ScanAppPage() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).setLang = function (lang: string) {
      const body = document.body;
      const btnEn = document.getElementById("btn-en");
      const btnHi = document.getElementById("btn-hi");
      if (lang === "hi") {
        body.classList.add("lang-hi");
        btnHi?.classList.add("active");
        btnEn?.classList.remove("active");
        document.querySelectorAll<HTMLElement>(".hi").forEach((el) => (el.style.display = "block"));
        document.querySelectorAll<HTMLElement>(".en").forEach((el) => (el.style.display = "none"));
        document.querySelectorAll<HTMLElement>(".cta-store-sub.hi").forEach((el) => (el.style.display = "block"));
        document.querySelectorAll<HTMLElement>(".cta-store-sub.en").forEach((el) => (el.style.display = "none"));
      } else {
        body.classList.remove("lang-hi");
        btnEn?.classList.add("active");
        btnHi?.classList.remove("active");
        document.querySelectorAll<HTMLElement>(".hi").forEach((el) => (el.style.display = "none"));
        document.querySelectorAll<HTMLElement>(".en").forEach((el) => (el.style.display = "block"));
        document.querySelectorAll<HTMLElement>(".cta-store-sub.hi").forEach((el) => (el.style.display = "none"));
        document.querySelectorAll<HTMLElement>(".cta-store-sub.en").forEach((el) => (el.style.display = "block"));
      }
    };

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
      <style dangerouslySetInnerHTML={{ __html: appPageStyles }} />
      <div className="scan-wrapper" dangerouslySetInnerHTML={{ __html: appPageHTML }} />
    </>
  );
}
