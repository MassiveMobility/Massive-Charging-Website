# Backend — Headless WordPress CMS

This workspace contains everything needed to run the Massive Charging headless
WordPress backend and integrate it with the Next.js frontend.

## Architecture

```
content.massivecharging.com   ← WordPress admin + REST API  (this workspace)
massivecharging.com       ← Next.js frontend             (../frontend)
```

WordPress serves **only** the REST API and the `/wp-admin` editor UI.
The Next.js frontend fetches content from `content.massivecharging.com/wp-json/wp/v2/`
at build time (ISR) and purges the cache via the revalidation webhook on publish.

## Directory structure

```
backend/
└── wordpress/
    ├── mu-plugins/
    │   └── massive-charging.php   ← CPTs, ACF fields, CORS, REST exposure
    ├── nginx/
    │   └── cms.conf               ← Nginx server block for cms subdomain
    └── scripts/
        └── server-setup.sh        ← One-time GCP VM setup script
```

## Content model

| WP type        | REST base      | Covers                                    |
|----------------|----------------|-------------------------------------------|
| `post`         | `/posts`       | Blog articles, charging guides, news      |
| `page`         | `/pages`       | About, Contact, static landing content    |
| `cpo`          | `/cpos`        | Charging Point Operator profiles          |
| `ev_car`       | `/ev-cars`     | EV car catalogue                          |
| `mc_scenario`  | `/scenarios`   | Scenario landing pages (fleet, hospital…) |
| `mc_product`   | `/mc-products` | EV charging shop products                 |

ACF field definitions for each CPT live in `mu-plugins/massive-charging.php`
and are version-controlled here. Do not define fields through the WP admin UI.

## First-time server setup

1. SSH into the GCP instance.
2. Fill in `DB_PASS` inside `scripts/server-setup.sh`.
3. Run:
   ```bash
   bash backend/wordpress/scripts/server-setup.sh
   ```
4. Point DNS: `content.massivecharging.com` → server IP.
5. Provision SSL: `sudo certbot --nginx -d content.massivecharging.com`
6. Complete WP install at `https://content.massivecharging.com/wp-admin/install.php`

## WordPress plugins to install manually

| Plugin                                  | Purpose                              |
|-----------------------------------------|--------------------------------------|
| **ACF Pro**                             | Structured fields on CPTs            |
| **JWT Authentication for WP REST API**  | Token auth for write operations      |
| **Yoast SEO**                           | SEO metadata in REST responses       |
| **WP Webhooks** (or custom hook)        | Triggers ISR revalidation on publish |

## Environment variables (frontend/.env)

```env
CMS_API_BASE_URL=https://content.massivecharging.com
CMS_API_TOKEN=<username:application-password>   # WP Application Passwords
CMS_REVALIDATE_SECRET=<random secret string>
```

`CMS_API_TOKEN` format: `username:xxxx xxxx xxxx xxxx xxxx xxxx`
Generate an Application Password in WP Admin → Users → Profile → Application Passwords.

The same `CMS_REVALIDATE_SECRET` value must be defined in `wp-config.php`:
```php
define('MC_REVALIDATE_SECRET', 'your-secret-here');
```

## Updating mu-plugin after changes

After editing `massive-charging.php` and deploying:
```bash
sudo cp backend/wordpress/mu-plugins/massive-charging.php \
        /var/www/cms/wp-content/mu-plugins/massive-charging.php
```
No WP cache flush needed — mu-plugins load on every request.

## Frontend integration files

| File                                          | Purpose                                  |
|-----------------------------------------------|------------------------------------------|
| `frontend/src/lib/api/wordpress.ts`           | Server-only WP REST API client           |
| `frontend/src/types/wordpress.ts`             | TypeScript types for all WP response shapes |
| `frontend/src/app/api/revalidate/route.ts`    | On-demand ISR revalidation webhook       |
| `frontend/src/lib/env/server.ts`              | Env var definitions (CMS keys added)     |
