"use client";

import { useEffect } from "react";

const businessPageHTML = `
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
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V7l7-4 7 4v14" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="9" y="13" width="6" height="8" rx="0.5" stroke="#fff" stroke-width="1.5"/><line x1="12" y1="9" x2="12" y2="11" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>
    </div>
    <div class="page-tag en">02 \u2014 Business Opportunity</div>
    <div class="page-tag hi" style="display:none;">02 \u2014 \u0935\u094D\u092F\u093E\u092A\u093E\u0930 \u0915\u093E \u0905\u0935\u0938\u0930</div>
    <h1 class="page-title en">Start Your EV Charging<br/>Business Today</h1>
    <h1 class="page-title hi" style="display:none;">\u0906\u091C \u0939\u0940 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902<br/>EV \u091A\u093E\u0930\u094D\u091C\u093F\u0902\u0917 \u092C\u093F\u091C\u093C\u0928\u0947\u0938</h1>
    <p class="page-desc en">Convert any space into a revenue-generating charging station. We provide the hardware, software & full support.</p>
    <p class="page-desc hi" style="display:none;">\u0915\u094B\u0908 \u092D\u0940 \u091C\u0917\u0939 \u092C\u0928 \u0938\u0915\u0924\u0940 \u0939\u0948 \u091A\u093E\u0930\u094D\u091C\u093F\u0902\u0917 \u0938\u094D\u091F\u0947\u0936\u0928\u0964 \u0939\u092E \u0926\u0947\u0924\u0947 \u0939\u0948\u0902 Hardware, Software \u0914\u0930 \u092A\u0942\u0930\u093E Support\u0964</p>
  </div>

  <!-- WHAT WE PROVIDE -->
  <div class="features reveal">
    <div class="feature-card">
      <div class="feature-icon">\uD83D\uDD0C</div>
      <div class="feature-text">
        <div class="feature-title en">Charger Hardware</div>
        <div class="feature-title hi" style="display:none;">\u091A\u093E\u0930\u094D\u091C\u0930 \u0939\u093E\u0930\u094D\u0921\u0935\u0947\u092F\u0930</div>
        <div class="feature-sub en">Premium EV chargers installed at your location</div>
        <div class="feature-sub hi" style="display:none;">\u0906\u092A\u0915\u0940 \u091C\u0917\u0939 \u092A\u0930 \u092A\u094D\u0930\u0940\u092E\u093F\u092F\u092E EV \u091A\u093E\u0930\u094D\u091C\u0930 \u0907\u0902\u0938\u094D\u091F\u0949\u0932</div>
      </div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">\uD83D\uDCBB</div>
      <div class="feature-text">
        <div class="feature-title en">Software Suite</div>
        <div class="feature-title hi" style="display:none;">\u0938\u0949\u092B\u094D\u091F\u0935\u0947\u092F\u0930</div>
        <div class="feature-sub en">Complete management dashboard & billing system</div>
        <div class="feature-sub hi" style="display:none;">\u092A\u0942\u0930\u093E \u092E\u0948\u0928\u0947\u091C\u092E\u0947\u0902\u091F \u0921\u0948\u0936\u092C\u094B\u0930\u094D\u0921 \u0914\u0930 \u092C\u093F\u0932\u093F\u0902\u0917 \u0938\u093F\u0938\u094D\u091F\u092E</div>
      </div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">\uD83D\uDEE0\uFE0F</div>
      <div class="feature-text">
        <div class="feature-title en">End-to-End Support</div>
        <div class="feature-title hi" style="display:none;">\u092A\u0942\u0930\u093E \u0938\u092A\u094B\u0930\u094D\u091F</div>
        <div class="feature-sub en">Installation, maintenance & 24/7 technical support</div>
        <div class="feature-sub hi" style="display:none;">\u0907\u0902\u0938\u094D\u091F\u0949\u0932\u0947\u0936\u0928, \u092E\u0947\u0902\u091F\u0947\u0928\u0947\u0902\u0938 \u0914\u0930 24/7 \u091F\u0947\u0915\u094D\u0928\u093F\u0915\u0932 \u0938\u092A\u094B\u0930\u094D\u091F</div>
      </div>
    </div>
    <div class="feature-card highlight">
      <div class="feature-icon">\uD83D\uDCB0</div>
      <div class="feature-text">
        <div class="feature-title en">\u20b980,000+ Monthly Revenue</div>
        <div class="feature-title hi" style="display:none;">\u20b980,000+ \u092E\u093E\u0938\u093F\u0915 \u0906\u092F</div>
        <div class="feature-sub en">Earn consistent passive income from your charging station</div>
        <div class="feature-sub hi" style="display:none;">\u0905\u092A\u0928\u0947 \u091A\u093E\u0930\u094D\u091C\u093F\u0902\u0917 \u0938\u094D\u091F\u0947\u0936\u0928 \u0938\u0947 \u0932\u0917\u093E\u0924\u093E\u0930 \u092A\u0948\u0938\u093F\u0935 \u0907\u0928\u0915\u092E \u0915\u092E\u093E\u090F\u0902</div>
      </div>
    </div>
  </div>

  <!-- CTA -->
  <div class="cta-section reveal">
    <a href="https://forms.1charging.com/franchise-application" target="_blank" rel="noopener" class="cta-primary">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
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

const businessPageStyles = `
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
  .feature-card.highlight {
    background: var(--red-light);
    border-color: var(--red-border);
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
  /* CTA */
  .cta-section {
    padding: 4px 20px 28px;
  }
  .cta-primary {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    width: 100%; padding: 18px 20px; background: var(--red); color: #fff;
    font-family: var(--font); font-size: 16px; font-weight: 700;
    border: none; border-radius: 14px; text-decoration: none; cursor: pointer;
    letter-spacing: 0.01em;
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

export default function ScanBusinessPage() {
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
        document.querySelectorAll<HTMLElement>(".cta-primary .hi").forEach((el) => (el.style.display = "inline"));
        document.querySelectorAll<HTMLElement>(".cta-primary .en").forEach((el) => (el.style.display = "none"));
      } else {
        body.classList.remove("lang-hi");
        btnEn?.classList.add("active");
        btnHi?.classList.remove("active");
        document.querySelectorAll<HTMLElement>(".hi").forEach((el) => (el.style.display = "none"));
        document.querySelectorAll<HTMLElement>(".en").forEach((el) => (el.style.display = "block"));
        document.querySelectorAll<HTMLElement>(".cta-primary .hi").forEach((el) => (el.style.display = "none"));
        document.querySelectorAll<HTMLElement>(".cta-primary .en").forEach((el) => (el.style.display = "inline"));
      }
    };

    const initialSetLang = (window as { setLang?: (lang: string) => void }).setLang;
    initialSetLang?.("hi");

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
      <style dangerouslySetInnerHTML={{ __html: businessPageStyles }} />
      <div className="scan-wrapper" dangerouslySetInnerHTML={{ __html: businessPageHTML }} />
    </>
  );
}
