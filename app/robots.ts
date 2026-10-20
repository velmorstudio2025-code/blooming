import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Do not invite indexing when the domain is a setup placeholder.
  const configured =
    siteConfig.url !== "https://example.com" &&
    !siteConfig.url.includes("[");

  return {
    rules: configured
      ? {
          userAgent: "*",
          allow: "/",
          disallow: ["/thank-you", "/api/", "/_next/"]
        }
      : { userAgent: "*", disallow: "/" },
    sitemap: absoluteUrl("/sitemap.xml")
  };
}
