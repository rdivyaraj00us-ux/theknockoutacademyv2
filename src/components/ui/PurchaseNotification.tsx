import { useEffect, useState } from "react";
import { TrendingUp, Eye, X } from "lucide-react";

const notifications = [
  { icon: TrendingUp, text: "Master Bundle is trending right now", subtext: "Most popular this week" },
  { icon: Eye, text: "12 people are viewing this bundle", subtext: "AI Mastery Essentials" },
  { icon: TrendingUp, text: "Content Creator Bundle is trending", subtext: "Popular with YouTubers" },
  { icon: Eye, text: "8 people are viewing the Master Bundle", subtext: "Best value pick" },
  { icon: TrendingUp, text: "E-Commerce Bundle is trending right now", subtext: "Top seller this month" },
  { icon: Eye, text: "15 people are browsing bundles right now", subtext: "Join them" },
];

export const PurchaseNotification = () => {
  const [currentNotification, setCurrentNotification] = useState<(typeof notifications)[0] | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    if (notificationCount >= 5) return;

    const hasItemInCart = sessionStorage.getItem("hasItemInCart");
    if (hasItemInCart) return;

    const showNotification = () => {
      if (notificationCount >= 5) return;

      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
      setCurrentNotification(randomNotification);
      setIsVisible(true);
      setNotificationCount((prev) => prev + 1);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    const initialTimeout = setTimeout(showNotification, 15000);

    const interval = setInterval(
      () => {
        if (notificationCount < 5) {
          showNotification();
        }
      },
      35000 + Math.random() * 10000,
    );

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [notificationCount]);

  if (!isVisible || !currentNotification) return null;

  const IconComponent = currentNotification.icon;

  return (
    <div className="fixed bottom-4 left-4 z-40 animate-slide-in-up">
      <div className="bg-white rounded-xl shadow-2xl border border-border p-4 max-w-sm flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <IconComponent className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-heading font-semibold text-foreground">{currentNotification.text}</p>
          <p className="text-xs text-muted-foreground mt-1">{currentNotification.subtext}</p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
