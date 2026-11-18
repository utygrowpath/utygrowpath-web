"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import gsap from "gsap";

import { Lightbox } from "@/components/sections/lightbox";
import { DEFAULT_SEASON, isSeasonId } from "@/data/dokumentasi";
import type { DocumentationItem, DocumentationSeason } from "@/types/content";

type SeasonTab = { id: DocumentationSeason; label: string; year: number };

type GalleryGridProps = {
  seasons: readonly SeasonTab[];
  itemsBySeason: Record<DocumentationSeason, DocumentationItem[]>;
};

/**
 * Nilai awal dibaca lewat `useSearchParams()`, sehingga komponen ini WAJIB
 * dibungkus `<Suspense>` oleh halaman pemakainya: dengan `cacheComponents: true`
 * halaman statis tidak boleh membaca data request di server (prerender gagal),
 * dan membaca searchParams di client tanpa Suspense juga dilarang.
 */
function useInitialState(
  seasons: readonly SeasonTab[],
  itemsBySeason: GalleryGridProps["itemsBySeason"],
) {
  const params = useSearchParams();
  const seasonParam = params.get("season");
  const itemParam = params.get("item");

  // Season dari item yang di-share, bila parameter season tidak dipakai/bukan id valid.
  const seasonOfItem = itemParam
    ? seasons.find((season) =>
        (itemsBySeason[season.id] ?? []).some((item) => item.slug === itemParam),
      )?.id
    : undefined;

  const season = isSeasonId(seasonParam)
    ? seasonParam
    : (seasonOfItem ?? DEFAULT_SEASON);

  const openIndex = itemParam
    ? (itemsBySeason[season] ?? []).findIndex((item) => item.slug === itemParam)
    : -1;

  return { season, openIndex: openIndex === -1 ? null : openIndex };
}

/** Sumber gambar thumbnail untuk tiap tipe media. */
function thumbnailOf(item: DocumentationItem): string | null {
  if (item.kind === "photo") return item.src ?? null;
  if (item.youtubeId) return `https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`;
  return item.poster ?? item.src ?? null;
}

export function GalleryGrid({ seasons, itemsBySeason }: GalleryGridProps) {
  const pathname = usePathname();

  const initial = useInitialState(seasons, itemsBySeason);

  const [activeSeason, setActiveSeason] = useState(initial.season);
  const [openIndex, setOpenIndex] = useState<number | null>(initial.openIndex);

  // Pakai useMemo: tanpa ini `items` menjadi array baru tiap render dan
  // membuat effect sinkronisasi URL terus berulang.
  const items = useMemo(
    () => itemsBySeason[activeSeason] ?? [],
    [itemsBySeason, activeSeason],
  );

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);

  // Season baru = index lightbox lama tidak berlaku lagi.
  function selectSeason(season: DocumentationSeason) {
    if (season === activeSeason) return;
    setActiveSeason(season);
    setOpenIndex(null);
  }

  function onTabKeyDown(event: React.KeyboardEvent, position: number) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const step = event.key === "ArrowRight" ? 1 : -1;
    const next = (position + step + seasons.length) % seasons.length;
    selectSeason(seasons[next].id);
    tabRefs.current[next]?.focus();
  }

  /**
   * Nilai awal saat pertama kali dirender. Dipakai untuk memutuskan kapan URL
   * perlu ditulis, dan sengaja disimpan di ref supaya tidak berubah ketika
   * `useSearchParams()` ikut ter-update oleh `replaceState` kita sendiri.
   */
  const initialRef = useRef(initial);

  // Ditulis sekali user benar-benar mengubah state; kunjungan polos tanpa
  // parameter tidak boleh mengotori URL.
  const urlWritten = useRef(false);
  useEffect(() => {
    const changed =
      activeSeason !== initialRef.current.season ||
      openIndex !== initialRef.current.openIndex;
    if (!changed && !urlWritten.current) return;
    urlWritten.current = true;

    const query = new URLSearchParams();
    query.set("season", activeSeason);
    const openItem = openIndex === null ? undefined : items[openIndex];
    if (openItem) query.set("item", openItem.slug);

    // Pakai history.replaceState, BUKAN router.replace: yang terakhir memicu
    // render ulang server, yang membuat objek `itemsBySeason` baru, `items`
    // berubah, efek ini jalan lagi → loop request tanpa henti (terlihat di log
    // dev sebagai ratusan GET /dokumentasi).
    // replaceState mengupdate URL tanpa request dan tetap disinkronkan Next
    // ke useSearchParams/usePathname — lihat docs "Native History API".
    window.history.replaceState(null, "", `${pathname}?${query.toString()}`);
  }, [activeSeason, openIndex, items, pathname]);

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cards = panelRef.current?.querySelectorAll<HTMLElement>("[data-reveal-item]");
    if (!cards?.length) return;

    const ctx = gsap.context(() => {
      gsap.from(cards, {
        opacity: 0,
        y: 16,
        duration: 0.4,
        ease: "power3.out",
        stagger: 0.05,
        overwrite: "auto",
      });
    }, panelRef);

    return () => ctx.revert();
  }, [activeSeason]);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Pilih season"
        className="flex flex-wrap items-center gap-2"
      >
        {seasons.map((season, position) => {
          const isActive = season.id === activeSeason;
          return (
            <button
              key={season.id}
              ref={(element) => {
                tabRefs.current[position] = element;
              }}
              type="button"
              role="tab"
              id={`tab-${season.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${season.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => selectSeason(season.id)}
              onKeyDown={(event) => onTabKeyDown(event, position)}
              className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b527d] ${
                isActive
                  ? "border-[#2b527d] bg-[#2b527d] text-white"
                  : "border-[#e9dfca] bg-white text-[#4e5660] hover:border-[#2b527d]/40 hover:text-[#2b527d]"
              }`}
            >
              {season.label}
              <span
                className={`text-[13px] font-normal tabular-nums ${
                  isActive ? "text-white/80" : "text-[#625b54]"
                }`}
              >
                {season.year}
              </span>
            </button>
          );
        })}
      </div>

      <div
        ref={panelRef}
        role="tabpanel"
        id={`panel-${activeSeason}`}
        aria-labelledby={`tab-${activeSeason}`}
        className="mt-10"
      >
        {items.length === 0 ? (
          <div
            data-reveal-item="up"
            className="rounded-2xl bg-white px-6 py-16 text-center"
          >
            <p className="text-lg font-semibold">
              Dokumentasi {seasons.find((s) => s.id === activeSeason)?.label} belum
              tersedia
            </p>
            <p className="mx-auto mt-2 max-w-md text-[15px] leading-7 text-[#625b54]">
              Foto dan video dari season ini belum diunggah. Sementara itu, kamu
              bisa melihat dokumentasi dari season lain.
            </p>
          </div>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <li key={item.slug}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  aria-label={`Buka ${item.title}`}
                  className="group block h-full w-full overflow-hidden rounded-2xl border border-[#e9dfca] bg-[#fffdf8] text-left transition-colors hover:border-[#2b527d]/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b527d]"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-[#f6ebd5]">
                    {thumbnailOf(item) ? (
                      <Image
                        src={thumbnailOf(item)!}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : null}
                    {item.kind === "video" ? (
                      <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#30302f] px-3 py-1 text-[13px] font-semibold text-white">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Video
                      </span>
                    ) : null}
                  </div>
                  <div className="p-5">
                    <p className="text-[15px] font-semibold">{item.title}</p>
                    {item.caption ? (
                      <p className="mt-1 text-sm leading-6 text-[#625b54]">
                        {item.caption}
                      </p>
                    ) : null}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {openIndex !== null && items[openIndex] ? (
        <Lightbox
          items={items}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      ) : null}
    </div>
  );
}
