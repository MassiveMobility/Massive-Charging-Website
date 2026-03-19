"use client";

import { useEffect } from "react";

type MarketingErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function MarketingError({ error, reset }: MarketingErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="surface" role="alert">
      <p className="eyebrow">Marketing route error</p>
      <h1>We could not render this page.</h1>
      <p>Please retry. If the issue persists, share this URL with the team.</p>
      <button onClick={reset} type="button">
        Try again
      </button>
    </section>
  );
}
