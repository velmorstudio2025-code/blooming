import Link from "next/link";
import Container from "@/components/ui/Container";
export default function NotFound() {
  return <section className="min-h-[70vh] bg-ivory py-24"><Container narrow><p className="eyebrow text-[#82611C]">404 / Page not found</p><h1 className="heading-display mt-6">A different <em>direction.</em></h1><p className="body-large mt-8">The page you're looking for isn't here. Explore the services or return to the beginning.</p><div className="mt-10 flex flex-wrap gap-4"><Link href="/" className="btn btn-primary">Back home</Link><Link href="/services" className="btn btn-outline">View services</Link><Link href="/booking" className="btn btn-outline">Book now</Link></div></Container></section>;
}
