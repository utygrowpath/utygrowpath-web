import type { InspirationPost } from "@/types/content";

/**
 * Artikel Sudut Inspirasi.
 *
 * TODO(handover): ganti dengan artikel asli.
 * Setiap entri otomatis mendapat halaman di /sudut-inspirasi/<slug>.
 */
export const inspirationPosts: InspirationPost[] = [
  {
    slug: "contoh-artikel-inspirasi",
    title: "Contoh Judul Artikel Inspirasi",
    excerpt:
      "Ringkasan satu sampai dua kalimat yang tampil di halaman daftar artikel.",
    author: "Nama Penulis",
    date: "2026-08-17",
    body: [
      "Paragraf pertama artikel. Ganti teks ini dengan isi sebenarnya.",
      "Paragraf kedua artikel. Satu elemen array sama dengan satu paragraf.",
    ],
  },
];

export function getInspirationPostBySlug(
  slug: string,
): InspirationPost | undefined {
  return inspirationPosts.find((post) => post.slug === slug);
}
