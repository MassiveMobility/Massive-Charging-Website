# Frontend Architecture Skeleton

This workspace contains the production-grade Next.js App Router architecture skeleton for the public
Massive Charging website.

## Docs index

- Frontend setup baseline: `frontend/docs/codebase-knowledge/main/frontend-setup-baseline.md`
- Frontend architecture skeleton: `frontend/docs/codebase-knowledge/main/frontend-architecture-skeleton.md`
- Rendering decision matrix: `frontend/docs/codebase-knowledge/main/frontend-rendering-decision-matrix.md`
- Design-system foundation:
  `frontend/docs/codebase-knowledge/main/frontend-design-system-foundation.md`
- Accessibility foundation:
  `frontend/docs/codebase-knowledge/main/frontend-accessibility-foundation.md`
- Route groups + nested layouts concept:
  `frontend/docs/concept-learning/nextjs-route-groups-nested-layout-boundaries.md`
- App Router server-first baseline concept:
  `frontend/docs/concept-learning/nextjs-app-router-server-first-baseline.md`
- Accessibility foundation patterns concept:
  `frontend/docs/concept-learning/accessibility-foundation-patterns.md`
- Design tokens + semantic mapping concept:
  `frontend/docs/concept-learning/design-tokens-semantic-mapping-pattern.md`
- Environment variable validation concept:
  `frontend/docs/concept-learning/environment-variable-validation-pattern.md`

## Objectives of this stage

- Enforce route-group boundaries between marketing and platform surfaces.
- Keep public routes semantic, server-rendered, and crawlable by default.
- Centralize route inventory, ownership, and rendering contracts.
- Centralize reusable metadata composition for SEO consistency.
- Establish a reusable design system with centralized tokens and primitives.
- Keep architecture ready for role-based admin article workflows.

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
- `npm run lint:a11y`: run strict accessibility-focused lint checks
- `npm run a11y:check`: run accessibility smoke checks (landmarks, selectors, contrast)
- `npm run a11y`: run both lint and accessibility smoke checks
- `npm run typecheck`: run strict TypeScript checks
- `npm run clean`: remove `.next` build cache directory
- `npm run format`: apply Prettier formatting
- `npm run format:check`: check formatting in CI
- `npm run test`: placeholder until test framework is added

## Architecture map

```text
frontend/
  src/
    app/
      (marketing)/
        layout.tsx
        page.tsx
        about/page.tsx
        articles/page.tsx
        contact/page.tsx
        loading.tsx
        error.tsx
      (platform)/
        layout.tsx
        loading.tsx
        error.tsx
        admin/page.tsx
        admin/articles/page.tsx
      layout.tsx
      loading.tsx
      error.tsx
      not-found.tsx
      globals.css
    components/
      marketing/
      shared/
      ui/
    features/
      articles/
      navigation/
      seo/
    lib/
      a11y/
      config/
      constants/
      env/
      seo/
      utils/
    styles/
      tokens.css
      theme.css
      typography.css
```

## Key architecture contracts

- Routes are defined in one place: `src/lib/constants/routes.ts` (`routeRegistry`).
- `routePaths` and `routeInventory` are derived from `routeRegistry` and consumed across links,
  navigation, and metadata.
- Marketing navigation constants are defined in `src/lib/constants/navigation.ts`.
- Root and route-level metadata helpers are defined in `src/lib/seo/metadata.ts`.
- Site identity defaults are centralized in `src/lib/config/site.ts`.
- Design-system contracts are centralized in `src/lib/config/design-system.ts`.
- Global style layers are centralized in `src/styles/*` and imported by `src/app/globals.css`.
- UI primitives read visual values from prop-passed style configs so updating one preset object can
  update all matching component usage.
- Internal navigation (home/about/articles/contact/admin) uses built-in `next/link` for client-side route
  transitions without hard reloads.

## Environment variable rules

Use `.env.example` as the source template.

- `NEXT_PUBLIC_*` values are exposed to browser bundles. Never place secrets in these variables.
- Server-only values must not use the `NEXT_PUBLIC_` prefix.
- Public environment validation is implemented in `src/lib/env/public.ts`.
- Server environment access pattern is implemented in `src/lib/env/server.ts`.
- Non-production environments fall back to safe defaults (`Massive Charging`, `http://localhost:3000`).
- Production builds still require explicit `NEXT_PUBLIC_SITE_NAME` and `NEXT_PUBLIC_SITE_URL`.
