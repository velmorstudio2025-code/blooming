import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { products } from "@/data/products";

export default function ProductTeaser() {
  return (
    <Section id="product-edit" tone="beige" eyebrow="The care edit" title="Thoughtful care, beyond the chair." description="Explore suggested product categories and enquire about the actual products available at the salon. No online checkout.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 3).map((product) => (
          <article key={product.id} className="group">
            <Link href={`/shop#${product.slug}`} className="block">
              <div className="relative aspect-[4/4.5] overflow-hidden bg-[#DDD3C5]">
                <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <p className="eyebrow mt-5 text-[#82611C]">{product.category}</p>
              <h3 className="mt-2 font-display text-3xl">{product.name}</h3>
              <p className="mt-2 text-sm leading-7 text-[#625B53]">{product.description}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider">Enquire for availability and price ↗</p>
            </Link>
          </article>
        ))}
      </div>
      <div className="mt-12 text-center"><Button href="/shop" variant="outline" showArrow>Explore the catalogue</Button></div>
    </Section>
  );
}
