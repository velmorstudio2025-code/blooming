import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function InteriorTeaser() {
  return (
    <section aria-labelledby="salon-space-heading" className="bg-charcoal py-20 text-ivory lg:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow mb-6 text-[#D8BF8B]">A moment for yourself</p>
          <h2 id="salon-space-heading" className="heading-section">Care begins <em>with calm.</em></h2>
          <p className="mt-7 max-w-md text-base leading-8 text-[#D6D0C7]">A salon visit can be more than a service. We imagine a welcoming moment to settle in, ask questions and enjoy thoughtful attention.</p>
          <div className="mt-9"><Button href="/about" variant="ghost" className="border border-[#D8BF8B] text-ivory hover:bg-[#38332E]" showArrow>Discover the story</Button></div>
        </div>
        <div className="relative aspect-[5/4] overflow-hidden bg-[#37312C]">
          {/* EDIT: Editorial placeholder, not a photograph of the actual premises. */}
          <Image src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6" alt="Illustrative contemporary salon interior" fill sizes="(max-width: 767px) 100vw, 55vw" className="object-cover" />
          <span className="absolute bottom-3 right-3 bg-charcoal/85 px-3 py-2 text-xs text-ivory">Illustrative imagery</span>
        </div>
      </Container>
    </section>
  );
}
