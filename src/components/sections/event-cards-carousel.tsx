"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";

export interface EventCardItem {
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface EventCardsCarouselProps {
  items: EventCardItem[];
}

export function EventCardsCarousel({ items }: EventCardsCarouselProps) {
  const n = items.length;

  // We duplicate items 3 times for seamless infinite circular scrolling:
  // indices 0..n-1 (copy 1), n..2n-1 (original), 2n..3n-1 (copy 2)
  const extendedItems = [...items, ...items, ...items];

  // Start at the middle set (index n)
  const [currentIndex, setCurrentIndex] = useState(n);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const isNavigatingRef = useRef(false);

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 45;

  const handleNext = useCallback(() => {
    if (isNavigatingRef.current) return;
    isNavigatingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    if (isNavigatingRef.current) return;
    isNavigatingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const handleTransitionEnd = () => {
    isNavigatingRef.current = false;
    // If we passed the end of the middle set, silently jump back to the middle set
    if (currentIndex >= 2 * n) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - n);
    }
    // If we went before the middle set, silently jump forward to the middle set
    else if (currentIndex < n) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + n);
    }
  };

  // Re-enable transition if it was disabled after jump
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Real index for indicator (0 to n - 1)
  const activeDotIndex = ((currentIndex % n) + n) % n;

  return (
    <div className="relative w-full">
      {/* Navigation Arrow: Left (Ujung Kiri Card) */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Acara Sebelumnya"
        className="absolute -left-3 sm:-left-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#30302f]/80 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#f7cb4d] hover:bg-[#f7cb4d] hover:text-[#30302f] active:scale-95 shadow-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Navigation Arrow: Right (Ujung Kanan Card) */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Acara Selanjutnya"
        className="absolute -right-3 sm:-right-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#30302f]/80 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#f7cb4d] hover:bg-[#f7cb4d] hover:text-[#30302f] active:scale-95 shadow-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Carousel Viewport Container */}
      <div
        className="overflow-hidden rounded-2xl"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(calc(-${currentIndex} * (var(--card-width) + var(--card-gap))))`,
            transition: isTransitioning
              ? "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)"
              : "none",
          }}
          className="flex [--card-gap:1.25rem] [--card-width:100%] sm:[--card-width:calc((100%-1.25rem)/2)] md:[--card-gap:1.5rem] md:[--card-width:calc((100%-3rem)/3)] gap-[var(--card-gap)]"
        >
          {extendedItems.map((event, idx) => (
            <article
              key={idx}
              className="group relative flex shrink-0 w-[var(--card-width)] flex-col justify-end overflow-hidden rounded-2xl bg-white text-left text-[#30302f] shadow-lg aspect-[4/5] sm:aspect-[3/4]"
            >
              <Image
                src={event.image}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt={event.alt}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-white via-white/85 via-40% to-transparent to-75%"
              />
              <div className="relative z-10 p-5 sm:p-6 text-left">
                <h3 className="text-xl font-bold text-[#2b4869]">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#544d47]">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom Dots Indicator */}
      <div className="mt-8 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              if (isNavigatingRef.current) return;
              isNavigatingRef.current = true;
              setIsTransitioning(true);
              setCurrentIndex(n + i);
            }}
            aria-label={`Ke acara ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeDotIndex === i
                ? "w-8 bg-[#f7cb4d]"
                : "w-2.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
