import { BookOpen, Bot, Users } from "lucide-react";

const stats = [
  { icon: BookOpen, value: "40+", label: "Resources" },
  { icon: Bot, value: "8,000+", label: "Templates" },
  { icon: Users, value: "6", label: "Skill Areas" },
];

export const SocialProof = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Thousands of Learners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build real skills, organized in one place.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-extrabold text-foreground mb-1">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
