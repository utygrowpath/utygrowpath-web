import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";

interface FlashbackItem {
  src: string;
  alt: string;
  tilt: string;
}

const topRowPhotos: FlashbackItem[] = [
  {
    src: "/images/2026/season4/dokumentasi/docum1.jpg",
    alt: "Kilas balik pameran dan tenant Growpath",
    tilt: "-rotate-2 hover:rotate-0",
  },
  {
    src: "/images/2026/season4/dokumentasi/docum6.jpg",
    alt: "Penyerahan penghargaan tenant",
    tilt: "-rotate-2 hover:rotate-0",
  },
  {
    src: "/images/2026/season4/dokumentasi/docum3.JPG",
    alt: "Kilas balik tenant dan pameran Growpath",
    tilt: "rotate-2 hover:rotate-0",
  },
  {
    src: "/images/2026/season4/dokumentasi/docum2.jpg",
    alt: "Kilas balik gelar produk UMKM",
    tilt: "-rotate-1 hover:rotate-0",
  },
  {
    src: "/images/2026/season4/dokumentasi/docum4.JPG",
    alt: "Kilas balik pengunjung dan suasana expo",
    tilt: "rotate-2 hover:rotate-0",
  },
];

const bottomRowPhotos: FlashbackItem[] = [
  {
    src: "/images/2026/season4/dokumentasi/docum2_1.jpg",
    alt: "Kilas balik karya peserta expo",
    tilt: "-rotate-3 hover:rotate-0",
  },
  {
    src: "/images/2026/season4/dokumentasi/docum8.JPG",
    alt: "Kilas balik panggung acara Growpath",
    tilt: "rotate-1 hover:rotate-0",
  },
  {
    src: "/images/2026/season4/dokumentasi/docum5.jpg",
    alt: "Panitia Growpath S2",
    tilt: "rotate-2 hover:rotate-0",
  },
  {
    src: "/images/2026/season4/dokumentasi/documen7.JPG",
    alt: "Kilas balik kompetisi dan kebersamaan",
    tilt: "-rotate-2 hover:rotate-0",
  },
  {
    src: "/images/2026/season4/dokumentasi/docum9.jpg",
    alt: "Kilas balik penampilan seni dan band",
    tilt: "rotate-2 hover:rotate-0",
  },
];

// Triple each list for seamless continuous infinite marquee without gaps or stutter
const duplicatedTopRow = [...topRowPhotos, ...topRowPhotos, ...topRowPhotos];
const duplicatedBottomRow = [...bottomRowPhotos, ...bottomRowPhotos, ...bottomRowPhotos];

export function KilasBalikSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fff9f0] py-16 sm:py-24">
      {/* Inline styles guarantee 100% seamless marquee without jump or stutter */}
      <style>{`
        @keyframes marquee-scroll-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.333333%, 0, 0); }
        }
        @keyframes marquee-scroll-right {
          0% { transform: translate3d(-33.333333%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .kilas-marquee-right-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll-right 36s linear infinite;
          will-change: transform;
        }
        .kilas-marquee-left-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll-left 36s linear infinite;
          will-change: transform;
        }
        /* Independent pause on hover: hovering top only pauses top row, hovering bottom only pauses bottom row */
        .kilas-row-top:hover .kilas-marquee-right-track {
          animation-play-state: paused;
        }
        .kilas-row-bottom:hover .kilas-marquee-left-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Motif Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: "url('/images/2026/season4/motif/motif2.png')",
          backgroundSize: "160px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Title Section (Kilas Balik - Tanpa Pill Badge) */}
      <div className="relative z-10 mx-auto mb-10 max-w-2xl px-4 text-center sm:mb-14">
        <h2 className="text-3xl font-bold tracking-tight text-[#2b4869] sm:text-4xl md:text-5xl">
          Kilas Balik
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#625b54] sm:text-base">
          Momen dan energi dari perjalanan Growpath disetiap seasonnya.
        </p>
      </div>

      {/* Marquee Container with Left & Right Gradient Mask / Edge Fade */}
      <div className="relative z-10 flex flex-col gap-6 sm:gap-8 overflow-hidden py-4">
        {/* Left & Right Smooth Edge Fade Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-32 bg-gradient-to-r from-[#fff9f0] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-32 bg-gradient-to-l from-[#fff9f0] to-transparent" />

        {/* Baris Atas: 4 Foto Berjalan Looping ke Kanan (Hover independen) */}
        <div className="kilas-row-top overflow-hidden">
          <div className="kilas-marquee-right-track gap-4 sm:gap-6">
            {duplicatedTopRow.map((photo, index) => (
              <div
                key={`top-${index}`}
                className={`group relative w-64 sm:w-80 shrink-0 overflow-hidden rounded-2xl border-4 border-white bg-white p-1.5 shadow-[0_12px_28px_-10px_rgba(43,72,105,0.2)] transition-all duration-500 ease-out hover:z-30 hover:scale-105 hover:shadow-[0_24px_48px_-12px_rgba(43,72,105,0.35)] ${photo.tilt}`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#f8e9c9]/25">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 256px, 320px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Baris Bawah: 4 Foto Berjalan Looping ke Kiri (Hover independen) */}
        <div className="kilas-row-bottom overflow-hidden">
          <div className="kilas-marquee-left-track gap-4 sm:gap-6">
            {duplicatedBottomRow.map((photo, index) => (
              <div
                key={`bottom-${index}`}
                className={`group relative w-64 sm:w-80 shrink-0 overflow-hidden rounded-2xl border-4 border-white bg-white p-1.5 shadow-[0_12px_28px_-10px_rgba(43,72,105,0.2)] transition-all duration-500 ease-out hover:z-30 hover:scale-105 hover:shadow-[0_24px_48px_-12px_rgba(43,72,105,0.35)] ${photo.tilt}`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#f8e9c9]/25">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 256px, 320px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bagian Gabung Tenant (CTA Bawah Terintegrasi) */}
      <div className="relative z-10 mt-16 sm:mt-24 pt-6 sm:pt-10">
        <Container data-reveal-stagger className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div data-reveal-item="left" className="relative mx-auto w-full max-w-[460px]">
            <Image
              src="/images/2026/season4/dokumentasi/docum2.jpg"
              width={373}
              height={250}
              alt="Suasana kunjungan ke kegiatan Growpath"
              className="aspect-[3/2] w-full rounded-xl object-cover shadow-md"
            />
            <div className="absolute -bottom-4 right-4 rounded-md bg-[#e13b43] px-4 py-2 text-sm font-semibold text-white shadow-md">
              Growpath Season 4
            </div>
            <Image
              src="/images/2026/season4/motif/motif1.png"
              width={200}
              height={200}
              alt=""
              className="absolute -left-8 -top-5 -rotate-10 w-16 opacity-80 pointer-events-none"
            />
          </div>
          <div data-reveal-item="right" className="max-w-xl py-3">
            <p className="mb-2 text-sm font-semibold text-[#ed8b36]">
              Jadi bagian dari Growpath Season 4
            </p>
            <h2 className="text-3xl leading-tight font-bold text-[#2b4869] sm:text-4xl">
              Bawa karyamu bertemu dengan lebih banyak orang.
            </h2>
            <p className="mt-4 leading-7 text-[#625b54]">
              Bergabung sebagai tenant dan hadirkan produk atau karyamu di tengah komunitas Growpath.
            </p>
            <Link
              href="/info-tenant"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-[#e0b83e] px-6 py-3 text-sm font-semibold text-[#30302f] transition-all hover:bg-[#f7cb4d] hover:shadow-md"
            >
              Gabung sebagai tenant
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}
