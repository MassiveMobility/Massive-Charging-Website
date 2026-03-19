import React, { useMemo, useState } from "react";

type Bullet = string;

type Subsection = {
  id: string;
  title: string;
  bullets: Bullet[];
};

type Reason = {
  id: string;
  title: string;
  blurb: string;
  highlights: Bullet[];
  subsections: Subsection[];
  accent: {
    chipBg: string; // tailwind classes
    chipText: string;
    dot: string;
    glow: string;
  };
  icon: React.ReactNode;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Small inline icons (no dependency) */
function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M13 2 3 14h7l-1 8 12-14h-8l0-6Z"
        className="stroke-current"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconMap() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M9 18 3 20V6l6-2 6 2 6-2v14l-6 2-6-2Z"
        className="stroke-current"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 4v14M15 6v14"
        className="stroke-current"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconTag() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M20 13 13 20a2 2 0 0 1-2.8 0L3 12V4h8l9 9a2 2 0 0 1 0 2.8Z"
        className="stroke-current"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 7.5h.01"
        className="stroke-current"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M5 12h12"
        className="stroke-current"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="m13 6 6 6-6 6"
        className="stroke-current"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconClose() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6 6 18"
        className="stroke-current"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Chip({ text }: { text: string }) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        "border-zinc-200/70 bg-white/65 text-zinc-700 shadow-sm backdrop-blur-xl"
      )}
    >
      <span className="text-zinc-500">
        <IconTag />
      </span>
      {text}
    </span>
  );
}

function Stat({
  label,
  value,
  icon,
  valueAccent,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  valueAccent: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200/70 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <span className={cx("inline-flex items-center justify-center", valueAccent)}>
          {icon}
        </span>
        <div className={cx("text-xl font-semibold tracking-tight", valueAccent)}>
          {value}
        </div>
      </div>
      <div className="mt-1 text-xs text-zinc-600">{label}</div>
    </div>
  );
}

/** Reusable little glass icon */
function GlassIcon({
  children,
  glow,
}: {
  children: React.ReactNode;
  glow: string;
}) {
  return (
    <div className="relative">
      <div className={cx("absolute -inset-2 rounded-3xl blur-xl opacity-60", glow)} />
      <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/40 bg-white/20 text-zinc-900 shadow-[0_8px_30px_rgba(0,0,0,0.10)] backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}

function AccordionItem({
  title,
  bullets,
  dot,
  defaultOpen = false,
}: {
  title: string;
  bullets: string[];
  dot: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-zinc-200/70 bg-white/70 shadow-sm backdrop-blur-xl">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-zinc-900">{title}</span>
        <span
          className={cx(
            "inline-block translate-y-[1px] transition-transform duration-200 text-zinc-500",
            open && "rotate-180"
          )}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      <div
        className={cx(
          "grid transition-[grid-template-rows] duration-200",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <ul className="space-y-2 px-4 pb-4 text-sm text-zinc-700">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className={cx("mt-[7px] h-1.5 w-1.5 rounded-full", dot)} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/** Right-side details panel (desktop), bottom sheet (mobile) */
function Drawer({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cx(
        "fixed inset-0 z-50",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      <div
        className={cx(
          "absolute inset-0 bg-black/30 transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />

      <div
        className={cx(
          "absolute bottom-0 left-0 right-0 mx-auto w-full max-w-3xl rounded-t-3xl border border-white/30",
          "bg-white/60 shadow-2xl backdrop-blur-2xl transition-transform duration-200",
          "md:bottom-auto md:left-auto md:right-0 md:top-0 md:h-full md:max-w-xl md:rounded-none md:rounded-l-3xl",
          open
            ? "translate-y-0 md:translate-x-0"
            : "translate-y-full md:translate-x-full md:translate-y-0"
        )}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="flex items-center justify-between gap-3 border-b border-zinc-200/70 bg-white/50 px-5 py-4 md:px-6">
          <div className="min-w-0">
            <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500">
              Why Massive
            </div>
            <h2 className="truncate text-lg font-semibold text-zinc-900">{title}</h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200/70 bg-white/70 px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-white"
          >
            <IconClose />
            Close
          </button>
        </div>

        <div className="h-[calc(100%-64px)] overflow-y-auto p-5 md:p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

/** Flip card */
function FlipCard({
  active,
  onClick,
  front,
  back,
}: {
  active: boolean;
  onClick: () => void;
  front: React.ReactNode;
  back: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative h-full min-h-[220px] w-full text-left [perspective:1200px]"
      aria-pressed={active}
    >
      <div
        className={cx(
          "relative h-full w-full rounded-3xl transition-transform duration-500 [transform-style:preserve-3d]",
          active ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          {front}
        </div>

        {/* Back */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {back}
        </div>
      </div>
    </button>
  );
}

export function WhyMassiveSection() {
  const reasons: Reason[] = useMemo(
    () => [
      {
        id: "expertise-scale",
        title: "Deep Industry Expertise & Execution Strength",
        blurb:
          "Scale-proven deployments + real EV insights that reduce risk and future-proof decisions.",
        icon: <span className="text-lg">⚡</span>,
        highlights: [
          "1000+ charging points deployed",
          "100s of deployments across India",
          "Guidance to avoid obsolescence risk",
        ],
        subsections: [
          {
            id: "1-1",
            title: "Large-Scale Deployment Experience",
            bullets: [
              "Massive has successfully deployed 1000+ charging points",
              "Experience in deploying 100s of chargers across India",
              "Proven execution capability at scale",
            ],
          },
          {
            id: "1-2",
            title: "Deep EV Market Insights",
            bullets: [
              "Strong understanding of EV user behavior",
              "Strong understanding of charging patterns",
              "Strong understanding of location viability",
              "Strong understanding of demand forecasting",
              "Continuous learning from live network data",
            ],
          },
          {
            id: "1-3",
            title: "Evolving Technology Landscape",
            bullets: [
              "EV charging is a rapidly evolving field",
              "Technology can become obsolete quickly",
              "Massive helps avoid obsolescence risks",
              "Massive helps select future-ready solutions",
              "Massive helps upgrade strategically when required",
            ],
          },
        ],
        accent: {
          chipBg: "bg-amber-500/15 border-amber-400/20",
          chipText: "text-amber-700",
          dot: "bg-amber-500",
          glow: "bg-amber-400/30",
        },
      },
      {
        id: "vendor-hardware",
        title: "Vendor & Hardware Expertise",
        blurb:
          "Hardware-agnostic support backed by vendor benchmarking and bulk deployment know-how.",
        icon: <span className="text-lg">🔧</span>,
        highlights: [
          "Benchmarked vendor performance",
          "Works with any compatible hardware",
          "Bulk deployment guidance",
        ],
        subsections: [
          {
            id: "2-1",
            title: "Manufacturer Reliability Assessment",
            bullets: [
              "In-depth understanding of which vendor performs how",
              "Long-term reliability assessment of manufacturers",
              "Performance benchmarking insights",
              "Data-backed hardware recommendations",
            ],
          },
          {
            id: "2-2",
            title: "Hardware-Agnostic Approach",
            bullets: [
              "You can buy any hardware",
              "Massive helps ensure compatibility",
              "Massive helps ensure smart integration",
              "Massive helps ensure performance optimization",
            ],
          },
          {
            id: "2-3",
            title: "Bulk Procurement Knowledge",
            bullets: [
              "Expertise in bulk deployments",
              "Understanding of technical specifications",
              "Understanding of operational requirements",
              "Understanding of scale efficiencies",
            ],
          },
        ],
        accent: {
          chipBg: "bg-cyan-500/15 border-cyan-400/20",
          chipText: "text-cyan-700",
          dot: "bg-cyan-500",
          glow: "bg-cyan-400/30",
        },
      },
      {
        id: "tech-safety",
        title: "In-House Technology & Safety",
        blurb:
          "Proprietary tech stack with monitoring + diagnostics control, built with safety first.",
        icon: <span className="text-lg">🛡️</span>,
        highlights: [
          "In-house software stack",
          "Monitoring + diagnostics control",
          "Compliance & safety protocols",
        ],
        subsections: [
          {
            id: "3-1",
            title: "Proprietary Technology Stack",
            bullets: [
              "In-house software and technology",
              "Better control over monitoring",
              "Better control over diagnostics",
              "Better control over performance optimization",
            ],
          },
          {
            id: "3-2",
            title: "Safety Standards",
            bullets: [
              "Strong focus on electrical safety",
              "Strong focus on installation compliance",
              "Strong focus on operational safety protocols",
            ],
          },
        ],
        accent: {
          chipBg: "bg-violet-500/15 border-violet-400/20",
          chipText: "text-violet-700",
          dot: "bg-violet-500",
          glow: "bg-violet-400/30",
        },
      },
      {
        id: "commercial",
        title: "Commercial & Relationship Advantage",
        blurb:
          "Pricing that’s same-or-lower, plus ecosystem relationships that simplify execution.",
        icon: <span className="text-lg">🤝</span>,
        highlights: [
          "Pricing same or lower",
          "Value-added services included",
          "Strong ecosystem relationships",
        ],
        subsections: [
          {
            id: "4-1",
            title: "Competitive Pricing",
            bullets: [
              "Pricing is same or lower than alternatives",
              "Value-added services included",
            ],
          },
          {
            id: "4-2",
            title: "Strong Vendor & Industry Relationships",
            bullets: [
              "Established relationships with OEMs",
              "Established relationships with hardware manufacturers",
              "Established relationships with ecosystem partners",
            ],
          },
        ],
        accent: {
          chipBg: "bg-emerald-500/15 border-emerald-400/20",
          chipText: "text-emerald-700",
          dot: "bg-emerald-500",
          glow: "bg-emerald-400/30",
        },
      },
      {
        id: "utilization",
        title: "Utilization & Revenue Support",
        blurb:
          "Beyond install: drive demand through fleets, visibility, and utilization optimization.",
        icon: <span className="text-lg">📈</span>,
        highlights: [
          "Utilization optimization support",
          "Fleet partnerships to drive demand",
          "Google + social visibility help",
        ],
        subsections: [
          {
            id: "5-1",
            title: "Utilization Optimization",
            bullets: [
              "Massive helps increase utilization through network integration",
              "Massive helps increase utilization through demand planning",
              "Massive helps increase utilization through performance monitoring",
            ],
          },
          {
            id: "5-2",
            title: "Fleet Partnerships",
            bullets: ["Partnerships with fleet operators", "Ensures recurring charging demand"],
          },
          {
            id: "5-3",
            title: "Visibility & Marketing Support",
            bullets: ["Google listing support", "Social media planning", "Location visibility enhancement"],
          },
        ],
        accent: {
          chipBg: "bg-rose-500/15 border-rose-400/20",
          chipText: "text-rose-700",
          dot: "bg-rose-500",
          glow: "bg-rose-400/30",
        },
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = reasons.find((r) => r.id === selectedId) || null;

  function handleSelect(id: string) {
    setSelectedId((prev) => (prev === id ? null : id)); // toggle open/close
  }

  return (
    <section className="relative overflow-hidden">
      {/* Electric Dawn Background */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_10%,rgba(255,210,170,0.85),transparent_60%),radial-gradient(900px_520px_at_80%_15%,rgba(140,230,255,0.75),transparent_58%),radial-gradient(800px_520px_at_60%_85%,rgba(170,160,255,0.65),transparent_58%),linear-gradient(180deg,#fbfbff_0%,#f6f7ff_45%,#fbfaf8_100%)]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-200/60 via-cyan-200/55 to-violet-200/60 blur-3xl" />
        <div className="absolute -bottom-32 right-[-8rem] h-72 w-72 rounded-full bg-rose-200/55 blur-3xl" />
        <div className="absolute left-[-6rem] top-1/3 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        {/* Large Light Card + Hero Banner */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/55 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/0" />
          <div className="relative p-6 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <div className="text-xs font-semibold tracking-wide text-zinc-600">
                  WHY MASSIVE
                </div>

                <h1 className="mt-2 text-3xl font-semibold leading-tight text-zinc-900 md:text-4xl">
                  Why{" "}
                  <span className="text-[#00A3FF] drop-shadow-[0_0_18px_rgba(0,163,255,0.45)]">
                    Massive
                  </span>
                </h1>

                <p className="mt-3 text-sm text-zinc-700 md:text-base">
                  The easiest way to build reliable EV charging — with scale-proven execution,
                  hardware flexibility, and utilization support after go-live.
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <Chip text="Hardware-agnostic" />
                  <Chip text="Safety-first" />
                  <Chip text="Utilization support" />
                  <Chip text="Pricing advantage" />
                  <Chip text="Scale proven" />
                </div>
              </div>

              {/* Stats with icons */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:w-[26rem]">
                <Stat
                  label="Charging points deployed"
                  value="1000+"
                  icon={<IconBolt />}
                  valueAccent="text-amber-700"
                />
                <Stat
                  label="Deployments across India"
                  value="100s"
                  icon={<IconMap />}
                  valueAccent="text-cyan-700"
                />
                <Stat
                  label="Pricing vs alternatives"
                  value="Same or lower"
                  icon={<IconTag />}
                  valueAccent="text-emerald-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pillars (small cards) */}
        <div className="mt-10 md:mt-12">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-lg font-semibold text-zinc-900 md:text-xl">
              Pillars
            </h2>
            <p className="hidden text-sm text-zinc-600 md:block">
              Click a pillar to flip and open details.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => {
              const active = selectedId === r.id;

              const Front = (
                <div
                  className={cx(
                    "relative h-full overflow-hidden rounded-3xl border bg-white/65",
                    "border-zinc-200/70 shadow-[0_15px_45px_rgba(0,0,0,0.10)] backdrop-blur-2xl",
                    "transition group-hover:-translate-y-0.5 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.14)]"
                  )}
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/0 to-white/0 opacity-70" />
                  <div className="relative p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5">
                          <GlassIcon glow={r.accent.glow}>{r.icon}</GlassIcon>
                        </div>

                        <div>
                          <div className="text-base font-semibold text-zinc-900">
                            {r.title}
                          </div>
                          <div className="mt-1 text-sm text-zinc-600">
                            {r.blurb}
                          </div>

                          <div className="mt-3">
                            <span
                              className={cx(
                                "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium",
                                "backdrop-blur-xl",
                                r.accent.chipBg,
                                r.accent.chipText
                              )}
                            >
                              Key benefits
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-1 text-zinc-400 transition group-hover:text-zinc-700">
                        <IconArrowRight />
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                      {r.highlights.slice(0, 3).map((b, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span
                            className={cx(
                              "mt-[7px] h-1.5 w-1.5 rounded-full",
                              r.accent.dot
                            )}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-900">
                      Explore <span aria-hidden="true">→</span>
                    </div>
                  </div>
                </div>
              );

              const Back = (
                <div
                  className={cx(
                    "relative h-full overflow-hidden rounded-3xl border",
                    "border-zinc-200/70 bg-white/75 shadow-[0_15px_45px_rgba(0,0,0,0.10)] backdrop-blur-2xl"
                  )}
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/0 to-white/0 opacity-70" />
                  <div className="relative flex h-full flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                          Selected
                        </div>
                        <div className="mt-1 text-base font-semibold text-zinc-900">
                          {r.title}
                        </div>
                      </div>
                      <span className={cx("inline-flex h-2.5 w-2.5 rounded-full", r.accent.dot)} />
                    </div>

                    <p className="mt-3 text-sm text-zinc-700">
                      {r.blurb}
                    </p>

                    <div className="mt-auto pt-5">
                      <div className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200/70 bg-white/70 px-3 py-2 text-sm font-medium text-zinc-900">
                        Details opened <IconArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              );

              return (
                <FlipCard
                  key={r.id}
                  active={active}
                  onClick={() => handleSelect(r.id)}
                  front={Front}
                  back={Back}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Right-side details */}
      <Drawer
        open={!!selected}
        onClose={() => setSelectedId(null)}
        title={selected?.title ?? ""}
      >
        {selected && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-zinc-200/70 bg-white/70 p-4 shadow-sm backdrop-blur-xl">
              <div className="text-sm font-semibold text-zinc-900">Key takeaway</div>
              <p className="mt-1 text-sm text-zinc-700">{selected.blurb}</p>
            </div>

            <div className="space-y-3">
              {selected.subsections.map((s, idx) => (
                <AccordionItem
                  key={s.id}
                  title={s.title}
                  bullets={s.bullets}
                  dot={selected.accent.dot}
                  defaultOpen={idx === 0}
                />
              ))}
            </div>
          </div>
        )}
      </Drawer>
    </section>
  );
}
