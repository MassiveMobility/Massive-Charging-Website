export default function Loading() {
  return (
    <main aria-busy="true" aria-live="polite" id="main-content">
      <section className="surface">
        <p className="eyebrow">Loading</p>
        <p>Preparing the page...</p>
      </section>
    </main>
  );
}
