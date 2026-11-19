"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SPLASH_SESSION_KEY = "uty_growpath_splash_viewed";

interface SplashScreenProps {
  onComplete?: () => void;
  forceShow?: boolean;
}

export function SplashScreen({ onComplete, forceShow = false }: SplashScreenProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check sessionStorage
    if (!forceShow) {
      try {
        const viewed = sessionStorage.getItem(SPLASH_SESSION_KEY);
        if (viewed === "true") {
          // Remove pre-hydration splash lock immediately if already viewed
          document.documentElement.classList.remove("splash-active");
          if (onComplete) onComplete();
          return;
        }
      } catch {
        // Fallback
      }
    }

    // Mark viewed for this session
    try {
      sessionStorage.setItem(SPLASH_SESSION_KEY, "true");
    } catch {
      // Ignore
    }

    setMounted(true);
    document.body.style.overflow = "hidden";

    // Release pre-hydration curtain lock right when frames are sliding out (at 3.1s)
    const tReleaseLock = setTimeout(() => {
      document.documentElement.classList.remove("splash-active");
    }, 3100);

    // Auto finish after 3.8s -> unmount
    const timer = setTimeout(() => {
      setMounted(false);
      document.documentElement.classList.remove("splash-active");
      document.body.style.overflow = "";
      if (onComplete) onComplete();
    }, 3800);

    return () => {
      clearTimeout(tReleaseLock);
      clearTimeout(timer);
      document.documentElement.classList.remove("splash-active");
      document.body.style.overflow = "";
    };
  }, [onComplete, forceShow]);

  if (!mounted) return null;

  return (
    <div
      aria-label="Loading Splash Screen"
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-none"
    >
      {/* 
        Solid Shield Curtain:
        Krem khas UTY Growpath (#fff9f0) yang menutup layar secara 100% sempurna
        sebelum frame meluncur, lalu memudar halus saat frame keluar.
      */}
      <div className="absolute inset-0 bg-[#fff9f0] animate-[splashCurtain_3.8s_ease-out_forwards]" />

      {/* 
        3 FRAMES CONTAINER:
        100% Fullscreen Coverage (No white gaps, seamlessly fits together)
        Split into 3 equal proportional vertical columns:
        Frame 2 (Left - Kuning), Frame 1 (Center - Merah), Frame 3 (Right - Biru)
      */}
      <div className="absolute inset-0 grid h-full w-full grid-cols-3 overflow-hidden">
        {/* Frame 2: Kiri (Kuning) - Turun dari Atas ke Bawah lalu terus ke Bawah */}
        <div className="relative h-full w-full overflow-hidden animate-[splashFrameDown_3.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          <Image
            src="/images/2026/season4/motif/frame2-fit.svg"
            alt=""
            priority
            fill
            sizes="34vw"
            className="object-cover object-center"
          />
        </div>

        {/* Frame 1: Tengah (Merah) - Naik dari Bawah ke Atas lalu terus ke Atas */}
        <div className="relative z-10 h-full w-full overflow-hidden animate-[splashFrameUp_3.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          <Image
            src="/images/2026/season4/motif/frame1-fit.svg"
            alt=""
            priority
            fill
            sizes="34vw"
            className="object-cover object-center"
          />
        </div>

        {/* Frame 3: Kanan (Biru) - Turun dari Atas ke Bawah lalu terus ke Bawah */}
        <div className="relative h-full w-full overflow-hidden animate-[splashFrameDown_3.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          <Image
            src="/images/2026/season4/motif/frame3-fit.svg"
            alt=""
            priority
            fill
            sizes="34vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* 
        CENTER STAGE:
        1. Pure Floating Logo (Pops up at 0.75s, fades out at 3.0s)
        2. Modern Editorial Typography (Pops up at 1.25s, fades out at 3.0s)
      */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 text-center">
        {/* 1. Pure Floating Logo */}
        <div className="relative flex h-36 w-36 sm:h-48 sm:w-48 items-center justify-center animate-[splashLogo_3.8s_cubic-bezier(0.175,0.885,0.32,1.25)_forwards]">
          {/* Subtle Warm Halo Backlight */}
          <div className="pointer-events-none absolute -inset-6 rounded-full bg-white/20 blur-2xl" />
          <div className="pointer-events-none absolute -inset-3 rounded-full bg-[#f7cb4d]/30 blur-xl" />

          <Image
            src="/images/2026/season4/logo/gowpaths4.png"
            alt="UTY Growpath Expo Season 4"
            width={260}
            height={260}
            priority
            className="relative z-10 h-full w-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)] filter"
          />
        </div>

        {/* 2. Modern Editorial Typography */}
        <div className="mt-4 flex flex-col items-center justify-center text-center animate-[splashText_3.8s_ease-out_forwards]">
          {/* Main Title with Elegant Letter Spacing */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-[0.22em] text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)]">
              UTY GROWPATH
            </span>
            <span className="rounded-md bg-[#f7cb4d] px-2 py-0.5 text-xs sm:text-sm font-black uppercase tracking-wider text-[#30302f] shadow-md">
              EXPO
            </span>
          </div>

          {/* Subtitle Tagline */}
          <p className="mt-2 font-serif text-sm sm:text-base md:text-lg font-bold italic tracking-wider text-[#f7cb4d] drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]">
            Vistara Navakarya
          </p>
        </div>
      </div>
    </div>
  );
}
