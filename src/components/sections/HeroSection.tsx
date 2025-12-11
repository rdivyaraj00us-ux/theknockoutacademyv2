import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Abstract 3D shapes representing knowledge" 
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80" />
      </div>

      <div className="container relative py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary-foreground/90 backdrop-blur-sm border border-primary/20 mb-6 animate-fade-in">
            <Zap className="h-4 w-4 text-accent" />
            Where Dreams Meet Discipline
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-secondary-foreground sm:text-5xl md:text-6xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Master the Skills That{" "}
            <span className="text-primary">Actually Make Money</span>{" "}
            Online
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg text-secondary-foreground/80 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            40+ Premium eBooks, Guides & 8,000+ AI Automation Templates — From Complete Beginner to Confident Professional
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="accent" size="xl" asChild>
              <Link to="/#products">
                Get The Master Bundle - $69
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroSecondary" size="xl" asChild>
              <Link to="/#products">
                Browse Individual Bundles - $29
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap gap-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <Zap className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Instant Digital Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <RefreshCw className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">30-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
