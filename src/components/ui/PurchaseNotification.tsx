import { useEffect, useState } from "react";
import { ShoppingBag, X } from "lucide-react";

const purchases = [
  { location: "Austin, TX", product: "Master Bundle" },
  { location: "London, UK", product: "Master Bundle" },
  { location: "Toronto, CA", product: "AI Mastery Bundle" },
  { location: "Sydney, AU", product: "Master Bundle" },
  { location: "Miami, FL", product: "Content Creator Bundle" },
  { location: "Chicago, IL", product: "Master Bundle" },
  { location: "Berlin, DE", product: "Master Bundle" },
  { location: "San Francisco, CA", product: "E-commerce Bundle" },
];

export const PurchaseNotification = () => {
  const [notification, setNotification] = useState<typeof purchases[0] | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 5) return;
    
    const showNotification = () => {
      const random = purchases[Math.floor(Math.random() * purchases.length)];
      setNotification(random);
      setIsVisible(true);
      setCount(prev => prev + 1);
      
      setTimeout(() => setIsVisible(false), 5000);
    };

    const initial = setTimeout(showNotification, 15000);
    const interval = setInterval(() => {
      if (count < 5) showNotification();
    }, 35000);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, [count]);

  if (!isVisible || !notification) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 animate-fade-in">
      <div className="bg-background rounded-xl shadow-2xl border border-border p-4 max-w-sm flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
          <ShoppingBag className="w-5 h-5 text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-body">
            <span className="font-heading font-semibold">Someone</span> from {notification.location}
          </p>
          <p className="text-sm text-muted-foreground">
            just purchased <span className="font-semibold text-foreground">{notification.product}</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">Just now</p>
        </div>
        <button onClick={() => setIsVisible(false)} className="text-muted-foreground hover:text-foreground flex-shrink-0">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
