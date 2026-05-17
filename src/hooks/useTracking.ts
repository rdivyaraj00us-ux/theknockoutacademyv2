/**
 * GA4 Enhanced Ecommerce tracking via Google Tag Manager.
 *
 * Pushes events to `window.dataLayer` when GTM is present; buffers (FIFO,
 * capped at 100) until dataLayer becomes available. Buffered events flush
 * on the next push that finds dataLayer ready — no events are lost across
 * the gap between component mount and GTM script readiness.
 *
 * Buffer-and-flush rationale:
 *   GTM's inline snippet in index.html creates `window.dataLayer`
 *   synchronously when the <script> tag runs in <head>. By the time React
 *   mounts and useEffect handlers fire, dataLayer almost always exists.
 *   The buffer covers the uncommon cases:
 *     - GTM env var unset (script renders %VITE_GTM_CONTAINER_ID% literally,
 *       the gtm.js fetch 404s — but `window.dataLayer = w[l]||[]` still ran
 *       and the buffer flushes once another GTM source initializes it).
 *     - SSR / pre-render where `window` is undefined.
 *     - Test runs without GTM bootstrap.
 *     - Late-injected GTM via a 3rd-party tag manager.
 *   First-page-load purchases — the highest-value scenario — are not
 *   dropped because the inline GTM snippet creates dataLayer before React
 *   even hydrates. The buffer is a safety net, not the happy path.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

// ─── Event parameter types (GA4 Enhanced Ecommerce schema) ──────────────────

export interface EcommerceItem {
  readonly item_id: string;
  readonly item_name: string;
  readonly item_category?: string;
  readonly item_variant?: string;
  readonly price?: number;
  readonly quantity?: number;
}

export interface PageViewParams {
  readonly page_title?: string;
  readonly page_location?: string;
  readonly page_path?: string;
}

export interface ViewItemParams {
  readonly currency: string;
  readonly value: number;
  readonly items: readonly EcommerceItem[];
}

export type AddToCartParams = ViewItemParams;
export type BeginCheckoutParams = ViewItemParams;

export interface PurchaseParams {
  readonly transaction_id: string;
  readonly currency: string;
  readonly value: number;
  readonly tax?: number;
  readonly shipping?: number;
  readonly coupon?: string;
  readonly items: readonly EcommerceItem[];
}

export interface SignUpParams {
  readonly method: string;
}

export interface LeadParams {
  readonly currency?: string;
  readonly value?: number;
}

// ─── Internal state ─────────────────────────────────────────────────────────

// `object` (not Record<string, unknown>) so typed event interfaces — which
// don't have index signatures — can pass through pushEcommerce without
// losing their compile-time shape at the call site.
type DataLayerPayload = object;

const MAX_BUFFER_SIZE = 100;
const buffer: DataLayerPayload[] = [];

const isBrowser = (): boolean => typeof window !== "undefined";

const dataLayerReady = (): boolean =>
  isBrowser() && Array.isArray(window.dataLayer);

const dev: boolean = isBrowser() && import.meta.env.DEV === true;

const debug = (...args: unknown[]): void => {
  if (dev) console.debug("[useTracking]", ...args);
};

const flushBuffer = (): void => {
  if (!dataLayerReady() || buffer.length === 0) return;
  const queued = buffer.splice(0);
  for (const item of queued) {
    window.dataLayer!.push(item);
  }
  debug("flushed", queued.length, "buffered event(s)");
};

const bufferPush = (payload: DataLayerPayload): void => {
  if (buffer.length >= MAX_BUFFER_SIZE) {
    buffer.shift();
    debug("buffer at cap; dropped oldest event");
  }
  buffer.push(payload);
  debug("buffered (no dataLayer yet)", payload, "size=", buffer.length);
};

const pushRaw = (payload: DataLayerPayload): void => {
  if (!isBrowser()) {
    bufferPush(payload);
    return;
  }
  if (dataLayerReady()) {
    flushBuffer();
    window.dataLayer!.push(payload);
    debug("→", payload);
    return;
  }
  bufferPush(payload);
};

const pushEcommerce = (event: string, ecommerce: object): void => {
  // GA4 docs: reset the ecommerce object on the dataLayer before each event
  // so prior items don't leak into the next push.
  pushRaw({ ecommerce: null });
  pushRaw({ event, ecommerce });
};

// ─── Public API ─────────────────────────────────────────────────────────────

export interface UseTrackingResult {
  readonly trackPageView: (params: PageViewParams) => void;
  readonly trackViewItem: (params: ViewItemParams) => void;
  readonly trackAddToCart: (params: AddToCartParams) => void;
  readonly trackBeginCheckout: (params: BeginCheckoutParams) => void;
  readonly trackPurchase: (params: PurchaseParams) => void;
  readonly trackSignUp: (params: SignUpParams) => void;
  readonly trackLead: (params: LeadParams) => void;
}

const handlers: UseTrackingResult = {
  trackPageView: (params) => pushRaw({ event: "page_view", ...params }),
  trackViewItem: (params) => pushEcommerce("view_item", params),
  trackAddToCart: (params) => pushEcommerce("add_to_cart", params),
  trackBeginCheckout: (params) => pushEcommerce("begin_checkout", params),
  trackPurchase: (params) => pushEcommerce("purchase", params),
  trackSignUp: (params) => pushRaw({ event: "sign_up", ...params }),
  trackLead: (params) => pushRaw({ event: "generate_lead", ...params }),
};

export function useTracking(): UseTrackingResult {
  // Handlers are module-level singletons — same reference across renders,
  // so consumers can safely use them as effect deps without re-runs.
  return handlers;
}

// Internal helpers for tests & debugging — not part of the public hook API.
export const __testing = {
  getBufferSize: (): number => buffer.length,
  flushBuffer,
  resetBuffer: (): void => {
    buffer.length = 0;
  },
};
