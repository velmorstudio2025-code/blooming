import "server-only";
import { z } from "zod";
import { Resend } from "resend";
import { bookingSchema, contactSchema, validateBookingDate } from "@/lib/schemas";
import { rateLimit, getRateLimitKey } from "@/lib/rate-limit";

type Outcome = { ok: boolean; message: string; fieldErrors?: Record<string, string[]> };
const MAX_PAYLOAD = 16_384;

function safe(value: unknown): string {
  return String(value ?? "").replace(/[<>\u0000-\u001f]/g, " ").slice(0, 3000);
}

function parseContact(raw: Record<string, unknown>) {
  return contactSchema.safeParse({ ...raw, consent: raw.consent === true || raw.consent === "on" || raw.consent === "true" });
}
function parseBooking(raw: Record<string, unknown>) {
  return bookingSchema.safeParse({ ...raw, consent: raw.consent === true || raw.consent === "on" || raw.consent === "true" });
}
function errors(error: z.ZodError): Outcome {
  return { ok: false, message: "Please review the highlighted fields.", fieldErrors: z.flattenError(error).fieldErrors as Record<string, string[]> };
}

async function deliver(subject: string, body: string): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_RECIPIENT_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;
  const formspree = process.env.FORMSPREE_ID;
  // Require at least one configured destination; never report success for a no-op.
  if (key && from && to) {
    const resend = new Resend(key);
    const { error } = await resend.emails.send({ from, to: [to], subject, text: body });
    if (!error) return true;
    console.error("Resend delivery failed", error.name);
  }
  if (formspree && !formspree.startsWith("[")) {
    try {
      const result = await fetch(`https://formspree.io/f/${encodeURIComponent(formspree)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ subject, message: body }),
        cache: "no-store"
      });
      if (result.ok) return true;
    } catch (error) {
      console.error("Formspree delivery failed", error instanceof Error ? error.name : "unknown");
    }
  }
  return false;
}

export async function processEnquiry(kind: "booking" | "contact", raw: Record<string, unknown>, request?: Request): Promise<Outcome> {
  if (JSON.stringify(raw).length > MAX_PAYLOAD) return { ok: false, message: "This message is too long." };
  // Honeypot: acknowledge without sending to avoid signalling to automated submitters.
  if (raw.website && String(raw.website).trim()) return { ok: true, message: "Your enquiry was received." };
  const parsed = kind === "booking" ? parseBooking(raw) : parseContact(raw);
  if (!parsed.success) return errors(parsed.error);
  if (kind === "booking") {
    const booking = parsed.data as z.infer<typeof bookingSchema>;
    if (!validateBookingDate(booking.preferredDate, booking.preferredTime)) {
      return { ok: false, message: "Choose a future date and time.", fieldErrors: { preferredDate: ["Choose a future date and time."] } };
    }
  }
  if (request) {
    const check = rateLimit(getRateLimitKey(request, kind), { limit: 5, windowMs: 60_000 });
    if (!check.allowed) return { ok: false, message: "Too many attempts. Please try again later." };
  }
  const values = parsed.data as Record<string, unknown>;
  const lines = Object.entries(values).filter(([key]) => key !== "website").map(([key, value]) => `${key}: ${safe(value)}`);
  try {
    const delivered = await deliver(`Salon ${kind} enquiry`, lines.join("\n"));
    return delivered
      ? { ok: true, message: kind === "booking" ? "Enquiry sent. Your appointment is not yet confirmed." : "Message sent. The salon will follow up when possible." }
      : { ok: false, message: "Delivery is not configured or temporarily unavailable. Please contact the salon directly." };
  } catch {
    return { ok: false, message: "Unable to send right now. Please try again later." };
  }
}

export function formDataObject(data: FormData): Record<string, unknown> {
  const entries: Record<string, unknown> = {};
  for (const [key, value] of data.entries()) {
    if (typeof value === "string") entries[key] = value;
  }
  return entries;
}
