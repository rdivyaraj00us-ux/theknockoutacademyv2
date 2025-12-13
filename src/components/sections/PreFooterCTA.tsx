import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, HelpCircle, Star } from "lucide-react";

export const PreFooterCTA = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-soft-gray to-background overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Question */}
          <h2 className="font-heading font-bold text-xl md:text-3xl text-foreground mb-3 md:mb-4">
            Still have questions?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground font-body mb-6 md:mb-8 px-2">
            We're here to help. But honestly? The 30-day guarantee means you have nothing to lose.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8 px-2">
            <Button variant="outline" asChild className="min-h-[44px]">
              <Link to="/contact">
                <MessageCircle className="mr-2 h-4 w-4" />
                Email Us
              </Link>
            </Button>
            <Button variant="outline" asChild className="min-h-[44px]">
              <Link to="/#faq">
                <HelpCircle className="mr-2 h-4 w-4" />
                Read FAQ
              </Link>
            </Button>
          </div>

          {/* Final CTA */}
          <div className="bg-white rounded-xl md:rounded-2xl border border-border p-4 md:p-8 shadow-premium mx-2 md:mx-0">
            <p className="text-sm md:text-base text-foreground font-body mb-2">
              Or just grab the bundle — worst case, get your money back in 30 days.
            </p>
            <div className="flex items-center justify-center gap-1 mb-4 md:mb-6">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-gold fill-gold" />
              ))}
              <span className="ml-2 text-xs md:text-base text-foreground font-heading font-semibold">
                Trusted by 40,000+ customers
              </span>
            </div>
            <Button variant="accent" size="lg" asChild className="shadow-glow-emerald w-full sm:w-auto min-h-[48px]">
              <Link to="/master-bundle">
                Get the Master Bundle — $69
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
