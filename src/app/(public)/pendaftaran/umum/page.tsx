import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionAnimations } from "@/components/sections/section-animations";
import { pendaftaranUmum } from "@/data/pendaftaran-umum";

const season4 = "/images/2026/season4";

export const metadata: Metadata = {
  title: "Pendaftaran Tenant Umum",
  description:
    "Pendaftaran tenant umum UTY Growpath Expo: kategori, syarat, timeline, HTM, dan kontak panitia.",
};

export default function PendaftaranUmumPage() {
  const { intro, categories, requirements, timeline, htm, contactPersons, website, email, instagram } =
    pendaftaranUmum;

  return (
    <div
      data-section-animations
      className="overflow-hidden bg-[#fff9f0] text-[#30302f]"
    >
      <SectionAnimations />

      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-[#e9dcc3] bg-[radial-gradient(ellipse_at_center,_#fffdf8_0%,_#fff5df_58%,_#f8e9c9_100%)]">
        <Image
          src={`${season4}/motif/motif1.png`}
          width={500}
          height={500}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/2 z-0 w-64 -translate-y-1/2 opacity-[0.16] sm:-left-12 sm:w-80 lg:left-0 lg:w-[26rem]"
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
            className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center"
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
              className="text-sm font-semibold tracking-[0.18em] text-[#a34f3c] uppercase"
            >
              Pendaftaran Tenant
            </p>
            <h1
              data-reveal-item="up"
              className="text-3xl leading-tight font-bold tracking-tight text-[#8d493a] sm:text-4xl md:text-5xl"
            >
              Pendaftaran Tenant Umum
            </h1>
            <p
              data-reveal-item="up"
              className="text-xl leading-8 font-semibold text-[#30302f] sm:text-2xl"
            >
              {intro[0]}
            </p>
            <p
              data-reveal-item="up"
              className="max-w-2xl leading-7 text-[#625b54]"
            >
              {intro[1]}
            </p>
            <div data-reveal-item="up" className="mt-2 flex flex-wrap justify-center gap-3">
              <Link
                href="/submission"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#e13b43] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c92e37]"
              >
                Daftar sekarang
              </Link>
              <a
                href="#syarat"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#30302f]/25 px-8 py-3 text-sm font-semibold transition-colors hover:bg-white"
              >
                Lihat syarat
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Kategori */}
      <section className="border-b border-[#dcc9a8]/60 bg-white py-16 sm:py-20">
        <Container data-reveal-stagger>
          <div data-reveal-item="up" className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-[#a34f3c] uppercase">
              Kategori
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">Pilih kategori usahamu</h2>
            <p className="mt-3 text-[#625b54]">
              Pastikan produk atau jasmu masuk ke salah satu kategori berikut.
            </p>
          </div>
          <ul data-reveal-stagger className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <li
                key={category}
                data-reveal-item="up"
                className="relative overflow-hidden rounded-xl border border-[#e9dfca] bg-[#fffdf8] px-6 py-5"
              >
                <Image
                  src={
                    index % 2 === 0
                      ? `${season4}/motif/motif3.png`
                      : `${season4}/motif/motif2.png`
                  }
                  width={100}
                  height={100}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-3 -top-3 w-20 opacity-20"
                />
                <span className="relative flex items-center gap-3 font-semibold">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#e13b43]" />
                  {category}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Syarat + foto */}
      <section
        id="syarat"
        className="relative isolate overflow-hidden scroll-mt-20 bg-[#fff9f0] py-16 sm:py-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]"
          style={{
            backgroundImage: `url('${season4}/motif/motif2.png')`,
            backgroundSize: "150px",
            backgroundRepeat: "repeat",
          }}
        />
        <Container
          data-reveal-stagger
          className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <div data-reveal-item="left">
            <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-[#a34f3c] uppercase">
              Syarat
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">Sebelum mendaftar</h2>
            <ol className="mt-7 space-y-4">
              {requirements.map((requirement, index) => (
                <li key={requirement} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e0b83e] text-sm font-bold text-[#30302f]">
                    {index + 1}
                  </span>
                  <span className="leading-7 text-[#625b54]">{requirement}</span>
                </li>
              ))}
            </ol>
          </div>
          <div data-reveal-item="right" className="relative mx-auto w-full max-w-[480px]">
            <Image
              src={`${season4}/motif/motif3.png`}
              width={150}
              height={150}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-6 z-10 w-24 opacity-90"
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#e9dfca]">
              <Image
                src={`${season4}/dokumentasi/docum1.png`}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                alt="Tenant berinteraksi dengan pengunjung di UTY Growpath Expo"
                className="object-cover"
              />
            </div>
            <Image
              src={`${season4}/motif/motif2.png`}
              width={150}
              height={150}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -left-5 z-10 w-24 opacity-90"
            />
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="border-y border-[#e9dcc3] bg-[#f6ebd5] py-16 sm:py-20">
        <Container data-reveal-stagger className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div data-reveal-item="left">
            <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-[#a34f3c] uppercase">
              Timeline
            </p>
            <h2 className="text-3xl leading-tight font-bold sm:text-4xl">
              Jadwal pendaftaran
            </h2>
            <p className="mt-4 leading-7 text-[#625b54]">
              Catat tanggalnya agar tidak ketinggalan setiap tahapan.
            </p>
          </div>
          <div
            data-reveal-item="right"
            className="relative space-y-0 border-l border-[#8d493a]/25 pl-6 sm:pl-8"
          >
            {timeline.map((item, index) => (
              <article
                key={item.label}
                className={
                  index === 0
                    ? "relative pb-8"
                    : index === timeline.length - 1
                      ? "relative border-t border-[#8d493a]/15 pt-8"
                      : "relative border-t border-[#8d493a]/15 py-8"
                }
              >
                <span
                  aria-hidden="true"
                  className={`absolute top-2 -left-[calc(1.5rem+6px)] h-3 w-3 rounded-full ring-4 sm:-left-[calc(2rem+6px)] ${
                    index % 2 === 0
                      ? "bg-[#e0b83e] ring-[#e0b83e]/20"
                      : "bg-[#e13b43] ring-[#e13b43]/20"
                  }`}
                />
                <p className="text-lg leading-7 font-bold text-[#2b4869]">{item.date}</p>
                <p className="mt-1 text-[#625b54]">{item.label}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* HTM + CTA */}
      <section className="relative isolate overflow-hidden bg-[#e0b83e] py-14 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
          style={{
            backgroundImage: `url('${season4}/motif/motif2.png')`,
            backgroundSize: "180px",
          }}
        />
        <Container
          data-reveal-stagger
          className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left"
        >
          <div data-reveal-item="left">
            <p className="text-sm font-semibold tracking-[0.14em] text-[#30302f] uppercase">
              Harga tiket masuk
            </p>
            <p className="mt-2 text-4xl leading-none font-bold text-[#30302f] sm:text-5xl">
              HTM: {htm}
            </p>
          </div>
          <div data-reveal-item="right" className="flex flex-col items-center gap-3 md:items-end">
            <p className="max-w-sm text-[#594a37]">
              Amankan tempatmu sekarang dan mulai perkenalkan usahamu ke lebih
              banyak orang.
            </p>
            <Link
              href="/submission"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#30302f] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1f1f1e]"
            >
              Daftar sekarang
            </Link>
          </div>
        </Container>
      </section>

      {/* Kontak */}
      <section className="relative isolate overflow-hidden bg-[#30302f] py-16 text-white sm:py-20">
        <Image
          src={`${season4}/motif/motif2.png`}
          width={240}
          height={240}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-12 top-1/2 w-40 -translate-y-1/2 opacity-[0.16] sm:left-0 sm:w-52"
        />
        <Image
          src={`${season4}/motif/motif3.png`}
          width={240}
          height={300}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 top-1/2 w-36 -translate-y-1/2 opacity-[0.16] sm:right-0 sm:w-48"
        />
        <Container data-reveal-stagger className="relative">
          <div data-reveal-item="up" className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-[#f7cb4d] uppercase">
              Butuh bantuan?
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">Hubungi kami</h2>
          </div>

          <ul data-reveal-stagger className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
            {contactPersons.map((person) => (
              <li
                key={person.name}
                data-reveal-item="up"
                className="rounded-xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <p className="text-lg font-semibold">{person.name}</p>
                <a
                  href={`tel:${person.phone}`}
                  className="mt-1 block text-white/70 transition-colors hover:text-white"
                >
                  {person.phone}
                </a>
              </li>
            ))}
          </ul>

          <div
            data-reveal-item="up"
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm"
          >
            <a
              href={`https://${website}`}
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition-colors hover:text-white"
            >
              Website: <span className="font-medium text-[#f7cb4d]">{website}</span>
            </a>
            <span className="text-white/70">
              Email: <span className="font-medium text-[#f7cb4d]">{email}</span>
            </span>
            <a
              href={`https://instagram.com/${instagram}`}
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition-colors hover:text-white"
            >
              Instagram:{" "}
              <span className="font-medium text-[#f7cb4d]">@{instagram}</span>
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
