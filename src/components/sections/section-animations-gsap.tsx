"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Jarak awal per varian, mengikuti varian CSS di `globals.css`. */
const OFFSETS = {
  up: { x: 0, y: 20 },
  left: { x: -32, y: 0 },
  right: { x: 32, y: 0 },
  zoom: { x: 0, y: 0 },
} as const;

type Variant = keyof typeof OFFSETS;

function variantOf(target: unknown): Variant {
  const value = (target as HTMLElement).dataset?.revealItem;
  return value === "left" || value === "right" || value === "zoom" ? value : "up";
}

/**
 * Mesin animasi GSAP untuk halaman pendaftaran dan dokumentasi.
 *
 * Memakai penanda yang sama dengan `SectionAnimations`
 * (`data-section-animations`, `data-reveal-stagger`, `data-reveal-item`)
 * sehingga markup halaman tidak berubah, ditambah:
 * - `data-sequence` pada grup: kartu masuk berurutan dengan easing memantul;
 * - `data-parallax="<piksel>"` pada ornamen: melayang mengikuti scroll.
 *
 * Tanpa JavaScript atau saat `prefers-reduced-motion`, konten tampil utuh —
 * tidak ada state tersembunyi yang dibuat di CSS.
 */
export function SectionAnimationsGsap() {
  const anchor = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Wajib root milik halaman ini, bukan `document.querySelector` global:
    // Next menyimpan halaman yang pernah dibuka tetap ter-mount, sehingga
    // query global bisa menunjuk halaman lain dan menyuntik state awal
    // (opacity 0) ke elemen yang tidak pernah dianimasikan di sana — konten
    // lalu tidak muncul sampai halaman di-refresh.
    const root = anchor.current?.closest<HTMLElement>("[data-section-animations]");
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observers: IntersectionObserver[] = [];

    /**
     * Putar tween saat pemicunya masuk layar.
     *
     * Sengaja IntersectionObserver, bukan `scrollTrigger`: ScrollTrigger
     * mengukur posisi sekali saat mount, dan route yang dipasang/di-cache Next
     * bisa membuat ukuran itu meleset sehingga tween tidak pernah main dan
     * elemen tertinggal di state awal (opacity 0) sampai halaman di-refresh.
     */
    function playWhenVisible(trigger: Element, tween: gsap.core.Tween) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          observer.disconnect();
          tween.play();
        },
        { rootMargin: "0px 0px -15% 0px" },
      );
      observer.observe(trigger);
      observers.push(observer);
    }

    const ctx = gsap.context(() => {
      const sequenceGroups = [
        ...root.querySelectorAll<HTMLElement>("[data-sequence]"),
      ];
      const claimed = new Set<Element>();
      sequenceGroups.forEach((group) =>
        group.querySelectorAll("[data-reveal-item]").forEach((el) => claimed.add(el)),
      );

      root.querySelectorAll<HTMLElement>(":scope > section").forEach((section) => {
        const items = [...section.querySelectorAll<HTMLElement>("[data-reveal-item]")].filter(
          (el) => !claimed.has(el),
        );
        if (!items.length) return;

        // `paused` menahan tween tapi state awalnya tetap langsung ditulis,
        // jadi konten tidak sempat berkedip tampil sebelum animasi mulai.
        playWhenVisible(
          section,
          gsap.from(items, {
            paused: true,
            opacity: 0,
            duration: 0.65,
            ease: "power3.out",
            stagger: 0.09,
            x: (_, el) => OFFSETS[variantOf(el)].x,
            y: (_, el) => OFFSETS[variantOf(el)].y,
            scale: (_, el) => (variantOf(el) === "zoom" ? 0.96 : 1),
            // Tanpa ini, `revert()` saat route dilepas bisa meninggalkan
            // inline `opacity: 0` yang tidak pernah dikembalikan.
            clearProps: "opacity,transform",
          }),
        );
      });

      sequenceGroups.forEach((group) => {
        const items = [...group.querySelectorAll<HTMLElement>("[data-reveal-item]")];
        if (!items.length) return;

        // "rise" untuk baris melebar penuh: menskala baris selebar kolom
        // terbaca sebagai zoom, bukan sebagai langkah yang datang berurutan.
        const rise = group.dataset.sequence === "rise";

        playWhenVisible(
          group,
          gsap.from(items, {
            paused: true,
            opacity: 0,
            y: 26,
            scale: rise ? 1 : 0.94,
            duration: 0.7,
            ease: "back.out(1.7)",
            stagger: 0.13,
            clearProps: "opacity,transform",
          }),
        );
      });

      // Parallax tetap ScrollTrigger: hanya menggeser ornamen, tidak pernah
      // menyembunyikan konten.
      root.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const distance = Number(el.dataset.parallax) || 32;

        gsap.fromTo(
          el,
          { y: -distance },
          {
            y: distance,
            ease: "none",
            scrollTrigger: {
              trigger: el.closest("section") ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    }, root);

    return () => {
      observers.forEach((observer) => observer.disconnect());
      ctx.revert();
    };
  }, []);

  return <span ref={anchor} hidden aria-hidden="true" />;
}
