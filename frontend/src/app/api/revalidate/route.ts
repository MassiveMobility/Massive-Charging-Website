import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { getServerEnv } from "@/lib/env/server";
import type { WpRevalidatePayload } from "@/types/wordpress";

/**
 * On-demand revalidation webhook.
 *
 * WordPress calls this endpoint via the "WP Webhooks" plugin (or a custom
 * action hook) whenever content is published or updated.
 *
 * Example WordPress hook (add to functions.php or a plugin):
 *
 *   add_action('save_post', function(int $postId, WP_Post $post) {
 *     if ($post->post_status !== 'publish') return;
 *     wp_remote_post('https://massivecharging.com/api/revalidate', [
 *       'headers' => ['Content-Type' => 'application/json'],
 *       'body'    => json_encode([
 *         'secret' => defined('MC_REVALIDATE_SECRET') ? MC_REVALIDATE_SECRET : '',
 *         'type'   => $post->post_type,
 *         'slug'   => $post->post_name,
 *       ]),
 *     ]);
 *   }, 10, 2);
 *
 * Define MC_REVALIDATE_SECRET in wp-config.php:
 *   define('MC_REVALIDATE_SECRET', 'your-secret-here');
 * Set the same value as CMS_REVALIDATE_SECRET in frontend/.env.
 */
export async function POST(request: Request) {
  const env = getServerEnv();
  const secret = env.CMS_REVALIDATE_SECRET;

  if (!secret) {
    return NextResponse.json({ message: "Revalidation is not configured." }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body." }, { status: 400 });
  }

  const payload = body as Partial<WpRevalidatePayload>;

  if (payload.secret !== secret) {
    return NextResponse.json({ message: "Invalid secret." }, { status: 401 });
  }

  if (!payload.type || !payload.slug) {
    return NextResponse.json({ message: "Missing type or slug." }, { status: 400 });
  }

  const path = resolvePathForType(payload.type, payload.slug);

  if (!path) {
    return NextResponse.json({ message: `Unrecognised type: ${payload.type}` }, { status: 400 });
  }

  revalidatePath(path);

  return NextResponse.json({ revalidated: true, path }, { status: 200 });
}

/**
 * Maps a WordPress post type + slug to the corresponding Next.js route path.
 */
function resolvePathForType(
  type: WpRevalidatePayload["type"],
  slug: string
): string | null {
  switch (type) {
    case "post":
      return `/charging-guide/${slug}`;
    case "page":
      return `/${slug}`;
    case "cpo":
      return `/cpo/${slug}`;
    case "ev_car":
      return `/charging-guide/ev-cars`;
    case "mc_scenario":
      return `/${slug}`;
    case "mc_product":
      return `/ev-charging-shop`;
    default:
      return null;
  }
}
