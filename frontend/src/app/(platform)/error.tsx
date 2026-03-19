"use client";

import { useEffect } from "react";

type PlatformErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function PlatformError({ error, reset }: PlatformErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="surface" role="alert">
      <p className="eyebrow">Platform route error</p>
      <h1>We could not load this admin page.</h1>
      <p>Please retry. If this keeps happening, share the route details with the team.</p>
      <button onClick={reset} type="button">
        Retry
      </button>
    </section>
  );
}
