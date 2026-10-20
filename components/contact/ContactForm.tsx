"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "@/lib/schemas";
import { submitContact } from "@/lib/form-actions";

export default function ContactForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema), defaultValues: { consent: false, website: "" } });
  const submit = handleSubmit(async values => {
    setServerError("");
    const fd = new FormData();
    Object.entries(values).forEach(([key, value]) => fd.set(key, typeof value === "boolean" ? String(value) : String(value ?? "")));
    const response = await submitContact(fd);
    if (response.ok) router.push("/thank-you?type=contact");
    else setServerError(response.message);
  });
  return (
    <form onSubmit={submit} noValidate className="space-y-5" aria-label="Contact form">
      {([['name','Your name','text'],['email','Email address','email'],['phone','Phone (optional)','tel'],['subject','Subject','text']] as const).map(([key,label,type]) => <div key={key}><label className="field-label" htmlFor={`contact-${key}`}>{label}{key !== "phone" ? " *" : ""}</label><input id={`contact-${key}`} className="field-input" type={type} autoComplete={key === "name" ? "name" : key === "email" ? "email" : key === "phone" ? "tel" : undefined} {...register(key)} aria-invalid={!!errors[key]}/>{errors[key] && <p className="field-error" role="alert">{errors[key]?.message}</p>}</div>)}
      <div><label className="field-label" htmlFor="contact-message">Message *</label><textarea id="contact-message" rows={6} className="field-input" {...register("message")} aria-invalid={!!errors.message}/>{errors.message && <p className="field-error" role="alert">{errors.message.message}</p>}</div>
      <div className="honeypot-field" aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" tabIndex={-1} autoComplete="off" {...register("website")}/></div>
      <label className="flex gap-3 text-sm"><input type="checkbox" className="mt-1 size-4 shrink-0" {...register("consent")}/><span>I agree to be contacted about my message and acknowledge the <a href="/privacy" className="underline">privacy policy</a>.</span></label>{errors.consent && <p className="field-error" role="alert">{errors.consent.message}</p>}
      {serverError && <p role="alert" className="field-error">{serverError}</p>}
      <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full sm:w-auto">{isSubmitting ? "Sending…" : "Send message"}</button>
    </form>
  );
}
