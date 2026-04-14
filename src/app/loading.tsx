export default function Loading() {
  return (
    <div className="container py-5">
      <div className="d-flex align-items-center gap-3">
        <div className="spinner-border" role="status" aria-label="Loading" />
        <span className="text-muted">Loading…</span>
      </div>
    </div>
  );
}

