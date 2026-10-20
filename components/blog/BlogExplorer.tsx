"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search, X } from "lucide-react";

type PostPreview = {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  author: string;
  readingMinutes: number;
};

export default function BlogExplorer({ posts }: { posts: PostPreview[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All articles");
  const categories = useMemo(() => ["All articles", ...new Set(posts.map((p) => p.category))], [posts]);
  const results = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("en");
    return posts.filter((post) => {
      const matchesCategory = category === "All articles" || post.category === category;
      const content = `${post.title} ${post.description} ${post.category}`.toLocaleLowerCase("en");
      return matchesCategory && (!needle || content.includes(needle));
    });
  }, [posts, query, category]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-5 border-y border-[#D7CDBF] py-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter journal articles by category">
          {categories.map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={value === category}
              onClick={() => setCategory(value)}
              className={`min-h-11 border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${value === category ? "border-charcoal bg-charcoal text-ivory" : "border-[#C9BFB1] text-charcoal hover:bg-beige"}`}
            >
              {value}
            </button>
          ))}
        </div>
        <div className="relative w-full max-w-sm">
          <label htmlFor="journal-search" className="mb-2 block text-xs font-semibold uppercase tracking-widest">Search journal</label>
          <Search size={17} aria-hidden="true" className="pointer-events-none absolute bottom-[15px] left-3 text-[#625B53]" />
          <input
            id="journal-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search topics"
            className="min-h-12 w-full border border-[#B9AEA0] bg-white py-3 pl-10 pr-10 text-sm text-charcoal"
          />
          {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="absolute bottom-0 right-0 flex h-12 w-11 items-center justify-center"><X size={17} aria-hidden="true" /></button>}
        </div>
      </div>
      <p className="mb-8 text-sm text-[#625B53]" role="status" aria-live="polite">{results.length} {results.length === 1 ? "article" : "articles"} found</p>
      {results.length ? (
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
          {results.map((post) => (
            <article key={post.slug} className="group min-w-0">
              <Link href={`/blog/${post.slug}`} className="block focus-visible:outline-offset-4">
                <div className="relative aspect-[4/5] overflow-hidden bg-beige">
                  <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw" className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]" />
                </div>
                <div className="mt-5 flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-wider text-[#82611C]">
                  <span>{post.category}</span><span aria-hidden="true">·</span><span>{post.readingMinutes} min read</span>
                </div>
                <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#625B53]">{post.description}</p>
                <span className="mt-5 inline-flex min-h-11 items-center gap-2 border-b border-charcoal text-xs font-semibold uppercase tracking-widest">Read article <ArrowUpRight size={15} aria-hidden="true" /></span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="border border-[#D7CDBF] bg-beige/40 px-6 py-14 text-center">
          <h2 className="font-display text-3xl">No articles match your search.</h2>
          <p className="mt-3 text-sm text-[#625B53]">Try another word or view all journal articles.</p>
          <button type="button" onClick={() => { setQuery(""); setCategory("All articles"); }} className="mt-6 min-h-11 border-b border-charcoal text-xs font-semibold uppercase tracking-widest">Clear filters</button>
        </div>
      )}
    </div>
  );
}
