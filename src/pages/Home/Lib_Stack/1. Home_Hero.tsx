import React from "react";
import { Search, Download } from "lucide-react";

export default function ImmersiveGateway() {
  return (
    <section className="relative overflow-hidden bg-mcn-ink-bg text-mcn-ink-text-primary">
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] bg-cyan-500/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-blue-600/20 blur-[140px] rounded-full" />

        {/* Cyber Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
        {/* Kicker - Live Status */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-mcn-ink-glass backdrop-blur-mcn border border-mcn-ink-stroke-soft shadow-mcn-ink-overlay mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
          </span>
          <span className="text-sm tracking-wide text-mcn-ink-text-secondary">
            Charging Network Is Live
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 tracking-widest">
            LIVE
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-pf-up-5 md:text-[56px] font-heading font-semibold leading-tight mb-6">
          Find Chargers{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Anytime.
          </span>{" "}
          Anywhere.
        </h1>

        {/* Subheading */}
        <p className="text-mt-up-2 text-mcn-ink-text-secondary max-w-2xl mx-auto mb-10">
          Live life at 100%
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="group inline-flex items-center gap-2 px-7 py-3 rounded-mcn-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg hover:scale-[1.03] transition-all duration-300">
            <Search className="w-4 h-4" />
            Find Chargers
          </button>

          <button className="inline-flex items-center gap-2 px-7 py-3 rounded-mcn-xl border border-mcn-ink-stroke-soft bg-mcn-ink-surface hover:bg-mcn-ink-surface/70 transition-all duration-300">
            <Download className="w-4 h-4" />
            Get App
          </button>
        </div>

        {/* Sponsor Pill */}
        <div className="mb-10">
          <span className="inline-block px-4 py-2 text-xs tracking-wide rounded-full bg-mcn-ink-glass backdrop-blur-mcn border border-mcn-ink-stroke-soft text-mcn-ink-text-secondary">
            Sponsored by PayTm
          </span>
        </div>

        {/* Store Badges (Text-based, image-free) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="px-5 py-3 rounded-mcn-xl border border-mcn-ink-stroke-soft bg-mcn-ink-surface hover:border-cyan-500/50 transition-all duration-300">
            <p className="text-xs text-mcn-ink-text-secondary">Get it from</p>
            <p className="text-sm font-medium tracking-wide">Playstore</p>
          </div>

          <div className="px-5 py-3 rounded-mcn-xl border border-mcn-ink-stroke-soft bg-mcn-ink-surface hover:border-blue-500/50 transition-all duration-300">
            <p className="text-xs text-mcn-ink-text-secondary">Get it from</p>
            <p className="text-sm font-medium tracking-wide">Appstore</p>
          </div>
        </div>
      </div>
    </section>
  );
}
