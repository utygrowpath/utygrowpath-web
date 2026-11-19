"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";

import type { CommitteeMember } from "@/types/content";

interface OurTeamViewProps {
  committee: CommitteeMember[];
}

/* ────────────────────────────────────────────────────────────
   Member Detail Modal
   ──────────────────────────────────────────────────────────── */
function MemberModal({
  member,
  onClose,
}: {
  member: CommitteeMember;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const overlay = overlayRef.current;
    const panel = panelRef.current;
    if (overlay && panel) {
      gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.25 });
      gsap.fromTo(
        panel,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power4.out" },
      );
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = useCallback(() => {
    const overlay = overlayRef.current;
    const panel = panelRef.current;
    if (overlay && panel) {
      gsap.to(panel, { opacity: 0, y: 40, duration: 0.25, ease: "power2.in" });
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.2,
        delay: 0.08,
        onComplete: onClose,
      });
    } else {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleClose]);

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Detail ${member.name}`}
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center bg-black/40 backdrop-blur-sm p-0 sm:p-6"
      onClick={handleClose}
    >
      <div
        ref={panelRef}
        className="relative w-full max-w-[340px] overflow-hidden rounded-t-[28px] sm:rounded-[28px] border border-[#e6d5b7]/60 bg-[#fffbf3] shadow-[0_30px_80px_-20px_rgba(141,73,58,0.3)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          aria-label="Tutup"
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#2b4869]/60 text-white backdrop-blur-md transition-all hover:bg-[#2b4869]/80 active:scale-90"
        >
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Photo */}
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          {member.image && member.image.trim() !== "" ? (
            <Image
              src={member.image}
              fill
              sizes="340px"
              alt={member.name}
              className="object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#2b4869] to-[#1a3350]">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#e0b83e]/30 bg-white/5">
                <svg className="h-14 w-14 text-[#e0b83e]/50" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          )}
          {/* Warm gradient overlay at bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fffbf3] via-[#fffbf3]/70 to-transparent" />

          {/* Name + role overlay on photo */}
          <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-3">
            <h3 className="text-xl font-bold leading-snug tracking-tight text-[#2b4869]">
              {member.name}
            </h3>
            <p className="mt-0.5 text-[13px] font-semibold tracking-wide text-[#8d493a] uppercase">
              {member.role}
            </p>
          </div>
        </div>

        {/* Info section */}
        <div className="px-5 pb-6 pt-1">
          {/* Gold accent line */}
          <div className="mb-4 h-[2px] w-10 rounded-full bg-[#e0b83e]/60" />

          <div className="space-y-3">
            {[
              { label: "Divisi", value: member.division },
              ...(member.prodi ? [{ label: "Prodi", value: member.prodi }] : []),
              ...(member.angkatan ? [{ label: "Angkatan", value: member.angkatan }] : []),
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[10px] font-bold tracking-[0.12em] text-[#8d493a]/50 uppercase">
                  {item.label}
                </p>
                <p className="mt-0.5 text-[14px] font-medium leading-snug text-[#3d3028]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Main View
   ──────────────────────────────────────────────────────────── */
export function OurTeamView({ committee }: OurTeamViewProps) {
  const CARD_W = 260;
  const GAP = 24;
  const CARD_STEP = CARD_W + GAP;

  const trackRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const divisionsRef = useRef<HTMLDivElement>(null);

  const divisionOrder = [
    "Formatur",
    "Creative Event",
    "Equipment & Logistic Operations",
    "Finance Administrations",
    "Community Relations",
    "Story Hunter",
    "Social Media Development",
    "Photographer & Videographer",
    "Website Development",
    "Graphic Designer",
  ];

  const extraDivisions = Array.from(
    new Set(committee.map((m) => m.division)),
  ).filter((d) => !divisionOrder.includes(d));

  const allDivisions = [...divisionOrder, ...extraDivisions];

  const [divisionPage, setDivisionPage] = useState<Record<string, number>>({});
  const [selectedMember, setSelectedMember] = useState<CommitteeMember | null>(null);

  /* ── Responsive: visible cards count ────────────────────── */
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 640) setVisibleCards(1);       // mobile: 1 card
      else if (w < 1024) setVisibleCards(2); // tablet: 2 cards
      else setVisibleCards(3);               // desktop: 3 cards
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ── GSAP slide animation ───────────────────────────────── */
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const tweens = Object.entries(trackRefs.current).flatMap(([division, track]) => {
      if (!track) return [];
      const x = -(divisionPage[division] ?? 0) * CARD_STEP;

      if (prefersReducedMotion) {
        gsap.set(track, { x });
        return [];
      }
      if (Math.abs(Number(gsap.getProperty(track, "x")) - x) < 0.5) return [];

      return [
        gsap.to(track, {
          x,
          duration: 0.65,
          ease: "power3.inOut",
          overwrite: "auto",
        }),
      ];
    });

    return () => tweens.forEach((tween) => tween.kill());
  }, [divisionPage, CARD_STEP]);

  /* ── Scroll-reveal animation ────────────────────────────── */
  useEffect(() => {
    const root = divisionsRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const targets = [
      ...root.querySelectorAll<HTMLElement>("[data-division-reveal]"),
    ];
    if (!targets.length) return;

    const tweens = new Map<HTMLElement, gsap.core.Tween>();
    const context = gsap.context(() => {
      targets.forEach((target) => {
        tweens.set(
          target,
          gsap.from(target, {
            paused: true,
            opacity: 0,
            y: 28,
            duration: 0.75,
            ease: "power3.out",
            clearProps: "opacity,transform",
          }),
        );
      });
    }, root);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          tweens.get(entry.target as HTMLElement)?.play();
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px" },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      context.revert();
    };
  }, []);

  /* ── Group members ──────────────────────────────────────── */
  const groupedCommittee = allDivisions.reduce<Record<string, CommitteeMember[]>>(
    (acc, div) => {
      const members = committee.filter((m) => m.division === div);
      if (members.length > 0) acc[div] = members;
      return acc;
    },
    {},
  );

  return (
    <>
      {/* Modal */}
      {selectedMember && (
        <MemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}

      <div className="space-y-16 sm:space-y-24">
        {/* Division Sections — no filter buttons */}
        <div ref={divisionsRef} className="space-y-20 sm:space-y-28">
          {Object.keys(groupedCommittee).map((division) => {
            const members = groupedCommittee[division] || [];
            if (!members.length) return null;

            const currentPage = divisionPage[division] ?? 0;
            const totalPages = Math.max(1, members.length - visibleCards + 1);
            const hasMoreSlides = members.length > visibleCards;

            const goTo = (page: number) => {
              setDivisionPage((prev) => ({ ...prev, [division]: page }));
            };

            /* Viewport width for the visible cards area */
            const viewportW = visibleCards * CARD_W + (visibleCards - 1) * GAP;

            return (
              <section
                key={division}
                data-division-reveal
                className="relative space-y-10"
              >
                {/* Division Header */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center gap-3 sm:gap-6">
                    <div className="hidden h-5 w-16 opacity-35 sm:block lg:w-28">
                      <Image
                        src="/images/2026/season4/motif/motif5.svg"
                        width={100}
                        height={20}
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-[#2b4869] sm:text-3xl lg:text-4xl">
                      {division}
                    </h2>
                    <div className="hidden h-5 w-16 opacity-35 sm:block lg:w-28">
                      <Image
                        src="/images/2026/season4/motif/motif6.svg"
                        width={100}
                        height={20}
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-center">
                    <div className="h-7 w-7 opacity-70">
                      <Image
                        src="/images/2026/season4/motif/motif4.svg"
                        width={30}
                        height={30}
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Carousel wrapper – arrows float left & right */}
                <div className="relative px-8 sm:px-10 lg:px-16">
                  {/* Left arrow */}
                  {totalPages > 1 && (
                    <button
                      onClick={() => goTo(Math.max(0, currentPage - 1))}
                      disabled={currentPage === 0}
                      aria-label="Slide sebelumnya"
                      className="absolute left-0 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#e6d5b7] bg-white/90 text-[#2b4869] shadow-lg backdrop-blur-sm transition-all hover:border-[#e0b83e] hover:bg-[#2b4869] hover:text-white hover:shadow-[0_0_20px_rgba(224,184,62,0.35)] disabled:cursor-not-allowed disabled:opacity-25"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </button>
                  )}

                  {/* Card viewport */}
                  <div
                    className={`mx-auto w-full ${hasMoreSlides ? "overflow-hidden" : ""}`}
                    style={{ maxWidth: viewportW }}
                  >
                    <div
                      ref={(element) => {
                        trackRefs.current[division] = element;
                      }}
                      className={`gap-6 ${
                        hasMoreSlides
                          ? "flex w-max"
                          : "flex flex-wrap justify-center"
                      }`}
                    >
                      {members.map((member) => (
                        <button
                          key={`${member.division}-${member.name}`}
                          type="button"
                          onClick={() => setSelectedMember(member)}
                          className="group relative flex w-[260px] shrink-0 flex-col items-center text-left"
                          aria-label={`Lihat detail ${member.name}`}
                        >
                          {/* Card container */}
                          <div
                            className="relative aspect-[3/4] w-full max-w-[260px] overflow-hidden rounded-2xl border-2 border-[#e6d5b7] bg-gradient-to-b from-[#2b4869] to-[#122030] shadow-[0_16px_36px_-16px_rgba(43,72,105,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-[#e0b83e] hover:shadow-[0_24px_50px_-16px_rgba(224,184,62,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e0b83e]"
                          >
                            {member.image && member.image.trim() !== "" ? (
                              <>
                                <Image
                                  src={member.image}
                                  fill
                                  sizes="(max-width: 768px) 280px, 260px"
                                  alt={member.name}
                                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div
                                  aria-hidden="true"
                                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101b28]/90 via-[#101b28]/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
                                />
                              </>
                            ) : (
                              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 pb-20">
                                <div
                                  aria-hidden="true"
                                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                                  style={{
                                    backgroundImage: "url('/images/2026/season4/motif/motif2.png')",
                                    backgroundSize: "140px",
                                    backgroundRepeat: "repeat",
                                  }}
                                />
                                <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full border-2 border-[#e0b83e]/30 bg-[#16273b]/90 shadow-inner transition-transform duration-500 group-hover:scale-105 group-hover:border-[#e0b83e]/60">
                                  <svg
                                    className="h-14 w-14 sm:h-16 sm:w-16 text-[#e0b83e]/60 transition-colors duration-500 group-hover:text-[#e0b83e]/90"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              </div>
                            )}

                            {/* Bottom label – name & role on hover */}
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-5 text-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                              <p className="text-sm font-bold tracking-wider text-white uppercase drop-shadow-sm sm:text-base">
                                {member.name}
                              </p>
                              <p className="mt-1 text-xs font-semibold tracking-widest text-[#f7cb4d] uppercase drop-shadow-xs">
                                {member.role}
                              </p>
                            </div>

                            {/* Tap hint icon (mobile) */}
                            <div className="pointer-events-none absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-black/25 text-white/80 backdrop-blur-sm sm:hidden">
                              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                              </svg>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right arrow */}
                  {totalPages > 1 && (
                    <button
                      onClick={() => goTo(Math.min(totalPages - 1, currentPage + 1))}
                      disabled={currentPage === totalPages - 1}
                      aria-label="Slide berikutnya"
                      className="absolute right-0 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#e6d5b7] bg-white/90 text-[#2b4869] shadow-lg backdrop-blur-sm transition-all hover:border-[#e0b83e] hover:bg-[#2b4869] hover:text-white hover:shadow-[0_0_20px_rgba(224,184,62,0.35)] disabled:cursor-not-allowed disabled:opacity-25"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Page dot indicators */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 pt-2">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goTo(idx)}
                        aria-label={`Slide ${idx + 1}`}
                        className={`rounded-full transition-all duration-300 ${
                          idx === currentPage
                            ? "h-2.5 w-7 bg-[#e0b83e]"
                            : "h-2.5 w-2.5 bg-[#d4ad54]/40 hover:bg-[#d4ad54]/70"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
