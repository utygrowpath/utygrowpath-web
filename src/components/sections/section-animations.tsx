"use client";

import { useEffect } from "react";

export function SectionAnimations() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-section-animations]");
    if (!root) return;

    const sections = Array.from(
      root.querySelectorAll<HTMLElement>(":scope > section:not([data-no-reveal])"),
    );
    const revealOnView = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal-on-view]"));
    const targets = [...sections, ...revealOnView];
    if (!targets.length) return;

    // Beri indeks ke setiap anak grup agar CSS bisa menghitung delay stagger.
    root.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
      Array.from(group.children).forEach((child, index) => {
        if (child instanceof HTMLElement) {
          child.style.setProperty("--reveal-index", String(index));
        }
      });
    });

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("section-reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("section-reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    targets.forEach((target) => target.classList.add("section-reveal"));

    // Beri browser kesempatan menerapkan state awal (opacity/transform) sebelum
    // mengamati elemen yang mungkin sudah berada di viewport saat halaman dibuka.
    let secondFrame = 0;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        targets.forEach((target) => observer.observe(target));
      });
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      observer.disconnect();
    };
  }, []);

  return null;
}
