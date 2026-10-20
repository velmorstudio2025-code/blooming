import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { posts } from "@/data/posts";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/services", "/shop", "/before-after", "/testimonials",
    "/about", "/booking", "/contact", "/blog", "/privacy", "/terms"
  ];

  // EDIT: Include lastModified only when a real update/publication date is tracked.
  const staticRoutes: MetadataRoute.Sitemap = paths.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/services" ? 0.9 : 0.6
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    changeFrequency: "monthly",
    priority: 0.7
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    ...(post.updatedAt || post.publishedAt
      ? { lastModified: new Date(post.updatedAt || post.publishedAt!) }
      : {}),
    changeFrequency: "monthly",
    priority: 0.7
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
