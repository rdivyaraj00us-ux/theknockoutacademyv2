# THE KNOCKOUT ACADEMY - CONSOLIDATED CODE ANALYSIS
## Products Section Styling & Theme Documentation

---

## 1. PRODUCT CARD COMPONENT (src/components/products/ProductCard.tsx)

```tsx
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
  const isMasterBundle = node.title.toLowerCase().includes('master');

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
```

---

## 2. HOMEPAGE PRODUCTS SECTION (src/pages/Index.tsx - Relevant Section)

```tsx
// Filter logic for individual products (excludes Master Bundle)
const individualProducts = products
  .filter(p => !p.node.title.toLowerCase().includes("master bundle") && !p.node.handle.toLowerCase().includes("master-bundle"))
  .sort((a, b) => a.node.title.localeCompare(b.node.title));

// Products Grid Section JSX
<section id="products" className="py-20 md:py-28 bg-background">
  <div className="container">
    <div className="text-center max-w-2xl mx-auto mb-12">
      <h2 className="text-section-title font-display text-3xl md:text-4xl text-foreground mb-4">Choose Your Focus Area</h2>
      <p className="text-lg text-muted-foreground">Each bundle is designed to take you from beginner to confident in weeks</p>
    </div>

    {loading ? (
      <ProductGridSkeleton count={6} />
    ) : individualProducts.length === 0 ? (
      <div className="text-center py-20 bg-card rounded-xl border border-border">
        <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-xl font-heading font-semibold mb-2">No products found</h3>
        <p className="text-muted-foreground">Tell us what products you'd like to add!</p>
      </div>
    ) : (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {individualProducts.map((product) => (
          <ProductCard key={product.node.id} product={product} />
        ))}
      </div>
    )}
  </div>
</section>
```

---

## 3. DESIGN SYSTEM - TAILWIND CONFIG (tailwind.config.ts)

```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "3rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        heading: ["Montserrat", "system-ui", "sans-serif"],
        body: ["Source Sans 3", "system-ui", "sans-serif"],
        sans: ["Source Sans 3", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-mobile": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "hero-desktop": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "section-mobile": ["1.75rem", { lineHeight: "1.2" }],
        "section-desktop": ["3rem", { lineHeight: "1.2" }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Premium Knockout Academy colors
        navy: {
          DEFAULT: "hsl(var(--navy))",
          dark: "hsl(var(--navy-dark))",
          foreground: "hsl(var(--navy-foreground))",
        },
        royal: {
          DEFAULT: "hsl(var(--royal))",
          glow: "hsl(var(--royal-glow))",
        },
        emerald: {
          DEFAULT: "hsl(var(--emerald))",
          glow: "hsl(var(--emerald-glow))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          foreground: "hsl(var(--gold-foreground))",
        },
        slate: {
          DEFAULT: "hsl(var(--slate))",
          light: "hsl(var(--slate-light))",
        },
        coral: {
          DEFAULT: "hsl(var(--coral))",
          light: "hsl(var(--coral-light))",
        },
        "soft-gray": "hsl(var(--soft-gray))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "glow-royal": "var(--shadow-glow-royal)",
        "glow-emerald": "var(--shadow-glow-emerald)",
        "glow-gold": "var(--shadow-glow-gold)",
        premium: "0 4px 20px rgba(0,0,0,0.06)",
        "premium-hover": "0 8px 30px rgba(0,0,0,0.12)",
      },
      keyframes: {
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--royal) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--royal) / 0.5)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

---

## 4. CSS VARIABLES & CUSTOM STYLES (src/index.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* The Knockout Academy Premium Design System */
    /* Based on $10M brand specifications */
    
    /* Deep Navy Primary */
    --background: 210 40% 98%;
    --foreground: 215 25% 21%;

    --card: 0 0% 100%;
    --card-foreground: 215 25% 21%;

    /* Royal Blue - Primary Action */
    --primary: 221 83% 53%;
    --primary-foreground: 0 0% 100%;

    /* Deep Navy - Secondary */
    --secondary: 222 47% 11%;
    --secondary-foreground: 0 0% 100%;

    /* Soft Gray - Muted backgrounds */
    --muted: 210 40% 98%;
    --muted-foreground: 215 16% 47%;

    /* Emerald - Success/CTA */
    --accent: 160 84% 39%;
    --accent-foreground: 0 0% 100%;

    --border: 214 32% 91%;
    --input: 214 32% 91%;
    --ring: 221 83% 53%;

    --radius: 0.75rem;

    /* Custom Knockout Academy tokens */
    --navy: 222 47% 11%;
    --navy-dark: 222 47% 5%;
    --navy-foreground: 0 0% 100%;
    --royal: 221 83% 53%;
    --royal-glow: 221 83% 63%;
    --emerald: 160 84% 39%;
    --emerald-glow: 160 84% 49%;
    --gold: 38 92% 50%;
    --gold-foreground: 0 0% 100%;
    --slate: 215 25% 27%;
    --slate-light: 215 16% 47%;
    --soft-gray: 210 40% 98%;
    
    /* Coral/Warning for pain points */
    --coral: 0 74% 60%;
    --coral-light: 0 74% 95%;

    /* Gradients */
    --gradient-hero: linear-gradient(135deg, hsl(222 47% 11%) 0%, hsl(222 47% 18%) 50%, hsl(222 47% 14%) 100%);
    --gradient-mesh: radial-gradient(ellipse at 20% 10%, hsl(221 83% 53% / 0.18) 0%, transparent 40%), 
                     radial-gradient(ellipse at 80% 30%, hsl(160 84% 39% / 0.12) 0%, transparent 40%),
                     radial-gradient(ellipse at 40% 80%, hsl(38 92% 50% / 0.08) 0%, transparent 40%),
                     radial-gradient(ellipse at 90% 90%, hsl(221 83% 53% / 0.1) 0%, transparent 50%);
    --gradient-cta: linear-gradient(135deg, hsl(221 83% 53%) 0%, hsl(221 83% 48%) 100%);
    --gradient-success: linear-gradient(135deg, hsl(160 84% 39%) 0%, hsl(160 84% 34%) 100%);

    /* Premium Shadows */
    --shadow-sm: 0 1px 2px 0 hsl(222 47% 11% / 0.05);
    --shadow-md: 0 4px 20px hsl(222 47% 11% / 0.06);
    --shadow-lg: 0 8px 30px hsl(222 47% 11% / 0.1);
    --shadow-xl: 0 20px 40px hsl(222 47% 11% / 0.12);
    --shadow-glow-royal: 0 0 40px hsl(221 83% 53% / 0.3);
    --shadow-glow-emerald: 0 0 40px hsl(160 84% 39% / 0.3);
    --shadow-glow-gold: 0 0 30px hsl(38 92% 50% / 0.3);
  }
}

@layer utilities {
  /* Typography Classes */
  .font-display {
    font-family: 'Playfair Display', Georgia, serif;
  }

  .font-heading {
    font-family: 'Montserrat', system-ui, sans-serif;
  }

  .font-body {
    font-family: 'Source Sans 3', system-ui, sans-serif;
  }

  /* Premium Text Styles */
  .text-hero {
    @apply font-display font-bold tracking-tight leading-[1.1];
    letter-spacing: -0.02em;
  }

  .text-section-title {
    @apply font-heading font-bold;
  }

  /* Premium Shadow Utilities */
  .shadow-premium {
    box-shadow: var(--shadow-md);
  }

  .shadow-premium-hover {
    box-shadow: var(--shadow-lg);
  }

  .shadow-glow-royal {
    box-shadow: var(--shadow-glow-royal);
  }

  .shadow-glow-gold {
    box-shadow: var(--shadow-glow-gold);
  }

  /* Card Hover Effect */
  .card-hover {
    @apply transition-all duration-300;
  }

  .card-hover:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
  }
}

/* Gold pulse animation for badges */
@keyframes pulseGlowGold {
  0%, 100% {
    box-shadow: 0 0 15px hsl(38 92% 50% / 0.4);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 30px hsl(38 92% 50% / 0.6);
    transform: scale(1.02);
  }
}

.animate-pulse-gold {
  animation: pulseGlowGold 2s ease-in-out infinite;
}
```

---

## 5. IDENTIFIED ISSUES

### Issue 1: Incorrect "Most Popular" Badge Display
**Problem:** The `isMasterBundle` check uses `.includes('master')` which also matches "Mastery" in product names.

**Affected Products:**
- "AI Mastery Essentials Bundle" - incorrectly shows badge
- "Digital Marketing & Sales Mastery Bundle" - incorrectly shows badge

**Current Code:**
```typescript
const isMasterBundle = node.title.toLowerCase().includes('master');
```

**Should Be:**
```typescript
const isMasterBundle = node.title.toLowerCase().includes('master bundle');
```

### Issue 2: Crossed-out $470 Price Shows on Wrong Products
**Problem:** Same logic issue causes the crossed-out price to appear on bundles with "Mastery" in their name.

---

## 6. COLOR PALETTE REFERENCE

| Token | HSL Value | Hex Equivalent | Usage |
|-------|-----------|----------------|-------|
| --navy | 222 47% 11% | #0F172A | Hero backgrounds, dark sections |
| --royal | 221 83% 53% | #2563EB | Primary CTAs, links, buttons |
| --emerald | 160 84% 39% | #10B981 | Success states, accent CTAs |
| --gold | 38 92% 50% | #F59E0B | Premium badges, featured tags |
| --soft-gray | 210 40% 98% | #F8FAFC | Alternating section backgrounds |
| --slate | 215 25% 27% | #334155 | Body text, secondary headings |

---

## 7. TYPOGRAPHY SYSTEM

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Hero Headlines | Playfair Display | 56-72px desktop / 36-42px mobile | Bold |
| Section Titles | Montserrat | 36-48px desktop / 28-32px mobile | Bold |
| Card Titles | Montserrat | 18px (text-lg) | Bold |
| Body Text | Source Sans 3 | 14-16px | Regular |
| Button Text | Montserrat | 16px | SemiBold |
| Price | Montserrat | 24px (text-2xl) | Bold |

---

## 8. CARD STYLING SPECIFICATIONS

| Property | Value |
|----------|-------|
| Border Radius | 12px (rounded-xl) |
| Border | 1px solid border token |
| Background | bg-card (white) |
| Shadow (default) | 0 4px 20px rgba(0,0,0,0.06) |
| Shadow (hover) | 0 8px 30px rgba(0,0,0,0.12) + shadow-2xl |
| Hover Transform | translateY(-12px) |
| Transition | 300ms all |
| Padding (content) | 24px (p-6) |
| Image Aspect Ratio | 4:3 |

---

## 9. GRID LAYOUT

| Breakpoint | Columns | Gap |
|------------|---------|-----|
| Mobile (< 640px) | 1 | 24px |
| Tablet (640-1024px) | 2 | 24px |
| Desktop (> 1024px) | 3 | 24px |

---

*Generated for analysis purposes*
