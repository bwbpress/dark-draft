import type { MetadataRoute } from "next";
import { getAllBooks, SERIES } from "./lib/books";
import { SITE_URL } from "./lib/site-config";

// Required for `output: "export"` — these special routes need an explicit
// static hint since Next 16 no longer infers it automatically.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/books`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/connect`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const bookRoutes: MetadataRoute.Sitemap = getAllBooks().map((book) => ({
    url: `${SITE_URL}/books/${book.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const seriesRoutes: MetadataRoute.Sitemap = SERIES.map((series) => ({
    url: `${SITE_URL}/series/${series.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...bookRoutes, ...seriesRoutes];
}
