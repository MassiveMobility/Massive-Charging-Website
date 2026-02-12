import React, { useMemo, useReducer } from "react";
import { Link } from "react-router-dom";

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

/**
 * DiscoverRequirementDashboard.tsx
 * Single-page dashboard layout (Step Engine + Live Blueprint)
 *
 * NOTES for future Tailwind tokens:
 * - White infra grid background uses arbitrary bg gradients.
 *   Consider making a utility class later (e.g., `bg-infra-grid`).
 * - “Monitor” (dark) blueprint uses arbitrary rgba colors.
 *   Consider tokens like `bg-mcn-monitor`, `border-mcn-monitor-stroke`, etc.
 */

// -----------------------------
// Types
// -----------------------------
type LocationType =
  | "Society/Apartment"
  | "Retail/Restaurant/Mall"
  | "Office/IT Park"
  | "Highway/Fuel Pump"
  | "Fleet/Warehouse"
  | "Other";

type CustomerType =
  | "Property owner"
  | "Tenant/operator"
  | "Business owner"
  | "Fleet operator"
  | "Investor";

type ParkingSlots = "1–2" | "3–5" | "6–10" | "10+";
type AccessType = "Private" | "Semi-public" | "Public";
type OperatingHours = "24x7" | "Business hours" | "Gated access";

type PowerAvailability = "Basic" | "Moderate" | "High" | "Not sure";
type PhaseAvailable = "Yes" | "No" | "Not sure";
type DistanceFromPanel = "Near" | "Medium" | "Far";

type ChargingFocus = "Max earnings" | "Low investment" | "Future-proof";
type VehicleMix = "2W dominant" | "4W dominant" | "Mixed" | "Fleet";

type BudgetRange = "Low" | "Medium" | "High" | "Not sure";
type CapexPreference = "Upfront" | "Hybrid" | "Not sure";

type Footfall = "Low" | "Medium" | "High";
type Competition = "None" | "Some" | "Many" | "Not sure";
type DwellTime = "<30 min" | "30–60 min" | "60–120 min" | "2+ hrs";

type OpsPreference = "MCN managed" | "Self-manage with tools";
type StaffAvailability = "Yes" | "No";

type Confidence = "High" | "Medium" | "Low";

type FormState = {
  stepIndex: number;

  // Step 1
  locationType?: LocationType;
  city?: string;
  customerType?: CustomerType;

  // Step 2
  parkingSlots?: ParkingSlots;
  accessType?: AccessType;
  operatingHours?: OperatingHours;

  // Step 3
  powerAvailability?: PowerAvailability;
  phaseAvailable?: PhaseAvailable;
  distanceFromPanel?: DistanceFromPanel;

  // Step 4
  chargingFocus?: ChargingFocus;
  vehicleMix?: VehicleMix;

  // Step 5
  budgetRange?: BudgetRange;
  capexPreference?: CapexPreference;

  // Step 6
  footfall?: Footfall;
  competition?: Competition;
  dwellTime?: DwellTime;

  // Step 7
  opsPreference?: OpsPreference;
  staffAvailability?: StaffAvailability;
};

type Action =
  | { type: "SET"; key: keyof FormState; value: any }
  | { type: "NEXT" }
  | { type: "BACK" }
  | { type: "GOTO"; index: number };

// -----------------------------
// Helpers
// -----------------------------
const clamp = (n: number, a: number, b: number) => Math.max(a, Math.min(b, n));

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

function reducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case "SET":
      return { ...state, [action.key]: action.value };
    case "NEXT":
      return { ...state, stepIndex: clamp(state.stepIndex + 1, 0, 7) };
    case "BACK":
      return { ...state, stepIndex: clamp(state.stepIndex - 1, 0, 7) };
    case "GOTO":
      return { ...state, stepIndex: clamp(action.index, 0, 7) };
    default:
      return state;
  }
}

const initialState: FormState = { stepIndex: 0 };

// -----------------------------
// Computation (simple, believable stubs)
// -----------------------------
function computeBlueprint(s: FormState) {
  // Recommended model (very simplified rules)
  let recommendedModel: "AC" | "DC" | "Hybrid" = "AC";
  if (s.locationType === "Highway/Fuel Pump" || s.locationType === "Fleet/Warehouse") recommendedModel = "Hybrid";
  if (s.powerAvailability === "High") recommendedModel = "Hybrid";
  if (s.powerAvailability === "Basic") recommendedModel = "AC";

  // Use-case
  const useCase =
    s.locationType === "Highway/Fuel Pump"
      ? "En-route charging"
      : s.locationType === "Fleet/Warehouse"
      ? "Depot charging"
      : s.locationType === "Office/IT Park"
      ? "Workplace charging"
      : s.locationType === "Society/Apartment"
      ? "Overnight charging"
      : "Destination charging";

  // Confidence based on completeness
  const filledCount = Object.entries(s).filter(([k, v]) => k !== "stepIndex" && v !== undefined && v !== "").length;
  const confidence: Confidence = filledCount >= 10 ? "High" : filledCount >= 6 ? "Medium" : "Low";

  // Setup suggestion (simple)
  const setup =
    recommendedModel === "AC"
      ? "2× AC (7.4–11 kW)"
      : recommendedModel === "DC"
      ? "1× DC (30–60 kW)"
      : "2× AC + 1× DC (30 kW)";

  // Investment range (rough ranges)
  const baseCapex =
    s.budgetRange === "Low" ? 450000 :
    s.budgetRange === "High" ? 1400000 :
    s.budgetRange === "Medium" ? 900000 : 750000;

  const powerComplexity =
    s.distanceFromPanel === "Far" ? 180000 :
    s.distanceFromPanel === "Medium" ? 90000 : 40000;

  const totalMin = Math.round((baseCapex + powerComplexity) * 0.85);
  const totalMax = Math.round((baseCapex + powerComplexity) * 1.15);

  // Demand model
  const footfallFactor = s.footfall === "High" ? 1.4 : s.footfall === "Medium" ? 1.0 : 0.7;
  const competitionFactor = s.competition === "Many" ? 0.75 : s.competition === "Some" ? 0.9 : 1.0;
  const dwellFactor = s.dwellTime === "2+ hrs" ? 1.2 : s.dwellTime === "60–120 min" ? 1.05 : 0.9;

  const sessionsPerDay = Math.max(6, Math.round(18 * footfallFactor * competitionFactor * dwellFactor));
  const avgRevenuePerSession =
    recommendedModel === "Hybrid" ? 190 : recommendedModel === "DC" ? 220 : 140;

  const gross = sessionsPerDay * avgRevenuePerSession * 30;
  const grossMin = Math.round(gross * 0.8 / 1000) * 1000;
  const grossMax = Math.round(gross * 1.2 / 1000) * 1000;

  // Net (placeholder)
  const netMin = Math.round(grossMin * 0.72 / 1000) * 1000;
  const netMax = Math.round(grossMax * 0.78 / 1000) * 1000;

  // Payback in months (rough)
  const avgInvest = (totalMin + totalMax) / 2;
  const avgNet = (netMin + netMax) / 2;
  const paybackMonths = avgNet > 0 ? Math.round(avgInvest / avgNet) : 0;

  const timeToLive =
    s.powerAvailability === "Not sure" || s.distanceFromPanel === "Far" ? "2–4 weeks" : "7–14 days";

  return {
    recommendedModel,
    useCase,
    confidence,
    setup,
    totalMin,
    totalMax,
    timeToLive,
    sessionsPerDay,
    avgRevenuePerSession,
    grossMin,
    grossMax,
    netMin,
    netMax,
    paybackMonths,
  };
}

// -----------------------------
// Small UI primitives
// -----------------------------
function StepItem({
  index,
  title,
  isActive,
  status,
  onClick,
}: {
  index: number;
  title: string;
  isActive: boolean;
  status: "done" | "todo" | "warn";
  onClick: () => void;
}) {
  const dot =
    status === "done" ? "bg-mcn-green" : status === "warn" ? "bg-mcn-semantic-warning" : "bg-mcn-stroke-strong";
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "w-full text-left rounded-mcn-lg px-3 py-3 transition duration-fast ease-ease-out-standard",
        isActive ? "bg-mcn-surface2 shadow-mcn-soft" : "hover:bg-mcn-surface2/70",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
        <div className="text-mt-down-1 font-semibold text-mcn-text-primary">
          {index + 1}. {title}
        </div>
      </div>
    </button>
  );
}

function ChipGroup<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value?: T;
  options: T[];
  onChange: (v: T) => void;
}) {
  return (
    <div>
      <div className="text-mt-down-1 text-mcn-text-muted">{label}</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((o) => {
          const active = o === value;
          return (
            <button
              key={o}
              type="button"
              onClick={() => onChange(o)}
              className={[
                "rounded-full px-4 py-2 text-mt-down-1 font-semibold transition duration-fast ease-ease-out-standard",
                active
                  ? "bg-mcn-ink-bg text-mcn-ink-text-primary shadow-mcn-soft"
                  : "border border-mcn-stroke-soft bg-white text-mcn-text-muted hover:bg-mcn-surface2",
              ].join(" ")}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TextField({
  label,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  value?: string;
  placeholder?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <div className="text-mt-down-1 text-mcn-text-muted">{label}</div>
      <input
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-mcn-lg border border-mcn-stroke-soft bg-white px-4 py-3 text-mt-base outline-none ring-2 ring-transparent transition duration-fast ease-ease-out-standard focus:ring-mcn-blue"
      />
    </div>
  );
}

function PrimaryButton({ children, to }: { children: React.ReactNode; to: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center rounded-mcn-lg bg-mcn-red px-6 py-3 font-semibold text-mcn-text-inverse shadow-mcn-card transition duration-fast ease-ease-out-standard hover:bg-mcn-red-hover"
    >
      {children}
    </Link>
  );
}

function SecondaryButton({ children, to }: { children: React.ReactNode; to: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center rounded-mcn-lg border border-mcn-stroke-soft bg-white px-6 py-3 font-semibold text-mcn-text-primary shadow-mcn-soft transition duration-fast ease-ease-out-standard hover:shadow-mcn-card"
    >
      {children}
    </Link>
  );
}

// -----------------------------
// Page Component
// -----------------------------
export default function DiscoverRequirementDashboard() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const steps = [
    "Business context",
    "Site & parking",
    "Power availability",
    "Recommended setup",
    "Investment estimate",
    "Demand & earnings",
    "Operations & payouts",
    "Your blueprint",
  ] as const;

  // Minimal completion rules (expand later)
  const stepStatus = (i: number): "done" | "todo" | "warn" => {
    const s = state;
    const rules: Array<() => boolean> = [
      () => !!s.locationType && !!s.city && !!s.customerType,
      () => !!s.parkingSlots && !!s.accessType && !!s.operatingHours,
      () => !!s.powerAvailability && !!s.phaseAvailable && !!s.distanceFromPanel,
      () => !!s.chargingFocus && !!s.vehicleMix,
      () => !!s.budgetRange && !!s.capexPreference,
      () => !!s.footfall && !!s.competition && !!s.dwellTime,
      () => !!s.opsPreference && !!s.staffAvailability,
      () => rules.slice(0, 7).every((fn) => fn()),
    ];

    const ok = rules[i]?.() ?? false;
    if (ok) return "done";
    // warn if user passed this step but it's incomplete
    if (state.stepIndex > i) return "warn";
    return "todo";
  };

  const completedCount = Array.from({ length: 7 }).filter((_, i) => stepStatus(i) === "done").length;
  const progressPct = Math.round((completedCount / 7) * 100);

  const blueprint = useMemo(() => computeBlueprint(state), [state]);

  // -----------------------------
  // Render active step inputs
  // -----------------------------
  const ActiveStep = () => {
    const i = state.stepIndex;

    const commonCard = "rounded-mcn-xl border border-mcn-stroke-soft bg-mcn-surface p-6 shadow-mcn-soft";
    const gap = "mt-6 grid gap-5";

    if (i === 0) {
      return (
        <div className={commonCard}>
          <div className="font-heading text-mt-up-2">Business context</div>
          <p className="mt-2 text-mt-base text-mcn-text-muted">
            Tell us what you own and where it is. We’ll recommend the best charging model for that context.
          </p>

          <div className={gap}>
            <ChipGroup<LocationType>
              label="Location type"
              value={state.locationType}
              options={[
                "Society/Apartment",
                "Retail/Restaurant/Mall",
                "Office/IT Park",
                "Highway/Fuel Pump",
                "Fleet/Warehouse",
                "Other",
              ]}
              onChange={(v) => dispatch({ type: "SET", key: "locationType", value: v })}
            />

            <TextField
              label="City / Area"
              value={state.city}
              placeholder="e.g., Bengaluru, Whitefield"
              onChange={(v) => dispatch({ type: "SET", key: "city", value: v })}
            />

            <ChipGroup<CustomerType>
              label="You are a…"
              value={state.customerType}
              options={["Property owner", "Tenant/operator", "Business owner", "Fleet operator", "Investor"]}
              onChange={(v) => dispatch({ type: "SET", key: "customerType", value: v })}
            />
          </div>
        </div>
      );
    }

    if (i === 1) {
      return (
        <div className={commonCard}>
          <div className="font-heading text-mt-up-2">Site & parking</div>
          <p className="mt-2 text-mt-base text-mcn-text-muted">
            Parking, access, and operating hours determine how many sessions you can realistically serve per day.
          </p>

          <div className={gap}>
            <ChipGroup<ParkingSlots>
              label="Parking spaces available"
              value={state.parkingSlots}
              options={["1–2", "3–5", "6–10", "10+"]}
              onChange={(v) => dispatch({ type: "SET", key: "parkingSlots", value: v })}
            />

            <ChipGroup<AccessType>
              label="Access type"
              value={state.accessType}
              options={["Private", "Semi-public", "Public"]}
              onChange={(v) => dispatch({ type: "SET", key: "accessType", value: v })}
            />

            <ChipGroup<OperatingHours>
              label="Operating hours"
              value={state.operatingHours}
              options={["24x7", "Business hours", "Gated access"]}
              onChange={(v) => dispatch({ type: "SET", key: "operatingHours", value: v })}
            />
          </div>
        </div>
      );
    }

    if (i === 2) {
      return (
        <div className={commonCard}>
          <div className="font-heading text-mt-up-2">Power availability</div>
          <p className="mt-2 text-mt-base text-mcn-text-muted">
            Don’t worry if you don’t know exact kW. Pick the closest option; we’ll confirm with a site survey.
          </p>

          <div className={gap}>
            <ChipGroup<PowerAvailability>
              label="Power availability"
              value={state.powerAvailability}
              options={["Basic", "Moderate", "High", "Not sure"]}
              onChange={(v) => dispatch({ type: "SET", key: "powerAvailability", value: v })}
            />

            <ChipGroup<PhaseAvailable>
              label="3-phase available?"
              value={state.phaseAvailable}
              options={["Yes", "No", "Not sure"]}
              onChange={(v) => dispatch({ type: "SET", key: "phaseAvailable", value: v })}
            />

            <ChipGroup<DistanceFromPanel>
              label="Distance from electrical panel"
              value={state.distanceFromPanel}
              options={["Near", "Medium", "Far"]}
              onChange={(v) => dispatch({ type: "SET", key: "distanceFromPanel", value: v })}
            />
          </div>
        </div>
      );
    }

    if (i === 3) {
      return (
        <div className={commonCard}>
          <div className="font-heading text-mt-up-2">Recommended setup</div>
          <p className="mt-2 text-mt-base text-mcn-text-muted">
            Choose what matters most. We’ll balance charger type, cost, and future readiness accordingly.
          </p>

          <div className={gap}>
            <ChipGroup<ChargingFocus>
              label="Your focus"
              value={state.chargingFocus}
              options={["Max earnings", "Low investment", "Future-proof"]}
              onChange={(v) => dispatch({ type: "SET", key: "chargingFocus", value: v })}
            />

            <ChipGroup<VehicleMix>
              label="Expected vehicle mix"
              value={state.vehicleMix}
              options={["2W dominant", "4W dominant", "Mixed", "Fleet"]}
              onChange={(v) => dispatch({ type: "SET", key: "vehicleMix", value: v })}
            />
          </div>
        </div>
      );
    }

    if (i === 4) {
      return (
        <div className={commonCard}>
          <div className="font-heading text-mt-up-2">Investment estimate</div>
          <p className="mt-2 text-mt-base text-mcn-text-muted">
            We’ll give a range, not a sales quote. Final pricing depends on site readiness and charger selection.
          </p>

          <div className={gap}>
            <ChipGroup<BudgetRange>
              label="Budget range"
              value={state.budgetRange}
              options={["Low", "Medium", "High", "Not sure"]}
              onChange={(v) => dispatch({ type: "SET", key: "budgetRange", value: v })}
            />

            <ChipGroup<CapexPreference>
              label="CAPEX preference"
              value={state.capexPreference}
              options={["Upfront", "Hybrid", "Not sure"]}
              onChange={(v) => dispatch({ type: "SET", key: "capexPreference", value: v })}
            />
          </div>
        </div>
      );
    }

    if (i === 5) {
      return (
        <div className={commonCard}>
          <div className="font-heading text-mt-up-2">Demand & earnings</div>
          <p className="mt-2 text-mt-base text-mcn-text-muted">
            This is a business. Demand is local. Give us your best estimate; we’ll compute ranges with confidence.
          </p>

          <div className={gap}>
            <ChipGroup<Footfall>
              label="Footfall / EV presence"
              value={state.footfall}
              options={["Low", "Medium", "High"]}
              onChange={(v) => dispatch({ type: "SET", key: "footfall", value: v })}
            />

            <ChipGroup<Competition>
              label="Nearby competition"
              value={state.competition}
              options={["None", "Some", "Many", "Not sure"]}
              onChange={(v) => dispatch({ type: "SET", key: "competition", value: v })}
            />

            <ChipGroup<DwellTime>
              label="Average dwell time"
              value={state.dwellTime}
              options={["<30 min", "30–60 min", "60–120 min", "2+ hrs"]}
              onChange={(v) => dispatch({ type: "SET", key: "dwellTime", value: v })}
            />
          </div>
        </div>
      );
    }

    if (i === 6) {
      return (
        <div className={commonCard}>
          <div className="font-heading text-mt-up-2">Operations & payouts</div>
          <p className="mt-2 text-mt-base text-mcn-text-muted">
            Decide how hands-on you want to be. We can run ops, or you can self-manage with our tools.
          </p>

          <div className={gap}>
            <ChipGroup<OpsPreference>
              label="Operations preference"
              value={state.opsPreference}
              options={["MCN managed", "Self-manage with tools"]}
              onChange={(v) => dispatch({ type: "SET", key: "opsPreference", value: v })}
            />

            <ChipGroup<StaffAvailability>
              label="Staff availability"
              value={state.staffAvailability}
              options={["Yes", "No"]}
              onChange={(v) => dispatch({ type: "SET", key: "staffAvailability", value: v })}
            />
          </div>
        </div>
      );
    }

    // Step 7: Blueprint summary
    return (
      <div className={commonCard}>
        <div className="font-heading text-mt-up-2">Your blueprint</div>
        <p className="mt-2 text-mt-base text-mcn-text-muted">
          This is your shareable plan. Next, book a site survey to confirm power, layout, and final BOM.
        </p>

        <div className="mt-6 grid gap-4">
          <div className="rounded-mcn-lg border border-mcn-stroke-soft bg-mcn-bg p-4">
            <div className="text-mt-down-1 text-mcn-text-muted">Recommended model</div>
            <div className="mt-1 font-heading text-mt-up-2 ">{blueprint.recommendedModel} • {blueprint.useCase}</div>
            <div className="mt-1 text-mt-down-1 text-mcn-text-muted">Setup: {blueprint.setup}</div>
          </div>

          <div className="rounded-mcn-lg border border-mcn-stroke-soft bg-mcn-bg p-4">
            <div className="text-mt-down-1 text-mcn-text-muted">Investment</div>
            <div className="mt-1 font-heading text-mt-up-2">
              {formatINR(blueprint.totalMin)} – {formatINR(blueprint.totalMax)}
            </div>
            <div className="mt-1 text-mt-down-1 text-mcn-text-muted">Go-live: {blueprint.timeToLive}</div>
          </div>

          <div className="rounded-mcn-lg border border-mcn-stroke-soft bg-mcn-bg p-4">
            <div className="text-mt-down-1 text-mcn-text-muted">Earnings (range)</div>
            <div className="mt-1 font-heading text-mt-up-2 text-mcn-green">
              {formatINR(blueprint.netMin)} – {formatINR(blueprint.netMax)}
            </div>
            <div className="mt-1 text-mt-down-1 text-mcn-text-muted">
              Payback ~ {blueprint.paybackMonths} months (approx)
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <PrimaryButton to="/contact">Book site survey</PrimaryButton>
            <SecondaryButton to="/station-business">Download detailed guide</SecondaryButton>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-mcn-text-primary">
      {/* White infra background (grid + dots). Keep muted. */}
      <div className="pointer-events-none absolute inset-0">
        {/* NOTE: consider converting to a named Tailwind utility later */}
        <div className="absolute inset-0 opacity-[0.95] bg-[linear-gradient(to_right,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.045)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute inset-0 opacity-[0.28] bg-[radial-gradient(rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:18px_18px]" />
        <div className="absolute -top-48 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-[rgba(18,184,214,0.08)] blur-3xl" />
        <div className="absolute -bottom-52 left-1/4 h-[560px] w-[560px] rounded-full bg-[rgba(47,107,255,0.06)] blur-3xl" />
      </div>

      <div className="relative">
  {/* DASHBOARD WRAPPER (faint boundary) */}
  <div className="container py-8">
    <div className="overflow-hidden rounded-2xl border border-mcn-stroke-soft bg-white/60 shadow-mcn-soft backdrop-blur-mcn">
      {/* Top Bar (inside dashboard boundary) */}
      <div className="border-b border-mcn-stroke-soft bg-white/70">
        <div className="p-4 md:p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-heading text-mt-up-2">Earn By Charging Calculator</div>
              <div className="mt-1 text-mt-down-1 text-mcn-text-muted">
                Build your charging station blueprint in minutes.
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:block text-mt-down-1 text-mcn-text-muted">
                Progress: {progressPct}%
              </div>

              <div className="w-36 rounded-full bg-mcn-surface2">
                <div
                  className="h-2 rounded-full bg-mcn-blue transition-all"
                  style={{ width: `${progressPct}%` }}
                />
              </div>

              <SecondaryButton to="/contact">Talk to an expert</SecondaryButton>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid (inside same boundary) */}
      <div className="p-4 md:p-6">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left: Stepper + Active Step */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 lg:grid-cols-12">
              {/* Stepper */}
              <div className="lg:col-span-4">
                <div className="rounded-mcn-xl border border-mcn-stroke-soft bg-mcn-surface p-3 shadow-mcn-soft">
                  <div className="px-2 pb-2 text-mt-down-1 text-mcn-text-muted">
                    Steps
                  </div>

                  <div className="grid gap-1">
                    {steps.map((t, idx) => (
                      <StepItem
                        key={t}
                        index={idx}
                        title={t}
                        isActive={state.stepIndex === idx}
                        status={stepStatus(idx)}
                        onClick={() => dispatch({ type: "GOTO", index: idx })}
                      />
                    ))}
                  </div>

                  <div className="mt-3 px-2 text-mt-down-2 text-mcn-text-faint">
                    Complete the first 3 steps to see a reliable setup recommendation.
                  </div>
                </div>
              </div>

              {/* Active Step */}
              <div className="lg:col-span-8">
                <ActiveStep />

                <div className="mt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => dispatch({ type: "BACK" })}
                    className="rounded-mcn-lg border border-mcn-stroke-soft bg-white px-5 py-3 font-semibold text-mcn-text-primary shadow-mcn-soft transition duration-fast ease-ease-out-standard hover:shadow-mcn-card disabled:opacity-50"
                    disabled={state.stepIndex === 0}
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={() => dispatch({ type: "NEXT" })}
                    className="rounded-mcn-lg bg-mcn-ink-bg px-5 py-3 font-semibold text-mcn-ink-text-primary shadow-mcn-soft transition duration-fast ease-ease-out-standard hover:shadow-mcn-card"
                    disabled={state.stepIndex === 7}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Blueprint (Sticky) */}
          <div className="lg:col-span-5">
            <div className="sticky top-[92px]">
              {/* Monitor-style blueprint card */}
              <div className="relative overflow-hidden rounded-mcn-xl border border-[rgba(255,255,255,0.12)] bg-[rgba(17,17,20,0.90)] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.55)]">
                {/* monitor glow accents */}
                <div className="pointer-events-none absolute -right-14 -top-14 h-56 w-56 rounded-full bg-[rgba(18,184,214,0.18)] blur-3xl" />
                <div className="pointer-events-none absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-[rgba(47,107,255,0.16)] blur-3xl" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="inline-flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-mcn-lg border border-white/10 bg-white/5">
                        <ChargerIcon className="h-6 w-6 text-white/90" />
                      </span>
                      <div>
                        <div className="text-mt-down-1 font-semibold text-white/90">
                          Live Blueprint
                        </div>
                        <div className="text-mt-down-2 text-white/60">
                          Updates as you fill steps
                        </div>
                      </div>
                    </div>

                    <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-mt-down-2 font-semibold text-white/70">
                      {blueprint.confidence} confidence
                    </span>
                  </div>

                  {/* Model */}
                  <div className="mt-6 rounded-mcn-lg border border-white/10 bg-white/5 p-4">
                    <div className="text-mt-down-2 text-white/60">Recommended model</div>
                    <div className="mt-1 font-heading text-mt-up-2 text-mcn-blue drop-shadow-[0_0_10px_rgba(47,107,255,0.7)]">
                      {blueprint.recommendedModel} • {blueprint.useCase}
                    </div>
                    <div className="mt-1 text-mt-down-1 text-white/65">Setup: {blueprint.setup}</div>
                  </div>

                  {/* Requirements checklist */}
                  <div className="mt-4 rounded-mcn-lg border border-white/10 bg-white/5 p-4">
                    <div className="text-mt-down-2 text-white/60">Requirements</div>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      <div>
                        <div className="text-mt-down-1 font-semibold text-white/85">You arrange</div>
                        <ul className="mt-2 space-y-1 text-mt-down-1 text-white/65">
                          <li>• Land / parking space</li>
                          <li>• Electricity connection</li>
                          <li>• Basic permissions</li>
                        </ul>
                      </div>
                      <div>
                        <div className="text-mt-down-1 font-semibold text-white/85">MCN provides</div>
                        <ul className="mt-2 space-y-1 text-mt-down-1 text-white/65">
                          <li>• Hardware + installation</li>
                          <li>• Software + payments</li>
                          <li>• Monitoring + support</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Investment */}
                  <div className="mt-4 rounded-mcn-lg border border-white/10 bg-white/5 p-4">
                    <div className="text-mt-down-2 text-white/60">Investment estimate</div>
                    <div className="mt-1 font-heading text-mt-up-2 text-[rgba(34,197,94,0.95)]">
                      {formatINR(blueprint.totalMin)} – {formatINR(blueprint.totalMax)}
                    </div>
                    <div className="mt-1 text-mt-down-1 text-white/60">Go-live: {blueprint.timeToLive}</div>
                  </div>

                  {/* Earnings */}
                  <div className="mt-4 rounded-mcn-lg border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-mt-down-2 text-white/60">Earnings (range)</div>
                      <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-mt-down-2 font-semibold text-white/70">
                        Computed
                      </span>
                    </div>

                    <div className="mt-1 font-heading text-mt-up-2 text-[rgba(74,222,128,0.95)]">
                      {formatINR(blueprint.netMin)} – {formatINR(blueprint.netMax)}
                    </div>

                    <div className="mt-2 text-mt-down-1 text-white/60">
                      Sessions/day ~ <span className="font-semibold text-white/80">{blueprint.sessionsPerDay}</span>
                      {" · "}
                      Avg/session ~ <span className="font-semibold text-white/80">₹{blueprint.avgRevenuePerSession}</span>
                    </div>

                    <div className="mt-2 text-mt-down-1 text-white/55">
                      Payback ~ {blueprint.paybackMonths} months (approx)
                    </div>

                    <div className="mt-3 text-mt-down-2 text-white/45">
                      *Earnings vary by location, utilization, tariff, and charger type.
                    </div>
                  </div>

                  {/* Next actions */}
                  <div className="mt-5 flex flex-wrap gap-3">
                    <PrimaryButton to="/contact">Book site survey</PrimaryButton>
                    <SecondaryButton to="/station-business">Detailed guide</SecondaryButton>
                  </div>
                </div>
              </div>

              {/* Small note */}
              <div className="mt-3 text-mt-down-2 text-mcn-text-muted">
                Tip: Fill Step 3 (Power) and Step 6 (Demand) to make estimates far more accurate.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end dashboard wrapper */}
    </div>
  </div>

  {/* Footer spacing */}
  <div className="h-10" />
</div>

    </div>
  );
}
