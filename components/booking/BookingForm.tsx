"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, type BookingFormValues } from "@/lib/schemas";
import { submitBooking } from "@/lib/form-actions";
import { services } from "@/data/services";

export default function BookingForm() {
  const router = useRouter();
  const params = useSearchParams();
  const initialService = params.get("service") || "";
  const [serverError, setServerError] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { service: services.some(s => s.slug === initialService) ? initialService : "", consent: false, website: "" }
  });
  const submit = handleSubmit(async values => {
    setServerError("");
    const fd = new FormData();
    Object.entries(values).forEach(([key, value]) => fd.set(key, typeof value === "boolean" ? String(value) : String(value ?? "")));
    const result = await submitBooking(fd);
    if (result.ok) router.push("/thank-you?type=booking");
    else setServerError(result.message);
  });
  const fieldClass = "field-input";
  return (
    <form onSubmit={submit} noValidate className="space-y-5" aria-label="Booking enquiry form">
      <p className="text-sm text-[#625B53]">This form requests a preferred appointment. It does not reserve a time slot.</p>
      <div><label className="field-label" htmlFor="booking-name">Name *</label><input id="booking-name" className={fieldClass} autoComplete="name" {...register("name")} aria-invalid={!!errors.name}/>{errors.name && <p role="alert" className="field-error">{errors.name.message}</p>}</div>
      <div><label className="field-label" htmlFor="booking-email">Email *</label><input id="booking-email" type="email" className={fieldClass} autoComplete="email" {...register("email")} aria-invalid={!!errors.email}/>{errors.email && <p role="alert" className="field-error">{errors.email.message}</p>}</div>
      <div><label className="field-label" htmlFor="booking-phone">Phone *</label><input id="booking-phone" type="tel" className={fieldClass} autoComplete="tel" {...register("phone")} aria-invalid={!!errors.phone}/>{errors.phone && <p role="alert" className="field-error">{errors.phone.message}</p>}</div>
      <div><label className="field-label" htmlFor="booking-service">Service *</label><select id="booking-service" className={fieldClass} {...register("service")} aria-invalid={!!errors.service}><option value="">Select a service</option>{services.map(service => <option key={service.slug} value={service.slug}>{service.name}</option>)}</select>{errors.service && <p role="alert" className="field-error">{errors.service.message}</p>}</div>
      <div className="grid gap-5 sm:grid-cols-2"><div><label className="field-label" htmlFor="booking-date">Preferred date *</label><input id="booking-date" type="date" className={fieldClass} {...register("preferredDate")} aria-invalid={!!errors.preferredDate}/>{errors.preferredDate && <p role="alert" className="field-error">{errors.preferredDate.message}</p>}</div><div><label className="field-label" htmlFor="booking-time">Preferred time *</label><input id="booking-time" type="time" className={fieldClass} {...register("preferredTime")} aria-invalid={!!errors.preferredTime}/>{errors.preferredTime && <p role="alert" className="field-error">{errors.preferredTime.message}</p>}</div></div>
      <div><label className="field-label" htmlFor="booking-notes">Additional notes</label><textarea id="booking-notes" rows={4} className={fieldClass} {...register("notes")}/>{errors.notes && <p role="alert" className="field-error">{errors.notes.message}</p>}</div>
      <div className="honeypot-field" aria-hidden="true"><label htmlFor="booking-website">Website</label><input id="booking-website" autoComplete="off" tabIndex={-1} {...register("website")}/></div>
      <label className="flex gap-3 text-sm"><input type="checkbox" className="mt-1 size-4 shrink-0" {...register("consent")}/><span>I agree to be contacted about my enquiry and acknowledge the <a href="/privacy" className="underline">privacy policy</a>.</span></label>{errors.consent && <p role="alert" className="field-error">{errors.consent.message}</p>}
      {serverError && <p role="alert" className="field-error">{serverError}</p>}
      <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full sm:w-auto">{isSubmitting ? "Sending…" : "Send booking enquiry"}</button>
    </form>
  );
}
