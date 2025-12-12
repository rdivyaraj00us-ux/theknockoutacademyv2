import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

const bundleContentsDisplay = [
  { 
    icon: Bot, 
    title: "AI Mastery Essentials", 
    products: [
      "Claude AI for Business and Content",
      "AI Research & Workflow Automation with Perplexity",
      "The Ultimate Guide to ChatGPT Sora",
      "Smart Digital Creation with AI",
      "AI-Powered Content Marketing Prompts",
      "The Goldilocks Prompt Formula",
      "Prompt Engineering for Content Marketers"
    ]
  },
  { 
    icon: ShoppingCart, 
    title: "E-Commerce & Dropshipping", 
    products: [
      "The Advertising Funnel Blueprint Strategies",
      "Google Performance Max Campaigns Unleashed",
      "Keep Them Coming Back (Customer Retention)",
      "How to Find Niche and Stand Out",
      "Headline Construction Framework",
      "21 Psychological Triggers That Help You Monetize"
    ]
  },
  { 
    icon: Video, 
    title: "Content Creator Accelerator", 
    products: [
      "The 6-Day YouTube Accelerator",
      "8-Day Content Marketing Revolution",
      "Mastering CapCut Tutorials",
      "Content Marketing Growthstack",
      "Content Marketing on Steroids",
      "7 Content Creation Moves to Reclaim Your Time With AI"
    ]
  },
  { 
    icon: TrendingUp, 
    title: "Digital Marketing & Sales", 
    products: [
      "GetResponse Growth: Automate, Convert, Scale",
      "The Micro-Offer Method",
      "Interview Success Blueprint",
      "Your Business Plan Playbook",
      "The Strategic Delegation Framework"
    ]
  },
  { 
    icon: Brain, 
    title: "Productivity & Development", 
    products: [
      "The Perfect Process (Mini-Course)",
      "The Eisenhower Matrix Blueprint",
      "Master Your Time and Priorities",
      "Productivity with ADHD",
      "The Calm Beyond Anxiety",
      "Strategic Time Management Prompts"
    ]
  },
  { 
    icon: Coins, 
    title: "Finance & Investing", 
    products: [
      "The Multi-Bucket Savings System",
      "Blockchain Basics",
      "How Digital Currencies Really Work",
      "Making Your First Cryptocurrency Purchase",
      "Cryptocurrency Platform Due Diligence",
      "The Smart Homebuyer's Playbook"
    ]
  },
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
        <section className="bg-secondary py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial-navy" />
          <div className="absolute inset-0 bg-gradient-mesh" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

          <div className="container relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-gold text-gold-foreground font-heading font-semibold px-4 py-1.5 text-sm rounded-full mb-6 shadow-glow-gold">
                  BEST VALUE
                </Badge>
                
                <h1 className="text-hero font-display text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-6">
                  The Knockout{" "}
                  <span className="text-primary">Master Bundle</span>
                </h1>
                
                <p className="text-xl text-secondary-foreground/70 font-body leading-relaxed mb-8">
                  Everything you need to master AI, e-commerce, content creation, marketing, productivity, and finance — all in one comprehensive package.
                </p>

                <div className="flex items-baseline gap-4 mb-8">
                  <span className="text-6xl font-heading font-bold text-accent">${parseFloat(price).toFixed(0)}</span>
                  <span className="text-xl text-secondary-foreground/50 line-through">$470+</span>
                  <Badge className="bg-accent/20 text-accent border-accent/30 font-heading font-semibold">
                    Save 85%
                  </Badge>
                </div>

                <Button 
                  variant="accent" 
                  size="xl" 
                  onClick={handleAddToCart}
                  disabled={loading || !masterBundle}
                  className="mb-8 group"
                >
                  Get The Master Bundle Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-secondary-foreground/70">
                    <Zap className="h-5 w-5 text-accent" />
                    <span className="text-sm font-body">Instant Access</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary-foreground/70">
                    <RefreshCw className="h-5 w-5 text-accent" />
                    <span className="text-sm font-body">30-Day Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary-foreground/70">
                    <Shield className="h-5 w-5 text-accent" />
                    <span className="text-sm font-body">Secure Checkout</span>
                  </div>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="relative bg-secondary-foreground/5 rounded-3xl p-8 border border-primary/30 backdrop-blur-sm shadow-glow-royal">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-3xl blur-xl opacity-50" />
                  
                  <div className="relative text-center mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <BookOpen className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-secondary-foreground">What's Inside</h3>
                  </div>
                  
                  <ul className="space-y-4 relative">
                    <li className="flex items-center gap-3 text-secondary-foreground/90">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="font-body">40+ Premium eBooks & Guides</span>
                    </li>
                    <li className="flex items-center gap-3 text-secondary-foreground/90">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="font-body">8,000+ n8n Automation Templates</span>
                    </li>
                    <li className="flex items-center gap-3 text-secondary-foreground/90">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="font-body">6 Complete Skill Bundles</span>
                    </li>
                    <li className="flex items-center gap-3 text-secondary-foreground/90">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="font-body">Beginner-to-Expert Pathway</span>
                    </li>
                    <li className="flex items-center gap-3 text-secondary-foreground/90">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="font-body">Lifetime Access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bundle Contents */}
        <section className="py-20 md:py-28">
          <div className="container">
            <h2 className="text-section-title font-display text-3xl md:text-4xl text-center text-foreground mb-4">
              6 Complete Bundles Included
            </h2>
            <p className="text-center text-muted-foreground font-body mb-12 max-w-2xl mx-auto">
              Each bundle is carefully curated with practical, actionable resources designed for beginners and professionals alike.
            </p>

            <Accordion type="multiple" className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {bundleContentsDisplay.map((bundle, index) => (
                <AccordionItem 
                  key={bundle.title} 
                  value={`bundle-${index}`}
                  className="bg-card border border-border rounded-xl px-6 transition-all hover:shadow-lg hover:border-primary/30"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <bundle.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground">{bundle.title}</h3>
                        <p className="text-sm text-muted-foreground font-body">{bundle.products.length} resources included</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <ul className="space-y-2 pl-16">
                      {bundle.products.map((product, pIndex) => (
                        <li key={pIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground font-body">{product}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 max-w-3xl mx-auto bg-accent/10 border border-accent/30 rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Bot className="h-8 w-8 text-accent" />
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  +8,000 n8n Automation Templates
                </h3>
              </div>
              <p className="text-muted-foreground font-body text-lg">
                Plug-and-play AI automation workflows worth $297+ alone. Save hundreds of hours with ready-to-use automations.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 md:py-28 bg-soft-gray">
          <div className="container">
            <h2 className="text-section-title font-display text-3xl md:text-4xl text-center text-foreground mb-4">
              Master Bundle vs. Buying Separately
            </h2>
            <p className="text-center text-muted-foreground font-body mb-12 max-w-2xl mx-auto">
              See how much you save with the Master Bundle compared to purchasing each item individually.
            </p>

            <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl overflow-hidden shadow-premium">
              <div className="grid grid-cols-3 bg-secondary text-secondary-foreground font-heading font-semibold">
                <div className="p-5">Item</div>
                <div className="p-5 text-center">Individual Price</div>
                <div className="p-5 text-center bg-primary/10">Master Bundle</div>
              </div>
              {comparisonData.map((row, index) => (
                <div key={index} className="grid grid-cols-3 border-t border-border">
                  <div className="p-4 text-foreground text-sm font-body">{row.item}</div>
                  <div className="p-4 text-center text-muted-foreground font-body">{row.individual}</div>
                  <div className="p-4 text-center bg-primary/5 text-accent font-heading font-medium">{row.master}</div>
                </div>
              ))}
              <div className="grid grid-cols-3 border-t-2 border-primary bg-secondary">
                <div className="p-5 font-heading font-bold text-secondary-foreground">Total Value</div>
                <div className="p-5 text-center font-heading font-bold text-secondary-foreground/70">$470+</div>
                <div className="p-5 text-center font-heading font-bold text-primary bg-primary/10 text-xl">Just $69</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-32 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial-navy" />
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-section-title font-display text-3xl md:text-5xl text-secondary-foreground mb-6">
                Ready to Get Everything?
              </h2>
              <p className="text-xl text-secondary-foreground/70 font-body mb-10">
                Join thousands of learners who have transformed their skills with The Knockout Master Bundle. Risk-free with our 30-day money-back guarantee.
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-10">
                <span className="text-6xl font-heading font-bold text-accent">${parseFloat(price).toFixed(0)}</span>
                <div className="text-left">
                  <span className="text-xl text-secondary-foreground/50 line-through block">$470+ value</span>
                  <span className="text-accent font-heading font-semibold">Save over 85%</span>
                </div>
              </div>

              <Button 
                variant="accent" 
                size="xl" 
                onClick={handleAddToCart}
                disabled={loading || !masterBundle}
                className="text-lg px-12 group"
              >
                Get The Master Bundle Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="mt-8 text-sm text-secondary-foreground/50 font-body">
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