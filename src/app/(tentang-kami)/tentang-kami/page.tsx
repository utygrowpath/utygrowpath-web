import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { SectionAnimations } from "@/components/sections/section-animations";
import { siteConfig } from "@/config/site";

const seasonStories = [
  {
    season: "Season 1",
    theme:
      "Entrepreneurship in Society 5.0: Adaptation, Collaboration, and Synergy in Creating Business Innovation",
    description: [
      "Mengangkat perubahan dunia bisnis akibat teknologi, globalisasi, serta dinamika sosial dan ekonomi, Season 1 mengajak wirausaha muda untuk beradaptasi dan terus berinovasi agar tetap relevan di era Society 5.0. Melalui tema ini, UTY Growpath Expo #1 menjadi ruang tumbuh bagi wirausaha mahasiswa dan inovasi bisnis yang berkelanjutan.",
    ],
    image: "/images/2026/season4/dokumentasi/docum2.png",
    alt: "Suasana kegiatan dan interaksi pengunjung di Growpath",
    imagePosition: "md:order-last",
  },
  {
    season: "Season 2",
    theme:
      "Ratimaya Nusantara: Membangun Kolaborasi melalui Inovasi dan Kewirausahaan dalam Melestarikan Warisan Budaya Nusantara",
    description: [
      "Season 2 menjadi ruang bagi wirausaha muda UTY untuk mengenalkan produk, berkompetisi, dan membangun kolaborasi. Mengusung Ratimaya Nusantara, season ini merayakan kekayaan usaha dan budaya lokal Indonesia, memperkuat identitas nasional, serta mendorong kreativitas yang berakar pada warisan budaya.",
    ],
    image: "/images/2026/season4/dokumentasi/docum1.png",
    alt: "Pengunjung berinteraksi dengan tenant dan produk Growpath",
    imagePosition: "md:order-first",
  },
  {
    season: "Season 3",
    theme: "Tumbuh lewat kolaborasi dan keberanian memulai",
    description: [
      "Season 3 menjadi ruang bagi mahasiswa untuk mengenalkan ide dan karya kepada masyarakat, memahami kebutuhan pengunjung, serta melihat peluang usaha. Semangatnya adalah berani memulai dan tumbuh bersama melalui kolaborasi.",
    ],
    image: "/images/2026/season4/dokumentasi/docum2.png",
    alt: "Pengunjung menyaksikan karya dan produk dalam kegiatan Growpath",
    imagePosition: "md:order-last",
  },
  {
    season: "Season 4",
    theme: "Vistara Navakarya: Where Ideas Take Shape",
    description: [
      "Vistara Navakarya mengajak mahasiswa, komunitas, dan pelaku usaha merayakan keberagaman ide serta membentuknya menjadi karya. Season 4 berfokus pada pengalaman belajar, jejaring, dan kolaborasi yang inklusif.",
    ],
    image: "/images/2026/season4/dokumentasi/docum1.png",
    alt: "Suasana pengunjung menikmati produk di acara Growpath",
    imagePosition: "md:order-first",
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
      <section className="relative isolate overflow-hidden border-y border-[#e9dcc3] bg-[radial-gradient(ellipse_at_center,_#fffdf8_0%,_#fff5df_58%,_#f8e9c9_100%)]">
        <Image
          src="/images/2026/season4/motif/motif1.png"
          width={500}
          height={500}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/2 z-0 w-64 -translate-y-1/2 opacity-[0.16] sm:-left-12 sm:w-80 lg:left-0 lg:w-[26rem]"
        />
        <Image
          src="/images/2026/season4/motif/motif3.png"
          width={500}
          height={500}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-1/2 z-0 w-64 -translate-y-1/2 rotate-12 opacity-[0.14] sm:-right-12 sm:w-80 lg:right-0 lg:w-[26rem]"
        />
        <Container className="relative z-10 flex min-h-[420px] items-center justify-center py-12 sm:min-h-[480px] sm:py-16">
          <div data-reveal-stagger className="flex w-full max-w-3xl flex-col items-center gap-6 py-8 text-center">
            <div data-reveal-item="zoom" className="relative flex h-40 w-40 shrink-0 items-center justify-center rounded-full border border-[#e0b83e]/70 ring-8 ring-[#e0b83e]/10 sm:h-44 sm:w-44">
              <Image
                src="/images/2026/season4/logo/gowpaths4.png"
                width={410}
                height={500}
                alt=""
                priority
                className="h-32 w-28 object-contain sm:h-36 sm:w-32"
              />
            </div>
            <h1 data-reveal-item="up" className="text-2xl leading-tight font-bold tracking-tight text-[#8d493a] sm:text-3xl md:text-4xl">
              Tentang UTY Growpath Expo
            </h1>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#fff9f0] py-16 text-[#30302f] sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]"
          style={{
            backgroundImage: "url('/images/2026/season4/motif/motif2.png')",
            backgroundSize: "150px",
            backgroundRepeat: "repeat",
          }}
        />
        <Container data-reveal-stagger className="relative z-10 grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div data-reveal-item="left" className="md:sticky md:top-28 md:self-start">
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-[#ed8b36] uppercase">
              Cerita kami
            </p>
            <h2 className="max-w-sm text-4xl leading-tight font-bold sm:text-5xl">
              Awal mula
            </h2>
          </div>
          <div data-reveal-item="right" className="relative space-y-0 border-l border-[#8d493a]/25 pl-6 sm:pl-8">
            <article className="relative pb-8 sm:pb-10">
              <span aria-hidden="true" className="absolute -left-[calc(1.5rem+5px)] top-2 h-2.5 w-2.5 rounded-full bg-[#e0b83e] ring-4 ring-[#e0b83e]/20 sm:-left-[calc(2rem+5px)]" />
              <p className="text-justify text-base leading-7 text-[#625b54] sm:text-lg sm:leading-8">
                Growpath berangkat dari semangat untuk menghadirkan pengalaman
                kewirausahaan yang dekat dengan kehidupan mahasiswa. Bukan hanya
                tempat memamerkan produk, Growpath juga menjadi kesempatan untuk
                belajar menyampaikan ide, memahami kebutuhan, dan membangun
                hubungan dengan banyak orang.
              </p>
            </article>
            <article className="relative border-t border-[#8d493a]/15 py-8 sm:py-10">
              <span aria-hidden="true" className="absolute -left-[calc(1.5rem+5px)] top-10 h-2.5 w-2.5 rounded-full bg-[#ed8b36] ring-4 ring-[#ed8b36]/20 sm:-left-[calc(2rem+5px)] sm:top-12" />
              <p className="text-justify text-base leading-7 text-[#625b54] sm:text-lg sm:leading-8">
                Setiap penyelenggaraan mempertemukan beragam potensi dalam satu
                ruang: mahasiswa, komunitas, pengunjung, dan pelaku usaha. Dari
                pertemuan itu lahir percakapan, kolaborasi, serta inspirasi yang
                dapat berkembang jauh setelah acara selesai.
              </p>
            </article>
            <article className="relative border-t border-[#8d493a]/15 pt-8 sm:pt-10">
              <span aria-hidden="true" className="absolute -left-[calc(1.5rem+5px)] top-10 h-2.5 w-2.5 rounded-full bg-[#e13b43] ring-4 ring-[#e13b43]/20 sm:-left-[calc(2rem+5px)] sm:top-12" />
              <p className="text-justify text-base leading-7 text-[#625b54] sm:text-lg sm:leading-8">
                Perjalanan dari season ke season membawa semangat yang sama
                sekaligus membuka cara baru untuk bertumbuh. UTY Growpath Expo
                terus berupaya menjadi ruang yang inklusif, kreatif, dan relevan
                bagi generasi yang berani membentuk masa depan.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div data-reveal-item="up" className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-[#ed8b36] uppercase">
              Perjalanan Growpath
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">Cerita setiap season</h2>
          </div>

          <div className="space-y-14 sm:space-y-20">
            {seasonStories.map((story, index) => (
              <article
                key={story.season}
                data-reveal-on-view
                data-reveal="up"
                className={`season-story-reveal grid items-center gap-8 md:grid-cols-2 md:gap-14 ${index > 0 ? "pt-10 sm:pt-14" : ""}`}
              >
                <div data-season-reveal={index % 2 === 0 ? "right" : "left"} className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${story.imagePosition}`}>
                  <Image
                    src={story.image}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    alt={story.alt}
                    className="object-cover"
                  />
                </div>
                <div data-season-reveal={index % 2 === 0 ? "left" : "right"} className="max-w-xl">
                  <h3 className="text-xl leading-tight font-bold sm:text-2xl">
                    Visi Misi UTY Growpath Expo {story.season}
                  </h3>
                  <p className="mt-3 text-justify text-lg leading-snug font-semibold text-[#a34f3c]">
                    “{story.theme}”
                  </p>
                  <div className="mt-5 space-y-4 leading-7 text-[#625b54]">
                    {story.description.map((paragraph) => (
                      <p key={paragraph} className="text-justify">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
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
