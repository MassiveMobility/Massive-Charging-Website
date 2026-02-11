import React, { useMemo } from "react";
import { Link } from "react-router-dom";

/**
 * NOTE (for future Tailwind tokens):
 * - "glass-black" styles are currently expressed via arbitrary values:
 *   bg-[rgba(...)] border-[rgba(...)] shadow-[...]
 *   Later you can convert these into your tailwind.config.js as:
 *   colors: { glass: { black: "rgba(...)" } } etc.
 * - same for monitor surface and glow shadows.
 */

const ChargerIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="14" y="6" width="20" height="30" rx="4" />
      <rect x="18" y="11" width="12" height="7" rx="2" />
      <path d="M24 20l-3 6h3l-2 6 5-8h-3l2-4z" />
      <circle cx="24" cy="31" r="1.8" />
      <path d="M34 16c3 1 5 4 5 7v8c0 3-2 5-5 5h-1" />
      <path d="M33 36h-4" />
    </svg>
  );
};

function formatINR(value: number) {
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  } catch {
    return `₹${Math.round(value).toLocaleString("en-IN")}`;
  }
}

export const HeroSection: React.FC = () => {
  const computed = useMemo(() => {
    // "computed" model stub — replace later with real calculator inputs
    const sessionsPerDay = 18;
    const avgRevenuePerSession = 150;
    const daysPerMonth = 30;
    const gross = sessionsPerDay * avgRevenuePerSession * daysPerMonth; // 81,000
    const rounded = Math.round(gross / 1000) * 1000;

    return { sessionsPerDay, avgRevenuePerSession, daysPerMonth, gross: rounded };
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* ================================
          White Infra Grid Background
          (Later: convert to a tailwind utility like bg-infra-grid)
         ================================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* faint grid */}
        <div className="absolute inset-0 opacity-[0.9] bg-[linear-gradient(to_right,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.045)_1px,transparent_1px)] bg-[size:56px_56px]" />

        {/* micro-dots (adds “engineering” texture). Optional. */}
        <div className="absolute inset-0 opacity-[0.28] bg-[radial-gradient(rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:18px_18px]" />

        {/* subtle top vignette */}
        <div className="absolute -top-48 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-[rgba(47,107,255,0.10)] blur-3xl" />

        {/* electricity glows */}
        <div className="absolute -top-44 right-1/4 h-[520px] w-[520px] rounded-full bg-[rgba(18,184,214,0.16)] blur-3xl" />
        <div className="absolute -bottom-52 left-1/4 h-[560px] w-[560px] rounded-full bg-[rgba(47,107,255,0.12)] blur-3xl" />
      </div>

      <div className="container relative py-10 md:py-12">
        {/* ================================
            HERO CARD — Black Glass
            (Later: make tokens: bg-mcn-glass-black, border-mcn-glass-stroke, shadow-mcn-glass)
           ================================= */}
        <div
          className={[
            "relative rounded-mcn-xl p-8 md:p-12",
            // black glass surface
            "bg-[rgba(11,11,12,0.72)] backdrop-blur-mcn",
            // faint border
            "border border-[rgba(255,255,255,0.16)]",
            // depth
            "shadow-[0_22px_70px_rgba(0,0,0,0.35)]",
            // motion
            "transition duration-normal ease-ease-out-standard hover:-translate-y-[1px] hover:shadow-[0_28px_90px_rgba(0,0,0,0.42)]",
          ].join(" ")}
        >
          {/* subtle scan line (electric / tech cue) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />

          {/* inner glow edge */}
          <div className="pointer-events-none absolute inset-0 rounded-mcn-xl ring-1 ring-white/10" />

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-7">
              {/* System status */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-mt-down-2 text-white/80">
                <span className="h-2 w-2 rounded-full bg-mcn-green animate-pulse" />
                Network ready · Payments enabled · Monitoring live
              </div>

              <h1 className="mt-4 font-heading text-mt-up-5 tracking-tight text-white">
                Start Your Charging Station
                <br />
                <span className="text-white/85">Run it like a business</span>
              </h1>

              <p className="mt-4 max-w-2xl text-mt-up-1 text-white/75">
                Launch a real charging operation—hardware, software, payments, monitoring, and support—
                so you can earn from every charging session with confidence.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/ev-charging-station-business"
                  className="inline-flex items-center justify-center rounded-mcn-lg bg-mcn-red px-6 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(229,0,0,0.22)] transition duration-fast ease-ease-out-standard hover:bg-mcn-red-hover"
                >
                  Discover Requirement
                </Link>

                <Link
                  to="/station-business"
                  className="inline-flex items-center justify-center rounded-mcn-lg border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white shadow-[0_10px_28px_rgba(0,0,0,0.25)] transition duration-fast ease-ease-out-standard hover:bg-white/10"
                >
                  Get Detailed Guide
                </Link>
              </div>

              {/* micro trust chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["AC / DC options", "App + Billing", "Remote monitoring", "Operator payouts"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-mt-down-2 text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: “Monitor” dashboard card */}
            <div className="lg:col-span-5">
              <div
                className={[
                  "relative overflow-hidden rounded-mcn-xl p-6",
                  // monitor surface (slightly different than hero card for contrast)
                  // Later token: bg-mcn-monitor, border-mcn-monitor-stroke
                  "bg-[rgba(17,17,20,0.86)] border border-[rgba(255,255,255,0.12)]",
                  "shadow-[0_18px_50px_rgba(0,0,0,0.55)]",
                ].join(" ")}
              >
                {/* monitor glow accents */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[rgba(18,184,214,0.18)] blur-3xl" />
                <div className="pointer-events-none absolute -left-16 -bottom-16 h-44 w-44 rounded-full bg-[rgba(47,107,255,0.16)] blur-3xl" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-mcn-lg border border-white/10 bg-white/5">
                        <ChargerIcon className="h-7 w-7 text-white/90" />
                      </span>
                      <div>
                        <div className="text-mt-down-1 font-semibold text-white/90">
                          Operator Dashboard
                        </div>
                        <div className="text-mt-down-2 text-white/65">
                          Live status · sessions · payouts
                        </div>
                      </div>
                    </div>

                    <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-mt-down-2 font-semibold text-white/70">
                      Computed
                    </span>
                  </div>

                  {/* computed ₹ */}
                  <div className="mt-6">
                    <div className="text-mt-down-1 text-white/65">
                      Estimated monthly earning
                    </div>

                    <div className="mt-1 font-heading text-pf-up-3 tracking-tight text-[rgba(74,222,128,0.95)]">
                      {formatINR(computed.gross)}+
                    </div>

                    <div className="mt-1 text-mt-down-1 text-white/60">
                      ~{computed.sessionsPerDay} sessions/day × ₹{computed.avgRevenuePerSession}/session
                    </div>
                  </div>

                  {/* KPI tiles (monitor feel) */}
                  <div className="mt-6 grid grid-cols-2 gap-3 text-mt-down-1">
                    {[
                      { k: "Uptime", v: "99.2%", hint: "last 7 days" },
                      { k: "Sessions", v: "18/day", hint: "avg" },
                      { k: "Tariff", v: "₹/kWh", hint: "configurable" },
                      { k: "Payouts", v: "Weekly", hint: "settlements" },
                    ].map((x) => (
                      <div
                        key={x.k}
                        className="rounded-mcn-lg border border-white/10 bg-white/5 p-3"
                      >
                        <div className="text-white/70">{x.k}</div>
                        <div className="mt-1 font-semibold text-white/90">{x.v}</div>
                        <div className="mt-1 text-mt-down-2 text-white/55">{x.hint}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-3 text-mt-down-1 text-white/60">
  *Earnings vary by location, utilization, tariff, and charger type.
</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
