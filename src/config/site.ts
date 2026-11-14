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
  email: "growpathexpo.4@gmail.com",
  address:
    "Jl. Siliwangi Jl. Jombor Lor, Mlati Krajan, Sendangadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55284 (UTY Kampus 1)",
  phones: [
    { number: "+62 812-7466-5794", contact: "Caya", tel: "+6281274665794" },
    { number: "+62 823-2562-8623", contact: "Pak Puji", tel: "+6282325628623" },
  ],
  socials: {
    instagram: "https://www.instagram.com/utygrowpath.expo?xtok=eXQ2dzlnY2wxYmNh",
    tiktok: "https://www.tiktok.com/@utygrowpath.expo?_r=1&_t=ZS-9BLTj3wHrBH",
    youtube: "",
    website: "",
    linkedin: "https://www.linkedin.com/company/utygrowpath/",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Sudut Inspirasi", href: "/sudut-inspirasi" },
    { label: "Info Tenant", href: "/info-tenant" },
    { label: "Tim Kami", href: "/tim-kami" },
    { label: "Dokumentasi", href: "/dokumentasi" },
    { label: "Info", href: "/info" },
    { label: "Kontak", href: "/kontak" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
