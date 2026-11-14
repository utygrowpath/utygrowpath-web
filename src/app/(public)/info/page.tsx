import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { InfoListView } from "@/components/sections/info-list-view";
import { SectionAnimations } from "@/components/sections/section-animations";
import { infoPosts } from "@/data/info";

export const metadata: Metadata = {
  title: "Informasi",
  description:
    "Halaman Informasi Tenant dan Pengumuman Resmi seputar UTY Growpath Expo Season 4.",
};

export default function InfoPage() {
  return (
    <div data-section-animations className="overflow-hidden bg-[#fff9f0] text-[#30302f]">
      <SectionAnimations />

      {/* Hero Section */}
      <section
        data-no-reveal
        className="relative isolate overflow-hidden border-b border-[#e9dcc3] bg-[radial-gradient(ellipse_at_center,_#fffdf8_0%,_#fff5df_58%,_#f8e9c9_100%)]"
      >
        {/* Decorative Motif & Photo Overlay */}
        <Image
          src="/images/2026/season4/motif/motif1.png"
          width={500}
          height={500}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/2 z-0 w-64 -translate-y-1/2 opacity-[0.16] sm:-left-12 sm:w-80 lg:left-0 lg:w-[26rem] animate-float-slow"
        />
        <Image
          src="/images/2026/season4/motif/motif3.png"
          width={500}
          height={500}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-1/2 z-0 w-64 -translate-y-1/2 rotate-12 opacity-[0.14] sm:-right-12 sm:w-80 lg:right-0 lg:w-[26rem] animate-float-reverse"
        />

        {/* Ambient subtle documentation blend on the right side */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 z-0 w-1/2 opacity-[0.12] [mask-image:linear-gradient(to_left,rgba(0,0,0,1)_0%,transparent_100%)]"
        >
          <Image
            src="/images/2026/season4/dokumentasi/docum1.png"
            fill
            alt=""
            className="object-cover"
          />
        </div>

        <Container className="relative z-10 flex min-h-[420px] items-center justify-center py-12 sm:min-h-[480px] sm:py-16">
          <div className="flex w-full max-w-3xl flex-col items-center gap-6 py-6 text-center">
            {/* Logo Badge */}
            <div className="relative flex h-36 w-36 shrink-0 items-center justify-center rounded-full border border-[#e0b83e]/70 bg-white/70 shadow-[0_16px_36px_-16px_rgba(224,184,62,0.4)] ring-8 ring-[#e0b83e]/10 backdrop-blur-xs sm:h-44 sm:w-44 animate-hero-zoom">
              <Image
                src="/images/2026/season4/logo/gowpaths4.png"
                width={410}
                height={500}
                alt="Logo UTY Growpath Expo"
                priority
                className="h-28 w-24 object-contain transition-transform duration-500 hover:scale-105 sm:h-36 sm:w-32"
              />
            </div>

            {/* Title & Description */}
            <div className="animate-hero-fade-delayed space-y-4">
              <h1 className="text-3xl font-bold tracking-tight text-[#2b4869] sm:text-4xl md:text-5xl">
                Informasi
              </h1>
              <p className="mx-auto max-w-2xl text-justify text-sm leading-relaxed text-[#625b54] sm:text-center sm:text-base sm:leading-7">
                Halaman Informasi Tenant menyajikan berbagai informasi penting serta
                pengumuman terbaru yang ditujukan khusus untuk para tenant di UTY
                Growpath Expo. Temukan panduan, pembaruan, serta pengumuman yang
                dapat membantu tenant dalam mengoptimalkan kehadiran dan kontribusinya
                di expo ini. Jadikan halaman ini sebagai sumber utama untuk tetap
                terhubung dengan segala perkembangan dan kesempatan yang tersedia bagi
                tenant. Mari bersama-sama menciptakan pengalaman expo yang sukses dan
                berkesan!
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Decorative Batik Ribbon Strip */}
      <div className="relative z-20 h-3.5 w-full overflow-hidden bg-[#2b4869] shadow-sm sm:h-4">
        <Image
          src="/images/2026/season4/motif/line-batik - 1.svg"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover opacity-90"
        />
      </div>

      {/* Content Section */}
      <section className="relative isolate overflow-hidden bg-[#fff9f0] py-14 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.045]"
          style={{
            backgroundImage: "url('/images/2026/season4/motif/motif2.png')",
            backgroundSize: "160px",
            backgroundRepeat: "repeat",
          }}
        />

        <Container className="relative z-10 max-w-5xl">
          <InfoListView posts={infoPosts} />
        </Container>
      </section>
    </div>
  );
}
