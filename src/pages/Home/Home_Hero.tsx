import React, { useMemo } from "react";
import { Search, Download, MapPin, Zap, ShieldCheck, CreditCard } from "lucide-react";

const PLAYSTORE_URL =
  "https://play.google.com/store/apps/details?id=in.one.charging&hl=en_IN";

const APPSTORE_URL =
  "https://apps.apple.com/in/app/1c-ev-charging/id6478754214";

// Public folder paths (copy your SVGs into /public and use these URLs)
const PLAY_BADGE_SRC = "/GetItOnGooglePlay_Badge_Web_color_English.svg";
const APP_BADGE_SRC = "/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917 (1).svg";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900">
      {/* Background (shared) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial Glows (electric) */}
        <div className="absolute -top-44 left-1/2 -translate-x-1/2 h-[640px] w-[640px] bg-cyan-400/25 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-0 h-[460px] w-[460px] bg-blue-500/20 blur-[150px] rounded-full" />

        {/* Subtle Cyber Grid (light) */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Soft vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
        <Hero02 />
      </div>
    </section>
  );
}

function LiveKicker() {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-slate-200 shadow-sm">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-30"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
      </span>
      <span className="text-sm tracking-wide text-slate-700">Charging Network Is Live</span>
      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 tracking-widest border border-emerald-500/20">
        LIVE
      </span>
    </div>
  );
}

/** HERO 02 — Buttons -> Badges -> Sponsored */
function Hero02() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Left: copy */}
      <div className="lg:col-span-6">
        <div className="mb-6">
          <LiveKicker />
        </div>

        <h1 className="text-4xl md:text-[52px] font-semibold leading-tight mb-5">
          Find Chargers{" "}
          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Anytime.
          </span>{" "}
          Anywhere.
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-xl mb-8">
          Live life at 100%
        </p>

        {/* LINE 1: Buttons */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-5">
          <button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300">
            <Search className="w-4 h-4" />
            Find Chargers
          </button>

          <a
            href={PLAYSTORE_URL}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-md hover:bg-white transition-all duration-300 shadow-sm"
          >
            <Download className="w-4 h-4" />
            Get App
          </a>
        </div>

        {/* LINE 2: Official Store Badges (SVG) */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-5">
          <StoreBadgeImage href={PLAYSTORE_URL} src={PLAY_BADGE_SRC} alt="Get it on Google Play" />
          <StoreBadgeImage href={APPSTORE_URL} src={APP_BADGE_SRC} alt="Download on the App Store" />
        </div>

        {/* LINE 3: Sponsored */}
        <div>
          <span className="inline-block px-4 py-2 text-xs tracking-wide rounded-full bg-white/70 backdrop-blur-md border border-slate-200 text-slate-600 shadow-sm">
            Sponsored by PayTm
          </span>
        </div>
      </div>

      {/* Right: stacked UI cards */}
      <div className="lg:col-span-6">
        <StackedCards />
      </div>
    </div>
  );
}

/**
 * Ratio-safe badge wrapper:
 * - fixed height (no stretching)
 * - image uses object-contain
 * - optional max width so huge SVGs don’t overflow
 */
function StoreBadgeImage({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-md hover:bg-white/80 transition-all duration-300 shadow-sm px-3 py-1.5"
      aria-label={alt}
    >
      <div className="h-10 sm:h-10 md:h-11 max-w-[200px]">
        <img
          src={src}
          alt={alt}
          className="h-full w-auto max-w-full object-contain"
          loading="lazy"
        />
      </div>
    </a>
  );
}

function StackedCards() {
  const rows = useMemo(
    () => [
      { name: "Massive Hub — Koramangala", distance: "1.2 km", status: "Available" },
      { name: "ION Station — Indiranagar", distance: "3.8 km", status: "2 slots" },
      { name: "Metro Charge — MG Road", distance: "5.1 km", status: "Open" },
    ],
    []
  );

  return (
    <div className="relative">
      {/* Soft frame */}
      <div className="absolute -inset-3 rounded-[28px] bg-white/60 backdrop-blur-md border border-slate-200 pointer-events-none shadow-sm" />

      <div className="relative p-5 md:p-6">
        <div className="relative h-[380px] md:h-[420px]">
          {/* Card 3 (back) */}
          <div className="absolute right-0 top-12 w-[92%] md:w-[84%] rotate-2">
            <CardShell>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-cyan-600/10 border border-cyan-600/15 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-cyan-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">PayTm Supported</p>
                    <p className="text-xs text-slate-600">Payments secure</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 text-[11px] px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>
            </CardShell>
          </div>

          {/* Card 2 (middle) */}
          <div className="absolute left-0 top-5 w-[92%] md:w-[86%] -rotate-1">
            <CardShell>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-blue-600/10 border border-blue-600/15 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Fastest available</p>
                    <p className="text-xs text-slate-600">DC fast • Nearby</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-semibold leading-none bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">
                    6
                  </p>
                  <p className="text-xs text-slate-600">available now</p>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
                  <span>Availability</span>
                  <span>~2 min refresh</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
                  <div className="h-full w-[62%] bg-gradient-to-r from-cyan-600/70 to-blue-700/70" />
                </div>
              </div>
            </CardShell>
          </div>

          {/* Card 1 (front) */}
          <div className="absolute right-0 top-24 w-[96%] md:w-[90%]">
            <CardShell highlight>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-emerald-600/10 border border-emerald-600/15 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Nearby chargers</p>
                    <p className="text-xs text-slate-600">Around you</p>
                  </div>
                </div>

                <span className="text-[11px] px-3 py-1 rounded-full bg-white/70 border border-slate-200 text-slate-600 backdrop-blur-md">
                  Live scan
                </span>
              </div>

              <div className="space-y-3">
                {rows.map((r, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-md px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-slate-900">{r.name}</p>
                      <p className="text-xs text-slate-600">{r.distance}</p>
                    </div>

                    <span className="text-[11px] px-3 py-1 rounded-full border border-cyan-600/20 bg-cyan-600/10 text-cyan-800">
                      {r.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between text-xs text-slate-600">
                <span>Updated just now</span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Network stable
                </span>
              </div>
            </CardShell>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardShell({
  children,
  highlight,
}: {
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-[22px] border bg-white/70 backdrop-blur-md shadow-sm",
        "border-slate-200",
        highlight ? "ring-1 ring-cyan-400/30" : "",
      ].join(" ")}
    >
      <div className="p-4 md:p-5">{children}</div>
    </div>
  );
}
