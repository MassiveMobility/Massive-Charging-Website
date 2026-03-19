"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";

type FormState = {
  fullName: string;
  mobile: string;
  email: string;
  city: string;
  buildType: string;
  vehicleSegment: string;
  chargerType: string;
  timeline: string;
  notes: string;
};

const buildTypeOptions = [
  "Home or private charging",
  "Public charging station",
  "Fleet or depot charging",
  "Commercial property charging"
] as const;

const vehicleSegmentOptions = [
  "2-wheeler",
  "3-wheeler",
  "4-wheeler",
  "Mixed fleet"
] as const;

const chargerTypeOptions = [
  "AC chargers",
  "DC chargers",
  "Both AC and DC",
  "Need recommendation"
] as const;

const timelineOptions = [
  "Immediate",
  "1 to 3 months",
  "3 to 6 months",
  "Exploring options"
] as const;

const initialFormState: FormState = {
  fullName: "",
  mobile: "",
  email: "",
  city: "",
  buildType: "",
  vehicleSegment: "",
  chargerType: "",
  timeline: "",
  notes: ""
};

/**
 * Requirement intake form for migrated /get-chargers route.
 */
export function ChargerIntakeForm() {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = useMemo(() => {
    return (
      formState.fullName.trim().length > 1 &&
      formState.mobile.trim().length >= 10 &&
      formState.city.trim().length > 1 &&
      formState.buildType.trim().length > 0 &&
      formState.vehicleSegment.trim().length > 0 &&
      formState.chargerType.trim().length > 0 &&
      formState.timeline.trim().length > 0
    );
  }, [formState]);

  function setField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    // Placeholder submit handler until backend integration is completed.
    setSubmitted(true);
  }

  return (
    <section className="intake-form">
      <div className="intake-form__container">
        <div className="intake-form__hero">
          <div className="intake-form__badge">Get Chargers</div>
          <h1 className="intake-form__title">Share your charging requirement</h1>
          <p className="intake-form__description">
            This route is now fully migrated with a structured intake form. Submit project details
            so the team can recommend setup, cost range, and rollout approach.
          </p>
        </div>

        {submitted ? (
          <article className="intake-form__success">
            <h2>Application received</h2>
            <p>
              Your requirement has been captured. The Massive Charging team can now review it and
              respond with a deployment plan.
            </p>
          </article>
        ) : null}

        <form className="intake-form__form" onSubmit={handleSubmit}>
          <div className="intake-form__grid">
            <label className="intake-form__field">
              <span>Full name</span>
              <input
                onChange={(event) => setField("fullName", event.target.value)}
                required
                type="text"
                value={formState.fullName}
              />
            </label>

            <label className="intake-form__field">
              <span>Mobile number</span>
              <input
                inputMode="tel"
                onChange={(event) => setField("mobile", event.target.value)}
                required
                type="tel"
                value={formState.mobile}
              />
            </label>

            <label className="intake-form__field">
              <span>Email address</span>
              <input
                onChange={(event) => setField("email", event.target.value)}
                type="email"
                value={formState.email}
              />
            </label>

            <label className="intake-form__field">
              <span>City</span>
              <input
                onChange={(event) => setField("city", event.target.value)}
                required
                type="text"
                value={formState.city}
              />
            </label>

            <label className="intake-form__field">
              <span>Build type</span>
              <select
                onChange={(event) => setField("buildType", event.target.value)}
                required
                value={formState.buildType}
              >
                <option value="">Select build type</option>
                {buildTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="intake-form__field">
              <span>Vehicle segment</span>
              <select
                onChange={(event) => setField("vehicleSegment", event.target.value)}
                required
                value={formState.vehicleSegment}
              >
                <option value="">Select vehicle segment</option>
                {vehicleSegmentOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="intake-form__field">
              <span>Charger type preference</span>
              <select
                onChange={(event) => setField("chargerType", event.target.value)}
                required
                value={formState.chargerType}
              >
                <option value="">Select charger type</option>
                {chargerTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="intake-form__field">
              <span>Deployment timeline</span>
              <select
                onChange={(event) => setField("timeline", event.target.value)}
                required
                value={formState.timeline}
              >
                <option value="">Select timeline</option>
                {timelineOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="intake-form__field intake-form__field--full">
            <span>Additional notes</span>
            <textarea
              onChange={(event) => setField("notes", event.target.value)}
              rows={5}
              value={formState.notes}
            />
          </label>

          <div className="intake-form__footer">
            <button className="intake-form__submit" disabled={!canSubmit} type="submit">
              Submit requirement
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
