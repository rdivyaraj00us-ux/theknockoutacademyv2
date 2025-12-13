import { useState } from "react";
import { Play, X, Star, Quote } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const videoTestimonials = [
  {
    id: 1,
    name: "Marcus T.",
    title: "Software Developer",
    location: "Austin, TX",
    video: "/videos/testimonials/Marcus_T_Testimonial.mp4",
    quote: "The AI section completely changed how I work. Best $69 I ever spent.",
    highlight: "AI skills transformed"
  },
  {
    id: 2,
    name: "Jennifer K.",
    title: "Content Creator",
    location: "Miami, FL",
    video: "/videos/testimonials/Jennifer_K_Testimonial.mp4",
    quote: "Went from zero to 3,000 YouTube subscribers in 6 weeks!",
    highlight: "YouTube success"
  },
  {
    id: 3,
    name: "David R.",
    title: "E-commerce Owner",
    location: "Denver, CO",
    video: "/videos/testimonials/David_R_Testimonial.mp4",
    quote: "The Google Performance Max guide made me an extra $40K this quarter.",
    highlight: "6x ROAS improvement"
  },
  {
    id: 4,
    name: "Sarah M.",
    title: "Marketing Manager",
    location: "Seattle, WA",
    video: "/videos/testimonials/Sarah_M_Testimonial.mp4",
    quote: "Finally, productivity strategies that work with my ADHD brain.",
    highlight: "ADHD-friendly"
  },
  {
    id: 5,
    name: "Michael P.",
    title: "Software Engineer",
    location: "New York, NY",
    video: "/videos/testimonials/Michael_P_Testimonial.mp4",
    quote: "The Finance bundle finally explained crypto without the hype.",
    highlight: "Clear crypto education"
  },
  {
    id: 6,
    name: "Lisa W.",
    title: "Small Business Owner",
    location: "Chicago, IL",
    video: "/videos/testimonials/Lisa_W_Testimonial.mp4",
    quote: "I've paid consultants thousands for worse advice than this $69 bundle.",
    highlight: "Better than consultants"
  }
];

export const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  
  const displayedTestimonials = showAll ? videoTestimonials : videoTestimonials.slice(0, 3);

  const TestimonialCard = ({ testimonial, index }: { testimonial: typeof videoTestimonials[0]; index: number }) => (
    <ScrollAnimation animation="fade-up" staggerIndex={index}>
      <div className="group bg-card rounded-2xl border border-border overflow-hidden shadow-premium hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-300">
        <div 
          className="relative aspect-video cursor-pointer bg-secondary"
          onClick={() => setActiveVideo(testimonial.video)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary/20 to-secondary flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-primary ml-1 fill-primary" />
            </div>
          </div>
          
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-accent/90 text-white text-xs font-heading font-semibold rounded-full">
              {testimonial.highlight}
            </span>
          </div>

          <div className="absolute bottom-3 right-3">
            <span className="px-2 py-1 bg-black/60 text-white text-xs rounded">
              0:52
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="relative mb-4">
            <Quote className="absolute -top-1 -left-1 w-5 h-5 text-primary/20" />
            <p className="text-foreground font-body pl-4 text-sm leading-relaxed">
              "{testimonial.quote}"
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-heading font-semibold text-foreground text-sm">
                {testimonial.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {testimonial.title}, {testimonial.location}
              </p>
            </div>
            <div className="flex">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <ScrollAnimation animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary font-heading font-semibold text-sm rounded-full mb-4">
              REAL RESULTS
            </span>
            <h2 className="text-section-title font-display text-3xl md:text-4xl text-foreground mb-4">
              Don't Take Our Word For It
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Hear directly from customers who've transformed their skills
            </p>
          </div>
        </ScrollAnimation>

        {/* Mobile: Show 3 initially, expandable */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:hidden">
          {displayedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-8 lg:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="text-primary font-heading font-semibold hover:underline"
            >
              See All 6 Video Reviews →
            </button>
          </div>
        )}

        {/* Desktop: Always show all 6 */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {videoTestimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Trust Stats */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="w-5 h-5 text-gold fill-gold" />
            ))}
            <span className="ml-2 font-heading font-bold text-foreground">4.9/5</span>
          </div>
          <p className="text-muted-foreground text-sm">Based on 40,000+ customer reviews</p>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-white/80"
            >
              <X className="h-8 w-8" />
            </button>
            <video className="w-full rounded-xl shadow-2xl" controls autoPlay>
              <source src={activeVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
};
