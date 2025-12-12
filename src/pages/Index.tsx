import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemAgitation } from "@/components/sections/ProblemAgitation";
import { SolutionIntro } from "@/components/sections/SolutionIntro";
import { MasterBundleShowcase } from "@/components/sections/MasterBundleShowcase";
import { WhoThisIsFor } from "@/components/sections/WhoThisIsFor";
import { SocialProof } from "@/components/sections/SocialProof";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductGridSkeleton } from "@/components/ui/product-skeleton";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { Package, Zap, BookOpen, Sparkles } from "lucide-react";
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

const faqs = [
  { q: "Is this a get-rich-quick scheme?", a: "Absolutely not. The Knockout Academy provides educational resources to help you build real, marketable skills. Results depend entirely on your effort, dedication, and how you apply what you learn. We make no income promises — just quality education." },
  { q: "I'm a complete beginner — will I understand this?", a: "Yes! Every bundle is designed with beginners in mind. We start from the fundamentals and guide you step-by-step. No prior experience or technical knowledge required." },
  { q: "How do I access my purchase?", a: "Instantly! As soon as your payment is confirmed, you'll receive download links via email. You can start learning within minutes of your purchase." },
  { q: "What's included in the 8,000+ AI templates?", a: "The Master Bundle includes plug-and-play automation workflows for n8n — a powerful automation tool. These templates cover everything from social media automation to data processing, ready to use with minimal setup." },
  { q: "What if I'm not satisfied?", a: "We offer a 30-day money-back guarantee. If you're not happy with your purchase for any reason, contact us within 30 days for a full refund. No questions asked." },
  { q: "Do you offer updates or new content?", a: "What you see is what you get. We focus on quality over quantity and don't make empty promises about future updates. The current content is complete and ready to use." },
  { q: "Can I buy individual bundles and upgrade later?", a: "Yes! You can purchase any individual bundle for $29. If you later decide you want the Master Bundle, contact support and we'll apply your previous purchase as credit." },
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

  // Handle hash link scrolling from other pages
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, []);

  const individualProducts = products
    .filter(p => !p.node.title.toLowerCase().includes("master bundle") && !p.node.handle.toLowerCase().includes("master-bundle"))
    .sort((a, b) => a.node.title.localeCompare(b.node.title));

  return (
    <>
      <Helmet>
        <title>The Knockout Academy | Master Skills That Actually Make Money Online</title>
        <meta name="description" content="40+ Premium eBooks, Guides & 8,000+ AI Automation Templates. From complete beginner to confident professional. Instant digital delivery, 30-day money-back guarantee." />
        <link rel="canonical" href="https://knockoutacademy.com" />
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "The Knockout Academy",
            "description": "Premium digital education platform offering practical skills training for entrepreneurs, freelancers, and career changers.",
            "url": "https://knockoutacademy.com",
            "logo": "https://knockoutacademy.com/logo.png",
            "sameAs": [],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "support@theknockoutacademy.com",
              "contactType": "customer service"
            }
          })}
        </script>
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <ProblemAgitation />
          <SolutionIntro />
          <MasterBundleShowcase />

          {/* Individual Bundles Grid */}
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

          {/* What Makes Us Different */}
          <section className="py-20 md:py-28 bg-soft-gray">
            <div className="container">
              <h2 className="text-section-title font-display text-3xl md:text-4xl text-center text-foreground mb-12">What Makes Us Different</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
                {features.map((feature, i) => (
                  <div key={i} className="p-6 bg-card rounded-xl border border-border text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-primary/30">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <WhoThisIsFor />
          <SocialProof />

          {/* FAQ */}
          <section id="faq" className="py-20 md:py-28 bg-soft-gray">
            <div className="container max-w-3xl">
              <h2 className="text-section-title font-display text-3xl md:text-4xl text-center text-foreground mb-12">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
                    <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline py-5">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          <FinalCTA />
        </main>
        <StickyMobileCTA />
        <Footer />
      </div>
    </>
  );
};

export default Index;