import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";
import ContactForm from "@/components/contact/ContactForm";
import JsonLd from "@/components/seo/JsonLd";
import { contactFAQs } from "@/data/faqs";
import { faqSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Contact the Salon", description: "Contact our salon for service questions, appointments, product information and directions. Send a message or use our verified contact details.", path: "/contact" });
const valid = (v: string) => !!v && !v.includes("[");
export default function ContactPage() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "";
  const email = process.env.NEXT_PUBLIC_EMAIL || "";
  const address = process.env.NEXT_PUBLIC_ADDRESS || "";
  const hours = process.env.NEXT_PUBLIC_HOURS || "";
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "";
  const whatsApp = (process.env.NEXT_PUBLIC_WHATSAPP || "").replace(/\D/g, "");
  const mapUrl = process.env.NEXT_PUBLIC_MAPS_EMBED_URL || "";
  const safeMap = valid(mapUrl) && /^https:\/\/www\.google\.com\/maps\/embed\?/.test(mapUrl);
  return <>
    <header className="bg-beige py-20 md:py-28"><Container><p className="eyebrow mb-5 text-[#76591F]">Begin a conversation</p><h1 className="heading-display">We'd love to <em>hear from you.</em></h1><p className="body-large mt-7 max-w-2xl">Questions about services, appointments or care? Tell us what you have in mind.</p></Container></header>
    <section className="section-spacing" aria-labelledby="contact-heading"><Container><div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr]"><div><h2 id="contact-heading" className="font-display text-4xl md:text-5xl">Send a message</h2><div className="mt-8"><ContactForm/></div></div><aside className="bg-white p-7 lg:p-9"><h2 className="font-display text-4xl">Visit & connect</h2><div className="mt-7 space-y-5 break-words text-sm leading-7 text-[#625B53]">{valid(address) && <p><strong className="block text-charcoal">Address</strong>{address}</p>}{valid(hours) && <p><strong className="block text-charcoal">Opening hours</strong>{hours}</p>}{valid(phone) && <p><strong className="block text-charcoal">Phone</strong><a className="underline" href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a></p>}{valid(email) && <p><strong className="block text-charcoal">Email</strong><a className="underline" href={`mailto:${email}`}>{email}</a></p>}{whatsApp.length >= 10 && <p><a className="underline" href={`https://wa.me/${whatsApp}`} rel="noopener noreferrer" target="_blank">Enquire on WhatsApp ↗</a></p>}{/^https:\/\/(www\.)?instagram\.com\//i.test(instagram) && <p><a className="underline" href={instagram} rel="noopener noreferrer" target="_blank">Instagram ↗</a></p>}</div>{safeMap && <iframe title="Salon location map" src={mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mt-8 h-72 w-full border-0"/>}</aside></div></Container></section>
    <section className="bg-beige py-16" aria-labelledby="contact-faq-heading"><Container narrow><h2 className="heading-section mb-8" id="contact-faq-heading">Helpful answers</h2><Accordion items={contactFAQs}/></Container></section><JsonLd data={faqSchema(contactFAQs)}/>
  </>;
}
