/**
 * Konfigurasi global event.
 *
 * SEMUA hal yang berubah setiap tahun (nama, tahun, tanggal, kontak, media sosial)
 * HARUS diubah di file ini saja. Jangan menulis tahun atau nama event langsung
 * di dalam komponen agar serah terima tahun depan cukup mengedit satu file.
 */
export const siteConfig = {
  name: "UtyGrowPath",
  year: 2026,
  tagline: "Tumbuh bersama, berkarya nyata.",
  description:
    "UtyGrowPath adalah event tahunan yang mempertemukan tenant, komunitas, dan panitia untuk tumbuh bersama.",
  url: "https://utygrowpath.example.com",
  email: "halo@utygrowpath.example.com",
  socials: {
    instagram: "",
    tiktok: "",
    youtube: "",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Sudut Inspirasi", href: "/sudut-inspirasi" },
    { label: "Info Tenant", href: "/info-tenant" },
    { label: "Tim Kami", href: "/tim-kami" },
    { label: "Dokumentasi", href: "/dokumentasi" },
    { label: "Info", href: "/info" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
