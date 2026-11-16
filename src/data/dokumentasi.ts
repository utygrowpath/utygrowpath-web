import type { DocumentationItem, DocumentationSeason } from "@/types/content";

/** Daftar season ditampilkan urut; tab terakhir = season berjalan. */
export const SEASONS = [
  { id: "season-1", label: "Season 1", year: 2023 },
  { id: "season-2", label: "Season 2", year: 2024 },
  { id: "season-3", label: "Season 3", year: 2025 },
  { id: "season-4", label: "Season 4", year: 2026 },
] as const satisfies readonly {
  id: DocumentationSeason;
  label: string;
  year: number;
}[];

/** Season yang ditampilkan sebagai default bila URL tidak menentukan. */
export const DEFAULT_SEASON: DocumentationSeason = "season-4";

/**
 * Galeri dokumentasi.
 *
 * TODO(handover): foto yang tersedia sekarang kecil (docum1 457px, docum2 373px)
 * sehingga terlihat lembut di lightbox. Saat foto 1600px tersedia, taruh di
 * `public/media/season-4/` dan isi `fullSrc` — tidak ada kode yang perlu diubah.
 *
 * Contoh entri video (jangan disimpan dengan `youtubeId` kosong — thumbnailnya
 * mati, dan halaman akan menampilkan kotak rusak):
 *   {
 *     slug: "aftermovie-season-4",
 *     title: "Aftermovie Season 4",
 *     kind: "video",
 *     youtubeId: "Sk9J2lx1CS",
 *     alt: "Video rangkuman kegiatan UTY Growpath Expo Season 4",
 *     season: "season-4",
 *     caption: "Rangkuman dua hari pameran dan lomba.",
 *   }
 */
export const documentationItems: DocumentationItem[] = [
  {
    slug: "suasana-pengunjung",
    title: "Suasana pengunjung",
    kind: "photo",
    src: "/images/2026/season4/dokumentasi/docum1.jpg",
    alt: "Pengunjung berinteraksi dengan tenant dan produk di UTY Growpath Expo",
    season: "season-4",
    caption: "Hari pertama pameran tenant.",
  },
  {
    slug: "kunjungan-stand",
    title: "Kunjungan ke stan tenant",
    kind: "photo",
    src: "/images/2026/season4/dokumentasi/docum2.jpg",
    alt: "Panitia dan tamu mengunjungi stan tenant UTY Growpath Expo",
    season: "season-4",
    caption: "Tinjauan stan mahasiswa kewirausahaan.",
  },
];

export function getItemsBySeason(season: DocumentationSeason): DocumentationItem[] {
  return documentationItems.filter((item) => item.season === season);
}

export function isSeasonId(
  value: string | null | undefined,
): value is DocumentationSeason {
  return SEASONS.some((season) => season.id === value);
}
