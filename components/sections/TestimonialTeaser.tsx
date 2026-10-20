import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { getPublishedReviews } from "@/data/reviews";

export default function TestimonialTeaser() {
  const reviews = getPublishedReviews();
  return (
    <Section id="guest-experiences" eyebrow="Guest experiences" title="Every story is individual." description="We believe meaningful feedback deserves to be shared accurately, in the guest's own words.">
      {reviews.length ? (
        <div className="grid gap-6 md:grid-cols-2">
          {reviews.slice(0, 2).map((review) => (
            <figure key={review.id} className="border-t border-[#C6A664] bg-[#F2ECE2] p-8">
              <blockquote className="font-display text-2xl leading-snug md:text-3xl">“{review.quote}”</blockquote>
              <figcaption className="mt-6 text-sm font-medium text-[#625B53]">{review.author}</figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="border-t border-[#C6A664] py-9">
          <p className="max-w-xl font-display text-3xl leading-snug">Authentic guest stories will appear here when available.</p>
          <p className="mt-4 text-sm text-[#625B53]">No invented quotes, ratings or review counts.</p>
        </div>
      )}
      <div className="mt-7"><Button href="/testimonials" variant="text" showArrow>Guest stories</Button></div>
    </Section>
  );
}
