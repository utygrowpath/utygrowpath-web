import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionAnimationsGsap } from "@/components/sections/section-animations-gsap";
import { pendaftaranMahasiswa } from "@/data/pendaftaran-mahasiswa";
import { siteConfig } from "@/config/site";

const season4 = `/images/${siteConfig.year}/season4`;

/** Username Instagram diambil dari URL di `siteConfig` (tanpa "@"). */
const instagramHandle =
  siteConfig.socials.instagram.split("/").filter(Boolean).pop()?.split("?")[0] ?? "";

export const metadata: Metadata = {
  title: "Pendaftaran Tenant KWU/Mahasiswa",
  description: `Pendaftaran tenant mahasiswa Kewirausahaan ${siteConfig.name}: syarat, kategori, timeline, HTM gratis, dan kontak panitia.`,
};

export default function PendaftaranMahasiswaPage() {
  const { intro, categories, requirements, timeline, htm } = pendaftaranMahasiswa;

  return (
    <div
      data-section-animations
      className="overflow-hidden bg-[#fff9f0] text-[#30302f]"
    >
      <SectionAnimationsGsap />

      {/* Hero — dua kolom (halaman umum memakai satu kolom di tengah) */}
      <section className="relative isolate overflow-hidden border-b border-[#e9dcc3] bg-[radial-gradient(ellipse_at_center,_#fffdf8_0%,_#fff5df_58%,_#f8e9c9_100%)]">
        <Image
          src={`${season4}/motif/motif1.png`}
          width={2088}
          height={2088}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-[6%] w-[300px] opacity-[0.12] sm:w-[420px] lg:w-[660px]"
          data-parallax="40"
        />
        <Image
          src={`${season4}/motif/motif3.png`}
          width={2900}
          height={5300}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 bottom-0 w-[220px] opacity-[0.14] lg:w-[300px]"
          data-parallax="26"
        />
        <Container className="relative z-10">
          <div className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
            <div data-reveal-stagger className="max-w-xl">
              <p
                data-reveal-item="up"
                className="mb-4 text-sm font-semibold tracking-[0.14em] text-[#a34f3c] uppercase"
              >
                Pendaftaran Tenant
              </p>
              <h1
                data-reveal-item="up"
                className="text-3xl leading-tight font-bold tracking-tight text-[#2b4869] sm:text-4xl md:text-5xl"
              >
                Pendaftaran Tenant Mahasiswa
              </h1>
              <p
                data-reveal-item="up"
                className="mt-5 text-xl leading-8 font-semibold text-[#30302f]"
              >
                {intro[0]}
              </p>
              <p data-reveal-item="up" className="mt-4 leading-7 text-[#625b54]">
                {intro[1]}
              </p>
              <div data-reveal-item="up" className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/submission"
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#c92e37] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a8252c]"
                >
                  Daftar sekarang
                </Link>
                <a
                  href="#syarat"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#2b4869]/25 px-8 py-3 text-sm font-semibold transition-colors hover:bg-white"
                >
                  Lihat syarat
                </a>
              </div>
            </div>

            <div data-reveal-item="right" className="relative mx-auto w-full max-w-[440px]">
              <Image
                src={`${season4}/motif/motif2.png`}
                width={160}
                height={160}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -left-3 bottom-2 z-10 w-20 opacity-80 sm:w-24"
              />
              <div className="relative flex min-h-[320px] w-[92%] items-center justify-center rounded-[48%] bg-[#f6ebd5] sm:min-h-[380px]">
                <Image
                  src={`${season4}/logo/gowpaths4.png`}
                  width={410}
                  height={500}
                  alt="Logo UTY Growpath Expo Season 4"
                  priority
                  className="relative z-10 w-[60%]"
                />
              </div>
              <Image
                src={`${season4}/motif/motif3.png`}
                width={150}
                height={150}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 top-2 z-10 w-16 opacity-90 sm:w-20"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Syarat — foto di kiri, daftar di kanan (halaman umum membalik urutan ini) */}
      <section
        id="syarat"
        className="relative isolate scroll-mt-20 overflow-hidden bg-[#fff9f0] py-16 sm:py-20"
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
          className="relative z-10 grid items-center gap-10 md:grid-cols-2 md:gap-14"
        >
          <div data-reveal-item="left" className="relative mx-auto w-full max-w-[460px]">
            <Image
              src={`${season4}/motif/motif1.png`}
              width={500}
              height={500}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -left-4 -top-6 z-10 w-24 opacity-80"
            />
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[#e9dfca]">
              <Image
                src={`${season4}/dokumentasi/docum2.png`}
                fill
                sizes="(max-width: 768px) 100vw, 460px"
                alt="Suasana kunjungan ke stan tenant UTY Growpath Expo"
                className="object-cover object-center"
              />
            </div>
            <Image
              src={`${season4}/motif/motif3.png`}
              width={150}
              height={150}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -right-4 z-10 w-24 opacity-90"
            />
          </div>

          <div data-reveal-item="right" className="max-w-xl">
            <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-[#a34f3c] uppercase">
              Syarat
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">Pastikan syarat terpenuhi</h2>
            <ol className="mt-7 space-y-4">
              {requirements.map((requirement, index) => (
                <li key={requirement} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2b527d] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="leading-7 text-[#625b54]">{requirement}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Kategori — dua kolom dengan ornamen di kiri bawah */}
      <section className="border-y border-[#dcc9a8]/60 bg-white py-16 sm:py-20">
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
          <ul data-reveal-stagger className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {categories.map((category, index) => (
              <li
                key={category}
                data-reveal-item="up"
                className="relative overflow-hidden rounded-2xl border border-[#e9dfca] bg-[#fffdf8] p-6"
              >
                <Image
                  src={
                    index % 2 === 0
                      ? `${season4}/motif/motif1.png`
                      : `${season4}/motif/motif2.png`
                  }
                  width={120}
                  height={120}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-4 -left-4 w-24 opacity-20"
                />
                <span className="relative flex items-center gap-3 font-semibold">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-[#2b527d]"
                  />
                  {category}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Timeline — kartu mendatar (halaman umum memakai garis vertikal) */}
      <section className="relative isolate overflow-hidden bg-[#f6ebd5] py-16 sm:py-20">
        <Image
          src={`${season4}/motif/motif1.png`}
          width={2088}
          height={2088}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 w-72 opacity-[0.12] sm:w-96"
          data-parallax="56"
        />
        <Container data-reveal-stagger className="relative">
          <div data-reveal-item="up" className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-[#a34f3c] uppercase">
              Timeline
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">Jadwal pendaftaran</h2>
            <p className="mt-3 text-[#625b54]">
              Catat tanggalnya agar tidak ketinggalan setiap tahapan.
            </p>
          </div>
          <ol
            data-reveal-stagger
            data-sequence
            className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {timeline.map((item, index) => (
              <li
                key={item.label}
                data-reveal-item="up"
                className="rounded-2xl bg-white p-6 text-center"
              >
                <span
                  aria-hidden="true"
                  className={`relative z-10 mx-auto mb-4 block h-3 w-3 rounded-full ring-4 ${
                    index % 2 === 0
                      ? "bg-[#2b527d] ring-[#2b527d]/15"
                      : "bg-[#e0b83e] ring-[#e0b83e]/25"
                  }`}
                />
                <p className="text-lg leading-7 font-bold text-[#2b4869]">{item.date}</p>
                <p className="mt-1 text-sm text-[#625b54]">{item.label}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* HTM + CTA — menonjol di tengah dengan motif lain */}
      <section className="relative isolate overflow-hidden bg-[#e0b83e] py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.1]"
          style={{
            backgroundImage: `url('${season4}/motif/motif4.svg')`,
            backgroundSize: "220px",
          }}
        />
        <Container className="relative">
          <div data-reveal-stagger className="mx-auto max-w-2xl text-center">
            <p
              data-reveal-item="up"
              className="mb-3 text-sm font-semibold tracking-[0.14em] text-[#8d493a] uppercase"
            >
              Harga tiket masuk
            </p>
            <p
              data-reveal-item="up"
              className="text-5xl leading-none font-bold text-[#30302f] sm:text-6xl"
            >
              HTM: {htm}
            </p>
            <p data-reveal-item="up" className="mt-5 leading-7 text-[#594a37]">
              Khusus mahasiswa aktif yang sedang menempuh mata kuliah Krenovasi &amp;
              Kewirausahaan. Amankan stan kelompokmu sekarang.
            </p>
            <div data-reveal-item="up" className="mt-8">
              <Link
                href="/submission"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#30302f] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1f1f1e]"
              >
                Daftar sekarang
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Kontak — foto kiri, kontak kanan (halaman umum menampilkannya di tengah) */}
      <section className="relative isolate overflow-hidden bg-[#30302f] py-16 text-white sm:py-20">
        <Image
          src={`${season4}/motif/motif1.png`}
          width={2088}
          height={2088}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-1/2 w-52 -translate-y-1/2 opacity-[0.16] sm:w-72"
        />
        <Container
          data-reveal-stagger
          className="relative grid items-center gap-10 md:grid-cols-2 md:gap-14"
        >
          <div data-reveal-item="left" className="max-w-xl">
            <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-[#f7cb4d] uppercase">
              Butuh bantuan?
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">Hubungi kami</h2>
            <p className="mt-4 leading-7 text-white/70">
              Sampaikan pertanyaanmu soal stan, kategori, atau tahapan sebelum
              pendaftaran ditutup.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
              <a
                href={`https://${siteConfig.socials.website}`}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
              >
                Website:{" "}
                <span className="font-medium text-[#f7cb4d]">
                  {siteConfig.socials.website}
                </span>
              </a>
              <span>
                Email:{" "}
                <span className="font-medium text-[#f7cb4d]">{siteConfig.email}</span>
              </span>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
              >
                Instagram:{" "}
                <span className="font-medium text-[#f7cb4d]">@{instagramHandle}</span>
              </a>
            </div>
          </div>

          <div data-reveal-item="right" className="relative mx-auto w-full max-w-[460px]">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl">
              <Image
                src={`${season4}/dokumentasi/docum1.png`}
                fill
                sizes="(max-width: 768px) 100vw, 460px"
                alt="Tenant berinteraksi dengan pengunjung di UTY Growpath Expo"
                className="object-cover"
              />
            </div>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {siteConfig.phones.map((phone) => (
                <li
                  key={phone.number}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 text-center"
                >
                  <p className="font-semibold">{phone.contact}</p>
                  <a
                    href={`tel:${phone.tel}`}
                    className="mt-1 block text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {phone.number}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
}
