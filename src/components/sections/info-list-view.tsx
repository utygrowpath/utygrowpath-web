"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { InfoPost } from "@/types/content";
import { formatDate } from "@/lib/format-date";

interface InfoListViewProps {
  posts: InfoPost[];
}

export function InfoListView({ posts }: InfoListViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;

  const categories = ["Semua", ...Array.from(new Set(posts.map((p) => p.category).filter(Boolean) as string[]))];

  const filteredPosts = selectedCategory === "Semua"
    ? posts
    : posts.filter((p) => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all sm:text-sm ${
                isActive
                  ? "bg-[#2b4869] text-white shadow-md shadow-[#2b4869]/20"
                  : "border border-[#eadbbd] bg-white text-[#625b54] hover:border-[#2b4869]/40 hover:bg-[#fff9f0]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Announcements List */}
      <div className="space-y-6">
        {paginatedPosts.map((post) => (
          <article
            key={post.slug}
            data-reveal-on-view
            className="group relative flex flex-col gap-6 rounded-2xl border border-[#eadbbd] bg-white p-6 shadow-[0_16px_40px_-24px_rgba(77,55,28,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4ad54] hover:shadow-[0_22px_45px_-20px_rgba(77,55,28,0.4)] sm:flex-row sm:items-center sm:p-8"
          >
            {/* Left Circular Badge Logo */}
            <div className="flex shrink-0 items-center justify-center self-start sm:self-center">
              <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-[#eadbbd] bg-gradient-to-br from-[#fffdf8] to-[#fff5df] p-3 shadow-inner sm:h-28 sm:w-28 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={post.image || "/images/2026/season4/logo/gowpaths4.png"}
                  width={140}
                  height={140}
                  alt="Logo emblem"
                  className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                />
              </div>
            </div>

            {/* Right Information Content */}
            <div className="min-w-0 flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#8a8580]">
                {post.category && (
                  <span className="rounded-full bg-[#f7cb4d]/30 px-3 py-0.5 font-semibold text-[#795f1c]">
                    {post.category}
                  </span>
                )}
                <span>{formatDate(post.date)}</span>
              </div>

              <h2 className="text-xl font-bold leading-snug tracking-tight text-[#2b4869] transition-colors group-hover:text-[#8d493a] sm:text-2xl">
                <Link href={`/info/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              <p className="line-clamp-3 text-justify text-sm leading-relaxed text-[#625b54] sm:text-base sm:leading-7">
                {post.excerpt}
              </p>

              <div className="pt-2">
                <Link
                  href={`/info/${post.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#2b4869] px-5 py-2.5 text-xs font-semibold tracking-wide text-white shadow-xs transition-all hover:bg-[#1e344c] hover:shadow-md hover:shadow-[#2b4869]/25 sm:text-sm"
                >
                  Read More
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}

        {filteredPosts.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[#eadbbd] bg-white p-12 text-center text-[#625b54]">
            <p className="text-base font-medium">Belum ada pengumuman untuk kategori ini.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => {
                setCurrentPage(page);
                window.scrollTo({ top: 400, behavior: "smooth" });
              }}
              className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold transition-all ${
                currentPage === page
                  ? "bg-[#2b4869] text-white shadow-md shadow-[#2b4869]/30"
                  : "border border-[#eadbbd] bg-white text-[#625b54] hover:bg-[#fff5df]"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
