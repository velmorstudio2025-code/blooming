import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";
import JsonLd from "@/components/seo/JsonLd";
import { services, getServiceBySlug, formatServicePrice } from "@/data/services";
import { createMetadata, serviceDescription } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/jsonld";

export const dynamic = "force-static";
export const dynamicParams = false;
export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
type Props = { params: Promise<{slug: string}> };
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {title: "Service not found", robots:{index:false}};
  return createMetadata({title: service.name, description: serviceDescription(service.name), path: `/services/${slug}`});
}
export default async function ServiceDetailPage({params}: Props) {
  const {slug} = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <>
    <section className="bg-beige py-10 md:py-16" aria-label="Service introduction">
      <Container>
        <nav aria-label="Breadcrumb" className="mb-9 text-xs uppercase tracking-wider text-[#625B53]"><Link href="/services" className="underline-offset-4 hover:underline">Services</Link><span aria-hidden="true"> / </span><span aria-current="page">{service.name}</span></nav>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div><p className="eyebrow mb-5 text-[#76591f]">{service.category}</p><h1 className="heading-display">{service.name}</h1><p className="body-large mt-7">{service.description}</p><div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm"><span>{formatServicePrice(service)}</span><span>{service.durationMinutes === null ? "Duration on enquiry" : `${service.durationMinutes} minutes`}</span></div><Link href={`/booking?service=${encodeURIComponent(service.slug)}`} className="btn btn-primary mt-9">Request an appointment <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
          <div className="relative aspect-[4/5] overflow-hidden bg-[#D7CDBF]"><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width:767px) 100vw, 50vw" className="object-cover" priority /></div>
        </div>
      </Container>
    </section>
    <section className="section-spacing" aria-labelledby="about-service-heading"><Container><div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24"><div><p className="eyebrow mb-5 text-[#76591f]">Considered care</p><h2 id="about-service-heading" className="heading-section">The experience.</h2><p className="body-large mt-8">{service.longDescription}</p></div><div><h3 className="font-display text-3xl">What to expect</h3><ul className="mt-6 space-y-4">{service.benefits.map(benefit=><li className="flex gap-3" key={benefit}><Check size={19} className="mt-1 shrink-0 text-[#76591f]" aria-hidden="true"/><span>{benefit}</span></li>)}</ul><h3 className="mt-11 font-display text-3xl">Before your visit</h3><ul className="mt-5 list-disc space-y-3 pl-5 text-[#625B53]">{service.preparation.map(item=><li key={item}>{item}</li>)}</ul></div></div></Container></section>
    {service.faqs.length>0 && <section className="bg-white py-16 md:py-24" aria-labelledby="individual-service-faq"><Container narrow><h2 id="individual-service-faq" className="heading-section mb-10">Good to know.</h2><Accordion items={service.faqs}/></Container></section>}
    <section className="bg-charcoal py-16 text-ivory md:py-24"><Container><p className="eyebrow text-[#D8BF8B]">Your appointment</p><h2 className="mt-5 font-display text-5xl md:text-7xl">Ready to begin?</h2><p className="mt-5 max-w-lg text-[#D6D0C7]">Share your preferred time and what you have in mind. The salon will confirm availability.</p><div className="mt-8 flex flex-wrap gap-5"><Link className="btn btn-light" href={`/booking?service=${encodeURIComponent(service.slug)}`}>Enquire about this service <ArrowUpRight size={16} aria-hidden="true"/></Link><Link href="/services" className="inline-flex min-h-11 items-center gap-2 underline underline-offset-4"><ArrowLeft size={16} aria-hidden="true"/> All services</Link></div></Container></section>
    <JsonLd data={serviceSchema(service)}/>
    <JsonLd data={breadcrumbSchema([{name:"Home",path:"/"},{name:"Services",path:"/services"},{name:service.name,path:`/services/${service.slug}`}])}/>
    {service.faqs.length>0 && <JsonLd data={faqSchema(service.faqs)}/>}
  </>;
}
