import React from "react";

/**
 * Home_SectionC_AppSplit_V3
 * - Dark grid background
 * - Base card compact: ~80vh on lg screens (doesn't blow beyond viewport)
 * - Layout: TEXT LEFT, PHONE RIGHT (reversed back)
 * - Phone: longer, less wide + base controls (back + home)
 * - Mini cards inside phone: compact
 *
 * Copy preserved exactly.
 */

type Feature = {
  label: string;
  icon: "map" | "zap" | "card" | "users" | "battery";
};

const MiniIcon = ({
  name,
  className = "h-4 w-4",
}: {
  name: Feature["icon"] | "phone" | "back" | "home";
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
    case "back":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 18 9 12l6-6" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 11.5 12 4l8 7.5V20a1.5 1.5 0 0 1-1.5 1.5H5.5A1.5 1.5 0 0 1 4 20v-8.5Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 21v-7h5v7" />
        </svg>
      );
    case "map":
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
    case "zap":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
        </svg>
      );
    case "card":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M3 10h18" strokeLinecap="round" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11a4 4 0 1 0-8 0" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 20c1.8-3.7 5.8-5 9-5s7.2 1.3 9 5" />
        </svg>
      );
    case "battery":
      return (
        <svg {...common}>
          <rect x="3" y="8" width="16" height="8" rx="2" />
          <path d="M21 10v4" strokeLinecap="round" />
          <path d="M6 12h7" strokeLinecap="round" />
        </svg>
      );
    case "phone":
    default:
      return (
        <svg {...common}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 19h2" strokeLinecap="round" />
        </svg>
      );
  }
};

const GradientButton = ({ children }: { children: React.ReactNode }) => (
  <button
    className={[
      "relative inline-flex w-full items-center justify-center rounded-mcn-lg px-6 py-3 font-semibold text-white sm:w-auto",
      "shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition duration-200 ease-out hover:-translate-y-[1px]",
      "bg-[linear-gradient(135deg,rgba(229,0,0,0.95),rgba(255,140,0,0.95))]",
      "before:absolute before:inset-0 before:rounded-mcn-lg before:bg-white/10 before:opacity-0 before:transition",
      "hover:before:opacity-100",
    ].join(" ")}
  >
    <span className="relative">{children}</span>
  </button>
);

function PhoneMock({ features }: { features: Feature[] }) {
  return (
    <div className="mx-auto w-full max-w-[320px] lg:max-w-[300px]">
      <div className="relative overflow-hidden rounded-[42px] border border-white/14 bg-[#0B0F14] shadow-[0_26px_80px_rgba(0,0,0,0.45)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.14),transparent_42%)]" />

        <div className="relative mx-auto mt-3 h-6 w-32 rounded-full bg-black/40" />

        <div className="m-3 rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,#0F172A,#0B1020)] px-4 pb-4 pt-3">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/80">
              <MiniIcon name="phone" className="h-4 w-4 text-white/75" />
              1C App
            </div>
            <div className="text-[11px] font-semibold text-white/55">LIVE</div>
          </div>

          <div className="mt-3 text-[13px] font-bold text-white">Quick Actions</div>
          <div className="mt-0.5 text-[11px] text-white/60">Everything in one place</div>

          <div className="mt-3 grid gap-2">
            {features.map((f) => (
              <div
                key={f.label}
                className={[
                  "flex items-center justify-between rounded-2xl px-2.5 py-2",
                  "border border-white/10 bg-white/5",
                  "shadow-[0_10px_26px_rgba(0,0,0,0.35)]",
                ].join(" ")}
              >
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                    <MiniIcon name={f.icon} className="h-4 w-4 text-white/80" />
                  </span>
                  <div className="text-[12px] font-semibold text-white/85">{f.label}</div>
                </div>
                <span className="text-[12px] font-semibold text-white/45">›</span>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-center">
            <div className="h-1.5 w-20 rounded-full bg-white/15" />
          </div>
        </div>

        {/* Base controls */}
        <div className="flex items-center justify-between px-7 pb-5 pt-1 text-white/60">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <MiniIcon name="back" className="h-5 w-5" />
          </span>

          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5">
            <MiniIcon name="home" className="h-5 w-5" />
          </span>

          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <span className="h-4 w-4 rounded-md border border-white/30" />
          </span>
        </div>
      </div>

      <div className="pointer-events-none mx-auto mt-4 h-10 w-[78%] rounded-full bg-black/30 blur-xl" />
    </div>
  );
}

export default function Home_SectionC_AppSplit_V3() {
  // COPY preserved exactly
  const kicker = "EV Charging App";
  const heading = "Get 1C Charging App";
  const subheading = "One App For All Activities";
  const body = "Control all charging activities from single app in your phone.";
  const cta = "Get EV Charging App";

  const features: Feature[] = [
    { label: "Locate Chargers", icon: "map" },
    { label: "Start & Stop", icon: "zap" },
    { label: "Pay for Charging", icon: "card" },
    { label: "Join Community", icon: "users" },
    { label: "Battery Health", icon: "battery" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#070A0F]">
      {/* Dark grid background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.8] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute inset-0 opacity-[0.22] bg-[radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:18px_18px]" />
        <div className="absolute -top-52 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-[rgba(47,107,255,0.22)] blur-3xl" />
        <div className="absolute -bottom-52 left-1/4 h-[560px] w-[560px] rounded-full bg-[rgba(18,184,214,0.16)] blur-3xl" />
      </div>

      <div className="container relative py-10 md:py-12">
        <div
          className={[
            "relative overflow-hidden rounded-mcn-xl",
            "bg-white/90 backdrop-blur-mcn",
            "border border-black/10",
            "shadow-[0_22px_70px_rgba(0,0,0,0.45)]",
            "lg:h-[80vh]",
          ].join(" ")}
        >
          {/* inner grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.55] bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20" />

          <div className="relative grid items-center gap-10 p-6 md:p-10 lg:grid-cols-12">
            {/* LEFT: Text (back to normal) */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 text-xs font-semibold text-black/70">
                <MiniIcon name="phone" className="h-4 w-4 text-black/60" />
                {kicker}
              </div>

              <h2 className="mt-4 font-heading text-4xl tracking-tight text-black md:text-5xl">
                {heading}
              </h2>

              <div className="mt-3 text-lg font-semibold text-black/80 md:text-xl">
                {subheading}
              </div>

              <p className="mt-3 max-w-xl text-sm text-black/65 md:text-base">
                {body}
              </p>

              <div className="mt-6">
                <GradientButton>{cta}</GradientButton>
              </div>
            </div>

            {/* RIGHT: Phone */}
            <div className="lg:col-span-6 lg:-mt-6">
  <PhoneMock features={features} />
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
