import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const FloatingBestValue = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if already dismissed this session
    if (sessionStorage.getItem("bestValueDismissed")) {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      const productsSection = document.getElementById("products");
      if (productsSection) {
        const rect = productsSection.getBoundingClientRect();
        // Show when scrolled past the products section
        setIsVisible(rect.bottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem("bestValueDismissed", "true");
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 animate-slide-in-right max-w-sm">
      <div className="bg-accent text-accent-foreground rounded-xl p-4 shadow-xl shadow-accent/20 relative">
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground hover:bg-secondary/80 transition-colors"
        >
          <X className="h-3.5 w-3.5" />
        </button>
        
        <div className="flex items-start gap-3">
          <Sparkles className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-heading font-semibold text-sm mb-1">
              💡 Tip: The Master Bundle includes ALL 6 bundles + 8,000 templates for just $69
            </p>
            <Link 
              to="/master-bundle" 
              className="text-xs underline opacity-90 hover:opacity-100 transition-opacity"
            >
              See the Master Bundle →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
