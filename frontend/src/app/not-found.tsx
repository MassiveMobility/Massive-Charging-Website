import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content">
      <section className="surface">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you requested does not exist or has moved.</p>
        <Link href="/">Return to homepage</Link>
      </section>
    </main>
  );
}
