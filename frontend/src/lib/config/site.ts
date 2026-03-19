import { publicEnv } from "@/lib/env/public";

/**
 * Centralized site metadata used by layout metadata and public pages.
 * Keeping this in one place makes SEO updates safer and faster.
 */
export const siteConfig = {
  description:
    "Massive Charging designs and operates EV charging experiences built for speed, reliability, and long-term scale.",
  name: publicEnv.NEXT_PUBLIC_SITE_NAME,
  url: publicEnv.NEXT_PUBLIC_SITE_URL
} as const;
