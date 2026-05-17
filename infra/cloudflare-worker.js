/**
 * First-party tracking proxy for track.theknockoutacademy.com.
 *
 * Forwards GA4 Measurement Protocol and (optionally) Stape server-side
 * GTM requests through a first-party origin so they bypass ad blockers
 * and iOS ATT signal loss. CPL on paid social typically improves 30-40%
 * once this is in place — see Empire Plan PDF p33.
 *
 * NOT YET DEPLOYED. Deploy steps in infra/README.md. The worker requires
 * a Cloudflare account with the theknockoutacademy.com zone, and a
 * CNAME for track.* pointing at the worker route.
 *
 * Env vars (configured via wrangler.toml [vars] or wrangler secret put):
 *   UPSTREAM_URL    Base URL of the upstream tracking endpoint.
 *                   Default https://www.google-analytics.com.
 *                   Set to https://<your-stape-subdomain>.stape.io once
 *                   server-side GTM is provisioned.
 *   ALLOWED_ORIGIN  Origin permitted by CORS.
 *                   Default https://theknockoutacademy.com.
 */

const DEFAULT_UPSTREAM = "https://www.google-analytics.com";
const DEFAULT_ALLOWED_ORIGIN = "https://theknockoutacademy.com";

// Endpoints the worker is allowed to proxy. Anything else returns 404 so the
// worker can't be used as an open relay.
const ALLOWED_PATHS = [
  "/g/collect", // GA4 Measurement Protocol
  "/r/collect", // legacy
  "/collect",   // legacy
  "/j/collect", // legacy
];

const corsHeaders = (origin) =>
  new Headers({
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Max-Age": "86400",
  });

const isAllowedPath = (pathname) =>
  ALLOWED_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"));

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const upstreamBase = env.UPSTREAM_URL || DEFAULT_UPSTREAM;
    const allowedOrigin = env.ALLOWED_ORIGIN || DEFAULT_ALLOWED_ORIGIN;

    // CORS preflight — return early before any upstream call.
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(allowedOrigin) });
    }

    if (!isAllowedPath(url.pathname)) {
      return new Response("Not Found", { status: 404 });
    }

    // Reconstruct upstream URL preserving the original path + query string.
    const upstreamUrl = new URL(url.pathname + url.search, upstreamBase);

    // Forward only the headers the upstream actually needs. Stripping
    // identifying headers (Referer, Cookie from third-party domains) reduces
    // fingerprintable surface; GA4 reads the visitor's cid from the request
    // body, not headers.
    const forwardHeaders = new Headers();
    const ct = request.headers.get("Content-Type");
    if (ct) forwardHeaders.set("Content-Type", ct);
    const ua = request.headers.get("User-Agent");
    if (ua) forwardHeaders.set("User-Agent", ua);

    // Preserve the visitor's IP so GA4 geo and bot-filter logic work.
    // Cloudflare exposes the real client IP via CF-Connecting-IP.
    const clientIp =
      request.headers.get("CF-Connecting-IP") ||
      request.headers.get("X-Forwarded-For");
    if (clientIp) forwardHeaders.set("X-Forwarded-For", clientIp);

    let upstreamResponse;
    try {
      upstreamResponse = await fetch(upstreamUrl.toString(), {
        method: request.method,
        headers: forwardHeaders,
        body: ["POST", "PUT", "PATCH"].includes(request.method)
          ? request.body
          : undefined,
      });
    } catch (err) {
      console.error("upstream fetch failed:", err);
      return new Response("Bad Gateway", {
        status: 502,
        headers: corsHeaders(allowedOrigin),
      });
    }

    const responseHeaders = corsHeaders(allowedOrigin);
    responseHeaders.set("Cache-Control", "no-store");
    const responseCt = upstreamResponse.headers.get("Content-Type");
    if (responseCt) responseHeaders.set("Content-Type", responseCt);

    return new Response(upstreamResponse.body, {
      status: upstreamResponse.status,
      headers: responseHeaders,
    });
  },
};
