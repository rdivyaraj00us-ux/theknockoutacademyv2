# infra/ — Cloudflare Worker for first-party tracking

The worker in `cloudflare-worker.js` proxies GA4 (and optionally Stape server-side GTM) hits through `track.theknockoutacademy.com` so they look first-party to browsers. This bypasses ad blockers and iOS ATT signal loss — CPL on paid social typically improves 30–40% once it's live (see Empire Plan PDF p33).

> **Not yet deployed.** This doc is the deploy runbook for the day we wire it up. Deployment needs a Cloudflare account with the `theknockoutacademy.com` zone and the Wrangler CLI installed. Raj's call.

## What the worker does

- Accepts requests at `https://track.theknockoutacademy.com/g/collect` (and three legacy GA paths).
- Forwards each request to the upstream endpoint configured in the `UPSTREAM_URL` env var (default `https://www.google-analytics.com`; swap to the Stape server-side GTM URL once that's provisioned).
- Preserves the visitor's real IP via `X-Forwarded-For` so GA4 geo and bot-filtering still work. Cloudflare's `CF-Connecting-IP` is the source of truth on the inbound side.
- Strips identifying headers we don't forward (cookies from other domains, referer, etc.). GA4 reads the visitor `cid` from the request body, not headers, so this doesn't break attribution.
- Returns the upstream response transparently with CORS headers allowing the production origin (`https://theknockoutacademy.com` by default; override via `ALLOWED_ORIGIN`).
- Rejects any path that isn't on the allow-list with `404` so the worker can't be used as an open relay.
- Responds to `OPTIONS` preflight without hitting the upstream.

## Deployment

### One-time prerequisites

```sh
# Install Wrangler CLI (Cloudflare's official tool).
npm install -g wrangler

# Authenticate with the Cloudflare account that owns theknockoutacademy.com.
wrangler login
```

### Project setup

Create a `wrangler.toml` next to `cloudflare-worker.js` (or in a separate `infra/wrangler/` directory if you prefer to keep deploy config out of the repo).

```toml
name = "tkoa-track"
main = "cloudflare-worker.js"
compatibility_date = "2026-05-01"

# Default values — override per env via [env.production.vars] if you want
# different upstreams for staging.
[vars]
UPSTREAM_URL = "https://www.google-analytics.com"
ALLOWED_ORIGIN = "https://theknockoutacademy.com"

# Route the worker handles. Set the zone_id from the Cloudflare dashboard.
[[routes]]
pattern = "track.theknockoutacademy.com/*"
zone_name = "theknockoutacademy.com"
```

Once Stape server-side GTM is provisioned, swap `UPSTREAM_URL` to the Stape endpoint (something like `https://sgtm-<id>.stape.io`).

### Deploy

```sh
wrangler deploy
```

Confirm in the Cloudflare dashboard that the worker is bound to the `track.theknockoutacademy.com/*` route.

### DNS

Add a CNAME for `track` in the Cloudflare DNS panel for `theknockoutacademy.com`:

| Name  | Type  | Target                | Proxy   | TTL  |
|-------|-------|-----------------------|---------|------|
| track | CNAME | theknockoutacademy.com | Proxied | Auto |

Proxied (orange cloud) is required — the worker only intercepts requests that go through Cloudflare's edge.

### Verify

```sh
# Should return 404 (path not on allow-list).
curl -i https://track.theknockoutacademy.com/

# Should return CORS preflight 204.
curl -i -X OPTIONS https://track.theknockoutacademy.com/g/collect \
  -H "Origin: https://theknockoutacademy.com" \
  -H "Access-Control-Request-Method: POST"

# Send a synthetic GA4 hit. Expect the upstream's response (usually 2xx with
# image/gif content-type).
curl -i -X POST "https://track.theknockoutacademy.com/g/collect?v=2&tid=G-XXXXX&cid=test" \
  -H "Origin: https://theknockoutacademy.com"
```

Once it returns 2xx, point the GA4/Stape configuration in GTM at `https://track.theknockoutacademy.com` instead of `https://www.google-analytics.com`. Real hits should appear in GA4 Realtime within ~30 seconds.

## After the worker is live — frontend wiring

The `useTracking` hook in `src/hooks/useTracking.ts` pushes to `window.dataLayer`; GTM reads from there. To route GTM's GA4 hits through the first-party subdomain, configure the GA4 tag inside GTM (not in the codebase):

1. In tagmanager.google.com → your container → Tags → GA4 Configuration tag.
2. Under **Fields to Set**, add `transport_url` = `https://track.theknockoutacademy.com`.
3. Save + publish the GTM container.

No code change in the repo is needed for that step. The `VITE_TRACK_DOMAIN` env var in `.env.example` is there if we later need to reference the track domain from client code (e.g., for direct Measurement Protocol calls that bypass GTM).

## Why this lives in `infra/` and not deployed

- Wrangler deploys are a one-time setup with side effects on a shared Cloudflare account — pairs better with a dedicated session.
- Stape provisioning happens first (separate account, separate billing), so the upstream URL would change immediately after deploy.
- The CNAME change touches DNS — needs Raj's hands on GoDaddy + Cloudflare.

When all three (Cloudflare account ready, Stape provisioned, DNS access) are aligned, a 15-minute deploy session lands this.
