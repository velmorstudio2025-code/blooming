import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { createMetadata, siteConfig } from "@/lib/seo";

export const dynamic = "force-static";
export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description: "Read important information about salon enquiries, appointment requests, service availability and use of this website.",
  path: "/terms"
});

// EDIT: Owner must review cancellation policies, business identity, consumer-law
// obligations, jurisdiction and other terms against actual operations.
export default function TermsPage() {
  return (
    <>
      <header className="bg-beige py-16 md:py-24">
        <Container narrow>
          <p className="eyebrow mb-5 text-[#76591F]">Before your visit</p>
          <h1 className="heading-display">Terms of service.</h1>
          <p className="body-large mt-6">Helpful information about using the {siteConfig.name} website and submitting salon enquiries.</p>
        </Container>
      </header>
      <section className="section-spacing" aria-label="Terms of service contents">
        <Container narrow>
          <div className="space-y-11 text-[0.98rem] leading-8 text-[#625B53] [&_h2]:mb-4 [&_h2]:font-display [&_h2]:text-4xl [&_h2]:text-charcoal [&_a]:underline [&_a]:underline-offset-4">
            <section><h2>1. About this website</h2><p>This website introduces {siteConfig.name}, displays proposed or confirmed salon services and shares grooming and hair-care information. The salon owner must verify all published business details before launch. Use of the site is subject to applicable law and these terms.</p></section>
            <section><h2>2. Enquiries are not bookings</h2><p>Sending a contact or booking enquiry does not guarantee an appointment, price, availability or service. The salon must expressly confirm any appointment request. If an external calendar allows direct bookings, follow the confirmation details provided through that service.</p></section>
            <section><h2>3. Services, pricing and duration</h2><p>Published service descriptions are general information. A service may require consultation, adjustment or additional preparation. Prices and durations are not displayed until verified by the owner; where the site says “enquire for pricing,” obtain an individual quotation before committing. The salon should explain any additional charges before the service is performed.</p></section>
            <section><h2>4. Suitability and results</h2><p>Hair and cosmetic service results vary with hair history, texture, product selection, technique and aftercare. Reference photos and editorial images are illustrative unless identified as genuine salon work. Any before-and-after portfolio must use real photographs with appropriate permission. Cosmetic salon services are not substitutes for professional medical diagnosis or treatment. Please disclose relevant sensitivities and prior treatments to your stylist.</p></section>
            <section><h2>5. Appointment changes and cancellations</h2><p>To change or cancel an appointment, contact the salon using its confirmed contact details. Any actual notice periods, deposits, cancellation charges or no-show policies must be separately stated by the salon before they apply. This website does not impose a cancellation fee or automatically collect payment.</p></section>
            <section><h2>6. Product catalogue</h2><p>The shop is an information and enquiry catalogue only. It does not accept online orders, process payment, maintain a shopping cart or complete a checkout. Availability and current product prices must be confirmed directly with the salon before any separate transaction.</p></section>
            <section><h2>7. Acceptable use</h2><p>Please use the website lawfully and avoid sending misleading, abusive, harmful or automated spam submissions. Do not attempt to disrupt the site or gain unauthorised access to its systems or other visitors’ information.</p></section>
            <section><h2>8. External links and embeds</h2><p>Links and embedded features may connect to independent providers, including Cal.com, Google Maps, WhatsApp and Instagram, if configured. Their respective terms and privacy policies may also apply. The salon does not control the content or operation of independent services.</p></section>
            <section><h2>9. Editorial content</h2><p>The website’s journal provides general personal-care information and should not be treated as individual professional advice. Styling, product and aftercare choices should account for personal circumstances. Contact the salon for service-specific guidance.</p></section>
            <section><h2>10. Site availability and changes</h2><p>We aim to keep information useful and current, but content, services and third-party links may change. Temporary service interruptions can occur. Nothing in these terms is intended to limit rights or remedies that cannot lawfully be excluded under applicable consumer law.</p></section>
            <section><h2>11. Questions and complaints</h2><p>For questions about these terms, an enquiry or a salon service, use the verified channels on the <Link href="/contact">contact page</Link>. The salon owner must add any legally required business and complaint-handling details before publishing these terms.</p></section>
            <section className="border-t border-[#D7CDBF] pt-8"><p className="text-sm"><strong className="text-charcoal">Publication checklist:</strong> Confirm salon identity, booking and cancellation policies, service terms, local consumer rules and complaint contact details. This draft requires owner review and is not legal advice.</p></section>
          </div>
        </Container>
      </section>
    </>
  );
}
