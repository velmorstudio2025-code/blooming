import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import BlogExplorer from "@/components/blog/BlogExplorer";
import { posts, type BlogPost } from "@/data/posts";
import { createMetadata } from "@/lib/seo";

export const dynamic = "force-static";
export const metadata: Metadata = createMetadata({
  title: "The Journal: Hair, Care & Personal Style",
  description: "Explore thoughtful salon guides, practical colour aftercare and everyday grooming advice. Read our inclusive hair and personal-care journal.",
  path: "/blog"
});

function readingMinutes(post: BlogPost) {
  const words = post.sections.flatMap((s) => s.paragraphs).join(" ").trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 220));
}

export default function BlogPage() {
  const [featured] = posts;
  const previews = posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    category: post.category,
    image: post.image,
    imageAlt: post.imageAlt,
    author: post.author,
    readingMinutes: readingMinutes(post)
  }));

  return (
    <>
      <header className="bg-beige py-20 md:py-28">
        <Container>
          <p className="eyebrow mb-5 text-[#76591F]">Notes on considered care</p>
          <h1 className="heading-display max-w-5xl">The <em>journal.</em></h1>
          <p className="body-large mt-8 max-w-2xl">Thoughtful perspectives on hair, everyday rituals and personal expression—written for every guest.</p>
        </Container>
      </header>

      {featured && (
        <section className="section-spacing-sm" aria-labelledby="featured-journal-heading">
          <Container>
            <div className="mb-6 flex items-center gap-5"><span className="eyebrow text-[#76591F]">Editor's selection</span><div className="h-px flex-1 bg-[#D7CDBF]" /></div>
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <Link href={`/blog/${featured.slug}`} className="group relative block aspect-[5/4] overflow-hidden bg-beige">
                <Image src={featured.image} alt={featured.imageAlt} fill sizes="(max-width:1023px) 100vw, 50vw" className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]" />
              </Link>
              <div>
                <p className="eyebrow text-[#76591F]">{featured.category} · {readingMinutes(featured)} min read</p>
                <h2 id="featured-journal-heading" className="mt-5 font-display text-4xl leading-tight md:text-6xl">{featured.title}</h2>
                <p className="mt-6 text-base leading-8 text-[#625B53]">{featured.description}</p>
                <Link href={`/blog/${featured.slug}`} className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-charcoal text-xs font-semibold uppercase tracking-widest">Read the story <ArrowUpRight size={16} aria-hidden="true" /></Link>
              </div>
            </div>
          </Container>
        </section>
      )}

      <section className="section-spacing-sm" aria-labelledby="all-journal-heading">
        <Container>
          <h2 id="all-journal-heading" className="mb-8 font-display text-4xl md:text-5xl">Explore every story</h2>
          <BlogExplorer posts={previews} />
        </Container>
      </section>
    </>
  );
}
