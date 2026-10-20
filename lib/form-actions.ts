"use server";

import { headers } from "next/headers";
import { formDataObject, processEnquiry } from "@/lib/form-processing";

export async function submitContact(formData: FormData) {
  const h = await headers();
  const request = new Request("https://local.invalid/api/contact", { headers: h });
  return processEnquiry("contact", formDataObject(formData), request);
}

export async function submitBooking(formData: FormData) {
  const h = await headers();
  const request = new Request("https://local.invalid/api/booking", { headers: h });
  return processEnquiry("booking", formDataObject(formData), request);
}
