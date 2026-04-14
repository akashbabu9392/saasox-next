"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Intentionally avoid logging to keep output clean in production.
    void error;
  }, [error]);

  return (
    <div className="container py-5">
      <h2 className="h4 mb-3">Something went wrong</h2>
      <p className="text-muted mb-4">
        Please try again. If the problem continues, refresh the page.
      </p>
      <button type="button" className="btn btn-primary" onClick={reset}>
        Try again
      </button>
    </div>
  );
}

