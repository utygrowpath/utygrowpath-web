"use client";

import Image from "next/image";
import Link from "next/link";

export interface CompetitionItem {
  id: string;
  title: string;
  description: string;
  category: "Eksternal" | "Internal";
  motif: string;
  mark: "band" | "vocal" | "pitching" | "tenant" | "poster";
  registrationUrl: string;
}

interface CompetitionBentoSectionProps {
  items: CompetitionItem[];
}

export function CompetitionBentoSection({ items }: CompetitionBentoSectionProps) {
  const band = items.find((i) => i.id === "band")!;
  const vocal = items.find((i) => i.id === "vocal")!;
  const pitching = items.find((i) => i.id === "pitching")!;
  const tenant = items.find((i) => i.id === "tenant")!;
  const poster = items.find((i) => i.id === "poster")!;

  return (
    <div className="mx-auto max-w-6xl">
      {/* Bento Layout Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
        {/* Card 1: Hero Featured - Band (span 7 cols on lg) */}
        <article className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl border border-[#d4ad54]/30 bg-gradient-to-br from-[#8d493a] to-[#6e3529] p-7 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-8 lg:col-span-7">
          <Image
            src={band.motif}
            width={240}
            height={240}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 w-48 opacity-20 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-30"
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
                Eksternal
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
                <MusicIcon />
              </div>
            </div>

            <h3 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {band.title}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
              {band.description}
            </p>
          </div>

          <div className="relative z-10 mt-6 flex items-center justify-between pt-4">
            <Link
              href={band.registrationUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-[#8d493a] shadow transition-all duration-200 hover:bg-[#fff9f0] active:scale-95 sm:text-sm"
            >
              Daftar Band Akustik
            </Link>
          </div>
        </article>

        {/* Card 2: Featured - Vokal Solo (span 5 cols on lg) */}
        <article className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl border border-[#d4ad54]/30 bg-[#fffdf8] p-7 text-[#30302f] shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#8d493a]/40 hover:shadow-xl sm:p-8 lg:col-span-5">
          <Image
            src={vocal.motif}
            width={200}
            height={200}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-8 w-40 opacity-15 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-25"
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-[#8d493a]/10 px-3 py-1 text-xs font-semibold text-[#8d493a]">
                Eksternal
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8d493a]/10 text-[#8d493a]">
                <MicIcon />
              </div>
            </div>

            <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#30302f]">
              {vocal.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#625b54]">
              {vocal.description}
            </p>
          </div>

          <div className="relative z-10 mt-6 pt-4">
            <Link
              href={vocal.registrationUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-[#8d493a] px-5 py-2.5 text-xs font-bold text-white shadow transition-all duration-200 hover:bg-[#72382c] active:scale-95 sm:text-sm"
            >
              Daftar Vokal Solo
            </Link>
          </div>
        </article>

        {/* Card 3: Pitching (span 4 cols on lg) */}
        <article className="group relative flex min-h-[210px] flex-col justify-between overflow-hidden rounded-3xl border border-[#d4ad54]/30 bg-[#fffdf8] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#2b527d]/40 hover:shadow-xl sm:p-7 lg:col-span-4">
          <Image
            src={pitching.motif}
            width={180}
            height={180}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -bottom-6 w-32 opacity-15 transition-transform duration-500 group-hover:scale-110"
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-[#2b527d]/10 px-2.5 py-1 text-[11px] font-semibold text-[#2b527d]">
                Internal
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2b527d]/10 text-[#2b527d]">
                <PitchingIcon />
              </div>
            </div>

            <h3 className="mt-4 text-xl font-bold tracking-tight text-[#30302f]">
              {pitching.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#625b54] sm:text-sm">
              {pitching.description}
            </p>
          </div>
        </article>

        {/* Card 4: Best Tenant - Hero Internal (span 4 cols on lg) */}
        <article className="group relative flex min-h-[210px] flex-col justify-between overflow-hidden rounded-3xl border border-[#2b527d]/30 bg-gradient-to-br from-[#2b527d] to-[#1e3c5d] p-6 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 lg:col-span-4">
          <Image
            src={tenant.motif}
            width={180}
            height={180}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -bottom-6 w-32 opacity-20 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-30"
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-semibold text-white">
                Internal 
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white">
                <StoreIcon />
              </div>
            </div>

            <h3 className="mt-4 text-xl font-bold tracking-tight text-white">
              {tenant.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-white/80 sm:text-sm">
              {tenant.description}
            </p>
          </div>
        </article>

        {/* Card 5: Poster (span 4 cols on lg) */}
        <article className="group relative flex min-h-[210px] flex-col justify-between overflow-hidden rounded-3xl border border-[#d4ad54]/30 bg-[#fffdf8] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#2b527d]/40 hover:shadow-xl sm:p-7 lg:col-span-4">
          <Image
            src={poster.motif}
            width={180}
            height={180}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -bottom-6 w-32 opacity-15 transition-transform duration-500 group-hover:scale-110"
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-[#2b527d]/10 px-2.5 py-1 text-[11px] font-semibold text-[#2b527d]">
                Internal 
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2b527d]/10 text-[#2b527d]">
                <PosterIcon />
              </div>
            </div>

            <h3 className="mt-4 text-xl font-bold tracking-tight text-[#30302f]">
              {poster.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#625b54] sm:text-sm">
              {poster.description}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

function MusicIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="18" r="3" />
      <circle cx="17" cy="16" r="3" />
      <path d="M12 18V6l8-2v12" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

function PitchingIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
    </svg>
  );
}

function PosterIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}
