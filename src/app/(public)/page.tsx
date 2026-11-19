import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

import { Container } from "@/components/layout/container";
import { ParticipantStats } from "@/components/sections/participant-stats";
import { KilasBalikSection } from "@/components/sections/kilas-balik-section";
import { SectionAnimationsGsap } from "@/components/sections/section-animations-gsap";
import { CompetitionBentoSection, type CompetitionItem } from "@/components/sections/competition-bento-section";
import { EventCardsCarousel } from "@/components/sections/event-cards-carousel";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const season4 = "/images/2026/season4";
// Isi dengan ID video YouTube resmi saat tautannya sudah tersedia.
const youtubeVideoId = "";

export const metadata: Metadata = {
  title: "Home",
  description: "UTY Growpath Expo Season 4 — Where Ideas Take Shape.",
};

const eventCards = [
  {
    title: "Gelar Produk",
    description: "Setap tenant menghadirkan produk-produk unggulan untuk ditampilkan kepada pengunjung.",
    image: `${season4}/dokumentasi/docum3.jpg`,
    alt: "Tenant berinteraksi dengan pengunjung",
  },
  {
    title: "Kompetisi",
    description: "Ruang bagi peserta untuk menunjukkan kemampuna, gagasan dan karya terbaiknya.",
    image: `${season4}/dokumentasi/documen7.jpg`,
    alt: "Karya peserta dalam kegiatan Growpath",
  },
  {
    title: "Pemantauan Karya",
    description: "Dosen-dosen akan berkunjung ke setiap tenant dan melihat karya atau produk yang dihasilkan.",
    image: `${season4}/dokumentasi/docum2_1.jpg `,
    alt: "Suasana Pemantauan Karya",
  },
  {
    title: "Expert Talk",
    description: "Sesi inspiratif untuk berbagi cerita & pengalaman bersama narasumber yang hebat.",
    image: `${season4}/dokumentasi/docum8.jpg`,
    alt: "Suasana interaksi dalam kegiatan Growpath",
  },
  {
    title: "Penampilan Band",
    description: "Memberikan tempat bagi para musisi untuk menampilkan karya musik yang mereka miliki.",
    image: `${season4}/dokumentasi/docum9.jpg `,
    alt: "Suasana Penampilan Band",
  },
];

const competitionsData: CompetitionItem[] = [
  {
    id: "band",
    title: "Band Akustik",
    description: "Panggung untuk menampilkan musikalitas dan karya terbaik bersama group bandmu.",
    category: "Eksternal",
    motif: `${season4}/motif/motif2.png`,
    mark: "band",
    registrationUrl: "/info",
  },
  {
    id: "vocal",
    title: "Vokal Solo",
    description: "Tunjukkan skill bernyanyimu diatas panggung Growpath Season 4, dan menangkan hadiahnya.",
    category: "Eksternal",
    motif: `${season4}/motif/motif3.png`,
    mark: "vocal",
    registrationUrl: "/info",
  },
  {
    id: "pitching",
    title: "Pitching",
    description: "Presentasikan ide dan potensi terbaik dari tenantmu.",
    category: "Internal",
    motif: `${season4}/motif/motif2.png`,
    mark: "pitching",
    registrationUrl: "/pendaftaran/mahasiswa",
  },
  {
    id: "tenant",
    title: "Best Tenant",
    description: "Tampilkan pengalaman tenant yang menarik dan berkesan.",
    category: "Internal",
    motif: `${season4}/motif/motif3.png`,
    mark: "tenant",
    registrationUrl: "/pendaftaran/mahasiswa",
  },
  {
    id: "poster",
    title: "Poster",
    description: "Sampaikan gagasan dan kreativitas melalui karya poster.",
    category: "Internal",
    motif: `${season4}/motif/motif5.svg`,
    mark: "poster",
    registrationUrl: "/pendaftaran/mahasiswa",
  },
];

export default function HomePage() {
  return (
    <div data-section-animations className={`${poppins.className} overflow-hidden bg-[#fff9f0] text-[#30302f]`}>
      <SectionAnimationsGsap />
      <section className="relative bg-[#fff9f0]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: `url('${season4}/motif/motif2.png')`, backgroundSize: "150px" }}
        />
        <Container data-reveal-stagger className="relative grid min-h-[590px] items-center gap-8 py-16 pb-24 md:grid-cols-2 md:py-20 md:pb-28">
          <div data-reveal-item="left" className="max-w-xl">
            <div className="mb-7 flex items-center gap-4">
              <Image src={`${season4}/logo/logointernal.png`} width={240} height={60} alt="Identitas Universitas Teknologi Yogyakarta" className="h-10 w-auto object-contain" priority />
            </div>
            <Image
              src={`${season4}/logo/gowpaths4.png`}
              width={410}
              height={500}
              alt="Logo UTY Growpath Expo Season 4"
              priority
              className="mb-5 h-16 w-auto object-contain md:hidden"
            />
            <h1 className="text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl">Vistara <span className="text-[#e13b43]">Navakarya</span></h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#59534d]">
              Where Ideas Take Shape. Ruang bertemunya ide, kreativitas, dan kolaborasi untuk menumbuhkan karya baru.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/info" className="inline-flex items-center justify-center rounded-md bg-[#e13b43] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c92e37]">Jelajahi acara</Link>
              <Link href="/tentang-kami" className="inline-flex items-center justify-center rounded-md border border-[#30302f]/20 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white">Tentang Growpath</Link>
            </div>
          </div>
          <div data-reveal-item="right" className="relative mx-auto hidden w-full max-w-[470px] items-center justify-center py-8 md:flex">
            <Image src={`${season4}/motif/motif1.png`} width={500} height={500} alt="" className="absolute left-0 top-4 w-24 opacity-70 animate-float-slow sm:w-32" />
            <div className="relative flex min-h-[390px] w-[90%] items-center justify-center rounded-[48%] bg-[#f6ebd5] sm:min-h-[450px]">
              <Image src={`${season4}/logo/gowpaths4.png`} width={410} height={500} alt="Logo UTY Growpath Expo Season 4" priority className="relative z-10 w-[62%]" />
              <Image src={`${season4}/motif/motif3.png`} width={100} height={100} alt="" className="absolute bottom-8 right-4 w-16 animate-float-reverse sm:w-20" />
            </div>
          </div>
        </Container>
      </section>

      <div className="relative z-10 h-0">
        <Image src={`${season4}/motif/banner.svg`} width={929} height={142} alt="Growpath Season 4" className="absolute left-[calc(50%+6px)] top-0 h-auto w-[calc(100%-2.5rem)] max-w-[680px] -translate-x-1/2 -translate-y-1/2 object-contain" />
      </div>

      <section aria-labelledby="video-heading" className="pt-24 pb-16 sm:pt-28 sm:pb-24">

        <Container data-reveal-stagger>
          <div data-reveal-item="up" className="mx-auto mb-10 max-w-2xl text-center">
            <h2 id="video-heading" className="mt-3 text-3xl font-bold tracking-tight text-[#2b4869] sm:text-4xl">
              Cerita Growpath dalam video
            </h2>
          </div>

          <div
            data-reveal-item="zoom"
            className="group relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border-4 border-white bg-[#23201d] shadow-[0_28px_70px_-24px_rgba(43,72,105,0.35)] ring-1 ring-[#eadbbd]/70 sm:rounded-3xl"
          >
            {youtubeVideoId ? (
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}`}
                title="Video UTY Growpath Expo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="relative flex h-full w-full items-center justify-center">
                {/* Gambar backdrop dokumentasi */}
                <Image
                  src={`${season4}/dokumentasi/docum2.jpg`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  alt="Dokumentasi kegiatan Growpath"
                  className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay gradasi cinematic */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714]/90 via-[#1a1714]/40 to-[#1a1714]/30" />

                {/* Tombol Play Teaser */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-4 text-center">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#e13b43] text-white shadow-lg transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="relative ml-1 h-7 w-7 sm:h-9 sm:w-9">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-block rounded-full bg-white/20 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      Teaser Video
                    </span>
                    <p className="mt-2 text-base font-semibold text-white sm:text-lg">
                      Video Growpath Season 4 segera hadir!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container data-reveal-stagger className="grid items-center gap-10 md:grid-cols-2">
          <div data-reveal-item="left" className="relative mx-auto w-full max-w-[480px] md:order-2">
            <Image src={`${season4}/motif/motif5.svg`} width={160} height={160} alt="" className="pointer-events-none absolute -left-3 bottom-3 -rotate-2 z-10 w-20 opacity-85 sm:-left-5 sm:w-24" />
            <Image src={`${season4}/motif/motif3.png`} width={150} height={150} alt="" className="pointer-events-none absolute -right-2 top-1 rotate-2 z-10 w-16 opacity-90 sm:right-3 sm:w-20" />
            <div className="relative aspect-[5/4] w-full" style={{ clipPath: "polygon(49% 0%, 60% 5%, 66% 1%, 73% 12%, 83% 16%, 80% 25%, 93% 34%, 88% 43%, 100% 52%, 91% 63%, 96% 72%, 83% 79%, 78% 94%, 66% 89%, 56% 100%, 46% 91%, 35% 97%, 28% 86%, 17% 88%, 16% 77%, 4% 69%, 10% 58%, 0% 50%, 8% 40%, 5% 30%, 19% 25%, 24% 14%, 36% 18%)" }}>
              <Image src={`${season4}/dokumentasi/docum1.jpg`} fill sizes="(max-width: 768px) 100vw, 480px" alt="Tenant berinteraksi dengan pengunjung di Growpath" className="object-cover" />
            </div>
          </div>
          <div data-reveal-item="right" className="max-w-xl md:order-1">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ed8b36]/30 bg-[#ed8b36]/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-[#b85e17] uppercase">
              Tentang Growpath Expo
            </div>
            <h2 className="text-3xl leading-tight font-bold tracking-tight text-[#2b4869] sm:text-4xl">
              Satu ruang untuk banyak kemungkinan.
            </h2>
            <p className="mt-5 leading-7 text-[#625b54]">
              UTY Growpath Expo mempertemukan mahasiswa, komunitas, dan pelaku usaha dalam suasana yang merayakan ide serta karya. Season 4 membawa semangat baru: berakar pada keberagaman Nusantara, terbuka pada kolaborasi, dan berani membentuk masa depan.
            </p>
            <div className="mt-7">
              <Link
                href="/tentang-kami"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#e13b43] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#e13b43] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Kenali Growpath</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#f6ebd5] py-16 sm:py-20">
        <Image src={`${season4}/motif/motif2.png`} width={180} height={180} alt="" className="pointer-events-none absolute -bottom-8 left-2 w-28 opacity-[0.12] sm:left-10 sm:w-36" />
        <Image src={`${season4}/motif/motif3.png`} width={200} height={200} alt="" className="pointer-events-none absolute -right-3 top-3 w-28 opacity-[0.12] sm:right-8 sm:w-40" />
        <Container className="relative">
          <div data-reveal-item="up" className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-2 text-sm font-semibold text-[#528bdd]">Terima kasih atas dukungannya</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Tumbuh bersama para mitra</h2>
          </div>
          <div className="space-y-6">
            <div data-reveal-item="up" className="rounded-xl bg-white p-5 sm:p-8">
              <h3 className="mb-5 text-center text-sm font-semibold">Sponsor</h3>
              <Image src={`${season4}/sponsorship/sponsor.png`} width={1100} height={400} alt="Logo sponsor UTY Growpath Expo Season 4" className="mx-auto h-auto max-h-80 w-full object-contain" />
            </div>
            <div data-reveal-stagger className="grid gap-6 md:grid-cols-2">
              <div data-reveal-item="up" className="rounded-xl bg-white p-6 sm:p-8">
                <h3 className="mb-6 text-center text-sm font-semibold">Media partner</h3>
                <Image src={`${season4}/sponsorship/medpart.png`} width={1100} height={300} alt="Logo media partner UTY Growpath Expo Season 4" className="mx-auto h-auto max-h-64 w-full object-contain" />
              </div>
              <div data-reveal-item="up" className="rounded-xl bg-white p-6 sm:p-8">
                <h3 className="mb-6 text-center text-sm font-semibold">Bersama UTY</h3>
                <Image src={`${season4}/sponsorship/univ.png`} width={768} height={432} alt="Informasi Universitas Teknologi Yogyakarta" className="mx-auto h-auto max-h-64 w-full object-contain" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#e0b83e] py-12 sm:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]" style={{ backgroundImage: `url('${season4}/motif/motif2.png')`, backgroundSize: "180px" }} />
        <Container data-reveal-stagger>
          <div data-reveal-item="up" className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
            <p className="mb-2 text-sm font-semibold text-[#8d493a]">Tunjukkan bakat dan karyamu</p>
            <h2 className="text-3xl font-bold text-[#30302f] sm:text-4xl">Lomba Season 4</h2>
            <p className="mt-3 text-sm text-[#594a37] sm:text-base">Pilih cabang lomba dan bersiap untuk berkarya bersama Growpath.</p>
          </div>

          <div data-reveal-item="up">
            <CompetitionBentoSection items={competitionsData} />
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#30302f] py-12 text-white sm:py-20">
        <Image src={`${season4}/motif/motif2.png`} width={240} height={240} alt="" className="pointer-events-none absolute -left-12 top-1/2 w-40 -translate-y-1/2 opacity-[0.16] sm:left-0 sm:w-52" />
        <Image src={`${season4}/motif/motif3.png`} width={240} height={300} alt="" className="pointer-events-none absolute -right-8 top-1/2 w-36 -translate-y-1/2 opacity-[0.16] sm:right-0 sm:w-48" />
        <Container className="relative">
          <div data-reveal-item="up" className="mb-8 text-center sm:mb-10">
            <p className="mb-2 text-sm font-semibold text-[#f7cb4d]">Bertemu, belajar, dan berkarya</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Rangkaian acara</h2>
          </div>

          <EventCardsCarousel items={eventCards} />
        </Container>
      </section>

      <ParticipantStats />

      <KilasBalikSection />
    </div>
  );
}
