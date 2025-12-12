import { Link } from "react-router-dom";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShopifyProduct, CartItem } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

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
      <div className="flex flex-1 flex-col p-6">
        <Link to={`/product/${node.handle}`}>
          <h3 className="font-heading font-bold text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {node.title}
          </h3>
        </Link>
        
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-1 leading-relaxed">
          {node.description || "Premium digital resources for your success journey."}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-2xl font-heading font-bold text-primary">${price.toFixed(0)}</span>
            {isMasterBundle && (
              <span className="ml-2 text-sm text-muted-foreground line-through">$470</span>
            )}
          </div>
        </div>

        <div className="mt-4 flex gap-2">
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
  );
};