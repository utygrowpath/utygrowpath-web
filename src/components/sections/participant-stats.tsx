"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const statistics = [
  { value: 3500, label: "Audience" },
  { value: 240, label: "UMKM" },
  { value: 240, label: "Produk" },
];

export function ParticipantStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState(statistics.map(() => 0));
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      const frameId = requestAnimationFrame(() => {
        setCounts(statistics.map(({ value }) => value));
      });
      return () => cancelAnimationFrame(frameId);
    }

    const duration = 2500;
    const startTime = performance.now();
    let frameId = 0;

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 4;

      setCounts(statistics.map(({ value }) => Math.round(value * easedProgress)));

      if (progress < 1) frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [hasStarted]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="participant-stats-heading"
      className="relative isolate overflow-hidden bg-[#76ad5a] py-16 text-white sm:py-20"
    >
      <Image src="/images/2026/season4/motif/motif2.png" width={180} height={180} alt="" className="pointer-events-none absolute -left-5 top-1/2 w-28 -translate-y-1/2 opacity-[0.14] sm:left-8 sm:w-36" />
      <Image src="/images/2026/season4/motif/motif3.png" width={200} height={200} alt="" className="pointer-events-none absolute -right-5 top-1/2 w-28 -translate-y-1/2 opacity-[0.14] sm:right-8 sm:w-36" />
      <div data-reveal-stagger className="relative mx-auto max-w-6xl px-6">
        <h2 id="participant-stats-heading" data-reveal-item="up" className="text-center text-2xl font-bold sm:text-3xl">
          Partisipan UTY Growpath #3
        </h2>
        <dl data-reveal-item="zoom" className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-3 sm:gap-5">
          {statistics.map(({ value, label }, index) => (
            <div key={label} className="text-center">
              <dt className="sr-only">{label}</dt>
              <dd aria-label={`${new Intl.NumberFormat("id-ID").format(value)} ${label}`}>
                <span aria-hidden="true" className="block text-6xl leading-none font-bold tracking-tight text-[#e0b83e] sm:text-7xl">
                  {new Intl.NumberFormat("id-ID").format(counts[index])}
                </span>
                <span aria-hidden="true" className="mt-4 block text-xl font-semibold">++ {label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
