/**
 * MasterBundle — bespoke long-form sales page for the Grand Master Bundle.
 *
 * The cold-traffic hero offer: all 61 books, $497 vs $5,620 retail (91% off).
 * Distinct from `/bundles/grand-master` (which redirects here): that route
 * keeps the universal bundle catalog consistent, this page is the marketing
 * hero with bespoke copy and richer treatment per the Empire Plan p27.
 *
 * 9-block structure from PDF p33:
 *   1. Hero                ✅ real (with Klaviyo email capture)
 *   2. Problem Agitation   🟡 placeholder
 *   3. Social Proof Strip  🟡 placeholder
 *   4. The Council         ✅ real (methodology from PDF p12-13, no fake names)
 *   5. Inside the bundle   ✅ real (5-series grid w/ BookCover thumbnails)
 *   6. Use Cases           ✅ real (audience-by-audience entry points)
 *   7. Before / After      🟡 placeholder
 *   8. Bundle cross-sell   ✅ real (narrower options for buyers who don't need 61)
 *   9. FAQ + Final CTA     ✅ real
 */

import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Compass,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

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
import { useCatalog } from "@/hooks/useCatalog";
import type { Bundle, Series } from "@/types/catalog";

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

const USE_CASES: ReadonlyArray<{
  audience: string;
  hook: string;
  body: string;
}> = [
  {
    audience: "For founders",
    hook: "Day-one to first hire",
    body: "Starter playbook + solo discipline + the AI ops backbone every solo founder needs before they have to hire. Foundations and AI-Powered Operator do the heavy lifting; Skills round out the operating muscle.",
  },
  {
    audience: "For consultants",
    hook: "Synthesis + deliverables",
    body: "AI-Powered Content Creation, Operations & SOPs, and the strategic-thinking + negotiation skill set you ship every week. The Profession series gives you depth for whichever vertical you serve.",
  },
  {
    audience: "For lawyers, doctors, advisors",
    hook: "AI in regulated practice",
    body: "Your profession book + the AI workflows that translate into Monday-morning hours saved. Compliance-aware (PDF p34) — never substitutes for professional services in your field.",
  },
  {
    audience: "For investors",
    hook: "Wealth craft, end-to-end",
    body: "Stock investing, real-estate, crypto, tax strategy, options — all 8 Wealth titles in one place. Skip the Twitter noise; read the Council-reviewed framework instead.",
  },
  {
    audience: "For everyone else",
    hook: "The complete operator's library",
    body: "If you do work that compounds, the library is for you. 15,420 illustrated pages across the skills, professions, and wealth disciplines that distinguish a serious operator from a tourist.",
  },
];

const FAQS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "What format do I get?",
    a: "Hardcover-quality PDFs typeset to publishing-house standards, illustrated on every chapter, plus matching ePub editions for e-readers. All 61 books, instant download, lifetime access.",
  },
  {
    q: "Is there a refund policy?",
    a: "14-day money-back, no questions asked. Email within 14 days for a full refund — no hoops, no exit interview.",
  },
  {
    q: "What about the hardcovers?",
    a: "Every book ships as Penguin-classics-grade hardcover on demand at the per-book hardcover price (range $87–$197). The Grand Master Bundle covers the digital library; physical copies are ordered title-by-title from each book page.",
  },
  {
    q: "Do I get future books too?",
    a: "The 61 titles in the launch catalog are yours forever. The weekly subscription (AcademyPlus) delivers one new book every Monday on top of that — it's a separate product. The Grand Master Bundle and AcademyPlus are designed to be bought together; the bundle is the back-catalog, the subscription is the running shelf.",
  },
  {
    q: "Will the books get updates?",
    a: "Where the underlying tools or law change materially (AI tools especially), we ship revised editions and you get them at no additional cost. Council-reviewed updates only — no churn for the sake of churn.",
  },
  {
    q: "Am I the right person for this?",
    a: "If you do work that compounds — operating a company, advising clients, building a practice, deploying capital, leading a team — yes. If you're looking for a get-rich-quick course, no: this is a learning library, not a guru funnel. PDF p11 brand promise applies.",
  },
];

export default function MasterBundle() {
  const { bundles, series } = useCatalog();

  const grandMaster = bundles.find((b) => b.id === "grand-master");
  const operatorMaster = bundles.find((b) => b.id === "operator");

  // Cross-sell: master + 4 representative profession bundles
  const crossSellBundles = useMemo<readonly Bundle[]>(() => {
    const featured: readonly string[] = ["operator", "founder", "lawyer", "consultant"];
    return featured
      .map((id) => bundles.find((b) => b.id === id))
      .filter((b): b is Bundle => Boolean(b));
  }, [bundles]);

  if (!grandMaster) {
    // Catalog is malformed — surface the issue rather than rendering a broken page.
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground font-body">
          Grand Master Bundle missing from catalog.
        </p>
      </div>
    );
  }

  const retailDelta = grandMaster.retail_value - grandMaster.price;
  const savingsPct = grandMaster.savings_percent ?? 91;

  // For Block 5 — show up to 4 representative covers per series.
  const previewCoversPerSeries = 4;

  return (
    <>
      <Helmet>
        <title>The Grand Master Bundle — TheKnockoutAcademy</title>
        <meta
          name="description"
          content="All 61 books in TheKnockoutAcademy library — Foundations, AI-Powered Operator, Profession, Wealth, and Skills. $497 today, $5,620 retail. Council of Experts Reviewed. 14-day money-back."
        />
        <link rel="canonical" href="https://theknockoutacademy.com/master-bundle" />
        <meta property="og:title" content="The Grand Master Bundle — TheKnockoutAcademy" />
        <meta
          property="og:description"
          content="61 books, 15,420 illustrated pages, every Council reviewed. $497 today vs $5,620 retail."
        />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://theknockoutacademy.com/master-bundle" />
        <meta property="og:image" content="https://theknockoutacademy.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "The Grand Master Bundle",
            "description":
              "Every book in TheKnockoutAcademy library: 61 titles across 5 series, 15,420 illustrated pages, every chapter reviewed by a Council of Experts.",
            "brand": { "@type": "Brand", "name": "TheKnockoutAcademy" },
            "offers": {
              "@type": "Offer",
              "price": grandMaster.price,
              "priceCurrency": "USD",
              "availability": "https://schema.org/PreOrder",
              "url": "https://theknockoutacademy.com/master-bundle",
            },
          })}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Block 1 — Hero */}
        <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
          <div className="container max-w-6xl grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="text-xs uppercase tracking-[0.3em] font-heading mb-4 text-accent">
                Master Bundle · The Flagship
              </p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05]">
                The Grand Master Bundle
              </h1>
              <p className="text-xl md:text-2xl font-body opacity-85 mb-10 max-w-2xl">
                Every book in TheKnockoutAcademy library — 61 titles, 15,420
                illustrated pages, every chapter reviewed by the Council.
                Yours, today.
              </p>

              <div className="flex flex-wrap items-end gap-x-8 gap-y-4 mb-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] font-heading opacity-60 mb-1">
                    Today
                  </p>
                  <p className="font-display text-6xl md:text-8xl font-bold text-accent leading-none">
                    ${grandMaster.price}
                  </p>
                </div>
                <div className="pb-2">
                  <p className="text-xs uppercase tracking-[0.2em] font-heading opacity-60 mb-1">
                    Retail
                  </p>
                  <p className="font-display text-2xl line-through opacity-60 leading-none">
                    ${grandMaster.retail_value.toLocaleString()}
                  </p>
                </div>
                <div className="pb-2">
                  <p className="text-xs uppercase tracking-[0.2em] font-heading opacity-60 mb-1">
                    You save
                  </p>
                  <p className="font-display text-2xl font-bold text-accent leading-none">
                    ${retailDelta.toLocaleString()} ({savingsPct}%)
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10">
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
                  61 books · 15,420 pages
                </span>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="font-heading bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 h-auto"
                >
                  Buy now — ${grandMaster.price}
                </Button>
                <p className="text-xs opacity-60">
                  Checkout via Paddle — wiring lands in Session 5.
                </p>

                <div className="pt-6 border-t border-secondary-foreground/15 max-w-md">
                  <p className="text-sm font-heading mb-3 opacity-80">
                    Not ready yet? Get notified when checkout opens.
                  </p>
                  <EmailCapture
                    source="master-bundle-hero"
                    cta="Notify me at launch"
                    customProperties={{ interest: "grand-master-bundle" }}
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 hidden lg:flex justify-center">
              {/* Hero visual: stacked covers — one from each series */}
              <div className="relative grid grid-cols-3 gap-3 rotate-[-3deg] scale-95">
                {(["foundations", "ai-powered-operator", "profession", "wealth", "skills"] as const)
                  .map((seriesId) => {
                    const s = series.find((x) => x.id === seriesId);
                    const firstBook = s?.books[0];
                    return firstBook ? (
                      <BookCover
                        key={firstBook.id}
                        bookId={firstBook.id}
                        variant="shelf"
                        className="!w-full shadow-xl"
                      />
                    ) : null;
                  })}
              </div>
            </div>
          </div>
        </section>

        {/* Block 2 — Problem Agitation */}
        <PlaceholderBlock
          block="Problem Agitation"
          note="Cited stat about operators churning through disposable courses and one-off ebooks — never building the durable, compounding skill base a complete library gives them. PDF p11 brand-promise framing: no income hype, no shortcuts. Replace when Council research is locked."
        />

        {/* Block 3 — Social Proof Strip */}
        <PlaceholderBlock
          block="Social Proof Strip"
          note="Four named buyers: name, city, profession, outcome with specific numbers. Real verified testimonials only — no stock-photo composites per PDF p34 compliance. Block becomes real once first cohort of buyers exists."
        />

        {/* Block 4 — The Council (real methodology, no fake names) */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-4xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-heading mb-4">
              The Method
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              How every book gets made
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-12 max-w-3xl leading-relaxed">
              We're not a personality and we're not a course. We're a publishing
              house and learning institution. Every book is the consensus of
              the field's leading practitioners — synthesized, illustrated, and
              reviewed by named experts before it ships.
            </p>

            <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  n: "01",
                  t: "Research Synthesis",
                  d: "15–30 most influential published sources per book — the source corpus.",
                },
                {
                  n: "02",
                  t: "Council Assembly",
                  d: "3–5 named experts with 7+ years hands-on. They contribute frameworks and review every chapter.",
                },
                {
                  n: "03",
                  t: "Draft Synthesis",
                  d: "Editorial team produces the manuscript — every claim cited, every framework validated.",
                },
                {
                  n: "04",
                  t: "Expert Review",
                  d: "Each chapter returned to the Council. No book ships until every member signs off in writing.",
                },
                {
                  n: "05",
                  t: "Design & Production",
                  d: "Illustrated examples, frameworks as diagrams, typesetting to publishing-house standards. Digital first, hardcover on demand.",
                },
              ].map((stage) => (
                <li key={stage.n}>
                  <p className="font-display text-3xl font-bold text-accent mb-2">
                    {stage.n}
                  </p>
                  <p className="font-heading font-semibold text-foreground mb-2">
                    {stage.t}
                  </p>
                  <p className="text-sm text-muted-foreground font-body leading-snug">
                    {stage.d}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-12 text-sm text-muted-foreground font-body italic max-w-3xl">
              We are not the experts. We are the institution that gathers them,
              synthesizes their work, and ships it as a finished product worthy
              of a permanent shelf.
            </p>
          </div>
        </section>

        {/* Block 5 — Inside the bundle: 5-series grid */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container max-w-6xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-heading mb-4">
              The Library
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 leading-tight">
              5 curated series · 61 books
            </h2>

            <div className="space-y-16">
              {series.map((s: Series) => {
                const previewBooks = s.books.slice(0, previewCoversPerSeries);
                return (
                  <div key={s.id}>
                    <div className="grid md:grid-cols-12 gap-6 md:gap-8 mb-6 items-end">
                      <div className="md:col-span-5">
                        <p
                          className="text-xs uppercase tracking-[0.3em] font-heading mb-2"
                          style={{ color: s.palette.accent }}
                        >
                          Series {s.roman}
                        </p>
                        <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">
                          {s.name}
                        </h3>
                        <p className="text-muted-foreground font-body mb-3">
                          {s.tagline}
                        </p>
                        <p className="text-sm text-muted-foreground font-body">
                          {s.book_count} books · {s.total_pages.toLocaleString()} pages
                        </p>
                        <Link
                          to={`/series/${s.id}`}
                          className="inline-block mt-4 text-sm font-heading font-semibold text-primary hover:underline underline-offset-4"
                        >
                          See all {s.book_count} titles →
                        </Link>
                      </div>
                      <div className="md:col-span-7 grid grid-cols-4 gap-3">
                        {previewBooks.map((book) => (
                          <Link
                            key={book.id}
                            to={`/book/${book.slug}`}
                            className="transition-transform hover:-translate-y-1"
                          >
                            <BookCover
                              bookId={book.id}
                              variant="shelf"
                              className="!w-full shadow-md hover:shadow-lg transition-shadow"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Block 6 — Use Cases */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-5xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-heading mb-4">
              Who it's for
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 leading-tight">
              If you do work that compounds, the library is for you.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {USE_CASES.map((uc) => (
                <div
                  key={uc.audience}
                  className="p-6 bg-card border border-border rounded-2xl hover:border-accent/40 transition-colors"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-accent font-heading mb-3">
                    {uc.audience}
                  </p>
                  <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                    {uc.hook}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {uc.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Block 7 — Before/After */}
        <PlaceholderBlock
          block="Before / After"
          note="Workflow visualization: what an operator's week looks like before they have a Council-reviewed library on their shelf vs after. Visual block; design pass in a future session once we have real reader workflows to draw from."
        />

        {/* Block 8 — Bundle cross-sell */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container max-w-5xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-heading mb-4">
              Don't need all 61?
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Narrower bundles for narrower needs
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-12 max-w-2xl">
              Twenty profession bundles plus the $197 Operator's Master cover
              the same content in tighter scopes. Start where you need to start.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {crossSellBundles.map((bundle) => {
                const delta = bundle.retail_value - bundle.price;
                return (
                  <Link
                    key={bundle.id}
                    to={`/bundles/${bundle.id}`}
                    className="block p-6 bg-card border border-border rounded-2xl transition-all hover:-translate-y-1 hover:shadow-premium-hover hover:border-accent/40"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-heading mb-2">
                      {bundle.type === "master" ? "Master" : "Profession"}
                    </p>
                    <h3 className="font-display text-xl font-bold mb-3 leading-tight">
                      {bundle.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-2xl font-bold text-primary">
                        ${bundle.price}
                      </span>
                      <span className="text-xs text-muted-foreground line-through">
                        ${bundle.retail_value}
                      </span>
                    </div>
                    <p className="text-xs text-accent font-heading font-medium mt-1">
                      save ${delta}
                    </p>
                  </Link>
                );
              })}
            </div>
            {operatorMaster && (
              <p className="mt-8 text-sm text-muted-foreground font-body">
                The <Link to="/bundles/operator" className="text-primary font-heading font-semibold hover:underline underline-offset-4">Operator's Master Bundle</Link> ($197, 25 books) is the cold-traffic hero for solo operators who don't need Wealth or Profession depth.
              </p>
            )}
          </div>
        </section>

        {/* Block 9 — FAQ + Final CTA */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
              Frequently asked
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {FAQS.map((faq, i) => (
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

            <div className="mt-20 text-center bg-secondary text-secondary-foreground py-16 px-8 rounded-3xl">
              <Sparkles className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready for the full library?
              </h3>
              <p className="opacity-80 font-body mb-8 max-w-xl mx-auto">
                61 books. 15,420 pages. Every chapter Council-reviewed.
                14-day money-back. Instant digital access.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Button
                  size="lg"
                  className="font-heading bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 h-auto"
                >
                  Buy now — ${grandMaster.price}
                </Button>
                <p className="text-xs opacity-60">
                  $5,123 saved vs retail · 91% off
                </p>
              </div>
              <div className="flex items-center justify-center gap-x-6 gap-y-2 flex-wrap text-xs font-heading opacity-70">
                <span className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  Council of Experts Reviewed
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  14-day money-back
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  61 books · instant access
                </span>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm font-heading text-muted-foreground mb-4">
                Or get notified when checkout opens:
              </p>
              <EmailCapture
                source="master-bundle-footer"
                cta="Notify me at launch"
                customProperties={{ interest: "grand-master-bundle" }}
                className="max-w-md mx-auto"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
