import { useState, useEffect } from "react";
import { X } from "lucide-react";

export const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('announcementBarDismissed');
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('announcementBarDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-primary text-primary-foreground py-2.5 px-4 animate-slide-down">
      <div className="container flex items-center justify-center">
        <p className="text-xs sm:text-sm font-heading text-center pr-8">
          🔥 Join <span className="font-bold">40,000+</span> learners who've already grabbed the Master Bundle — Get instant access for just <span className="font-bold">$69</span>
        </p>
        <button
          onClick={handleDismiss}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      {/* Shimmer effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 animate-shimmer" />
      </div>
    </div>
  );
};
