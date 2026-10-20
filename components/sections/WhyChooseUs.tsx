import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="our-philosophy-heading" className="bg-beige py-20 lg:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-2 lg:gap-24">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#D6CCBC]">
          {/* EDIT: Replace with an authentic interior or stylist photograph. */}
          <Image src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f" alt="Professional salon interior with warm, considered details" fill sizes="(max-width: 767px) 100vw, 45vw" className="object-cover" />
        </div>
        <div>
          <p className="eyebrow mb-6 text-[#82611C]">The philosophy</p>
          <h2 id="our-philosophy-heading" className="heading-section">No formula. <em>Just you.</em></h2>
          <div className="gold-divider mt-7" />
          <p className="mt-7 text-base leading-8 text-[#625B53]">The most rewarding salon experiences begin with listening. Your texture, your routine and your sense of self guide the conversation, rather than a predetermined ideal.</p>
          <p className="mt-5 text-base leading-8 text-[#625B53]">We believe thoughtful care makes space for honest expectations, practical advice and a look that feels like your own.</p>
          <div className="mt-9"><Button href="/about" variant="outline" showArrow>Our approach</Button></div>
        </div>
      </Container>
    </section>
  );
}
