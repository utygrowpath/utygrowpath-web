import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

import { Container } from "@/components/layout/container";
import { ParticipantStats } from "@/components/sections/participant-stats";
import { SectionAnimations } from "@/components/sections/section-animations";
import { MobileCardCarousel } from "@/components/sections/mobile-card-carousel";

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
    title: "Pameran dan tenant",
    description: "Temukan produk, ide, dan cerita dari tenant yang berpartisipasi.",
    image: `${season4}/dokumentasi/docum1.png`,
    alt: "Tenant berinteraksi dengan pengunjung",
  },
  {
    title: "Kompetisi",
    description: "Ruang bagi peserta untuk menunjukkan gagasan dan karya terbaik.",
    image: `${season4}/dokumentasi/docum2.png`,
    alt: "Karya peserta dalam kegiatan Growpath",
  },
  {
    title: "Ruang kolaborasi",
    description: "Berkenalan, berbagi pengalaman, dan membuka kemungkinan baru.",
    image: `${season4}/dokumentasi/docum1.png`,
    alt: "Suasana interaksi dalam kegiatan Growpath",
  },
];

const competitions = [
  {
    title: "Band",
    description: "Panggung untuk menampilkan musikalitas, kekompakan, dan karya terbaik bersama band-mu.",
    motif: `${season4}/motif/motif2.png`,
  },
  {
    title: "Dance",
    description: "Tunjukkan kreativitas dan energi melalui penampilan tari bersama tim pilihanmu.",
    motif: `${season4}/motif/motif3.png`,
  },
];

function CompetitionMark({ type }: { type: "band" | "dance" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 100" className="h-16 w-16 sm:h-20 sm:w-20" fill="none">
      <circle cx="50" cy="50" r="48" fill="#30302f" />
      {type === "band" ? (
        <g stroke="#fff9f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5">
          <path d="M39 68V39l25-9v29" />
          <ellipse cx="34" cy="70" rx="8" ry="6" fill="#fff9f0" />
          <ellipse cx="60" cy="62" rx="8" ry="6" fill="#fff9f0" />
          <path d="M46 49l13-5" />
        </g>
      ) : (
        <g stroke="#fff9f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5">
          <circle cx="55" cy="27" r="7" fill="#fff9f0" stroke="none" />
          <path d="M51 39 39 50l14 8 13-12M51 39l15 7M53 58l-4 17M53 58l15 13M39 50l-9-11M68 45l8-10" />
        </g>
      )}
    </svg>
  );
}

export default function HomePage() {
  return (
    <div data-section-animations className={`${poppins.className} overflow-hidden bg-[#fff9f0] text-[#30302f]`}>
      <SectionAnimations />
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
                  src={`${season4}/dokumentasi/docum2.png`}
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
            <Image src={`${season4}/motif/motif2.png`} width={160} height={160} alt="" className="pointer-events-none absolute -left-3 bottom-3 z-10 w-20 opacity-85 sm:-left-5 sm:w-24" />
            <Image src={`${season4}/motif/motif3.png`} width={150} height={150} alt="" className="pointer-events-none absolute -right-2 top-1 z-10 w-16 opacity-90 sm:-right-4 sm:w-20" />
            <div className="relative aspect-[5/4] w-full" style={{ clipPath: "polygon(49% 0%, 60% 5%, 66% 1%, 73% 12%, 83% 16%, 80% 25%, 93% 34%, 88% 43%, 100% 52%, 91% 63%, 96% 72%, 83% 79%, 78% 94%, 66% 89%, 56% 100%, 46% 91%, 35% 97%, 28% 86%, 17% 88%, 16% 77%, 4% 69%, 10% 58%, 0% 50%, 8% 40%, 5% 30%, 19% 25%, 24% 14%, 36% 18%)" }}>
              <Image src={`${season4}/dokumentasi/docum1.png`} fill sizes="(max-width: 768px) 100vw, 480px" alt="Tenant berinteraksi dengan pengunjung di Growpath" className="object-cover" />
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

      <section className="relative isolate overflow-hidden bg-[#e0b83e] py-10 sm:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]" style={{ backgroundImage: `url('${season4}/motif/motif2.png')`, backgroundSize: "180px" }} />
        <Container>
          <div data-reveal-item="up" className="mx-auto mb-7 max-w-2xl text-center sm:mb-10">
            <p className="mb-2 text-sm font-semibold text-[#8d493a]">Tunjukkan bakat dan karyamu</p>
            <h2 className="text-3xl font-bold text-[#30302f] sm:text-4xl">Lomba Season 4</h2>
            <p className="mt-3 text-[#594a37]">Pilih panggungmu dan bersiap untuk tampil bersama Growpath.</p>
          </div>
          <MobileCardCarousel
            label="Lomba Season 4"
            items={competitions.map((competition) => (
              <article key={competition.title} className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-white px-6 py-8 text-center border border-[#d4ad54]/30">
                <Image src={competition.motif} width={100} height={100} alt="" className="absolute right-3 top-3 w-16 opacity-15" />
                <div className="mb-2">
                  <CompetitionMark type={competition.title === "Band" ? "band" : "dance"} />
                </div>
                <h3 className="text-2xl font-bold tracking-wide text-[#2b527d]">{competition.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-[#8d493a]">{competition.description}</p>
                <Link href="/info" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#8d493a] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all active:scale-95 hover:bg-[#713a2f]">Informasi lomba</Link>
              </article>
            ))}
          />
          <div data-reveal-stagger className="mx-auto hidden max-w-4xl gap-5 md:grid md:grid-cols-2">
            {competitions.map((competition) => (
              <article key={competition.title} data-reveal-item="zoom" className="relative flex min-h-72 flex-col items-center justify-center overflow-hidden rounded-md bg-white px-7 py-8 text-center shadow-md">
                <Image src={competition.motif} width={100} height={100} alt="" className="absolute right-4 top-4 w-16 opacity-20" />
                <CompetitionMark type={competition.title === "Band" ? "band" : "dance"} />
                <h3 className="text-3xl font-bold tracking-wide text-[#2b527d]">{competition.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-[#8d493a]">{competition.description}</p>
                <Link href="/info" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-[#8d493a] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#713a2f]">Informasi lomba</Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#30302f] py-10 text-white sm:py-20">
        <Image src={`${season4}/motif/motif2.png`} width={240} height={240} alt="" className="pointer-events-none absolute -left-12 top-1/2 w-40 -translate-y-1/2 opacity-[0.16] sm:left-0 sm:w-52" />
        <Image src={`${season4}/motif/motif3.png`} width={240} height={300} alt="" className="pointer-events-none absolute -right-8 top-1/2 w-36 -translate-y-1/2 opacity-[0.16] sm:right-0 sm:w-48" />
        <Container className="relative">
          <div data-reveal-item="up" className="mb-7 text-center sm:mb-9">
            <p className="mb-2 text-sm font-semibold text-[#f7cb4d]">Bertemu, belajar, dan berkarya</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Rangkaian acara</h2>
          </div>
          <MobileCardCarousel
            label="Rangkaian acara"
            items={eventCards.map((event) => (
              <article key={event.title} className="overflow-hidden rounded-2xl bg-white text-[#30302f]">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image src={event.image} fill sizes="(max-width: 768px) 100vw, 456px" alt={event.alt} className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="mt-2 text-lg font-bold text-[#2b4869]">{event.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#625b54]">{event.description}</p>
                </div>
              </article>
            ))}
          />
          <div data-reveal-stagger className="hidden gap-5 md:grid md:grid-cols-3">
            {eventCards.map((event) => (
              <article key={event.title} data-reveal-item="up" className="overflow-hidden rounded-xl bg-white text-[#30302f]">
                <Image src={event.image} width={456} height={300} alt={event.alt} className="aspect-[4/3] w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-bold">{event.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#625b54]">{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <ParticipantStats />

      <section className="bg-[#fff9f0] py-14 sm:py-16">
        <Container data-reveal-stagger className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div data-reveal-item="left" className="relative mx-auto w-full max-w-[460px]">
            <Image src={`${season4}/dokumentasi/docum2.png`} width={373} height={250} alt="Suasana kunjungan ke kegiatan Growpath" className="aspect-[3/2] w-full rounded-xl object-cover" />
            <div className="absolute -bottom-4 right-4 rounded-md bg-[#e13b43] px-4 py-2 text-sm font-semibold text-white">Growpath Season 4</div>
            <Image src={`${season4}/motif/motif1.png`} width={200} height={200} alt="" className="absolute -left-8 -top-5 -rotate-10 w-16 opacity-80" />
          </div>
          <div data-reveal-item="right" className="max-w-xl py-3">
            <p className="mb-2 text-sm font-semibold text-[#ed8b36]">Jadi bagian dari Growpath Season 4</p>
            <h2 className="text-3xl leading-tight font-bold text-[#2b4869] sm:text-4xl">Bawa karyamu bertemu dengan lebih banyak orang.</h2>
            <p className="mt-4 leading-7 text-[#625b54]">Bergabung sebagai tenant dan hadirkan produk atau karyamu di tengah komunitas Growpath.</p>
            <Link href="/info-tenant" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-[#e0b83e] px-6 py-3 text-sm font-semibold text-[#30302f] transition-colors hover:bg-[#f7cb4d]">Gabung sebagai tenant</Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
