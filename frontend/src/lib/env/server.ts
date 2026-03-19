const optionalServerKeys = ["CMS_API_BASE_URL", "CMS_API_TOKEN"] as const;

export type ServerEnv = Partial<Record<(typeof optionalServerKeys)[number], string>>;

/**
 * Reads server-only environment variables.
 * Keep secrets here and never expose them through NEXT_PUBLIC_ names.
 */
export function getServerEnv(): ServerEnv {
  const env: ServerEnv = {};

  for (const key of optionalServerKeys) {
    const rawValue = process.env[key];

    if (rawValue && rawValue.trim().length > 0) {
      env[key] = rawValue.trim();
    }
  }

  return env;
}
