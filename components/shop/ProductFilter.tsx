"use client";
import { useId, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { SalonProduct } from "@/data/products";
import ProductCard from "./ProductCard";

type Props = { products: SalonProduct[]; whatsapp: string; categories: string[] };
export default function ProductFilter({products, whatsapp, categories}: Props) {
  const [query,setQuery] = useState("");
  const [category,setCategory] = useState("All");
  const searchId = useId();
  const filtered = useMemo(() => products.filter((p) => {
    const matchesCategory = category === "All" || p.category === category;
    const text = `${p.name} ${p.description} ${p.category} ${p.benefits.join(" ")}`.toLocaleLowerCase();
    return matchesCategory && text.includes(query.trim().toLocaleLowerCase());
  }),[category,products,query]);
  return <>
    <div className="mb-10 flex flex-col gap-6 border-b border-[#D7CDBF] pb-8 lg:flex-row lg:items-end lg:justify-between">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter products by category">{categories.map((c)=> <button key={c} type="button" aria-pressed={category===c} onClick={()=>setCategory(c)} className={`min-h-11 border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${category===c ? "border-charcoal bg-charcoal text-ivory" : "border-[#B9AEA0] bg-transparent text-charcoal hover:bg-beige"}`}>{c}</button>)}</div>
      <div className="w-full lg:max-w-xs"><label htmlFor={searchId} className="mb-2 block text-xs font-semibold uppercase tracking-wider">Search catalogue</label><div className="relative"><Search size={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#625B53]" aria-hidden="true"/><input id={searchId} type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search care and styling..." className="field-input pl-10 pr-11"/>{query && <button type="button" onClick={()=>setQuery("")} aria-label="Clear search" className="absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center"><X size={17} aria-hidden="true"/></button>}</div></div>
    </div>
    <p aria-live="polite" aria-atomic="true" className="mb-6 text-sm text-[#625B53]">{filtered.length} {filtered.length===1?"item":"items"} found</p>
    {filtered.length ? <div className="grid gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-3">{filtered.map(p=><ProductCard key={p.id} product={p} whatsapp={whatsapp}/>)}</div> : <div className="border border-[#D7CDBF] bg-white px-6 py-16 text-center"><h2 className="font-display text-4xl">No matching products</h2><p className="mt-4 text-[#625B53]">Try another keyword or explore every category.</p><button type="button" onClick={()=>{setQuery("");setCategory("All");}} className="btn btn-outline mt-7">Show all products</button></div>}
  </>;
}
