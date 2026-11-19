"use client";

import Image from "next/image";
import { useState } from "react";

interface CompetitionItem {
  title: string;
  description: string;
  motif: string;
  mark: "band" | "vocal" | "pitching" | "tenant" | "poster";
}

export function CompetitionCarousel({ items, label }: { items: CompetitionItem[]; label: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  const showPrevious = () => setActiveIndex((index) => (index - 1 + items.length) % items.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % items.length);
  const mark = activeItem.mark;

  return (
    <article className="relative flex min-h-56 items-center justify-center overflow-hidden rounded-2xl border border-[#d4ad54]/30 bg-white px-12 py-8 text-center shadow-sm sm:min-h-64 sm:px-14">
      <Image src={activeItem.motif} width={100} height={100} alt="" className="pointer-events-none absolute right-3 top-3 w-16 opacity-15" />
      <button
        type="button"
        aria-label={`Lomba ${label} sebelumnya`}
        onClick={showPrevious}
        className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-[#30302f] shadow-md transition hover:bg-[#fff9f0] active:scale-95 sm:left-3 sm:h-10 sm:w-10"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" /></svg>
      </button>
      <div aria-live="polite" className="relative flex flex-col items-center">
        <svg aria-hidden="true" viewBox="0 0 100 100" className="mb-3 h-14 w-14 sm:h-16 sm:w-16" fill="none">
          <circle cx="50" cy="50" r="48" fill="#30302f" />
          {mark === "band" ? (
            <g stroke="#fff9f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5">
              <path d="M39 68V39l25-9v29" /><ellipse cx="34" cy="70" rx="8" ry="6" fill="#fff9f0" /><ellipse cx="60" cy="62" rx="8" ry="6" fill="#fff9f0" /><path d="M46 49l13-5" />
            </g>
          ) : mark === "vocal" ? (
            <g stroke="#fff9f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"><path d="M58 25v34a10 10 0 1 1-5-8V34l25-6v26a10 10 0 1 1-5-8V21z" /></g>
          ) : (
            <g stroke="#fff9f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
              {mark === "pitching" ? <><path d="M28 70h44M35 63l8-17 9 7 13-22 8 32" /><path d="m59 31 6 0 0 6" /></> : null}
              {mark === "tenant" ? <><path d="M28 43h44l-5-15H33zM32 43v29h36V43M43 72V54h14v18" /><path d="M28 43c0 8 11 8 11 0 0 8 11 8 11 0 0 8 11 8 11 0 0 8 11 8 11 0" /></> : null}
              {mark === "poster" ? <><path d="M34 25h32v50H34zM42 38h16M42 47h16M42 56h10" /><path d="m43 67 7-6 7 6" /></> : null}
            </g>
          )}
        </svg>
        <h3 className="text-xl font-bold tracking-wide text-[#2b527d] sm:text-2xl">{activeItem.title}</h3>
        <p className="mt-2 max-w-xs text-xs leading-5 text-[#625b54] sm:text-sm sm:leading-6">{activeItem.description}</p>
      </div>
      <button
        type="button"
        aria-label={`Lomba ${label} selanjutnya`}
        onClick={showNext}
        className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-[#30302f] shadow-md transition hover:bg-[#fff9f0] active:scale-95 sm:right-3 sm:h-10 sm:w-10"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" /></svg>
      </button>
    </article>
  );
}
