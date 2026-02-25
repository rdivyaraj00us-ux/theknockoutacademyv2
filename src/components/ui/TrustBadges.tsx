import { Shield, RefreshCw, Zap, Globe } from "lucide-react";

const trustBadges = [
  { icon: RefreshCw, label: "30-Day Money-Back Guarantee", emoji: "✅" },
  { icon: Shield, label: "Secure Checkout via Razorpay", emoji: "🔒" },
  { icon: Zap, label: "Instant Digital Delivery", emoji: "⚡" },
  { icon: Globe, label: "Available Worldwide", emoji: "🌍" },
];

interface TrustBadgesProps {
  variant?: "grid" | "inline" | "compact";
  className?: string;
}

export const TrustBadges = ({ variant = "grid", className = "" }: TrustBadgesProps) => {
  if (variant === "inline") {
    return (
      <div className={`flex flex-wrap justify-center gap-x-6 gap-y-2 ${className}`}>
        {trustBadges.map((badge) => (
          <span key={badge.label} className="text-sm text-secondary-foreground/60 font-body">
            {badge.emoji} {badge.label}
          </span>
        ))}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap justify-center gap-x-4 gap-y-1 ${className}`}>
        {trustBadges.map((badge, i) => (
          <span key={badge.label} className="text-xs text-muted-foreground font-body">
            {badge.emoji} {badge.label}
            {i < trustBadges.length - 1 && <span className="ml-4">•</span>}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 ${className}`}>
      {trustBadges.map((badge) => (
        <div key={badge.label} className="text-center p-3 rounded-lg bg-muted/50 border border-border">
          <badge.icon className="h-5 w-5 mx-auto mb-1.5 text-accent" />
          <span className="text-xs text-muted-foreground font-body leading-tight block">{badge.label}</span>
        </div>
      ))}
    </div>
  );
};
