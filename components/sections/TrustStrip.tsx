import Container from "@/components/ui/Container";
import { MessageCircle, HandHeart, Sparkles } from "lucide-react";

const principles = [
  { title: "Personal consultations", description: "A conversation before the service", Icon: MessageCircle },
  { title: "Every expression welcome", description: "Care guided by your preferences", Icon: HandHeart },
  { title: "Considered approach", description: "Practical choices for everyday life", Icon: Sparkles }
];
export default function TrustStrip() {
  return (
    <section aria-label="Our approach" className="border-y border-[#D7CDBF] bg-[#F2ECE2]">
      <Container className="grid gap-7 py-8 md:grid-cols-3 md:gap-4">
        {principles.map(({ title, description, Icon }) => (
          <div key={title} className="flex items-start gap-4 md:justify-center">
            <Icon aria-hidden="true" size={21} strokeWidth={1.4} className="mt-1 shrink-0 text-[#82611C]" />
            <div><h2 className="text-sm font-semibold tracking-wide">{title}</h2><p className="mt-1 text-xs text-[#625B53]">{description}</p></div>
          </div>
        ))}
      </Container>
    </section>
  );
}
