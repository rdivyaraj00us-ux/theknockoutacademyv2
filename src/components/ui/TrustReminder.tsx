import { Shield, RefreshCw, Zap, Lock } from "lucide-react";

type TrustReminderProps = {
  variant: "guarantee" | "secure" | "instant" | "support";
};

const variants = {
  guarantee: {
    icon: RefreshCw,
    text: "30-Day Money-Back Guarantee • No Questions Asked"
  },
  secure: {
    icon: Lock,
    text: "Secure Checkout • 256-bit SSL Encryption"
  },
  instant: {
    icon: Zap,
    text: "Instant Download • Access Your Products Immediately"
  },
  support: {
    icon: Shield,
    text: "Trusted by 40,000+ Customers Worldwide"
  }
};

export const TrustReminder = ({ variant }: TrustReminderProps) => {
  const { icon: Icon, text } = variants[variant];
  
  return (
    <div className="py-4 bg-soft-gray border-y border-border">
      <div className="container">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Icon className="w-4 h-4 text-accent" />
          <span className="font-body">{text}</span>
        </div>
      </div>
    </div>
  );
};
