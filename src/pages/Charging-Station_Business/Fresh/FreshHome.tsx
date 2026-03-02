import React from "react";
import { Link } from "react-router-dom";
import { WhyMassiveSectionFresh } from "../WhyMassiveSection";
import HowItWorksSection from "./HowItWorksSection";
import ChooseSetupSection from "./ChooseSetupSection";
import FifthScroll from "../../FrontPage/FifthScroll";

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

export default function ChargingBusinessFreshHome() {
  return (
    <div className="min-h-screen bg-[#121418] text-mcn-ink-text-primary">
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <DarkSectionBackdrop />
        <div className="relative z-10 container mx-auto px-6 py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-mt-down-1 text-white/80">
                <span className="h-2 w-2 rounded-full bg-mcn-green animate-pulse" />
                Charging Station Business
              </div>

              <h1 className="mt-5 font-heading text-pf-up-4 text-white">
                Start Your Charging Station
                <br />
                <span className="text-white/80">Run it like a business</span>
              </h1>

              <p className="mt-4 max-w-2xl text-mt-up-1 text-white/75">
                Hardware, software, payments, monitoring, and support — built for real operations.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/ev-charging-station-business#choose"
                  className="inline-flex items-center justify-center rounded-mcn-lg bg-mcn-red px-6 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(229,0,0,0.22)] transition duration-fast ease-ease-out-standard hover:bg-mcn-red-hover"
                >
                  Discover Requirement
                </Link>

                <Link
                  to="/ev-charging-station-business#choose"
                  className="inline-flex items-center justify-center rounded-mcn-lg border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white shadow-[0_10px_28px_rgba(0,0,0,0.25)] transition duration-fast ease-ease-out-standard hover:bg-white/10"
                >
                  Get Detailed Guide
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["App + Payments + Billing", "Remote monitoring", "Installation & maintenance", "AC / DC options", "Operator payouts"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-mt-down-2 text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: monitor card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-mcn-xl p-6 bg-[rgba(17,17,20,0.86)] border border-[rgba(255,255,255,0.12)] shadow-[0_18px_50px_rgba(0,0,0,0.55)]">
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[rgba(18,184,214,0.18)] blur-3xl" />
                <div className="pointer-events-none absolute -left-16 -bottom-16 h-44 w-44 rounded-full bg-[rgba(47,107,255,0.16)] blur-3xl" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-mcn-lg border border-white/10 bg-white/5">
                        <ChargerIcon className="h-7 w-7 text-white/90" />
                      </span>
                      <div>
                        <div className="text-mt-down-1 font-semibold text-white/90">Operator Dashboard</div>
                        <div className="text-mt-down-2 text-white/65">Live status · sessions · payouts</div>
                      </div>
                    </div>
                    <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-mt-down-2 font-semibold text-white/70">
                      Computed
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="text-mt-down-1 text-white/65">Estimated monthly earning</div>
                    <div className="mt-1 font-heading text-pf-up-3 tracking-tight text-[rgba(74,222,128,0.95)]">
                      ₹ 80,000+
                    </div>
                    <div className="mt-1 text-mt-down-1 text-white/60">~18 sessions/day × ₹150/session</div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3 text-mt-down-1">
                    {[
                      { k: "Uptime", v: "99.2%", hint: "last 7 days" },
                      { k: "Sessions", v: "18/day", hint: "avg" },
                      { k: "Tariff", v: "₹/kWh", hint: "configurable" },
                      { k: "Payouts", v: "Weekly", hint: "settlements" },
                    ].map((x) => (
                      <div key={x.k} className="rounded-mcn-lg border border-white/10 bg-white/5 p-3">
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
      </section>

      <WhyMassiveSectionFresh />
      <HowItWorksSection />
      <ChooseSetupSection />
      <FifthScroll />
    </div>
  );
}
