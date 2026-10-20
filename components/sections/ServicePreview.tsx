import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { featuredServices } from "@/data/services";

export default function ServicePreview() {
  return (
    <Section id="featured-services" eyebrow="The service edit" title="Care shaped around you." description="Explore a considered selection of hair, colour and grooming experiences. Confirm availability and suitability with the salon before booking.">
      <div className="grid gap-8 md:grid-cols-3">
        {featuredServices.slice(0, 3).map((service) => (
          <Card key={service.slug} title={service.name} description={service.description} category={service.category} image={service.image} imageAlt={service.imageAlt} href={`/services/${service.slug}`} meta="Enquire for pricing and duration" />
        ))}
      </div>
      <div className="mt-12 text-center"><Button href="/services" variant="outline" showArrow>View all services</Button></div>
    </Section>
  );
}
