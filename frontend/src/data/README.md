# Data Layer

This folder is the canonical data boundary for `src/`.

## Purpose
- Keep data definitions separate from UI and route files.
- Make data discovery simple for new developers.
- Prevent page-level hardcoded content from spreading.

## Current structure
- `articles/`: article-related source data, JSON payloads, and query helpers.

## Rule
When a route needs content data, import from `@/data/*` first instead of defining content directly in `page.tsx`.
