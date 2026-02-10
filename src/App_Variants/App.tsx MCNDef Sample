// src/App.tsx
import React, { useMemo, useState } from "react";

type BadgeTone = "connector" | "success" | "warning" | "info" | "new";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function Badge({
  tone,
  children,
}: {
  tone: BadgeTone;
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-mcn border px-2.5 py-1 text-mt-down-1 leading-tight";
  const toneClass =
    tone === "connector"
      ? "border-mcn-stroke-soft bg-mcn-surface2 text-mcn-text-primary font-mono"
      : tone === "success"
      ? "border-mcn-stroke-soft bg-mcn-surface2 text-mcn-green"
      : tone === "warning"
      ? "border-mcn-stroke-soft bg-mcn-surface2 text-mcn-semantic-warning"
      : tone === "info"
      ? "border-mcn-stroke-soft bg-mcn-surface2 text-mcn-blue"
      : "border-mcn-stroke-soft bg-mcn-surface2 text-mcn-cyan";

  return <span className={cx(base, toneClass)}>{children}</span>;
}

function Card({
  title,
  subtitle,
  children,
  right,
  tone = "surface",
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  right?: React.ReactNode;
  tone?: "surface" | "surface2" | "glass";
}) {
  const shell =
    "rounded-mcn bg-mcn-surface shadow-mcn-card border border-mcn-stroke-soft";
  const surface =
    tone === "surface2"
      ? "bg-mcn-surface2"
      : tone === "glass"
      ? "bg-mcn-surface/80 backdrop-blur-mcn"
      : "bg-mcn-surface";

  return (
    <div className={cx(shell, surface)}>
      <div className="flex items-start justify-between gap-6 p-6">
        <div className="min-w-0">
          <div className="font-heading text-mt-up-3 text-mcn-text-primary">
            {title}
          </div>
          {subtitle ? (
            <div className="mt-1 text-mt-base text-mcn-text-secondary">
              {subtitle}
            </div>
          ) : null}
        </div>
        {right ? <div className="shrink-0">{right}</div> : null}
      </div>

      {children ? <div className="px-6 pb-6">{children}</div> : null}
    </div>
  );
}

function GlassBar({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="sticky top-4 z-10 rounded-mcn bg-mcn-surface/80 backdrop-blur-mcn border border-mcn-stroke-soft shadow-mcn-soft">
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div className="font-heading text-mt-up-1 text-mcn-text-primary">
          {label}
        </div>
        <div className="flex flex-wrap items-center gap-2">{children}</div>
      </div>
    </div>
  );
}

function Button({
  variant,
  children,
  onClick,
  disabled,
}: {
  variant: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-mcn px-4 py-2 text-mt-down-1 font-medium transition duration-fast ease-ease-out-standard focus:outline-none focus:ring-2 focus:ring-mcn-blue disabled:opacity-50 disabled:cursor-not-allowed";
  const styles =
    variant === "primary"
      ? "bg-mcn-red text-mcn-surface2 hover:bg-mcn-red-hover"
      : variant === "secondary"
      ? "bg-mcn-surface2 text-mcn-text-primary border border-mcn-stroke-soft hover:shadow-mcn-soft"
      : "text-mcn-blue hover:underline";

  return (
    <button className={cx(base, styles)} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

function Input({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-mcn bg-mcn-surface2 border border-mcn-stroke-soft px-3 py-2">
      <span className="text-mt-down-1 text-mcn-text-secondary">⌕</span>
      <input
        className="w-64 bg-transparent outline-none text-mt-base text-mcn-text-primary placeholder:text-mcn-text-secondary"
        placeholder={placeholder ?? "Search chargers, brands, connectors…"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="font-mono text-mt-down-2 text-mcn-text-secondary">
        /⌘K
      </span>
    </div>
  );
}

function SpecRow({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-6 py-2">
      <div className="text-mt-down-1 text-mcn-text-secondary">{k}</div>
      <div className="text-right font-mono text-mt-down-1 text-mcn-text-primary">
        {v}
      </div>
    </div>
  );
}

function MiniSkeleton() {
  return (
    <div className="rounded-mcn bg-mcn-surface2 border border-mcn-stroke-soft p-4">
      <div className="h-4 w-2/3 rounded bg-black/10" />
      <div className="mt-3 h-3 w-1/2 rounded bg-black/10" />
      <div className="mt-4 h-8 w-full rounded bg-black/10" />
    </div>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<"list" | "compare" | "setup">("list");
  const [loading, setLoading] = useState(false);

  const chips = useMemo(
    () => [
      { label: "CCS2", tone: "connector" as const },
      { label: "Type 2", tone: "connector" as const },
      { label: "7.4kW", tone: "connector" as const },
      { label: "Verified", tone: "success" as const },
      { label: "Available", tone: "success" as const },
      { label: "Upcoming", tone: "new" as const },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-mcn-bg text-mcn-text-primary">
      <div className="mx-auto max-w-screen-2xl px-4 py-6 md:px-6">
        {/* HERO */}
        <div className="mb-6 rounded-mcn bg-mcn-surface shadow-mcn-card border border-mcn-stroke-soft">
          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <div className="flex flex-wrap gap-2">
                  <Badge tone="info">Electric Blue = interaction</Badge>
                  <Badge tone="new">Energy Cyan = tech cues</Badge>
                  <Badge tone="success">Green = success</Badge>
                  <Badge tone="connector">Mono = data truth</Badge>
                </div>

                <h1 className="mt-5 font-heading text-pf-up-4 md:text-pf-up-5 tracking-tight">
                  Massive Charging Network
                </h1>
                <p className="mt-3 text-mt-base text-mcn-text-secondary">
                  Utility-grade EV charging discovery. Search chargers, compare
                  specs, and set up stations with operator clarity.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Button variant="primary">Enquire / Buy</Button>
                  <Button variant="secondary">Set up a Station</Button>
                  <Button variant="tertiary">Read Charging Guides</Button>
                </div>
              </div>

              <div className="w-full max-w-md rounded-mcn bg-mcn-surface2 border border-mcn-stroke-soft p-4">
                <div className="text-mt-down-1 text-mcn-text-secondary">
                  Quick Stats (data styling check)
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  <div className="rounded-mcn bg-mcn-surface border border-mcn-stroke-soft p-3">
                    <div className="text-mt-down-1 text-mcn-text-secondary">
                      Chargers
                    </div>
                    <div className="mt-1 font-mono text-mt-up-2">128</div>
                  </div>
                  <div className="rounded-mcn bg-mcn-surface border border-mcn-stroke-soft p-3">
                    <div className="text-mt-down-1 text-mcn-text-secondary">
                      Connectors
                    </div>
                    <div className="mt-1 font-mono text-mt-up-2">CCS2</div>
                  </div>
                  <div className="rounded-mcn bg-mcn-surface border border-mcn-stroke-soft p-3">
                    <div className="text-mt-down-1 text-mcn-text-secondary">
                      City
                    </div>
                    <div className="mt-1 font-mono text-mt-up-2">NCR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GLASS NAV / FILTER BAR */}
        <GlassBar label="Search & Filters (Glass Layer)">
          <Input value={query} onChange={setQuery} />
          <div className="flex items-center gap-2">
            <Button
              variant={selected === "list" ? "secondary" : "tertiary"}
              onClick={() => setSelected("list")}
            >
              List
            </Button>
            <Button
              variant={selected === "compare" ? "secondary" : "tertiary"}
              onClick={() => setSelected("compare")}
            >
              Compare
            </Button>
            <Button
              variant={selected === "setup" ? "secondary" : "tertiary"}
              onClick={() => setSelected("setup")}
            >
              Setup
            </Button>
          </div>
          <Button
            variant="secondary"
            onClick={() => {
              setLoading(true);
              window.setTimeout(() => setLoading(false), 900);
            }}
            disabled={loading}
          >
            {loading ? "Loading…" : "Simulate Loading"}
          </Button>
        </GlassBar>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* LEFT RAIL (Filters) */}
          <div className="lg:col-span-4">
            <Card
              title="Filter Rail"
              subtitle="Left filters, right results (desktop pattern)"
              right={<Badge tone="info">Sticky-ready</Badge>}
            >
              <div className="flex flex-wrap gap-2">
                {chips.map((c) => (
                  <Badge key={c.label} tone={c.tone}>
                    {c.label}
                  </Badge>
                ))}
              </div>

              <div className="mt-5 rounded-mcn bg-mcn-surface2 border border-mcn-stroke-soft p-4">
                <div className="font-heading text-mt-up-1">Range Slider (mock)</div>
                <div className="mt-3 h-2 w-full rounded bg-black/10" />
                <div className="mt-3 flex justify-between font-mono text-mt-down-1 text-mcn-text-secondary">
                  <span>₹ 4/kWh</span>
                  <span>₹ 18/kWh</span>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <Button variant="secondary">Clear</Button>
                <Button variant="primary">Apply</Button>
              </div>
            </Card>

            {/* Nested Cards (Cards on Cards) */}
            <div className="mt-6 rounded-mcn bg-mcn-surface shadow-mcn-card border border-mcn-stroke-soft p-4">
              <div className="font-heading text-mt-up-2">Cards on Cards</div>
              <div className="mt-3 grid gap-3">
                <div className="rounded-mcn bg-mcn-surface2 border border-mcn-stroke-soft p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-heading text-mt-up-1">Verified Partner</div>
                    <Badge tone="success">Verified</Badge>
                  </div>
                  <div className="mt-2 text-mt-down-1 text-mcn-text-secondary">
                    Dense info panels should prefer opaque surface.
                  </div>

                  <div className="mt-3 rounded-mcn bg-mcn-surface border border-mcn-stroke-soft p-3">
                    <div className="text-mt-down-1 text-mcn-text-secondary">
                      Partner ID
                    </div>
                    <div className="font-mono text-mt-base">MCN-PRT-0042</div>
                  </div>
                </div>

                <div className="rounded-mcn bg-mcn-surface2 border border-mcn-stroke-soft p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-heading text-mt-up-1">Upcoming Station</div>
                    <Badge tone="new">New</Badge>
                  </div>
                  <div className="mt-2 text-mt-down-1 text-mcn-text-secondary">
                    Cyan as a controlled tech cue (not CTA).
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge tone="connector">CCS2</Badge>
                    <Badge tone="connector">11kW</Badge>
                    <Badge tone="info">Map Pin</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT (Results / Compare / Setup) */}
          <div className="lg:col-span-8">
            {selected === "list" ? (
              <Card
                title="Charger Results"
                subtitle="Result Cards -> Detail Page -> CTA"
                right={<Badge tone="info">List Mode</Badge>}
              >
                {loading ? (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <MiniSkeleton />
                    <MiniSkeleton />
                    <MiniSkeleton />
                    <MiniSkeleton />
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* Result Card A */}
                    <div className="rounded-mcn bg-mcn-surface2 border border-mcn-stroke-soft p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="font-heading text-mt-up-2">
                            AC Home Charger
                          </div>
                          <div className="mt-1 text-mt-down-1 text-mcn-text-secondary">
                            Compact wallbox for daily charging
                          </div>
                        </div>
                        <Badge tone="success">Available</Badge>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge tone="connector">Type 2</Badge>
                        <Badge tone="connector">7.4kW</Badge>
                        <Badge tone="connector">IP65</Badge>
                      </div>

                      <div className="mt-4 rounded-mcn bg-mcn-surface border border-mcn-stroke-soft p-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <div className="text-mt-down-1 text-mcn-text-secondary">
                              Price
                            </div>
                            <div className="font-mono text-mt-up-1">₹ 39,999</div>
                          </div>
                          <div>
                            <div className="text-mt-down-1 text-mcn-text-secondary">
                              Install
                            </div>
                            <div className="font-mono text-mt-up-1">48 hrs</div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex gap-3">
                        <Button variant="primary">Enquire</Button>
                        <Button variant="secondary">View</Button>
                      </div>
                    </div>

                    {/* Result Card B */}
                    <div className="rounded-mcn bg-mcn-surface2 border border-mcn-stroke-soft p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="font-heading text-mt-up-2">
                            DC Fast Charger
                          </div>
                          <div className="mt-1 text-mt-down-1 text-mcn-text-secondary">
                            Operator-grade public charging
                          </div>
                        </div>
                        <Badge tone="warning">Limited</Badge>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge tone="connector">CCS2</Badge>
                        <Badge tone="connector">60kW</Badge>
                        <Badge tone="connector">OCPP</Badge>
                      </div>

                      <div className="mt-4 rounded-mcn bg-mcn-surface border border-mcn-stroke-soft p-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <div className="text-mt-down-1 text-mcn-text-secondary">
                              Price
                            </div>
                            <div className="font-mono text-mt-up-1">₹ 6,90,000</div>
                          </div>
                          <div>
                            <div className="text-mt-down-1 text-mcn-text-secondary">
                              Lead time
                            </div>
                            <div className="font-mono text-mt-up-1">2–3 wks</div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex gap-3">
                        <Button variant="primary">Set up station</Button>
                        <Button variant="secondary">Compare</Button>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            ) : selected === "compare" ? (
              <Card
                title="Compare (Table)"
                subtitle="Opaque surface for dense specs"
                right={<Badge tone="info">Compare Mode</Badge>}
                tone="surface2"
              >
                <div className="overflow-hidden rounded-mcn border border-mcn-stroke-soft">
                  <div className="grid grid-cols-3 bg-mcn-surface p-3 text-mt-down-1 text-mcn-text-secondary">
                    <div className="font-heading text-mcn-text-primary">Spec</div>
                    <div className="font-heading text-mcn-text-primary">AC Home</div>
                    <div className="font-heading text-mcn-text-primary">DC Fast</div>
                  </div>

                  <div className="divide-y divide-black/10 bg-mcn-surface2">
                    {[
                      ["Connector", "Type 2", "CCS2"],
                      ["Power", "7.4kW", "60kW"],
                      ["Input", "230V", "415V"],
                      ["Protocol", "—", "OCPP"],
                      ["Price", "₹ 39,999", "₹ 6,90,000"],
                    ].map(([k, a, b]) => (
                      <div
                        key={k}
                        className="grid grid-cols-3 gap-3 px-3 py-3 text-mt-down-1"
                      >
                        <div className="text-mcn-text-secondary">{k}</div>
                        <div className="font-mono text-mcn-text-primary">{a}</div>
                        <div className="font-mono text-mcn-text-primary">{b}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex gap-3">
                  <Button variant="secondary">Save compare</Button>
                  <Button variant="primary">Request quote</Button>
                </div>
              </Card>
            ) : (
              <Card
                title="Partner Setup (Forms)"
                subtitle="Clear, operational, not salesy"
                right={<Badge tone="info">Setup Mode</Badge>}
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded-mcn bg-mcn-surface2 border border-mcn-stroke-soft p-4">
                    <div className="font-heading text-mt-up-1">Step 1</div>
                    <div className="mt-2 text-mt-down-1 text-mcn-text-secondary">
                      Business details and contact.
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="rounded-mcn bg-mcn-surface border border-mcn-stroke-soft px-3 py-2">
                        <div className="text-mt-down-1 text-mcn-text-secondary">
                          Business Name
                        </div>
                        <div className="text-mt-base">Massive Mobility Pvt Ltd</div>
                      </div>
                      <div className="rounded-mcn bg-mcn-surface border border-mcn-stroke-soft px-3 py-2">
                        <div className="text-mt-down-1 text-mcn-text-secondary">
                          Email
                        </div>
                        <div className="font-mono text-mt-base">ops@mcn.in</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-mcn bg-mcn-surface2 border border-mcn-stroke-soft p-4">
                    <div className="font-heading text-mt-up-1">Step 2</div>
                    <div className="mt-2 text-mt-down-1 text-mcn-text-secondary">
                      Station intent and power requirement.
                    </div>

                    <div className="mt-4 rounded-mcn bg-mcn-surface border border-mcn-stroke-soft p-4">
                      <SpecRow k="Connector" v="CCS2" />
                      <div className="h-px bg-black/10" />
                      <SpecRow k="Power" v="60kW" />
                      <div className="h-px bg-black/10" />
                      <SpecRow k="Budget" v="₹ 6–9L" />
                    </div>

                    <div className="mt-4 flex gap-3">
                      <Button variant="secondary">Back</Button>
                      <Button variant="primary">Submit lead</Button>
                    </div>
                  </div>
                </div>

                {/* Glass overlay example inside setup */}
                <div className="mt-6 rounded-mcn bg-mcn-surface/80 backdrop-blur-mcn border border-mcn-stroke-soft shadow-mcn-soft p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="font-heading text-mt-up-1">
                        Glass Panel (Allowed if contrast stays high)
                      </div>
                      <div className="text-mt-down-1 text-mcn-text-secondary">
                        Use opaque panels for dense data; glass for light summaries.
                      </div>
                    </div>
                    <Button variant="tertiary">View guide →</Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Guide card */}
            <div className="mt-6">
              <Card
                title="Guide Card"
                subtitle="Editorial scale sample (Perfect Fourth optional)"
                right={<Badge tone="info">KB</Badge>}
              >
                <div className="rounded-mcn bg-mcn-surface2 border border-mcn-stroke-soft p-5">
                  <div className="font-heading text-pf-up-2">
                    Home Charging Setup: 7.4kW vs 3.3kW
                  </div>
                  <div className="mt-2 text-mt-base text-mcn-text-secondary">
                    Clear, direct guidance. No hype. Use tables for specs.
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge tone="info">Electric Blue link style</Badge>
                    <Badge tone="new">Cyan tech cue</Badge>
                    <Badge tone="connector">Mono tokens</Badge>
                  </div>

                  <div className="mt-5 flex gap-3">
                    <Button variant="secondary">Open</Button>
                    <Button variant="tertiary">Copy link</Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-mt-down-1 text-mcn-text-secondary">
          Tip: if headings don’t look like <span className="font-heading">Public Sans</span>{" "}
          / <span className="font-heading">Public Sans</span> (now Public Sans is replaced by
          <span className="font-heading"> Public Sans</span> → switch to{" "}
          <span className="font-heading">Public Sans</span> import in your CSS.
          <div className="mt-2">
            In this build: <span className="font-mono">font-heading</span> is your heading role,
            <span className="font-mono"> font-sans</span> is Inter, <span className="font-mono">font-mono</span>{" "}
            is JetBrains Mono.
          </div>
        </div>
      </div>
    </div>
  );
}