import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { SalonProduct } from "@/data/products";
import { createProductWhatsAppUrl } from "@/data/products";

type Props = { product: SalonProduct; whatsapp: string };
export default function ProductCard({product,whatsapp}: Props) {
  const enquireUrl = createProductWhatsAppUrl(product, whatsapp);
  return <article id={product.slug} className="min-w-0 scroll-mt-28">
    <div className="relative aspect-[4/5] overflow-hidden bg-beige"><Image src={product.image} alt={product.imageAlt} fill sizes="(max-width:639px) 100vw, (max-width:1023px) 50vw, 33vw" className="object-cover"/><span className="absolute left-4 top-4 bg-ivory px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-widest">{product.category}</span></div>
    <div className="mt-5 border-t border-[#D7CDBF] pt-5"><h3 className="font-display text-3xl">{product.name}</h3><p className="mt-3 text-sm leading-7 text-[#625B53]">{product.description}</p><p className="mt-3 text-sm font-medium">{product.price === null ? "Price on enquiry" : new Intl.NumberFormat("en-IN",{style:"currency",currency:product.currency,maximumFractionDigits:0}).format(product.price)}</p>
      {enquireUrl ? <a className="mt-5 inline-flex min-h-11 items-center gap-2 border-b border-charcoal text-xs font-semibold uppercase tracking-wider" href={enquireUrl} target="_blank" rel="noopener noreferrer" aria-label={`Enquire on WhatsApp about ${product.name}`}>Enquire on WhatsApp <ArrowUpRight size={16} aria-hidden="true"/></a> : <p className="mt-5 text-sm text-[#625B53]">WhatsApp enquiries will be available once the salon confirms its contact number.</p>}
    </div>
  </article>;
}
