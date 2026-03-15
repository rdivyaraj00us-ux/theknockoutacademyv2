import { useState } from "react";
import { Play, X, Star, Quote, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const videoTestimonials = [
  {
    id: 1,
    name: "Marcus T.",
    title: "Software Developer",
    location: "Austin, TX",
    video: "https://cdn.shopify.com/videos/c/o/v/1ef85b8d02c646f1acb03d7a7c868eb6.mp4",
    quote: "The AI section completely changed how I work. Best $69 I ever spent.",
    highlight: "AI skills transformed my workflow",
    duration: "0:45"
  },
  {
    id: 2,
    name: "Jennifer K.",
    title: "Content Creator",
    location: "Miami, FL",
    video: "https://cdn.shopify.com/videos/c/o/v/6056c9cd9f624b2ebd4d451b50a7cb2d.mp4",
    quote: "Went from zero to 3,000 YouTube subscribers in 6 weeks!",
    highlight: "YouTube success story",
    duration: "0:58"
  },
  {
    id: 3,
    name: "David R.",
    title: "E-commerce Owner",
    location: "Denver, CO",
    video: "https://cdn.shopify.com/videos/c/o/v/e72c9a7f38184a2cba2df1c4f10d4784.mp4",
    quote: "The Google Performance Max guide made me an extra $40K this quarter.",
    highlight: "6x ROAS improvement",
    duration: "0:52"
  },
  {
    id: 4,
    name: "Sarah M.",
    title: "Marketing Manager",
    location: "Seattle, WA",
    video: "https://cdn.shopify.com/videos/c/o/v/8e12cf2389184b008c9fdd9b2f96fd5b.mp4",
    quote: "Finally, productivity strategies that work with my ADHD brain.",
    highlight: "ADHD-friendly methods",
    duration: "0:47"
  },
  {
    id: 5,
    name: "Michael P.",
    title: "Software Engineer",
    location: "New York, NY",
    video: "/videos/testimonials/Michael_P_Testimonial.mp4",
    quote: "The Finance bundle finally explained crypto without the hype.",
    highlight: "Clear crypto education",
    duration: "0:38"
  },
  {
    id: 6,
    name: "Lisa W.",
    title: "Small Business Owner",
    location: "Chicago, IL",
    video: "/videos/testimonials/Lisa_W_Testimonial.mp4",
    quote: "I've paid consultants thousands for worse advice than this $69 bundle.",
    highlight: "Better than consultants",
    duration: "0:55"
  }
];

export const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [playingInline, setPlayingInline] = useState<number | null>(null);
  const isMobile = useIsMobile();

  // On mobile, show only 3 testimonials unless expanded
  const displayedTestimonials = showAll || !isMobile
    ? videoTestimonials 
    : videoTestimonials.slice(0, 3);

  const handleVideoClick = (testimonial: typeof videoTestimonials[0]) => {
    if (isMobile) {
      // On mobile, toggle inline playback
      setPlayingInline(playingInline === testimonial.id ? null : testimonial.id);
    } else {
      // On desktop, open modal
      setActiveVideo(testimonial.video);
    }
  };

  return (
    <section className="py-16 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary font-heading font-semibold text-sm rounded-full mb-4">
            REAL RESULTS
          </span>
          <h2 className="text-section-title font-display text-2xl md:text-4xl text-foreground mb-3 md:mb-4">
            Don't Take Our Word For It
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-body">
            Hear directly from customers who've transformed their skills
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {displayedTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="group bg-card rounded-2xl border border-border overflow-hidden shadow-premium hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-300"
            >
              {/* Video Area */}
              <div className="relative aspect-video bg-secondary">
                {isMobile && playingInline === testimonial.id ? (
                  // Inline player on mobile
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    playsInline
                  >
                    <source src={testimonial.video} type="video/mp4" />
                  </video>
                ) : (
                  // Thumbnail with play button
                  <div 
                    className="relative w-full h-full cursor-pointer"
                    onClick={() => handleVideoClick(testimonial)}
                  >
                    <video 
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                    >
                      <source src={`${testimonial.video}#t=0.5`} type="video/mp4" />
                    </video>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 via-navy/40 to-secondary/60 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform min-h-[44px] min-w-[44px]">
                        <Play className="w-5 h-5 md:w-6 md:h-6 text-primary ml-1 fill-primary" />
                      </div>
                    </div>
                    
                    {/* Highlight Badge */}
                    <div className="absolute top-2 left-2 md:top-3 md:left-3">
                      <span className="px-2 py-1 md:px-3 bg-accent/90 text-white text-xs font-heading font-semibold rounded-full">
                        {testimonial.highlight}
                      </span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3">
                      <span className="px-2 py-1 bg-black/60 text-white text-xs font-body rounded">
                        {testimonial.duration}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                {/* Quote */}
                <div className="relative mb-3 md:mb-4">
                  <Quote className="absolute -top-1 -left-1 w-5 h-5 md:w-6 md:h-6 text-primary/20" />
                  <p className="text-sm md:text-base text-foreground font-body pl-4 md:pl-5 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm md:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground font-body">
                      {testimonial.title}, {testimonial.location}
                    </p>
                  </div>
                  <div className="flex">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-gold fill-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile "See All" Button */}
        {!showAll && isMobile && (
          <div className="text-center mt-6">
            <Button 
              variant="outline" 
              onClick={() => setShowAll(true)}
              className="min-h-[44px] gap-2"
            >
              See All 6 Video Reviews
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-sm md:text-base text-muted-foreground font-body mb-3 md:mb-4">
            Join 40,000+ customers who've already transformed their skills
          </p>
          <div className="flex items-center justify-center gap-1 md:gap-2">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-gold fill-gold" />
            ))}
            <span className="ml-2 font-heading font-semibold text-foreground text-sm md:text-base">4.9/5</span>
            <span className="text-muted-foreground font-body text-sm md:text-base">average rating</span>
          </div>
        </div>
      </div>

      {/* Video Modal (Desktop only) */}
      {activeVideo && !isMobile && (
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
              className="absolute -top-12 right-0 text-white hover:text-white/80 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <X className="h-8 w-8" />
            </button>
            <video 
              className="w-full rounded-xl shadow-2xl"
              controls
              autoPlay
            >
              <source src={activeVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
};
