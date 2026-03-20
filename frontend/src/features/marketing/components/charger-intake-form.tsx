"use client";

import type { FormEvent, ReactNode } from "react";

import { useMemo, useState } from "react";

type StepKey = "profile" | "vision" | "chargers" | "site" | "power" | "ops" | "finance";

type IntakeState = {
  budget: string;
  buildType: string;
  chargerType: string;
  city: string;
  contactMode: string;
  fullName: string;
  mobile: string;
  notes: string;
  objective: string;
  operationsModel: string;
  powerStatus: string;
  siteType: string;
  timeline: string;
  vehicleSegments: string[];
};

const APPS_SCRIPT_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxPsM6ztCf46cI3AzBdRfEuCx3BPOjI3CAEO-BCO3jvw2fdE9RJEXfcdQr3-DCvPTu_/exec";

const steps: Array<{ key: StepKey; label: string }> = [
  { key: "profile", label: "User Profile" },
  { key: "vision", label: "Charging Vision" },
  { key: "chargers", label: "Charger Config" },
  { key: "site", label: "Location" },
  { key: "power", label: "Power Status" },
  { key: "ops", label: "Operations" },
  { key: "finance", label: "Budget & Timeline" }
];

const options = {
  budgets: ["Need estimate", "INR 0.5L-2L", "INR 2L-5L", "INR 5L-15L", "INR 15L+"],
  buildTypes: ["Home", "Public Station", "Fleet", "Industrial Depot"],
  chargerTypes: ["AC", "DC", "Both", "Not sure"],
  contactModes: ["Phone Call", "WhatsApp", "Email"],
  objectives: ["Revenue", "Captive Use", "Fleet Support", "Long-term Infra"],
  operations: ["Self-managed", "Dedicated staff", "Managed by Massive", "Hybrid"],
  powerStatus: ["Connection available", "Connection unavailable", "Not sure"],
  siteTypes: ["Residential", "Commercial", "Office", "Highway", "Industrial"],
  timelines: ["Immediate", "1-3 months", "3-6 months", "Exploring"],
  vehicles: ["2W", "3W", "4W", "LCV", "Buses", "Trucks"]
} as const;

const initialState: IntakeState = {
  budget: "",
  buildType: "",
  chargerType: "",
  city: "",
  contactMode: "",
  fullName: "",
  mobile: "",
  notes: "",
  objective: "",
  operationsModel: "",
  powerStatus: "",
  siteType: "",
  timeline: "",
  vehicleSegments: []
};

function toggle(values: string[], value: string): string[] {
  if (values.includes(value)) {
    return values.filter((entry) => entry !== value);
  }

  return [...values, value];
}

/**
 * Legacy parity wizard for /get-chargers.
 */
export function ChargerIntakeForm() {
  const [formState, setFormState] = useState<IntakeState>(initialState);
  const [stepIndex, setStepIndex] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const activeStep = steps[stepIndex] ?? steps[0];
  const isLastStep = stepIndex === steps.length - 1;

  const canMoveNext = useMemo(() => {
    if (activeStep?.key === "profile") {
      return (
        formState.fullName.trim().length > 1 &&
        formState.mobile.trim().length >= 10 &&
        formState.city.trim().length > 1 &&
        formState.contactMode.trim().length > 0
      );
    }

    if (activeStep?.key === "vision") {
      return formState.buildType && formState.vehicleSegments.length > 0;
    }

    if (activeStep?.key === "chargers") {
      return formState.chargerType.length > 0;
    }

    if (activeStep?.key === "site") {
      return formState.siteType.length > 0;
    }

    if (activeStep?.key === "power") {
      return formState.powerStatus.length > 0;
    }

    if (activeStep?.key === "ops") {
      return formState.operationsModel.length > 0;
    }

    return (
      formState.objective.length > 0 && formState.budget.length > 0 && formState.timeline.length > 0
    );
  }, [activeStep, formState]);

  function setField<K extends keyof IntakeState>(field: K, value: IntakeState[K]) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  async function submitWizard() {
    if (!canMoveNext || submitting) {
      return;
    }

    setSubmitting(true);

    try {
      await fetch(APPS_SCRIPT_ENDPOINT, {
        body: JSON.stringify(formState),
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        method: "POST"
      });
      setSubmitted(true);
    } catch {
      setSubmitted(false);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="intake-form intake-form--wizard">
      <div className="intake-form__container">
        <header className="intake-form__hero">
          <div className="intake-form__badge">Get Chargers</div>
          <h1 className="intake-form__title">Set up your EV charging points and station</h1>
          <p className="intake-form__description">
            Fill in the details to get the right estimates and deployment recommendations.
          </p>
        </header>

        <div className="intake-wizard">
          <div className="intake-wizard__stepper">
            {steps.map((step, index) => (
              <button
                className={`intake-wizard__step ${index === stepIndex ? "intake-wizard__step--active" : ""}`}
                key={step.key}
                onClick={() => setStepIndex(index)}
                type="button"
              >
                <span className="intake-wizard__step-dot" />
                <span>{step.label}</span>
              </button>
            ))}
          </div>

          {submitted ? (
            <article className="intake-form__success">
              <h2>Application received</h2>
              <p>The Massive Charging team will review your details and contact you soon.</p>
            </article>
          ) : (
            <form className="intake-wizard__body" onSubmit={(event: FormEvent<HTMLFormElement>) => event.preventDefault()}>
              {activeStep?.key === "profile" ? (
                <div className="intake-wizard__grid">
                  <Field label="Full name" required>
                    <input value={formState.fullName} onChange={(event) => setField("fullName", event.target.value)} />
                  </Field>
                  <Field label="Mobile number" required>
                    <input value={formState.mobile} onChange={(event) => setField("mobile", event.target.value)} />
                  </Field>
                  <Field label="City" required>
                    <input value={formState.city} onChange={(event) => setField("city", event.target.value)} />
                  </Field>
                  <Field label="Preferred contact mode" required>
                    <ChoiceRow options={options.contactModes} value={formState.contactMode} onSelect={(value) => setField("contactMode", value)} />
                  </Field>
                </div>
              ) : null}

              {activeStep?.key === "vision" ? (
                <div className="intake-wizard__grid">
                  <Field label="Build type" required>
                    <ChoiceRow options={options.buildTypes} value={formState.buildType} onSelect={(value) => setField("buildType", value)} />
                  </Field>
                  <Field label="Vehicle segments" required>
                    <MultiChoiceRow options={options.vehicles} values={formState.vehicleSegments} onToggle={(value) => setField("vehicleSegments", toggle(formState.vehicleSegments, value))} />
                  </Field>
                </div>
              ) : null}

              {activeStep?.key === "chargers" ? <Field label="Charger type" required><ChoiceRow options={options.chargerTypes} value={formState.chargerType} onSelect={(value) => setField("chargerType", value)} /></Field> : null}
              {activeStep?.key === "site" ? <Field label="Site type" required><ChoiceRow options={options.siteTypes} value={formState.siteType} onSelect={(value) => setField("siteType", value)} /></Field> : null}
              {activeStep?.key === "power" ? <Field label="Power status" required><ChoiceRow options={options.powerStatus} value={formState.powerStatus} onSelect={(value) => setField("powerStatus", value)} /></Field> : null}
              {activeStep?.key === "ops" ? <Field label="Operations model" required><ChoiceRow options={options.operations} value={formState.operationsModel} onSelect={(value) => setField("operationsModel", value)} /></Field> : null}

              {activeStep?.key === "finance" ? (
                <div className="intake-wizard__grid">
                  <Field label="Primary objective" required>
                    <ChoiceRow options={options.objectives} value={formState.objective} onSelect={(value) => setField("objective", value)} />
                  </Field>
                  <Field label="Budget range" required>
                    <ChoiceRow options={options.budgets} value={formState.budget} onSelect={(value) => setField("budget", value)} />
                  </Field>
                  <Field label="Timeline" required>
                    <ChoiceRow options={options.timelines} value={formState.timeline} onSelect={(value) => setField("timeline", value)} />
                  </Field>
                  <Field label="Notes">
                    <textarea rows={4} value={formState.notes} onChange={(event) => setField("notes", event.target.value)} />
                  </Field>
                </div>
              ) : null}

              <footer className="intake-wizard__footer">
                <button className="intake-wizard__nav intake-wizard__nav--secondary" disabled={stepIndex === 0 || submitting} onClick={() => setStepIndex((current) => Math.max(0, current - 1))} type="button">Back</button>
                <p className="intake-wizard__progress">Step {stepIndex + 1} of {steps.length}</p>
                {isLastStep ? (
                  <button className="intake-wizard__nav intake-wizard__nav--primary" disabled={!canMoveNext || submitting} onClick={submitWizard} type="button">
                    {submitting ? "Submitting..." : "Submit Application"}
                  </button>
                ) : (
                  <button className="intake-wizard__nav intake-wizard__nav--primary" disabled={!canMoveNext || submitting} onClick={() => setStepIndex((current) => Math.min(steps.length - 1, current + 1))} type="button">Next</button>
                )}
              </footer>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  children: ReactNode;
  label: string;
  required?: boolean;
};

function Field({ children, label, required }: FieldProps) {
  return (
    <label className="intake-wizard__field">
      <span className="intake-wizard__label">
        {label} {required ? <strong>(required)</strong> : null}
      </span>
      {children}
    </label>
  );
}

type ChoiceRowProps = {
  onSelect: (value: string) => void;
  options: readonly string[];
  value: string;
};

function ChoiceRow({ onSelect, options, value }: ChoiceRowProps) {
  return (
    <div className="intake-wizard__chips">
      {options.map((option) => (
        <button className={`intake-wizard__chip ${value === option ? "intake-wizard__chip--active" : ""}`} key={option} onClick={() => onSelect(option)} type="button">{option}</button>
      ))}
    </div>
  );
}

type MultiChoiceRowProps = {
  onToggle: (value: string) => void;
  options: readonly string[];
  values: string[];
};

function MultiChoiceRow({ onToggle, options, values }: MultiChoiceRowProps) {
  return (
    <div className="intake-wizard__chips">
      {options.map((option) => (
        <button className={`intake-wizard__chip ${values.includes(option) ? "intake-wizard__chip--active" : ""}`} key={option} onClick={() => onToggle(option)} type="button">{option}</button>
      ))}
    </div>
  );
}
