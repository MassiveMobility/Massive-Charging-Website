import React from "react";

function OpenBookIconSVG() {
  return (
    <div className="mx-auto w-full max-w-[360px]">
      <svg viewBox="0 0 240 180" className="h-auto w-full" role="img" aria-label="Open book">
        <path
          d="M120 42 C98 28, 70 26, 44 34 C36 36, 32 44, 32 52 V140 C32 148, 38 154, 46 152 C72 146, 98 150, 120 162 Z"
          fill="rgba(255,255,255,0.35)"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="2"
        />
        <path
          d="M120 42 C142 28, 170 26, 196 34 C204 36, 208 44, 208 52 V140 C208 148, 202 154, 194 152 C168 146, 142 150, 120 162 Z"
          fill="rgba(255,255,255,0.35)"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="2"
        />
        <path d="M120 42 V162" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M52 64 H108 M52 80 H108 M52 96 H104 M52 112 H100"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M132 64 H188 M132 80 H188 M132 96 H184 M132 112 H180"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default function GuideSectionDark() {
  return (
    <section id="ev-charging-guide" className="relative min-h-screen overflow-hidden text-mcn-ink-text-primary flex items-center">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#121418]" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_10%,rgba(0,209,255,0.10),transparent_60%),radial-gradient(900px_520px_at_80%_20%,rgba(30,255,136,0.08),transparent_62%),radial-gradient(1100px_700px_at_50%_110%,rgba(37,99,235,0.14),transparent_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0.00),rgba(255,255,255,0.02))]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] opacity-[0.10]" />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 py-28">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="lg:flex-1">
            <div className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-3 py-1 text-mt-down-1 text-white/70">
              2W, 3W, 4W
            </div>
            <h2 className="mt-5 font-heading text-pf-up-4 text-white">Own an EV or Planning to Buy One?</h2>
            <p className="mt-4 text-mt-up-1 text-white/75">
              Confused about Charging Cost & Required Infrastructure?
            </p>
            <p className="mt-3 text-mt-base text-white/60">
              Get Detailed Charging Guide for your Vehicles
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Costs", "Infrastructure", "Charging Types", "Best Practices"].map((t) => (
                <span
                  key={t}
                  className="rounded-pill border border-white/12 bg-white/5 px-3 py-1 text-mt-down-1 text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7">
              <a
                href="/charging-guide"
                className="inline-flex items-center justify-center rounded-mcn-lg bg-mcn-red px-6 py-3 text-white shadow-[0_10px_30px_rgba(229,0,0,0.22)] transition duration-fast ease-ease-out-standard hover:bg-mcn-red-hover"
              >
                Explore Charging Guide
              </a>
            </div>
          </div>

          <div className="lg:w-[420px]">
            <div className="rounded-mcn-xl border border-white/12 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.45)] text-center backdrop-blur-md">
              <div className="text-mt-down-1 text-white/65">Guide snapshot</div>
              <div className="mt-4 rounded-mcn border border-white/12 bg-white/5 px-4 py-4">
                <div className="text-mt-base text-white">Charging Guide</div>
                <div className="mt-1 text-mt-down-1 text-white/70">
                  Practical checklists and cost planning for new EV owners.
                </div>
              </div>
              <div className="mt-3">
                <OpenBookIconSVG />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
