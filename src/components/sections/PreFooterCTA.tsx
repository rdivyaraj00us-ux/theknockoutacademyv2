import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, HelpCircle, Star } from "lucide-react";

export const PreFooterCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-soft-gray to-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Question */}
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
            Still have questions?
          </h2>
          <p className="text-muted-foreground font-body mb-8">
            We're here to help. But honestly? The 30-day guarantee means you have nothing to lose.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="outline" asChild>
              <Link to="/contact">
                <MessageCircle className="mr-2 h-4 w-4" />
                Email Us
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/#faq">
                <HelpCircle className="mr-2 h-4 w-4" />
                Read FAQ
              </Link>
            </Button>
          </div>

          {/* Final CTA */}
          <div className="bg-white rounded-2xl border border-border p-8 shadow-premium">
            <p className="text-foreground font-body mb-2">
              Or just grab the bundle — worst case, get your money back in 30 days.
            </p>
            <div className="flex items-center justify-center gap-1 mb-6">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
              <span className="ml-2 text-foreground font-heading font-semibold">
                Trusted by 40,000+ customers
              </span>
            </div>
            <Button variant="accent" size="xl" asChild className="shadow-glow-emerald">
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
