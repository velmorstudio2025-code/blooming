"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const Cal = dynamic(() => import("@calcom/embed-react"), { ssr: false, loading: () => <p className="text-sm text-[#625B53]">Loading booking calendar…</p> });

export default function CalEmbed({ calLink }: { calLink: string }) {
  const [open, setOpen] = useState(false);
  if (!calLink || calLink.includes("[")) return null;
  return (
    <section aria-labelledby="calendar-heading" className="mb-12 border border-[#D7CDBF] bg-white p-5 md:p-8">
      <h2 id="calendar-heading" className="font-display text-3xl">Book through our calendar</h2>
      <p className="mt-2 text-sm text-[#625B53]">Check available appointments using the salon's scheduling provider.</p>
      {!open ? <button type="button" onClick={() => setOpen(true)} className="btn btn-primary mt-5">Open booking calendar</button> : <div className="mt-5 min-h-[550px]"><Cal calLink={calLink} config={{ layout: "month_view" }}/></div>}
    </section>
  );
}
