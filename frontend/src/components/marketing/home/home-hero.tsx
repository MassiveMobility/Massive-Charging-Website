"use client";

import { useEffect, useState } from "react";

import { FRONTPAGE_SIDEBAR_VISIBILITY_EVENT } from "@/lib/constants/ui-events";
import Link from "next/link";

const PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=in.one.charging&hl=en_IN";
const APPSTORE_URL = "https://apps.apple.com/in/app/1c-ev-charging/id6478754214";

const LIVE_STATIONS = [
  "Gomti Nagar Charging Station",
  "Kalkaji EV Charging Station",
  "Wave City Center Charging Station"
] as const;

type IconProps = {
  className?: string;
};

function SearchIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="20" x2="16.65" y1="20" y2="16.65" />
    </svg>
  );
}

function DownloadIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

function GooglePlayBadge() {
  return (
    <a
      aria-label="Get Massive Charging app on Google Play"
      className="home-hero-v2__store-badge"
      href={PLAYSTORE_URL}
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg aria-hidden="true" fill="none" viewBox="0 0 20 22" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.22 0.27C0.89 0.61 0.7 1.12 0.7 1.78V20.22C0.7 20.88 0.89 21.39 1.22 21.73L1.3 21.81L11.55 11.56V11.44L1.3 1.19L1.22 0.27Z"
          fill="url(#home-hero-gp1)"
        />
        <path
          d="M14.96 14.97L11.55 11.56V11.44L14.96 8.03L15.05 8.08L19.09 10.39C20.23 11.03 20.23 12.07 19.09 12.71L15.05 14.92L14.96 14.97Z"
          fill="url(#home-hero-gp2)"
        />
        <path
          d="M15.05 14.92L11.55 11.5L1.22 21.73C1.63 22.17 2.29 22.22 3.04 21.8L15.05 14.92Z"
          fill="url(#home-hero-gp3)"
        />
        <path
          d="M15.05 8.08L3.04 1.2C2.29 0.78 1.63 0.83 1.22 1.27L11.55 11.5L15.05 8.08Z"
          fill="url(#home-hero-gp4)"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="home-hero-gp1"
            x1="10.47"
            x2="-3.01"
            y1="1.32"
            y2="14.8"
          >
            <stop stopColor="#00A0FF" />
            <stop offset="1" stopColor="#00A0FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="home-hero-gp2"
            x1="21.13"
            x2="0.35"
            y1="11.5"
            y2="11.5"
          >
            <stop stopColor="#FFE000" />
            <stop offset="1" stopColor="#FFBD00" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="home-hero-gp3"
            x1="13.07"
            x2="-4.58"
            y1="13.65"
            y2="31.3"
          >
            <stop stopColor="#FF3A44" />
            <stop offset="1" stopColor="#C31162" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="home-hero-gp4"
            x1="-1.35"
            x2="7.48"
            y1="-5.38"
            y2="3.45"
          >
            <stop stopColor="#32A071" />
            <stop offset="1" stopColor="#006E47" />
          </linearGradient>
        </defs>
      </svg>
      <span className="home-hero-v2__store-badge-text">
        <span className="home-hero-v2__store-badge-eyebrow">Get it on</span>
        <span className="home-hero-v2__store-badge-title">Google Play</span>
      </span>
    </a>
  );
}

function AppStoreBadge() {
  return (
    <a
      aria-label="Download Massive Charging app from the App Store"
      className="home-hero-v2__store-badge"
      href={APPSTORE_URL}
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg aria-hidden="true" fill="white" viewBox="0 0 18 22" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.94 11.64C14.96 9.94 15.84 8.35 17.28 7.44C16.36 6.14 14.88 5.34 13.32 5.24C11.68 5.06 10.1 6.22 9.26 6.22C8.42 6.22 7.1 5.26 5.72 5.28C3.88 5.34 2.22 6.38 1.32 8.02C-0.58 11.38 0.88 16.36 2.68 19.08C3.58 20.42 4.64 21.92 6.02 21.86C7.36 21.8 7.88 21 9.5 21C11.1 21 11.58 21.86 12.98 21.84C14.42 21.8 15.34 20.48 16.2 19.12C16.84 18.18 17.32 17.14 17.64 16.06C15.9 15.34 14.94 13.56 14.94 11.64Z" />
        <path d="M12.26 3.6C13.04 2.66 13.42 1.46 13.32 0.24C12.12 0.36 11.02 0.94 10.22 1.86C9.44 2.76 9.04 3.94 9.16 5.1C10.36 5.12 11.5 4.54 12.26 3.6Z" />
      </svg>
      <span className="home-hero-v2__store-badge-text">
        <span className="home-hero-v2__store-badge-eyebrow">Download on the</span>
        <span className="home-hero-v2__store-badge-title">App Store</span>
      </span>
    </a>
  );
}

/**
 * First scroll section for home migration:
 * keeps legacy hero behavior while moving all visual values into centralized CSS.
 */
export function HomeHero() {
  const [isScale125Like, setIsScale125Like] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  useEffect(() => {
    const updateDesktopScale = () => {
      const width = window.innerWidth;
      setIsScale125Like(width >= 1280 && width <= 1700);
    };

    updateDesktopScale();
    window.addEventListener("resize", updateDesktopScale);

    return () => window.removeEventListener("resize", updateDesktopScale);
  }, []);

  useEffect(() => {
    const syncSidebarVisibility = () => {
      const eliteSection = document.getElementById("exclusive-membership");

      const nextVisible = eliteSection
        ? eliteSection.getBoundingClientRect().top > window.innerHeight * 0.85
        : window.scrollY < window.innerHeight * 0.75;

      setSidebarVisible(nextVisible);
      window.dispatchEvent(
        new CustomEvent(FRONTPAGE_SIDEBAR_VISIBILITY_EVENT, { detail: { visible: nextVisible } })
      );
    };

    syncSidebarVisibility();
    window.addEventListener("scroll", syncSidebarVisibility, { passive: true });

    return () => window.removeEventListener("scroll", syncSidebarVisibility);
  }, []);

  const heroScaleClass = isScale125Like ? "home-hero-v2--scale-125" : "home-hero-v2--scale-default";
  const sidebarStateClass = sidebarVisible
    ? "home-hero-v2__social-sidebar--visible"
    : "home-hero-v2__social-sidebar--hidden";

  return (
    <div className={`home-hero-v2 ${heroScaleClass}`}>
      <aside className={`home-hero-v2__social-sidebar ${sidebarStateClass}`} aria-label="Social sidebar">
        <div className="home-hero-v2__social-black-zone" />

        <div className="home-hero-v2__social-red-zone">
          <Link aria-label="Search charging guide" className="home-hero-v2__social-link" href="/charging-guide">
            <SearchIcon className="home-hero-v2__social-icon" />
          </Link>
          <a
            aria-label="Open Massive Charging Facebook"
            className="home-hero-v2__social-link"
            href="https://www.facebook.com/massivecharging"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FacebookIcon className="home-hero-v2__social-icon" />
          </a>
          <a
            aria-label="Open Massive Charging X profile"
            className="home-hero-v2__social-link"
            href="https://x.com/massivecharging"
            rel="noopener noreferrer"
            target="_blank"
          >
            <XIcon className="home-hero-v2__social-icon home-hero-v2__social-icon--filled" />
          </a>
          <a
            aria-label="Open Massive Charging Instagram"
            className="home-hero-v2__social-link"
            href="https://www.instagram.com/massivecharging"
            rel="noopener noreferrer"
            target="_blank"
          >
            <InstagramIcon className="home-hero-v2__social-icon" />
          </a>
          <a
            aria-label="Open Massive Charging YouTube"
            className="home-hero-v2__social-link"
            href="https://www.youtube.com/@massivecharging"
            rel="noopener noreferrer"
            target="_blank"
          >
            <YoutubeIcon className="home-hero-v2__social-icon" />
          </a>
        </div>
      </aside>

      <div className="home-hero-v2__viewport">
        <section aria-labelledby="home-hero-title" className="home-hero-v2__section">
          <div className="home-hero-v2__container">
            <div className="home-hero-v2__grid">
              <div className="home-hero-v2__left">
                <div className="home-hero-v2__status-badge">
                  <span aria-hidden="true" className="home-hero-v2__status-dot" />
                  <span className="home-hero-v2__status-text">Charging Network Is Live</span>
                </div>

                <h1 className="home-hero-v2__title" id="home-hero-title">
                  Find Charger <span className="home-hero-v2__title-anytime">Anytime.</span>{" "}
                  <span className="home-hero-v2__title-accent">Anywhere.</span>
                </h1>

                <p className="home-hero-v2__subtitle">Live life at 100%</p>

                <div className="home-hero-v2__cta-row">
                  <Link className="home-hero-v2__hero-button home-hero-v2__hero-button--primary" href="/charging-guide">
                    <SearchIcon className="home-hero-v2__hero-button-icon" />
                    <span>Find Chargers</span>
                  </Link>
                  <a
                    className="home-hero-v2__hero-button home-hero-v2__hero-button--outline"
                    href={PLAYSTORE_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <DownloadIcon className="home-hero-v2__hero-button-icon" />
                    <span>Get App</span>
                  </a>
                </div>

                <div className="home-hero-v2__store-row">
                  <GooglePlayBadge />
                  <AppStoreBadge />
                </div>
              </div>

              <div className="home-hero-v2__right">
                <div className="home-hero-v2__live-panel">
                  <p className="home-hero-v2__live-panel-title">Live charging Stations.</p>
                  <ul className="home-hero-v2__live-list">
                    {LIVE_STATIONS.map((station) => (
                      <li className="home-hero-v2__live-card" key={station}>
                        <span className="home-hero-v2__live-card-name">{station}</span>
                        <span className="home-hero-v2__live-card-badge">Live</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
