"use client";

import Image from "next/image";
import { useState } from "react";

import type { CommitteeMember } from "@/types/content";

interface OurTeamViewProps {
  committee: CommitteeMember[];
}

export function OurTeamView({ committee }: OurTeamViewProps) {
  const divisions = [
    "Semua",
    "Chief Executive",
    "Story Hunter",
    "Community Relation",
    "Creative & Media",
    "Logistics & Operational",
    "Sponsorship & Partnership",
  ];

  const [activeTab, setActiveTab] = useState<string>("Semua");

  // Group members by division
  const groupedCommittee = divisions
    .filter((d) => d !== "Semua")
    .reduce<Record<string, CommitteeMember[]>>((acc, div) => {
      acc[div] = committee.filter((m) => m.division === div);
      return acc;
    }, {});

  const displayedDivisions =
    activeTab === "Semua"
      ? Object.keys(groupedCommittee)
      : [activeTab];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Category / Division Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {divisions.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all sm:text-sm ${
                isActive
                  ? "bg-[#2b4869] text-white shadow-md shadow-[#2b4869]/20"
                  : "border border-[#eadbbd] bg-white text-[#625b54] hover:border-[#2b4869]/40 hover:bg-[#fff9f0]"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Division Sections */}
      <div className="space-y-20 sm:space-y-28">
        {displayedDivisions.map((division) => {
          const members = groupedCommittee[division] || [];
          if (!members.length) return null;

          return (
            <section
              key={division}
              data-reveal-on-view
              className="relative space-y-10"
            >
              {/* Division Header with Cultural Batik & Gunungan Accents */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center gap-3 sm:gap-6">
                  {/* Batik Accent Left */}
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

                  {/* Title */}
                  <h2 className="text-2xl font-bold tracking-tight text-[#2b4869] sm:text-3xl lg:text-4xl">
                    {division}
                  </h2>

                  {/* Batik Accent Right */}
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

                {/* Gunungan / Motif Center Accent */}
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

              {/* Members Grid / Carousel Display */}
              <div
                className={`mx-auto grid gap-6 sm:gap-8 ${
                  members.length === 1
                    ? "max-w-xs justify-center grid-cols-1"
                    : members.length === 2
                    ? "max-w-xl grid-cols-1 sm:grid-cols-2"
                    : members.length === 3
                    ? "max-w-4xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    : "max-w-6xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                }`}
              >
                {members.map((member) => (
                  <div
                    key={`${member.division}-${member.name}`}
                    className="group relative flex flex-col items-center"
                  >
                    {/* Card container */}
                    <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl border-2 border-[#e6d5b7] bg-gradient-to-b from-[#2b4869] to-[#122030] shadow-[0_16px_36px_-16px_rgba(43,72,105,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-[#e0b83e] hover:shadow-[0_24px_50px_-16px_rgba(224,184,62,0.4)]">
                      {/* Member photo / placeholder */}
                      <Image
                        src={member.image || "/images/2026/season4/dokumentasi/docum1.png"}
                        fill
                        sizes="(max-width: 768px) 280px, 260px"
                        alt={member.name}
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />

                      {/* Ambient gradient overlay */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101b28] via-[#101b28]/60 to-transparent opacity-95 transition-opacity group-hover:opacity-90"
                      />

                      {/* Bottom Overlay Label (matching reference) */}
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

              {/* Slider / Carousel Indicator Dots (like reference image) */}
              <div
                aria-hidden="true"
                className="flex items-center justify-center gap-2 pt-2 opacity-50"
              >
                {Array.from({ length: Math.min(5, Math.max(members.length, 3)) }).map(
                  (_, dotIdx) => (
                    <span
                      key={dotIdx}
                      className={`h-2 rounded-full transition-all ${
                        dotIdx === 0
                          ? "w-6 bg-[#ed8b36]"
                          : "w-2 bg-[#d4ad54]/50"
                      }`}
                    />
                  )
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
