import React from "react";
import { Link } from "react-router-dom";

/** Simple SVG Icon: Open Flip-Book (no text, no extras) */
function OpenBookIconSVG() {
  return (
    <div className="mx-auto w-full max-w-[420px]">
      <div className="flex items-center justify-center">
        <svg
          viewBox="0 0 240 180"
          className="h-auto w-full max-w-[320px]"
          role="img"
          aria-label="Open book"
        >
          {/* Left page */}
          <path
            d="M120 42
               C98 28, 70 26, 44 34
               C36 36, 32 44, 32 52
               V140
               C32 148, 38 154, 46 152
               C72 146, 98 150, 120 162
               Z"
            fill="rgba(255,255,255,0.55)"
            stroke="rgba(0,0,0,0.18)"
            strokeWidth="2"
          />

          {/* Right page */}
          <path
            d="M120 42
               C142 28, 170 26, 196 34
               C204 36, 208 44, 208 52
               V140
               C208 148, 202 154, 194 152
               C168 146, 142 150, 120 162
               Z"
            fill="rgba(255,255,255,0.55)"
            stroke="rgba(0,0,0,0.18)"
            strokeWidth="2"
          />

          {/* Center crease */}
          <path
            d="M120 42 V162"
            stroke="rgba(0,0,0,0.22)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Simple page lines (left) */}
          <path
            d="M52 64 H108
               M52 80 H108
               M52 96 H104
               M52 112 H100"
            stroke="rgba(0,0,0,0.18)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Simple page lines (right) */}
          <path
            d="M132 64 H188
               M132 80 H188
               M132 96 H184
               M132 112 H180"
            stroke="rgba(0,0,0,0.18)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
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

      <div className="container relative py-8 md:py-10">
        {/* Paper + glass card */}
        <div
          className={[
            "relative overflow-hidden rounded-mcn-xl p-5 md:p-8",
            "bg-mcn-surface3 backdrop-blur-mcn",
            "border border-mcn-stroke-soft",
            "shadow-mcn-card",
          ].join(" ")}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-white/40" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />

          <div className="relative grid items-center gap-8 lg:grid-cols-12">
            {/* Left: text */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center rounded-full border border-mcn-stroke-soft bg-white/60 px-3 py-1 text-mt-down-1 font-semibold text-mcn-text-muted">
                {content.pill}
              </div>

              <h2 className="mt-3 font-heading text-mt-up-4 tracking-tight text-mcn-text-primary">
                {content.heading}
              </h2>

              <div className="mt-2 text-mt-up-1 font-semibold text-mcn-text-secondary">
                {content.subheading}
              </div>

              <p className="mt-2 max-w-2xl text-mt-base text-mcn-text-faint">
                {content.body}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/charging-guide"
                  className="inline-flex items-center justify-center rounded-mcn-lg bg-mcn-red px-5 py-2.5 font-semibold text-white shadow-[0_10px_30px_rgba(229,0,0,0.18)] transition duration-fast ease-ease-out-standard hover:bg-mcn-red-hover"
                >
                  {content.cta}
                </Link>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Costs", "Infrastructure", "Charging Types", "Best Practices"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-mcn-stroke-soft bg-white/55 px-3 py-1 text-mt-down-1 text-mcn-text-muted"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Right: simple SVG open book */}
            <div className="hidden lg:col-span-5 lg:block">
  <OpenBookIconSVG />
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
