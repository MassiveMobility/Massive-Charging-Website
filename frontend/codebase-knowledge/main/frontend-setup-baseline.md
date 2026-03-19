# Frontend Setup Baseline

## File path
`frontend/` (workspace root), with architecture references under `frontend/src`.

## Purpose
Defines the production baseline for the Next.js public frontend: strict tooling, App Router skeleton, semantic server-rendered output, and scale-ready folders.

## Why this exists
The migration needs a stable technical foundation before route migration and feature work begin. This prevents rework and keeps quality standards consistent.

## Main responsibilities
- Own the frontend runtime and build tooling.
- Enforce lint/type/format standards.
- Provide route architecture boundaries for `(marketing)` and `(platform)`.
- Provide SEO/accessibility-aware global defaults.
- Provide explicit env-validation patterns.

## Tech stack and why it fits
- Next.js App Router: strong server rendering and route conventions for public SEO content.
- TypeScript strict mode: safer refactors and clearer contracts.
- ESLint + Next rules: catches framework and accessibility quality issues early.
- Prettier: keeps code style consistent for team scalability.

## Rendering strategy decisions
- Default: Server Components for public content (SEO and crawlability).
- Client-only usage: only when browser interaction is required (currently `src/app/error.tsx`).
- This keeps bundles small and content indexable.

## SEO conventions in this baseline
- Central metadata in `src/app/layout.tsx`.
- Canonical + Open Graph + robots defaults set at the app root.
- Semantic heading and section structure in `src/app/page.tsx`.

## Accessibility conventions in this baseline
- Landmark-first structure (`main`, semantic sections, heading hierarchy).
- Skip link in root layout.
- Global focus-visible styles.
- Accessible loading/error/not-found route states.

## AI-friendly content conventions
- Meaningful content is rendered server-side.
- Clean sectioning and machine-readable metadata.
- Public content is not hidden behind client-only rendering.

## Content/admin architecture direction
- `(marketing)` route group isolates crawlable public pages.
- `(platform)` route group prepares for authenticated admin/content workflows and RBAC expansion.

## Theme and design token conventions
- Foundational tokens live in `src/app/globals.css` and are intentionally small.
- Fonts are loaded through Next font optimization in `src/app/layout.tsx`.
- Tokens can be promoted later into shared style modules under `src/styles/`.

## Project conventions established here
- Use `@/*` path alias for imports from `src`.
- Keep config/infrastructure in `src/lib`.
- Keep feature/domain logic in `src/features`.
- Keep reusable UI primitives in `src/components/ui`.

## Key files to review first
- `frontend/package.json`
- `frontend/tsconfig.json`
- `frontend/eslint.config.mjs`
- `frontend/src/app/layout.tsx`
- `frontend/src/app/globals.css`
- `frontend/src/lib/env/public.ts`
