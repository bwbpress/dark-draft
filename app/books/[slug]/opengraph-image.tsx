import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getAllBooks, getBookBySlug, getSeriesBySlug } from "../../lib/books";
import { SITE_NAME } from "../../lib/site-config";

export const alt = "Book cover";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllBooks().map((book) => ({ slug: book.slug }));
}

const COLORS = {
  background: "#0a0714",
  surface: "#140f24",
  foreground: "#f5f5f7",
  pink: "#ff2e9a",
  blue: "#4da6ff",
  muted: "#9ca3af",
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  const [orbitronBold, interRegular, interSemiBold] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/Orbitron-Bold.woff")),
    readFile(join(process.cwd(), "assets/fonts/Inter-Regular.woff")),
    readFile(join(process.cwd(), "assets/fonts/Inter-SemiBold.woff")),
  ]);

  const fonts = [
    { name: "Orbitron", data: orbitronBold, style: "normal" as const, weight: 700 as const },
    { name: "Inter", data: interRegular, style: "normal" as const, weight: 400 as const },
    { name: "Inter", data: interSemiBold, style: "normal" as const, weight: 600 as const },
  ];

  if (!book) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: COLORS.background,
            fontFamily: "Orbitron",
            fontSize: 56,
            color: COLORS.foreground,
          }}
        >
          {SITE_NAME}
        </div>
      ),
      { ...size, fonts }
    );
  }

  const series = book.seriesSlug ? getSeriesBySlug(book.seriesSlug) : undefined;

  const coverMimeType = book.coverImage.endsWith(".png") ? "image/png" : "image/jpeg";
  const coverSrc = book.coverIsPlaceholder
    ? null
    : `data:${coverMimeType};base64,${await readFile(
        join(process.cwd(), "public", book.coverImage),
        "base64"
      )}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: 64,
          background: COLORS.background,
          backgroundImage: `radial-gradient(circle at 15% 25%, rgba(255,46,154,0.25), transparent 45%), radial-gradient(circle at 85% 80%, rgba(77,166,255,0.2), transparent 45%)`,
        }}
      >
        {/* Cover, wrapped in a gradient "border" matching the site's GlowPanel treatment */}
        <div
          style={{
            display: "flex",
            width: 335,
            height: 502,
            flexShrink: 0,
            borderRadius: 16,
            padding: 3,
            background: `linear-gradient(135deg, ${COLORS.pink}, ${COLORS.blue})`,
          }}
        >
          {coverSrc ? (
            <img
              src={coverSrc}
              width={310}
              height={496}
              style={{ borderRadius: 14, objectFit: "cover" }}
            />
          ) : (
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                borderRadius: 14,
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                background: `linear-gradient(135deg, ${COLORS.surface}, #1a1030)`,
              }}
            >
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: 22,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  color: COLORS.foreground,
                }}
              >
                Cover
                {"\n"}Coming Soon
              </span>
            </div>
          )}
        </div>

        {/* Title block */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, height: 502 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {series && (
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: 22,
                  letterSpacing: 6,
                  textTransform: "uppercase",
                  color: COLORS.pink,
                }}
              >
                {series.name}
                {book.seriesPosition && book.seriesPosition >= 1 ? ` — Book ${book.seriesPosition}` : ""}
              </span>
            )}
            <span
              style={{
                fontFamily: "Orbitron",
                fontWeight: 700,
                fontSize: 60,
                lineHeight: 1.15,
                color: COLORS.foreground,
              }}
            >
              {book.title}
            </span>
            <span
              style={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: 22,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: COLORS.blue,
              }}
            >
              {book.status}
              {book.releaseDate ? ` · ${book.releaseDate}` : ""}
            </span>
          </div>

          <span
            style={{
              display: "flex",
              marginTop: "auto",
              fontFamily: "Orbitron",
              fontWeight: 700,
              fontSize: 26,
              letterSpacing: 2,
              color: COLORS.muted,
            }}
          >
            {SITE_NAME.toUpperCase()}
          </span>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
