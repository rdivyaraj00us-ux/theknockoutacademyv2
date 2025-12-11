import { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { ProductCard } from "@/components/products/ProductCard";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { Loader2, BookOpen, Zap, Users, Target, RefreshCw, Shield, Package, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  { icon: Zap, title: "No Fluff, All Action", description: "Practical guides you can implement today" },
  { icon: BookOpen, title: "Beginner-Friendly", description: "Start from zero, no prior experience needed" },
  { icon: Package, title: "Instant Access", description: "Download immediately after purchase" },
  { icon: Sparkles, title: "Real Templates", description: "8,000+ n8n automation workflows included" },
];

const audiences = [
  { icon: Target, title: "Side Hustlers", description: "Seeking additional income streams" },
  { icon: Users, title: "Career Changers", description: "Learning valuable new skills" },
  { icon: Zap, title: "Entrepreneurs", description: "Starting online businesses" },
  { icon: BookOpen, title: "Freelancers", description: "Expanding their services" },
];

const faqs = [
  { q: "Is this a get-rich-quick scheme?", a: "Absolutely not. These are educational resources to help you build real skills. Results depend entirely on your effort and implementation." },
  { q: "I'm a complete beginner. Will I understand this?", a: "Yes! Everything is designed for beginners. We start from the basics and guide you step-by-step." },
  { q: "How do I access my purchase?", a: "Instantly! You'll receive download links immediately after checkout, plus a backup email with all your files." },
  { q: "What if I'm not satisfied?", a: "We offer a 30-day money-back guarantee. No questions asked." },
  { q: "Do you offer updates or new content?", a: "What you see is what you get. We focus on quality over quantity — no empty promises of future updates." },
];

const Index = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(20);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSolution />

        {/* Products Section */}
        <section id="products" className="py-20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Our Premium Bundles</h2>
              <p className="mt-4 text-lg text-muted-foreground">Choose your path to success. Each bundle is packed with actionable resources.</p>
            </div>

            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20 bg-muted rounded-xl">
                <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground">Tell us what products you'd like to add!</p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.node.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">What Makes Us Different</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, i) => (
                <div key={i} className="p-6 bg-card rounded-xl border border-border text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audience Section */}
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Who This Is For</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {audiences.map((audience, i) => (
                <div key={i} className="p-6 bg-secondary rounded-xl text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <audience.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-secondary-foreground mb-2">{audience.title}</h3>
                  <p className="text-sm text-secondary-foreground/70">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-secondary">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-secondary-foreground md:text-4xl mb-4">Ready to Level Up Your Skills?</h2>
            <p className="text-lg text-secondary-foreground/70 mb-8 max-w-xl mx-auto">Join thousands of learners building real skills for real opportunities.</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-secondary-foreground/70"><Zap className="h-5 w-5 text-accent" /><span>Instant Delivery</span></div>
              <div className="flex items-center gap-2 text-secondary-foreground/70"><RefreshCw className="h-5 w-5 text-accent" /><span>30-Day Guarantee</span></div>
              <div className="flex items-center gap-2 text-secondary-foreground/70"><Shield className="h-5 w-5 text-accent" /><span>Secure Checkout</span></div>
            </div>
            <Button variant="accent" size="xl" asChild>
              <Link to="/#products">Get Started Now</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
