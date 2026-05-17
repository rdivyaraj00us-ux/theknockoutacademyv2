/**
 * BundlePage — universal bundle template, renders all 22 bundle routes.
 *
 * Renders the slot-structured composition as separate sections in canonical
 * order: profession → foundations → ai_operator → wealth → skills. Empty
 * slots are skipped. The Grand Master Bundle (composition: "all") renders
 * the full 61-book library in a single grid.
 */

import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Award, CheckCircle2, Shield } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookCover } from "@/components/BookCover";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import NotFound from "@/pages/NotFound";
import { useCatalog } from "@/hooks/useCatalog";
import type { Book, BundleComposition } from "@/types/catalog";

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

export default function BundlePage() {
  const { bundleId } = useParams<{ bundleId: string }>();
  const { bundleById, bookById, books: allBooks } = useCatalog();

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
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
          <div className="container max-w-5xl">
            <p className="text-xs uppercase tracking-[0.3em] font-heading mb-4 text-accent">
              {bundle.type === "master" ? "Master Bundle" : "Profession Bundle"}
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-[1.05]">
              {bundle.name}
            </h1>
            {bundle.tagline && (
              <p className="text-xl md:text-2xl font-body opacity-80 mb-10 max-w-3xl">
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
                <CheckCircle2 className="w-4 h-4 text-accent" />
                {bundle.book_count} books · instant digital access
              </span>
            </div>

            <Button size="lg" className="font-heading bg-accent text-accent-foreground hover:bg-accent/90">
              Buy the bundle — ${bundle.price}
            </Button>
            <p className="mt-3 text-xs opacity-60">
              Checkout via Paddle — wiring lands in Session 5.
            </p>
          </div>
        </section>

        {/* Slot rendering */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-6xl">
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

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-soft-gray/40">
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
                  <AccordionTrigger className="font-heading font-semibold py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-16 text-center">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                Ready?
              </h3>
              <p className="text-muted-foreground font-body mb-6">
                14-day money-back guarantee. Instant digital access on purchase.
              </p>
              <Button size="lg" className="font-heading">
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
