import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  useEffect(() => {
    if (!isHomepage) return;
    
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.9;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  if (!isHomepage || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-border p-3 md:hidden z-50 shadow-2xl animate-fade-in-up">
      <div className="flex items-center justify-between gap-3">
        {/* Left Side - Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 mb-0.5">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="w-3 h-3 text-gold fill-gold" />
            ))}
            <span className="text-xs text-muted-foreground ml-1">4.9/5</span>
          </div>
          <p className="text-xs text-muted-foreground font-body flex items-center gap-1">
            <Shield className="w-3 h-3 text-accent" />
            30-Day Guarantee
          </p>
        </div>
        
        {/* Right Side - CTA */}
        <Button variant="accent" size="lg" asChild className="flex-shrink-0 shadow-glow-emerald">
          <Link to="/master-bundle">
            Get Bundle — $69
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
