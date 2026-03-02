import React from "react";
import SecondScroll from "../pages/FrontPage/SecondScroll";
import ThirdScroll from "../pages/FrontPage/ThirdScroll";
import Home_SectionD_Business from "../pages/Home/Home_SectionD_Business";
import FifthScroll from "../pages/FrontPage/FifthScroll";
import SixthScroll from "../pages/FrontPage/SixthScroll";

import {
  ArrowRight,
  BatteryCharging,
  CreditCard,
  Download,
  MapPin,
  Monitor,
  Power,
  Search,
  Shield,
  ShieldCheck,
  TrendingDown,
  Zap,
} from "lucide-react";
const PLAYSTORE_URL =
  "https://play.google.com/store/apps/details?id=in.one.charging&hl=en_IN";

const APPSTORE_URL =
  "https://apps.apple.com/in/app/1c-ev-charging/id6478754214";

const PLAY_BADGE_SRC = "/GetItOnGooglePlay_Badge_Web_color_English.svg";
const APP_BADGE_SRC =
  "/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917 (1).svg";

type IconName =
  | "Pulse"
  | "Search"
  | "Download"
  | "Bolt"
  | "Shield"
  | "Phone"
  | "TrendDown"
  | "Zap"
  | "ArrowRight"
  | "MapPin"
  | "Power"
  | "CreditCard"
  | "Users"
  | "BatteryCharging"
  | "Rupee"
  | "Tool"
  | "Monitor"
  | "ShieldCheck";

function IconMap({
  name,
  className = "h-5 w-5",
}: {
  name?: IconName | null;
  className?: string;
}) {
  if (!name) return null;
  const map: Record<IconName, React.ReactNode> = {
    Pulse: <span className={`relative inline-flex ${className}`} />,
    Search: <Search className={className} />,
    Download: <Download className={className} />,
    Bolt: <Zap className={className} />,
    Shield: <Shield className={className} />,
    Phone: <Zap className={className} />,
    TrendDown: <TrendingDown className={className} />,
    Zap: <Zap className={className} />,
    ArrowRight: <ArrowRight className={className} />,
    MapPin: <MapPin className={className} />,
    Power: <Power className={className} />,
    CreditCard: <CreditCard className={className} />,
    Users: <Zap className={className} />,
    BatteryCharging: <BatteryCharging className={className} />,
    Rupee: (
      <span className={`${className} inline-flex items-center justify-center`}>
        ₹
      </span>
    ),
    Tool: (
      <span className={`${className} inline-flex items-center justify-center`}>
        🛠
      </span>
    ),
    Monitor: <Monitor className={className} />,
    ShieldCheck: <ShieldCheck className={className} />,
  };
  return map[name] ?? null;
}

function StoreBadge({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-mcn-lg border border-mcn-stroke-soft bg-white/70 backdrop-blur-mcn px-3 py-1.5 shadow-mcn-soft transition-mcn hover:bg-white/80"
      aria-label={alt}
    >
      <div className="h-10 max-w-[200px]">
        <img
          src={src}
          alt={alt}
          className="h-full w-auto max-w-full object-contain"
          loading="lazy"
        />
      </div>
    </a>
  );
}

function OpenBookIconSVG() {
  return (
    <div className="mx-auto w-full max-w-[360px]">
      <svg
        viewBox="0 0 240 180"
        className="h-auto w-full"
        role="img"
        aria-label="Open book"
      >
        <path
          d="M120 42 C98 28, 70 26, 44 34 C36 36, 32 44, 32 52 V140 C32 148, 38 154, 46 152 C72 146, 98 150, 120 162 Z"
          fill="rgba(255,255,255,0.55)"
          stroke="rgba(0,0,0,0.18)"
          strokeWidth="2"
        />
        <path
          d="M120 42 C142 28, 170 26, 196 34 C204 36, 208 44, 208 52 V140 C208 148, 202 154, 194 152 C168 146, 142 150, 120 162 Z"
          fill="rgba(255,255,255,0.55)"
          stroke="rgba(0,0,0,0.18)"
          strokeWidth="2"
        />
        <path
          d="M120 42 V162"
          stroke="rgba(0,0,0,0.22)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M52 64 H108 M52 80 H108 M52 96 H104 M52 112 H100"
          stroke="rgba(0,0,0,0.18)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M132 64 H188 M132 80 H188 M132 96 H184 M132 112 H180"
          stroke="rgba(0,0,0,0.18)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

function DarkSectionBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#121418]" />
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_10%,rgba(0,209,255,0.10),transparent_60%),radial-gradient(900px_520px_at_80%_20%,rgba(30,255,136,0.08),transparent_62%),radial-gradient(1100px_700px_at_50%_110%,rgba(37,99,235,0.14),transparent_62%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0.00),rgba(255,255,255,0.02))]" />
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] opacity-[0.10]" />
    </div>
  );
}

export default function Home_Schema_Page({
  hideHero = false,
}: {
  hideHero?: boolean;
}) {
  return (
    <div className="bg-mcn-bg text-mcn-text-primary">
      {/* Hero */}
      {!hideHero && (
        <section
          id="hero"
          className="relative min-h-screen overflow-hidden bg-white flex items-center"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-36 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-electric-glow-cyan blur-[140px] opacity-60" />
            <div className="absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-electric-glow-ionBlue blur-[140px] opacity-60" />
            <div
              className="absolute inset-0 opacity-[0.2]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative container mx-auto px-4 md:px-6 py-20 md:py-28">
            <div className="grid gap-8 desktop:grid-cols-12 items-center">
              <div className="desktop:col-span-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-mcn-stroke-soft bg-white/70 px-3 py-1 text-mt-down-1 text-mcn-text-muted">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-mcn-green" />
                  Charging Network Is Live
                </div>

                <h1 className="mt-4 font-heading text-pf-up-4 md:text-pf-up-5 leading-tight">
                  Find Chargers Anytime. Anywhere.
                </h1>
                <p className="mt-3 text-mt-base text-mcn-text-secondary">
                  Live life at 100%
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="inline-flex items-center gap-2 rounded-mcn-lg bg-mcn-red px-5 py-2.5 text-white shadow-mcn-card transition-mcn hover:bg-mcn-red-hover">
                    <Search className="h-5 w-5" />
                    Find Chargers
                  </button>
                  <a
                    href={PLAYSTORE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-mcn-lg border border-mcn-stroke-soft bg-white/70 px-5 py-2.5 text-mcn-text-primary shadow-mcn-soft transition-mcn hover:bg-white"
                  >
                    <Download className="h-5 w-5" />
                    Get App
                  </a>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <StoreBadge
                    href={PLAYSTORE_URL}
                    src={PLAY_BADGE_SRC}
                    alt="Get it on Google Play"
                  />
                  <StoreBadge
                    href={APPSTORE_URL}
                    src={APP_BADGE_SRC}
                    alt="Download on the App Store"
                  />
                </div>

                <div className="mt-4 inline-flex items-center rounded-full border border-mcn-stroke-soft bg-white/70 px-3 py-1 text-mt-down-2 text-mcn-text-muted">
                  Sponsored by PayTm
                </div>
              </div>

              <div className="desktop:col-span-6">
                <div className="rounded-mcn-xl border border-mcn-stroke-soft bg-white/70 backdrop-blur-mcn p-6 shadow-mcn-card">
                  <div className="text-mt-down-1 text-mcn-text-muted">
                    Live charging Stations
                  </div>
                  <div className="mt-3 space-y-3">
                    {[
                      { header: "Massive Hub - Sec 43, Gurugram" },
                      { header: "Statiq Charging Station - Sec 15, Gurugram" },
                      { header: "1C EV Charging Hub - Noida City Center" },
                    ].map((item) => (
                      <div
                        key={item.header}
                        className="flex items-center justify-between rounded-mcn border border-mcn-stroke-soft bg-white/70 px-4 py-3"
                      >
                        <div className="text-mt-base">{item.header}</div>
                        <span className="rounded-pill border border-mcn-stroke-soft bg-mcn-blue/10 px-2 py-1 text-mt-down-2 text-mcn-text-primary">
                          Live
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* EV Home Charging */}
      <SecondScroll />

      {/* EV Charging App */}
      <ThirdScroll />

      {/* Set Up Charging Station */}
      <Home_SectionD_Business />

      {/* EV Charging Guide */}
      <FifthScroll />

      {/* Exclusive Membership */}
      <SixthScroll />
    </div>
  );
}
