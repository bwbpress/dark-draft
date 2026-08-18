import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site-config";

// Required for `output: "export"` — these special routes need an explicit
// static hint since Next 16 no longer infers it automatically.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
