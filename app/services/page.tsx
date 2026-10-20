import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";
import JsonLd from "@/components/seo/JsonLd";
import { services, formatServicePrice } from "@/data/services";
import { serviceFAQs } from "@/data/faqs";
import { createMetadata } from "@/lib/seo";
import { faqSchema, serviceSchema } from "@/lib/jsonld";

export const dynamic = "force-static";
export const metadata: Metadata = createMetadata({
  title: "Hair, Colour & Grooming Services",
  description: "Explore considered haircut, colour, hair care and grooming services for every guest. Enquire about individual appointments and pricing.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <header className="bg-beige py-20 md:py-28">
        <Container>
          <p className="eyebrow mb-5 text-[#76591f]">The service edit</p>
          <h1 className="heading-display max-w-5xl">Care, crafted <em>around you.</em></h1>
          <p className="body-large mt-8 max-w-2xl">Explore thoughtful hair, colour and grooming possibilities. Every service begins with a conversation about your preferences and routine.</p>
        </Container>
      </header>
      <section className="section-spacing" aria-labelledby="service-collection-heading">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-[#D7CDBF] pb-5">
            <h2 id="service-collection-heading" className="font-display text-4xl md:text-5xl">Explore our services</h2>
            <p className="text-sm text-[#625B53]">{services.length} suggested service categories</p>
          </div>
          <div className="grid gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="group min-w-0">
                <Link href={`/services/${service.slug}`} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-beige">
                    <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width:767px) 100vw, (max-width:1023px) 50vw, 33vw" className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.035]" />
                    <span className="absolute left-4 top-4 bg-ivory px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-widest">{service.category}</span>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <h3 className="font-display text-3xl md:text-4xl">{service.name}</h3>
                    <ArrowUpRight className="mt-2 shrink-0 text-[#76591f]" aria-hidden="true" />
                  </div>
                  <p className="mt-2 text-sm leading-7 text-[#625B53]">{service.description}</p>
                </Link>
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#625B53]">
                  <span>{formatServicePrice(service)}</span>
                  {service.durationMinutes !== null && <span className="inline-flex items-center gap-1"><Clock3 size={14} aria-hidden="true" /> {service.durationMinutes} min</span>}
                </div>
                <Link href={`/booking?service=${encodeURIComponent(service.slug)}`} className="mt-5 inline-flex min-h-11 items-center gap-2 border-b border-charcoal text-xs font-semibold uppercase tracking-widest">Enquire to book <ArrowUpRight size={15} aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white py-16 md:py-24" aria-labelledby="service-prices-heading">
        <Container>
          <h2 id="service-prices-heading" className="heading-section">Service guide</h2>
          <p className="mt-4 max-w-xl text-[#625B53]">Availability, duration and pricing are confirmed during enquiry. No appointment is reserved by submitting a request.</p>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead><tr className="border-b border-charcoal text-xs uppercase tracking-wider"><th scope="col" className="py-4">Service</th><th scope="col" className="py-4">Duration</th><th scope="col" className="py-4">Price</th></tr></thead>
              <tbody>{services.map((service) => <tr className="border-b border-[#D7CDBF]" key={service.slug}><th scope="row" className="py-4 font-medium"><Link href={`/services/${service.slug}`} className="underline-offset-4 hover:underline">{service.name}</Link></th><td className="py-4">{service.durationMinutes === null ? "Confirm with salon" : `${service.durationMinutes} min`}</td><td className="py-4">{formatServicePrice(service)}</td></tr>)}</tbody>
            </table>
          </div>
        </Container>
      </section>
      <section className="section-spacing" aria-labelledby="services-faq-heading"><Container narrow><h2 id="services-faq-heading" className="heading-section mb-10">Questions, answered.</h2><Accordion items={serviceFAQs} /></Container></section>
      <JsonLd data={services.map(serviceSchema)} />
      <JsonLd data={faqSchema(serviceFAQs)} />
    </>
  );
}
