# File path
`frontend/src/lib/env/public.ts`

# Purpose of the file
Reads and validates required browser-safe environment variables.

# Why this file exists
Public config is used in metadata and UI output. Failing fast on missing config prevents broken deployments and silent SEO regressions.

# Main responsibility
Guarantee required `NEXT_PUBLIC_*` values are present and well-formed.

# Key exports/functions/components/classes
- `PublicEnv` type
- `publicEnv` constant

# File type
Utility/config validation module.

# How it works
- Defines required public keys.
- Reads values from `process.env`.
- Uses safe defaults in non-production environments for first-run ergonomics.
- Throws explicit errors in production when values are missing.
- Validates that `NEXT_PUBLIC_SITE_URL` is a valid absolute URL.

# Why this implementation is used
It is lightweight, explicit, framework-friendly, and avoids external validation dependencies at this stage.

# Related files/dependencies
- `frontend/.env.example`
- `frontend/src/lib/config/site.ts`
- `frontend/src/lib/env/server.ts`

# What feature/functionality it supports
- Reliable site metadata configuration
- Safe public environment handling

# Notes for a new developer
Only put browser-safe values in this file. Never add secrets to `NEXT_PUBLIC_*` variables.
