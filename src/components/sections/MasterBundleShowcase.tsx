import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const includes = [
  "All 6 Specialty Bundles (40+ eBooks & Guides)",
  "8,000+ n8n Automation Templates",
  "Beginner-to-Expert Learning Pathway",
  "Lifetime Access to All Content",
  "Instant Digital Delivery",
];

export const MasterBundleShowcase = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                    <Package className="w-16 h-16 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    BEST VALUE
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">The Complete Collection</h3>
                <p className="text-muted-foreground">Everything you need in one package</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm text-accent mb-4">
              <Package className="h-4 w-4" />
              Featured Product
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Knockout Master Bundle
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Why buy separately when you can get everything? The Master Bundle includes all 6 specialty bundles plus 8,000+ automation templates — a $470+ value for just $69.
            </p>

            {/* What's Included */}
            <ul className="space-y-3 mb-8">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* Price & CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-primary">$69</span>
                  <span className="text-lg text-muted-foreground line-through">$470+</span>
                </div>
                <p className="text-sm text-accent font-medium">Save over 85%</p>
              </div>
              
              <Button variant="accent" size="xl" asChild>
                <Link to="/master-bundle">
                  Get The Master Bundle
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
