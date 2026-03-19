import React from "react";
import { Link } from "react-router-dom";

/**
 * Option 3: Animated flip preview booklet (no external image)
 * - subtle 3D tilt on hover
 * - page-corner fold
 * - sheen sweep
 * - floating shadow
 * - matches Hero-style CTA button
 */

function GuideBookletMock({
  pill = "2W, 3W, 4W",
}: {
  pill?: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      {/* Hover group */}
      <div className="group relative">
        {/* Floating shadow */}
        <div className="pointer-events-none absolute -bottom-6 left-1/2 h-10 w-[78%] -translate-x-1/2 rounded-full bg-black/25 blur-xl transition duration-300 group-hover:bg-black/35" />

        {/* Book wrapper (3D tilt) */}
        <div
          className={[
            "relative overflow-hidden rounded-[28px]",
            "border border-black/10 bg-white/45 backdrop-blur-mcn",
            "shadow-[0_22px_70px_rgba(0,0,0,0.16)]",
            "transition duration-300 ease-out",
            "group-hover:-translate-y-1",
          ].join(" ")}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* 3D tilt on hover */}
          <div
            className="relative transition duration-300 ease-out group-hover:[transform:perspective(900px)_rotateY(-10deg)_rotateX(6deg)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Subtle background inside */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-white/30" />

            {/* “Spine” */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.02))]" />
            <div className="pointer-events-none absolute left-7 top-0 h-full w-px bg-black/10" />

            {/* Cover content */}
            <div className="relative p-6 md:p-7">
              {/* top chips */}
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-black/70">
                  Free Guide
                </span>
                <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-black/70">
                  {pill}
                </span>
              </div>

              {/* Title block */}
              <div className="mt-6">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/50">
                  Massive Charging Network
                </div>
                <div className="mt-2 font-heading text-2xl tracking-tight text-black md:text-3xl">
                  EV Charging Guide
                </div>
                <div className="mt-2 text-sm font-semibold text-black/65">
                  Costs • Infrastructure • Setup
                </div>
              </div>

              {/* Decorative “sections” */}
              <div className="mt-7 grid gap-3">
                {[
                  "Charging Cost Breakdown",
                  "Home vs Public Charging",
                  "Station Setup Checklist",
                  "Safety & Load Planning",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/55 px-4 py-3"
                  >
                    <span className="text-sm font-semibold text-black/75">{t}</span>
                    <span className="text-xs font-bold text-black/35">›</span>
                  </div>
                ))}
              </div>

              {/* Bottom meta */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs font-semibold text-black/45">PDF • 32 pages</span>
                <span className="text-xs font-semibold text-black/45">Updated</span>
              </div>
            </div>

            {/* Page corner fold */}
            <div className="pointer-events-none absolute right-0 top-0 h-24 w-24">
              <div
                className={[
                  "absolute right-0 top-0 h-24 w-24",
                  "bg-[linear-gradient(135deg,rgba(255,255,255,0.85),rgba(0,0,0,0.03))]",
                  "border-l border-b border-black/10",
                  "origin-top-right",
                  "transition duration-300 ease-out",
                  "group-hover:rotate-[10deg]",
                ].join(" ")}
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                }}
              />
            </div>

            {/* Sheen sweep */}
            <div
              className={[
                "pointer-events-none absolute inset-y-0 -left-1/2 w-1/2",
                "bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)]",
                "opacity-0 group-hover:opacity-100",
                "transition-opacity duration-300",
              ].join(" ")}
              style={{
                transform: "skewX(-18deg)",
                animation: "mcn-sheen 1.1s ease-out forwards",
              }}
            />

            {/* Edge highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-black/10" />
          </div>
        </div>
      </div>

      {/* Local keyframes */}
      <style>{`
        @keyframes mcn-sheen {
          0%   { transform: translateX(-30%) skewX(-18deg); opacity: 0; }
          15%  { opacity: 1; }
          100% { transform: translateX(220%) skewX(-18deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default function Home_SectionE_Education() {
  const content = {
    heading: "Own an EV or Planning to Buy One?",
    subheading: "Confused about Charging Cost & Required Infrastructure?",
    body: "Get Detailed Charging Guide for your Vehicles",
    cta: "Explore Charging Guide",
    pill: "2W, 3W, 4W",
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* White infra grid background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.9] bg-[linear-gradient(to_right,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.045)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute inset-0 opacity-[0.28] bg-[radial-gradient(rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:18px_18px]" />
        <div className="absolute -top-44 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-[rgba(47,107,255,0.10)] blur-3xl" />
        <div className="absolute -bottom-56 left-1/4 h-[560px] w-[560px] rounded-full bg-[rgba(47,107,255,0.08)] blur-3xl" />
      </div>

      <div className="container relative py-10 md:py-12">
        {/* Paper + glass card */}
        <div
          className={[
            "relative overflow-hidden rounded-mcn-xl p-6 md:p-10",
            "bg-mcn-surface3 backdrop-blur-mcn",
            "border border-mcn-stroke-soft",
            "shadow-mcn-card",
          ].join(" ")}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-white/40" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            {/* Left: text */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center rounded-full border border-mcn-stroke-soft bg-white/60 px-3 py-1 text-mt-down-1 font-semibold text-mcn-text-muted">
                {content.pill}
              </div>

              {/* Heading promoted */}
              <h2 className="mt-4 font-heading text-mt-up-4 tracking-tight text-mcn-text-primary">
                {content.heading}
              </h2>

              <div className="mt-3 text-mt-up-1 font-semibold text-mcn-text-secondary">
                {content.subheading}
              </div>

              <p className="mt-3 max-w-2xl text-mt-base text-mcn-text-faint">
                {content.body}
              </p>

              {/* Hero-style CTA */}
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/charging-guide"
                  className="inline-flex items-center justify-center rounded-mcn-lg bg-mcn-red px-6 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(229,0,0,0.18)] transition duration-fast ease-ease-out-standard hover:bg-mcn-red-hover"
                >
                  {content.cta}
                </Link>
              </div>

              {/* Micro trust chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Costs", "Infrastructure", "Charging Types", "Best Practices"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-mcn-stroke-soft bg-white/55 px-3 py-1 text-mt-down-1 text-mcn-text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: animated booklet */}
            <div className="lg:col-span-5">
              <GuideBookletMock pill={content.pill} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
