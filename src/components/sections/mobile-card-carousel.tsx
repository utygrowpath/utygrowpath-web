"use client";

import { useState, useRef, useEffect, type ReactNode, type TouchEvent } from "react";

interface MobileCardCarouselProps {
  items: ReactNode[];
  label: string;
}

export function MobileCardCarousel({ items, label }: MobileCardCarouselProps) {
  const total = items.length;

  // We clone items: [lastItem, ...items, firstItem]
  // virtual index: 0 is clone of last item, 1 to total are real items, total + 1 is clone of first item
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const isNavigatingRef = useRef(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 45;

  // Expanded items with clones for infinite seamless loop
  const extendedItems = [items[total - 1], ...items, items[0]];

  const handleNext = () => {
    if (isNavigatingRef.current) return;
    isNavigatingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isNavigatingRef.current) return;
    isNavigatingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    isNavigatingRef.current = false;
    // When moved past the last item (into the clone of the first item)
    if (currentIndex === total + 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
    // When moved before the first item (into the clone of the last item)
    else if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(total);
    }
  };

  // Re-enable transition if it was turned off for instant jump
  useEffect(() => {
    if (!isTransitioning) {
      // Allow DOM to update transform instantly, then re-enable transition for next interaction
      const timer = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(timer);
    }
  }, [isTransitioning]);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Map virtual currentIndex (0 to total + 1) to actual active dot index (0 to total - 1)
  const activeDotIndex =
    currentIndex === 0
      ? total - 1
      : currentIndex === total + 1
      ? 0
      : currentIndex - 1;

  const goTo = (targetIndex: number) => {
    if (isNavigatingRef.current) return;
    isNavigatingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex(targetIndex + 1);
  };

  return (
    <div className="relative md:hidden">
      {/* Viewport for cards with side navigation buttons embedded */}
      <div className="relative">
        <div
          className="overflow-hidden px-1 py-1"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`flex ${
              isTransitioning
                ? "transition-transform duration-500 ease-out"
                : "transition-none"
            }`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedItems.map((item, index) => (
              <div key={index} className="w-full shrink-0 px-1">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Side Nav Button - Left (Vertically Centered on Card) */}
        <button
          type="button"
          aria-label={`Kartu ${label} sebelumnya`}
          onClick={handlePrev}
          className="absolute -left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/95 text-[#30302f] shadow-lg backdrop-blur-md transition-all active:scale-90 hover:bg-white sm:-left-3"
        >
          <svg
            className="h-5 w-5 -translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Side Nav Button - Right (Vertically Centered on Card) */}
        <button
          type="button"
          aria-label={`Kartu ${label} selanjutnya`}
          onClick={handleNext}
          className="absolute -right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/95 text-[#30302f] shadow-lg backdrop-blur-md transition-all active:scale-90 hover:bg-white sm:-right-3"
        >
          <svg
            className="h-5 w-5 translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicator Dots Below */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {items.map((_, index) => {
          const isActive = index === activeDotIndex;
          return (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Lihat slide ${index + 1} dari ${total}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-6 bg-[#e13b43]"
                  : "w-2 bg-black/20 hover:bg-black/40"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
