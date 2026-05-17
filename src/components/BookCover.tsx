/**
 * BookCover — programmatic SVG cover, one component for all 61 books.
 *
 * Reads the book's series palette (background / text / accent) from
 * `catalog.json` via useCatalog. No external image requests — every cover
 * is inline SVG, scales sharply at any size, ships in the bundle with no
 * network round-trip.
 *
 * Variants control intrinsic display width; aspect ratio (5:8) is fixed
 * by the SVG viewBox, so height is always auto. Apply `!w-full` (or any
 * `w-*` override) via className to fill a grid cell.
 *
 * Series ornament — a subtle accent mark at top-right of the cover,
 * different shape per series, drawn in the series accent color. Keeps the
 * brand cohesive (same palette, same layout, same wordmark) while still
 * giving each series a recognizable visual signature on a crowded shelf.
 */

import { useMemo } from "react";

import { useCatalog } from "@/hooks/useCatalog";
import type { SeriesId } from "@/types/catalog";

export type BookCoverVariant = "shelf" | "card" | "hero";

export interface BookCoverProps {
  readonly bookId: string;
  readonly variant?: BookCoverVariant;
  readonly className?: string;
}

const VARIANT_CLASSES: Record<BookCoverVariant, string> = {
  shelf: "w-20 md:w-24",
  card: "w-40 md:w-48",
  hero: "w-60 md:w-80",
};

/**
 * Greedy word-wrap on space boundaries, capped at maxLines (last line gets
 * an ellipsis if more words remain). SVG `<text>` doesn't auto-wrap, so we
 * split into lines ourselves and emit one `<text>` per line.
 */
const wrapText = (
  text: string,
  maxCharsPerLine: number,
  maxLines = 99
): readonly string[] => {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    if (!current) {
      current = word;
    } else if ((current + " " + word).length <= maxCharsPerLine) {
      current += " " + word;
    } else {
      lines.push(current);
      if (lines.length >= maxLines) {
        const last = lines[maxLines - 1];
        lines[maxLines - 1] = last.replace(/\s\S+$/, "") + "…";
        return lines;
      }
      current = word;
    }
  }
  if (current && lines.length < maxLines) lines.push(current);
  return lines;
};

interface OrnamentProps {
  readonly seriesId: SeriesId;
  readonly color: string;
}

/**
 * Series-specific decorative mark at top-right of the cover.
 *   foundations         — solid triangle (foundation / base)
 *   ai-powered-operator — three concentric rings (system / orbit)
 *   profession          — two parallel verticals (pillars / professional bearing)
 *   wealth              — rotated square / diamond (value / gem)
 *   skills              — chevron pointing right (leverage / forward motion)
 */
const Ornament = ({ seriesId, color }: OrnamentProps) => {
  switch (seriesId) {
    case "foundations":
      return <polygon points="450,55 472,95 428,95" fill={color} />;
    case "ai-powered-operator":
      return (
        <g fill="none" stroke={color} strokeWidth="2">
          <circle cx="450" cy="78" r="7" />
          <circle cx="450" cy="78" r="14" />
          <circle cx="450" cy="78" r="21" />
        </g>
      );
    case "profession":
      return (
        <g fill={color}>
          <rect x="440" y="55" width="3.5" height="44" />
          <rect x="456" y="55" width="3.5" height="44" />
        </g>
      );
    case "wealth":
      return <polygon points="450,55 475,80 450,105 425,80" fill={color} />;
    case "skills":
      return (
        <polyline
          points="430,58 462,80 430,102"
          fill="none"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
  }
};

export function BookCover({ bookId, variant = "card", className = "" }: BookCoverProps) {
  const { bookById, seriesOfBook } = useCatalog();
  const book = bookById(bookId);
  const series = seriesOfBook(bookId);

  const titleLines = useMemo(
    () => (book ? wrapText(book.title, 16, 3) : []),
    [book]
  );
  const subtitleLines = useMemo(
    () => (book ? wrapText(book.subtitle, 32, 2) : []),
    [book]
  );

  if (!book || !series) return null;

  const { background, text, accent } = series.palette;
  const seriesNameSpaced = series.name.toUpperCase().split("").join(" ");

  const titleFontSize = titleLines.length >= 3 ? 38 : 46;
  const titleStartY = 260;
  const titleLineHeight = titleFontSize * 1.05;
  const subtitleStartY = titleStartY + titleLines.length * titleLineHeight + 36;

  return (
    <svg
      viewBox="0 0 500 800"
      role="img"
      aria-label={`${book.title} — ${series.name} series book cover`}
      className={`${VARIANT_CLASSES[variant]} h-auto block ${className}`}
    >
      <rect width="500" height="800" fill={background} />

      <line x1="40" y1="50" x2="240" y2="50" stroke={accent} strokeWidth="1.5" />

      <text
        x="40"
        y="82"
        fill={text}
        fontFamily="Montserrat, system-ui, sans-serif"
        fontSize="13"
        fontWeight="600"
        letterSpacing="2"
      >
        {seriesNameSpaced}
      </text>

      <Ornament seriesId={series.id} color={accent} />

      <text
        x="40"
        y="190"
        fill={text}
        fontFamily="Playfair Display, Georgia, serif"
        fontSize="52"
        fontWeight="700"
        letterSpacing="4"
      >
        № {book.id}
      </text>

      {titleLines.map((line, i) => (
        <text
          key={`title-${i}`}
          x="40"
          y={titleStartY + i * titleLineHeight}
          fill={text}
          fontFamily="Playfair Display, Georgia, serif"
          fontSize={titleFontSize}
          fontWeight="700"
        >
          {line}
        </text>
      ))}

      {subtitleLines.map((line, i) => (
        <text
          key={`subtitle-${i}`}
          x="40"
          y={subtitleStartY + i * 24}
          fill={text}
          fontFamily="Source Sans 3, system-ui, sans-serif"
          fontSize="18"
          fontWeight="400"
          opacity="0.78"
        >
          {line}
        </text>
      ))}

      <line x1="40" y1="700" x2="240" y2="700" stroke={accent} strokeWidth="1.5" />

      <text
        x="40"
        y="724"
        fill={text}
        fontFamily="Montserrat, system-ui, sans-serif"
        fontSize="10"
        fontWeight="600"
        letterSpacing="1.8"
        opacity="0.7"
      >
        COUNCIL OF EXPERTS REVIEWED
      </text>

      <text
        x="40"
        y="760"
        fill={text}
        fontFamily="Montserrat, system-ui, sans-serif"
        fontSize="12"
        fontWeight="700"
        letterSpacing="2.5"
      >
        THE KNOCKOUT ACADEMY
      </text>
    </svg>
  );
}
