import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { OurTeamView } from "@/components/sections/our-team-view";
import { SectionAnimations } from "@/components/sections/section-animations";
import { committee } from "@/data/panitia";

export const metadata: Metadata = {
  title: "Meet This Team",
  description:
    "Kenali tim dan kepengurusan di balik suksesnya perhelatan UTY Growpath Expo Season 4.",
};

export default function TimKamiPage() {
  return (
    <div data-section-animations className="overflow-hidden bg-[#fff9f0] text-[#30302f]">
      <SectionAnimations />

      {/* Hero Section */}
      <section
        data-no-reveal
        className="relative isolate overflow-hidden border-b border-[#e9dcc3] bg-[radial-gradient(ellipse_at_center,_#fffdf8_0%,_#fff5df_58%,_#f8e9c9_100%)]"
      >
        {/* Floating Motifs: Kiri = motif6.svg, Kanan = motif5.svg */}
        <Image
          src="/images/2026/season4/motif/motif6.svg"
          width={500}
          height={500}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 z-0 h-auto w-40 -translate-y-1/2 -rotate-12 opacity-[0.14] sm:-left-12 sm:w-64 lg:left-2 lg:w-90 animate-float-slow"
        />
        <Image
          src="/images/2026/season4/motif/motif5.svg"
          width={500}
          height={500}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-1/2 z-0 h-auto w-52 -translate-y-1/2 rotate-12 opacity-[0.12] sm:-right-12 sm:w-80 lg:right-0 lg:w-[26rem] animate-float-reverse"
        />

        <Container className="relative z-10 flex min-h-[420px] items-center justify-center py-12 sm:min-h-[480px] sm:py-16">
          <div className="flex w-full max-w-3xl flex-col items-center gap-6 py-8 text-center">
            {/* Logo Badge */}
            <div className="relative flex h-40 w-40 shrink-0 items-center justify-center rounded-full border border-[#e0b83e]/70 ring-8 ring-[#e0b83e]/10 shadow-[0_16px_36px_-16px_rgba(224,184,62,0.4)] sm:h-44 sm:w-44 animate-hero-zoom">
              <Image
                src="/images/2026/season4/logo/gowpaths4.png"
                width={410}
                height={500}
                alt="Logo UTY Growpath Expo"
                priority
                className="h-32 w-28 object-contain transition-transform duration-500 hover:scale-105 sm:h-36 sm:w-32"
              />
            </div>

            {/* Title */}
            <div className="animate-hero-fade-delayed">
              <h1 className="text-2xl leading-tight font-bold tracking-tight text-[#8d493a] sm:text-3xl md:text-4xl">
                Meet The Team Growpath S4
              </h1>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="relative isolate overflow-hidden bg-[#fff9f0] py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.045]"
          style={{
            backgroundImage: "url('/images/2026/season4/motif/motif2.png')",
            backgroundSize: "160px",
            backgroundRepeat: "repeat",
          }}
        />

        <Container className="relative z-10 max-w-6xl">
          <OurTeamView committee={committee} />
        </Container>
      </section>
    </div>
  );
}
