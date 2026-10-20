import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/layout/SkipLink";
import JsonLd from "@/components/seo/JsonLd";
import { salonSchema, websiteSchema } from "@/lib/jsonld";
import { siteConfig } from "@/lib/seo";

const display = Cormorant_Garamond({ subsets: ["latin"], display: "swap", variable: "--font-cormorant", weight: ["400", "500", "600", "700"] });
const sans = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

// EDIT: Set the real salon URL and NAP details before production indexing.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} | Unisex Salon in ${siteConfig.city}`, template: `%s | ${siteConfig.name}` },
  description: "Thoughtfully considered hair, colour and grooming services in a welcoming salon environment.",
  applicationName: siteConfig.name,
  openGraph: { siteName: siteConfig.name, type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image" },
  robots: siteConfig.url === "https://example.com" ? { index: false, follow: false } : undefined
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#F8F5EF" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-ivory font-sans text-charcoal antialiased">
        <SkipLink />
        <Navbar />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <JsonLd data={[websiteSchema(), salonSchema()]} />
      </body>
    </html>
  );
}
