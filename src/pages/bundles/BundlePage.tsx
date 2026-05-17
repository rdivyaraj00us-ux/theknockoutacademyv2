/**
 * BundlePage — universal bundle template, 21 of the 22 bundle routes.
 *
 * The Grand Master Bundle (id "grand-master") redirects to /master-bundle —
 * that route is the bespoke long-form flagship LP. Every other bundle uses
 * this template.
 *
 * 9-block structure from PDF p33:
 *   1. Hero                  ✅ real (with Klaviyo capture)
 *   2. Problem Agitation      🟡 placeholder
 *   3. Social Proof Strip     🟡 placeholder
 *   4. The Council            ✅ real (slim methodology summary)
 *   5. What's Inside (slots)  ✅ real (catalog-driven)
 *   6. Use Cases              🟡 placeholder
 *   7. Before / After         🟡 placeholder
 *   8. Bundle Cross-Sell      ✅ real (Master Bundle + other profession bundles)
 *   9. FAQ + Final CTA        ✅ real
 */

import { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Award, BookOpen, CheckCircle2, Shield, Sparkles } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookCover } from "@/components/BookCover";
import { EmailCapture } from "@/components/EmailCapture";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import NotFound from "@/pages/NotFound";
import { useCatalog } from "@/hooks/useCatalog";
import type { Book, Bundle, BundleComposition } from "@/types/catalog";

type SlotKey = keyof Omit<BundleComposition, never>;

const SLOT_LABELS: Record<
  "profession" | "foundations" | "ai_operator" | "wealth" | "skills",
  string
> = {
  profession: "Profession",
  foundations: "Foundations",
  ai_operator: "AI-Powered Operator",
  wealth: "Wealth",
  skills: "Skills",
};

interface SlotGroup {
  readonly label: string;
  readonly books: readonly Book[];
}

interface PlaceholderBlockProps {
  readonly block: string;
  readonly note: string;
}

const PlaceholderBlock = ({ block, note }: PlaceholderBlockProps) => (
  <section
    className="py-16 bg-muted border-y border-border"
    data-block={block}
  >
    <div className="container max-w-3xl">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-heading mb-3">
        Block: {block} — TODO
      </p>
      <p className="text-sm text-muted-foreground font-body leading-relaxed">
        {note}
      </p>
    </div>
  </section>
);

export default function BundlePage() {
  const { bundleId } = useParams<{ bundleId: string }>();
  const { bundleById, bookById, books: allBooks, bundles } = useCatalog();

  // Grand Master gets the bespoke /master-bundle LP, not this template.
  // Redirect with `replace` so back-button doesn't bounce.
  if (bundleId === "grand-master") {
    return <Navigate to="/master-bundle" replace />;
  }

  const bundle = bundleId ? bundleById(bundleId) : undefined;

  const slotGroups = useMemo<readonly SlotGroup[]>(() => {
    if (!bundle) return [];

    if (bundle.composition === "all") {
      return [{ label: "All 61 books", books: allBooks }];
    }

    const c = bundle.composition;
    const groups: SlotGroup[] = [];
    const slots: readonly SlotKey[] = [
      "profession",
      "foundations",
      "ai_operator",
      "wealth",
      "skills",
    ];

    for (const slot of slots) {
      const ids = c[slot];
      if (!ids || ids.length === 0) continue;
      const slotBooks: Book[] = [];
      for (const id of ids) {
        const b = bookById(id);
        if (b) slotBooks.push(b);
      }
      if (slotBooks.length > 0) {
        groups.push({ label: SLOT_LABELS[slot], books: slotBooks });
      }
    }

    return groups;
  }, [bundle, allBooks, bookById]);

  // Cross-sell: Master Bundle + 3 other bundles for narrower/wider options
  const crossSellBundles = useMemo<readonly Bundle[]>(() => {
    if (!bundle) return [];
    const featured: readonly string[] =
      bundle.id === "operator"
        ? ["grand-master", "founder", "marketer", "consultant"]
        : ["grand-master", "operator", "founder", "marketer"];
    return featured
      .filter((id) => id !== bundle.id)
      .map((id) => bundles.find((b) => b.id === id))
      .filter((b): b is Bundle => Boolean(b))
      .slice(0, 4);
  }, [bundle, bundles]);

  if (!bundle) return <NotFound />;

  const retailDelta = bundle.retail_value - bundle.price;
  const savingsPct =
    bundle.savings_percent ??
    Math.round((retailDelta / bundle.retail_value) * 100);

  const faqs: ReadonlyArray<{ q: string; a: string }> = [
    {
      q: "What's in the bundle?",
      a: `${bundle.book_count} books from TheKnockoutAcademy library, listed below by series. Each book is the same edition you'd get buying individually — no abridged versions, no cut content.`,
    },
    {
      q: "Why is it cheaper than buying individually?",
      a: `Bundle pricing reflects what a serious operator gets value from: the full operating system, not one book in isolation. You save $${retailDelta} (${savingsPct}% off retail) for committing to the full set.`,
    },
    {
      q: "Are these the same books as the catalog?",
      a: "Yes — identical digital editions. Hardcovers ship the same as if you'd ordered them individually.",
    },
    {
      q: "What's the refund policy?",
      a: "14-day money-back, no questions asked. Email within 14 days for a full refund on digital. Hardcover refunds follow the same window once returned in resalable condition.",
    },
    {
      q: "Is this Council of Experts Reviewed?",
      a: "Every book in the bundle is reviewed and signed off by a named panel of subject-matter experts before it ships. Council members appear in the front matter and on the /experts page.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{`${bundle.name} — TheKnockoutAcademy`}</title>
        <meta
          name="description"
          content={
            bundle.tagline ||
            `${bundle.book_count} books for $${bundle.price} (retail $${bundle.retail_value}). Council of Experts Reviewed. 14-day money-back guarantee.`
          }
        />
        <link
          rel="canonical"
          href={`https://theknockoutacademy.com/bundles/${bundle.id}`}
        />
        <meta property="og:title" content={`${bundle.name} — TheKnockoutAcademy`} />
        <meta property="og:description" content={bundle.tagline || ""} />
        <meta property="og:type" content="product" />
        <meta
          property="og:url"
          content={`https://theknockoutacademy.com/bundles/${bundle.id}`}
        />
        <meta property="og:image" content="https://theknockoutacademy.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": bundle.name,
            "description": bundle.tagline,
            "brand": { "@type": "Brand", "name": "TheKnockoutAcademy" },
            "offers": {
              "@type": "Offer",
              "price": bundle.price,
              "priceCurrency": "USD",
              "availability": "https://schema.org/PreOrder",
              "url": `https://theknockoutacademy.com/bundles/${bundle.id}`,
            },
          })}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Block 1 — Hero */}
        <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
          <div className="container max-w-5xl">
            <p className="text-xs uppercase tracking-[0.3em] font-heading mb-4 text-accent">
              {bundle.type === "master" ? "Master Bundle" : "Profession Bundle"}
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-[1.05]">
              {bundle.name}
            </h1>
            {bundle.tagline && (
              <p className="text-xl md:text-2xl font-body opacity-85 mb-10 max-w-3xl">
                {bundle.tagline}
              </p>
            )}

            <div className="flex flex-wrap items-end gap-x-8 gap-y-4 mb-10">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-heading opacity-60 mb-1">
                  Today
                </p>
                <p className="font-display text-6xl md:text-7xl font-bold text-accent leading-none">
                  ${bundle.price}
                </p>
              </div>
              <div className="pb-2">
                <p className="text-xs uppercase tracking-[0.2em] font-heading opacity-60 mb-1">
                  Retail
                </p>
                <p className="font-display text-2xl line-through opacity-60 leading-none">
                  ${bundle.retail_value}
                </p>
              </div>
              <div className="pb-2">
                <p className="text-xs uppercase tracking-[0.2em] font-heading opacity-60 mb-1">
                  You save
                </p>
                <p className="font-display text-2xl font-bold text-accent leading-none">
                  ${retailDelta} ({savingsPct}%)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-x-6 gap-y-3 mb-10 flex-wrap">
              <span className="flex items-center gap-2 text-sm font-heading">
                <Award className="w-4 h-4 text-accent" />
                Council of Experts Reviewed
              </span>
              <span className="flex items-center gap-2 text-sm font-heading">
                <Shield className="w-4 h-4 text-accent" />
                14-day money-back guarantee
              </span>
              <span className="flex items-center gap-2 text-sm font-heading">
                <BookOpen className="w-4 h-4 text-accent" />
                {bundle.book_count} books · instant digital access
              </span>
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                className="font-heading bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 h-auto"
              >
                Buy the bundle — ${bundle.price}
              </Button>
              <p className="text-xs opacity-60">
                Checkout via Paddle — wiring lands in Session 5.
              </p>

              <div className="pt-6 border-t border-secondary-foreground/15 max-w-md">
                <p className="text-sm font-heading mb-3 opacity-80">
                  Not ready yet? Get notified when checkout opens.
                </p>
                <EmailCapture
                  source={`bundle-${bundle.id}-hero`}
                  cta="Notify me at launch"
                  customProperties={{ interest: `bundle-${bundle.id}` }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Block 2 — Problem Agitation */}
        <PlaceholderBlock
          block="Problem Agitation"
          note={`Cited stat establishing the cost of NOT solving what ${bundle.name} addresses for its audience. PDF p11 brand-promise framing: no income hype, no shortcuts. Replace when Council research is locked.`}
        />

        {/* Block 3 — Social Proof */}
        <PlaceholderBlock
          block="Social Proof Strip"
          note="Four named buyers with profession + outcome. Real verified testimonials only — no stock-photo composites per PDF p34 compliance. Block becomes real once first cohort of buyers exists."
        />

        {/* Block 4 — The Council (slim methodology summary) */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-4xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-heading mb-4">
              The Method
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Every book Council-reviewed before it ships
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-8 max-w-3xl leading-relaxed">
              We're not a personality and we're not a course. Every book in
              this bundle is the consensus of 3–5 named subject-matter experts
              in the field — synthesized from 15–30 published sources,
              illustrated, reviewed chapter-by-chapter, signed off in writing
              before it ships.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              {[
                "15-30 sources / book",
                "3-5 named experts / Council",
                "Chapter-level review",
                "Written sign-off required",
              ].map((claim) => (
                <div
                  key={claim}
                  className="flex items-start gap-2 p-4 bg-card border border-border rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-heading font-medium text-foreground">
                    {claim}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Block 5 — What's Inside (slot rendering) */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container max-w-6xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-heading mb-4">
              The Books
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
              What's inside
            </h2>

            {slotGroups.map((group) => (
              <div key={group.label} className="mb-16 last:mb-0">
                <h3 className="text-xs uppercase tracking-[0.25em] font-heading text-muted-foreground mb-8">
                  {group.label} · {group.books.length} book
                  {group.books.length === 1 ? "" : "s"}
                </h3>
                <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {group.books.map((book) => (
                    <Link
                      key={book.id}
                      to={`/book/${book.slug}`}
                      className="group flex flex-col gap-3 transition-transform hover:-translate-y-1"
                    >
                      <BookCover
                        bookId={book.id}
                        variant="shelf"
                        className="!w-full shadow-md group-hover:shadow-lg transition-shadow"
                      />
                      <p className="text-xs font-heading font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
                        № {book.id} · {book.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Block 6 — Use Cases */}
        <PlaceholderBlock
          block="Use Cases"
          note={`Concrete day-to-day applications for the ${bundle.name} audience, with named testimonials. Block becomes real once first cohort of buyers exists and we can quote real outcomes.`}
        />

        {/* Block 7 — Before / After */}
        <PlaceholderBlock
          block="Before / After"
          note="Workflow visualization — what the buyer's operating week looks like before, then after applying the bundle's frameworks. Visual block; design pass once we have real reader workflows to draw from."
        />

        {/* Block 8 — Cross-sell to other bundles */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-5xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-heading mb-4">
              Or go wider
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Other ways to buy
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-12 max-w-2xl">
              {bundle.name} is narrow by design. If you want the full library
              or a different audience cut, the bundles below cover the same
              books in different scopes.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {crossSellBundles.map((other) => {
                const delta = other.retail_value - other.price;
                const isMaster = other.id === "grand-master";
                const href = isMaster
                  ? "/master-bundle"
                  : `/bundles/${other.id}`;
                return (
                  <Link
                    key={other.id}
                    to={href}
                    className="block p-6 bg-card border border-border rounded-2xl transition-all hover:-translate-y-1 hover:shadow-premium-hover hover:border-accent/40"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-heading mb-2">
                      {other.type === "master" ? "Master" : "Profession"}
                    </p>
                    <h3 className="font-display text-xl font-bold mb-3 leading-tight">
                      {other.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-2xl font-bold text-primary">
                        ${other.price}
                      </span>
                      <span className="text-xs text-muted-foreground line-through">
                        ${other.retail_value}
                      </span>
                    </div>
                    <p className="text-xs text-accent font-heading font-medium mt-1">
                      {other.book_count} books · save ${delta}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Block 9 — FAQ + Final CTA */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
              Frequently asked
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="font-heading font-semibold py-5 text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-16 text-center bg-secondary text-secondary-foreground py-12 px-6 rounded-3xl">
              <Sparkles className="w-7 h-7 text-accent mx-auto mb-3" />
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                Ready?
              </h3>
              <p className="opacity-80 font-body mb-6 max-w-md mx-auto">
                {bundle.book_count} books · 14-day money-back · instant access.
              </p>
              <Button
                size="lg"
                className="font-heading bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Buy {bundle.name} — ${bundle.price}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
