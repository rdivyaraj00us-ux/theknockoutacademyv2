/**
 * SeriesHub — generic template for all 5 series.
 *
 * Pulls series data from catalog.json (palette, tagline, total_pages, books)
 * and renders a hero in the series treatment plus a grid of book cards
 * linking to the universal book sales page.
 */

import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookCover } from "@/components/BookCover";
import NotFound from "@/pages/NotFound";
import { useCatalog } from "@/hooks/useCatalog";
import type { SeriesId } from "@/types/catalog";

const VALID_SERIES: readonly SeriesId[] = [
  "foundations",
  "ai-powered-operator",
  "profession",
  "wealth",
  "skills",
];

const isValidSeriesId = (s: string | undefined): s is SeriesId =>
  s !== undefined && (VALID_SERIES as readonly string[]).includes(s);

export default function SeriesHub() {
  const { seriesId } = useParams<{ seriesId: string }>();
  const { seriesById } = useCatalog();

  if (!isValidSeriesId(seriesId)) return <NotFound />;
  const series = seriesById(seriesId);
  if (!series) return <NotFound />;

  const { palette, name, tagline, total_pages, book_count, books, roman } = series;

  return (
    <>
      <Helmet>
        <title>{`${name} — TheKnockoutAcademy`}</title>
        <meta
          name="description"
          content={`${name}: ${tagline} ${book_count} books across ${total_pages.toLocaleString()} pages, every chapter reviewed by a named Council of Experts.`}
        />
        <link
          rel="canonical"
          href={`https://theknockoutacademy.com/series/${seriesId}`}
        />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        {/* Series hero — uses the series palette as background */}
        <section
          style={{ backgroundColor: palette.background, color: palette.text }}
          className="py-20 md:py-32"
        >
          <div className="container max-w-5xl">
            <p
              className="text-xs font-heading uppercase tracking-[0.3em] mb-6"
              style={{ color: palette.accent }}
            >
              Series {roman}
            </p>
            <h1
              className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.05]"
              style={{ color: palette.text }}
            >
              {name}
            </h1>
            <p
              className="text-xl md:text-2xl font-body mb-10 max-w-2xl"
              style={{ color: palette.text, opacity: 0.78 }}
            >
              {tagline}
            </p>
            <div
              className="flex flex-wrap gap-6 text-sm font-heading"
              style={{ color: palette.text, opacity: 0.7 }}
            >
              <span>{book_count} books</span>
              <span aria-hidden="true">·</span>
              <span>{total_pages.toLocaleString()} pages</span>
              <span aria-hidden="true">·</span>
              <span>Council of Experts Reviewed</span>
            </div>
          </div>
        </section>

        {/* Books grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-6xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-foreground">
              All {book_count} titles
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {books.map((book) => (
                <Link
                  key={book.id}
                  to={`/book/${book.slug}`}
                  className="group flex flex-col gap-4 transition-transform hover:-translate-y-1"
                >
                  <div className="shadow-premium group-hover:shadow-premium-hover transition-shadow rounded-sm overflow-hidden">
                    <BookCover bookId={book.id} variant="card" className="!w-full" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors text-base leading-tight mb-1">
                      № {book.id} — {book.title}
                    </p>
                    <p className="text-sm font-body text-muted-foreground mb-2 leading-snug">
                      {book.subtitle}
                    </p>
                    <p
                      className="text-sm font-heading font-medium"
                      style={{ color: palette.accent }}
                    >
                      ${book.price_digital} digital · ${book.price_hardcover} hardcover
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
