"use client";

import { Ban, MousePointer2 } from "lucide-react";

/**
 * Legacy pink test utility page retained for visual QA parity.
 */
export function PinkTestPage() {
  return (
    <section className="pink-test">
      <div
        className="pink-test__card pink-test__card--banner"
        onClick={() => window.alert("Pink Power!")}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            window.alert("Pink Power!");
          }
        }}
        role="button"
        tabIndex={0}
      >
        <MousePointer2 className="pink-test__icon" />
        <h1 className="pink-test__title">This is a banner</h1>
        <p className="pink-test__subtitle">Click me</p>
      </div>

      <div className="pink-test__card pink-test__card--static">
        <Ban className="pink-test__icon" />
        <h2 className="pink-test__title pink-test__title--secondary">
          This is not a banner
        </h2>
        <p className="pink-test__subtitle pink-test__subtitle--secondary">
          don&apos;t click me
        </p>
      </div>
    </section>
  );
}
