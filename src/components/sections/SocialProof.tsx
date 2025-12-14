import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Play, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
const trustMetrics = [{
  value: 40000,
  suffix: "+",
  label: "Customers"
}, {
  value: 4.9,
  suffix: "/5",
  label: "Rating",
  decimals: true
}, {
  value: 98,
  suffix: "%",
  label: "Satisfaction"
}, {
  value: 30,
  suffix: "-Day",
  label: "Guarantee"
}];
const testimonials = [{
  quote: "I was skeptical at first — another 'make money online' product, right? But the AI Mastery bundle alone taught me skills I use every single day. The n8n templates saved me dozens of hours. Best $69 I've spent this year.",
  name: "Marcus T.",
  role: "Freelance Developer",
  location: "Austin, TX",
  initials: "MT",
  color: "bg-primary/20 text-primary"
}, {
  quote: "As a complete beginner, I was worried the content would be too advanced. It wasn't. The step-by-step guides in the Content Creator bundle helped me launch my YouTube channel in literally 6 days. Already at 2,000 subscribers!",
  name: "Jennifer K.",
  role: "Content Creator",
  location: "Miami, FL",
  initials: "JK",
  color: "bg-accent/20 text-accent"
}, {
  quote: "The E-Commerce bundle paid for itself within the first week. The Google Performance Max guide alone helped me 3x my ROAS. Can't believe this isn't priced at $500+.",
  name: "David R.",
  role: "E-commerce Store Owner",
  location: "Denver, CO",
  initials: "DR",
  color: "bg-gold/20 text-gold"
}, {
  quote: "I have ADHD and have struggled with productivity my entire life. The 'Productivity with ADHD' book was like someone finally understood how my brain works. Game changer.",
  name: "Sarah M.",
  role: "Marketing Manager",
  location: "Seattle, WA",
  initials: "SM",
  color: "bg-primary/20 text-primary"
}, {
  quote: "The Finance bundle helped me finally understand crypto without the hype. The Multi-Bucket savings system literally changed how I manage money. Simple but powerful stuff.",
  name: "Michael P.",
  role: "Software Engineer",
  location: "New York, NY",
  initials: "MP",
  color: "bg-accent/20 text-accent"
}, {
  quote: "I bought all 6 bundles individually like an idiot before discovering the Master Bundle. Don't make my mistake — just get the Master Bundle. It's insane value.",
  name: "Lisa W.",
  role: "Small Business Owner",
  location: "Chicago, IL",
  initials: "LW",
  color: "bg-gold/20 text-gold"
}];
export const SocialProof = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const goToPrev = () => {
    setCurrentTestimonial(prev => (prev - 1 + 3) % 3);
  };
  const goToNext = () => {
    setCurrentTestimonial(prev => (prev + 1) % 3);
  };
  return <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Trust Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-20">
          {trustMetrics.map((stat, index) => <ScrollAnimation key={stat.label} animation="fade-up" staggerIndex={index}>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-display font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.decimals ? <span>{stat.value}{stat.suffix}</span> : <AnimatedCounter end={stat.value} suffix={stat.suffix} />}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-heading">
                  {stat.label}
                </div>
              </div>
            </ScrollAnimation>)}
        </div>

        {/* Section Title */}
        <ScrollAnimation animation="fade-up">
          <h3 className="font-heading font-bold text-center text-2xl md:text-3xl text-foreground mb-12">
            What Our Students Say
          </h3>
        </ScrollAnimation>

        {/* Video Testimonials are now in dedicated VideoTestimonials section */}

        {/* Text Testimonials Grid */}
        <ScrollAnimation animation="fade-up" delay={200}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => <div key={index} className="bg-card rounded-xl border border-border p-6 shadow-md hover:shadow-lg transition-shadow" style={{
            animationDelay: `${index * 100}ms`
          }}>
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
                </div>

                {/* Quote */}
                <blockquote className="text-sm text-foreground leading-relaxed mb-4">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center`}>
                    <span className="text-sm font-heading font-bold">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </ScrollAnimation>
      </div>
    </section>;
};