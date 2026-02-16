import React from "react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-mcn-bg text-mcn-text-primary">
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
          <div className="grid gap-8 desktop:grid-cols-12 items-center">
            <div className="desktop:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mcn-stroke-soft bg-mcn-surface3 text-mcn-text-muted text-mt-down-1">
                Network-grade EV charging platform
              </div>
              <h1 className="mt-4 font-heading text-pf-up-4 md:text-pf-up-5 leading-tight">
                Find, compare, and deploy EV charging with operational clarity.
              </h1>
              <p className="mt-4 text-mt-base text-mcn-text-secondary max-w-2xl">
                A utility-first experience for operators and partners. Built for trust, speed,
                and data-heavy workflows without visual noise.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="px-6 py-3 rounded-mcn bg-mcn-red text-white shadow-mcn-card transition-mcn hover:bg-mcn-red-hover">
                  Book a demo
                </button>
                <button className="px-6 py-3 rounded-mcn border border-mcn-stroke-strong text-mcn-text-primary bg-mcn-surface2 transition-mcn hover:shadow-mcn-soft">
                  Explore the network
                </button>
              </div>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {[
                  { label: "Stations live", value: "1,250+" },
                  { label: "Avg uptime", value: "99.2%" },
                  { label: "Connector types", value: "CCS2, CHAdeMO, AC" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-mcn bg-mcn-surface2 border border-mcn-stroke-soft p-4 shadow-mcn-soft"
                  >
                    <div className="text-mt-down-1 text-mcn-text-muted">{item.label}</div>
                    <div className="mt-2 font-mono text-mt-up-1">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="desktop:col-span-5">
              <div className="rounded-mcn-xl border border-mcn-stroke-soft bg-gradient-to-br from-electric-bg-frost to-electric-bg-steel p-6 shadow-mcn-card">
                <div className="rounded-mcn bg-white/70 backdrop-blur-mcn border border-mcn-stroke-soft p-5">
                  <div className="text-mt-down-1 text-mcn-text-muted">Live search preview</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Fast", "Open 24x7", "150kW+", "Verified"].map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-pill text-mt-down-1 bg-electric-accent-ionBlue/10 text-mcn-text-primary border border-mcn-stroke-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 space-y-3">
                    {["North Gate Station", "Riverside Hub", "City Central Mall"].map(
                      (name) => (
                        <div
                          key={name}
                          className="flex items-center justify-between rounded-mcn bg-mcn-surface2 p-3 border border-mcn-stroke-soft"
                        >
                          <div>
                            <div className="text-mt-base">{name}</div>
                            <div className="text-mt-down-1 text-mcn-text-muted">
                              4 connectors • 150–300kW
                            </div>
                          </div>
                          <span className="px-2 py-1 rounded-pill text-mt-down-2 bg-mcn-blue/10 text-mcn-text-primary border border-mcn-stroke-soft">
                            Available
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Dark */}
      <section className="bg-mcn-ink-bg text-mcn-ink-text-primary">
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-24">
          <div className="grid gap-10 desktop:grid-cols-12 items-center">
            <div className="desktop:col-span-5">
              <div className="text-mt-up-2 font-heading">Network visibility without noise</div>
              <p className="mt-3 text-mt-base text-mcn-ink-text-secondary">
                Use clean data blocks, not image-heavy layouts. Every element is designed
                to improve scan speed and decision confidence.
              </p>
            </div>
            <div className="desktop:col-span-7 grid gap-4 md:grid-cols-3">
              {[
                { title: "Availability", value: "92%", note: "Live verified" },
                { title: "Pricing range", value: "₹14–22", note: "kWh average" },
                { title: "Queue time", value: "3–6 min", note: "Peak hours" },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-mcn bg-mcn-ink-surface border border-mcn-ink-stroke-soft p-4 shadow-mcn-ink-card"
                >
                  <div className="text-mt-down-1 text-mcn-ink-text-muted">{card.title}</div>
                  <div className="mt-2 font-mono text-mt-up-1">{card.value}</div>
                  <div className="mt-2 text-mt-down-1 text-mcn-ink-text-faint">
                    {card.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Light */}
      <section className="bg-mcn-surface text-mcn-text-primary">
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-24">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-mt-up-2 font-heading">Simple workflow, operator grade</div>
              <p className="mt-3 text-mt-base text-mcn-text-secondary max-w-2xl">
                Three steps to get stations live with minimal friction and full visibility.
              </p>
            </div>
            <button className="px-5 py-2 rounded-mcn border border-mcn-stroke-strong text-mcn-text-primary bg-mcn-surface2 transition-mcn hover:shadow-mcn-soft">
              View onboarding
            </button>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { step: "01", title: "Submit site details", copy: "Location, capacity, power." },
              { step: "02", title: "Verify & plan", copy: "Compliance and load plan." },
              { step: "03", title: "Go live", copy: "Publish, track, optimize." },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-mcn bg-mcn-surface2 border border-mcn-stroke-soft p-5 shadow-mcn-soft"
              >
                <div className="text-mt-down-1 text-mcn-text-muted">Step {s.step}</div>
                <div className="mt-2 text-mt-up-1 font-heading">{s.title}</div>
                <div className="mt-2 text-mt-base text-mcn-text-secondary">{s.copy}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Dark */}
      <section className="bg-mcn-ink-surface text-mcn-ink-text-primary">
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-24">
          <div className="grid gap-8 desktop:grid-cols-12 items-center">
            <div className="desktop:col-span-7">
              <div className="text-mt-up-2 font-heading">Spec-first comparison</div>
              <p className="mt-3 text-mt-base text-mcn-ink-text-secondary">
                Compare connector types, power, pricing, and compliance without scrolling
                through long paragraphs.
              </p>
            </div>
            <div className="desktop:col-span-5">
              <div className="rounded-mcn bg-mcn-ink-surface2 border border-mcn-ink-stroke-soft p-4 shadow-mcn-ink-card">
                <div className="grid grid-cols-2 gap-3 text-mt-down-1 text-mcn-ink-text-muted">
                  <div>Connector</div>
                  <div>CCS2</div>
                  <div>Power</div>
                  <div>150kW</div>
                  <div>Rate</div>
                  <div>₹18/kWh</div>
                  <div>Access</div>
                  <div>24x7</div>
                </div>
                <button className="mt-4 w-full px-4 py-2 rounded-mcn bg-mcn-red text-white transition-mcn hover:bg-mcn-red-hover">
                  Compare stations
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Light */}
      <section className="bg-mcn-bg text-mcn-text-primary">
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-24">
          <div className="text-mt-up-2 font-heading">Guides that reduce decision time</div>
          <p className="mt-3 text-mt-base text-mcn-text-secondary max-w-2xl">
            Editorial blocks, clean reading scale, and no image dependency.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { title: "Choosing the right charger", tag: "Guide" },
              { title: "How to read kW and kWh", tag: "Explainer" },
              { title: "Station setup checklist", tag: "Checklist" },
            ].map((g) => (
              <div
                key={g.title}
                className="rounded-mcn bg-mcn-surface2 border border-mcn-stroke-soft p-5 shadow-mcn-soft"
              >
                <div className="text-mt-down-1 text-mcn-text-muted">{g.tag}</div>
                <div className="mt-2 text-mt-up-1 font-heading">{g.title}</div>
                <div className="mt-3 text-mt-base text-mcn-text-secondary">
                  Clear, practical content built for operators and partners.
                </div>
                <div className="mt-4 text-mt-base text-mcn-blue">Read guide →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - Dark CTA */}
      <section className="bg-mcn-ink-bg text-mcn-ink-text-primary">
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-24 text-center">
          <div className="text-mt-up-3 font-heading">Ready to deploy reliable EV charging?</div>
          <p className="mt-3 text-mt-base text-mcn-ink-text-secondary max-w-2xl mx-auto">
            Get a partner onboarding walkthrough, data checklist, and rollout plan.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button className="px-6 py-3 rounded-mcn bg-mcn-red text-white shadow-mcn-ink-card transition-mcn hover:bg-mcn-red-hover">
              Start partner setup
            </button>
            <button className="px-6 py-3 rounded-mcn border border-mcn-ink-stroke-strong text-mcn-ink-text-primary bg-mcn-ink-surface transition-mcn">
              See documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
