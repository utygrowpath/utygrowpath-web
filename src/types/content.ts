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
};

export type InfoPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** Format ISO: "2026-08-17" */
  date: string;
  body: string[];
};

export type CommitteeMember = {
  name: string;
  role: string;
  division: string;
  /** true untuk pengurus inti (ditampilkan di halaman Tim Kami). */
  isCore?: boolean;
  image?: string;
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
  contactPersons: { name: string; phone: string }[];
  website: string;
  /** Ditampilkan apa adanya; tidak harus alamat email valid. */
  email: string;
  /** Username Instagram tanpa "@". */
  instagram: string;
};
