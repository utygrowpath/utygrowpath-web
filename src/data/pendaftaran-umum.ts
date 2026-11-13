import type { Pendaftaran } from "@/types/content";

/**
 * Konten halaman pendaftaran tenant umum.
 *
 * TODO(handover): konten masih mengikuti materi Season 2 (2024) sebagai
 * contoh awal. Perbarui tanggal, syarat, dan kontak mengikuti season berjalan.
 */
export const pendaftaranUmum: Pendaftaran = {
  intro: [
    "Hai, kamu yang punya usaha keren!",
    "Ini saatnya kamu memperkenalkan produk atau jasa milikmu ke lebih banyak orang melalui acara UTY GROWPATH EXPO. Yuk, tunjukkan kreativitas dan inovasi usahamu di event ini!",
  ],
  categories: [
    "Kuliner",
    "Industri Kreatif",
    "Jasa & Pariwisata",
    "Budidaya",
    "Teknologi Manufaktur",
  ],
  requirements: [
    "Memiliki usaha yang sudah / baru berjalan.",
    "Usaha termasuk kedalam kategori yang sudah ditentukan.",
    "Produk atau jasa yang layak dikonsumsi untuk umum.",
  ],
  timeline: [
    { date: "5 Desember 2026", label: "Open Registration" },
    { date: "10 Desember 2026", label: "Close Registration" },
    { date: "11 Desember 2026", label: "Announcement" },
    { date: "12 – 13 Desember 2026", label: "Selling on Stage" },
  ],
  htm: "50k/day",
  contactPersons: [
    { name: "Hamdan", phone: "085171121468" },
    { name: "Putri Isnu", phone: "085641960764" },
  ],
  website: "utygrowpath.com",
  email: "utygrowpath",
  instagram: "utygrowpath.expo",
};
