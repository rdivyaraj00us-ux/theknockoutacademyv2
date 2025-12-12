import { CheckCircle2 } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  "Curated by professionals, not influencers",
  "Organized into clear learning paths",
  "Practical templates you can use immediately",
  "Beginner-friendly with no prerequisites"
];

export const SolutionIntro = () => {
  return (
    <section className="py-20 md:py-28 bg-soft-gray">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image/Visual */}
          <ScrollAnimation animation="slide-right" className="order-2 lg:order-1">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl" />
              
              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-24 h-24 bg-primary/20 rounded-2xl transform rotate-12 animate-float" />
              <div className="absolute bottom-8 right-8 w-20 h-20 bg-accent/20 rounded-2xl transform -rotate-12 animate-float" style={{ animationDelay: '-2s' }} />
              
              {/* Main visual container */}
              <div className="absolute inset-8 bg-card rounded-2xl shadow-xl border border-border flex items-center justify-center overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-primary">K</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    Organized Learning
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Everything you need, nothing you don't
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right: Text Content */}
          <div className="order-1 lg:order-2">
            <ScrollAnimation animation="fade-up">
              {/* Small Label */}
              <div className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-primary uppercase tracking-wide mb-4">
                The Knockout Academy Difference
              </div>

              {/* Title */}
              <h2 className="text-section-title font-display text-3xl md:text-4xl text-foreground mb-6">
                A System That Actually Works
              </h2>

              {/* Body Text */}
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  We've curated the most practical, actionable resources into organized learning paths. No fluff. No outdated content. Just the skills you need to start generating real results.
                </p>
                <p>
                  Whether you want to master AI tools, start an e-commerce business, or become a content creator — we've built the roadmap.
                </p>
              </div>
            </ScrollAnimation>

            {/* Feature List */}
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <ScrollAnimation key={index} animation="slide-left" staggerIndex={index} delay={200}>
                  <li className="flex items-start gap-3 group">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 group-hover:bg-accent/20 transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    </span>
                    <span className="text-foreground font-medium">{feature}</span>
                  </li>
                </ScrollAnimation>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
