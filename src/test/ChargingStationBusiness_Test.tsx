import React from "react";
import {
  ArrowRight,
  BatteryCharging,
  CreditCard,
  MapPin,
  Monitor,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function ChargingStationBusiness_Test() {
  return (
    <div className="bg-mcn-bg text-mcn-text-primary">
      {/* HERO (flathome-style) */}
      <section className="relative min-h-screen overflow-hidden bg-white flex items-center">
        <div className="absolute inset-0 pointer-events-none">
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

        <div className="relative container mx-auto px-4 md:px-6 py-20 md:py-28">
          <div className="grid gap-8 desktop:grid-cols-12 items-center">
            <div className="desktop:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-mcn-stroke-soft bg-white/70 px-3 py-1 text-mt-down-1 text-mcn-text-muted">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-mcn-green" />
                Charging Station Business
              </div>

              <h1 className="mt-4 font-heading text-pf-up-4 md:text-pf-up-5 leading-tight">
                Start Your EV Charging Station.
                <br />
                Operate it like a business.
              </h1>
              <p className="mt-3 text-mt-up-1 text-mcn-text-secondary max-w-xl">
                Hardware, software, payments, and operations in one operator-grade setup.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/ev-charging-station-business#choose"
                  className="inline-flex items-center gap-2 rounded-mcn-lg bg-mcn-red px-6 py-3 text-white shadow-mcn-card transition-mcn hover:bg-mcn-red-hover"
                >
                  Discover Requirements
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="/ev-charging-station-business#how-it-works"
                  className="inline-flex items-center gap-2 rounded-mcn-lg border border-mcn-stroke-soft bg-white/70 px-6 py-3 text-mcn-text-primary shadow-mcn-soft transition-mcn hover:bg-white"
                >
                  Download Guide
                </a>
              </div>
            </div>

            <div className="desktop:col-span-6">
              <div className="rounded-mcn-xl border border-mcn-stroke-soft bg-white/70 backdrop-blur-mcn p-6 shadow-mcn-card">
                <div className="text-mt-down-1 text-mcn-text-muted">Operator snapshots</div>
                <div className="mt-4 grid gap-3">
                  {[
                    { label: "Monthly revenue", value: "₹ 80k+" },
                    { label: "Utilization", value: "68–74%" },
                    { label: "Uptime", value: "99.2%" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-mcn border border-mcn-stroke-soft bg-white/70 px-4 py-3"
                    >
                      <span className="text-mt-down-1 text-mcn-text-muted">{item.label}</span>
                      <span className="font-mono text-mt-down-1 text-mcn-text-primary">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 - DARK */}
      <section className="relative min-h-screen overflow-hidden text-mcn-ink-text-primary flex items-center">
        <div className="absolute inset-0 bg-[#121418]" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_10%,rgba(0,209,255,0.10),transparent_60%),radial-gradient(900px_520px_at_80%_20%,rgba(30,255,136,0.08),transparent_62%),radial-gradient(1100px_700px_at_50%_110%,rgba(37,99,235,0.14),transparent_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0.00),rgba(255,255,255,0.02))]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] opacity-[0.10]" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 py-20 md:py-24">
          <div className="grid gap-10 desktop:grid-cols-12 items-center">
            <div className="desktop:col-span-6">
              <h2 className="font-heading text-pf-up-4">Setup & Compliance</h2>
              <p className="mt-4 text-mt-up-1 text-mcn-ink-text-secondary">
                Site feasibility, electrical readiness, safety compliance, and commissioning support.
              </p>
            </div>
            <div className="desktop:col-span-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: <MapPin className="h-5 w-5" />, label: "Site feasibility" },
                  { icon: <Zap className="h-5 w-5" />, label: "Power planning" },
                  { icon: <ShieldCheck className="h-5 w-5" />, label: "Safety checks" },
                  { icon: <BatteryCharging className="h-5 w-5" />, label: "Commissioning" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="mx-6 my-3 rounded-mcn-lg border border-mcn-ink-stroke-soft bg-mcn-ink-surface px-6 py-4"
                  >
                    <div className="text-mcn-ink-text-primary">{item.icon}</div>
                    <div className="mt-3 text-mt-base text-mcn-ink-text-secondary">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - LIGHT */}
      <section className="min-h-screen bg-white text-mcn-text-primary flex items-center">
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-24">
          <div className="grid gap-10 desktop:grid-cols-12 items-center">
            <div className="desktop:col-span-6">
              <h2 className="font-heading text-pf-up-4">Payments & Settlements</h2>
              <p className="mt-4 text-mt-up-1 text-mcn-text-secondary">
                Unified billing, automated payouts, and transparent revenue reporting.
              </p>
            </div>
            <div className="desktop:col-span-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: <CreditCard className="h-5 w-5" />, label: "UPI + Cards" },
                  { icon: <Monitor className="h-5 w-5" />, label: "Live settlements" },
                  { icon: <Zap className="h-5 w-5" />, label: "Tariff control" },
                  { icon: <ShieldCheck className="h-5 w-5" />, label: "Invoice trail" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="mx-6 my-3 rounded-mcn-lg border border-mcn-stroke-soft bg-mcn-surface2 px-6 py-4 shadow-mcn-soft"
                  >
                    <div className="text-mcn-text-primary">{item.icon}</div>
                    <div className="mt-3 text-mt-base text-mcn-text-secondary">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - DARK */}
      <section className="relative min-h-screen overflow-hidden text-mcn-ink-text-primary flex items-center">
        <div className="absolute inset-0 bg-[#121418]" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_10%,rgba(0,209,255,0.10),transparent_60%),radial-gradient(900px_520px_at_80%_20%,rgba(30,255,136,0.08),transparent_62%),radial-gradient(1100px_700px_at_50%_110%,rgba(37,99,235,0.14),transparent_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0.00),rgba(255,255,255,0.02))]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] opacity-[0.10]" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 py-20 md:py-24">
          <div className="grid gap-10 desktop:grid-cols-12 items-center">
            <div className="desktop:col-span-6">
              <h2 className="font-heading text-pf-up-4">Operations & Support</h2>
              <p className="mt-4 text-mt-up-1 text-mcn-ink-text-secondary">
                Monitoring, SLA-backed service, and operator dashboards.
              </p>
            </div>
            <div className="desktop:col-span-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: <Monitor className="h-5 w-5" />, label: "Live monitoring" },
                  { icon: <ShieldCheck className="h-5 w-5" />, label: "Service support" },
                  { icon: <Zap className="h-5 w-5" />, label: "Remote control" },
                  { icon: <BatteryCharging className="h-5 w-5" />, label: "Uptime alerts" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="mx-6 my-3 rounded-mcn-lg border border-mcn-ink-stroke-soft bg-mcn-ink-surface px-6 py-4"
                  >
                    <div className="text-mcn-ink-text-primary">{item.icon}</div>
                    <div className="mt-3 text-mt-base text-mcn-ink-text-secondary">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - LIGHT CTA */}
      <section className="min-h-screen bg-white text-mcn-text-primary flex items-center">
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-24 text-center">
          <h2 className="font-heading text-pf-up-4">Ready to launch your station?</h2>
          <p className="mt-4 text-mt-up-1 text-mcn-text-secondary max-w-2xl mx-auto">
            Book a site survey or request the detailed requirements list to get started.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href="/ev-charging-station-business#how-it-works"
              className="inline-flex items-center gap-2 rounded-mcn-lg bg-mcn-red px-6 py-3 text-white shadow-mcn-card transition-mcn hover:bg-mcn-red-hover"
            >
              Book site survey
            </a>
            <a
              href="/ev-charging-station-business#how-it-works"
              className="inline-flex items-center gap-2 rounded-mcn-lg border border-mcn-stroke-soft bg-white/70 px-6 py-3 text-mcn-text-primary shadow-mcn-soft transition-mcn hover:bg-white"
            >
              Download requirements
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
