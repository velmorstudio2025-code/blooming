import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-heading" className="bg-[#E8DFD1] py-24 text-center lg:py-32">
      <Container className="max-w-4xl">
        <p className="eyebrow text-[#82611C]">The next chapter is yours</p>
        <h2 id="final-cta-heading" className="mt-5 font-display text-[clamp(3.4rem,8vw,7rem)] leading-[0.98] tracking-[-0.035em]">Come as you are. <em>Leave feeling you.</em></h2>
        <p className="mx-auto mt-7 max-w-lg text-base leading-8 text-[#625B53]">Have a look in mind, or simply want to explore your options? Start with a conversation.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href="/booking" showArrow>Request an appointment</Button>
          <Button href="/contact" variant="outline">Ask a question</Button>
        </div>
      </Container>
    </section>
  );
}
