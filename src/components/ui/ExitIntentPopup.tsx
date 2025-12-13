import { useEffect, useState } from "react";
import { X, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [hasShown, setHasShown] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if already shown this session
    const shown = sessionStorage.getItem('exitPopupShown');
    if (shown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse moves to top of viewport (likely leaving)
      if (e.clientY <= 5 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    // Only add listener after 10 seconds on page
    const timeout = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 10000);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission - integrate with your email service
    console.log('Email captured:', email);
    toast({
      title: "Check your inbox!",
      description: "We've sent you the free AI Productivity Cheat Sheet.",
    });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 animate-fade-in">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-scale-in">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Top Banner */}
        <div className="bg-gradient-to-r from-primary to-royal px-6 py-4">
          <div className="flex items-center gap-3 text-white">
            <Gift className="w-8 h-8" />
            <div>
              <p className="font-heading font-bold text-lg">Wait! Don't leave empty-handed</p>
              <p className="text-white/80 text-sm font-body">We have something special for you</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Free Resource Offer */}
          <div className="mb-6">
            <h3 className="font-heading font-bold text-xl text-foreground mb-2">
              Get Our FREE AI Productivity Cheat Sheet
            </h3>
            <p className="text-muted-foreground font-body">
              The same resource that 40,000+ customers rave about. 
              10 AI prompts that save you hours every week.
            </p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-3 mb-6">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 rounded-xl"
            />
            <Button type="submit" className="w-full h-12 rounded-xl">
              Get Free Cheat Sheet
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-muted-foreground font-body">or</span>
            </div>
          </div>

          {/* Bundle CTA */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground font-body mb-3">
              Still thinking about the Master Bundle?
            </p>
            <p className="text-foreground font-body mb-4">
              Remember: <span className="font-semibold">30-day money-back guarantee</span>, instant access, no risk.
            </p>
            <Button variant="accent" size="lg" asChild className="w-full">
              <Link to="/master-bundle">
                Get Master Bundle — $69
              </Link>
            </Button>
          </div>

          {/* Skip Link */}
          <button
            onClick={() => setIsVisible(false)}
            className="w-full text-center mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
          >
            No thanks, I'll pass
          </button>
        </div>
      </div>
    </div>
  );
};
