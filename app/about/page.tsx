import type { Metadata } from "next";
import Image from "next/image";
import { HeartHandshake, MessageCircle, Sparkles, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { createMetadata, siteConfig } from "@/lib/seo";

export const dynamic = "force-static";
export const metadata: Metadata = createMetadata({
  title: "About Our Salon",
  description: "Explore our inclusive salon philosophy, considered approach to hair and grooming, and commitment to personal expression.",
  path: "/about"
});

const principles = [
  { title: "Individual first", text: "An attentive consultation should make space for personal preferences, hair texture and daily routine.", Icon: HeartHandshake },
  { title: "Open conversation", text: "Questions, inspiration photographs and service expectations belong at the start of every appointment.", Icon: MessageCircle },
  { title: "Thoughtful finishes", text: "A considered result is one you understand, enjoy and feel comfortable maintaining.", Icon: Sparkles },
  { title: "Care and respect", text: "Every salon environment should take hygiene, comfort, informed consent and guest dignity seriously.", Icon: ShieldCheck }
];

export default function AboutPage() {
  return (
    <>
      <header className="bg-beige py-20 md:py-28">
        <Container>
          <p className="eyebrow mb-5 text-[#76591F]">Our philosophy</p>
          <h1 className="heading-display max-w-5xl">A space to feel <em>yourself.</em></h1>
          <p className="body-large mt-8 max-w-2xl">A considered approach to hair, beauty and grooming, shaped by individuality rather than expectations.</p>
        </Container>
      </header>

      <section aria-labelledby="story-heading" className="section-spacing">
        <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow mb-5 text-[#76591F]">The idea behind the experience</p>
            <h2 id="story-heading" className="heading-section">Beauty feels better when it feels personal.</h2>
            <div aria-hidden="true" className="gold-divider mt-8" />
            <p className="mt-8 text-base leading-8 text-[#625B53]">At {siteConfig.name}, the guiding idea is simple: good salon care begins by listening. Personal style is not confined to categories or trends. It is shaped by your preferences, natural features and the way you choose to express yourself.</p>
            <p className="mt-5 text-base leading-8 text-[#625B53]">The experience we aim to communicate is calm, respectful and collaborative. From an initial discussion to finishing guidance, every step should help you make informed choices with confidence.</p>
            <p className="mt-5 text-sm leading-7 text-[#625B53]">This is proposed brand copy. EDIT: Replace with the salon founder's verified story, values and history before publication.</p>
            <div className="mt-9"><Button href="/services" showArrow>Explore Services</Button></div>
          </div>
          <figure>
            <div className="relative aspect-[4/5] overflow-hidden bg-beige">
              <Image src="https://images.unsplash.com/photo-1560066984-138dadb4c035" alt="Illustrative professional salon styling environment" fill sizes="(max-width:767px) 100vw, 50vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 text-xs text-[#625B53]">Editorial stock photograph; not the salon's actual premises or team.</figcaption>
          </figure>
        </Container>
      </section>

      <section aria-labelledby="principles-heading" className="bg-white py-20 md:py-28">
        <Container>
          <p className="eyebrow mb-5 text-[#76591F]">What guides us</p>
          <h2 id="principles-heading" className="heading-section max-w-3xl">Considered in every detail.</h2>
          <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ title, text, Icon }, index) => (
              <article key={title} className="border-t border-[#C6A664] pt-6">
                <div className="flex items-center justify-between"><Icon size={24} aria-hidden="true" className="text-[#82611C]" /><span className="text-xs text-[#625B53]">0{index + 1}</span></div>
                <h3 className="mt-7 font-display text-3xl">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#625B53]">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="space-heading" className="section-spacing">
        <Container>
          <div className="mb-9 max-w-2xl">
            <p className="eyebrow mb-5 text-[#76591F]">The environment</p>
            <h2 id="space-heading" className="heading-section">Room to unwind.</h2>
            <p className="mt-5 text-[#625B53] leading-8">An atmosphere should feel welcoming without feeling complicated. The visuals below communicate the intended aesthetic and will be replaced with authentic salon photography.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { src: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6", alt: "Illustrative light-filled contemporary salon interior" },
              { src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9", alt: "Illustrative professional hair and beauty workspace" }
            ].map((item) => (
              <figure key={item.src}>
                <div className="relative aspect-[5/4] overflow-hidden bg-beige"><Image src={item.src} alt={item.alt} fill sizes="(max-width:640px) 100vw, 50vw" className="object-cover" /></div>
                <figcaption className="mt-3 text-xs text-[#625B53]">Illustrative imagery — not verified salon premises.</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="team-heading" className="bg-beige py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow mb-5 text-[#76591F]">The people behind the care</p>
            <h2 id="team-heading" className="heading-section">Expertise is personal.</h2>
          </div>
          <div>
            <p className="text-sm leading-8 text-[#625B53]">Our team profiles will be added once each stylist's name, specialisms, qualifications and photograph have been verified. Rather than invent biographies, we leave room for the people who make the salon what it is.</p>
            <div className="mt-7"><Button href="/contact" variant="outline" showArrow>Connect with us</Button></div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="care-heading" className="section-spacing">
        <Container className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div>
            <p className="eyebrow mb-5 text-[#76591F]">Care in practice</p>
            <h2 id="care-heading" className="heading-section">Comfort begins with trust.</h2>
          </div>
          <div>
            <p className="text-sm leading-8 text-[#625B53]">A responsible salon should communicate clearly about hygiene, tool cleaning, product suitability, consultation, and consent. Before publishing specific operational promises or named professional product brands, the owner should verify actual practices and partnerships.</p>
            <p className="mt-5 text-sm leading-8 text-[#625B53]">For colour and other chemical services, guests should have the opportunity to share relevant treatment history and sensitivities, and receive appropriate instructions before an appointment.</p>
            <div className="mt-7"><Button href="/booking" showArrow>Request an Appointment</Button></div>
          </div>
        </Container>
      </section>
    </>
  );
}
