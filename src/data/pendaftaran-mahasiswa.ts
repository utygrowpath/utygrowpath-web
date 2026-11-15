import type { Pendaftaran } from "@/types/content";

/**
 * Konten halaman pendaftaran tenant mahasiswa (KWU).
 *
 * TODO(handover): konten diambil dari materi Season 2 sebagai contoh awal.
 * Perbarui tanggal, syarat, dan kontak mengikuti season berjalan.
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
  contactPersons: [
    { name: "Hamdan", phone: "085171121468" },
    { name: "Putri Isnu", phone: "085641960764" },
  ],
  website: "utygrowpath.com",
  email: "utygrowpath",
  instagram: "utygrowpath.expo",
};
