import { TrendingUp, Users, Star, Zap } from "lucide-react";

const proofItems = [
  { icon: TrendingUp, text: "Master Bundle is our #1 seller" },
  { icon: Users, text: "Join thousands of learners worldwide" },
  { icon: Star, text: "4.9/5 average customer rating" },
  { icon: Zap, text: "Instant access after purchase" },
  { icon: TrendingUp, text: "AI Mastery Bundle trending this week" },
  { icon: Users, text: "Trusted by entrepreneurs in 50+ countries" },
  { icon: Star, text: "98% customer satisfaction rate" },
  { icon: Zap, text: "8,000+ automation templates included" },
];

export const SocialProofBar = () => {
  return (
    <section className="bg-soft-gray border-y border-border py-4 overflow-hidden">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-soft-gray to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-soft-gray to-transparent z-10" />

        <div className="flex animate-marquee gap-8">
          {[...proofItems, ...proofItems].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm border border-border whitespace-nowrap"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="h-4 w-4 text-primary" />
              </div>
              <p className="text-sm font-body font-medium text-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
