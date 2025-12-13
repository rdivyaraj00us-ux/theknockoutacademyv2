import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  CheckCircle2, 
  Zap, 
  RefreshCw, 
  Lock,
  Star,
  ChevronDown,
  X
} from "lucide-react";

export const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen lg:min-h-[90vh] bg-secondary overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial-navy opacity-60" />
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float hidden md:block" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float hidden md:block" style={{ animationDelay: '-3s' }} />
      
      {/* Trust Bar - Simplified on mobile */}
      <div className="relative border-b border-secondary-foreground/10 bg-secondary-foreground/5 backdrop-blur-sm">
        <div className="container py-2 md:py-3">
          <div className="flex items-center justify-center gap-3 md:gap-8 text-xs md:text-sm text-secondary-foreground/80">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-accent" />
              <span className="font-body">40K+ Customers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="h-3 w-3 md:h-4 md:w-4 text-accent" />
              <span className="font-body">Instant Access</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <RefreshCw className="h-3 w-3 md:h-4 md:w-4 text-accent" />
              <span className="font-body">30-Day Guarantee</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5">
              <Lock className="h-4 w-4 text-accent" />
              <span className="font-body">Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="container relative py-8 md:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* LEFT SIDE — Text Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-4 md:mb-6 bg-gold/20 text-gold border-gold/30 font-heading animate-fade-in text-xs md:text-sm">
              <Star className="h-3 w-3 mr-1 fill-gold" />
              4.9/5 from 40,000+ customers
            </Badge>
            
            <h1 className="text-hero font-display text-3xl md:text-5xl lg:text-6xl text-secondary-foreground mb-4 md:mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Master the Skills That{" "}
              <span className="text-primary">Build Real Income</span>
            </h1>
            
            <p className="text-base md:text-xl text-secondary-foreground/70 font-body mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              40+ Premium eBooks & 8,000+ AI Templates. 
              From beginner to professional. No fluff, all action.
            </p>

            {/* CTA Buttons - Larger on mobile */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center lg:justify-start mb-6 md:mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button 
                variant="accent" 
                size="xl" 
                asChild 
                className="group w-full sm:w-auto text-lg py-6 sm:py-4 px-8 shadow-glow-emerald min-h-[56px]"
              >
                <Link to="/master-bundle">
                  Get Master Bundle — $69
                  <Zap className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="w-full sm:w-auto border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 min-h-[48px]"
              >
                <Link to="/#products">
                  See What's Inside
                </Link>
              </Button>
            </div>

            {/* Mini Testimonial - Hidden on smallest screens */}
            <div className="hidden sm:flex items-center gap-3 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="h-4 w-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-sm text-secondary-foreground/60 font-body italic">
                "This bundle changed how I work"
              </p>
              <span className="text-sm text-secondary-foreground/40">— Marcus T.</span>
            </div>
          </div>

          {/* RIGHT SIDE — Video + Value Stack */}
          <div className="space-y-4 lg:space-y-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            
            {/* Founder Video Player */}
            <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary/20">
              <div 
                className="relative cursor-pointer group"
                onClick={() => setIsVideoModalOpen(true)}
              >
                {/* Video Thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-secondary via-navy to-secondary">
                  <video 
                    className="w-full h-full object-cover opacity-80"
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src="/videos/The_Knockout_Academy.mp4#t=0.5" type="video/mp4" />
                  </video>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform animate-pulse-glow">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-primary ml-1 fill-primary" />
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 flex justify-between items-end">
                  <div>
                    <p className="text-white font-heading font-semibold text-xs md:text-sm">Meet Alex, Founder</p>
                    <p className="text-white/70 text-xs font-body hidden sm:block">Watch why he created this</p>
                  </div>
                  <Badge className="bg-black/50 text-white border-none text-xs">
                    1:30
                  </Badge>
                </div>
              </div>
            </div>

            {/* Value Stack Card - Hidden on mobile, shown on lg+ */}
            <div className="hidden lg:block bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-xl">
              <h3 className="font-heading font-bold text-secondary-foreground text-sm uppercase tracking-wide mb-4">
                What You Get:
              </h3>
              <ul className="space-y-3 mb-6">
                {[
                  "40+ Premium eBooks & Guides",
                  "8,000+ AI Automation Templates",
                  "6 Complete Skill Bundles",
                  "Step-by-Step Learning Pathways",
                  "Lifetime Access (No Subscriptions)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-secondary-foreground/90">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="font-body">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/10 pt-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-secondary-foreground/50 line-through text-lg font-body">$470+</span>
                    <span className="text-secondary-foreground/50 text-sm ml-2">value</span>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-heading font-bold text-accent">$69</span>
                    <Badge className="ml-2 bg-gold/20 text-gold border-gold/30 font-heading text-xs">
                      Save 85%
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile-only compact value indicator */}
            <div className="lg:hidden flex items-center justify-center gap-4 py-3 px-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-center">
                <span className="text-secondary-foreground/50 line-through text-sm font-body">$470+</span>
                <span className="text-secondary-foreground/50 text-xs ml-1">value</span>
              </div>
              <div className="h-6 w-px bg-white/20" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-heading font-bold text-accent">$69</span>
                <Badge className="bg-gold/20 text-gold border-gold/30 font-heading text-xs">
                  85% OFF
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile to save space */}
        <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-bounce">
          <button 
            onClick={scrollToProducts}
            className="flex flex-col items-center gap-2 text-secondary-foreground/50 hover:text-secondary-foreground/70 transition-colors min-h-[44px] min-w-[44px]"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-white/80 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <video 
              className="w-full rounded-xl shadow-2xl"
              controls
              autoPlay
            >
              <source src="/videos/The_Knockout_Academy.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
