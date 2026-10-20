import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";
export const metadata: Metadata = createMetadata({ title: "Thank You", description: "Thank you for contacting the salon. We'll respond when possible.", path: "/thank-you", noIndex: true });
export default function ThankYouPage() {
  return <section className="min-h-[65vh] bg-ivory py-24"><Container narrow><p className="eyebrow text-[#82611C]">Thank you for reaching out</p><h1 className="heading-display mt-6">Your message is <em>on its way.</em></h1><p className="body-large mt-8">If you have just submitted an enquiry successfully, it has been sent to the salon's configured contact provider. Appointment requests are not confirmed bookings. Please await a direct confirmation before making plans.</p><div className="mt-10 flex flex-wrap gap-4"><Link className="btn btn-primary" href="/">Back to home</Link><Link className="btn btn-outline" href="/services">Explore services</Link></div></Container></section>;
}
