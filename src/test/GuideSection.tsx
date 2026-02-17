import React from "react";

function OpenBookIconSVG() {
  return (
    <div className="mx-auto w-full max-w-[360px]">
      <svg viewBox="0 0 240 180" className="h-auto w-full" role="img" aria-label="Open book">
        <path
          d="M120 42 C98 28, 70 26, 44 34 C36 36, 32 44, 32 52 V140 C32 148, 38 154, 46 152 C72 146, 98 150, 120 162 Z"
          fill="rgba(255,255,255,0.55)"
          stroke="rgba(0,0,0,0.18)"
          strokeWidth="2"
        />
        <path
          d="M120 42 C142 28, 170 26, 196 34 C204 36, 208 44, 208 52 V140 C208 148, 202 154, 194 152 C168 146, 142 150, 120 162 Z"
          fill="rgba(255,255,255,0.55)"
          stroke="rgba(0,0,0,0.18)"
          strokeWidth="2"
        />
        <path d="M120 42 V162" stroke="rgba(0,0,0,0.22)" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M52 64 H108 M52 80 H108 M52 96 H104 M52 112 H100"
          stroke="rgba(0,0,0,0.18)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M132 64 H188 M132 80 H188 M132 96 H184 M132 112 H180"
          stroke="rgba(0,0,0,0.18)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default function GuideSection() {
  return (
    <section id="ev-charging-guide" className="min-h-screen bg-white text-mcn-text-primary flex items-center">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="lg:flex-1">
            <div className="inline-flex items-center rounded-full border border-mcn-stroke-soft bg-white/60 px-3 py-1 text-mt-down-1 text-mcn-text-muted">
              2W, 3W, 4W
            </div>
            <h2 className="mt-5 font-heading text-pf-up-4">Own an EV or Planning to Buy One?</h2>
            <p className="mt-4 text-mt-up-1 text-mcn-text-secondary">
              Confused about Charging Cost & Required Infrastructure?
            </p>
            <p className="mt-3 text-mt-base text-mcn-text-faint">
              Get Detailed Charging Guide for your Vehicles
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Costs", "Infrastructure", "Charging Types", "Best Practices"].map((t) => (
                <span
                  key={t}
                  className="rounded-pill border border-mcn-stroke-soft bg-white/60 px-3 py-1 text-mt-down-1 text-mcn-text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7">
              <a
                href="/charging-guide"
                className="inline-flex items-center justify-center rounded-mcn-lg bg-mcn-red px-6 py-3 text-white shadow-mcn-card transition-mcn hover:bg-mcn-red-hover"
              >
                Explore Charging Guide
              </a>
            </div>
          </div>

          <div className="lg:w-[420px]">
            <div className="rounded-mcn-xl border border-mcn-stroke-soft bg-white/70 p-6 shadow-mcn-card text-center">
              <div className="text-mt-down-1 text-mcn-text-muted">Guide snapshot</div>
              <div className="mt-4 rounded-mcn border border-mcn-stroke-soft bg-white/80 px-4 py-4">
                <div className="text-mt-base text-mcn-text-primary">Charging Guide</div>
                <div className="mt-1 text-mt-down-1 text-mcn-text-muted">
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
