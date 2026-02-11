import React from "react";

/**
 * Home_SectionF_VIPTicket
 * Premium black + gold membership CTA section (VIP ticket vibe)
 *
 * Content from schema:
 * - Kicker: Exclusive Membership (Crown)
 * - Heading: Become a Pro Member
 * - CTA: Get Massive Membership (solid_gold)
 * - List: benefits
 */

function CrownIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l4 6 5-9 5 9 4-6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 21h14" />
    </svg>
  );
}

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m20 6-11 11-5-5" />
    </svg>
  );
}

export default function Home_SectionF_VIPTicket() {
  const content = {
    kicker: "Exclusive Membership",
    heading: "Become a Pro Member",
    cta: "Get Massive Membership",
    list: [
      "Charging Discounts",
      "Charging Pass",
      "Access to Premium Stations",
      "Points on Each Charge",
      "Discount on Hardware",
    ],
  };

  return (
    <section className="relative overflow-hidden bg-[#050607]">
      {/* Subtle premium backdrop (dark + faint gold glows) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(rgba(255,215,110,0.20)_1px,transparent_1px)] bg-[size:18px_18px]" />
        <div className="absolute inset-0 opacity-[0.10] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />

        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[rgba(255,215,110,0.12)] blur-3xl" />
        <div className="absolute -bottom-48 left-1/4 h-[520px] w-[520px] rounded-full bg-[rgba(255,175,60,0.10)] blur-3xl" />
      </div>

      <div className="container relative py-12 md:py-16">
        {/* VIP Ticket Card */}
        <div
          className={[
            "relative overflow-hidden rounded-mcn-xl",
            "border border-[rgba(255,215,110,0.22)]",
            "bg-[rgba(10,10,12,0.72)] backdrop-blur-mcn",
            "shadow-[0_26px_90px_rgba(0,0,0,0.65)]",
          ].join(" ")}
        >
          {/* Gold rim + sheen */}
          <div className="pointer-events-none absolute inset-0 rounded-mcn-xl ring-1 ring-[rgba(255,215,110,0.16)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,215,110,0.16),transparent_45%)]" />
          <div className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/2 rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,215,110,0.10),transparent)]" />

          {/* Ticket perforation (visual) */}
          <div className="pointer-events-none absolute inset-y-0 left-[72%] hidden w-px bg-[rgba(255,215,110,0.20)] lg:block" />
          <div className="pointer-events-none absolute left-[72%] top-10 hidden h-6 w-6 -translate-x-1/2 rounded-full border border-[rgba(255,215,110,0.22)] bg-[#050607] lg:block" />
          <div className="pointer-events-none absolute left-[72%] bottom-10 hidden h-6 w-6 -translate-x-1/2 rounded-full border border-[rgba(255,215,110,0.22)] bg-[#050607] lg:block" />

          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-12 lg:items-center">
            {/* Left: main content */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,215,110,0.22)] bg-[rgba(255,215,110,0.08)] px-3 py-1 text-xs font-semibold text-[rgba(255,215,110,0.92)]">
                <CrownIcon className="h-4 w-4" />
                {content.kicker}
              </div>

              <h2 className="mt-4 font-heading text-4xl tracking-tight text-white md:text-5xl">
                {content.heading}
              </h2>

              <p className="mt-3 max-w-2xl text-sm text-white/70 md:text-base">
                Premium perks, priority access, and better savings every time you charge.
              </p>

              {/* Benefits list */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {content.list.map((item) => (
                  <div
                    key={item}
                    className={[
                      "flex items-center gap-2 rounded-2xl",
                      "border border-white/10 bg-white/5",
                      "px-4 py-3",
                    ].join(" ")}
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-[rgba(255,215,110,0.22)] bg-[rgba(255,215,110,0.10)] text-[rgba(255,215,110,0.92)]">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-semibold text-white/85">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: CTA panel */}
            <div className="lg:col-span-4">
              <div
                className={[
                  "relative overflow-hidden rounded-mcn-xl",
                  "border border-[rgba(255,215,110,0.18)]",
                  "bg-[rgba(255,255,255,0.04)]",
                  "p-6 md:p-7",
                ].join(" ")}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,110,0.12),transparent_55%)]" />

                <div className="text-xs font-semibold uppercase tracking-widest text-[rgba(255,215,110,0.85)]">
                  VIP Ticket
                </div>
                <div className="mt-2 text-2xl font-bold text-white">
                  Massive Pro
                </div>
                <div className="mt-2 text-sm text-white/65">
                  Unlock premium stations + extra savings.
                </div>

                <button
                  className={[
                    "mt-6 w-full rounded-mcn-lg px-6 py-3 font-semibold",
                    "text-[#1a1200]",
                    "bg-[linear-gradient(135deg,#FFD36A,#FFB400)]",
                    "shadow-[0_18px_60px_rgba(255,180,0,0.22)]",
                    "transition duration-200 ease-out hover:-translate-y-[1px]",
                    "active:translate-y-0",
                  ].join(" ")}
                >
                  {content.cta}
                </button>

                <div className="mt-4 text-xs text-white/55">
                  Cancel anytime • Instant activation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
