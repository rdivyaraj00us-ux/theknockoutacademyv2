import { Clock, Briefcase, Rocket, Laptop } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const audiences = [
  {
    icon: Clock,
    title: "Side Hustlers",
    description: "You want to build additional income streams while keeping your day job"
  },
  {
    icon: Briefcase,
    title: "Career Changers",
    description: "You're ready to transition into a new field with high-demand skills"
  },
  {
    icon: Rocket,
    title: "Entrepreneurs",
    description: "You're building or want to start an online business"
  },
  {
    icon: Laptop,
    title: "Freelancers",
    description: "You want to expand your services and charge premium rates"
  }
];

export const WhoThisIsFor = () => {
  return (
    <section className="py-20 md:py-28 bg-soft-gray">
      <div className="container">
        <ScrollAnimation animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-section-title font-display text-3xl md:text-4xl text-foreground">
              Is This For You?
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <ScrollAnimation key={index} animation="fade-up" staggerIndex={index}>
              <div 
                className="bg-card p-6 rounded-xl border border-border text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-xl hover:border-accent/40 group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <audience.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
