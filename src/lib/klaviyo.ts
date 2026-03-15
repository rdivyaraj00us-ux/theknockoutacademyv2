// Klaviyo Integration for The Knockout Academy
// Public API Key (safe for frontend use - can only subscribe/track, not read data)
const KLAVIYO_COMPANY_ID = "TZVW2b";
const KLAVIYO_LIST_ID = "Tr4Qa6";
const KLAVIYO_API_URL = "https://a.klaviyo.com";

/**
 * Subscribe an email to the Academy Email Subscribers list in Klaviyo.
 * Uses Klaviyo's Client API (public, no private key needed).
 */
export async function subscribeToKlaviyo(
  email: string,
  source: string,
  customProperties?: Record<string, string>,
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(`https://a.klaviyo.com/client/subscriptions/?company_id=${KLAVIYO_COMPANY_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        revision: "2024-10-15",
      },
      body: JSON.stringify({
        data: {
          type: "subscription",
          attributes: {
            custom_source: source,
            profile: {
              data: {
                type: "profile",
                attributes: {
                  email: email,
                  properties: {
                    source_site: "theknockoutacademy",
                    capture_source: source,
                    ...customProperties,
                  },
                },
              },
            },
            channels: {
              email: ["MARKETING"],
            },
          },
          relationships: {
            list: {
              data: {
                type: "list",
                id: KLAVIYO_LIST_ID,
              },
            },
          },
        },
      }),
    });

    // Klaviyo returns 202 on success (accepted)
    if (response.ok || response.status === 202) {
      return { success: true };
    }

    const errorData = await response.json().catch(() => null);
    const errorMessage = errorData?.errors?.[0]?.detail || `Klaviyo API error: ${response.status}`;
    console.error("Klaviyo subscription error:", errorMessage);
    return { success: false, error: errorMessage };
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
  // Uses the Klaviyo onsite JS SDK (loaded via index.html script)
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
