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
function SocialSidebar({ isScale125Like }: { isScale125Like: boolean }) {
  const [visible, setVisible] = useState(true);
  const sidebarIconSize = isScale125Like ? 24 : 30;
  const sidebarIconStroke = isScale125Like ? 1.5 : 1.7;
  const sidebarGapClass = isScale125Like ? "gap-[clamp(20px,2.3vw,32px)]" : "gap-[clamp(24px,2.6vw,38px)]";

  useEffect(() => {
    const onScroll = () => {
      // Hide when the elite membership section enters the viewport
      const eliteSection = document.getElementById("exclusive-membership");
      if (eliteSection) {
        const rect = eliteSection.getBoundingClientRect();
        setVisible(rect.top > window.innerHeight * 0.85);
      } else {
        setVisible(window.scrollY < window.innerHeight * 0.75);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed right-0 top-0 z-[55] hidden h-screen flex-col transition-all duration-300 lg:flex"
      style={{
        width: "clamp(96px, 7vw, 128px)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(100%)",
        pointerEvents: visible ? "auto" : "none",
        visibility: visible ? "visible" : "hidden",
      }}
    >
      {/* Black section – extends behind navbar */}
      <div className="bg-[#1A1A1A]" style={{ height: "clamp(224px, 22vh, 284px)" }} />

      {/* Red section – all icons including search */}
      <div className={`flex flex-1 flex-col items-center justify-center ${sidebarGapClass} bg-[#E50000] px-[clamp(34px,2.8vw,52px)] py-[clamp(40px,4vw,66px)]`}>
        {/* Search */}
        <a
          href="/charging-guide"
          className="text-white hover:text-gray-200 transition-colors"
        >
          <Search size={sidebarIconSize} strokeWidth={sidebarIconStroke} />
        </a>
        {/* Facebook */}
        <a
          href="https://www.facebook.com/massivecharging"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200 transition-colors"
        >
          <svg
            width={sidebarIconSize}
            height={sidebarIconSize}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={sidebarIconStroke}
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
          <svg width={sidebarIconSize} height={sidebarIconSize} viewBox="0 0 24 24" fill="currentColor">
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
            width={sidebarIconSize}
            height={sidebarIconSize}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={sidebarIconStroke}
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
            width={sidebarIconSize}
            height={sidebarIconSize}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={sidebarIconStroke}
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
function LiveChargingCard({
  name,
  isScale125Like,
}: {
  name: string;
  isScale125Like: boolean;
}) {
  const cardClass = isScale125Like
    ? "flex items-center justify-between rounded-[10px] border border-gray-200 bg-white px-[clamp(14px,1.15vw,18px)] py-[clamp(10px,0.9vw,13px)]"
    : "flex items-center justify-between rounded-[10px] border border-gray-200 bg-white px-[clamp(18px,1.55vw,24px)] py-[clamp(13px,1.15vw,16px)]";
  const cardMinHeight = isScale125Like
    ? "clamp(72px, 5vw, 96px)"
    : "clamp(86px, 5.8vw, 112px)";
  const titleClass = isScale125Like
    ? "text-[clamp(19px,1.42vw,30px)] leading-[clamp(27px,1.98vw,38px)] tracking-[0.002em] text-black"
    : "text-[clamp(22px,1.68vw,34px)] leading-[clamp(31px,2.28vw,44px)] tracking-[0.002em] text-black";
  const liveClass = isScale125Like
    ? "inline-flex items-center justify-center rounded-[14px] border border-[#B5BCC5] px-[clamp(11px,0.9vw,15px)] py-0.5 text-[clamp(14px,1.02vw,17px)] leading-[22px]"
    : "inline-flex items-center justify-center rounded-[16px] border border-[#B5BCC5] px-[clamp(12px,0.95vw,16px)] py-0.5 text-[clamp(15px,1.05vw,18px)] leading-[24px]";

  return (
    <div className={cardClass} style={{ minHeight: cardMinHeight }}>
      <span
        className={titleClass}
        style={{
          fontFamily: "'TT Fors Trial', Inter, sans-serif",
          fontWeight: 400,
        }}
      >
        {name}
      </span>
      <span className={liveClass} style={{ background: "#CCDCF19C", fontFamily: "'TT Fors Trial', Inter, sans-serif", fontWeight: 400 }}>
        Live
      </span>
    </div>
  );
}

/* -------- Live Charging Cards Panel -------- */
function LiveChargingCardsPanel({ isScale125Like }: { isScale125Like: boolean }) {
  const stations = [
    "Gomti Nagar Charging Station",
    "Kalkaji EV Charging Station",
    "Wave City Center Charging Station",
  ];

  const panelClass = isScale125Like
    ? "w-full max-w-[min(100%,720px)] rounded-[18px] border border-gray-100 bg-white p-[clamp(22px,1.9vw,30px)] shadow-lg"
    : "w-full max-w-[min(100%,840px)] rounded-[20px] border border-gray-100 bg-white p-[clamp(26px,2.25vw,36px)] shadow-lg";
  const panelTextClass = isScale125Like
    ? "mb-[clamp(12px,1.08vw,18px)] text-[clamp(17px,1.25vw,24px)] leading-[clamp(25px,1.8vw,33px)] tracking-[0.003em] text-[#707070]"
    : "mb-[clamp(14px,1.22vw,20px)] text-[clamp(19px,1.4vw,26px)] leading-[clamp(28px,2vw,36px)] tracking-[0.003em] text-[#707070]";

  return (
    <div className={panelClass}>
      <p
        className={panelTextClass}
        style={{
          fontFamily: "'TT Fors Trial', Inter, sans-serif",
          fontWeight: 500,
        }}
      >
        Live charging Stations.
      </p>
      <div className={`flex flex-col ${isScale125Like ? "gap-4" : "gap-3.5"}`}>
        {stations.map((station, i) => (
          <LiveChargingCard key={i} name={station} isScale125Like={isScale125Like} />
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
  const [isScale125Like, setIsScale125Like] = useState(false);

  useEffect(() => {
    const updateDesktopScale = () => {
      const width = window.innerWidth;
      setIsScale125Like(width >= 1280 && width <= 1700);
    };
    updateDesktopScale();
    window.addEventListener("resize", updateDesktopScale);
    return () => window.removeEventListener("resize", updateDesktopScale);
  }, []);

  const heroBadgeTextClass = isScale125Like
    ? "text-[clamp(15px,1.08vw,20px)] leading-[clamp(23px,1.6vw,30px)] tracking-[0.003em] text-[#131313]"
    : "text-[clamp(18px,1.3vw,24px)] leading-[clamp(26px,1.8vw,34px)] tracking-[0.003em] text-[#131313]";
  const heroHeadingClass = isScale125Like
    ? "text-[clamp(56px,4.2vw,88px)] leading-[clamp(64px,4.8vw,102px)] tracking-[-0.006em] text-[#131313]"
    : "text-[clamp(62px,4.7vw,102px)] leading-[clamp(70px,5.2vw,114px)] tracking-[-0.006em] text-[#131313]";
  const heroSubtitleClass = isScale125Like
    ? "text-[clamp(20px,1.52vw,32px)] leading-[clamp(30px,2.2vw,42px)] tracking-[0.002em] text-[#131313]"
    : "text-[clamp(24px,1.85vw,36px)] leading-[clamp(34px,2.5vw,48px)] tracking-[0.002em] text-[#131313]";
  const heroButtonGapClass = isScale125Like
    ? "flex flex-wrap items-center gap-[clamp(10px,0.9vw,18px)]"
    : "flex flex-wrap items-center gap-[clamp(14px,1.25vw,22px)]";
  const heroButtonSizeClass = isScale125Like
    ? "lg:px-[26px] lg:py-[11px] lg:text-[20px] lg:leading-[32px]"
    : "lg:px-[32px] lg:py-[14px] lg:text-[24px] lg:leading-[38px]";
  const heroMaxWidth = isScale125Like ? "min(100%, 680px)" : "min(100%, 820px)";

  return (
    <div className="bg-white">
      {/* Social Sidebar – outside hero so overflow-hidden doesn't affect it */}
      <SocialSidebar isScale125Like={isScale125Like} />

      {/* Hero viewport */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="relative flex min-h-[calc(100vh-84px)] items-center lg:pr-[clamp(96px,7vw,128px)]">
          <div className="mx-auto w-full px-[clamp(16px,3.5vw,80px)] py-[clamp(48px,6vw,80px)]">
            <div className="grid grid-cols-1 items-center gap-[clamp(24px,4vw,48px)] lg:grid-cols-2">
              {/* Left Column */}
              <div className="flex flex-col gap-[clamp(16px,2vw,24px)]">
                {/* Badge: Charging Network Is Live */}
                <div className="inline-flex items-center gap-[10px] self-start rounded-full border border-gray-200 px-[10px] py-[3px]">
                  <span className="block w-[8px] h-[8px] rounded-full bg-[#41BA15]" />
                  <span
                    className={heroBadgeTextClass}
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
                  className={heroHeadingClass}
                  style={{
                    fontFamily:
                      "'ITC Avant Garde Gothic Std', 'Public Sans', sans-serif",
                    fontWeight: 800,
                    maxWidth: heroMaxWidth,
                  }}
                >
                  Find Charger
                  {isScale125Like ? (
                    <>
                      <br />
                      Anytime.
                      <br />
                    </>
                  ) : (
                    " Anytime. "
                  )}
                  <span className="text-[#E50000]">Anywhere.</span>
                </h1>

                {/* Subtitle */}
                <p
                  className={heroSubtitleClass}
                  style={{
                    fontFamily: "'TT Fors Trial', Inter, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Live life at 100%
                </p>

                {/* CTA Buttons */}
                <div className={heroButtonGapClass}>
                  <FrontPageButton
                    variant="primary"
                    icon={<Search size={isScale125Like ? 24 : 30} />}
                    href="/charging-guide"
                    className={heroButtonSizeClass}
                  >
                    Find Chargers
                  </FrontPageButton>
                  <FrontPageButton
                    variant="outline"
                    icon={<Download size={isScale125Like ? 24 : 30} />}
                    href={PLAYSTORE_URL}
                    className={heroButtonSizeClass}
                  >
                    Get App
                  </FrontPageButton>
                </div>

                {/* Store Badges */}
                <div className="flex flex-wrap items-center gap-[clamp(8px,0.9vw,12px)]">
                  <GooglePlayBadge />
                  <AppStoreBadge />
                </div>
              </div>

              {/* Right Column – Live Charging Cards */}
              <div className="flex justify-center lg:justify-end">
                <LiveChargingCardsPanel isScale125Like={isScale125Like} />
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
