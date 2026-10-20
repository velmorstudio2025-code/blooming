import type { Metadata } from "next";
import { Suspense } from "react";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";
import BookingForm from "@/components/booking/BookingForm";
import CalEmbed from "@/components/booking/CalEmbed";
import JsonLd from "@/components/seo/JsonLd";
import { bookingFAQs } from "@/data/faqs";
import { faqSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Request an Appointment", description: "Request a preferred salon appointment for haircut, colour, hair care and grooming. Your enquiry is subject to confirmation.", path: "/booking" });
export default function BookingPage() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "";
  return <>
    <header className="bg-beige py-20 md:py-28"><Container><p className="eyebrow mb-5 text-[#76591F]">Your next appointment</p><h1 className="heading-display">Make time <em>for yourself.</em></h1><p className="body-large mt-7 max-w-2xl">Explore available appointments or send a preferred-date enquiry. A requested time is not confirmed until accepted by the salon.</p></Container></header>
    <section aria-labelledby="booking-form-heading" className="section-spacing"><Container narrow><CalEmbed calLink={calLink}/><h2 id="booking-form-heading" className="font-display text-4xl md:text-5xl">Prefer to enquire?</h2><p className="mb-9 mt-3 text-[#625B53]">Tell us which service and date you have in mind.</p><Suspense fallback={<p>Loading enquiry form…</p>}><BookingForm/></Suspense></Container></section>
    <section aria-labelledby="booking-faq-heading" className="bg-white py-16"><Container narrow><h2 id="booking-faq-heading" className="heading-section mb-9">Booking questions</h2><Accordion items={bookingFAQs}/></Container></section><JsonLd data={faqSchema(bookingFAQs)}/>
  </>;
}
