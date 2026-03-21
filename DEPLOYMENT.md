# Deployment Guide — Massive Charging Website

## Server Details

| Item | Value |
|------|-------|
| **Provider** | GCP Compute Engine (VM) |
| **Instance** | `instance-20260313-052145` |
| **User** | `awadesh` |
| **Project Path** | `/var/www/massivecharging` |
| **Frontend Path** | `/var/www/massivecharging/frontend` |
| **Domain** | `massivecharging.com` |
| **SSL** | Let's Encrypt (Certbot auto-managed) |
| **Process Manager** | PM2 |
| **Web Server** | Nginx (reverse proxy → port 3000) |

---

## What Changed: React → Next.js

### Pehle (React — Static Build)

```
git pull → npm run build → dist/ folder generate → Nginx serve karta tha directly
```

- Nginx `dist/` folder se static `index.html` + JS/CSS serve karta tha
- Koi server process nahi chahiye tha
- `try_files $uri /index.html` se SPA routing hoti thi

### Ab (Next.js — Server-Side Rendering)

```
git pull → npm install → npm run build → PM2 restart → Nginx proxy karta hai port 3000 pe
```

- Next.js apna Node.js server chalata hai (port 3000)
- Nginx ab **reverse proxy** hai — request aati hai → port 3000 pe forward karta hai
- PM2 Next.js process ko alive rakhta hai
- `.env` file server pe honi chahiye (`frontend/.env`)

### Nginx Config Change

**Pehle (static):**
```nginx
root /var/www/massivecharging/dist;
index index.html;
location / {
    try_files $uri $uri/ /index.html;
}
```

**Ab (reverse proxy):**
```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
```

---

## How to Deploy New Changes

### Quick Deploy (Most Common)

Jab bhi code changes push karo aur production update karna ho:

```bash
# 1. SSH into server
ssh awadesh@<server-ip>

# 2. Go to project root and pull
cd /var/www/massivecharging
git pull origin main

# 3. Go to frontend, install dependencies (if changed), build, restart
cd frontend
npm install
npm run build
pm2 restart massivecharging
```

Bas. 3 commands — **pull, build, restart**.

### If Only Frontend Code Changed (No New Packages)

```bash
cd /var/www/massivecharging
git pull origin main
cd frontend
npm run build
pm2 restart massivecharging
```

### If `.env` Changed

```bash
cd /var/www/massivecharging/frontend
nano .env
# Edit values, save (Ctrl+X → Y → Enter)
npm run build
pm2 restart massivecharging
```

> `.env` changes require rebuild because `NEXT_PUBLIC_*` values are baked into the build.

---

## Useful PM2 Commands

```bash
pm2 list                    # Running processes dekho
pm2 logs massivecharging    # Live logs dekho
pm2 restart massivecharging # Restart karo
pm2 stop massivecharging    # Stop karo
pm2 delete massivecharging  # Remove karo

# First time setup (auto-start on server reboot):
pm2 startup
pm2 save
```

## Useful Nginx Commands

```bash
sudo nginx -t                    # Config test karo
sudo systemctl restart nginx     # Restart Nginx
sudo systemctl status nginx      # Status dekho
sudo tail -f /var/log/nginx/error.log   # Error logs
```

---

## Environment Variables

File location: `/var/www/massivecharging/frontend/.env`

```env
# ── Public (browser mein jaate hain — secrets NAHI daalna) ──
NEXT_PUBLIC_SITE_NAME=Massive Charging
NEXT_PUBLIC_SITE_URL=https://massivecharging.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=<google-maps-key>

# ── Server-only (sirf server pe rehte hain, safe) ──
STATIONS_API_BASE_URL=https://backend.1charging.com
STATIONS_API_BEARER_TOKEN=<real-token>
STATIONS_API_X_API=<real-key>
```

> **Important:** `NEXT_PUBLIC_` wale variables browser mein expose hote hain. Kabhi secret yaha mat daalo.

---

## Troubleshooting

### Site down hai / 502 Bad Gateway
```bash
pm2 list                          # Check if process is running
pm2 restart massivecharging       # Restart karo
pm2 logs massivecharging --lines 50  # Logs check karo
```

### Build fail ho raha hai
```bash
cd /var/www/massivecharging/frontend
npm run build 2>&1 | tail -30     # Error dekho
```

### Nginx issue
```bash
sudo nginx -t                     # Config valid hai?
sudo systemctl status nginx       # Running hai?
sudo tail -20 /var/log/nginx/error.log  # Errors dekho
```

### Port 3000 already in use
```bash
pm2 delete all
pm2 start npm --name "massivecharging" -- start
pm2 save
```

---

## SSL Certificate Renewal

Certbot auto-renew karta hai. Verify:
```bash
sudo certbot renew --dry-run
```
