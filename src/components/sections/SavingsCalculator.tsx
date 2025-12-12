import { useEffect, useState, useRef } from "react";
import { DollarSign } from "lucide-react";

const lineItems = [
  { name: "AI Mastery Bundle", price: 29 },
  { name: "E-Commerce Bundle", price: 29 },
  { name: "Content Creator Bundle", price: 29 },
  { name: "Digital Marketing Bundle", price: 29 },
  { name: "Productivity Bundle", price: 29 },
  { name: "Finance Bundle", price: 29 },
  { name: "8,000+ n8n Templates", price: 297 },
];

export const SavingsCalculator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedTotal, setAnimatedTotal] = useState(0);
  const [animatedSavings, setAnimatedSavings] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const totalValue = lineItems.reduce((sum, item) => sum + item.price, 0);
  const masterBundlePrice = 69;
  const savings = totalValue - masterBundlePrice;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setAnimatedTotal(Math.floor(easeOutQuart * totalValue));
      setAnimatedSavings(Math.floor(easeOutQuart * savings));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);
      }
    };

    const timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 500);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [isVisible, totalValue, savings]);

  return (
    <div ref={ref} className="relative max-w-xl mx-auto mt-12">
      {/* Confetti effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: ['hsl(var(--gold))', 'hsl(var(--accent))', 'hsl(var(--primary))'][i % 3],
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="bg-secondary rounded-2xl p-6 md:p-8 border border-primary/20 shadow-glow-royal">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
            <DollarSign className="h-5 w-5 text-gold" />
          </div>
          <h3 className="font-heading font-bold text-secondary-foreground text-lg">
            YOUR SAVINGS BREAKDOWN
          </h3>
        </div>

        <div className="space-y-2 mb-4">
          {lineItems.map((item, index) => (
            <div
              key={item.name}
              className={`flex justify-between text-sm text-secondary-foreground/70 transition-opacity duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span>{item.name}</span>
              <span className="font-mono">${item.price}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-secondary-foreground/20 pt-4 space-y-3">
          <div className="flex justify-between text-secondary-foreground">
            <span className="font-heading font-semibold">Individual Total:</span>
            <span className="font-mono font-bold">${animatedTotal}</span>
          </div>
          
          <div className="flex justify-between text-secondary-foreground">
            <span className="font-heading font-semibold">Master Bundle Price:</span>
            <span className="font-mono font-bold text-accent">${masterBundlePrice}</span>
          </div>
          
          <div className="border-t border-secondary-foreground/20 pt-3">
            <div className="flex justify-between items-center">
              <span className="font-heading font-bold text-lg text-secondary-foreground">YOU SAVE:</span>
              <div className="text-right">
                <span className="font-mono font-bold text-2xl text-gold">${animatedSavings}</span>
                <span className="block text-sm text-gold font-heading font-semibold">(85% OFF)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
