import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { createMetadata, siteConfig } from "@/lib/seo";

export const dynamic = "force-static";
export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "Learn how salon enquiries, appointment requests, third-party booking tools and analytics may handle your personal information.",
  path: "/privacy"
});

// EDIT: Review these disclosures against actual data flows, retention, legal obligations,
// enabled integrations and operating jurisdiction before publishing. No legal review claimed.
const email = process.env.NEXT_PUBLIC_EMAIL || "";
const contactEmail = email && !email.includes("[") ? email : null;

export default function PrivacyPage() {
  return (
    <>
      <header className="bg-beige py-16 md:py-24">
        <Container narrow>
          <p className="eyebrow mb-5 text-[#76591F]">Your information</p>
          <h1 className="heading-display">Privacy policy.</h1>
          <p className="body-large mt-6">A plain-language overview of how information may be collected and used when you contact {siteConfig.name}.</p>
        </Container>
      </header>
      <section className="section-spacing" aria-label="Privacy policy contents">
        <Container narrow>
          <div className="space-y-11 text-[0.98rem] leading-8 text-[#625B53] [&_h2]:mb-4 [&_h2]:font-display [&_h2]:text-4xl [&_h2]:text-charcoal [&_a]:underline [&_a]:underline-offset-4">
            <section><h2>1. Who is responsible</h2><p>{siteConfig.name} is the business responsible for information submitted directly to this salon website. Contact us through the <Link href="/contact">contact page</Link>{contactEmail ? <> or at <a href={`mailto:${contactEmail}`}>{contactEmail}</a></> : " using the verified details displayed there"}. Business contact and legal-entity details must be completed by the salon owner before publication.</p></section>
            <section><h2>2. Information you choose to share</h2><p>Contact and booking enquiry forms may request your name, email address, telephone number, requested service, preferred appointment date and time, and any information you include in a message. Please avoid sharing payment card details, medical records or other sensitive information through a general enquiry form. The website may also process basic technical details necessary for security and delivery, such as request timestamps and IP addresses.</p></section>
            <section><h2>3. Why we use this information</h2><p>Information is used to respond to questions, evaluate appointment requests, contact you about your enquiry, manage communications and protect the forms from spam and abuse. Submitting a booking enquiry does not reserve or confirm a salon appointment. We do not use enquiry details for promotional messages unless we have an appropriate basis to do so.</p></section>
            <section><h2>4. Form and email providers</h2><p>If configured by the salon, enquiry submissions may be delivered using Formspree and/or Resend. These providers may process submitted information to transmit it to the salon. The precise provider configuration depends on which integrations the owner enables. Consult the providers’ own privacy notices for details about their processing practices.</p></section>
            <section><h2>5. Appointment scheduling</h2><p>If Cal.com booking is enabled and you open its embedded scheduling interface, Cal.com may receive information you enter and process technical data required to operate the service. The third-party booking interface has its own privacy practices. If the integration is unavailable, you can use the salon enquiry form instead.</p></section>
            <section><h2>6. Analytics and cookies</h2><p>If Plausible Analytics is enabled, this website may collect privacy-focused, aggregated visitor statistics to help the salon understand page usage. Plausible’s standard analytics service is designed without tracking cookies. Embedded third-party tools, such as booking calendars or maps, may apply their own storage or data collection practices. The salon owner must verify the actual technologies in use and add any notices or controls required by applicable law.</p></section>
            <section><h2>7. External services</h2><p>Links to WhatsApp and Instagram take you to third-party platforms. Opening an optional Google Maps embed may send connection and device information to Google. These services operate under their own privacy policies. We do not control their independent processing practices.</p></section>
            <section><h2>8. Sharing and international processing</h2><p>We share information with service providers only to the extent needed to deliver the website’s communication and booking features, or when required by applicable law. Some providers may process information outside your country. The salon owner must confirm the relevant hosting regions, processors and legal requirements before launch.</p></section>
            <section><h2>9. Retention and security</h2><p>We intend to keep enquiry information only as long as reasonably necessary to respond, manage the related service request and satisfy applicable obligations. Actual retention periods must be set by the salon owner and reflected in this policy. Reasonable technical and organisational safeguards should be used, but no internet transmission can be guaranteed completely secure.</p></section>
            <section><h2>10. Your choices and requests</h2><p>You may contact the salon to ask about your submitted information, request correction or deletion where applicable, or raise a privacy concern. Some requests may be subject to legal or operational requirements. Use the <Link href="/contact">contact page</Link> to submit a request; the salon must establish a process for responding under applicable law.</p></section>
            <section><h2>11. Changes</h2><p>This policy may be updated when services, integrations or legal requirements change. Material changes should be reflected here together with an accurate revision date. No revision date is shown until the owner approves and publishes this policy.</p></section>
            <section className="border-t border-[#D7CDBF] pt-8"><p className="text-sm"><strong className="text-charcoal">Publication checklist:</strong> The owner must verify actual tools, provider privacy links, business identity, applicable consent practices, retention and contact details. This text is an implementation draft rather than legal advice.</p></section>
          </div>
        </Container>
      </section>
    </>
  );
}
