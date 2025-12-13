import { useEffect, useState } from "react";
import { X, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem('exitPopupShown');
    if (shown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    const timeout = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 10000);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Replace with your email service API call
    // Example for ConvertKit, Mailchimp, etc.
    
    // Simulate success for now
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Success! Check your email for the free cheat sheet.");
    setIsVisible(false);
    setIsSubmitting(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 animate-fade-in">
      <div className="relative bg-background rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-scale-in">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
          <div className="flex items-center gap-3 text-primary-foreground">
            <Gift className="w-8 h-8" />
            <div>
              <p className="font-heading font-bold text-lg">Wait! Don't leave empty-handed</p>
              <p className="text-primary-foreground/80 text-sm">We have something special for you</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h3 className="font-heading font-bold text-xl text-foreground mb-2">
              Get Our FREE AI Productivity Cheat Sheet
            </h3>
            <p className="text-muted-foreground text-sm">
              10 AI prompts that save you hours every week. The same resource 40,000+ customers love.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 mb-6">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 rounded-xl"
            />
            <Button type="submit" className="w-full h-12 rounded-xl" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Get Free Cheat Sheet"}
              {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-4 text-sm text-muted-foreground">or</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3">
              Still thinking about the Master Bundle?
            </p>
            <p className="text-foreground text-sm mb-4">
              <span className="font-semibold">30-day money-back guarantee</span> • Instant access • No risk
            </p>
            <Button variant="accent" size="lg" asChild className="w-full">
              <Link to="/master-bundle">Get Master Bundle — $69</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="w-full text-center mt-4 text-sm text-muted-foreground hover:text-foreground"
          >
            No thanks, I'll pass
          </button>
        </div>
      </div>
    </div>
  );
};
