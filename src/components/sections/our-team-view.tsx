"use client";

import Image from "next/image";
import { useState } from "react";

import type { CommitteeMember } from "@/types/content";

interface OurTeamViewProps {
  committee: CommitteeMember[];
}

export function OurTeamView({ committee }: OurTeamViewProps) {
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
    new Set(committee.map((m) => m.division))
  ).filter((d) => !divisionOrder.includes(d));

  const allDivisions = [...divisionOrder, ...extraDivisions];
  const divisions = ["Semua", ...allDivisions];

  const [activeTab, setActiveTab] = useState<string>("Semua");
  const [divisionPage, setDivisionPage] = useState<Record<string, number>>({});
  const [divisionDir, setDivisionDir] = useState<Record<string, "left" | "right">>({});
  const PER_PAGE = 4;

  const groupedCommittee = allDivisions.reduce<Record<string, CommitteeMember[]>>(
    (acc, div) => {
      const members = committee.filter((m) => m.division === div);
      if (members.length > 0) acc[div] = members;
      return acc;
    },
    {}
  );

  const displayedDivisions =
    activeTab === "Semua"
      ? Object.keys(groupedCommittee)
      : [activeTab];

  return (
    <>
      {/* Carousel slide keyframes */}
      <style>{`
        @keyframes carouselSlideRight {
          from { opacity: 0; transform: translateX(48px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes carouselSlideLeft {
          from { opacity: 0; transform: translateX(-48px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      <div className="space-y-16 sm:space-y-24">
        {/* Category / Division Filter Tabs */}
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-2.5 px-4 sm:gap-3">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {divisions
              .filter((tab) => tab === "Semua" || groupedCommittee[tab])
              .map((tab) => {
              const isActive = activeTab === tab;
              const count = tab === "Semua" ? committee.length : (groupedCommittee[tab]?.length || 0);
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setDivisionPage({});
                    setDivisionDir({});
                  }}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all sm:text-sm ${
                    isActive
                      ? "bg-[#2b4869] text-white shadow-md shadow-[#2b4869]/20"
                      : "border border-[#eadbbd] bg-white text-[#625b54] hover:border-[#2b4869]/40 hover:bg-[#fff9f0]"
                  }`}
                >
                  <span>{tab}</span>
                  <span
                    className={`inline-flex items-center justify-center rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                      isActive
                        ? "bg-white/25 text-white"
                        : "bg-[#eadbbd]/60 text-[#8d493a]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Division Sections */}
        <div className="space-y-20 sm:space-y-28">
          {displayedDivisions.map((division) => {
            const members = groupedCommittee[division] || [];
            if (!members.length) return null;

            const currentPage = divisionPage[division] ?? 0;
            const totalPages = Math.ceil(members.length / PER_PAGE);
            const pageMembers = members.slice(
              currentPage * PER_PAGE,
              (currentPage + 1) * PER_PAGE
            );
            const dir = divisionDir[division] ?? "right";

            const goTo = (page: number) => {
              setDivisionDir((prev) => ({
                ...prev,
                [division]: page > (divisionPage[division] ?? 0) ? "right" : "left",
              }));
              setDivisionPage((prev) => ({ ...prev, [division]: page }));
            };

            return (
              <section key={division} className="relative space-y-10">
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

                  <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-[#eadbbd] bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-[#8d493a] shadow-xs">
                    <span>{members.length} Orang</span>
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
                      aria-label="Halaman sebelumnya"
                      className="absolute left-0 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#e6d5b7] bg-white/90 text-[#2b4869] shadow-lg backdrop-blur-sm transition-all hover:border-[#e0b83e] hover:bg-[#2b4869] hover:text-white hover:shadow-[0_0_20px_rgba(224,184,62,0.35)] disabled:cursor-not-allowed disabled:opacity-25"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </button>
                  )}

                  {/* Members Grid – animates on page change via key remount */}
                  <div
                    key={`${division}-${currentPage}`}
                    style={{
                      animation: `${dir === "right" ? "carouselSlideRight" : "carouselSlideLeft"} 0.35s ease-out both`,
                    }}
                    className={`mx-auto grid gap-6 sm:gap-8 ${
                      // Kalau ada pagination, selalu pakai 4-kolom agar ukuran kartu
                      // konsisten di semua halaman (termasuk halaman terakhir yang < 4 item)
                      totalPages > 1
                        ? "max-w-6xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                        : members.length === 1
                        ? "max-w-xs justify-center grid-cols-1"
                        : members.length === 2
                        ? "max-w-xl grid-cols-1 sm:grid-cols-2"
                        : members.length === 3
                        ? "max-w-4xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                        : "max-w-6xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    }`}
                  >
                    {pageMembers.map((member) => (
                      <div
                        key={`${member.division}-${member.name}`}
                        className="group relative flex flex-col items-center"
                      >
                        {/* Card container */}
                        <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl border-2 border-[#e6d5b7] bg-gradient-to-b from-[#2b4869] to-[#122030] shadow-[0_16px_36px_-16px_rgba(43,72,105,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-[#e0b83e] hover:shadow-[0_24px_50px_-16px_rgba(224,184,62,0.4)]">
                          {member.image && member.image.trim() !== "" ? (
                            <>
                              <Image
                                src={member.image}
                                fill
                                sizes="(max-width: 768px) 280px, 260px"
                                alt={member.name}
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                              />
                              <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101b28] via-[#101b28]/25 to-transparent opacity-70 transition-opacity group-hover:opacity-55"
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

                          {/* Bottom label */}
                          <div className="absolute inset-x-0 bottom-0 p-5 text-center">
                            <p className="text-sm font-bold tracking-wider text-white uppercase drop-shadow-sm sm:text-base">
                              {member.name}
                            </p>
                            <p className="mt-1 text-xs font-semibold tracking-widest text-[#f7cb4d] uppercase drop-shadow-xs">
                              {member.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right arrow */}
                  {totalPages > 1 && (
                    <button
                      onClick={() => goTo(Math.min(totalPages - 1, currentPage + 1))}
                      disabled={currentPage === totalPages - 1}
                      aria-label="Halaman berikutnya"
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
                        aria-label={`Halaman ${idx + 1}`}
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
