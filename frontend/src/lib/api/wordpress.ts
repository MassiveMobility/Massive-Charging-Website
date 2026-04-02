import "server-only";

import type {
  WpCpo,
  WpEvCar,
  WpMarketingPage,
  WpMarketingPageSummary,
  WpMedia,
  WpPage,
  WpPost,
  WpProduct,
  WpScenario
} from "@/types/wordpress";
import { getServerEnv } from "@/lib/env/server";

// ── Error type ────────────────────────────────────────────────────────────────

class WordPressApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "WordPressApiError";
    this.status = status;
  }
}

export const isWordPressApiError = (error: unknown): error is WordPressApiError =>
  error instanceof WordPressApiError;

// ── Config ────────────────────────────────────────────────────────────────────

const getCmsConfig = () => {
  const env = getServerEnv();
  const baseUrl = env.CMS_API_BASE_URL?.trim();

  if (!baseUrl) {
    throw new WordPressApiError(
      "Missing CMS_API_BASE_URL. Set it to https://content.massivecharging.com in frontend/.env.",
      500
    );
  }

  return { baseUrl, token: env.CMS_API_TOKEN?.trim() ?? null };
};

// ── Fetch helper ──────────────────────────────────────────────────────────────

type FetchOptions = {
  /** Next.js revalidation period in seconds. Defaults to 60. Pass 0 to opt out of caching. */
  revalidate?: number;
};

async function wpFetch<T>(path: string, opts: FetchOptions = {}): Promise<T> {
  const { baseUrl, token } = getCmsConfig();
  const url = `${baseUrl}/wp-json/wp/v2${path}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json"
  };

  if (token) {
    headers["Authorization"] = `Basic ${Buffer.from(token).toString("base64")}`;
  }

  const response = await fetch(url, {
    headers,
    next: { revalidate: opts.revalidate ?? 60 }
  });

  if (!response.ok) {
    let message = `WordPress API request failed: ${response.status}`;
    try {
      const body = (await response.json()) as { message?: string };
      if (body.message) message = body.message;
    } catch {
      // ignore JSON parse failure on error bodies
    }
    throw new WordPressApiError(message, response.status);
  }

  return response.json() as Promise<T>;
}

// ── Posts ─────────────────────────────────────────────────────────────────────

export async function fetchWpPosts(opts: FetchOptions & { perPage?: number; page?: number } = {}) {
  const { perPage = 10, page = 1, ...fetchOpts } = opts;
  return wpFetch<WpPost[]>(
    `/posts?per_page=${perPage}&page=${page}&_embed=1`,
    fetchOpts
  );
}

export async function fetchWpPostBySlug(slug: string, opts: FetchOptions = {}) {
  const results = await wpFetch<WpPost[]>(`/posts?slug=${encodeURIComponent(slug)}&_embed=1`, opts);
  return results[0] ?? null;
}

// ── Pages ─────────────────────────────────────────────────────────────────────

export async function fetchWpPages(opts: FetchOptions & { perPage?: number } = {}) {
  const { perPage = 100, ...fetchOpts } = opts;
  return wpFetch<WpPage[]>(`/pages?per_page=${perPage}&_embed=1`, fetchOpts);
}

export async function fetchWpPageBySlug(slug: string, opts: FetchOptions = {}) {
  const results = await wpFetch<WpPage[]>(`/pages?slug=${encodeURIComponent(slug)}&_embed=1`, opts);
  return results[0] ?? null;
}

// ── Media ─────────────────────────────────────────────────────────────────────

export async function fetchWpMedia(id: number, opts: FetchOptions = {}) {
  return wpFetch<WpMedia>(`/media/${id}`, opts);
}

// ── CPOs ──────────────────────────────────────────────────────────────────────

export async function fetchWpCpos(opts: FetchOptions & { perPage?: number; featured?: boolean } = {}) {
  const { perPage = 100, featured, ...fetchOpts } = opts;
  const featuredFilter = featured ? "&acf_field=featured&acf_value=1" : "";
  return wpFetch<WpCpo[]>(
    `/cpos?per_page=${perPage}&_embed=1${featuredFilter}`,
    fetchOpts
  );
}

export async function fetchWpCpoBySlug(slug: string, opts: FetchOptions = {}) {
  const results = await wpFetch<WpCpo[]>(`/cpos?slug=${encodeURIComponent(slug)}&_embed=1`, opts);
  return results[0] ?? null;
}

// ── EV Cars ───────────────────────────────────────────────────────────────────

export async function fetchWpEvCars(opts: FetchOptions & { perPage?: number } = {}) {
  const { perPage = 100, ...fetchOpts } = opts;
  return wpFetch<WpEvCar[]>(`/ev-cars?per_page=${perPage}&_embed=1`, fetchOpts);
}

export async function fetchWpEvCarBySlug(slug: string, opts: FetchOptions = {}) {
  const results = await wpFetch<WpEvCar[]>(`/ev-cars?slug=${encodeURIComponent(slug)}&_embed=1`, opts);
  return results[0] ?? null;
}

// ── Scenarios ─────────────────────────────────────────────────────────────────

export async function fetchWpScenarios(opts: FetchOptions & { perPage?: number } = {}) {
  const { perPage = 100, ...fetchOpts } = opts;
  return wpFetch<WpScenario[]>(`/scenarios?per_page=${perPage}&_embed=1`, fetchOpts);
}

export async function fetchWpScenarioByRouteSlug(routeSlug: string, opts: FetchOptions = {}) {
  // WP doesn't support ACF field filtering natively in REST — fetch all and match client-side.
  // For small collections (scenarios are ~10-15 items) this is acceptable.
  const all = await fetchWpScenarios(opts);
  return all.find((s) => s.acf.route_slug === routeSlug) ?? null;
}

// ── Products ──────────────────────────────────────────────────────────────────

export async function fetchWpProducts(
  opts: FetchOptions & { perPage?: number; category?: string } = {}
) {
  const { perPage = 100, category, ...fetchOpts } = opts;
  const catFilter = category ? `&acf_field=category&acf_value=${encodeURIComponent(category)}` : "";
  return wpFetch<WpProduct[]>(
    `/mc-products?per_page=${perPage}&_embed=1${catFilter}`,
    fetchOpts
  );
}

export async function fetchWpProductBySlug(slug: string, opts: FetchOptions = {}) {
  const results = await wpFetch<WpProduct[]>(
    `/mc-products?slug=${encodeURIComponent(slug)}&_embed=1`,
    opts
  );
  return results[0] ?? null;
}

// ── Marketing Pages (custom massivecharging/v1 namespace) ─────────────────────

async function wpMarketingFetch<T>(path: string, opts: FetchOptions = {}): Promise<T> {
  const { baseUrl, token } = getCmsConfig();
  const url = `${baseUrl}/wp-json/massivecharging/v1${path}`;

  const headers: HeadersInit = { "Content-Type": "application/json" };
  if (token) {
    headers["Authorization"] = `Basic ${Buffer.from(token).toString("base64")}`;
  }

  const response = await fetch(url, {
    headers,
    next: { revalidate: opts.revalidate ?? 60 }
  });

  if (!response.ok) {
    let message = `Marketing API request failed: ${response.status}`;
    try {
      const body = (await response.json()) as { message?: string };
      if (body.message) message = body.message;
    } catch {
      // ignore
    }
    throw new WordPressApiError(message, response.status);
  }

  return response.json() as Promise<T>;
}

/**
 * Fetch all published marketing pages (id + route_path only).
 * Used by generateStaticParams.
 */
export async function fetchAllMarketingPages(
  opts: FetchOptions = {}
): Promise<WpMarketingPageSummary[]> {
  return wpMarketingFetch<WpMarketingPageSummary[]>("/marketing-pages", opts);
}

/**
 * Fetch full page data by route path (e.g. "/platform", "/for/cpos").
 * Returns null if the page doesn't exist in WP yet.
 */
export async function fetchMarketingPageByRoute(
  routePath: string,
  opts: FetchOptions = {}
): Promise<WpMarketingPage | null> {
  try {
    return await wpMarketingFetch<WpMarketingPage>(
      `/marketing-pages/by-route?path=${encodeURIComponent(routePath)}`,
      opts
    );
  } catch (err) {
    if (isWordPressApiError(err) && err.status === 404) return null;
    throw err;
  }
}
