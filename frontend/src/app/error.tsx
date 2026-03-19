"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main-content">
      <section className="surface" role="alert">
        <p className="eyebrow">Something went wrong</p>
        <h1>We could not load this page.</h1>
        <p>Please try again. If this keeps happening, contact the team with the page URL.</p>
        <button onClick={reset} type="button">
          Try again
        </button>
      </section>
    </main>
  );
}
