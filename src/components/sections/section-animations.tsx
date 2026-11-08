"use client";

import { useEffect } from "react";

export function SectionAnimations() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-section-animations]");
    if (!root) return;

    const sections = Array.from(root.querySelectorAll<HTMLElement>(":scope > section"));
    if (!sections.length) return;

    // Beri indeks ke setiap anak grup agar CSS bisa menghitung delay stagger.
    root.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
      Array.from(group.children).forEach((child, index) => {
        if (child instanceof HTMLElement) {
          child.style.setProperty("--reveal-index", String(index));
        }
      });
    });

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("section-reveal-visible"));
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

    sections.forEach((section) => {
      section.classList.add("section-reveal");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
