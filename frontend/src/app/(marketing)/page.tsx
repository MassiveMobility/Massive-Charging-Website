import { buildPageMetadata } from "@/lib/seo/metadata";

import { routePaths } from "@/lib/constants/routes";

import Link from "next/link";

export const metadata = buildPageMetadata({
  title: "EV Charging Infrastructure Built for Reliability",
  description:
    "Massive Charging builds EV charging infrastructure programs with enterprise-grade uptime, clear operations, and scale-ready deployment planning.",
  path: "/"
});

const migrationFocus = [
  "Server-rendered, crawlable marketing pages with semantic landmarks",
  "Route ownership and rendering strategy inventory to support migration tracking",
  "Centralized metadata helper for consistent SEO and AI discoverability output",
  "Domain-driven folder contracts for navigation, SEO, and content workflows"
];

export default function MarketingHomePage() {
  return (
    <>
      <section aria-labelledby="home-title" className="hero">
        <p className="eyebrow">Frontend Architecture Skeleton</p>
        <h1 id="home-title">Massive Charging public platform foundation</h1>
        <p className="lead">
          This migration stage establishes route groups, metadata composition, and folder boundaries so
          new pages can scale without architectural drift.
        </p>
      </section>

      <section aria-labelledby="migration-focus-title" className="surface">
        <h2 id="migration-focus-title">Step 03 delivery focus</h2>
        <ul className="checklist">
          {migrationFocus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="explore-routes-title" className="surface">
        <h2 id="explore-routes-title">Marketing route placeholders</h2>
        <p className="lead">
          These pages are intentionally lightweight in this step and are prepared for upcoming content
          migration and design-system implementation.
        </p>
        <ul className="link-list">
          <li>
            <Link href={routePaths.about}>About Massive Charging</Link>
          </li>
          <li>
            <Link href={routePaths.articles}>Articles and insights</Link>
          </li>
          <li>
            <Link href={routePaths.contact}>Contact and partnership intake</Link>
          </li>
        </ul>
      </section>
    </>
  );
}
