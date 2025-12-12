import { useState, useEffect } from "react";
import { BookOpen, Bot, Users, Shield, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "40+", label: "Premium Resources" },
  { value: "8,000+", label: "AI Templates" },
  { value: "6", label: "Skill Areas" },
  { value: "30-Day", label: "Guarantee" },
];

const testimonials = [
  {
    quote: "Finally, a resource that doesn't treat me like I need to be a tech genius. The AI bundle alone was worth 10x what I paid.",
    name: "Sarah K.",
    role: "Marketing Manager",
  },
  {
    quote: "I went from knowing nothing about e-commerce to launching my first store in 3 weeks. The step-by-step approach is exactly what I needed.",
    name: "Michael R.",
    role: "First-time Entrepreneur",
  },
  {
    quote: "The n8n templates saved me hundreds of hours. I'm automating things I didn't even know were possible.",
    name: "David L.",
    role: "Freelance Developer",
  },
];

export const SocialProof = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-heading">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-heading font-bold text-center text-2xl text-foreground mb-12">
            What Students Say
          </h3>

          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-lg text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl font-display italic text-foreground leading-relaxed mb-8">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <span className="text-2xl font-display font-bold text-primary">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
                <p className="font-heading font-bold text-foreground">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrev}
                className="pointer-events-auto -ml-4 md:-ml-16 bg-background/80 backdrop-blur-sm shadow-md hover:bg-background"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={goToNext}
                className="pointer-events-auto -mr-4 md:-mr-16 bg-background/80 backdrop-blur-sm shadow-md hover:bg-background"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial 
                      ? 'bg-primary w-6' 
                      : 'bg-border hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};