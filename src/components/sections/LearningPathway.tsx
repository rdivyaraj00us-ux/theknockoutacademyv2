import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, BookOpen, Sparkles, TrendingUp } from "lucide-react";

export const LearningPathway = () => {
  return (
    <section className="py-20 md:py-28 bg-soft-gray relative overflow-hidden">
      <div className="container">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-section-title font-display text-3xl md:text-4xl text-foreground mb-4">
              Your Recommended Learning Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow this proven sequence to maximize your results
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          {/* Phase 1: Foundation */}
          <ScrollAnimation animation="slide-left" delay={100}>
            <div className="relative mb-8 md:mb-12">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                  <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="bg-card rounded-xl border border-border p-4 md:p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-heading font-semibold text-primary uppercase tracking-wide">
                        Foundation Phase
                      </span>
                      <span className="text-xs text-muted-foreground">(Week 1-2)</span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                      Start Here → Productivity & Personal Development
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      "Build the habits and systems first — everything else becomes easier"
                    </p>
                  </div>
                </div>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute left-6 md:left-8 top-16 md:top-20 w-0.5 h-8 md:h-12 bg-gradient-to-b from-primary to-accent" />
            </div>
          </ScrollAnimation>

          {/* Phase 2: Skill Building */}
          <ScrollAnimation animation="slide-left" delay={200}>
            <div className="relative mb-8 md:mb-12">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-accent flex items-center justify-center shadow-lg">
                  <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <div className="bg-card rounded-xl border border-border p-4 md:p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-heading font-semibold text-accent uppercase tracking-wide">
                        Skill Building Phase
                      </span>
                      <span className="text-xs text-muted-foreground">(Week 3-6)</span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                      Choose Your Direction:
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
                        <div className="flex items-center gap-2 mb-2 text-sm font-heading font-semibold text-foreground">
                          <span className="text-primary">Path A:</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2 flex-wrap">
                          <span>AI Mastery</span>
                          <ArrowRight className="h-3 w-3" />
                          <span>Content Creation</span>
                          <ArrowRight className="h-3 w-3" />
                          <span>Marketing</span>
                        </div>
                        <p className="text-xs text-muted-foreground italic">
                          Best for: Content creators, marketers, freelancers
                        </p>
                      </div>
                      
                      <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
                        <div className="flex items-center gap-2 mb-2 text-sm font-heading font-semibold text-foreground">
                          <span className="text-accent">Path B:</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2 flex-wrap">
                          <span>E-Commerce</span>
                          <ArrowRight className="h-3 w-3" />
                          <span>Marketing</span>
                          <ArrowRight className="h-3 w-3" />
                          <span>Finance</span>
                        </div>
                        <p className="text-xs text-muted-foreground italic">
                          Best for: Entrepreneurs, store owners, side hustlers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute left-6 md:left-8 top-16 md:top-20 w-0.5 h-full bg-gradient-to-b from-accent to-gold" />
            </div>
          </ScrollAnimation>

          {/* Phase 3: Advanced */}
          <ScrollAnimation animation="slide-left" delay={300}>
            <div className="relative">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gold flex items-center justify-center shadow-lg shadow-gold/20">
                  <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-gold-foreground" />
                </div>
                <div className="flex-1">
                  <div className="bg-card rounded-xl border border-gold/30 p-4 md:p-6 hover:shadow-lg transition-shadow shadow-glow-gold/20">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-heading font-semibold text-gold uppercase tracking-wide">
                        Advanced Phase
                      </span>
                      <span className="text-xs text-muted-foreground">(Week 7+)</span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                      Combine Skills + Use 8,000 Automation Templates
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      "Automate your workflows and scale your results with n8n templates"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};
