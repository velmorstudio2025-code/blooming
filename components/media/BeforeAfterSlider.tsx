"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

type Props = {
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  description?: string;
};

/** Native range input provides Arrow, PageUp/Down, Home and End keyboard support. */
export default function BeforeAfterSlider({
  title,
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  description
}: Props) {
  const [position, setPosition] = useState(50);
  const labelId = useId();
  const descriptionId = useId();

  return (
    <figure className="min-w-0">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-beige sm:aspect-[5/4]">
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          sizes="(max-width:767px) 100vw, 50vw"
          className="object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          aria-hidden="true"
        >
          <Image
            src={afterImage}
            alt=""
            fill
            sizes="(max-width:767px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <span className="pointer-events-none absolute left-3 top-3 bg-charcoal/90 px-3 py-1.5 text-xs font-semibold text-white">
          After
        </span>
        <span className="pointer-events-none absolute right-3 top-3 bg-charcoal/90 px-3 py-1.5 text-xs font-semibold text-white">
          Before
        </span>
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white shadow-[0_0_0_1px_rgba(0,0,0,.15)]"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-charcoal text-white shadow-lg">
            <MoveHorizontal size={21} aria-hidden="true" />
          </span>
        </div>
        <input
          aria-labelledby={labelId}
          aria-describedby={descriptionId}
          type="range"
          min={0}
          max={100}
          step={1}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#82611C]"
        />
      </div>
      <figcaption className="border-t border-[#D7CDBF] pt-5">
        <h3 id={labelId} className="font-display text-3xl md:text-4xl">{title}</h3>
        <p id={descriptionId} className="mt-2 text-sm leading-7 text-[#625B53]">
          {description ? `${description} ` : ""}Move the slider or use arrow keys to compare. Results may vary.
        </p>
        <span className="sr-only">Before: {beforeAlt}. After: {afterAlt}.</span>
      </figcaption>
    </figure>
  );
}
