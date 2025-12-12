import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

export const FinalCTA = () => {
  return (
    <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial-navy" />
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollAnimation animation="fade-up">
            {/* Headline */}
            <h2 className="text-section-title font-display text-3xl md:text-5xl text-secondary-foreground mb-6">
              Ready to Build Skills That Actually Matter?
            </h2>
            
            {/* Subheadline */}
            <p className="text-xl text-secondary-foreground/70 mb-10">
              Join thousands who chose action over excuses.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-in" delay={200}>
            {/* CTA Button */}
            <Button variant="accent" size="xl" asChild className="text-lg px-12 group mb-8">
              <Link to="/master-bundle">
                Get The Master Bundle — $69
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in" delay={400}>
            {/* Trust Line */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                <RefreshCw className="h-5 w-5 text-accent" />
                <span className="text-sm">30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                <Zap className="h-5 w-5 text-accent" />
                <span className="text-sm">Instant Access</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm">Secure Checkout</span>
              </div>
            </div>

            {/* Payment Icons */}
            <div className="flex items-center justify-center gap-4">
              <span className="text-xs text-secondary-foreground/40">Secure payments:</span>
              <div className="flex items-center gap-3 text-secondary-foreground/30">
                <svg className="h-6 w-auto" viewBox="0 0 38 24" fill="currentColor"><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.3 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3Zm-2 12h-4v-2h4v2Zm-18.6 6H12l2.4-12h2.4l-2.4 12Zm4.8 0h-2.4l1.2-3.6L21 18h-.8Zm8.4-6c0 3.3-2.7 6-6 6h-1.2l.6-3h.6c1.7 0 3-1.3 3-3s-1.3-3-3-3h-.6l.6-3h1.2c3.3 0 6 2.7 6 6Z"/></svg>
                <svg className="h-6 w-auto" viewBox="0 0 38 24" fill="currentColor"><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.3 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3ZM19 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8Z"/></svg>
                <svg className="h-6 w-auto" viewBox="0 0 38 24" fill="currentColor"><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.3 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3ZM15 18H9l3-12h6l-3 12Zm12-6c0 3.3-2.7 6-6 6h-2l1-4h1c1.1 0 2-.9 2-2s-.9-2-2-2h-1l1-4h2c3.3 0 6 2.7 6 6Z"/></svg>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};
