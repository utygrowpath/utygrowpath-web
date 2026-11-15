/**
 * Tipe konten bersama.
 *
 * Konten disimpan sebagai data TypeScript di `src/data/` (bukan CMS).
 * Semua bentuk data WAJIB punya tipe di sini agar perubahan bentuk data
 * langsung terdeteksi oleh TypeScript saat `npm run typecheck`.
 */

export type Tenant = {
  slug: string;
  name: string;
  category: string;
  description: string;
  /** Path gambar di /public, contoh: "/images/2026/tenant/kopi-rakyat.jpg" */
  image?: string;
  instagram?: string;
};

export type InspirationPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  /** Format ISO: "2026-08-17" */
  date: string;
  /** Satu elemen = satu paragraf. */
  body: string[];
  category?: string;
  image?: string;
  /** Gambar produk/detail khusus untuk halaman isi artikel */
  productImage?: string;
  /** Daftar gambar produk jika ada lebih dari satu (layout kanan-kiri) */
  productImages?: string[];
  /** Sub-section atau bullet list opsional */
  subsections?: {
    heading: string;
    content?: string;
    list?: string[];
  }[];
};

export type InfoPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** Format ISO: "2026-08-17" */
  date: string;
  body: string[];
  category?: string;
  image?: string;
  link?: string;
};

export type CommitteeMember = {
  name: string;
  role: string;
  division: string;
  /** true untuk pengurus inti (ditampilkan di halaman Tim Kami). */
  isCore?: boolean;
  image?: string;
  instagram?: string;
  linkedin?: string;
};

export type Pendaftaran = {
  /** Paragraf pembuka. Elemen pertama ditampilkan sebagai lead. */
  intro: string[];
  categories: string[];
  requirements: string[];
  /** `date` berupa teks tampilan (boleh berupa rentang, mis. "12 – 13 Desember 2024"). */
  timeline: { date: string; label: string }[];
  /** Harga tiket masuk tenant, contoh: "50k/day". */
  htm: string;
};

export type DocumentationSeason =
  | "season-1"
  | "season-2"
  | "season-3"
  | "season-4";

export type DocumentationItem = {
  /**
   * Kunci stabil: dipakai sebagai React key, nilai `?item=` di URL, dan nama
   * berkas. Huruf kecil, tanpa spasi. Jangan diubah setelah tayang.
   */
  slug: string;
  title: string;
  kind: "photo" | "video";
  /** Foto: path di /public. Video: thumbnail, bila tidak memakai `youtubeId`. */
  src?: string;
  /** Foto ukuran besar untuk lightbox. Kosong = pakai `src`. */
  fullSrc?: string;
  /** Video YouTube: id dari URL share. Pakai salah satu: `youtubeId` atau `videoSrc`. */
  youtubeId?: string;
  /** Video file: path .mp4 di /public/media/. */
  videoSrc?: string;
  /** Poster untuk `videoSrc`; wajib bila memakai video file. */
  poster?: string;
  /** Deskripsi visual untuk screen reader. Wajib untuk semua tipe. */
  alt: string;
  season: DocumentationSeason;
  caption?: string;
};
