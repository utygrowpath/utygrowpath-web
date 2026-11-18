import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { SectionAnimationsGsap } from "@/components/sections/section-animations-gsap";
import { EditorialPhotobookGallery } from "@/components/sections/editorial-photobook-gallery";
import { siteConfig } from "@/config/site";

const season4 = `/images/${siteConfig.year}/season4`;

export const metadata: Metadata = {
  title: "Dokumentasi",
  description: `Koleksi foto dan momen perjalanan ${siteConfig.name}.`,
};

export default function DokumentasiPage() {
  return (
    <div
      data-section-animations
      className="overflow-hidden bg-[#fff9f0] text-[#30302f]"
    >
      <SectionAnimationsGsap />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b border-[#e9dcc3] bg-[radial-gradient(ellipse_at_center,_#fffdf8_0%,_#fff5df_58%,_#f8e9c9_100%)]">
        <Image
          src={`${season4}/motif/motif1.png`}
          width={500}
          height={500}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 z-0 w-52 -translate-y-1/2 opacity-[0.16] animate-float-slow sm:-left-12 sm:w-80 lg:left-0 lg:w-[26rem]"
        />
        <Image
          src={`${season4}/motif/motif3.png`}
          width={500}
          height={500}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-1/2 z-0 w-52 -translate-y-1/2 rotate-12 opacity-[0.14] animate-float-reverse sm:-right-12 sm:w-80 lg:right-0 lg:w-[26rem]"
        />
        <Container className="relative z-10 flex min-h-[420px] items-center justify-center py-12 sm:min-h-[480px] sm:py-16">
          <div
            data-reveal-stagger
            className="flex w-full max-w-3xl flex-col items-center gap-6 py-8 text-center"
          >
            <div
              data-reveal-item="zoom"
              className="relative flex h-40 w-40 shrink-0 items-center justify-center rounded-full border border-[#e0b83e]/70 ring-8 ring-[#e0b83e]/10 shadow-[0_16px_36px_-16px_rgba(224,184,62,0.4)] sm:h-44 sm:w-44"
            >
              <Image
                src={`${season4}/logo/gowpaths4.png`}
                width={410}
                height={500}
                alt=""
                priority
                className="h-32 w-28 object-contain sm:h-36 sm:w-32"
              />
            </div>
            <h1 className="pt-2 text-2xl leading-tight font-bold tracking-tight text-[#8d493a] sm:text-3xl md:text-4xl">
              Galeri Kegiatan UTY Growpath Expo
            </h1>
          </div>
        </Container>
      </section>

      {/* Galeri Editorial Photobook Spread */}
      <section className="relative isolate overflow-hidden py-16 sm:py-24">
        {/* Background Pattern Motif (seperti halaman Sudut Inspirasi & Tentang Kami) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.045]"
          style={{
            backgroundImage: "url('/images/2026/season4/motif/motif2.png')",
            backgroundSize: "160px",
            backgroundRepeat: "repeat",
          }}
        />

        {/* Floating Motifs di Sudut Kiri & Kanan Galeri */}
        <Image
          src={`${season4}/motif/motif2.png`}
          width={280}
          height={280}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-12 top-1/4 z-0 w-44 opacity-[0.12] sm:w-56"
        />
        <Image
          src={`${season4}/motif/motif3.png`}
          width={280}
          height={280}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 top-2/3 z-0 w-44 opacity-[0.12] sm:w-56"
        />

        <Container className="relative z-10">
          <EditorialPhotobookGallery />
        </Container>
      </section>
    </div>
  );
}
