import React from "react";
import { EvChargerSvg } from "./EVChargerIcon";

/**
 * Home Section B — Hero-style (white infra grid background)
 * - Outer: white background + infra grid (same visual language as Hero)
 * - Main Card: black glass + white text
 * - Right: charger on a sub-card with a slightly different black-glass shade
 */

const Icon = ({
  name = "check",
  className = "h-4 w-4",
}: {
  name?: string;
  className?: string;
}) => {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
  };

  switch (name) {
    case "shield":
      return (
        <svg {...common} aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2 4 5v7c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V5l-8-3Z"
          />
        </svg>
      );
    case "phone":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="7" y="2" width="10" height="20" rx="2" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common} aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
          />
        </svg>
      );
    case "trendDown":
      return (
        <svg {...common} aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7v4c0 6 4 10 10 10h8"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-6-6-4 4-6-6"
          />
        </svg>
      );
    case "check":
    default:
      return (
        <svg {...common} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m20 6-11 11-5-5" />
        </svg>
      );
  }
};

export default function Home_SectionB() {
  const content = {
    title: "EV Home Charging",
    heading: "Install Your Personal EV Charger at Home",
    body: "Safe • Smart • Cost-Effective",
    badge: "Ideal for 1–2 EVs",
    list: [
      { text: "Dedicated AC Charging for Your EV", icon: "bolt" },
      { text: "Certified Safe Installation", icon: "shield" },
      { text: "Smart App-Based Monitoring", icon: "phone" },
      { text: "Lower Cost vs Public Charging", icon: "trendDown" },
    ],
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* ================================
          White Infra Grid Background
          (mirrors HeroSection styling)
         ================================ */}
      <div className="pointer-events-none absolute inset-0">
        {/* faint grid */}
        <div className="absolute inset-0 opacity-[0.9] bg-[linear-gradient(to_right,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.045)_1px,transparent_1px)] bg-[size:56px_56px]" />

        {/* micro-dots */}
        <div className="absolute inset-0 opacity-[0.28] bg-[radial-gradient(rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:18px_18px]" />

        {/* subtle glows */}
        <div className="absolute -top-48 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-[rgba(47,107,255,0.10)] blur-3xl" />
        <div className="absolute -top-44 right-1/4 h-[520px] w-[520px] rounded-full bg-[rgba(18,184,214,0.16)] blur-3xl" />
        <div className="absolute -bottom-52 left-1/4 h-[560px] w-[560px] rounded-full bg-[rgba(47,107,255,0.12)] blur-3xl" />
      </div>

      <div className="container relative py-10 md:py-12">
        {/* ================================
            MAIN CARD — Black Glass
           ================================ */}
        <div
          className={[
            "relative rounded-mcn-xl p-8 md:p-12",
            "bg-[rgba(11,11,12,0.72)] backdrop-blur-mcn",
            "border border-[rgba(255,255,255,0.16)]",
            "shadow-[0_22px_70px_rgba(0,0,0,0.35)]",
            "transition duration-normal ease-ease-out-standard hover:-translate-y-[1px] hover:shadow-[0_28px_90px_rgba(0,0,0,0.42)]",
          ].join(" ")}
        >
          {/* subtle scan line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
          {/* inner edge ring */}
          <div className="pointer-events-none absolute inset-0 rounded-mcn-xl ring-1 ring-white/10" />

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* LEFT: Content */}
            <div className="lg:col-span-7">
              {/* Title (largest) */}
              <h2 className="font-heading text-mt-up-5 tracking-tight text-white">
                {content.title}
              </h2>

              {/* Heading */}
              <div className="mt-3 text-mt-up-2 font-semibold text-white/85">
                {content.heading}
              </div>

              {/* Body */}
              <p className="mt-3 max-w-2xl text-mt-up-1 text-white/70">
                {content.body}
              </p>

              {/* Badge */}
              <div className="mt-5">
                <span className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-3 py-1 text-mt-down-2 font-semibold text-white/75">
                  {content.badge}
                </span>
              </div>

              {/* Compact bullets */}
              <ul className="mt-5 space-y-2">
                {content.list.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-mt-up-0 text-white/80">
                    <Icon name={item.icon} className="h-4 w-4 text-white/70" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* CTA row */}
              <div className="mt-7 flex flex-wrap gap-3">
                <button className="inline-flex items-center justify-center rounded-mcn-lg bg-mcn-red px-6 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(229,0,0,0.22)] transition duration-fast ease-ease-out-standard hover:bg-mcn-red-hover">
                  Get My Home Charger
                </button>

                <button className="inline-flex items-center justify-center rounded-mcn-lg border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white shadow-[0_10px_28px_rgba(0,0,0,0.25)] transition duration-fast ease-ease-out-standard hover:bg-white/10">
                  View Installation Guide
                </button>
              </div>
            </div>

            {/* RIGHT: Charger sub-card (darker glass shade) */}
            <div className="lg:col-span-5">
              <div
                className={[
                  "relative overflow-hidden rounded-mcn-xl p-6 md:p-7",
                  "bg-[rgba(17,17,20,0.86)] border border-[rgba(255,255,255,0.12)]",
                  "shadow-[0_18px_50px_rgba(0,0,0,0.55)]",
                ].join(" ")}
              >
                {/* subtle sub-card glow accents */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[rgba(18,184,214,0.18)] blur-3xl" />
                <div className="pointer-events-none absolute -left-16 -bottom-16 h-44 w-44 rounded-full bg-[rgba(47,107,255,0.16)] blur-3xl" />

                <div className="relative flex items-center justify-center">
                  <div className="w-full max-w-[520px]">
                    {/* Let CSS handle responsiveness; size is just a hint */}
                    <EvChargerSvg size={480} className="h-auto w-full" />
                  </div>
                </div>

                {/* Optional tiny caption */}
                <div className="relative mt-4 text-center text-mt-down-2 text-white/60">
                  Wall-mounted charger preview (animated)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
