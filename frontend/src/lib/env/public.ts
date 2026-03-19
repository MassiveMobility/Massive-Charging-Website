const requiredPublicKeys = ["NEXT_PUBLIC_SITE_NAME", "NEXT_PUBLIC_SITE_URL"] as const;

export type PublicEnv = Record<(typeof requiredPublicKeys)[number], string>;

const developmentDefaults: PublicEnv = {
  NEXT_PUBLIC_SITE_NAME: "Massive Charging",
  NEXT_PUBLIC_SITE_URL: "http://localhost:3000"
};

/**
 * Reads and validates browser-safe environment variables once at startup.
 * This keeps metadata and public config values explicit and strongly typed.
 */
function readPublicEnv(): PublicEnv {
  const env = {} as PublicEnv;
  const shouldFallbackToDefaults = process.env.NODE_ENV !== "production";

  for (const key of requiredPublicKeys) {
    const rawValue = process.env[key];

    if (!rawValue || rawValue.trim().length === 0) {
      if (shouldFallbackToDefaults) {
        env[key] = developmentDefaults[key];
        continue;
      }

      throw new Error(`[env] Missing required public environment variable: ${key}`);
    }

    env[key] = rawValue.trim();
  }

  try {
    new URL(env.NEXT_PUBLIC_SITE_URL);
  } catch {
    if (shouldFallbackToDefaults) {
      /**
       * Local/dev environments often run with partially configured `.env` files.
       * Falling back here avoids hard-failing the app during route/module evaluation.
       */
      env.NEXT_PUBLIC_SITE_URL = developmentDefaults.NEXT_PUBLIC_SITE_URL;
      return env;
    }

    throw new Error(
      `[env] NEXT_PUBLIC_SITE_URL must be a valid absolute URL, received: "${env.NEXT_PUBLIC_SITE_URL}"`,
    );
  }

  return env;
}

export const publicEnv = readPublicEnv();
