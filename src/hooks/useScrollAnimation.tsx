import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// Animation wrapper component for scroll-triggered animations
interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'scale-in' | 'slide-left' | 'slide-right';
  delay?: number;
  duration?: number;
  staggerIndex?: number;
}

export const ScrollAnimation = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  staggerIndex = 0,
}: ScrollAnimationProps) => {
  const { ref, isVisible } = useScrollAnimation();
  
  const baseStyles = {
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDelay: `${delay + staggerIndex * 100}ms`,
  };

  const animationStyles: Record<string, { hidden: React.CSSProperties; visible: React.CSSProperties }> = {
    'fade-up': {
      hidden: { opacity: 0, transform: 'translateY(30px)' },
      visible: { opacity: 1, transform: 'translateY(0)' },
    },
    'fade-in': {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    'scale-in': {
      hidden: { opacity: 0, transform: 'scale(0.95)' },
      visible: { opacity: 1, transform: 'scale(1)' },
    },
    'slide-left': {
      hidden: { opacity: 0, transform: 'translateX(30px)' },
      visible: { opacity: 1, transform: 'translateX(0)' },
    },
    'slide-right': {
      hidden: { opacity: 0, transform: 'translateX(-30px)' },
      visible: { opacity: 1, transform: 'translateX(0)' },
    },
  };

  const currentAnimation = animationStyles[animation];
  const style = {
    ...baseStyles,
    ...(isVisible ? currentAnimation.visible : currentAnimation.hidden),
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};
