"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { InspirationPost } from "@/types/content";
import { formatDate } from "@/lib/format-date";

interface SudutInspirasiListViewProps {
  posts: InspirationPost[];
}

export function SudutInspirasiListView({ posts }: SudutInspirasiListViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;

  const categories = [
    "Semua",
    ...Array.from(new Set(posts.map((p) => p.category).filter(Boolean) as string[])),
  ];

  const filteredPosts =
    selectedCategory === "Semua"
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
      {/* Category Filter Pills */}
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

      {/* Stories List */}
      <div className="space-y-8">
        {paginatedPosts.map((post) => (
          <article
            key={post.slug}
            data-reveal-on-view
            className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-[#eadbbd] bg-white p-6 shadow-[0_16px_40px_-24px_rgba(77,55,28,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4ad54] hover:shadow-[0_22px_45px_-20px_rgba(77,55,28,0.4)] md:flex-row md:items-center md:p-8"
          >
            {/* Story Thumbnail Poster */}
            <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl border border-[#eadbbd] bg-[#f8e9c9]/30 md:w-64 lg:w-72">
              <Image
                src={post.image || "/images/2026/season4/dokumentasi/docum1.png"}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                alt={post.title}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {post.category && (
                <div className="absolute left-3 top-3">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-[#8d493a] shadow-xs backdrop-blur-xs">
                    {post.category}
                  </span>
                </div>
              )}
            </div>

            {/* Story Details */}
            <div className="min-w-0 flex-1 space-y-3">
              <h2 className="text-xl font-bold leading-snug tracking-tight text-[#2b4869] transition-colors group-hover:text-[#8d493a] sm:text-2xl">
                <Link href={`/sudut-inspirasi/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              {/* Author & Date metadata */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#797169] sm:text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 text-[#ed8b36]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  By {post.author}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 text-[#ed8b36]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {formatDate(post.date)}
                </span>
              </div>

              <p className="line-clamp-3 text-justify text-sm leading-relaxed text-[#625b54] sm:text-base sm:leading-7">
                {post.excerpt}
              </p>

              <div className="pt-2">
                <Link
                  href={`/sudut-inspirasi/${post.slug}`}
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
            <p className="text-base font-medium">Belum ada cerita inspirasi di kategori ini.</p>
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
