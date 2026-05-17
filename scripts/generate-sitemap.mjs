#!/usr/bin/env node
/**
 * generate-sitemap.mjs — regenerate public/sitemap.xml from catalog.json.
 *
 * Usage:  node scripts/generate-sitemap.mjs
 *
 * Sources of truth:
 *   - src/data/catalog.json  → series, books, bundles
 *   - This script             → routes + priorities + utility pages
 *
 * Output:
 *   - public/sitemap.xml  (overwritten)
 *
 * Notes:
 *   - /bundles/grand-master is NOT listed — it redirects to /master-bundle.
 *   - Static utility pages (about, contact, legal) are listed by name here
 *     because they're not in catalog.json.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");
const catalogPath = resolve(repoRoot, "src/data/catalog.json");
const outPath = resolve(repoRoot, "public/sitemap.xml");

const ORIGIN = "https://theknockoutacademy.com";

const STATIC_ROUTES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/master-bundle", changefreq: "weekly", priority: "0.95" },
  { path: "/about", changefreq: "monthly", priority: "0.5" },
  { path: "/contact", changefreq: "monthly", priority: "0.5" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms-of-service", changefreq: "yearly", priority: "0.3" },
  { path: "/refund-policy", changefreq: "yearly", priority: "0.3" },
  { path: "/earnings-disclaimer", changefreq: "yearly", priority: "0.3" },
];

const catalog = JSON.parse(readFileSync(catalogPath, "utf8"));

const urls = [];

for (const r of STATIC_ROUTES) {
  urls.push({ loc: `${ORIGIN}${r.path}`, changefreq: r.changefreq, priority: r.priority });
}

for (const series of catalog.series) {
  urls.push({
    loc: `${ORIGIN}/series/${series.id}`,
    changefreq: "monthly",
    priority: "0.9",
  });
  for (const book of series.books) {
    urls.push({
      loc: `${ORIGIN}/book/${book.slug}`,
      changefreq: "monthly",
      priority: "0.7",
    });
  }
}

for (const bundle of catalog.bundles) {
  // Grand Master is canonical at /master-bundle (already listed above);
  // /bundles/grand-master redirects, so exclude it from the sitemap.
  if (bundle.id === "grand-master") continue;
  urls.push({
    loc: `${ORIGIN}/bundles/${bundle.id}`,
    changefreq: "monthly",
    priority: "0.85",
  });
}

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
    )
    .join("\n") +
  `\n</urlset>\n`;

writeFileSync(outPath, xml, "utf8");
console.log(`Wrote ${urls.length} URLs to ${outPath}`);
