import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";
import JsonLd from "@/components/seo/JsonLd";
import { posts, type BlogPost } from "@/data/posts";
import { createMetadata } from "@/lib/seo";
import { blogPostSchema, breadcrumbSchema, faqSchema } from "@/lib/jsonld";

export const dynamic = "force-static";
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((entry) => entry.slug === slug);
  if (!post) return { title: "Article not found", robots: { index: false } };
  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: "/opengraph-image",
    type: "article",
    publishedTime: post.publishedAt ?? undefined,
    modifiedTime: post.updatedAt ?? undefined
  });
}

function readTime(post: BlogPost) {
  return Math.max(1, Math.ceil(post.sections.flatMap((section) => section.paragraphs).join(" ").trim().split(/\s+/).length / 220));
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((entry) => entry.slug === slug);
  if (!post) notFound();
  const related = posts.filter((entry) => entry.slug !== slug).slice(0, 2);
  const structuredData: Record<string, unknown>[] = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Journal", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` }
    ])
  ];
  // EDIT: Set a real publication date in data/posts.ts before emitting BlogPosting.
  if (post.publishedAt) {
    structuredData.push(blogPostSchema({
      title: post.title,
      description: post.description,
      slug: post.slug,
      image: post.image,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt || post.publishedAt,
      authorName: post.author
    }));
  }
  // FAQ schema describes questions actually visible on this page.
  if (post.faqs.length) structuredData.push(faqSchema(post.faqs));

  return (
    <>
      <article>
        <header className="bg-beige py-16 md:py-24">
          <Container narrow>
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-2 text-xs text-[#625B53]">
              <Link href="/" className="underline underline-offset-4">Home</Link><span aria-hidden="true">/</span>
              <Link href="/blog" className="underline underline-offset-4">Journal</Link><span aria-hidden="true">/</span>
              <span aria-current="page">{post.category}</span>
            </nav>
            <p className="eyebrow text-[#76591F]">{post.category} · {readTime(post)} min read</p>
            <h1 className="heading-display mt-6 !text-[clamp(3.25rem,7vw,6.5rem)]">{post.title}</h1>
            <p className="body-large mt-8">{post.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#C9BFB1] pt-5 text-xs text-[#625B53]">
              <span>By {post.author}</span>
              {post.publishedAt && <time dateTime={post.publishedAt}>Published {new Intl.DateTimeFormat("en-IN", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${post.publishedAt}T00:00:00Z`))}</time>}
            </div>
          </Container>
        </header>

        <Container>
          <div className="relative my-10 aspect-[16/9] overflow-hidden bg-beige md:my-16">
            <Image src={post.image} alt={post.imageAlt} fill priority sizes="(max-width: 1440px) 100vw, 1440px" className="object-cover" />
          </div>
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
            <aside aria-label="Table of contents" className="lg:self-start lg:sticky lg:top-28">
              <h2 className="eyebrow mb-5 text-[#76591F]">On this page</h2>
              <ol className="space-y-3 border-l border-[#D7CDBF] pl-4">
                {post.sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="text-sm leading-6 text-[#625B53] underline-offset-4 hover:underline">{section.heading}</a></li>)}
                {post.faqs.length > 0 && <li><a href="#article-faqs" className="text-sm text-[#625B53] underline-offset-4 hover:underline">Questions and answers</a></li>}
              </ol>
            </aside>
            <div className="min-w-0 pb-20">
              {post.sections.map((section) => (
                <section id={section.id} key={section.id} aria-labelledby={`${section.id}-heading`} className="mb-12 scroll-mt-28">
                  <h2 id={`${section.id}-heading`} className="mb-6 font-display text-4xl leading-tight md:text-5xl">{section.heading}</h2>
                  <div className="space-y-6">{section.paragraphs.map((paragraph, index) => <p key={index} className="text-base leading-8 text-[#4E4841]">{paragraph}</p>)}</div>
                </section>
              ))}
              {post.faqs.length > 0 && <section id="article-faqs" aria-labelledby="article-faqs-heading" className="scroll-mt-28 border-t border-[#D7CDBF] pt-12"><h2 id="article-faqs-heading" className="mb-8 font-display text-4xl">Frequently asked questions</h2><Accordion items={post.faqs} /></section>}
              <div className="mt-14 border-y border-[#D7CDBF] py-7">
                <p className="mb-4 text-sm text-[#625B53]">Explore personal care services or discuss your goals with our team.</p>
                <div className="flex flex-wrap gap-6"><Link href="/services" className="inline-flex min-h-11 items-center gap-2 border-b border-charcoal text-xs font-semibold uppercase tracking-widest">Explore services <ArrowUpRight size={15} aria-hidden="true" /></Link><Link href="/contact" className="inline-flex min-h-11 items-center gap-2 border-b border-charcoal text-xs font-semibold uppercase tracking-widest">Ask a question <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
              </div>
            </div>
          </div>
        </Container>
      </article>
      <section className="bg-beige py-16" aria-labelledby="related-posts-heading">
        <Container>
          <h2 id="related-posts-heading" className="font-display text-4xl">Continue reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {related.map((entry) => <Link key={entry.slug} href={`/blog/${entry.slug}`} className="group flex min-h-36 flex-col justify-between border border-[#C9BFB1] bg-ivory p-6"><span className="eyebrow text-[#76591F]">{entry.category}</span><span className="mt-4 flex items-end justify-between gap-4 font-display text-2xl leading-tight md:text-3xl">{entry.title}<ArrowUpRight size={21} className="shrink-0 text-[#82611C]" aria-hidden="true" /></span></Link>)}
          </div>
          <Link href="/blog" className="mt-8 inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase tracking-widest"><ArrowLeft size={16} aria-hidden="true" /> All journal articles</Link>
        </Container>
      </section>
      <JsonLd data={structuredData} />
    </>
  );
}
