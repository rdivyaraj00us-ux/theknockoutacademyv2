// Klaviyo Integration for The Knockout Academy
// Public API Key (safe for frontend use - can only subscribe/track, not read data)
const KLAVIYO_COMPANY_ID = "TZVW2b";
const KLAVIYO_LIST_ID = "Tr4Qa6";

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
    // Step 1: Subscribe to list with email marketing consent
    const response = await fetch(`https://a.klaviyo.com/client/subscriptions/?company_id=${KLAVIYO_COMPANY_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        revision: "2025-01-15",
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

    if (response.ok || response.status === 202) {
      return { success: true };
    }

    // If the new API format fails, fall back to profile creation + identify
    const errorData = await response.json().catch(() => null);
    console.error("Klaviyo API response:", response.status, errorData);

    // Fallback: create profile via back-channel events API
    const fallbackResponse = await fetch(`https://a.klaviyo.com/client/events/?company_id=${KLAVIYO_COMPANY_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        revision: "2025-01-15",
      },
      body: JSON.stringify({
        data: {
          type: "event",
          attributes: {
            metric: {
              data: {
                type: "metric",
                attributes: {
                  name: "Lead Captured",
                },
              },
            },
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
            properties: {
              source: source,
              lead_magnet: customProperties?.lead_magnet || "unknown",
            },
          },
        },
      }),
    });

    if (fallbackResponse.ok || fallbackResponse.status === 202) {
      return { success: true };
    }

    return { success: false, error: "Failed to subscribe" };
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
