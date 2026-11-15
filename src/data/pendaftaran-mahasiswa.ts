import type { Pendaftaran } from "@/types/content";

/**
 * Konten halaman pendaftaran tenant mahasiswa (KWU).
 *
 * TODO(handover): konten diambil dari materi Season 2 sebagai contoh awal.
 * Perbarui tanggal dan syarat mengikuti season berjalan.
 *
 * Kontak (telepon, email, media sosial) TIDAK disimpan di sini — semuanya
 * diambil dari `src/config/site.ts` supaya tidak ada dua sumber yang beda.
 */
export const pendaftaranMahasiswa: Pendaftaran = {
  intro: [
    "Hai, wirausahawan muda! Wiranusa punya kabar seru nih buat kalian.",
    "UTY Growpath EXPO bukan sekadar pameran biasa, ini panggungnya kamu buat bersinar dan ngenalin bisnismu ke banyak orang. Yuk, tunjukkan kreativitasmu dan jadilah bagian dari tenant kami.",
  ],
  categories: [
    "Kuliner",
    "Fashion & Desain",
    "Jasa & Pariwisata",
    "Produk Digital Kreatif",
  ],
  requirements: [
    "Wajib untuk Mahasiswa/i aktif yang sedang menempuh mata kuliah Krenovasi & Kewirausahaan.",
    "Stand bersifat Tim/Kelompok.",
    "Wajib mengikuti seluruh serangkaian & tahapan UTY Growpath Expo.",
  ],
  timeline: [
    { date: "4 Desember 2026", label: "Open Registration" },
    { date: "7 Desember 2026", label: "Close Registration" },
    { date: "9 Desember 2026", label: "Technical Meeting" },
    { date: "12 – 13 Desember 2026", label: "Selling on Stage" },
  ],
  htm: "FREE!",
};
