import { useState } from "react";
import { X } from "lucide-react";

export const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(() => {
    return !sessionStorage.getItem('announcementDismissed');
  });

  const dismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('announcementDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-primary-foreground py-2.5 px-4 relative animate-fade-in">
      <div className="container flex items-center justify-center gap-2 text-xs md:text-sm">
        <span>🔥</span>
        <span className="text-center">
          Join <strong>40,000+</strong> learners — Get instant access for just <strong>$69</strong>
        </span>
        <button
          onClick={dismiss}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 hover:bg-primary-foreground/10 rounded p-1 transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
