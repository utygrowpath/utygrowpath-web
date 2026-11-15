"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import gsap from "gsap";

import type { DocumentationItem } from "@/types/content";

type LightboxProps = {
  /** Daftar season aktif. Urutan array = urutan navigasi prev/next. */
  items: DocumentationItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

/** Elemen yang bisa menerima fokus di dalam dialog (untuk penjagaan Tab). */
const FOCUSABLE =
  'button:not([disabled]), iframe, video[controls], a[href], [tabindex]:not([tabindex="-1"])';

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Dialog-nya dirender lewat portal ke `document.body`.
 *
 * Ini bukan hiasan: GSAP menulis `transform` inline pada elemen
 * `data-reveal-item`, dan leluhur mana pun yang punya `transform` otomatis
 * menjadi containing block untuk `position: fixed`. Tanpa portal, lightbox
 * menguncup ke dalam wrapper galeri (sudah terbukti di screenshot) alih-alih
 * menutupi layar.
 *
 * `useSyncExternalStore` dipakai sebagai penanda "sudah di client" karena
 * men-set state di dalam effect dilarang aturan hooks yang aktif di repo ini,
 * dan server snapshot-nya mengembalikan false sehingga tidak ada mismatch
 * hidrasi.
 */
const subscribeToNothing = () => () => {};

export function Lightbox(props: LightboxProps) {
  const onClient = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );

  return onClient ? createPortal(<LightboxDialog {...props} />, document.body) : null;
}

function LightboxDialog({
  items,
  index,
  onClose,
  onNavigate,
}: LightboxProps) {
  const item = items[index];
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const panelRef = useRef<HTMLDivElement>(null);
  const figureRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const go = useCallback(
    (delta: number) => {
      setDirection(delta > 0 ? "next" : "prev");
      onNavigate((index + delta + items.length) % items.length);
    },
    [index, items.length, onNavigate],
  );

  // Scroll-lock: pulihkan nilai inline sebelumnya, jangan menimpa dengan "".
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  // Fokus masuk ke dialog dan kembali ke pemicu saat ditutup.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    return () => opener?.focus();
  }, []);

  // Keyboard: Esc tutup, panah navigasi, Tab tetap terperangkap di dialog.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(1);
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(-1);
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [go, onClose]);

  // Panel masuk sekali saat dibuka; media bergeser tiap pindah item.
  useEffect(() => {
    if (prefersReducedMotion() || !panelRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(panelRef.current, {
        opacity: 0,
        scale: 0.97,
        duration: 0.25,
        ease: "power2.out",
      });
    }, panelRef);

    return () => ctx.revert();
  }, []);

  const firstMediaRender = useRef(true);
  useEffect(() => {
    if (firstMediaRender.current) {
      firstMediaRender.current = false;
      return;
    }
    if (prefersReducedMotion() || !figureRef.current) return;

    const fromX = direction === "next" ? 24 : -24;
    gsap.fromTo(
      figureRef.current,
      { opacity: 0, x: fromX },
      { opacity: 1, x: 0, duration: 0.2, ease: "power2.out", overwrite: "auto" },
    );
  }, [index, direction]);

  // Klik area gelap (bukan panel) menutup dialog.
  const closeOnBackdrop = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col gap-4 bg-[#30302f]/95 p-4 sm:p-6"
      onMouseDown={closeOnBackdrop}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        className="flex flex-1 flex-col gap-4 overflow-hidden"
        onMouseDown={closeOnBackdrop}
      >
        <div className="flex shrink-0 items-center justify-between gap-4">
          <p className="text-sm font-semibold tabular-nums text-white/75">
            {index + 1} / {items.length}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Tutup"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7cb4d]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <div
          className="flex min-h-0 flex-1 items-center justify-center"
          onMouseDown={closeOnBackdrop}
        >
          <figure
            ref={figureRef}
            className="flex min-h-0 w-full max-w-[min(1100px,100%)] flex-col items-center"
          >
            {/*
              Panah diposisikan di atas tepi media, bukan sebagai sibling flex:
              di ponsel hanya menyisakan 254px untuk foto kalau panah memakan
              lebar. Urutan DOM tetap prev → media → next.
            */}
            <div className="relative flex w-full items-center justify-center">
              <NavButton
                label="Sebelumnya"
                side="prev"
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 sm:left-3"
                onClick={() => go(-1)}
              />

              {item.kind === "photo" ? (
                /*
                  Tinggi dibatasi (bukan aspect-video tetap) supaya foto kotak
                  tidak terletterbox jadi strip kecil di ponsel, dan foto
                  panorama tetap muat tanpa terpotong.
                */
                <div className="relative h-[min(68vh,92vw)] w-full overflow-hidden rounded-2xl bg-[#1f1f1e]">
                  <Image
                    src={item.fullSrc ?? item.src ?? ""}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 92vw, min(1100px, 92vw)"
                    className="object-contain"
                    priority
                  />
                </div>
              ) : item.youtubeId ? (
                <iframe
                  key={item.slug}
                  src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="aspect-video w-full rounded-2xl border-0"
                />
              ) : (
                <video
                  key={item.slug}
                  src={item.videoSrc}
                  poster={item.poster}
                  controls
                  playsInline
                  className="max-h-[70vh] w-full rounded-2xl bg-[#1f1f1e]"
                />
              )}

              <NavButton
                label="Berikutnya"
                side="next"
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 sm:right-3"
                onClick={() => go(1)}
              />
            </div>

            <figcaption className="mt-4 text-center">
              <p className="text-lg font-semibold text-white">{item.title}</p>
              {item.caption ? (
                <p className="mt-1 text-[15px] text-white/70">{item.caption}</p>
              ) : null}
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

function NavButton({
  label,
  side,
  className = "",
  onClick,
}: {
  label: string;
  side: "prev" | "next";
  className?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7cb4d] ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-5 w-5 ${side === "prev" ? "" : "rotate-180"}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M15 6l-6 6 6 6" />
      </svg>
    </button>
  );
}
