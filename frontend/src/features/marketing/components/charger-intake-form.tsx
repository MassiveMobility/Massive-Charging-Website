"use client";

import { useEffect } from "react";

/**
 * Tally embedded form for /get-chargers.
 * Replaces the legacy multi-step wizard with a single embedded form.
 */
export function ChargerIntakeForm() {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => {
      if (typeof window !== "undefined" && "Tally" in window) {
        const tally = window as unknown as { Tally: { loadEmbeds: () => void } };
        tally.Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript && existingScript !== script) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section className="intake-form">
      <div className="intake-form__container">
        <header className="intake-form__hero">
          <div className="intake-form__badge">Get Chargers</div>
          <h1 className="intake-form__title">Set up your EV charging points and station</h1>
          <p className="intake-form__description">
            Fill in the details to get the right estimates and deployment recommendations.
          </p>
        </header>

        <div style={{ maxWidth: "100%", marginTop: "2rem" }}>
          <iframe
            data-tally-src="https://tally.so/embed/44vPPY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
            loading="lazy"
            style={{
              width: "100%",
              height: "409px",
              border: "none",
              borderRadius: "4px"
            }}
            title="Massive Charging"
          />
        </div>
      </div>
    </section>
  );
}
