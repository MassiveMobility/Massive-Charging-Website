"use client";

import type { ChangeEvent, FormEvent } from "react";
import type { CpoScenario } from "@/features/marketing/data/cpo";

import { useMemo, useState } from "react";

type ScenarioContentPageProps = {
  scenario: CpoScenario;
};

type ScenarioLeadState = {
  email: string;
  mobile: string;
  name: string;
  selections: Record<string, string[]>;
};

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx5ZrJeNukduFWUlpSahWcQiorMFHyCAfG9wIFt_i1yVgjF_U4AungnkQGjDURMEfCD/exec";

const INITIAL_STATE: ScenarioLeadState = {
  email: "",
  mobile: "",
  name: "",
  selections: {}
};

/**
 * Legacy scenario route page renderer.
 * This matches the previous universal landing flow used by home/fleet/community routes.
 */
export function ScenarioContentPage({ scenario }: ScenarioContentPageProps) {
  const [formValues, setFormValues] = useState<ScenarioLeadState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const considerationCards = scenario.consideration?.cards ?? [];
  const checkboxGroups = scenario.connection?.checkboxGroups ?? [];

  const heroTitle = scenario.hero?.title ?? scenario.label;
  const heroBody =
    scenario.hero?.body ??
    "Build an EV charging setup that matches your property, load profile, and expected usage.";
  const heroPill = scenario.hero?.trustPill ?? "Massive charging setup guidance";
  const heroCta = scenario.hero?.actionText ?? "Check charging readiness";

  const canSubmit = useMemo(() => {
    return formValues.name.trim().length > 1 && formValues.mobile.trim().length >= 10;
  }, [formValues.mobile, formValues.name]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormValues((previous) => ({ ...previous, [name]: value }));
  }

  function toggleCheckbox(groupLabel: string, option: string) {
    setFormValues((previous) => {
      const currentValues = previous.selections[groupLabel] ?? [];
      const nextValues = currentValues.includes(option)
        ? currentValues.filter((value) => value !== option)
        : [...currentValues, option];

      return {
        ...previous,
        selections: {
          ...previous.selections,
          [groupLabel]: nextValues
        }
      };
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const payload = {
      email: formValues.email,
      mobile: formValues.mobile,
      name: formValues.name,
      pageUrl: window.location.href,
      scenarioId: scenario.id,
      scenarioLabel: scenario.label,
      selections: formValues.selections
    };

    try {
      await fetch(APPS_SCRIPT_URL, {
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        method: "POST"
      });

      setShowSuccessPopup(true);
      window.setTimeout(() => setShowSuccessPopup(false), 2500);
      setFormValues(INITIAL_STATE);
    } catch {
      setShowSuccessPopup(false);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="hc-container">
      {showSuccessPopup ? (
        <div aria-live="polite" className="hc-success-popup" role="status">
          <p className="hc-success-popup__title">Form submitted</p>
          <p className="hc-success-popup__text">We will get back to you shortly.</p>
        </div>
      ) : null}

      <section className="hc-section hc-hero">
        <div className="hc-wrapper">
          <div className="hc-trust-pill">{heroPill}</div>
          <h1>{heroTitle}</h1>
          <p>{heroBody}</p>
          <button className="hc-btn-primary" type="button">
            {heroCta}
          </button>
          <p className="hc-hero__hint">Check if your site is EV charging ready.</p>
        </div>
      </section>

      {scenario.consideration ? (
        <section className="hc-section">
          <div className="hc-wrapper">
            <div className="hc-section-head">
              <h2>{scenario.consideration.title ?? "Things to consider before setup"}</h2>
              <p>{scenario.consideration.subtitle ?? "Validate infra, parking, and operations before deployment."}</p>
            </div>

            <div className="hc-cards-grid">
              {considerationCards.map((card) => (
                <article className="hc-card" key={`${card.title}-${card.text}`}>
                  <span className="hc-card-icon" aria-hidden="true">
                    {card.icon ?? "•"}
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}

              {scenario.consideration.ctaCard ? (
                <article className="hc-cta-card">{scenario.consideration.ctaCard}</article>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {scenario.connection ? (
        <section className="hc-section hc-section--white">
          <div className="hc-wrapper hc-wrapper--narrow">
            <div className="hc-form-container">
              <div className="hc-section-head">
                <h2>{scenario.connection.title ?? "Share your requirements"}</h2>
                <p>{scenario.connection.subtitle ?? "Tell us your setup details and we will suggest the right deployment model."}</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="hc-input-row">
                  <input
                    className="hc-input"
                    name="name"
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                    type="text"
                    value={formValues.name}
                  />
                  <input
                    className="hc-input"
                    inputMode="tel"
                    name="mobile"
                    onChange={handleInputChange}
                    placeholder="Mobile Number"
                    required
                    type="tel"
                    value={formValues.mobile}
                  />
                </div>

                <div className="hc-input-row">
                  <input
                    className="hc-input hc-input--full"
                    name="email"
                    onChange={handleInputChange}
                    placeholder="Email (optional)"
                    type="email"
                    value={formValues.email}
                  />
                </div>

                {checkboxGroups.map((group) => (
                  <fieldset className="hc-checkbox-group" key={group.label}>
                    <legend>{group.label}</legend>
                    <div className="hc-checkbox-options">
                      {group.options.map((option) => {
                        const isChecked = (formValues.selections[group.label] ?? []).includes(option);

                        return (
                          <label className="hc-checkbox-option" key={option}>
                            <input
                              checked={isChecked}
                              onChange={() => toggleCheckbox(group.label, option)}
                              type="checkbox"
                            />
                            <span>{option}</span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>
                ))}

                <button className="hc-submit-btn" disabled={!canSubmit || isSubmitting} type="submit">
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </form>

              <div className="hc-contact-panel">
                <p>Prefer to connect directly?</p>
                <div className="hc-contact-links">
                  <button className="hc-outline-btn" type="button">
                    Call Us
                  </button>
                  <button className="hc-outline-btn" type="button">
                    WhatsApp Us
                  </button>
                  <button className="hc-outline-btn" type="button">
                    Email Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
