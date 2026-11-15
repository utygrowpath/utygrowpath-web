import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";

import { Container } from "@/components/layout/container";
import { SectionAnimationsGsap } from "@/components/sections/section-animations-gsap";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { SEASONS, getItemsBySeason } from "@/data/dokumentasi";
import type { DocumentationItem, DocumentationSeason } from "@/types/content";

const season4 = "/images/2026/season4";

export const metadata: Metadata = {
  title: "Dokumentasi",
  description:
    "Kumpulan foto dan video kegiatan UTY Growpath Expo dari tiap season.",
};

export default function DokumentasiPage() {
  const itemsBySeason = Object.fromEntries(
    SEASONS.map((season) => [season.id, getItemsBySeason(season.id)]),
  ) as Record<DocumentationSeason, DocumentationItem[]>;

  return (
    <div
      data-section-animations
      className="overflow-hidden bg-[#fff9f0] text-[#30302f]"
    >
      <SectionAnimationsGsap />

      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-[#e9dcc3] bg-[radial-gradient(ellipse_at_center,_#fffdf8_0%,_#fff5df_58%,_#f8e9c9_100%)]">
        {/*
          Motif kiri tidak memakai -translate-y-1/2 supaya transform-nya bisa
          dipakai GSAP untuk parallax (GSAP menulis `transform` inline).
        */}
        <Image
          src={`${season4}/motif/motif1.png`}
          width={500}
          height={500}
          alt=""
          aria-hidden="true"
          data-parallax="34"
          className="pointer-events-none absolute -left-20 top-[16%] z-0 w-64 opacity-[0.16] sm:-left-12 sm:w-80 lg:left-0 lg:w-[26rem]"
        />
        <Image
          src={`${season4}/motif/motif3.png`}
          width={500}
          height={500}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-1/2 z-0 w-64 -translate-y-1/2 rotate-12 opacity-[0.14] sm:-right-12 sm:w-80 lg:right-0 lg:w-[26rem]"
        />
        <Container className="relative z-10 py-16 sm:py-20">
          <div
            data-reveal-stagger
            className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 text-center"
          >
            <div
              data-reveal-item="zoom"
              className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full border border-[#e0b83e]/70 ring-8 ring-[#e0b83e]/10 sm:h-36 sm:w-36"
            >
              <Image
                src={`${season4}/logo/gowpaths4.png`}
                width={410}
                height={500}
                alt=""
                priority
                className="h-24 w-20 object-contain sm:h-28 sm:w-24"
              />
            </div>
            <p
              data-reveal-item="up"
              className="text-sm font-semibold tracking-[0.14em] text-[#a34f3c] uppercase"
            >
              Arsip UTY Growpath Expo
            </p>
            <h1
              data-reveal-item="up"
              className="text-[clamp(44px,5.2vw,80px)] leading-[1.02] font-bold tracking-tight text-[#8d493a]"
            >
              Galeri kegiatan
            </h1>
            <p
              data-reveal-item="up"
              className="max-w-2xl text-[18px] leading-8 text-[#594a37]"
            >
              Kumpulan foto dan video kegiatan UTY Growpath Expo dari season ke
              season. Klik satu kartu untuk melihatnya lebih besar, lalu gunakan
              tombol panah untuk pindah ke momen berikutnya.
            </p>
          </div>
        </Container>
      </section>

      {/* Galeri */}
      <section className="py-16 sm:py-20">
        <Container data-reveal-stagger>
          <div data-reveal-stagger className="max-w-2xl">
            <h2 data-reveal-item="up" className="text-3xl font-bold sm:text-4xl">
              Momen tiap season
            </h2>
            <p data-reveal-item="up" className="mt-3 leading-7 text-[#625b54]">
              Pilih season di bawah untuk melihat foto dan video kegiatan pada
              tahun itu. Kartu bertanda Video bisa diputar langsung di halaman
              ini.
            </p>
          </div>

          <div data-reveal-item="up" className="mt-10">
            {/*
              useSearchParams() di dalam GalleryGrid menuntut boundary ini.
              Fallback dibentuk seperti kartu asli supaya tidak ada lompatan
              layout saat galeri siap.
            */}
            <Suspense fallback={<GallerySkeleton />}>
              <GalleryGrid seasons={SEASONS} itemsBySeason={itemsBySeason} />
            </Suspense>
          </div>
        </Container>
      </section>
    </div>
  );
}

/** Bentuknya sengaja mengikuti chip tab + kartu 3 kolom agar tidak ada CLS. */
function GallerySkeleton() {
  return (
    <div aria-hidden="true">
      <div className="flex flex-wrap items-center gap-2">
        {SEASONS.map((season) => (
          <span
            key={season.id}
            className="h-11 w-32 rounded-full border border-[#e9dfca] bg-white"
          />
        ))}
      </div>
      {/*
        Jumlah kartu asli belum bisa diketahui di server, jadi fallback sengaja
        pendek (satu baris) supaya area yang bergeser saat galeri siap kecil.
      */}
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((key) => (
          <li
            key={key}
            className="overflow-hidden rounded-2xl border border-[#e9dfca] bg-[#fffdf8]"
          >
            <span className="block aspect-video w-full bg-[#f6ebd5]" />
            <span className="block p-5">
              <span className="block h-4 w-2/3 rounded bg-[#f6ebd5]" />
              <span className="mt-3 block h-3 w-1/2 rounded bg-[#f6ebd5]" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
