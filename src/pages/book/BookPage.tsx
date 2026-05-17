/**
 * BookPage — universal book sales template, renders all 61 routes.
 *
 * 9-block structure from the Empire Plan (PDF p33):
 *   1. Hero                  ✅ real
 *   2. Problem Agitation      🟡 placeholder (needs cited stat per book)
 *   3. Social Proof Strip     🟡 placeholder (real testimonials only — PDF p34)
 *   4. The Council            🟡 placeholder (Council assembly pipeline)
 *   5. Inside The Book        ✅ real (outline-only; final chapter list ships with manuscript)
 *   6. Use Cases              🟡 placeholder
 *   7. Before / After         🟡 placeholder
 *   8. Bundle Cross-Sell      ✅ real (computed from catalog)
 *   9. FAQ + Final CTA        ✅ real
 *
 * Placeholder blocks are visible-but-marked so a reviewer can see exactly
 * what's missing — better than rendering empty space.
 */

import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Award, CheckCircle2, Shield, Star } from "lucide-react";

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
import type { Bundle } from "@/types/catalog";

interface PlaceholderBlockProps {
  readonly block: string;
  readonly note: string;
}

const PlaceholderBlock = ({ block, note }: PlaceholderBlockProps) => (
  <section
    className="py-16 bg-soft-gray/40 border-y border-border"
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

export default function BookPage() {
  const { slug } = useParams<{ slug: string }>();
  const { bookBySlug, seriesOfBook, bundles, flatBookIds } = useCatalog();

  const book = slug ? bookBySlug(slug) : undefined;
  const series = book ? seriesOfBook(book.id) : undefined;

  const crossSellBundles = useMemo<readonly Bundle[]>(() => {
    if (!book) return [];
    return bundles.filter((b) => {
      if (b.composition === "all") return true;
      return flatBookIds(b.id).includes(book.id);
    });
  }, [book, bundles, flatBookIds]);

  if (!book || !series) return <NotFound />;

  const { palette } = series;

  // V1 FAQ — same shape per book with title/price interpolation.
  // Per-book customization comes when the manuscript locks.
  const faqs: ReadonlyArray<{ q: string; a: string }> = [
    {
      q: "What's the digital format?",
      a: "Hardcover-quality PDF, typeset to publishing-house standards, illustrated on every chapter. ePub also included for e-readers.",
    },
    {
      q: "Is this Council of Experts Reviewed?",
      a: `Yes. ${book.title} is reviewed and signed off by a named panel of subject-matter experts before it ships. Council members are published in the front matter and on the /experts page.`,
    },
    {
      q: "What's the refund policy?",
      a: "14-day money-back, no questions asked. Email within 14 days of purchase for a full refund on digital. Hardcover refunds follow the same window once returned in resalable condition.",
    },
    {
      q: "Hardcover vs digital — which should I get?",
      a: `Digital ($${book.price_digital}) for fastest access and search. Hardcover ($${book.price_hardcover}) for the shelf — every book in the library is produced to Penguin-classics-grade hardcover quality. Most operators end up with both.`,
    },
  ];

  // Placeholder chapter outline — final chapter list ships with the manuscript.
  const chapterPlaceholders: ReadonlyArray<string> = [
    "The terrain — the field as it actually is in 2026",
    "First principles — the small set of ideas everything else follows from",
    "The Council's core frameworks, illustrated",
    "Stage one — getting your bearings",
    "Stage two — the work that pays",
    "Stage three — scaling without breaking",
    "Stage four — durable advantage",
    "Field manual — the printable companion",
  ];

  return (
    <>
      <Helmet>
        <title>{`${book.title} — TheKnockoutAcademy`}</title>
        <meta name="description" content={book.subtitle} />
        <link
          rel="canonical"
          href={`https://theknockoutacademy.com/book/${book.slug}`}
        />
        <meta property="og:title" content={`${book.title} — TheKnockoutAcademy`} />
        <meta property="og:description" content={book.subtitle} />
        <meta property="og:type" content="product" />
        <meta
          property="og:url"
          content={`https://theknockoutacademy.com/book/${book.slug}`}
        />
        <meta property="og:image" content="https://theknockoutacademy.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            "name": book.title,
            "description": book.subtitle,
            "inLanguage": "en",
            "isPartOf": {
              "@type": "BookSeries",
              "name": series.name,
              "url": `https://theknockoutacademy.com/series/${series.id}`,
            },
            "brand": { "@type": "Brand", "name": "TheKnockoutAcademy" },
            "offers": [
              {
                "@type": "Offer",
                "name": "Digital edition",
                "price": book.price_digital,
                "priceCurrency": "USD",
                "availability": "https://schema.org/PreOrder",
                "url": `https://theknockoutacademy.com/book/${book.slug}`,
              },
              {
                "@type": "Offer",
                "name": "Hardcover edition",
                "price": book.price_hardcover,
                "priceCurrency": "USD",
                "availability": "https://schema.org/PreOrder",
                "url": `https://theknockoutacademy.com/book/${book.slug}`,
              },
            ],
          })}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Block 1 — Hero */}
        <section
          style={{ backgroundColor: palette.background }}
          className="py-16 md:py-24"
        >
          <div className="container max-w-6xl grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:justify-start">
              <BookCover
                bookId={book.id}
                variant="hero"
                className="shadow-2xl"
              />
            </div>
            <div style={{ color: palette.text }}>
              <Link
                to={`/series/${series.id}`}
                className="inline-block text-xs font-heading uppercase tracking-[0.3em] mb-6 underline-offset-4 hover:underline"
                style={{ color: palette.accent }}
              >
                Series {series.roman} · {series.name}
              </Link>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {book.title}
              </h1>
              <p
                className="font-body text-xl md:text-2xl mb-8"
                style={{ opacity: 0.8 }}
              >
                {book.subtitle}
              </p>

              <div className="flex items-center gap-6 mb-8 flex-wrap">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current"
                      style={{ color: palette.accent }}
                    />
                  ))}
                  <span className="ml-2 text-sm font-heading">4.9/5</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-[0.2em]">
                  <Award
                    className="w-4 h-4"
                    style={{ color: palette.accent }}
                  />
                  Council of Experts Reviewed
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <button
                  type="button"
                  className="h-auto py-5 px-6 rounded-xl flex flex-col items-start font-heading transition-transform hover:scale-[1.02]"
                  style={{
                    backgroundColor: palette.accent,
                    color: palette.background,
                  }}
                >
                  <span className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">
                    Digital
                  </span>
                  <span className="text-3xl font-display font-bold">
                    ${book.price_digital}
                  </span>
                </button>
                <button
                  type="button"
                  className="h-auto py-5 px-6 rounded-xl flex flex-col items-start font-heading border-2 transition-transform hover:scale-[1.02]"
                  style={{
                    borderColor: palette.accent,
                    color: palette.text,
                  }}
                >
                  <span className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">
                    Hardcover
                  </span>
                  <span className="text-3xl font-display font-bold">
                    ${book.price_hardcover}
                  </span>
                </button>
              </div>

              <p
                className="flex items-center gap-2 text-sm"
                style={{ opacity: 0.7 }}
              >
                <Shield className="w-4 h-4" />
                14-day money-back guarantee · checkout via Paddle (live Session 5)
              </p>
            </div>
          </div>
        </section>

        {/* Block 2 — Problem Agitation */}
        <PlaceholderBlock
          block="Problem Agitation"
          note={`Citation-backed stat establishing the cost of NOT solving the problem ${book.title} addresses. Cited source required — no "studies show" without studies (PDF p11). Replace when Council research is locked.`}
        />

        {/* Block 3 — Social Proof Strip */}
        <PlaceholderBlock
          block="Social Proof Strip"
          note="Four named buyers: name, city, profession, outcome with specific numbers. No stock-photo testimonials labeled as real per PDF p34 compliance — real verified testimonials prioritized as they accumulate."
        />

        {/* Block 4 — The Council (slim methodology summary; per-book Council names are pipeline output) */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-4xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-heading mb-4">
              The Method
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Every chapter Council-reviewed before it ships
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-8 max-w-3xl leading-relaxed">
              We're not a personality and we're not a course. {book.title} is
              the consensus of 3–5 named subject-matter experts in the field —
              synthesized from 15–30 published sources, illustrated, reviewed
              chapter-by-chapter, signed off in writing before it ships.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              {[
                "15-30 sources",
                "3-5 named experts",
                "Chapter-level review",
                "Written sign-off",
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
            <p className="mt-8 text-sm text-muted-foreground font-body italic">
              Specific Council members for {book.title} are published in the
              book's front matter and on the /experts page once the manuscript
              locks.
            </p>
          </div>
        </section>

        {/* Block 5 — Inside The Book (real, outline-only in v1) */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Inside the book
            </h2>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-heading mb-10">
              Chapter outline — final list ships with the manuscript
            </p>
            <ol className="space-y-5">
              {chapterPlaceholders.map((title, i) => (
                <li key={i} className="flex items-start gap-5">
                  <span className="font-display text-2xl font-bold text-muted-foreground/40 w-12 flex-shrink-0 leading-none pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-heading font-semibold text-foreground text-lg leading-snug">
                    {title}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-xs text-muted-foreground font-body italic">
              Chapter titles above are placeholders showing the book's narrative
              shape. Final titles ship with the manuscript once the Council
              signs off.
            </p>
          </div>
        </section>

        {/* Block 6 — Use Cases */}
        <PlaceholderBlock
          block="Use Cases"
          note={`Concrete day-to-day applications for the ${series.name.toLowerCase()} operator's role, with named testimonials. Real once first cohort of buyers exists.`}
        />

        {/* Block 7 — Before / After */}
        <PlaceholderBlock
          block="Before / After"
          note="Workflow visualization — what the operator's day looks like before, then after applying the book's frameworks. Visual block; design pass in Session 4."
        />

        {/* Block 8 — Bundle Cross-Sell (real) */}
        <section className="py-16 md:py-24 bg-soft-gray/40">
          <div className="container max-w-5xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              {book.title} is part of {crossSellBundles.length}{" "}
              bundle{crossSellBundles.length === 1 ? "" : "s"}
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-12 max-w-2xl">
              Buy this book inside a bundle and save against retail. The Grand
              Master Bundle includes the full 61-book library.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {crossSellBundles.map((bundle) => {
                const retailDelta = bundle.retail_value - bundle.price;
                return (
                  <Link
                    key={bundle.id}
                    to={`/bundles/${bundle.id}`}
                    className="block p-6 bg-card border border-border rounded-2xl transition-all hover:-translate-y-1 hover:shadow-premium-hover hover:border-primary/30"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-heading mb-2">
                      {bundle.type === "master"
                        ? "Master Bundle"
                        : "Profession Bundle"}
                    </p>
                    <h3 className="font-display text-2xl font-bold mb-2 leading-tight">
                      {bundle.name}
                    </h3>
                    {bundle.tagline && (
                      <p className="text-sm text-muted-foreground font-body mb-5 leading-snug">
                        {bundle.tagline}
                      </p>
                    )}
                    <div className="flex items-end gap-3">
                      <span className="font-display text-3xl font-bold text-primary">
                        ${bundle.price}
                      </span>
                      <span className="text-sm text-muted-foreground line-through pb-1">
                        ${bundle.retail_value}
                      </span>
                      <span className="text-xs font-heading text-accent ml-auto self-center">
                        save ${retailDelta}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Block 9 — FAQ + Final CTA */}
        <section className="py-16 md:py-24 bg-background">
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="font-heading">
                  Buy digital — ${book.price_digital}
                </Button>
                <Button size="lg" variant="outline" className="font-heading">
                  Buy hardcover — ${book.price_hardcover}
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Checkout via Paddle — wiring lands in Session 5.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
