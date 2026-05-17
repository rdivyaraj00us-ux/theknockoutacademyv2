/**
 * EmailCapture — inline Klaviyo subscribe form.
 *
 * Wraps the existing `subscribeToKlaviyo` AJAX call in a small controlled
 * form with loading + success states. Used in Master Bundle and bundle
 * page heroes for cold-traffic email capture before Paddle checkout is
 * wired up.
 */

import { useState } from "react";
import { toast } from "sonner";

import { subscribeToKlaviyo } from "@/lib/klaviyo";

export interface EmailCaptureProps {
  /** Klaviyo `$source` value — distinguishes captures by landing page. */
  readonly source: string;
  /** Submit button label. */
  readonly cta?: string;
  /** Placeholder text in the email input. */
  readonly placeholder?: string;
  /** Optional className for outer wrapper styling. */
  readonly className?: string;
  /** Optional className overrides for the input + button (for hero variants). */
  readonly inputClassName?: string;
  readonly buttonClassName?: string;
  /** Optional structured Klaviyo custom properties. */
  readonly customProperties?: Record<string, string>;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EmailCapture({
  source,
  cta = "Notify me when checkout opens",
  placeholder = "you@example.com",
  className = "",
  inputClassName = "",
  buttonClassName = "",
  customProperties,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(email)) {
      toast.error("That email doesn't look right.", {
        description: "Double-check and try again.",
      });
      return;
    }
    setStatus("submitting");
    const result = await subscribeToKlaviyo(email, source, customProperties);
    if (result.success) {
      setStatus("success");
      toast.success("You're on the list.", {
        description: "We'll email you the moment checkout opens.",
      });
    } else {
      setStatus("idle");
      toast.error("Couldn't subscribe just now.", {
        description: result.error ?? "Try again in a moment.",
      });
    }
  };

  if (status === "success") {
    return (
      <div className={`text-sm font-heading ${className}`}>
        ✓ Thanks — <span className="font-semibold">{email}</span> is on the list.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <label className="sr-only" htmlFor={`email-${source}`}>
        Email address
      </label>
      <input
        id={`email-${source}`}
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        disabled={status === "submitting"}
        className={`flex-1 min-w-0 px-4 py-3 rounded-xl border-2 border-border bg-card text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-accent disabled:opacity-60 ${inputClassName}`}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className={`px-6 py-3 rounded-xl font-heading font-semibold bg-accent text-accent-foreground transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:scale-100 ${buttonClassName}`}
      >
        {status === "submitting" ? "Sending…" : cta}
      </button>
    </form>
  );
}
