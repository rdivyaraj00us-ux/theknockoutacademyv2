import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Shield, Zap, RefreshCw, CheckCircle2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col bg-secondary overflow-hidden">
      {/* Enhanced Trust Bar */}
      <div className="relative z-10 border-b border-secondary-foreground/10 bg-secondary-foreground/5">
        <div className="container py-2.5">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm text-secondary-foreground/70">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
              40,000+ Happy Customers
            </span>
            <span className="hidden sm:block text-secondary-foreground/30">|</span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-accent" />
              Instant Download
            </span>
            <span className="hidden sm:block text-secondary-foreground/30">|</span>
            <span className="flex items-center gap-1.5">
              <RefreshCw className="h-3.5 w-3.5 text-accent" />
              30-Day Money-Back Guarantee
            </span>
            <span className="hidden sm:block text-secondary-foreground/30">|</span>
            <span className="flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5 text-accent" />
              Secure Checkout
            </span>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial-navy" />
      <div className="absolute inset-0 bg-gradient-mesh" />
      
      {/* Subtle animated orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      {/* Main Content */}
      <div className="container relative flex-1 flex items-center py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left: Text Content */}
          <div className="max-w-2xl">
            {/* Pre-headline */}
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 border border-gold/20 px-4 py-1.5 text-xs font-heading font-semibold tracking-wide text-gold uppercase mb-6 animate-fade-in">
              Digital Education That Actually Works
            </div>

            {/* Main Headline */}
            <h1 className="text-hero font-display text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Master the Skills That{" "}
              <span className="text-primary">Build Real Income</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-secondary-foreground/70 font-body leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              40+ Premium Resources • 8,000+ AI Templates • One Complete System
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="default" size="xl" asChild className="group">
                <Link to="/master-bundle">
                  Get The Master Bundle — $69
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="heroSecondary" size="xl" asChild>
                <Link to="/#products">
                  Browse Individual Bundles → $29 each
                </Link>
              </Button>
            </div>

            {/* Payment Icons */}
            <div className="flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <span className="text-xs text-secondary-foreground/50">Secure payments:</span>
              <div className="flex items-center gap-3 text-secondary-foreground/40">
                <svg className="h-6 w-auto" viewBox="0 0 38 24" fill="currentColor"><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.3 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3Zm-2 12h-4v-2h4v2Zm-18.6 6H12l2.4-12h2.4l-2.4 12Zm4.8 0h-2.4l1.2-3.6L21 18h-.8Zm8.4-6c0 3.3-2.7 6-6 6h-1.2l.6-3h.6c1.7 0 3-1.3 3-3s-1.3-3-3-3h-.6l.6-3h1.2c3.3 0 6 2.7 6 6Z"/></svg>
                <svg className="h-6 w-auto" viewBox="0 0 38 24" fill="currentColor"><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.3 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3ZM19 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8Z"/></svg>
                <svg className="h-6 w-auto" viewBox="0 0 38 24" fill="currentColor"><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.3 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3ZM15 18H9l3-12h6l-3 12Zm12-6c0 3.3-2.7 6-6 6h-2l1-4h1c1.1 0 2-.9 2-2s-.9-2-2-2h-1l1-4h2c3.3 0 6 2.7 6 6Z"/></svg>
              </div>
            </div>
          </div>

          {/* Right: Value Stack Card */}
          <div className="relative flex items-center justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-md animate-float">
              {/* Glow effect behind */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
              
              {/* Value Stack Card */}
              <div className="relative bg-secondary-foreground/10 backdrop-blur-md rounded-2xl border border-secondary-foreground/20 p-6 md:p-8 shadow-2xl">
                <h3 className="font-heading font-bold text-secondary-foreground text-lg mb-4">
                  WHAT YOU GET:
                </h3>
                
                <ul className="space-y-3 mb-6">
                  {[
                    "40+ Premium eBooks & Guides",
                    "8,000+ AI Automation Templates",
                    "6 Complete Skill Bundles",
                    "Step-by-Step Learning Pathways",
                    "Lifetime Access (No Subscriptions)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-secondary-foreground/80">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-secondary-foreground/20 pt-4 mb-6">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-sm text-secondary-foreground/60">Total Value:</span>
                    <span className="text-xl text-gold line-through font-heading font-semibold">$470+</span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-sm text-secondary-foreground/60">YOUR PRICE:</span>
                    <span className="text-4xl font-display font-bold text-accent">$69</span>
                  </div>
                </div>

                <Button variant="accent" size="lg" asChild className="w-full group animate-pulse-emerald">
                  <Link to="/master-bundle">
                    GET INSTANT ACCESS
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-bounce">
        <button 
          onClick={scrollToProducts}
          className="flex flex-col items-center gap-2 text-secondary-foreground/50 hover:text-secondary-foreground/70 transition-colors"
        >
          <span className="text-xs font-heading uppercase tracking-wider">Explore</span>
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
