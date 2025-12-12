import { Link } from "react-router-dom";
import { ArrowRight, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const whatWeAreNot = [
  "A subscription that drains your wallet monthly",
  "A 'course' that upsells you at every turn",
  "A guru promising overnight millions",
];

const whatWeAre = [
  "Practical, no-fluff education",
  "One-time purchase, lifetime access",
  "30-day money-back guarantee (for real)",
];

export const WhyThisPrice = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial-navy" />
      <div className="absolute inset-0 bg-gradient-mesh" />

      <div className="container relative">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-section-title font-display text-3xl md:text-4xl text-secondary-foreground mb-6">
              Why Are We Practically Giving This Away?
            </h2>
            <div className="space-y-4 text-secondary-foreground/80 text-lg leading-relaxed">
              <p>
                Let's be real — <span className="text-gold font-semibold">$69 for everything you see here is almost stupid cheap.</span> Here's why we price it this way:
              </p>
              <p>
                <strong className="text-secondary-foreground">We believe in accessible education.</strong> Premium courses on these topics typically cost $500-$2,000. We think that's ridiculous. Quality education shouldn't require a second mortgage.
              </p>
              <p>
                <strong className="text-secondary-foreground">We want you to succeed.</strong> When you succeed, you tell others. Word of mouth is our best marketing. We'd rather have 40,000 customers at $69 than 4,000 at $690.
              </p>
              <p>
                <strong className="text-secondary-foreground">No ongoing costs for us.</strong> These are digital products. Once created, they cost us nothing to deliver. We pass those savings to you.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Two Columns */}
        <ScrollAnimation animation="fade-up" delay={200}>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {/* What we're NOT */}
            <div className="bg-coral/10 rounded-2xl p-6 md:p-8 border border-coral/20">
              <h3 className="font-heading font-bold text-secondary-foreground text-xl mb-4">
                What we're NOT:
              </h3>
              <ul className="space-y-3">
                {whatWeAreNot.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-coral/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-3 w-3 text-coral" />
                    </div>
                    <span className="text-secondary-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What we ARE */}
            <div className="bg-accent/10 rounded-2xl p-6 md:p-8 border border-accent/20">
              <h3 className="font-heading font-bold text-secondary-foreground text-xl mb-4">
                What we ARE:
              </h3>
              <ul className="space-y-3">
                {whatWeAre.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-secondary-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation animation="scale-in" delay={300}>
          <div className="text-center">
            <Button variant="accent" size="xl" asChild className="text-lg px-12 group">
              <Link to="/master-bundle">
                Get $470+ Value for $69
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
