import React from "react";
import Link from "next/link";

const PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=in.one.charging&hl=en_IN";

function LocateIcon() {
  return (
    <svg
      className="home-third-v2__feature-icon"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 4C14.48 4 10 8.48 10 14C10 22.5 20 36 20 36C20 36 30 22.5 30 14C30 8.48 25.52 4 20 4Z" />
      <circle cx="20" cy="14" r="4" />
    </svg>
  );
}

function PayIcon() {
  return (
    <svg
      className="home-third-v2__feature-icon"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="20" rx="3" width="28" x="6" y="10" />
      <path d="M6 16h28" />
      <path d="M12 24h6" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg
      className="home-third-v2__feature-icon"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="16" rx="2" width="20" x="8" y="12" />
      <path d="M28 18v4" />
      <path d="M18 17l-3 6h6l-3 6" />
    </svg>
  );
}

function StartStopIcon() {
  return (
    <svg
      className="home-third-v2__feature-icon"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="20" r="8" />
      <polygon fill="currentColor" points="13,16 19,20 13,24" stroke="none" />
      <circle cx="27" cy="20" r="8" />
      <rect fill="currentColor" height="6" rx="0.5" stroke="none" width="2" x="24.5" y="17" />
      <rect fill="currentColor" height="6" rx="0.5" stroke="none" width="2" x="28" y="17" />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg
      className="home-third-v2__feature-icon"
      fill="currentColor"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 18a5 5 0 100-10 5 5 0 000 10zm-8 2a4 4 0 100-8 4 4 0 000 8zm16 0a4 4 0 100-8 4 4 0 000 8zm-8 2c-4.42 0-8 2.24-8 5v3h16v-3c0-2.76-3.58-5-8-5zm-11 1c-3.31 0-6 1.79-6 4v2h7v-2.5c0-1.47.82-2.78 2.1-3.78A12.3 12.3 0 009 23zm22 0c-1.1 0-2.13.2-3.1.72 1.28 1 2.1 2.31 2.1 3.78V30h7v-2c0-2.21-2.69-4-6-4z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      className="home-third-v2__cta-icon"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

const FEATURE_ICONS: Array<() => React.JSX.Element> = [LocateIcon, PayIcon, BatteryIcon, StartStopIcon, CommunityIcon];

const DEFAULT_FEATURE_LABELS = [
  "Locate Chargers",
  "Pay for Charging",
  "Battery Health",
  "Start & Stop",
  "Join Community",
];

export type HomeThirdScrollProps = {
  headingLine1?: string | undefined;
  headingLine2?: string | undefined;
  subtitle?: string | undefined;
  ctaLabel?: string | undefined;
  featureLabels?: string[] | undefined;
};

export function HomeThirdScroll({
  headingLine1 = "Get 1C Charging App",
  headingLine2 = "One App For All Activities",
  subtitle = "Control all charging activities from single app in your phone.",
  ctaLabel = "Get EV Charging App",
  featureLabels = DEFAULT_FEATURE_LABELS,
}: HomeThirdScrollProps) {
  return (
    <section className="home-third-v2" id="ev-charging-app">
      <div className="home-third-v2__top">
        <div className="home-third-v2__left">
          <h2 className="home-third-v2__heading">
            <span className="home-third-v2__heading-line">{headingLine1}</span>
            <span className="home-third-v2__heading-line home-third-v2__heading-line--accent">
              {headingLine2}
            </span>
          </h2>

          <p className="home-third-v2__subtitle">{subtitle}</p>

          <a
            className="home-third-v2__cta"
            href={PLAYSTORE_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>{ctaLabel}</span>
            <ArrowRightIcon />
          </a>
        </div>

        <div className="home-third-v2__right">
          <img alt="1C Charging App" className="home-third-v2__mockup" src="/Group 27824.svg" />
        </div>
      </div>

      <hr className="home-third-v2__divider" />

      <div className="home-third-v2__features">
        {featureLabels.map((label, i) => {
          const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length] ?? LocateIcon;
          return (
            <div className="home-third-v2__feature-card" key={label}>
              <Icon />
              <span className="home-third-v2__feature-label">{label}</span>
            </div>
          );
        })}
      </div>

      <div className="home-third-v2__deep-link">
        <Link className="sr-only" href="/charging-guide">
          Explore EV charging guide
        </Link>
      </div>
    </section>
  );
}
