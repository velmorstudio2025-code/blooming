import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { getPublishedReviews } from "@/data/reviews";
import { createMetadata } from "@/lib/seo";

export const dynamic = "force-static";
export const metadata: Metadata = createMetadata({
  title: "Guest Experiences",
  description: "Discover authentic guest feedback and the values behind our thoughtful, inclusive salon experience.",
  path: "/testimonials"
});

export default function TestimonialsPage() {
  const reviews = getPublishedReviews();
  return (
    <>
      <header className="bg-beige py-20 md:py-28">
        <Container>
          <p className="eyebrow mb-5 text-[#76591F]">Guest experiences</p>
          <h1 className="heading-display max-w-5xl">Stories worth <em>sharing.</em></h1>
          <p className="body-large mt-8 max-w-2xl">The words of our guests matter. We feature only genuine feedback that we have permission to share.</p>
        </Container>
      </header>
      <section className="section-spacing" aria-labelledby="stories-heading">
        <Container>
          <div className="mb-10 border-b border-[#D7CDBF] pb-7">
            <h2 id="stories-heading" className="heading-section">In their own words.</h2>
          </div>
          {reviews.length ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <figure key={review.id} className="border-t border-[#C6A664] bg-white p-7 md:p-9">
                  <blockquote className="font-display text-2xl leading-snug md:text-3xl">“{review.quote}”</blockquote>
                  <figcaption className="mt-8 border-t border-[#E8DFD1] pt-5 text-sm text-[#625B53]">
                    <span className="font-semibold text-charcoal">{review.author}</span>
                    {review.source ? <span className="block mt-1">Source: {review.source}</span> : null}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="bg-white px-7 py-14 md:px-12">
              <p className="eyebrow mb-4 text-[#76591F]">An honest beginning</p>
              <h3 className="font-display text-4xl md:text-5xl">The stories will speak for themselves.</h3>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-[#625B53]">Verified guest testimonials will appear here when they are available and approved for publication. We do not use invented names, reviews or ratings.</p>
            </div>
          )}
          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/booking" showArrow>Request an Appointment</Button>
            <Button href="/contact" variant="outline">Contact the Salon</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
