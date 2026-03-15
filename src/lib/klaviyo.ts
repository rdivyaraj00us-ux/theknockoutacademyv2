// Klaviyo Integration for The Knockout Academy
// Public API Key (safe for frontend use - can only subscribe/track, not read data)
const KLAVIYO_COMPANY_ID = "TZVW2b";
const KLAVIYO_LIST_ID = "Tr4Qa6";

/**
 * Subscribe an email to the Academy Email Subscribers list in Klaviyo.
 * Uses Klaviyo's AJAX subscribe endpoint (same one their built-in forms use).
 */
export async function subscribeToKlaviyo(
  email: string,
  source: string,
  customProperties?: Record<string, string>,
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch("https://a.klaviyo.com/ajax/subscriptions/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: new URLSearchParams({
        g: KLAVIYO_LIST_ID,
        email: email,
        $source: source,
        $fields: "$source",
        source_site: "theknockoutacademy",
        capture_source: source,
        ...(customProperties || {}),
      }).toString(),
    });

    if (response.ok) {
      return { success: true };
    }

    console.error("Klaviyo AJAX error:", response.status);
    return { success: false, error: "Subscription failed" };
  } catch (error) {
    console.error("Klaviyo subscription failed:", error);
    return { success: false, error: "Network error - please try again" };
  }
}

/**
 * Track a custom event in Klaviyo (e.g., page views, button clicks).
 * Requires the Klaviyo tracking script to be loaded on the page.
 */
export function trackKlaviyoEvent(eventName: string, properties?: Record<string, unknown>) {
  if (typeof window !== "undefined" && (window as any).klaviyo) {
    (window as any).klaviyo.push(["track", eventName, properties]);
  }
}

/**
 * Identify a user in Klaviyo (call after email capture to link browsing data).
 */
export function identifyKlaviyoUser(email: string, properties?: Record<string, unknown>) {
  if (typeof window !== "undefined" && (window as any).klaviyo) {
    (window as any).klaviyo.push(["identify", { email, ...properties }]);
  }
}
