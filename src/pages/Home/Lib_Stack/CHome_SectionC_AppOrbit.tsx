import React from "react";

/**
 * Home_SectionC — Orbit Layout (Desktop orbit, Mobile vertical orbit)
 * - Desktop (lg+): central phone + orbit nodes positioned around
 * - Mobile/Tablets: vertical layout + compact feature grid
 * - Styling matches your "Hero-style" system:
 *   White background + infra grid
 *   Black glass main card + white text
 *   Sub-card (phone) black-glass shade
 *
 * Notes:
 * - This uses simple placeholder phone + icons (inline SVG). Replace with your real SVG/mock later.
 */

type Feature = { label: string; icon: "map" | "zap" | "card" | "users" | "battery" };

const MiniIcon = ({
  name,
  className = "h-4 w-4",
}: {
  name: Feature["icon"] | "phone";
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
    case "phone":
      return (
        <svg {...common}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 19h2" strokeLinecap="round" />
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 20.5c1.6-4 6.2-5.5 9.5-5.5s7.9 1.5 9.5 5.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5a3 3 0 1 0-3-3" />
        </svg>
      );
    case "battery":
    default:
      return (
        <svg {...common}>
          <rect x="3" y="8" width="16" height="8" rx="2" />
          <path d="M21 10v4" strokeLinecap="round" />
          <path d="M6 12h7" strokeLinecap="round" />
        </svg>
      );
  }
};

const GlassChip = ({
  feature,
  className = "",
}: {
  feature: Feature;
  className?: string;
}) => {
  return (
    <div
      className={[
        "group flex items-center gap-2 rounded-2xl",
        "border border-white/12 bg-white/5 backdrop-blur",
        "px-3 py-2 text-white/85 shadow-[0_14px_35px_rgba(0,0,0,0.35)]",
        "transition duration-200 ease-out hover:-translate-y-[1px] hover:bg-white/8 hover:border-white/16",
        className,
      ].join(" ")}
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-black/20">
        <MiniIcon name={feature.icon} className="h-4 w-4 text-white/80" />
      </span>
      <span className="text-sm font-semibold">{feature.label}</span>
    </div>
  );
};

const GradientButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className={[
        "relative inline-flex items-center justify-center rounded-mcn-lg px-6 py-3 font-semibold text-white",
        "shadow-[0_18px_50px_rgba(0,0,0,0.35)] transition duration-200 ease-out",
        "hover:-translate-y-[1px]",
        "bg-[linear-gradient(135deg,rgba(229,0,0,0.95),rgba(255,140,0,0.95))]",
        "before:absolute before:inset-0 before:rounded-mcn-lg before:bg-white/10 before:opacity-0 before:transition",
        "hover:before:opacity-100",
      ].join(" ")}
    >
      <span className="relative">{children}</span>
    </button>
  );
};

export default function Home_SectionC_OrbitLayout() {
  const content = {
    kicker: { text: "EV Charging App", icon: "phone" as const },
    core: {
      heading: "Get 1C Charging App",
      subheading: "One App For All Activities",
      body: "Control all charging activities from single app in your phone.",
    },
    button: { label: "Get EV Charging App" },
    features: [
      { label: "Locate Chargers", icon: "map" },
      { label: "Start & Stop", icon: "zap" },
      { label: "Pay for Charging", icon: "card" },
      { label: "Join Community", icon: "users" },
      { label: "Battery Health", icon: "battery" },
    ] as Feature[],
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* White infra grid bg */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.9] bg-[linear-gradient(to_right,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.045)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute inset-0 opacity-[0.28] bg-[radial-gradient(rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:18px_18px]" />
        <div className="absolute -top-48 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-[rgba(47,107,255,0.10)] blur-3xl" />
        <div className="absolute -bottom-52 left-1/4 h-[560px] w-[560px] rounded-full bg-[rgba(47,107,255,0.10)] blur-3xl" />
      </div>

      <div className="container relative py-10 md:py-12">
        {/* Main glass card (black) */}
        <div
          className={[
            "relative rounded-mcn-xl p-8 md:p-12",
            "bg-[rgba(11,11,12,0.72)] backdrop-blur-mcn",
            "border border-[rgba(255,255,255,0.16)]",
            "shadow-[0_22px_70px_rgba(0,0,0,0.35)]",
          ].join(" ")}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
          <div className="pointer-events-none absolute inset-0 rounded-mcn-xl ring-1 ring-white/10" />

          {/* ====== Mobile/Tablet: Vertical Orbit ====== */}
          <div className="lg:hidden">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
              <MiniIcon name={content.kicker.icon} className="h-4 w-4 text-white/75" />
              {content.kicker.text}
            </div>

            <h2 className="mt-4 font-heading text-4xl tracking-tight text-white">
              {content.core.heading}
            </h2>
            <div className="mt-2 text-lg font-semibold text-white/85">{content.core.subheading}</div>
            <p className="mt-2 max-w-2xl text-sm text-white/70">{content.core.body}</p>

            {/* Phone sub-card */}
            <div className="mt-7 rounded-mcn-xl border border-white/12 bg-[rgba(17,17,20,0.86)] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.55)]">
              <div className="mx-auto w-full max-w-[420px]">
                {/* Placeholder phone — replace with your SVG/mock later */}
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[28px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
                  <div className="absolute inset-x-0 top-0 h-14 bg-white/5" />
                  <div className="absolute left-1/2 top-4 h-2 w-16 -translate-x-1/2 rounded-full bg-white/15" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-2 text-xs font-semibold text-white/75">
                      Phone Mock Placeholder
                    </div>
                  </div>
                </div>
              </div>

              {/* Vertical orbit nodes */}
              <div className="mt-6 grid gap-3">
                {content.features.map((f) => (
                  <GlassChip key={f.label} feature={f} />
                ))}
              </div>

              <div className="mt-6">
                <GradientButton>{content.button.label}</GradientButton>
              </div>
            </div>
          </div>

          {/* ====== Desktop: True Orbit ====== */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:items-center lg:gap-10">
            {/* Left copy */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                <MiniIcon name={content.kicker.icon} className="h-4 w-4 text-white/75" />
                {content.kicker.text}
              </div>

              <h2 className="mt-4 font-heading text-mt-up-5 tracking-tight text-white">
                {content.core.heading}
              </h2>

              <div className="mt-3 text-mt-up-2 font-semibold text-white/85">
                {content.core.subheading}
              </div>

              <p className="mt-3 max-w-md text-mt-up-1 text-white/70">{content.core.body}</p>

              <div className="mt-7">
                <GradientButton>{content.button.label}</GradientButton>
              </div>
            </div>

            {/* Right orbit stage */}
            <div className="lg:col-span-7">
              <div
                className={[
                  "relative overflow-hidden rounded-mcn-xl border border-white/12",
                  "bg-[rgba(17,17,20,0.86)] p-8",
                  "shadow-[0_18px_50px_rgba(0,0,0,0.55)]",
                ].join(" ")}
              >
                {/* subtle ring + glow */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6" />
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[rgba(18,184,214,0.18)] blur-3xl" />
                <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-[rgba(47,107,255,0.16)] blur-3xl" />

                {/* Orbit container */}
                <div className="relative mx-auto aspect-square w-full max-w-[680px]">
                  {/* Center phone (placeholder) */}
                  <div className="absolute left-1/2 top-1/2 w-[220px] -translate-x-1/2 -translate-y-1/2">
                    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[32px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] shadow-[0_24px_70px_rgba(0,0,0,0.55)]">
                      <div className="absolute inset-x-0 top-0 h-14 bg-white/5" />
                      <div className="absolute left-1/2 top-4 h-2 w-16 -translate-x-1/2 rounded-full bg-white/15" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-2 text-xs font-semibold text-white/75">
                          App UI Placeholder
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Orbit nodes (positioned) */}
                  <GlassChip
                    feature={content.features[0]}
                    className="absolute left-1/2 top-6 -translate-x-1/2"
                  />
                  <GlassChip
                    feature={content.features[1]}
                    className="absolute right-6 top-1/2 -translate-y-1/2"
                  />
                  <GlassChip
                    feature={content.features[2]}
                    className="absolute left-1/2 bottom-6 -translate-x-1/2"
                  />
                  <GlassChip
                    feature={content.features[3]}
                    className="absolute left-6 top-1/2 -translate-y-1/2"
                  />
                  <GlassChip
                    feature={content.features[4]}
                    className="absolute right-10 top-20"
                  />

                  {/* Optional: orbit connector lines (very subtle) */}
                  <svg
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <circle cx="50" cy="50" r="34" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6" />
                    <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
                  </svg>
                </div>

                {/* tiny helper row */}
                <div className="relative mt-6 flex items-center justify-between text-xs text-white/60">
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                      <MiniIcon name="phone" className="h-4 w-4 text-white/75" />
                    </span>
                    One app for all charging actions
                  </span>
                  <span className="hidden xl:inline">Locate • Control • Pay • Community • Battery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
