import type { Metadata } from "next";
import { createMetadata, homeDescription, siteConfig } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicePreview from "@/components/sections/ServicePreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BeforeAfterTeaser from "@/components/sections/BeforeAfterTeaser";
import TestimonialTeaser from "@/components/sections/TestimonialTeaser";
import ProductTeaser from "@/components/sections/ProductTeaser";
import InteriorTeaser from "@/components/sections/InteriorTeaser";
import BlogTeaser from "@/components/sections/BlogTeaser";
import FinalCTA from "@/components/sections/FinalCTA";

export const dynamic = "force-static";
export const metadata: Metadata = {
  ...createMetadata({ title: `Unisex Salon in ${siteConfig.city}`, description: homeDescription(), path: "/" }),
  title: { absolute: `${siteConfig.name} | Unisex Salon in ${siteConfig.city}` }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicePreview />
      <WhyChooseUs />
      <BeforeAfterTeaser />
      <InteriorTeaser />
      <TestimonialTeaser />
      <ProductTeaser />
      <BlogTeaser />
      <FinalCTA />
    </>
  );
}
