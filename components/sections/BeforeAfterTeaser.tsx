import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { getApprovedTransformations } from "@/data/beforeAfter";
import Image from "next/image";

export default function BeforeAfterTeaser() {
  const approved = getApprovedTransformations();
  return (
    <Section id="our-work" eyebrow="The details matter" title="Real transformations. Real individuality." description="Results are personal. Our portfolio will feature real, consented examples of salon work as they become available.">
      {approved.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2">
          {approved.slice(0, 2).map((item) => (
            <article key={item.id}>
              <div className="grid grid-cols-2 gap-2">
                {[{ src: item.beforeImage, alt: item.beforeAlt, label: "Before" }, { src: item.afterImage, alt: item.afterAlt, label: "After" }].map((photo) => (
                  <div className="relative aspect-[4/5] overflow-hidden bg-beige" key={photo.label}>
                    <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover" />
                    <span className="absolute bottom-3 left-3 bg-ivory px-3 py-1 text-xs font-semibold text-charcoal">{photo.label}</span>
                  </div>
                ))}
              </div>
              <h3 className="mt-4 font-display text-3xl">{item.title}</h3>
              <p className="text-sm text-[#625B53]">Results may vary.</p>
            </article>
          ))}
        </div>
      ) : (
        <div className="border border-[#D7CDBF] bg-[#F2ECE2] px-7 py-14 text-center">
          <h3 className="font-display text-3xl md:text-4xl">The portfolio is taking shape.</h3>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#625B53]">We only share documented work with appropriate consent. In the meantime, explore the services and discuss your ideas with the salon.</p>
        </div>
      )}
      <div className="mt-10 text-center"><Button href="/before-after" variant="outline" showArrow>Explore our work</Button></div>
    </Section>
  );
}
