import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BeforeAfterSlider from "@/components/media/BeforeAfterSlider";
import { beforeAfterNotice, getApprovedTransformations } from "@/data/beforeAfter";
import { createMetadata } from "@/lib/seo";

export const dynamic = "force-static";
export const metadata: Metadata = createMetadata({
  title: "Before & After Gallery",
  description: "Explore documented hair and styling transformations shared with consent. Individual results may vary.",
  path: "/before-after"
});

export default function BeforeAfterPage() {
  const items = getApprovedTransformations();

  return (
    <>
      <header className="bg-beige py-20 md:py-28">
        <Container>
          <p className="eyebrow mb-5 text-[#76591F]">The work, thoughtfully documented</p>
          <h1 className="heading-display max-w-5xl">Every detail <em>matters.</em></h1>
          <p className="body-large mt-8 max-w-2xl">Explore genuine service outcomes, presented with care, consent and realistic expectations.</p>
        </Container>
      </header>
      <section className="section-spacing" aria-labelledby="gallery-heading">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5 border-b border-[#D7CDBF] pb-7">
            <h2 id="gallery-heading" className="heading-section">The transformation edit</h2>
            <p className="max-w-lg text-sm leading-7 text-[#625B53]">{beforeAfterNotice}</p>
          </div>
          {items.length > 0 ? (
            <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
              {items.map((item) => (
                <BeforeAfterSlider
                  key={item.id}
                  title={item.title}
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                  beforeAlt={item.beforeAlt}
                  afterAlt={item.afterAlt}
                  description={item.description}
                />
              ))}
            </div>
          ) : (
            <div className="border border-[#D7CDBF] bg-white px-7 py-16 text-center md:px-16">
              <p className="eyebrow mb-4 text-[#76591F]">Coming into focus</p>
              <h3 className="font-display text-4xl md:text-5xl">Real work deserves real documentation.</h3>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-[#625B53]">Our comparison gallery is reserved for genuine, approved photographs. No stock images are presented as client results. Until those images are available, discover the services or enquire about an appointment.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="/services" variant="outline">Explore Services</Button>
                <Button href="/booking" showArrow>Enquire to Book</Button>
              </div>
            </div>
          )}
          <p className="mt-8 text-xs leading-6 text-[#625B53]">Image pairs must be photographed with comparable framing and lighting. No results are guaranteed.</p>
        </Container>
      </section>
      <section className="bg-charcoal py-16 text-ivory" aria-label="Discuss your vision">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div><h2 className="font-display text-4xl md:text-5xl">Your next chapter starts with a conversation.</h2><p className="mt-3 text-sm text-[#D6D0C7]">Bring your references, questions and preferences.</p></div>
          <Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center border border-[#D8BF8B] px-6 text-xs font-semibold uppercase tracking-widest text-[#F8F5EF] hover:bg-white/10">Talk to us →</Link>
        </Container>
      </section>
    </>
  );
}
