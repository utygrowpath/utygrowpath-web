import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionAnimations } from "@/components/sections/section-animations";
import { siteConfig } from "@/config/site";

const socialLinks: { label: string; href: string }[] = [
  { label: "Instagram", href: siteConfig.socials.instagram },
  { label: "TikTok", href: siteConfig.socials.tiktok },
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
];

function ContactIcon({ type }: { type: "address" | "email" | "phone" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      {type === "address" ? (
        <>
          <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.7" />
        </>
      ) : type === "email" ? (
        <>
          <path d="M3.75 6.75h16.5v10.5H3.75V6.75Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="m4.5 7.5 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : (
        <path d="M7.2 3.75h2.4l1.2 4.1-1.8 1.6a14 14 0 0 0 5.55 5.55l1.6-1.8 4.1 1.2v2.4a2 2 0 0 1-2.15 2A15.9 15.9 0 0 1 5.2 5.9a2 2 0 0 1 2-2.15Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function SocialMark({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.6" cy="6.7" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (label === "TikTok") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.35a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3.1 15.63a6.34 6.34 0 0 0 10.83 4.49 6.27 6.27 0 0 0 1.86-4.49V8.76a8.27 8.27 0 0 0 4.75 1.48V6.8a4.85 4.85 0 0 1-.95-.11Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M5.1 8.6a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM3.6 10h3v10h-3zM11.4 10h-2.9v10h3v-5.2c0-1.4.3-2.7 2-2.7s1.7 1.6 1.7 2.8V20h3v-5.8c0-2.9-.6-4.6-3.7-4.6a3.6 3.6 0 0 0-3 1.6h-.1V10Z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi tim UTY Growpath Expo untuk bertanya dan mendapatkan bantuan.",
};

export default function KontakPage() {
  return (
    <div data-section-animations className="overflow-hidden bg-[#fff9f0] text-[#30302f]">
      <SectionAnimations />

      {/* Hero section: Menggunakan data-no-reveal dan animasi CSS keyframe langsung agar langsung tampil dinamis saat halaman dimuat / direfresh */}
      <section data-no-reveal className="relative isolate overflow-hidden bg-[#fffdf8]">
        <Container className="relative z-10 grid items-center gap-10 py-14 sm:py-20 md:min-h-[470px] md:grid-cols-2 md:gap-14 md:py-16">
          <div className="max-w-2xl animate-hero-left">
            <h1 className="mt-4 text-4xl leading-tight font-bold tracking-tight text-[#2b4869] sm:text-5xl">
              Bingung soal program kami? Yuk, bertanya.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#625b54] sm:text-lg">
              Anda membutuhkan bantuan lebih lanjut seputar acara, tenant, maupun kolaborasi?
              Tim Growpath siap menyambut dan membantu.
            </p>
          </div>

          <div className="relative isolate mx-auto w-full max-w-[560px] px-2 pb-8 sm:px-4 animate-hero-right">
            {/* Motif ornamen beranimasi floating halus */}
            <Image
              src="/images/2026/season4/motif/motif5.svg"
              width={180}
              height={180}
              alt="motif symbol berwarna merah"
              aria-hidden="true"
              className="pointer-events-none absolute -left-[11%] top-[-9%] z-0 w-[24%] opacity-40 animate-float-slow"
            />
            <Image
              src="/images/2026/season4/motif/motif6.svg"
              width={200}
              height={200}
              alt="motif symbol berwarna kuning"
              aria-hidden="true"
              className="pointer-events-none absolute -right-[5%] bottom-[-5%] z-0 w-[24%] opacity-85 animate-float-reverse"
            />

            {/* Kartu foto dokumentasi utama */}
            <div className="group relative z-10 mx-auto aspect-[4/3] w-[92%] rotate-2 overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_24px_60px_-28px_rgba(43,72,105,0.45)] transition-all duration-500 hover:rotate-0 hover:scale-[1.02] hover:shadow-[0_28px_70px_-24px_rgba(43,72,105,0.55)]">
              <Image
                src="/images/2026/season4/dokumentasi/docum1.png"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Pengunjung berinteraksi dengan tenant di UTY Growpath Expo"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Kartu foto dokumentasi aksen */}
            <div className="group absolute bottom-0 left-[3%] z-20 w-[32%] -rotate-2 overflow-hidden rounded-2xl border-4 border-[#fffdf8] shadow-[0_18px_40px_-20px_rgba(43,72,105,0.5)] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:shadow-[0_22px_50px_-16px_rgba(43,72,105,0.6)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/2026/season4/dokumentasi/docum2.png"
                  fill
                  sizes="(max-width: 768px) 38vw, 190px"
                  alt="Panitia dan pengunjung dalam kegiatan Growpath"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section info kontak: Tetap menggunakan staggered scroll reveal saat digulir */}
      <section className="relative isolate overflow-hidden py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]"
          style={{
            backgroundImage: "url('/images/2026/season4/motif/motif2.png')",
            backgroundSize: "150px",
            backgroundRepeat: "repeat",
          }}
        />
        <Container data-reveal-stagger className="relative z-10 grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div data-reveal-item="left">
            <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-[#ed8b36] uppercase">
              Kontak Growpath
            </p>
            <h2 className="text-3xl leading-tight font-bold text-[#2b4869] sm:text-4xl">
              Ceritakan yang ingin kamu tanyakan.
            </h2>
            <p className="mt-4 leading-7 text-[#625b54]">
              Untuk informasi acara, pendaftaran tenant, sponsorship, maupun pertanyaan lainnya,
              silakan hubungi kami langsung melalui email resmi.
            </p>
            <Link
              href={`mailto:${siteConfig.email}`}
              className="group mt-7 inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#e13b43] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#c92e37] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 transition-transform duration-300 group-hover:scale-110">
                <path d="M3.75 6.75h16.5v10.5H3.75V6.75Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                <path d="m4.5 7.5 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Kirim email</span>
            </Link>
          </div>

          <div data-reveal-item="right" className="rounded-2xl border border-[#e9dcc3] bg-white/85 p-6 shadow-[0_16px_40px_-32px_rgba(48,48,47,0.4)] backdrop-blur-xs sm:p-8">
            <div data-reveal-stagger className="space-y-4">
              <article data-reveal-item className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f7cb4d]/25 text-[#2b4869]">
                  <ContactIcon type="address" />
                </span>
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-[#ed8b36] uppercase">ADDRESS</h3>
                  <p className="mt-1 text-sm leading-6 font-normal text-[#2b4869]">{siteConfig.address}</p>
                </div>
              </article>

              <article data-reveal-item className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f7cb4d]/25 text-[#2b4869]">
                  <ContactIcon type="email" />
                </span>
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-[#ed8b36] uppercase">EMAIL</h3>
                  <a href={`mailto:${siteConfig.email}`} className="mt-1 inline-block break-all text-sm font-normal text-[#2b4869] hover:underline">
                    {siteConfig.email}
                  </a>
                </div>
              </article>

              <article data-reveal-item className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f7cb4d]/25 text-[#2b4869]">
                  <ContactIcon type="phone" />
                </span>
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-[#ed8b36] uppercase">PHONE</h3>
                  <div className="mt-1 space-y-1 text-sm leading-6 font-normal text-[#2b4869]">
                    {siteConfig.phones.map((phone) => (
                      <p key={phone.tel}>
                        <a href={`tel:${phone.tel}`} className="hover:underline">
                          {phone.number}
                        </a>
                        <span>{` (${phone.contact})`}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </article>

              <article data-reveal-item className="border-t border-[#e9dcc3] pt-5">
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-[#ed8b36] uppercase">IKUTI KAMI</h3>
                  <div className="mt-3 flex items-center gap-3 text-[#2b4869]">
                    {socialLinks.map((social) => {
                      const icon = <SocialMark label={social.label} />;
                      const className =
                        "flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff9f0] border border-[#e9dcc3] transition-all duration-300 hover:bg-[#f7cb4d]/30 hover:border-[#e0b83e] hover:scale-110 hover:-translate-y-0.5 hover:shadow-sm";

                      return social.href ? (
                        <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className={className} aria-label={social.label}>
                          {icon}
                        </a>
                      ) : (
                        <span key={social.label} className={`${className} opacity-50 cursor-not-allowed`} aria-label={`${social.label} link belum diatur`} title={`${social.label} link belum diatur`}>
                          {icon}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
