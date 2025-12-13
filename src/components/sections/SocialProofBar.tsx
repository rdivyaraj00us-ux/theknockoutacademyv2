const recentActivity = [
  { name: "Marcus T.", location: "Austin, TX", action: "just purchased Master Bundle", time: "2 min ago" },
  { name: "Sarah M.", location: "Seattle, WA", action: "left a 5-star review", time: "5 min ago" },
  { name: "David R.", location: "Denver, CO", action: "just purchased Master Bundle", time: "8 min ago" },
  { name: "Jennifer K.", location: "Miami, FL", action: "just purchased Content Creator Bundle", time: "12 min ago" },
  { name: "Michael P.", location: "New York, NY", action: "just purchased Master Bundle", time: "15 min ago" },
  { name: "Lisa W.", location: "Chicago, IL", action: "left a 5-star review", time: "18 min ago" },
  { name: "Alex K.", location: "London, UK", action: "just purchased AI Mastery Bundle", time: "22 min ago" },
  { name: "Emma S.", location: "Toronto, CA", action: "just purchased Master Bundle", time: "25 min ago" },
];

export const SocialProofBar = () => {
  return (
    <section className="bg-soft-gray border-y border-border py-4 overflow-hidden">
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-soft-gray to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-soft-gray to-transparent z-10" />
        
        {/* Scrolling Content */}
        <div className="flex animate-marquee gap-8">
          {[...recentActivity, ...recentActivity].map((item, i) => (
            <div 
              key={i}
              className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm border border-border whitespace-nowrap"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-heading font-bold text-primary">
                  {item.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-body">
                  <span className="font-heading font-semibold text-foreground">{item.name}</span>
                  <span className="text-muted-foreground"> from {item.location}</span>
                </p>
                <p className="text-xs text-muted-foreground">{item.action} • {item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
