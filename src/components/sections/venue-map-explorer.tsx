"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  VENUE_MAP_HEIGHT,
  VENUE_MAP_WIDTH,
  venueSpots,
  type VenueSpot,
  type VenueZoneCategory,
} from "@/data/venue-map";

const CATEGORY_FILTERS: { id: VenueZoneCategory | "all"; label: string }[] = [
  { id: "all", label: "Semua" },
  { id: "tenant", label: "Tenant" },
  { id: "stage", label: "Stage & Audience" },
  { id: "sponsor", label: "Sponsor" },
  { id: "internal", label: "Internal" },
  { id: "facility", label: "Workshop & Foto" },
];

const ACCENT_COLORS: Record<VenueZoneCategory, string> = {
  tenant: "#7c5295",
  sponsor: "#4a89c8",
  internal: "#e5a93b",
  stage: "#e13b43",
  facility: "#ea7b2c",
  gate: "#4a89c8",
};

const COLOUR_KEY_ITEMS: {
  color: string;
  label: string;
  desc: string;
  detail: string;
  category: VenueZoneCategory;
}[] = [
  {
    color: "#7c5295",
    label: "Tenant",
    desc: "Titik pameran & bisnis mahasiswa",
    detail:
      "Area utama pameran karya, produk inovatif, kuliner, dan startup mahasiswa UTY Growpath Expo Season 4 yang tersebar di 104 titik.",
    category: "tenant",
  },
  {
    color: "#e13b43",
    label: "Main Stage & Audience",
    desc: "Panggung utama, lomba & penonton",
    detail:
      "Pusat aktivitas utama acara meliputi panggung pentas seni, final kompetisi, talkshow, area penonton serta area backstage.",
    category: "stage",
  },
  {
    color: "#4a89c8",
    label: "Sponsor & Gate",
    desc: "Stand mitra sponsor & pintu masuk",
    detail:
      "Area booth mitra sponsor acara serta titik akses pintu masuk (arah timur) dan keluar pengunjung (arah barat).",
    category: "sponsor",
  },
  {
    color: "#e5a93b",
    label: "Zona Internal",
    desc: "Area panitia & operasional",
    detail:
      "Area khusus panitia pelaksana, koordinasi operasional acara, dan tempat penyimpanan logistik selama Expo berlangsung.",
    category: "internal",
  },
  {
    color: "#ea7b2c",
    label: "Workshop & Foto",
    desc: "Area workshop, regist & photobooth",
    detail:
      "Fasilitas pendukung pengunjung mencakup ruang Workshop interaktif, meja Registrasi/Check-in, Photobooth, dan Photo Box.",
    category: "facility",
  },
];

// Helper untuk Pin 3D SVG di atas landmark penting
function MapPin({
  x,
  y,
  color,
  icon,
}: {
  x: number;
  y: number;
  color: string;
  icon: "mic" | "bulb" | "camera" | "ticket";
}) {
  return (
    <g transform={`translate(${x}, ${y})`} className="pointer-events-none">
      <ellipse cx="0" cy="2" rx="6" ry="2.2" fill="rgba(0,0,0,0.18)" />
      <path
        d="M0 0 C-7 -9 -10 -15 -10 -20 A10 10 0 1 1 10 -20 C10 -15 7 -9 0 0 Z"
        fill={color}
        stroke="#ffffff"
        strokeWidth="1.5"
      />
      <circle cx="0" cy="-20" r="6.5" fill="#ffffff" />
      {icon === "mic" && (
        <path
          d="M0 -23.5 a1.5 1.5 0 0 1 1.5 1.5 v2.5 a1.5 1.5 0 0 1 -3 0 v-2.5 a1.5 1.5 0 0 1 1.5 -1.5 z M-2.5 -19.5 a2.5 2.5 0 0 0 5 0 M0 -17 v1.5"
          fill="none"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      )}
      {icon === "bulb" && (
        <path
          d="M0 -23.5 a2.5 2.5 0 0 1 1.5 4.5 v1 h-3 v-1 a2.5 2.5 0 0 1 1.5 -4.5 z M-1.2 -16.8 h2.4"
          fill="none"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      )}
      {icon === "camera" && (
        <g fill="none" stroke={color} strokeWidth="1.2">
          <rect x="-3" y="-22" width="6" height="4.2" rx="1" />
          <circle cx="0" cy="-19.9" r="1.1" />
        </g>
      )}
      {icon === "ticket" && (
        <path
          d="M-3 -21.5 h6 v3 h-6 z M-1 -20 h2"
          fill="none"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      )}
    </g>
  );
}

export function VenueMapExplorer() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Transform states (mulai langsung dari overview 1x tanpa auto zoom-in)
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // UI States
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<VenueZoneCategory | "all">("all");
  const [selectedSpotId, setSelectedSpotId] = useState<string | null>(null);
  const [isFabOpen, setIsFabOpen] = useState(false);
  const [selectedKeyItem, setSelectedKeyItem] = useState<
    (typeof COLOUR_KEY_ITEMS)[number] | null
  >(null);

  // Gesture refs
  const pointersRef = useRef<Map<number, { x: number; y: number }>>(new Map());
  const dragStartRef = useRef<{ x: number; y: number; tx: number; ty: number } | null>(null);
  const pinchStartRef = useRef<{ dist: number; scale: number } | null>(null);
  const didDragRef = useRef(false);

  const clampScale = (val: number) => Math.min(Math.max(val, 0.8), 6);

  const zoomFromCenter = useCallback(
    (delta: number) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      const nextScale = clampScale(scale + delta);
      const ratio = nextScale / scale;
      setScale(nextScale);
      setTranslate({
        x: cx - (cx - translate.x) * ratio,
        y: cy - (cy - translate.y) * ratio,
      });
    },
    [scale, translate]
  );

  const focusToCoordinate = useCallback(
    (targetX: number, targetY: number, targetScale = 2.4) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const baseScale = Math.min(rect.width / VENUE_MAP_WIDTH, rect.height / VENUE_MAP_HEIGHT);
      const offsetX = (rect.width - VENUE_MAP_WIDTH * baseScale) / 2;
      const offsetY = (rect.height - VENUE_MAP_HEIGHT * baseScale) / 2;

      const pxX = offsetX + targetX * baseScale;
      const pxY = offsetY + targetY * baseScale;

      setScale(targetScale);
      setTranslate({
        x: rect.width / 2 - pxX * targetScale,
        y: rect.height / 2 - pxY * targetScale,
      });
    },
    []
  );

  const flyToSpot = useCallback(
    (spot: VenueSpot, customScale = 2.6) => {
      focusToCoordinate(spot.x + spot.w / 2, spot.y + spot.h / 2, customScale);
    },
    [focusToCoordinate]
  );

  const resetToOverview = useCallback(() => {
    setSelectedSpotId(null);
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }, []);

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return venueSpots
      .filter(
        (s) =>
          s.label.toLowerCase().includes(q) ||
          s.title.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [searchQuery]);

  const selectedSpot = useMemo(() => {
    return venueSpots.find((s) => s.id === selectedSpotId) || null;
  }, [selectedSpotId]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    didDragRef.current = false;

    if (pointersRef.current.size === 1) {
      setIsDragging(true);
      dragStartRef.current = {
        x: e.clientX,
        y: e.clientY,
        tx: translate.x,
        ty: translate.y,
      };
    } else if (pointersRef.current.size === 2) {
      const pts = Array.from(pointersRef.current.values());
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      pinchStartRef.current = { dist, scale };
      dragStartRef.current = null;
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pointersRef.current.has(e.pointerId)) return;
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointersRef.current.size === 2 && pinchStartRef.current) {
      const pts = Array.from(pointersRef.current.values());
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      const ratio = dist / pinchStartRef.current.dist;
      setScale(clampScale(pinchStartRef.current.scale * ratio));
      didDragRef.current = true;
    } else if (pointersRef.current.size === 1 && dragStartRef.current) {
      const dx = e.clientX - dragStartRef.current.x;
      const dy = e.clientY - dragStartRef.current.y;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
        didDragRef.current = true;
      }
      setTranslate({
        x: dragStartRef.current.tx + dx,
        y: dragStartRef.current.ty + dy,
      });
    }
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    pointersRef.current.delete(e.pointerId);
    if (pointersRef.current.size < 2) {
      pinchStartRef.current = null;
    }
    if (pointersRef.current.size === 0) {
      setIsDragging(false);
      dragStartRef.current = null;
    }
  };

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const delta = e.deltaY < 0 ? 0.25 : -0.25;
    setScale((prev) => clampScale(prev + delta));
  };

  const handleSpotTap = (spot: VenueSpot) => {
    if (didDragRef.current) return;
    setSelectedSpotId(spot.id);
    flyToSpot(spot);
    setIsSearchOpen(false);
  };

  const selectSearchResult = (spot: VenueSpot) => {
    setSelectedSpotId(spot.id);
    flyToSpot(spot);
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#faf4ea]">
      {/* ================= TOP 50%: SEARCH BAR + INTERACTIVE MAP ================= */}
      <div className="relative h-1/2 w-full overflow-hidden select-none touch-none">
        {/* Background tekstur halus */}
        <div className="pointer-events-none absolute inset-0 opacity-45 bg-[radial-gradient(#d3c5b2_1.5px,transparent_1.5px)] [background-size:22px_22px]" />

        {/* Floating Search Bar */}
        <div className="absolute left-3 right-3 top-3 z-30 flex flex-col items-center gap-1.5 sm:left-6 sm:top-4 sm:max-w-md">
          <div className="flex w-full items-center gap-2 rounded-2xl border border-[#eadbbd] bg-white/95 px-3 py-1.5 shadow-md backdrop-blur-md">
            <Link
              href="/peserta"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#fdf6ea] text-[#6f5630] transition hover:bg-[#ebdcc4]"
              title="Kembali ke Dashboard"
              aria-label="Kembali"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </Link>

            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setIsSearchOpen(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                placeholder="Cari area yang ingin dituju. . ."
                className="w-full bg-transparent text-sm font-semibold text-[#30302f] placeholder:text-[#9b958e] focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setIsSearchOpen(false);
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-bold text-[#8a8580] hover:text-[#30302f]"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Search Results Dropdown */}
          {isSearchOpen && searchResults.length > 0 && (
            <div className="w-full rounded-2xl border border-[#eadbbd] bg-white p-2 shadow-2xl backdrop-blur-md">
              <div className="max-h-44 space-y-1 overflow-y-auto">
                {searchResults.map((spot) => (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => selectSearchResult(spot)}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition hover:bg-[#fbf4ea]"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ backgroundColor: spot.color || ACCENT_COLORS[spot.category] }}
                      />
                      <div>
                        <p className="font-bold text-[#2b4869]">{spot.title}</p>
                        <p className="line-clamp-1 text-[11px] text-[#7a746d]">{spot.description}</p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-md bg-[#f4ebe0] px-2 py-0.5 text-[10px] font-bold text-[#8d493a]">
                      Lihat
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* SVG Vector Map Canvas */}
        <div
          ref={containerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onWheel={onWheel}
          className={`h-full w-full pt-12 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        >
          <div
            style={{
              transform: `translate3d(${translate.x}px, ${translate.y}px, 0) scale(${scale})`,
              transformOrigin: "0 0",
              transition: isDragging ? "none" : "transform 260ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className="flex h-full w-full items-center justify-center will-change-transform"
          >
            <svg
              viewBox={`0 0 ${VENUE_MAP_WIDTH} ${VENUE_MAP_HEIGHT}`}
              className="h-full w-full max-h-full max-w-full drop-shadow-lg"
              role="img"
              aria-label="Denah Interaktif UTY Growpath Expo Season 4"
            >
              <defs>
                <pattern id="hallDots" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="0.8" fill="#eadcc5" />
                </pattern>
                <linearGradient id="stageBeam" x1="1" y1="0.5" x2="0" y2="0.5">
                  <stop offset="0%" stopColor="#fde047" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Outer Venue Hall Wall */}
              <rect
                x="8"
                y="14"
                width={VENUE_MAP_WIDTH - 16}
                height={VENUE_MAP_HEIGHT - 64}
                rx="10"
                fill="#e2d4be"
              />
              <rect
                x="8"
                y="10"
                width={VENUE_MAP_WIDTH - 16}
                height={VENUE_MAP_HEIGHT - 64}
                rx="10"
                fill="#fffdf8"
                stroke="#2b2927"
                strokeWidth="4.5"
              />
              <rect
                x="14"
                y="16"
                width={VENUE_MAP_WIDTH - 28}
                height={VENUE_MAP_HEIGHT - 76}
                rx="6"
                fill="url(#hallDots)"
                stroke="#efe2cc"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />

              {/* Dotted Pedestrian Footpath */}
              <path
                d="M 52 440 L 52 405 L 445 405 L 445 219 L 470 219 M 52 219 L 445 219 M 445 219 L 445 140 L 659 140 L 659 25"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2"
                strokeDasharray="4 4"
                strokeLinecap="round"
                opacity="0.55"
                className="pointer-events-none"
              />

              {/* Stage Lighting Beams */}
              <polygon
                points="690,185 520,165 520,275 690,255"
                fill="url(#stageBeam)"
                className="pointer-events-none"
              />

              {/* All Interactive Venue Spots */}
              {venueSpots.map((spot) => {
                const isSelected = selectedSpotId === spot.id;
                const isDimmed = activeCategory !== "all" && spot.category !== activeCategory;
                const accentColor = spot.color || ACCENT_COLORS[spot.category];

                return (
                  <g
                    key={spot.id}
                    onClick={() => handleSpotTap(spot)}
                    className="cursor-pointer transition-opacity duration-200"
                    style={{ opacity: isDimmed ? 0.2 : 1 }}
                  >
                    <rect
                      x={spot.x}
                      y={spot.y + 2}
                      width={spot.w}
                      height={spot.h}
                      rx="3"
                      fill="rgba(43, 41, 39, 0.14)"
                    />

                    {isSelected && (
                      <rect
                        x={spot.x - 3.5}
                        y={spot.y - 3.5}
                        width={spot.w + 7}
                        height={spot.h + 7}
                        rx="5"
                        fill="none"
                        stroke="#d98a1c"
                        strokeWidth="2.5"
                        className="animate-pulse"
                      />
                    )}

                    <rect
                      x={spot.x}
                      y={spot.y}
                      width={spot.w}
                      height={spot.h}
                      fill={spot.accentSide === "full" ? accentColor : "#ffffff"}
                      stroke={isSelected ? "#d98a1c" : "#3b3834"}
                      strokeWidth={isSelected ? 2 : 0.9}
                      strokeDasharray={spot.id === "backstage" ? "3 2" : undefined}
                      rx="3"
                    />

                    {spot.accentSide === "top" && (
                      <rect
                        x={spot.x}
                        y={spot.y}
                        width={spot.w}
                        height={spot.h * 0.42}
                        rx="2"
                        fill={accentColor}
                      />
                    )}
                    {spot.accentSide === "bottom" && (
                      <rect
                        x={spot.x}
                        y={spot.y + spot.h * 0.58}
                        width={spot.w}
                        height={spot.h * 0.42}
                        rx="2"
                        fill={accentColor}
                      />
                    )}
                    {spot.accentSide === "right" && (
                      <rect
                        x={spot.x + spot.w * 0.52}
                        y={spot.y}
                        width={spot.w * 0.48}
                        height={spot.h}
                        rx="2"
                        fill={accentColor}
                      />
                    )}

                    <text
                      x={
                        spot.accentSide === "right"
                          ? spot.x + spot.w * 0.76
                          : spot.x + spot.w / 2
                      }
                      y={
                        spot.accentSide === "top"
                          ? spot.y + spot.h * 0.26
                          : spot.accentSide === "bottom"
                          ? spot.y + spot.h * 0.82
                          : spot.y + spot.h / 2 + 3
                      }
                      textAnchor="middle"
                      fill={
                        spot.id === "backstage"
                          ? "#30302f"
                          : spot.accentSide === "full" ||
                            spot.accentSide === "top" ||
                            spot.accentSide === "bottom" ||
                            spot.accentSide === "right"
                          ? "#ffffff"
                          : "#30302f"
                      }
                      fontSize={
                        spot.id === "zona-audience"
                          ? "12"
                          : spot.label.length > 5
                          ? "6.5"
                          : "7.5"
                      }
                      fontWeight="700"
                      className="pointer-events-none select-none"
                    >
                      {spot.label}
                    </text>
                  </g>
                );
              })}

              {/* Floating 3D-Style SVG Pins for Key Landmarks */}
              <MapPin x={712} y={175} color="#e13b43" icon="mic" />
              <MapPin x={42} y={160} color="#ea7b2c" icon="bulb" />
              <MapPin x={28} y={452} color="#16a34a" icon="ticket" />
              <MapPin x={102} y={452} color="#2d2d2c" icon="camera" />
              <MapPin x={734} y={38} color="#16a34a" icon="camera" />
            </svg>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM 50%: FILTER + COLOUR KEY + DETAIL + FAB ================= */}
      <div
        className="hide-scrollbar relative flex h-1/2 w-full flex-col gap-3 overflow-y-auto rounded-t-3xl border-t-2 border-[#eadbbd] bg-white p-4 pb-20 shadow-[0_-6px_24px_rgba(0,0,0,0.06)] sm:px-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Selected Spot Detail Card (jika ada booth yang diklik) */}
        {selectedSpot && (
          <div className="rounded-2xl border border-[#d98a1c]/50 bg-[#fff9ec] p-3.5 shadow-xs">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-3 w-3 shrink-0 rounded-full"
                  style={{
                    backgroundColor: selectedSpot.color || ACCENT_COLORS[selectedSpot.category],
                  }}
                />
                <span className="text-sm font-extrabold text-[#2b4869]">
                  {selectedSpot.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSpotId(null)}
                className="rounded-full p-1 text-xs font-bold text-[#8a8580] hover:bg-[#f5ede0]"
                aria-label="Tutup detail"
              >
                ✕
              </button>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-[#59524a]">
              {selectedSpot.description}
            </p>
            <div className="mt-2.5 flex items-center justify-between border-t border-[#f1e5d2] pt-2">
              <span className="rounded-md bg-[#f6eee2] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#795d36]">
                {selectedSpot.category}
              </span>
            </div>
          </div>
        )}

        {/* Filter Area */}
        <div>
          <p className="mb-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#8d493a]">
            Filter Area
          </p>
          <div
            className="hide-scrollbar flex items-center gap-1.5 overflow-x-auto pb-0.5"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
            {CATEGORY_FILTERS.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold transition ${
                    active
                      ? "bg-[#2b4869] text-white shadow-xs"
                      : "bg-[#f8f1e4] text-[#6f5630] hover:bg-[#efe3cd]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Kategori / Colour Key (Legenda Warna) */}
        <div>
          <p className="mb-2 text-[11px] font-extrabold uppercase tracking-wider text-[#8d493a]">
            Penjelasan Warna
          </p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {COLOUR_KEY_ITEMS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setSelectedKeyItem(item)}
                className="flex items-center justify-between gap-2.5 rounded-xl border border-[#f0e5d1] bg-[#fffdfa] p-2.5 text-left transition hover:border-[#d98a1c]/60 hover:bg-[#fdf6ea]"
              >
                <div className="flex min-w-0 items-center gap-2.5">
                  <span
                    className="h-4 w-4 shrink-0 rounded-md shadow-xs"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold text-[#2b4869]">{item.label}</p>
                    <p className="truncate text-[11px] text-[#7a746d]">{item.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================= FLOATING ACTION BUTTON (+) DI KANAN BAWAH ================= */}
      <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
        {isFabOpen && (
          <div className="flex flex-col items-center gap-2 rounded-full border border-[#eadbbd] bg-white/95 p-1.5 shadow-xl backdrop-blur-md">
            <button
              type="button"
              onClick={() => zoomFromCenter(0.6)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-base font-bold text-[#2b4869] transition hover:bg-[#f6eee2]"
              title="Perbesar"
              aria-label="Zoom In"
            >
              +
            </button>
            <button
              type="button"
              onClick={() => zoomFromCenter(-0.6)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-base font-bold text-[#2b4869] transition hover:bg-[#f6eee2]"
              title="Perkecil"
              aria-label="Zoom Out"
            >
              −
            </button>
            <div className="h-px w-6 bg-[#eadbbd]" />
            <button
              type="button"
              onClick={resetToOverview}
              className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-[#8d493a] transition hover:bg-[#f6eee2]"
              title="Reset Tampilan Peta"
              aria-label="Reset View"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v3m0 14v3m10-10h-3M5 12H2" />
              </svg>
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsFabOpen((prev) => !prev)}
          className={`flex h-13 w-13 items-center justify-center rounded-full border-2 border-white bg-[#2b4869] text-white shadow-2xl transition duration-200 active:scale-95 ${
            isFabOpen ? "rotate-45" : ""
          }`}
          aria-label="Menu Peta"
          title="Menu Interaksi Peta"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* ================= POP-UP CARD COLOUR KEY ================= */}
      {selectedKeyItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs"
          onClick={() => setSelectedKeyItem(null)}
        >
          <div
            className="w-full max-w-sm rounded-3xl border border-[#eadbbd] bg-white p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span
                  className="h-5 w-5 shrink-0 rounded-lg shadow-xs"
                  style={{ backgroundColor: selectedKeyItem.color }}
                />
                <div>
                  <h3 className="text-base font-extrabold text-[#2b4869]">
                    {selectedKeyItem.label}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedKeyItem(null)}
                className="rounded-full p-1 text-xs font-bold text-[#8a8580] hover:bg-[#f5ede0]"
                aria-label="Tutup pop-up"
              >
                ✕
              </button>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-[#59524a]">
              {selectedKeyItem.detail}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
