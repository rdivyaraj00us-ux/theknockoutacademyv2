/**
 * Canonical TheKnockoutAcademy catalog types.
 *
 * Source of truth: `src/data/catalog.json` (extracted from
 * `TheKnockoutAcademy-Empire-Plan.pdf` vol. I, May 2026). When real
 * manuscripts exist, per-book `pages` will be added — until then only
 * `total_pages` at the series level is real data.
 */

export type SeriesId =
  | "foundations"
  | "ai-powered-operator"
  | "profession"
  | "wealth"
  | "skills";

export type BundleType = "master" | "profession";

export type CompositionStatus = "locked" | "pending-review";

export interface BrandPalette {
  readonly navy: string;
  readonly gold: string;
  readonly cream: string;
  readonly ink: string;
  readonly forest: string;
  readonly burgundy: string;
}

export interface SeriesPalette {
  readonly background: string;
  readonly text: string;
  readonly accent: string;
}

export interface Book {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly subtitle: string;
  readonly price_digital: number;
  readonly price_hardcover: number;
}

export interface Series {
  readonly id: SeriesId;
  readonly name: string;
  readonly roman: string;
  readonly tagline: string;
  readonly book_count: number;
  readonly total_pages: number;
  readonly avg_digital_price: number;
  readonly avg_hardcover_price: number;
  readonly palette: SeriesPalette;
  readonly books: readonly Book[];
}

/**
 * Slot-structured bundle composition. The slot shape preserves marketing
 * reasoning ("your profession book + 2 foundations + 2 AI tools + 1 skill")
 * and lets page templates render section headers directly from the data.
 *
 * - `profession` is omitted for Operator's Master / Founder's / Grand Master
 *   (generalist bundles); when present it holds 0 or 1 entry.
 * - `foundations`, `ai_operator`, `skills` are required arrays (may be empty
 *   for pending-review bundles).
 * - `wealth` is rare — only Financial Advisor's Bundle uses it.
 */
export interface BundleComposition {
  readonly profession?: readonly string[];
  readonly foundations: readonly string[];
  readonly ai_operator: readonly string[];
  readonly skills: readonly string[];
  readonly wealth?: readonly string[];
}

/**
 * `composition` is `"all"` for the Grand Master Bundle (every book in the
 * catalog) and a `BundleComposition` (slot-structured) otherwise. Profession
 * + Operator bundles ship with empty slot arrays and
 * `composition_status: "pending-review"` until compositions are approved in
 * `composition_doc`.
 */
export interface Bundle {
  readonly id: string;
  readonly name: string;
  readonly type: BundleType;
  readonly price: number;
  readonly retail_value: number;
  readonly book_count: number;
  readonly composition: BundleComposition | "all";
  readonly tagline: string;
  readonly composition_status: CompositionStatus;
  readonly composition_doc?: string;
  readonly savings_percent?: number;
}

export interface CatalogMeta {
  readonly volume: string;
  readonly as_of: string;
  readonly source: string;
}

export interface CatalogBrand {
  readonly name: string;
  readonly palette: BrandPalette;
}

export interface Catalog {
  readonly $schema_version: number;
  readonly meta: CatalogMeta;
  readonly brand: CatalogBrand;
  readonly series: readonly Series[];
  readonly bundles: readonly Bundle[];
}
