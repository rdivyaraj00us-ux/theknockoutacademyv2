import { Link } from "react-router-dom";
import { ShoppingCart, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShopifyProduct, CartItem } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

// Bundle highlights mapping - "What You'll Learn"
const bundleHighlights: Record<string, string[]> = {
  "ai-mastery": [
    "Master ChatGPT, Claude & Perplexity AI",
    "Create AI-powered content workflows",
    "Automate repetitive tasks in minutes"
  ],
  "e-commerce": [
    "Build profitable ad funnels from scratch",
    "Master Google Performance Max campaigns",
    "Retain customers & increase lifetime value"
  ],
  "content-creator": [
    "Launch your YouTube channel in 6 days",
    "Master CapCut video editing",
    "Create content 10x faster with AI"
  ],
  "digital-marketing": [
    "Build email automations that convert",
    "Create irresistible micro-offers",
    "Master psychological selling triggers"
  ],
  "productivity": [
    "Implement the Eisenhower Matrix system",
    "Overcome ADHD productivity challenges",
    "Delegate effectively & reclaim your time"
  ],
  "finance": [
    "Set up the Multi-Bucket savings system",
    "Understand cryptocurrency fundamentals",
    "Navigate home buying like a pro"
  ],
  "master": [
    "All 6 bundles included",
    "8,000+ n8n templates",
    "Beginner-to-expert pathway"
  ]
};

// Target audience mapping
const targetAudience: Record<string, string> = {
  "ai-mastery": "Beginners & Professionals",
  "e-commerce": "Aspiring Store Owners",
  "content-creator": "YouTubers & Creators",
  "digital-marketing": "Marketers & Sales Pros",
  "productivity": "Busy Professionals",
  "finance": "Financial Beginners",
  "master": "Everyone",
};

// Format tags
const formatTags = "📖 eBooks • 📹 Video Guides • 📋 Checklists • 🎯 Templates";

const getHighlights = (handle: string): string[] => {
  const lowerHandle = handle.toLowerCase();
  if (lowerHandle.includes("master")) return bundleHighlights["master"];
  if (lowerHandle.includes("ai-mastery")) return bundleHighlights["ai-mastery"];
  if (lowerHandle.includes("e-commerce") || lowerHandle.includes("ecommerce")) return bundleHighlights["e-commerce"];
  if (lowerHandle.includes("content-creator")) return bundleHighlights["content-creator"];
  if (lowerHandle.includes("digital-marketing") || lowerHandle.includes("marketing")) return bundleHighlights["digital-marketing"];
  if (lowerHandle.includes("productivity")) return bundleHighlights["productivity"];
  if (lowerHandle.includes("finance")) return bundleHighlights["finance"];
  return ["Premium digital resources", "Instant download access", "Beginner-friendly guides"];
};

const getAudience = (handle: string): string => {
  const lowerHandle = handle.toLowerCase();
  if (lowerHandle.includes("master")) return targetAudience["master"];
  if (lowerHandle.includes("ai-mastery")) return targetAudience["ai-mastery"];
  if (lowerHandle.includes("e-commerce") || lowerHandle.includes("ecommerce")) return targetAudience["e-commerce"];
  if (lowerHandle.includes("content-creator")) return targetAudience["content-creator"];
  if (lowerHandle.includes("digital-marketing") || lowerHandle.includes("marketing")) return targetAudience["digital-marketing"];
  if (lowerHandle.includes("productivity")) return targetAudience["productivity"];
  if (lowerHandle.includes("finance")) return targetAudience["finance"];
  return "Everyone";
};

interface ProductCardProps {
  product: ShopifyProduct;
  featured?: boolean;
}

export const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);
  const { node } = product;
  
  const price = parseFloat(node.priceRange.minVariantPrice.amount);
  const imageUrl = node.images?.edges?.[0]?.node?.url;
  const variant = node.variants?.edges?.[0]?.node;
  const isMasterBundle = node.title.toLowerCase().includes('master bundle') || 
    node.handle.toLowerCase() === 'the-knockout-master-bundle';
  const highlights = getHighlights(node.handle);
  const audience = getAudience(node.handle);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!variant) {
      toast.error("Product unavailable");
      return;
    }

    const cartItem: CartItem = {
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    };

    addItem(cartItem);
    toast.success(`${node.title} added to cart`);
  };

  return (
    <div 
      className={`group relative flex flex-col rounded-xl border bg-card overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 ${
        featured || isMasterBundle 
          ? 'border-primary/40 shadow-glow-royal hover:shadow-glow-royal' 
          : 'border-border shadow-premium hover:border-primary/30'
      }`}
    >
      {/* Featured Badge */}
      {(featured || isMasterBundle) && (
        <Badge className="absolute top-3 right-3 z-10 bg-gold text-gold-foreground font-heading font-semibold shadow-glow-gold animate-pulse-gold">
          Most Popular
        </Badge>
      )}

      {/* Image */}
      <Link to={`/product/${node.handle}`} className="relative aspect-[4/3] overflow-hidden bg-muted">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={node.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/80">
            <span className="text-6xl font-display font-bold text-secondary-foreground/20">K</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Perfect For Badge */}
        <Badge variant="outline" className="self-start text-xs font-normal mb-2 border-primary/30 text-primary">
          Perfect for: {audience}
        </Badge>

        <Link to={`/product/${node.handle}`}>
          <h3 className="font-heading font-bold text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-2">
            {node.title}
          </h3>
        </Link>

        {/* Format Tags */}
        <p className="text-xs text-muted-foreground mb-3">
          {formatTags}
        </p>
        
        {/* What You'll Learn - 3 Bullet Highlights */}
        <div className="mb-4">
          <p className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            What You'll Learn:
          </p>
          <ul className="space-y-1.5 flex-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-2xl font-heading font-bold text-primary">${price.toFixed(0)}</span>
              {isMasterBundle && (
                <span className="ml-2 text-sm text-muted-foreground line-through">$470</span>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <Button 
              variant={isMasterBundle ? "accent" : "default"}
              className="flex-1"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link to={`/product/${node.handle}`}>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
