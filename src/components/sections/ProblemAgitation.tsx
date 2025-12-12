import { FileWarning, BookX, AlertTriangle } from "lucide-react";

const painPoints = [
  {
    icon: FileWarning,
    text: "Drowning in scattered tutorials, outdated courses, and information overload"
  },
  {
    icon: BookX,
    text: "Learning theory after theory with no practical application or real results"
  },
  {
    icon: AlertTriangle,
    text: "Falling for get-rich-quick schemes that waste your time and money"
  }
];

export const ProblemAgitation = () => {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-section-title font-display text-3xl md:text-4xl text-foreground mb-4">
            Sound Familiar?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-coral-light border border-coral/20 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-coral/10 flex items-center justify-center">
                <point.icon className="h-7 w-7 text-coral" />
              </div>
              <p className="text-foreground/80 leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};