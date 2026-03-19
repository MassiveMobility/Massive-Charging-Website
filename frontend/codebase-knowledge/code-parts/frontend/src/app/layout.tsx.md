# File path
`frontend/src/app/layout.tsx`

# Purpose of the file
Defines the root HTML shell, global metadata defaults, and shared font setup for all frontend routes.

# Why this file exists
App Router requires a root layout, and this is the best place to centralize SEO metadata, skip-link accessibility, and font optimization.

# Main responsibility
Provide the global document structure and metadata baseline for crawlable public content.

# Key exports/functions/components/classes
- `metadata` (Next.js route metadata object)
- `RootLayout` (root server component layout)

# File type
Server Component layout file.

# How it works
- Loads optimized fonts with `next/font/google`.
- Reads centralized site metadata from `src/lib/config/site.ts`.
- Exports metadata for canonical URL, Open Graph, robots, and Twitter.
- Renders a skip link and the route `children`.

# Why this implementation is used
It keeps SEO + accessibility concerns centralized and avoids repeating metadata and shell logic in each route.

# Related files/dependencies
- `frontend/src/app/globals.css`
- `frontend/src/lib/config/site.ts`
- `frontend/src/lib/env/public.ts`

# What feature/functionality it supports
- Global SEO metadata strategy
- Accessibility baseline
- Consistent typography and document shell

# Notes for a new developer
Keep this file server-only and avoid adding client-only logic here. Add route-specific metadata in individual route files when needed.
