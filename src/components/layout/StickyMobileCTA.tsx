import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  
  // Only show on homepage
  const isHomepage = location.pathname === "/";

  useEffect(() => {
    if (!isHomepage) return;

    const handleScroll = () => {
      // Show after scrolling past hero section (approximately 90vh)
      const heroHeight = window.innerHeight * 0.9;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  if (!isHomepage || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-secondary/95 backdrop-blur-sm border-t border-secondary-foreground/10 p-4 md:hidden z-50 shadow-xl animate-fade-in-up">
      <Button variant="accent" size="lg" asChild className="w-full group">
        <Link to="/master-bundle">
          Get Master Bundle — $69
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  );
};