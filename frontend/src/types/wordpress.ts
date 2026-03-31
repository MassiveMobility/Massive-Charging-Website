/**
 * TypeScript types for the WordPress REST API v2 response shapes used by
 * the Massive Charging frontend. Only the fields consumed by Next.js pages
 * are typed here — the WP API returns more, but unused fields are omitted.
 */

// ── Shared primitives ─────────────────────────────────────────────────────────

export type WpRendered = {
  rendered: string;
  protected?: boolean;
};

export type WpImageSize = {
  file: string;
  width: number;
  height: number;
  source_url: string;
};

export type WpMediaDetails = {
  width: number;
  height: number;
  file: string;
  sizes: Record<string, WpImageSize>;
};

export type WpMedia = {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: WpRendered;
  alt_text: string;
  media_type: string;
  mime_type: string;
  source_url: string;
  media_details: WpMediaDetails;
};

export type WpYoastMeta = {
  title?: string;
  description?: string;
  og_title?: string;
  og_description?: string;
  og_image?: Array<{ url: string; width: number; height: number }>;
  canonical?: string;
};

// ── Post (articles, blog, guides) ─────────────────────────────────────────────

export type WpPost = {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: 'publish' | 'draft' | 'private';
  link: string;
  title: WpRendered;
  content: WpRendered;
  excerpt: WpRendered;
  featured_media: number;
  categories: number[];
  tags: number[];
  yoast_head_json?: WpYoastMeta;
};

// ── Page ──────────────────────────────────────────────────────────────────────

export type WpPage = {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: 'publish' | 'draft' | 'private';
  link: string;
  title: WpRendered;
  content: WpRendered;
  excerpt: WpRendered;
  featured_media: number;
  parent: number;
  yoast_head_json?: WpYoastMeta;
};

// ── Comment ───────────────────────────────────────────────────────────────────

export type WpComment = {
  id: number;
  post: number;
  parent: number;
  author_name: string;
  date: string;
  content: WpRendered;
  status: 'approved' | 'hold' | 'spam' | 'trash';
};

// ── ACF field shapes for each CPT ────────────────────────────────────────────

export type AcfCpoFields = {
  logo?: WpMedia | false;
  website?: string;
  contact_email?: string;
  contact_phone?: string;
  location?: string;
  network_size?: number;
  featured?: boolean;
};

export type AcfEvCarFields = {
  make?: string;
  model?: string;
  year?: number;
  price_inr?: string;
  battery_kwh?: string;
  range_km?: string;
  connector?: string;
  charge_speed_kw?: number;
  guide_slug?: string;
};

export type AcfScenarioFields = {
  route_slug?: string;
  subtitle?: string;
  icon?: string;
  hero_image?: WpMedia | false;
  features?: Array<{ feature: string }>;
  cta_text?: string;
  cta_url?: string;
};

export type AcfProductFields = {
  sku?: string;
  price_inr?: number;
  category?: 'charger' | 'cable' | 'adapter' | 'accessory' | 'software';
  specs?: Array<{ label: string; value: string }>;
  gallery?: WpMedia[];
  in_stock?: boolean;
};

// ── Custom Post Types ─────────────────────────────────────────────────────────

export type WpCpo = {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: 'publish' | 'draft' | 'private';
  link: string;
  title: WpRendered;
  content: WpRendered;
  excerpt: WpRendered;
  featured_media: number;
  acf: AcfCpoFields;
  yoast_head_json?: WpYoastMeta;
};

export type WpEvCar = {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: 'publish' | 'draft' | 'private';
  link: string;
  title: WpRendered;
  content: WpRendered;
  excerpt: WpRendered;
  featured_media: number;
  acf: AcfEvCarFields;
  yoast_head_json?: WpYoastMeta;
};

export type WpScenario = {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: 'publish' | 'draft' | 'private';
  link: string;
  title: WpRendered;
  content: WpRendered;
  excerpt: WpRendered;
  featured_media: number;
  acf: AcfScenarioFields;
  yoast_head_json?: WpYoastMeta;
};

export type WpProduct = {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: 'publish' | 'draft' | 'private';
  link: string;
  title: WpRendered;
  content: WpRendered;
  excerpt: WpRendered;
  featured_media: number;
  acf: AcfProductFields;
  yoast_head_json?: WpYoastMeta;
};

// ── Revalidation webhook payload (sent by WordPress on publish) ───────────────

export type WpRevalidatePayload = {
  secret: string;
  type: 'post' | 'page' | 'cpo' | 'ev_car' | 'mc_scenario' | 'mc_product';
  slug: string;
};
