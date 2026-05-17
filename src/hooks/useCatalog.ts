import { useMemo } from "react";

import catalogData from "@/data/catalog.json";
import type {
  Book,
  Bundle,
  Catalog,
  Series,
  SeriesId,
} from "@/types/catalog";

const catalog: Catalog = catalogData as Catalog;

export interface UseCatalogResult {
  readonly catalog: Catalog;
  readonly series: readonly Series[];
  readonly bundles: readonly Bundle[];
  readonly books: readonly Book[];
  readonly bookById: (id: string) => Book | undefined;
  readonly bookBySlug: (slug: string) => Book | undefined;
  readonly seriesById: (id: SeriesId) => Series | undefined;
  readonly seriesOfBook: (bookId: string) => Series | undefined;
  readonly bundleById: (id: string) => Bundle | undefined;
  readonly booksInSeries: (id: SeriesId) => readonly Book[];
  readonly booksInBundle: (bundleId: string) => readonly Book[];
}

/**
 * Read-only catalog accessor. Loads the canonical catalog.json once and
 * memoizes lookup maps. Returns helpers for the common access patterns
 * (by id, by slug, by series, by bundle).
 *
 * `booksInBundle` returns all 61 books for the Grand Master Bundle and
 * an empty array for any bundle still in `pending-review` — Sessions 3/4
 * page-generation should guard on `composition_status === "locked"`.
 */
export function useCatalog(): UseCatalogResult {
  return useMemo(() => {
    const allBooks: Book[] = catalog.series.flatMap((s) => [...s.books]);

    const bookById = new Map<string, Book>(allBooks.map((b) => [b.id, b]));
    const bookBySlug = new Map<string, Book>(allBooks.map((b) => [b.slug, b]));
    const seriesById = new Map<SeriesId, Series>(
      catalog.series.map((s) => [s.id, s])
    );
    const seriesByBookId = new Map<string, Series>();
    for (const series of catalog.series) {
      for (const book of series.books) {
        seriesByBookId.set(book.id, series);
      }
    }
    const bundleById = new Map<string, Bundle>(
      catalog.bundles.map((b) => [b.id, b])
    );

    return {
      catalog,
      series: catalog.series,
      bundles: catalog.bundles,
      books: allBooks,
      bookById: (id) => bookById.get(id),
      bookBySlug: (slug) => bookBySlug.get(slug),
      seriesById: (id) => seriesById.get(id),
      seriesOfBook: (bookId) => seriesByBookId.get(bookId),
      bundleById: (id) => bundleById.get(id),
      booksInSeries: (id) => seriesById.get(id)?.books ?? [],
      booksInBundle: (bundleId) => {
        const bundle = bundleById.get(bundleId);
        if (!bundle) return [];
        if (bundle.book_ids === "all") return allBooks;
        const out: Book[] = [];
        for (const id of bundle.book_ids) {
          const book = bookById.get(id);
          if (book) out.push(book);
        }
        return out;
      },
    };
  }, []);
}
