#!/usr/bin/env bash
# =============================================================================
# Massive Charging — Headless WordPress server setup
# Tested on: Ubuntu 22.04 LTS (GCP Compute Engine)
#
# Run as a user with sudo privileges (not as root).
# Usage: bash server-setup.sh
#
# What this script does:
#   1. Installs PHP 8.2 + required extensions
#   2. Installs MySQL 8
#   3. Creates the WordPress database and user
#   4. Downloads and configures WordPress core
#   5. Copies the mu-plugin into place
#   6. Enables the Nginx site (requires manual Certbot step after DNS propagates)
# =============================================================================

set -euo pipefail

# ── Configuration — edit these before running ─────────────────────────────────
DB_NAME="massive_cms"
DB_USER="massive_cms_user"
DB_PASS=""                 # Fill in before running — use a strong password
WP_DIR="/var/www/cms"
NGINX_SITES="/etc/nginx/sites-available"
NGINX_ENABLED="/etc/nginx/sites-enabled"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/../../.." && pwd)"

if [[ -z "${DB_PASS}" ]]; then
  echo "ERROR: Set DB_PASS in this script before running." >&2
  exit 1
fi

# ── 1. System update ──────────────────────────────────────────────────────────
echo "==> Updating system packages..."
sudo apt-get update -qq
sudo apt-get upgrade -y -qq

# ── 2. PHP 8.2 ───────────────────────────────────────────────────────────────
echo "==> Installing PHP 8.2..."
sudo apt-get install -y -qq \
  php8.2 \
  php8.2-fpm \
  php8.2-mysql \
  php8.2-curl \
  php8.2-gd \
  php8.2-mbstring \
  php8.2-xml \
  php8.2-xmlrpc \
  php8.2-zip \
  php8.2-intl \
  php8.2-imagick

sudo systemctl enable php8.2-fpm
sudo systemctl start  php8.2-fpm

# ── 3. MySQL 8 ───────────────────────────────────────────────────────────────
echo "==> Installing MySQL..."
sudo apt-get install -y -qq mysql-server

sudo systemctl enable mysql
sudo systemctl start  mysql

echo "==> Creating database and user..."
sudo mysql -e "
  CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
  CREATE USER IF NOT EXISTS '${DB_USER}'@'localhost' IDENTIFIED BY '${DB_PASS}';
  GRANT ALL PRIVILEGES ON \`${DB_NAME}\`.* TO '${DB_USER}'@'localhost';
  FLUSH PRIVILEGES;
"

# ── 4. WordPress core ────────────────────────────────────────────────────────
echo "==> Downloading WordPress..."
sudo mkdir -p "${WP_DIR}"
sudo chown "${USER}:www-data" "${WP_DIR}"

cd /tmp
curl -sO https://wordpress.org/latest.tar.gz
tar xzf latest.tar.gz

sudo rsync -a wordpress/ "${WP_DIR}/"
sudo chown -R www-data:www-data "${WP_DIR}"
sudo find "${WP_DIR}" -type d -exec chmod 755 {} \;
sudo find "${WP_DIR}" -type f -exec chmod 644 {} \;

rm -rf /tmp/wordpress /tmp/latest.tar.gz

# ── 5. wp-config.php ─────────────────────────────────────────────────────────
echo "==> Generating wp-config.php..."

# Fetch WordPress secret keys
WP_SALTS=$(curl -sS https://api.wordpress.org/secret-key/1.1/salt/)

sudo tee "${WP_DIR}/wp-config.php" > /dev/null <<WPCONFIG
<?php
define( 'DB_NAME',     '${DB_NAME}' );
define( 'DB_USER',     '${DB_USER}' );
define( 'DB_PASSWORD', '${DB_PASS}' );
define( 'DB_HOST',     'localhost' );
define( 'DB_CHARSET',  'utf8mb4' );
define( 'DB_COLLATE',  '' );

${WP_SALTS}

\$table_prefix = 'mc_';

// Headless — no need for the WP front-end theme to be publicly browsable
define( 'WP_HOME',    'https://content.massivecharging.com' );
define( 'WP_SITEURL', 'https://content.massivecharging.com' );

define( 'WP_DEBUG',         false );
define( 'WP_DEBUG_LOG',     false );
define( 'WP_DEBUG_DISPLAY', false );

// Disable file editing via admin UI (security best practice)
define( 'DISALLOW_FILE_EDIT', true );

// Limit post revisions to reduce DB bloat
define( 'WP_POST_REVISIONS', 5 );

// Trash auto-empty after 14 days
define( 'EMPTY_TRASH_DAYS', 14 );

if ( ! defined( 'ABSPATH' ) ) {
    define( 'ABSPATH', __DIR__ . '/' );
}

require_once ABSPATH . 'wp-settings.php';
WPCONFIG

sudo chown www-data:www-data "${WP_DIR}/wp-config.php"
sudo chmod 640 "${WP_DIR}/wp-config.php"

# ── 6. mu-plugins ────────────────────────────────────────────────────────────
echo "==> Copying mu-plugin..."
MU_PLUGIN_DIR="${WP_DIR}/wp-content/mu-plugins"
sudo mkdir -p "${MU_PLUGIN_DIR}"
sudo cp "${REPO_ROOT}/backend/wordpress/mu-plugins/massive-charging.php" "${MU_PLUGIN_DIR}/"
sudo chown www-data:www-data "${MU_PLUGIN_DIR}/massive-charging.php"

# ── 7. Nginx site config ──────────────────────────────────────────────────────
echo "==> Installing Nginx site config..."
sudo cp "${REPO_ROOT}/backend/wordpress/nginx/content.conf" \
        "${NGINX_SITES}/content.massivecharging.com"

if [[ ! -L "${NGINX_ENABLED}/content.massivecharging.com" ]]; then
  sudo ln -s "${NGINX_SITES}/content.massivecharging.com" \
              "${NGINX_ENABLED}/content.massivecharging.com"
fi

sudo nginx -t
sudo systemctl reload nginx

# ── 8. Done ───────────────────────────────────────────────────────────────────
echo ""
echo "============================================================"
echo "  Setup complete."
echo ""
echo "  Next steps:"
echo ""
echo "  1. Point DNS: content.massivecharging.com → this server's IP"
echo ""
echo "  2. Once DNS propagates, provision SSL:"
echo "     sudo certbot --nginx -d content.massivecharging.com"
echo ""
echo "  3. Complete WordPress install in the browser:"
echo "     https://content.massivecharging.com/wp-admin/install.php"
echo ""
echo "  4. In WordPress admin:"
echo "     - Install ACF Pro (upload plugin zip)"
echo "     - Install JWT Authentication for WP REST API"
echo "     - Install Yoast SEO"
echo "     - Set Permalinks to 'Post name' (Settings → Permalinks)"
echo ""
echo "  5. Set environment variables in frontend/.env:"
echo "     CMS_API_BASE_URL=https://content.massivecharging.com"
echo "     CMS_API_TOKEN=<Application Password from WP admin>"
echo "     CMS_REVALIDATE_SECRET=<random secret string>"
echo "============================================================"
