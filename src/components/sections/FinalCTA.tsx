import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Ready to Level Up Your Skills?
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-8">
            Get instant access to 40+ premium resources and 8,000+ automation templates. Start building real skills today.
          </p>

          <div className="bg-secondary-foreground/5 rounded-2xl p-8 border border-secondary-foreground/10 mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-5xl font-extrabold text-primary">$69</span>
              <div className="text-left">
                <span className="text-xl text-secondary-foreground/50 line-through block">$470+ value</span>
                <span className="text-accent font-semibold">Save over 85%</span>
              </div>
            </div>
            
            <Button variant="accent" size="xl" asChild className="w-full sm:w-auto">
              <Link to="/master-bundle">
                Get The Master Bundle
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <Zap className="h-5 w-5 text-accent" />
              <span className="text-sm">Instant Digital Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <RefreshCw className="h-5 w-5 text-accent" />
              <span className="text-sm">30-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-sm">Secure Checkout</span>
            </div>
          </div>

          <p className="mt-8 text-xs text-secondary-foreground/50">
            Results not guaranteed. Educational products only. Your success depends on your effort and implementation.
          </p>
        </div>
      </div>
    </section>
  );
};
