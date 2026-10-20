import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/seo";

export default function Hero() {
  return (
    <section aria-labelledby="home-heading" className="relative overflow-hidden bg-ivory">
      <Container className="grid min-h-[620px] items-center gap-12 py-12 md:grid-cols-[1fr_0.92fr] md:py-20 xl:min-h-[780px]">
        <div className="relative z-10 order-2 md:order-1">
          <p className="eyebrow mb-6 text-[#82611C]">{siteConfig.city} · A place for every expression</p>
          <h1 id="home-heading" className="font-display text-[clamp(3.8rem,9vw,8.6rem)] leading-[0.9] tracking-[-0.045em] text-charcoal">
            Beauty begins <em className="font-normal">with you.</em>
          </h1>
          <div aria-hidden="true" className="gold-divider mt-8" />
          <p className="mt-7 max-w-lg text-base leading-8 text-[#625B53] md:text-lg">
            An inclusive space for considered hair, colour and grooming. Thoughtful consultations, individual expression and care that fits your life.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/booking" showArrow>Book an appointment</Button>
            <Button href="/services" variant="outline">Explore our services</Button>
          </div>
        </div>
        <div className="relative order-1 min-h-[380px] md:order-2 md:min-h-[580px]">
          {/* EDIT: Replace placeholder with licensed salon photography. */}
          <div className="absolute inset-0 overflow-hidden bg-beige">
            <Image src="https://images.unsplash.com/photo-1560066984-138dadb4c035" alt="Light-filled contemporary salon with styling chairs" fill priority fetchPriority="high" sizes="(max-width: 767px) 100vw, 46vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-4 left-4 bg-ivory px-5 py-4 shadow-soft sm:left-8">
            <span className="block text-[0.6rem] uppercase tracking-[0.2em] text-[#625B53]">An experience</span>
            <span className="font-display text-3xl leading-tight">Made personal.</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
