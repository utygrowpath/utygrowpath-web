import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { SectionAnimations } from "@/components/sections/section-animations";
import { siteConfig } from "@/config/site";

const seasonStories = [
  {
    season: "Season 1",
    year: "2023",
    theme:
      "Entrepreneurship in Society 5.0: Adaptation, Collaboration, and Synergy in Creating Business Innovation",
    description: [
      "Mengangkat perubahan dunia bisnis akibat teknologi, globalisasi, serta dinamika sosial dan ekonomi, Season 1 mengajak wirausaha muda untuk beradaptasi dan terus berinovasi agar tetap relevan di era Society 5.0. Melalui tema ini, UTY Growpath Expo #1 menjadi ruang tumbuh bagi wirausaha mahasiswa dan inovasi bisnis yang berkelanjutan.",
    ],
    image: "/images/2026/season4/dokumentasi/docum2.png",
    alt: "Suasana kegiatan dan interaksi pengunjung di Growpath",
  },
  {
    season: "Season 2",
    year: "2024",
    theme:
      "Ratimaya Nusantara: Membangun Kolaborasi melalui Inovasi dan Kewirausahaan dalam Melestarikan Warisan Budaya Nusantara",
    description: [
      "Season 2 menjadi ruang bagi wirausaha muda UTY untuk mengenalkan produk, berkompetisi, dan membangun kolaborasi. Mengusung Ratimaya Nusantara, season ini merayakan kekayaan usaha dan budaya lokal Indonesia, memperkuat identitas nasional, serta mendorong kreativitas yang berakar pada warisan budaya.",
    ],
    image: "/images/2026/season4/dokumentasi/docum1.png",
    alt: "Pengunjung berinteraksi dengan tenant dan produk Growpath",
  },
  {
    season: "Season 3",
    year: "2025",
    theme: "Tumbuh lewat kolaborasi dan keberanian memulai",
    description: [
      "Season 3 menjadi ruang bagi mahasiswa untuk mengenalkan ide dan karya kepada masyarakat, memahami kebutuhan pengunjung, serta melihat peluang usaha. Semangatnya adalah berani memulai dan tumbuh bersama melalui kolaborasi.",
    ],
    image: "/images/2026/season4/dokumentasi/docum2.png",
    alt: "Pengunjung menyaksikan karya dan produk dalam kegiatan Growpath",
  },
  {
    season: "Season 4",
    year: "2026",
    theme: "Vistara Navakarya: Where Ideas Take Shape",
    description: [
      "Vistara Navakarya mengajak mahasiswa, komunitas, dan pelaku usaha merayakan keberagaman ide serta membentuknya menjadi karya. Season 4 berfokus pada pengalaman belajar, jejaring, dan kolaborasi yang inklusif.",
    ],
    image: "/images/2026/season4/dokumentasi/docum1.png",
    alt: "Suasana pengunjung menikmati produk di acara Growpath",
  },
];

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Kenali cerita, perjalanan, dan semangat ${siteConfig.name}.`,
};

export default function TentangKamiPage() {
  return (
    <div data-section-animations className="overflow-hidden bg-[#fff9f0] text-[#30302f]">
      <SectionAnimations />

      {/* Hero section: Menggunakan data-no-reveal agar animasi entrance langsung tampil saat hard reload */}
      <section
        data-no-reveal
        className="relative isolate overflow-hidden border-y border-[#e9dcc3] bg-[radial-gradient(ellipse_at_center,_#fffdf8_0%,_#fff5df_58%,_#f8e9c9_100%)]"
      >
        <Image
          src="/images/2026/season4/motif/motif1.png"
          width={500}
          height={500}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 z-0 w-52 -translate-y-1/2 opacity-[0.14] sm:-left-12 sm:w-80 lg:left-0 lg:w-[26rem] animate-float-slow"
        />
        <Image
          src="/images/2026/season4/motif/motif3.png"
          width={500}
          height={500}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-1/2 z-0 w-52 -translate-y-1/2 rotate-12 opacity-[0.12] sm:-right-12 sm:w-80 lg:right-0 lg:w-[26rem] animate-float-reverse"
        />
        <Container className="relative z-10 flex min-h-[420px] items-center justify-center py-12 sm:min-h-[480px] sm:py-16">
          <div className="flex w-full max-w-3xl flex-col items-center gap-6 py-8 text-center">
            <div className="relative flex h-40 w-40 shrink-0 items-center justify-center rounded-full border border-[#e0b83e]/70 ring-8 ring-[#e0b83e]/10 shadow-[0_16px_36px_-16px_rgba(224,184,62,0.4)] sm:h-44 sm:w-44 animate-hero-zoom">
              <Image
                src="/images/2026/season4/logo/gowpaths4.png"
                width={410}
                height={500}
                alt="Logo UTY Growpath Expo"
                priority
                className="h-32 w-28 object-contain sm:h-36 sm:w-32 transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="animate-hero-fade-delayed">
              <h1 className="text-2xl leading-tight font-bold tracking-tight text-[#8d493a] sm:text-3xl md:text-4xl">
                Tentang UTY Growpath Expo
              </h1>
            </div>
          </div>
        </Container>
      </section>

      <section data-no-reveal className="relative isolate overflow-hidden bg-[#fff9f0] py-16 text-[#30302f] sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]"
          style={{
            backgroundImage: "url('/images/2026/season4/motif/motif2.png')",
            backgroundSize: "150px",
            backgroundRepeat: "repeat",
          }}
        />
        <Container className="relative z-10 grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div data-reveal-on-view data-reveal="left" className="md:sticky md:top-28 md:self-start">
            <p className="mb-2 text-sm font-semibold tracking-[0.18em] text-[#ed8b36] uppercase sm:mb-4">
              Cerita kami
            </p>
            <h2 className="max-w-sm text-3xl leading-tight font-bold sm:text-5xl">
              Awal mula
            </h2>
          </div>
          <div className="relative space-y-0 border-l border-[#8d493a]/25 pl-5 sm:pl-8">
            <article
              data-reveal-on-view
              data-reveal="right"
              className="relative pb-7 sm:pb-10"
            >
              <span aria-hidden="true" className="absolute -left-[calc(1.25rem+5px)] top-2 h-2.5 w-2.5 rounded-full bg-[#e0b83e] ring-4 ring-[#e0b83e]/20 sm:-left-[calc(2rem+5px)]" />
              <p className="text-left text-base leading-relaxed text-[#625b54] sm:text-justify sm:text-lg sm:leading-8">
                Growpath berangkat dari semangat untuk menghadirkan pengalaman
                kewirausahaan yang dekat dengan kehidupan mahasiswa. Bukan hanya
                tempat memamerkan produk, Growpath juga menjadi kesempatan untuk
                belajar menyampaikan ide, memahami kebutuhan, dan membangun
                hubungan dengan banyak orang.
              </p>
            </article>
            <article
              data-reveal-on-view
              data-reveal="right"
              className="relative border-t border-[#8d493a]/15 py-7 sm:py-10"
            >
              <span aria-hidden="true" className="absolute -left-[calc(1.25rem+5px)] top-9 h-2.5 w-2.5 rounded-full bg-[#ed8b36] ring-4 ring-[#ed8b36]/20 sm:-left-[calc(2rem+5px)] sm:top-12" />
              <p className="text-left text-base leading-relaxed text-[#625b54] sm:text-justify sm:text-lg sm:leading-8">
                Setiap penyelenggaraan mempertemukan beragam potensi dalam satu
                ruang: mahasiswa, komunitas, pengunjung, dan pelaku usaha. Dari
                pertemuan itu lahir percakapan, kolaborasi, serta inspirasi yang
                dapat berkembang jauh setelah acara selesai.
              </p>
            </article>
            <article
              data-reveal-on-view
              data-reveal="right"
              className="relative border-t border-[#8d493a]/15 pt-7 sm:pt-10"
            >
              <span aria-hidden="true" className="absolute -left-[calc(1.25rem+5px)] top-9 h-2.5 w-2.5 rounded-full bg-[#e13b43] ring-4 ring-[#e13b43]/20 sm:-left-[calc(2rem+5px)] sm:top-12" />
              <p className="text-left text-base leading-relaxed text-[#625b54] sm:text-justify sm:text-lg sm:leading-8">
                Perjalanan dari season ke season membawa semangat yang sama
                sekaligus membuka cara baru untuk bertumbuh. UTY Growpath Expo
                terus berupaya menjadi ruang yang inklusif, kreatif, dan relevan
                bagi generasi yang berani membentuk masa depan.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#fff9f0_0%,#fffdf8_48%,#fff9f0_100%)] py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.045]"
          style={{
            backgroundImage: "url('/images/2026/season4/motif/motif2.png')",
            backgroundSize: "180px",
            backgroundRepeat: "repeat",
          }}
        />
        <Container>
          <div data-reveal-item="up" className="relative z-10 mx-auto mb-14 max-w-2xl text-center sm:mb-20">
            <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-[#ed8b36] uppercase">
              Perjalanan Growpath
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">Cerita setiap season</h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-[#625b54]">
              Dari satu gagasan ke gagasan berikutnya, inilah jejak perjalanan
              Growpath yang terus tumbuh bersama.
            </p>
          </div>

          <div className="relative z-10">
            {/* Vertical timeline line - desktop center, mobile left */}
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-3.5 top-6 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#ed8b36] via-[#e0b83e] to-[#e13b43] opacity-65 md:left-1/2"
            />

            <div className="space-y-10 sm:space-y-16">
              {seasonStories.map((story, index) => {
                const textOnLeft = index % 2 === 0;

                return (
                  <article
                    key={story.season}
                    data-reveal-on-view
                    className="season-story-reveal relative pl-9 sm:pl-12 md:pl-0"
                  >
                    {/* Timeline Node & Year Badge */}
                    {/* Mobile: Pin point on the left timeline */}
                    <div className="absolute left-3.5 top-6 flex -translate-x-1/2 flex-col items-center md:hidden">
                      <span
                        aria-hidden="true"
                        className="h-4 w-4 rounded-full border-[3px] border-white bg-[#d4ad54] shadow-[0_0_0_3px_rgba(212,173,84,0.3)]"
                      />
                    </div>

                    {/* Mobile View: Unified Card (Cover Photo + Story Content in one clean container) */}
                    <div className="md:hidden">
                      <div className="overflow-hidden rounded-2xl border border-[#eadbbd] bg-white shadow-[0_12px_32px_-18px_rgba(77,55,28,0.25)]">
                        {/* Image Cover */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden">
                          <Image
                            src={story.image}
                            fill
                            sizes="(max-width: 768px) 100vw, 42vw"
                            alt={story.alt}
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                            <span className="inline-flex rounded-full bg-[#a95742] px-3 py-0.5 text-xs font-bold tracking-wider text-white uppercase shadow-sm">
                              {story.season}
                            </span>
                            <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-bold text-[#6f5630] backdrop-blur-xs shadow-xs">
                              {story.year}
                            </span>
                          </div>
                        </div>

                        {/* Story Content */}
                        <div className="p-5">
                          <h3 className="text-base font-bold leading-snug tracking-tight text-[#2b4869]">
                            “{story.theme}”
                          </h3>
                          <div className="mt-3 space-y-2.5">
                            {story.description.map((paragraph) => (
                              <p
                                key={paragraph}
                                className="text-sm leading-relaxed text-[#625b54]"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop View: Zig-zag 3-column timeline layout */}
                    <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_88px_minmax(0,1fr)] md:items-center">
                      {/* Center Node on desktop */}
                      <div className="col-start-2 row-start-1 flex flex-col items-center">
                        <span
                          aria-hidden="true"
                          className="h-6 w-6 rounded-full border-[5px] border-white bg-[#d4ad54] shadow-[0_0_0_3px_rgba(212,173,84,0.25)]"
                        />
                        <span className="mt-2 rounded-full border border-[#eadbbd] bg-white px-3 py-1 text-sm font-bold tracking-wide text-[#6f5630] shadow-md">
                          {story.year}
                        </span>
                      </div>

                      {/* Desktop Text Card */}
                      <div
                        data-season-reveal={textOnLeft ? "left" : "right"}
                        className={`relative rounded-2xl border border-[#eadbbd] bg-white p-7 shadow-[0_16px_40px_-24px_rgba(77,55,28,0.35)] transition-shadow duration-300 hover:shadow-[0_22px_45px_-24px_rgba(77,55,28,0.45)] ${
                          textOnLeft
                            ? "col-start-1 row-start-1 after:absolute after:right-[-2rem] after:top-1/2 after:h-px after:w-8 after:bg-[#d4ad54]"
                            : "col-start-3 row-start-1 before:absolute before:left-[-2rem] before:top-1/2 before:h-px before:w-8 before:bg-[#d4ad54]"
                        }`}
                      >
                        <div className="mb-4">
                          <span className="inline-flex rounded-full bg-[#a95742] px-3.5 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-xs">
                            {story.season}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold leading-snug tracking-tight text-[#2b4869]">
                          “{story.theme}”
                        </h3>

                        <div className="mt-4 space-y-3 text-[#625b54]">
                          {story.description.map((paragraph) => (
                            <p
                              key={paragraph}
                              className="text-justify text-base leading-7 text-[#625b54]"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Desktop Photo Card */}
                      <div
                        data-season-reveal={textOnLeft ? "right" : "left"}
                        className={`relative aspect-[4/3] overflow-hidden rounded-2xl border-[6px] border-white bg-white shadow-[0_20px_45px_-24px_rgba(43,72,105,0.42)] ${
                          textOnLeft
                            ? "col-start-3 row-start-1"
                            : "col-start-1 row-start-1"
                        }`}
                      >
                        <Image
                          src={story.image}
                          fill
                          sizes="42vw"
                          alt={story.alt}
                          className="object-cover transition-transform duration-500 hover:scale-[1.04]"
                        />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#30302f] py-16 text-white sm:py-20">
        <Container data-reveal-stagger className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div data-reveal-item="left">
            <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-[#f7cb4d] uppercase">
              Arah kami
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">Visi</h2>
            <p className="mt-5 max-w-xl leading-6 text-white/75 sm:leading-7">
              Menjadi ruang kolaborasi dan ekspresi yang mendorong tumbuhnya
              kreativitas, kewirausahaan, serta karya berdampak di lingkungan
              kampus dan masyarakat.
            </p>
          </div>
          <div data-reveal-item="right">
            <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-[#f7cb4d] uppercase">
              Langkah kami
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">Misi</h2>
            <ul className="mt-5 space-y-0 leading-6 text-white/75 sm:leading-7">
              <li>Menyediakan ruang untuk memperkenalkan ide, produk, dan karya.</li>
              <li>Menghubungkan mahasiswa, komunitas, pengunjung, dan pelaku usaha.</li>
              <li>Mendorong kolaborasi, pembelajaran, dan semangat kewirausahaan.</li>
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
}
