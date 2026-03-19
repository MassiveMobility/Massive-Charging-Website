# Title
Environment Variable Validation Pattern

# Simple explanation
Environment variables are read once, validated, and typed before the app uses them.

# Why it is important
- Fails fast when required values are missing.
- Prevents silent runtime bugs caused by undefined config.
- Makes public vs server-only boundaries explicit.

# When to use it
- Any production app that depends on environment-based configuration.
- Especially useful when metadata, API endpoints, or secrets are needed.

# Why it is used in this codebase
This project requires safe SEO metadata configuration and long-term maintainability, so explicit env validation reduces deployment mistakes.

# Small isolated example
```ts
if (!process.env.NEXT_PUBLIC_SITE_URL) {
  throw new Error("Missing NEXT_PUBLIC_SITE_URL");
}
```

# Real usage in this repository
- `frontend/src/lib/env/public.ts`
- `frontend/src/lib/env/server.ts`
- `frontend/src/lib/config/site.ts`

# Code snippet from actual code
```ts
for (const key of requiredPublicKeys) {
  const rawValue = process.env[key];

  if (!rawValue || rawValue.trim().length === 0) {
    if (shouldFallbackToDefaults) {
      env[key] = developmentDefaults[key];
      continue;
    }

    throw new Error(`[env] Missing required public environment variable: ${key}`);
  }
}
```

# Explanation of that snippet
The code allows safe defaults during local/non-production runs, but still throws a clear error in production when required variables are missing.
