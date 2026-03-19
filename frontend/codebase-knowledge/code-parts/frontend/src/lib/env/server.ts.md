# File path
`frontend/src/lib/env/server.ts`

# Purpose of the file
Provides a centralized access pattern for server-only environment values.

# Why this file exists
Server-only values need a clear boundary from public values to prevent accidental exposure to browser bundles.

# Main responsibility
Read optional server env values and return trimmed, typed results.

# Key exports/functions/components/classes
- `ServerEnv` type
- `getServerEnv()` function

# File type
Server-side utility/config module.

# How it works
- Defines allowed server keys.
- Reads each key from `process.env`.
- Returns only non-empty values.

# Why this implementation is used
It keeps the baseline simple while creating a clear home for future server-only configuration as CMS/admin features are added.

# Related files/dependencies
- `frontend/.env.example`
- `frontend/src/lib/env/public.ts`
- `frontend/src/lib/env/index.ts`

# What feature/functionality it supports
- Future CMS integration
- Future admin and content workflow integrations

# Notes for a new developer
Use this module only in server contexts (Server Components, route handlers, server actions).
