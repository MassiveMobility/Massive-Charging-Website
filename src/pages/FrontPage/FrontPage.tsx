import React, { useEffect, useState } from "react";
import { Search, Download } from "lucide-react";
import FrontPageButton from "./FrontPageButton";
import HomeSchemaPage from "../../test/Home_Schema_Page";

/* ------------------------------------------------------------------ */
/*  FRONT PAGE – Hero Section (pixel-perfect from Figma specs)        */
/* ------------------------------------------------------------------ */

const PLAYSTORE_URL =
  "https://play.google.com/store/apps/details?id=in.one.charging&hl=en_IN";
const APPSTORE_URL =
  "https://apps.apple.com/in/app/1c-ev-charging/id6478754214";

/* -------- Social Sidebar -------- */
function SocialSidebar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      // Hide when the second scroll section enters the viewport
      const secondSection = document.getElementById("ev-home-charging");
      if (secondSection) {
        const rect = secondSection.getBoundingClientRect();
        setVisible(rect.top > window.innerHeight * 0.5);
      } else {
        setVisible(window.scrollY < window.innerHeight * 0.75);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed right-0 top-0 h-screen w-[128px] z-[55] hidden xl:flex flex-col transition-opacity duration-300"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Black section – extends behind navbar */}
      <div className="bg-[#1A1A1A]" style={{ height: 284 }} />

      {/* Red section – all icons including search */}
      <div className="bg-[#E50000] flex-1 flex flex-col items-center justify-center gap-[32px] px-[52px] py-[66px]">
        {/* Search */}
        <a
          href="/charging-guide"
          className="text-white hover:text-gray-200 transition-colors"
        >
          <Search size={24} strokeWidth={1.5} />
        </a>
        {/* Facebook */}
        <a
          href="https://www.facebook.com/massivecharging"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200 transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        {/* X (Twitter) */}
        <a
          href="https://x.com/massivecharging"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200 transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/massivecharging"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200 transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
        {/* YouTube */}
        <a
          href="https://www.youtube.com/@massivecharging"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200 transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
          </svg>
        </a>
      </div>
    </div>
  );
}

/* -------- Live Charging Card -------- */
function LiveChargingCard({ name }: { name: string }) {
  return (
    <div
      className="flex items-center justify-between rounded-[8px] border-[0.6px] border-gray-200 bg-white px-[13px] py-[9px]"
      style={{ height: 44 }}
    >
      <span
        className="text-[16px] leading-[26px] tracking-[0.002em] text-black"
        style={{
          fontFamily: "'TT Fors Trial', Inter, sans-serif",
          fontWeight: 400,
        }}
      >
        {name}
      </span>
      <span
        className="inline-flex items-center justify-center rounded-[12px] border-[0.4px] border-[#B5BCC5] px-3 py-0.5 text-[12px] leading-[18px]"
        style={{
          background: "#CCDCF19C",
          fontFamily: "'TT Fors Trial', Inter, sans-serif",
          fontWeight: 400,
        }}
      >
        Live
      </span>
    </div>
  );
}

/* -------- Live Charging Cards Panel -------- */
function LiveChargingCardsPanel() {
  const stations = [
    "Gomti Nagar Charging Station",
    "Kalkaji EV Charging Station",
    "Wave City Center Charging Station",
  ];

  return (
    <div className="w-full max-w-[504px] rounded-[16px] border border-gray-100 bg-white p-[22px] shadow-lg">
      <p
        className="mb-4 text-[14px] leading-[22px] tracking-[0.003em] text-[#707070]"
        style={{
          fontFamily: "'TT Fors Trial', Inter, sans-serif",
          fontWeight: 400,
        }}
      >
        Live charging Stations
      </p>
      <div className="flex flex-col gap-3">
        {stations.map((station, i) => (
          <LiveChargingCard key={i} name={station} />
        ))}
      </div>
    </div>
  );
}

/* -------- Google Play Badge -------- */
function GooglePlayBadge() {
  return (
    <a
      href={PLAYSTORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-[8px] bg-black px-4 py-2 text-white hover:bg-gray-900 transition-colors"
    >
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
        <path
          d="M1.22 0.27C0.89 0.61 0.7 1.12 0.7 1.78V20.22C0.7 20.88 0.89 21.39 1.22 21.73L1.3 21.81L11.55 11.56V11.44L1.3 1.19L1.22 0.27Z"
          fill="url(#gp1)"
        />
        <path
          d="M14.96 14.97L11.55 11.56V11.44L14.96 8.03L15.05 8.08L19.09 10.39C20.23 11.03 20.23 12.07 19.09 12.71L15.05 14.92L14.96 14.97Z"
          fill="url(#gp2)"
        />
        <path
          d="M15.05 14.92L11.55 11.5L1.22 21.73C1.63 22.17 2.29 22.22 3.04 21.8L15.05 14.92Z"
          fill="url(#gp3)"
        />
        <path
          d="M15.05 8.08L3.04 1.2C2.29 0.78 1.63 0.83 1.22 1.27L11.55 11.5L15.05 8.08Z"
          fill="url(#gp4)"
        />
        <defs>
          <linearGradient
            id="gp1"
            x1="10.47"
            y1="1.32"
            x2="-3.01"
            y2="14.8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00A0FF" />
            <stop offset="1" stopColor="#00A0FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="gp2"
            x1="21.13"
            y1="11.5"
            x2="0.35"
            y2="11.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFE000" />
            <stop offset="1" stopColor="#FFBD00" />
          </linearGradient>
          <linearGradient
            id="gp3"
            x1="13.07"
            y1="13.65"
            x2="-4.58"
            y2="31.3"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF3A44" />
            <stop offset="1" stopColor="#C31162" />
          </linearGradient>
          <linearGradient
            id="gp4"
            x1="-1.35"
            y1="-5.38"
            x2="7.48"
            y2="3.45"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#32A071" />
            <stop offset="1" stopColor="#006E47" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-[8px] uppercase tracking-wider">Get it on</span>
        <span className="text-[14px] font-semibold mt-0.5">Google Play</span>
      </div>
    </a>
  );
}

/* -------- App Store Badge -------- */
function AppStoreBadge() {
  return (
    <a
      href={APPSTORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-[8px] bg-black px-4 py-2 text-white hover:bg-gray-900 transition-colors"
    >
      <svg width="18" height="22" viewBox="0 0 18 22" fill="white">
        <path d="M14.94 11.64C14.96 9.94 15.84 8.35 17.28 7.44C16.36 6.14 14.88 5.34 13.32 5.24C11.68 5.06 10.1 6.22 9.26 6.22C8.42 6.22 7.1 5.26 5.72 5.28C3.88 5.34 2.22 6.38 1.32 8.02C-0.58 11.38 0.88 16.36 2.68 19.08C3.58 20.42 4.64 21.92 6.02 21.86C7.36 21.8 7.88 21 9.5 21C11.1 21 11.58 21.86 12.98 21.84C14.42 21.8 15.34 20.48 16.2 19.12C16.84 18.18 17.32 17.14 17.64 16.06C15.9 15.34 14.94 13.56 14.94 11.64Z" />
        <path d="M12.26 3.6C13.04 2.66 13.42 1.46 13.32 0.24C12.12 0.36 11.02 0.94 10.22 1.86C9.44 2.76 9.04 3.94 9.16 5.1C10.36 5.12 11.5 4.54 12.26 3.6Z" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-[8px] uppercase tracking-wider">
          Download on the
        </span>
        <span className="text-[14px] font-semibold mt-0.5">App Store</span>
      </div>
    </a>
  );
}

/* ================================================================== */
/*  MAIN PAGE COMPONENT                                               */
/* ================================================================== */
export default function FrontPage() {
  return (
    <div className="bg-white">
      {/* Social Sidebar – outside hero so overflow-hidden doesn't affect it */}
      <SocialSidebar />

      {/* Hero viewport */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="relative flex items-center min-h-[calc(100vh-80px)] xl:pr-[128px]">
          <div className="w-full mx-auto px-[80px] py-20 min-[1960px]:px-[240px] min-[2400px]:px-[480px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div className="flex flex-col gap-6">
                {/* Badge: Charging Network Is Live */}
                <div className="inline-flex items-center gap-[10px] self-start rounded-full border border-gray-200 px-[10px] py-[3px]">
                  <span className="block w-[8px] h-[8px] rounded-full bg-[#41BA15]" />
                  <span
                    className="text-[14px] leading-[22px] tracking-[0.003em] text-[#131313]"
                    style={{
                      fontFamily: "'TT Fors Trial', Inter, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Charging Network Is Live
                  </span>
                </div>

                {/* Heading */}
                <h1
                  className="text-[64px] leading-[72px] tracking-[-0.006em] text-[#131313]"
                  style={{
                    fontFamily:
                      "'ITC Avant Garde Gothic Std', 'Public Sans', sans-serif",
                    fontWeight: 700,
                    maxWidth: 460,
                  }}
                >
                  Find Charger Anytime.{" "}
                  <span className="text-[#E50000]">Anywhere.</span>
                </h1>

                {/* Subtitle */}
                <p
                  className="text-[20px] leading-[32px] tracking-[0.002em] text-[#131313]"
                  style={{
                    fontFamily: "'TT Fors Trial', Inter, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Live life at 100%
                </p>

                {/* CTA Buttons */}
                <div className="flex items-center gap-5 flex-wrap">
                  <FrontPageButton
                    variant="primary"
                    icon={<Search size={18} />}
                    href="/charging-guide"
                  >
                    Find Chargers
                  </FrontPageButton>
                  <FrontPageButton
                    variant="outline"
                    icon={<Download size={18} />}
                    href={PLAYSTORE_URL}
                  >
                    Get App
                  </FrontPageButton>
                </div>

                {/* Store Badges */}
                <div className="flex items-center gap-3 flex-wrap">
                  <GooglePlayBadge />
                  <AppStoreBadge />
                </div>
              </div>

              {/* Right Column – Live Charging Cards */}
              <div className="flex justify-center lg:justify-end">
                <LiveChargingCardsPanel />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Remaining sections */}
      <HomeSchemaPage hideHero />
    </div>
  );
}
