"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export interface EditorialDocItem {
  src: string;
  alt: string;
  caption?: string;
  tag?: string;
}

const documentationPhotos: EditorialDocItem[] = [
  {
    src: "/images/2026/season4/dokumentasi/docum3.webp",
    alt: "Suasana tenant dan interaksi pengunjung Growpath",
    caption: "Pemberian penghargaan kepada narasumber dalam acara Growtalk Season 3.",
    tag: "Penghargaan",
  },
  {
    src: "/images/2026/season4/dokumentasi/docum2.webp",
    alt: "Kunjungan pameran dan display produk karya",
    caption: "Display produk inovatif mahasiswa yang memikat perhatian pengunjung.",
    tag: "Pameran Karya",
  },
  {
    src: "/images/2026/season4/dokumentasi/docum11.webp",
    alt: "Gelar produk UMKM dan tenant kreatif",
    caption: "Ragam kreasi kuliner dan produk lokal mahasiswa UTY.",
    tag: "Gelar Produk",
  },
  {
    src: "/images/2026/season4/dokumentasi/docum4.webp",
    alt: "Antusiasme audiens dalam rangkaian expo",
    caption: "Full team panitia acara UTY Growpath Season 3 tahun 2025.",
    tag: "Suasana Acara",
  },
  {
    src: "/images/2026/season4/dokumentasi/docum1.webp",
    alt: "Karya peserta dan inovasi bisnis",
    caption: "Eksplorasi produk yang dihasilkan oleh para peserta Growpath.",
    tag: "Inovasi",
  },
  {
    src: "/images/2026/season4/dokumentasi/docum5.webp",
    alt: "Diskusi dan sharing bersama narasumber",
    caption: "Full team panitia acara UTY Growpath season 1 tahun 2023.",
    tag: "Suasana Acara",
  },
  {
    src: "/images/2026/season4/dokumentasi/docum6.webp",
    alt: "Aktivitas panggung dan presentasi karya",
    caption: "Pemberian penghargaan kepada para pemenang lomba.",
    tag: "Apresiasi Penghargaan",
  },
  {
    src: "/images/2026/season4/dokumentasi/documen7.webp",
    alt: "Semangat kebersamaan dan kolaborasi tim",
    caption: "Pemberian penghargaan kepada para pemenang lomba.",
    tag: "Apresiasi Penghargaan",
  },
  {
    src: "/images/2026/season4/dokumentasi/docum8.webp",
    alt: "Penampilan musisi dan band kampus",
    caption: "Diskusi santai bersama para narasumber.",
    tag: "Growtalk Session",
  },
  {
    src: "/images/2026/season4/dokumentasi/docum9.webp",
    alt: "Momen panggung festival musik",
    caption: "Band performance session saat UTY Growpath Season 3.",
    tag: "Pentas Seni",
  },
  {
    src: "/images/2026/season4/dokumentasi/documm7.png",
    alt: "Koleksi visual perjalanan expo",
    caption: "Diskusi santai bersama para narasumber saat UTY Growpath Season 2.",
    tag: "Growtalk sessioan",
  },
  {
    src: "/images/2026/season4/dokumentasi/documm10.webp",
    alt: "Dokumentasi kebersamaan peserta",
    caption: "Diskusi santai bersama para narasumber saat UTY Growpath Season 1.",
    tag: "Expert Talk",
  },
];

const editorialQuotes = [
  {
    quote: "Setiap tujuan mengabadikan keberanian untuk bermimpi, berkolaborasi, dan mewujudkan karya.",
    sub: "Jejak UTY Growpath Expo",
    category: "Semangat Berkarya",
  },
  {
    quote: "Dari ide sederhana, bertumbuh menjadi kreasi yang menginspirasi ekosistem kewirausahaan.",
    sub: "Kilas Balik Perjalanan",
    category: "Inovasi Mahasiswa",
  },
  {
    quote: "Merayakan ragam cipta rasa, inovasi teknologi, dan kolaborasi inklusif tanpa batas.",
    sub: "Kreativitas Tanpa Batas",
    category: "Harmoni Karya",
  },
];

export function EditorialPhotobookGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  const [isQuoteFading, setIsQuoteFading] = useState(false);

  // Auto-cycle editorial quotes every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIsQuoteFading(true);
      setTimeout(() => {
        setActiveQuoteIndex((prev) => (prev + 1) % editorialQuotes.length);
        setIsQuoteFading(false);
      }, 250);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev === null ? null : (prev - 1 + documentationPhotos.length) % documentationPhotos.length
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev === null ? null : (prev + 1) % documentationPhotos.length
    );
  }, []);

  // Keyboard navigation for Lightbox (Esc, Left, Right)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedImageIndex, handlePrev, handleNext]);

  return (
    <div className="space-y-12 sm:space-y-16">
      {/*
        EDITORIAL SECTION 1:
        Hero Featured Spread (1 Wide Centerpiece + 2 Vertical Companions)
      */}
      <div data-reveal-stagger className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6 items-stretch">
        {/* Large Feature Banner (Left 7 Cols) */}
        <div
          data-reveal-item="left"
          onClick={() => setSelectedImageIndex(0)}
          className="group relative cursor-pointer overflow-hidden rounded-3xl border-4 border-white bg-[#f8e9c9]/30 shadow-[0_16px_36px_-16px_rgba(43,72,105,0.22)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-16px_rgba(43,72,105,0.32)] md:col-span-7 min-h-[320px] sm:min-h-[420px]"
        >
          <Image
            src={documentationPhotos[0].src}
            alt={documentationPhotos[0].alt}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 text-white">
            <span className="inline-block rounded-full bg-[#f7cb4d] px-3 py-0.5 text-xs font-bold text-[#30302f] shadow-sm">
              {documentationPhotos[0].tag}
            </span>
            <p className="mt-2 text-base sm:text-lg font-bold leading-snug">
              {documentationPhotos[0].caption}
            </p>
          </div>
        </div>

        {/* 2 Stacked Photo Cards (Right 5 Cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-5 md:gap-6 md:col-span-5">
          {[1, 2].map((idx) => {
            const item = documentationPhotos[idx];
            return (
              <div
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className="group relative aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-2xl border-4 border-white bg-[#f8e9c9]/30 shadow-[0_12px_28px_-12px_rgba(43,72,105,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-14px_rgba(43,72,105,0.28)]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-block rounded-full bg-white/30 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-bold">
                    {item.tag}
                  </span>
                  <p className="mt-1 text-xs sm:text-sm font-semibold line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/*
        EDITORIAL SECTION 2:
        Kinetic Typography & Editorial Ribbon Break (Auto-Cycle Carousel)
      */}
      <div data-reveal-item="zoom" className="relative overflow-hidden rounded-3xl border border-[#eadbbd]/80 bg-gradient-to-r from-[#fbf6ed] via-white to-[#fff8ee] p-7 sm:p-11 shadow-[0_12px_32px_-12px_rgba(43,72,105,0.08)] text-center">
        {/* Soft Decorative Ambient Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[#f8e9c9]/50 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-[#faedd2]/40 blur-2xl"
        />

        {/* Large Decorative Quotation Mark in Background */}
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-6 top-3 font-serif text-7xl font-bold text-[#e0b83e]/15 sm:left-10 sm:top-5 sm:text-8xl"
        >
          &ldquo;
        </span>

        {/* Tag Category Badge */}
        <div className="relative z-10 flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e0b83e]/40 bg-[#f8e9c9]/40 px-3.5 py-1 text-xs font-bold text-[#8d493a] shadow-sm backdrop-blur-sm">
            <span className="text-sm">✨</span>
            {editorialQuotes[activeQuoteIndex].category}
          </span>
        </div>

        {/* Dynamic Quote Text with Smooth Fade Transition */}
        <div className="relative z-10 mx-auto mt-4 min-h-[96px] sm:min-h-[80px] flex flex-col justify-center max-w-3xl">
          <blockquote
            className={`font-serif text-lg sm:text-2xl font-medium italic text-[#2b4869] leading-relaxed transition-all duration-300 ease-out ${
              isQuoteFading ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            &ldquo;{editorialQuotes[activeQuoteIndex].quote}&rdquo;
          </blockquote>

          <p
            className={`mt-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#8d493a] transition-all duration-300 ease-out delay-75 ${
              isQuoteFading ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
            }`}
          >
            {editorialQuotes[activeQuoteIndex].sub}
          </p>
        </div>

        {/* Looping Progress Line & Interactive Dot Navigation */}
        <div className="relative z-10 mt-6 flex flex-col items-center gap-2.5">
          <div className="flex items-center gap-2">
            {editorialQuotes.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  if (idx === activeQuoteIndex) return;
                  setIsQuoteFading(true);
                  setTimeout(() => {
                    setActiveQuoteIndex(idx);
                    setIsQuoteFading(false);
                  }, 200);
                }}
                aria-label={`Lihat kutipan ${idx + 1}`}
                className={`group relative h-2 rounded-full transition-all duration-500 overflow-hidden ${
                  activeQuoteIndex === idx
                    ? "w-8 bg-[#eadbbd]"
                    : "w-2.5 bg-[#e5d5b7]/50 hover:bg-[#8d493a]/40"
                }`}
              >
                {activeQuoteIndex === idx && (
                  <span
                    key={`bar-${activeQuoteIndex}`}
                    className="absolute inset-y-0 left-0 bg-[#e0b83e] animate-[quoteProgress_3s_linear_forwards]"
                  />
                )}
              </button>
            ))}
          </div>
          <span className="text-[11px] font-semibold text-[#8d493a]/60">
            {activeQuoteIndex + 1} / {editorialQuotes.length}
          </span>
        </div>
      </div>

      {/*
        EDITORIAL SECTION 3:
        Trio Tri-Fold Gallery (3 Kolom Seimbang)
      */}
      <div data-reveal-stagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
        {[3, 4, 5].map((idx) => {
          const item = documentationPhotos[idx];
          return (
            <div
              key={idx}
              data-reveal-item="up"
              onClick={() => setSelectedImageIndex(idx)}
              className="group relative aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-2xl border-4 border-white bg-[#f8e9c9]/30 shadow-[0_12px_28px_-12px_rgba(43,72,105,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_42px_-12px_rgba(43,72,105,0.3)]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block rounded-full bg-[#f7cb4d] px-2.5 py-0.5 text-[11px] font-bold text-[#30302f]">
                  {item.tag}
                </span>
                <p className="mt-1.5 text-xs sm:text-sm font-semibold leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/*
        EDITORIAL SECTION 4:
        The Asymmetric Rhythm Spread (2 Square Cards + 1 Wide Panorama)
      */}
      <div data-reveal-stagger className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        {/* 2 Square-ish Cards (Left 5 Cols) */}
        <div className="grid grid-cols-2 gap-4 md:col-span-5">
          {[6, 7].map((idx) => {
            const item = documentationPhotos[idx];
            return (
              <div
                key={idx}
                data-reveal-item="left"
                onClick={() => setSelectedImageIndex(idx)}
                className="group relative aspect-square w-full cursor-pointer overflow-hidden rounded-2xl border-4 border-white bg-[#f8e9c9]/30 shadow-[0_10px_24px_-10px_rgba(43,72,105,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_36px_-12px_rgba(43,72,105,0.28)]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-block rounded-md bg-[#2b4869] px-2 py-0.5 text-[10px] font-bold">
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 1 Wide Panorama (Right 7 Cols) */}
        <div
          data-reveal-item="right"
          onClick={() => setSelectedImageIndex(8)}
          className="group relative cursor-pointer overflow-hidden rounded-2xl border-4 border-white bg-[#f8e9c9]/30 shadow-[0_16px_36px_-16px_rgba(43,72,105,0.22)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-16px_rgba(43,72,105,0.32)] md:col-span-7 min-h-[220px]"
        >
          <Image
            src={documentationPhotos[8].src}
            alt={documentationPhotos[8].alt}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-white">
            <span className="inline-block rounded-full bg-[#f7cb4d] px-3 py-0.5 text-xs font-bold text-[#30302f]">
              {documentationPhotos[8].tag}
            </span>
            <p className="mt-1.5 text-sm sm:text-base font-bold leading-snug">
              {documentationPhotos[8].caption}
            </p>
          </div>
        </div>
      </div>

      {/*
        EDITORIAL SECTION 5:
        The Finale Quad (4 Grid di Bagian Bawah)
      */}
      <div data-reveal-stagger className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {[9, 10, 11].map((idx) => {
          const item = documentationPhotos[idx];
          return (
            <div
              key={idx}
              data-reveal-item="up"
              onClick={() => setSelectedImageIndex(idx)}
              className="group relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-2xl border-4 border-white bg-[#f8e9c9]/30 shadow-[0_10px_24px_-10px_rgba(43,72,105,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_36px_-12px_rgba(43,72,105,0.28)]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-block rounded-md bg-[#2b4869] px-2 py-0.5 text-[10px] font-bold">
                  {item.tag}
                </span>
                <p className="mt-1 text-xs font-semibold line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/*
        LIGHTBOX MODAL VIEWER:
        Membuka foto resolusi penuh saat diklik dengan kontrol keyboard & panah
      */}
      {selectedImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedImageIndex(null)}
            aria-label="Tutup foto"
            className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            ✕
          </button>

          {/* Main Modal Image Container */}
          <div
            className="relative flex max-h-[85vh] max-w-4xl flex-col items-center justify-center overflow-hidden rounded-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[65vh] w-[90vw] max-w-4xl sm:h-[75vh]">
              <Image
                src={documentationPhotos[selectedImageIndex].src}
                alt={documentationPhotos[selectedImageIndex].alt}
                fill
                priority
                className="object-contain md:object-cover"
              />
            </div>
            {/* Modal Caption Bar */}
            <div className="w-full bg-[#1a1714] px-6 py-4 text-center">
              <span className="inline-block rounded-full bg-[#f7cb4d] px-3 py-0.5 text-xs font-bold text-[#30302f]">
                {documentationPhotos[selectedImageIndex].tag}
              </span>
              <p className="mt-2 text-sm sm:text-base font-medium text-white/90">
                {documentationPhotos[selectedImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
