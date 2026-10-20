import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";
import ProductFilter from "@/components/shop/ProductFilter";
import JsonLd from "@/components/seo/JsonLd";
import { products, productCategories } from "@/data/products";
import { productFAQs } from "@/data/faqs";
import { createMetadata } from "@/lib/seo";
import { faqSchema, productSchema } from "@/lib/jsonld";

export const dynamic = "force-static";
export const metadata: Metadata = createMetadata({title:"Care & Styling Product Catalogue",description:"Explore a considered edit of hair, scalp and styling products. Request current prices and availability through WhatsApp enquiry.",path:"/shop"});
export default function ShopPage() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP ?? "";
  // EDIT: Products are illustrative until the salon verifies its actual stock.
  // Leave Product JSON-LD disabled for unverified demonstration listings.
  const verifiedProducts: typeof products = [];
  return <>
    <header className="bg-beige py-20 md:py-28"><Container><p className="eyebrow mb-5 text-[#76591f]">The considered edit</p><h1 className="heading-display max-w-5xl">Everyday care, <em>thoughtfully chosen.</em></h1><p className="body-large mt-8 max-w-2xl">Explore categories of care and styling essentials. Products shown are illustrative until the salon confirms the range.</p></Container></header>
    <section className="section-spacing" aria-labelledby="catalogue-heading"><Container><h2 id="catalogue-heading" className="mb-8 font-display text-4xl md:text-5xl">Product catalogue</h2><ProductFilter products={products} categories={productCategories} whatsapp={whatsapp}/></Container></section>
    <section className="bg-white py-16 md:py-24" aria-labelledby="catalogue-faq-heading"><Container narrow><h2 id="catalogue-faq-heading" className="heading-section mb-10">Before you enquire.</h2><Accordion items={productFAQs}/></Container></section>
    {verifiedProducts.map(p=><JsonLd key={p.id} data={productSchema(p)}/>)}
    <JsonLd data={faqSchema(productFAQs)}/>
  </>;
}
