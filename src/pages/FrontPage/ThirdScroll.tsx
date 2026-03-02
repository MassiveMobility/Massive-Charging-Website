import React from "react";
import { ArrowRight } from "lucide-react";
import "./ThirdScroll.css";

const PLAYSTORE_URL =
  "https://play.google.com/store/apps/details?id=in.one.charging&hl=en_IN";

/* ─── Feature icon SVGs (inline for crisp rendering) ─── */
function LocateIcon() {
  return (
    <svg className="third-scroll__feature-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4C14.48 4 10 8.48 10 14C10 22.5 20 36 20 36C20 36 30 22.5 30 14C30 8.48 25.52 4 20 4Z" />
      <circle cx="20" cy="14" r="4" />
    </svg>
  );
}

function PayIcon() {
  return (
    <svg className="third-scroll__feature-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="10" width="28" height="20" rx="3" />
      <path d="M6 16h28" />
      <path d="M12 24h6" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg className="third-scroll__feature-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="12" width="20" height="16" rx="2" />
      <path d="M28 18v4" />
      <path d="M18 17l-3 6h6l-3 6" />
    </svg>
  );
}

function StartStopIcon() {
  return (
    <svg className="third-scroll__feature-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="15" cy="20" r="8" />
      <polygon points="13,16 19,20 13,24" fill="currentColor" stroke="none" />
      <circle cx="27" cy="20" r="8" />
      <rect x="24.5" y="17" width="2" height="6" rx="0.5" fill="currentColor" stroke="none" />
      <rect x="28" y="17" width="2" height="6" rx="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg className="third-scroll__feature-icon" viewBox="0 0 40 40" fill="currentColor">
      <path d="M20 18a5 5 0 100-10 5 5 0 000 10zm-8 2a4 4 0 100-8 4 4 0 000 8zm16 0a4 4 0 100-8 4 4 0 000 8zm-8 2c-4.42 0-8 2.24-8 5v3h16v-3c0-2.76-3.58-5-8-5zm-11 1c-3.31 0-6 1.79-6 4v2h7v-2.5c0-1.47.82-2.78 2.1-3.78A12.3 12.3 0 009 23zm22 0c-1.1 0-2.13.2-3.1.72 1.28 1 2.1 2.31 2.1 3.78V30h7v-2c0-2.21-2.69-4-6-4z" />
    </svg>
  );
}

const FEATURES = [
  { icon: <LocateIcon />, label: "Locate Chargers" },
  { icon: <PayIcon />, label: "Pay for Charging" },
  { icon: <BatteryIcon />, label: "Battery Health" },
  { icon: <StartStopIcon />, label: "Start & Stop" },
  { icon: <CommunityIcon />, label: "Join Community" },
];

export default function ThirdScroll() {
  return (
    <section id="ev-charging-app" className="third-scroll">
      {/* ─── Top: Left text + Right hand ─── */}
      <div className="third-scroll__top">
        {/* Left Column */}
        <div className="third-scroll__left">
          <h2 className="third-scroll__heading">
            Get 1C Charging App
            <br />
            <span>One App For All Activities</span>
          </h2>

          <p className="third-scroll__subtitle">
            Control all charging activities from single app in your phone.
          </p>

          <a
            href={PLAYSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="third-scroll__cta"
          >
            Get EV Charging App
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Right Column – App mockup */}
        <div className="third-scroll__right">
          <img
            src="/Group 27824.svg"
            alt="1C Charging App"
            className="third-scroll__mockup"
          />
        </div>
      </div>

      {/* ─── Horizontal red divider ─── */}
      <hr className="third-scroll__divider" />

      {/* ─── Bottom feature icons ─── */}
      <div className="third-scroll__features">
        {FEATURES.map((feat) => (
          <div key={feat.label} className="third-scroll__feature-card">
            {feat.icon}
            <span className="third-scroll__feature-label">{feat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
