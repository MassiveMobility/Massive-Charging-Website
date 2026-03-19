import { publicEnv } from "@/lib/env/public";

/**
 * Centralized site identity used across metadata, navigation shells, and future content workflows.
 * Keeping this in one place makes SEO and branding updates safe and consistent.
 */
export const siteConfig = {
  description:
    "Massive Charging designs and operates EV charging experiences built for speed, reliability, and long-term scale.",
  defaultKeywords: ["EV charging", "charging infrastructure", "fleet charging", "charging operations"],
  locale: "en-US",
  legalName: "Massive Charging",
  name: publicEnv.NEXT_PUBLIC_SITE_NAME,
  url: publicEnv.NEXT_PUBLIC_SITE_URL
} as const;

/**
 * Central social metadata defaults so route-level metadata can stay small and consistent.
 */
export const socialDefaults = {
  openGraphType: "website",
  twitterCard: "summary_large_image"
} as const;
