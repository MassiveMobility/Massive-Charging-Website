# Title
Next.js App Router Server-First Baseline

# Simple explanation
Server-first means route content is rendered on the server by default, then sent as HTML. This improves crawlability, SEO, and initial load clarity.

# Why it is important
- Search engines and AI crawlers can read meaningful content without relying on client JavaScript.
- It keeps client bundles smaller.
- It creates predictable boundaries between server logic and browser-only logic.

# When to use it
- Public-facing pages that should be indexed and discoverable.
- Marketing pages, service pages, and article pages.

# Why it is used in this codebase
Massive Charging is a public website that needs strong SEO, accessibility, and AI discoverability. Server-first rendering is the best baseline for those goals.

# Small isolated example
```tsx
export default function Page() {
  return <main><h1>Server-rendered heading</h1></main>;
}
```

# Real usage in this repository
- `frontend/src/app/page.tsx`
- `frontend/src/app/layout.tsx`

# Code snippet from actual code
```tsx
export default function HomePage() {
  return (
    <main id="main-content">
      <section aria-labelledby="frontend-baseline-title" className="hero">
        <p className="eyebrow">Frontend Setup Baseline</p>
        <h1 id="frontend-baseline-title">{siteConfig.name} Next.js Foundation</h1>
      </section>
    </main>
  );
}
```

# Explanation of that snippet
The homepage renders semantic content directly on the server and ships crawlable HTML with a clear heading structure and landmark usage.
