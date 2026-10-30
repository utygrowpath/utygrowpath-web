import type { InfoPost } from "@/types/content";

/**
 * Pengumuman / halaman info.
 *
 * TODO(handover): ganti dengan pengumuman asli.
 * Setiap entri otomatis mendapat halaman di /info/<slug>.
 */
export const infoPosts: InfoPost[] = [
  {
    slug: "contoh-pengumuman",
    title: "Contoh Pengumuman",
    excerpt:
      "Ringkasan pengumuman yang tampil di halaman daftar info.",
    date: "2026-08-17",
    body: [
      "Isi pengumuman. Ganti teks ini dengan informasi sebenarnya.",
    ],
  },
];

export function getInfoPostBySlug(slug: string): InfoPost | undefined {
  return infoPosts.find((post) => post.slug === slug);
}
