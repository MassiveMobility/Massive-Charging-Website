import Link from "next/link";

import { siteConfig } from "@/lib/config/site";

const foundationChecklist = [
  "App Router with server-first rendering",
  "Strict TypeScript + linting + formatting",
  "Semantic HTML and accessibility baseline",
  "SEO metadata and crawlable content shell",
  "Scalable folders for marketing and platform routes"
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section aria-labelledby="frontend-baseline-title" className="hero">
        <p className="eyebrow">Frontend Setup Baseline</p>
        <h1 id="frontend-baseline-title">{siteConfig.name} Next.js Foundation</h1>
        <p className="lead">
          The frontend workspace is now structured for SEO-first public pages, long-term maintainability,
          and future platform/admin expansion.
        </p>
      </section>

      <section aria-labelledby="baseline-checklist-title" className="surface">
        <h2 id="baseline-checklist-title">Current baseline scope</h2>
        <ul className="checklist">
          {foundationChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="next-steps-title" className="surface">
        <h2 id="next-steps-title">Next migration step</h2>
        <p>
          Begin marketing route migration under <code>src/app/(marketing)</code> while keeping platform
          functionality isolated in <code>src/app/(platform)</code>.
        </p>
        <p>
          <Link href="/">This homepage currently validates the App Router baseline and semantic structure.</Link>
        </p>
      </section>
    </main>
  );
}
