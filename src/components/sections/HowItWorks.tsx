import { Target, Zap, BookOpen, Rocket } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: 1,
    icon: Target,
    iconColor: "bg-primary/10 text-primary",
    title: "Pick Your Bundle",
    description: "Select the Master Bundle for complete access, or choose individual skill areas that match your goals.",
  },
  {
    number: 2,
    icon: Zap,
    iconColor: "bg-accent/10 text-accent",
    title: "Download Immediately",
    description: "No waiting. Your download links arrive in your inbox within minutes of purchase.",
  },
  {
    number: 3,
    icon: BookOpen,
    iconColor: "bg-primary/10 text-primary",
    title: "Learn Step-by-Step",
    description: "Each bundle includes a recommended learning sequence. Start with foundations, progress to advanced.",
  },
  {
    number: 4,
    icon: Rocket,
    iconColor: "bg-gold/10 text-gold",
    title: "Implement & See Results",
    description: "Use the templates, apply the strategies, and start building real skills that create real opportunities.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      <div className="container relative">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-section-title font-display text-3xl md:text-4xl text-foreground mb-4">
              Your Learning Journey in 4 Simple Steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From purchase to results — here's exactly how it works
            </p>
          </div>
        </ScrollAnimation>

        {/* Steps Grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-border" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <ScrollAnimation
                key={step.number}
                animation="fade-up"
                staggerIndex={index}
                delay={100}
              >
                <div className="relative text-center group">
                  {/* Step Number */}
                  <div className="relative z-10 mb-6">
                    <div className="w-12 h-12 mx-auto rounded-full bg-card border-2 border-primary flex items-center justify-center font-heading font-bold text-primary text-lg shadow-md group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${step.iconColor} flex items-center justify-center mb-4 group-hover:-translate-y-1 transition-transform`}>
                    <step.icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
