import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { posts } from "@/data/posts";

export default function BlogTeaser() {
  return (
    <Section id="journal" eyebrow="The journal" title="A little knowledge goes a long way." description="Considered notes on hair, care and personal expression, written to help you make informed choices.">
      <div className="grid gap-8 md:grid-cols-3">
        {posts.slice(0, 3).map((post) => (
          <Card key={post.slug} title={post.title} description={post.description} category={post.category} meta={post.author} image={post.image} imageAlt={post.imageAlt} href={`/blog/${post.slug}`} />
        ))}
      </div>
      <div className="mt-12 text-center"><Button href="/blog" variant="outline" showArrow>Read the journal</Button></div>
    </Section>
  );
}
