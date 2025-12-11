import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Zap, 
  Shield, 
  RefreshCw, 
  ArrowRight,
  BookOpen,
  Bot,
  ShoppingCart,
  Video,
  TrendingUp,
  Brain,
  Coins,
  Package
} from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { toast } from "sonner";

const bundleContents = [
  { icon: Bot, title: "AI Mastery Essentials", items: "10+ eBooks & Guides on AI tools" },
  { icon: ShoppingCart, title: "E-Commerce & Dropshipping", items: "8+ eBooks on online selling" },
  { icon: Video, title: "Content Creator Accelerator", items: "7+ guides on content growth" },
  { icon: TrendingUp, title: "Digital Marketing & Sales", items: "8+ eBooks on marketing mastery" },
  { icon: Brain, title: "Productivity & Development", items: "5+ guides on optimization" },
  { icon: Coins, title: "Finance & Investing", items: "6+ eBooks on financial literacy" },
];

const comparisonData = [
  { item: "AI Mastery Essentials Bundle", individual: "$29", master: "✓ Included" },
  { item: "E-Commerce & Dropshipping Bundle", individual: "$29", master: "✓ Included" },
  { item: "Content Creator Accelerator Bundle", individual: "$29", master: "✓ Included" },
  { item: "Digital Marketing & Sales Bundle", individual: "$29", master: "✓ Included" },
  { item: "Productivity & Development Bundle", individual: "$29", master: "✓ Included" },
  { item: "Finance & Investing Bundle", individual: "$29", master: "✓ Included" },
  { item: "8,000+ n8n Automation Templates", individual: "$297+", master: "✓ Included" },
  { item: "Beginner-to-Expert Learning Pathway", individual: "Not Available", master: "✓ Included" },
];

const MasterBundle = () => {
  const [masterBundle, setMasterBundle] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const { addItem, setOpen } = useCartStore();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const products = await fetchProducts(50);
        const master = products.find(p => 
          p.node.title.toLowerCase().includes("master") || 
          p.node.handle.toLowerCase().includes("master")
        );
        setMasterBundle(master || null);
      } catch (error) {
        console.error("Failed to load master bundle:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, []);

  const handleAddToCart = () => {
    if (!masterBundle) return;
    
    const variant = masterBundle.node.variants.edges[0]?.node;
    if (!variant) return;

    addItem({
      product: masterBundle,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    });

    toast.success("Master Bundle added to cart!", {
      description: "Ready to checkout when you are.",
      position: "top-center"
    });
    setOpen(true);
  };

  const price = masterBundle?.node.priceRange.minVariantPrice.amount || "69";
  const currency = masterBundle?.node.priceRange.minVariantPrice.currencyCode || "USD";

  return (
    <>
      <Helmet>
        <title>The Knockout Master Bundle - All 6 Bundles + 8,000+ Templates | The Knockout Academy</title>
        <meta name="description" content="Get everything: 40+ eBooks, guides & 8,000+ AI automation templates. $470+ value for just $69. 30-day money-back guarantee." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "The Knockout Master Bundle",
            "description": "Complete collection of all 6 specialty bundles plus 8,000+ n8n automation templates",
            "offers": {
              "@type": "Offer",
              "price": price,
              "priceCurrency": currency,
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm text-accent mb-6">
                  <Package className="h-4 w-4" />
                  Complete Collection
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-foreground mb-6">
                  The Knockout{" "}
                  <span className="text-primary">Master Bundle</span>
                </h1>
                
                <p className="text-lg text-secondary-foreground/80 mb-6">
                  Everything you need to master AI, e-commerce, content creation, marketing, productivity, and finance — all in one comprehensive package.
                </p>

                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-5xl font-extrabold text-primary">${parseFloat(price).toFixed(0)}</span>
                  <span className="text-xl text-secondary-foreground/50 line-through">$470+</span>
                  <span className="text-accent font-semibold">Save 85%</span>
                </div>

                <Button 
                  variant="accent" 
                  size="xl" 
                  onClick={handleAddToCart}
                  disabled={loading || !masterBundle}
                  className="mb-6"
                >
                  Get The Master Bundle Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-secondary-foreground/70">
                    <Zap className="h-5 w-5 text-accent" />
                    <span className="text-sm">Instant Access</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary-foreground/70">
                    <RefreshCw className="h-5 w-5 text-accent" />
                    <span className="text-sm">30-Day Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary-foreground/70">
                    <Shield className="h-5 w-5 text-accent" />
                    <span className="text-sm">Secure Checkout</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/20">
                  <div className="text-center mb-6">
                    <BookOpen className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-secondary-foreground">What's Inside</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-secondary-foreground/90">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>40+ Premium eBooks & Guides</span>
                    </li>
                    <li className="flex items-center gap-3 text-secondary-foreground/90">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>8,000+ n8n Automation Templates</span>
                    </li>
                    <li className="flex items-center gap-3 text-secondary-foreground/90">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>6 Complete Skill Bundles</span>
                    </li>
                    <li className="flex items-center gap-3 text-secondary-foreground/90">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Beginner-to-Expert Pathway</span>
                    </li>
                    <li className="flex items-center gap-3 text-secondary-foreground/90">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Lifetime Access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bundle Contents */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              6 Complete Bundles Included
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Each bundle is carefully curated with practical, actionable resources designed for beginners and professionals alike.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bundleContents.map((bundle) => (
                <div key={bundle.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <bundle.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{bundle.title}</h3>
                      <p className="text-sm text-muted-foreground">{bundle.items}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-accent/10 border border-accent/20 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">
                PLUS: 8,000+ n8n Automation Templates
              </h3>
              <p className="text-muted-foreground">
                Plug-and-play AI automation workflows worth $297+ alone. Save hundreds of hours with ready-to-use automations.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Master Bundle vs. Buying Separately
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              See how much you save with the Master Bundle compared to purchasing each item individually.
            </p>

            <div className="max-w-3xl mx-auto bg-card border border-border rounded-xl overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary text-secondary-foreground font-semibold">
                <div className="p-4">Item</div>
                <div className="p-4 text-center">Individual Price</div>
                <div className="p-4 text-center bg-primary/10">Master Bundle</div>
              </div>
              {comparisonData.map((row, index) => (
                <div key={index} className="grid grid-cols-3 border-t border-border">
                  <div className="p-4 text-foreground text-sm">{row.item}</div>
                  <div className="p-4 text-center text-muted-foreground">{row.individual}</div>
                  <div className="p-4 text-center bg-primary/5 text-accent font-medium">{row.master}</div>
                </div>
              ))}
              <div className="grid grid-cols-3 border-t-2 border-primary bg-secondary">
                <div className="p-4 font-bold text-foreground">Total Value</div>
                <div className="p-4 text-center font-bold text-muted-foreground">$470+</div>
                <div className="p-4 text-center font-bold text-primary bg-primary/10">Just $69</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
                Ready to Get Everything?
              </h2>
              <p className="text-lg text-secondary-foreground/80 mb-8">
                Join thousands of learners who have transformed their skills with The Knockout Master Bundle. Risk-free with our 30-day money-back guarantee.
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-5xl font-extrabold text-primary">${parseFloat(price).toFixed(0)}</span>
                <div className="text-left">
                  <span className="text-xl text-secondary-foreground/50 line-through block">$470+ value</span>
                  <span className="text-accent font-semibold">Save over 85%</span>
                </div>
              </div>

              <Button 
                variant="accent" 
                size="xl" 
                onClick={handleAddToCart}
                disabled={loading || !masterBundle}
              >
                Get The Master Bundle Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="mt-6 text-sm text-secondary-foreground/60">
                Instant digital delivery • 30-day money-back guarantee • Secure checkout
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default MasterBundle;
