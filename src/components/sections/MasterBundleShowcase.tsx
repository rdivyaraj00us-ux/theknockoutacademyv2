import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Bot, Brain, ShoppingCart, Video, Mail, Clock, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const includedBundles = [
  { icon: Brain, title: "AI Mastery Essentials" },
  { icon: ShoppingCart, title: "E-Commerce Foundations" },
  { icon: Video, title: "Content Creator Accelerator" },
  { icon: Mail, title: "Digital Marketing Mastery" },
  { icon: Clock, title: "Productivity & Development" },
  { icon: Coins, title: "Finance Fundamentals" },
];

const includes = [
  "All 6 Specialty Bundles (40+ eBooks & Guides)",
  "8,000+ n8n Automation Templates",
  "Beginner-to-Expert Learning Pathway",
  "Lifetime Access to All Content",
  "Instant Digital Delivery",
];

export const MasterBundleShowcase = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial-navy" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gold text-gold-foreground font-heading font-semibold px-4 py-1.5 text-sm rounded-full mb-6 shadow-glow-gold">
            BEST VALUE
          </Badge>
          <h2 className="text-section-title font-display text-3xl md:text-5xl text-secondary-foreground mb-4">
            The Knockout Master Bundle
          </h2>
          <p className="text-xl text-secondary-foreground/70">
            Everything you need in one complete package
          </p>
        </div>

        {/* Main Product Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-secondary-foreground/5 rounded-3xl border border-primary/30 p-8 md:p-12 backdrop-blur-sm shadow-glow-royal">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-3xl blur-xl opacity-50" />
            
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Price & Visual */}
              <div className="text-center md:text-left">
                <div className="flex items-baseline justify-center md:justify-start gap-3 mb-4">
                  <span className="text-6xl font-bold text-accent font-heading">$69</span>
                  <span className="text-xl text-secondary-foreground/50 line-through">$470+ value</span>
                </div>
                <Badge className="bg-accent/20 text-accent border-accent/30 font-heading font-semibold px-3 py-1">
                  Save 85%
                </Badge>
              </div>

              {/* Right: What's Included */}
              <div>
                <h3 className="font-heading font-bold text-secondary-foreground text-lg mb-4">
                  What's Included:
                </h3>
                <ul className="space-y-3">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bundle Cards Grid */}
        <div className="mb-12">
          <h3 className="font-heading font-semibold text-secondary-foreground text-center mb-8 text-lg">
            All 6 Bundles Included:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {includedBundles.map((bundle) => (
              <div 
                key={bundle.title}
                className="bg-secondary-foreground/5 rounded-xl p-4 text-center border border-secondary-foreground/10 hover:border-accent/30 transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                  <bundle.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-heading font-medium text-secondary-foreground text-sm">
                  {bundle.title}
                </h4>
                <p className="text-xs text-accent mt-1">Included ✓</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bonus Box */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Bot className="h-6 w-6 text-accent" />
              <span className="font-heading font-bold text-secondary-foreground text-lg">
                +8,000 AI Automation Templates for n8n
              </span>
            </div>
            <p className="text-secondary-foreground/70">
              Plug-and-play workflows you can use immediately
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="accent" size="xl" asChild className="text-lg px-12 group">
            <Link to="/master-bundle">
              Get Complete Access — $69
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <p className="mt-4 text-sm text-secondary-foreground/50">
            Instant delivery • 30-day guarantee
          </p>
        </div>
      </div>
    </section>
  );
};