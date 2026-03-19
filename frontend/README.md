# Frontend Setup Baseline

This workspace contains the production-grade Next.js App Router baseline for the public Massive Charging website.

## Docs index

- Frontend Setup Baseline: `frontend/README.md`
- Frontend baseline architecture notes: `frontend/codebase-knowledge/main/frontend-setup-baseline.md`
- Frontend setup concepts:
  - `frontend/concept-learning/nextjs-app-router-server-first-baseline.md`
  - `frontend/concept-learning/environment-variable-validation-pattern.md`

## Objectives for this baseline

- Server-first rendering for crawlable public content
- Strict TypeScript, linting, and formatting standards
- Clean route structure for marketing and platform growth
- Strong SEO, accessibility, and performance defaults
- Environment validation that separates public vs server-only variables

## Requirements

- Node.js `20.11.0` or newer
- npm `10+`

## Quick start

```bash
cd frontend
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev`: start local development server
- `npm run dev:clean`: clear Next cache, then start dev server
- `npm run build`: create production build
- `npm run start`: run production server
- `npm run lint`: run ESLint checks
- `npm run typecheck`: run strict TypeScript checks
- `npm run clean`: remove `.next` build cache directory
- `npm run format`: apply Prettier formatting
- `npm run format:check`: check formatting in CI
- `npm run test`: placeholder until test framework is added

## Environment variable rules

Use `.env.example` as the source template.

- `NEXT_PUBLIC_*` values are exposed to browser bundles. Never place secrets in these variables.
- Server-only values must not use the `NEXT_PUBLIC_` prefix.
- Public environment validation is implemented in `src/lib/env/public.ts`.
- Server environment access pattern is implemented in `src/lib/env/server.ts`.
- Non-production environments fall back to safe defaults (`Massive Charging`, `http://localhost:3000`) so first run is smooth.
- Production builds still require explicit `NEXT_PUBLIC_SITE_NAME` and `NEXT_PUBLIC_SITE_URL`.

## Current structure

```text
frontend/
  src/
    app/
      (marketing)/
      (platform)/
      layout.tsx
      page.tsx
      loading.tsx
      error.tsx
      not-found.tsx
      globals.css
    components/
      ui/
      shared/
    features/
    lib/
      config/
      env/
    styles/
    types/
```

## Rendering baseline

- Public pages default to Server Components for SEO and crawlability.
- Client Components are added only where browser interactivity requires them (for example, `src/app/error.tsx`).
- Route groups are in place so marketing pages and platform/admin pages can evolve independently without URL noise.

## Troubleshooting

- If you see `Cannot find module './xxx.js'` from `.next/server/...`, run `npm run dev:clean` and restart.
- If production build fails on missing public env variables, set `NEXT_PUBLIC_SITE_NAME` and `NEXT_PUBLIC_SITE_URL`.
