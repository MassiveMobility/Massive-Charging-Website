import type { Metadata } from "next";

import { siteConfig, socialDefaults } from "@/lib/config/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  noIndex?: boolean;
};

function mergeKeywords(pageKeywords: readonly string[] = []): string[] {
  return Array.from(new Set([...siteConfig.defaultKeywords, ...pageKeywords]));
}

/**
 * Root metadata keeps global SEO defaults centralized and predictable.
 */
export function buildRootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`
    },
    description: siteConfig.description,
    keywords: mergeKeywords(),
    alternates: {
      canonical: "/"
    },
    openGraph: {
      type: socialDefaults.openGraphType,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      url: siteConfig.url
    },
    robots: {
      follow: true,
      index: true
    },
    twitter: {
      card: socialDefaults.twitterCard,
      title: siteConfig.name,
      description: siteConfig.description
    }
  };
}

/**
 * Route-level metadata helper for consistent canonical, robots, and social cards.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false
}: PageMetadataInput): Metadata {
  const canonicalUrl = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    keywords: mergeKeywords(keywords),
    alternates: {
      canonical: path
    },
    openGraph: {
      type: socialDefaults.openGraphType,
      title,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      url: canonicalUrl
    },
    robots: {
      follow: !noIndex,
      index: !noIndex
    },
    twitter: {
      card: socialDefaults.twitterCard,
      title,
      description
    }
  };
}
