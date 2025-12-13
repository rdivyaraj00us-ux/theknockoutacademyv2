import { useEffect, useState } from "react";
import { ShoppingBag, X } from "lucide-react";

const purchases = [
  { name: "Someone", location: "Austin, TX", product: "Master Bundle", time: "just now" },
  { name: "Someone", location: "London, UK", product: "Master Bundle", time: "2 min ago" },
  { name: "Someone", location: "Toronto, CA", product: "AI Mastery Bundle", time: "3 min ago" },
  { name: "Someone", location: "Sydney, AU", product: "Master Bundle", time: "5 min ago" },
  { name: "Someone", location: "Miami, FL", product: "Content Creator Bundle", time: "7 min ago" },
  { name: "Someone", location: "Chicago, IL", product: "Master Bundle", time: "9 min ago" },
  { name: "Someone", location: "Berlin, DE", product: "Master Bundle", time: "11 min ago" },
  { name: "Someone", location: "San Francisco, CA", product: "E-commerce Bundle", time: "13 min ago" },
];

export const PurchaseNotification = () => {
  const [currentNotification, setCurrentNotification] = useState<typeof purchases[0] | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  
  useEffect(() => {
    // Don't show more than 5 notifications per session
    if (notificationCount >= 5) return;
    
    // Check if user already has item in cart (don't show if they do)
    const hasItemInCart = sessionStorage.getItem('hasItemInCart');
    if (hasItemInCart) return;

    const showNotification = () => {
      if (notificationCount >= 5) return;
      
      const randomPurchase = purchases[Math.floor(Math.random() * purchases.length)];
      setCurrentNotification(randomPurchase);
      setIsVisible(true);
      setNotificationCount(prev => prev + 1);
      
      // Auto-hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 15 seconds
    const initialTimeout = setTimeout(showNotification, 15000);
    
    // Then show every 30-45 seconds
    const interval = setInterval(() => {
      if (notificationCount < 5) {
        showNotification();
      }
    }, 35000 + Math.random() * 10000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [notificationCount]);

  if (!isVisible || !currentNotification) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 animate-slide-in-up">
      <div className="bg-white rounded-xl shadow-2xl border border-border p-4 max-w-sm flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
          <ShoppingBag className="w-5 h-5 text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-body text-foreground">
            <span className="font-heading font-semibold">{currentNotification.name}</span>
            {" "}from {currentNotification.location}
          </p>
          <p className="text-sm text-muted-foreground font-body">
            just purchased <span className="font-semibold text-foreground">{currentNotification.product}</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">{currentNotification.time}</p>
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
