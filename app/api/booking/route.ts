import { NextResponse } from "next/server";
import { processEnquiry, formDataObject } from "@/lib/form-processing";

export const runtime = "nodejs";
export async function POST(request: Request) {
  const size = Number(request.headers.get("content-length") || "0");
  if (size > 16_384) return NextResponse.json({ ok: false, message: "Payload too large." }, { status: 413 });
  const origin = request.headers.get("origin");
  const expected = process.env.ALLOWED_ORIGIN;
  if (expected && origin && origin !== expected) return NextResponse.json({ ok: false, message: "Origin rejected." }, { status: 403 });
  try {
    const type = request.headers.get("content-type") || "";
    const raw = type.includes("application/json") ? await request.json() : formDataObject(await request.formData());
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) throw new Error("Invalid input");
    const result = await processEnquiry("booking", raw, request);
    return NextResponse.json(result, { status: result.ok ? 200 : 400 });
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid submission." }, { status: 400 });
  }
}
