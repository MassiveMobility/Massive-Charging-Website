import React, { useState } from "react";
import WhyMassiveHero from "./WhyMassiveHero";
import WhyMassiveCardsSection from "./WhyMassiveCardsSection";

function DarkSectionBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#121418]" />
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_10%,rgba(0,209,255,0.10),transparent_60%),radial-gradient(900px_520px_at_80%_20%,rgba(30,255,136,0.08),transparent_62%),radial-gradient(1100px_700px_at_50%_110%,rgba(37,99,235,0.14),transparent_62%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0.00),rgba(255,255,255,0.02))]" />
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] opacity-[0.10]" />
    </div>
  );
}

export default function WhyMassiveSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc]">

      {/* VERY subtle midnight tint */}
      <div className="pointer-events-none absolute inset-0 bg-[#0f172a]/5" />

      {/* Soft grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15,23,42,0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15,23,42,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Soft cyan glow */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,209,255,0.12), transparent 60%)",
        }}
      />

      {/* Soft green glow */}
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(30,255,136,0.10), transparent 60%)",
        }}
      />

      <div className="relative">
        <WhyMassiveHero />
        <WhyMassiveCardsSection />
      </div>
    </section>
  );
}

export function WhyMassiveSectionFresh() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      {/* Section 1 - Light */}
      <section className="relative min-h-[60vh] overflow-hidden bg-white flex items-center">
        {/* Subtle hero-style glow + grid (like flathome hero) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-36 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-electric-glow-cyan blur-[140px] opacity-60" />
          <div className="absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-electric-glow-ionBlue blur-[140px] opacity-60" />
          <div
            className="absolute inset-0 opacity-[0.2]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative w-full max-w-[1280px] mx-auto px-6 py-28 text-center">
          <WhyMassiveHero tone="light" />
          <div className="mt-10 flex justify-end">
            <button
              type="button"
              onClick={() => {
                setExpanded((v) => {
                  const next = !v;
                  if (next) {
                    setTimeout(() => {
                      document
                        .getElementById("why-massive-more")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 0);
                  }
                  return next;
                });
              }}
              className="inline-flex items-center gap-2 rounded-mcn-lg border border-mcn-stroke-soft bg-white/70 px-3 py-2 text-mt-down-1 font-semibold text-mcn-text-primary shadow-mcn-soft transition duration-fast ease-ease-out-standard hover:bg-white"
            >
              {expanded ? "Collapse" : "Read More"} →
            </button>
          </div>
        </div>
      </section>

      {expanded && (
        <section id="why-massive-more" className="relative min-h-screen overflow-hidden bg-white flex items-center">
          {/* Subtle continuation glow + grid */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 left-1/3 h-[480px] w-[480px] rounded-full bg-electric-glow-cyan blur-[140px] opacity-45" />
            <div className="absolute -bottom-36 right-1/4 h-[420px] w-[420px] rounded-full bg-electric-glow-ionBlue blur-[140px] opacity-45" />
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 py-28">
            <WhyMassiveCardsSection tone="light" />
            <div className="mt-10 flex justify-end">
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="inline-flex items-center gap-2 rounded-mcn-lg border border-mcn-stroke-soft bg-white/70 px-3 py-2 text-mt-down-1 font-semibold text-mcn-text-primary shadow-mcn-soft transition duration-fast ease-ease-out-standard hover:bg-white"
              >
                Collapse →
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
