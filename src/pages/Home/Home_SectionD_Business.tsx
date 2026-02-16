import React from "react";
import ROIGrowthChart from "./ROIGrowthChart";

/**
 * Home_SectionD_Business (Split Screen Benefit)
 * - Content from D schema (with your requested edits)
 * - BG: white grid
 * - Card: black glass, text white
 * - Left: text + list + CTA
 * - Right: ROI Growth Chart (SVG) inside glass sub-card
 *
 * Notes:
 * - Icons are simple inline SVGs (no lucide dependency).
 * - ROIGrowthChart.tsx should be in the same folder.
 */

type ListItem = {
  text: string;
  icon: "mapPin" | "tool" | "creditCard" | "monitor" | "shieldCheck";
};

const Icon = ({
  name,
  className = "h-4 w-4",
}: {
  name: "rupee" | ListItem["icon"];
  className?: string;
}) => {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "rupee":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 4h12" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 8h12" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 20l6-8H10a4 4 0 1 1 0-8h8"
          />
        </svg>
      );
    case "mapPin":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
          />
          <circle cx="12" cy="10" r="2.2" />
        </svg>
      );
    case "tool":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.2 2.2-2.8-2.8 2-2.4Z"
          />
        </svg>
      );
    case "creditCard":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path strokeLinecap="round" d="M3 10h18" />
          <path strokeLinecap="round" d="M7 15h4" />
        </svg>
      );
    case "monitor":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path strokeLinecap="round" d="M8 20h8" />
          <path strokeLinecap="round" d="M12 16v4" />
        </svg>
      );
    case "shieldCheck":
    default:
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2 4 5v7c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V5l-8-3Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-5" />
        </svg>
      );
  }
};

// ✅ UPDATED: Button can now behave like a link
const SolidWhiteButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string; // ✅ NEW
}) => {
  const className = [
    "inline-flex items-center justify-center",
    "rounded-mcn-lg px-5 py-2.5 font-semibold",
    "bg-white text-black",
    "shadow-[0_14px_40px_rgba(0,0,0,0.28)]",
    "transition duration-200 ease-out hover:-translate-y-[1px] hover:bg-white/95",
  ].join(" ");

  // ✅ If href provided, render anchor
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
};


function RightROICard() {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-mcn-xl",
        "border border-white/12 bg-[rgba(17,17,20,0.86)]",
        "shadow-[0_18px_50px_rgba(0,0,0,0.55)]",
        "p-5 md:p-6",
      ].join(" ")}
    >
      {/* glows */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[rgba(16,185,129,0.14)] blur-3xl" />
      <div className="pointer-events-none absolute -left-16 -bottom-16 h-44 w-44 rounded-full bg-[rgba(47,107,255,0.14)] blur-3xl" />

      {/* header */}
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-bold tracking-widest uppercase text-emerald-300/80">
            Live Growth Metric
          </div>
          <div className="mt-1 text-lg font-bold text-white">Revenue vs. Consumption</div>
        </div>

        <div className="text-right">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
            Current ROI
          </div>
          <div className="mt-1 font-mono text-xl font-bold text-emerald-300">+412.5%</div>
        </div>
      </div>

      {/* chart */}
      <div className="relative mt-4 h-[220px] w-full">
        <ROIGrowthChart className="h-full w-full" live={false} />
      </div>

      {/* footer stats */}
      <div className="relative mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-3">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
            Power Output
          </div>
          <div className="mt-1 text-base font-bold text-white">1.2 gW</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
            Gross Profit
          </div>
          <div className="mt-1 text-base font-bold text-white">₹ 84.2 Cr</div>
        </div>
      </div>
    </div>
  );
}

export default function Home_SectionD_Business() {
  const content = {
    kicker: { text: "Set Up Charger and Earn", icon: "rupee" as const },
    core: {
      title: "Start Your EV Charging Business ",
      subheading:
        "Convert empty land into EV Charging Station and earn monthly income. Get Hardware and Software to run Charging Station.",
    },
    button: { label: "How To Setup Station" },
    badge: { text: "₹ 80,000+ monthly income" },
    list: [
      { text: "Site Feasibility & Layout Planning", icon: "mapPin" },
      { text: "Charger Hardware + Installation Support", icon: "tool" },
      { text: "Billing, Payments & Settlements", icon: "creditCard" },
      { text: "Operations Dashboard & Remote Control", icon: "monitor" },
      { text: "Uptime Monitoring & Service Support", icon: "shieldCheck" },
    ] as ListItem[],
    compliance: { coreRequirement: "Commercial electrical readiness, permits, safety" },
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* White grid background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.9] bg-[linear-gradient(to_right,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.045)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute inset-0 opacity-[0.28] bg-[radial-gradient(rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:18px_18px]" />
        <div className="absolute -top-48 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-[rgba(47,107,255,0.10)] blur-3xl" />
        <div className="absolute -bottom-52 left-1/4 h-[560px] w-[560px] rounded-full bg-[rgba(47,107,255,0.10)] blur-3xl" />
      </div>

      <div className="container relative py-8 md:py-10">
        {/* Main black-glass card */}
        <div
          className={[
            "relative rounded-mcn-xl p-6 md:p-8",
            "bg-[rgba(11,11,12,0.72)] backdrop-blur-mcn",
            "border border-[rgba(255,255,255,0.16)]",
            "shadow-[0_22px_70px_rgba(0,0,0,0.35)]",
          ].join(" ")}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
          <div className="pointer-events-none absolute inset-0 rounded-mcn-xl ring-1 ring-white/10" />

          {/* header strip: kicker left, metric right 
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
              <Icon name={content.kicker.icon} className="h-4 w-4 text-white/75" />
              {content.kicker.text}
            </div>

            <div className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
              {content.badge.text}
            </div>
          </div> */}

          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-start">
            {/* LEFT */}
            <div className="lg:col-span-7">
              <h2 className="font-heading text-mt-up-5 tracking-tight text-white">
                {content.core.title}
              </h2>

              <p className="mt-2 max-w-2xl text-mt-up-1 text-white/70">
                {content.core.subheading}
              </p>

              <div className="mt-4 text-sm font-semibold uppercase tracking-wide text-white/60">
                What We Offer:
              </div>

              <ul className="mt-3 space-y-2">
                {content.list.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-white/80">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Icon name={item.icon} className="h-4 w-4 text-white/75" />
                    </span>
                    <span className="text-sm font-semibold">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                {/* ✅ UPDATED: Now links to business page */}
<SolidWhiteButton href="/ev-charging-station-business">
  {content.button.label}
</SolidWhiteButton>

              </div>

              <div className="mt-3 text-xs text-white/55">
                <span className="font-semibold text-white/60">Requirement:</span>{" "}
                {content.compliance.coreRequirement}
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-5">
              <RightROICard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
