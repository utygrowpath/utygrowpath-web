import type { InfoPost } from "@/types/content";

/**
 * Pengumuman / halaman info tenant & publik UTY Growpath Expo Season 4.
 * Setiap entri otomatis mendapat halaman di /info/<slug>.
 */
export const infoPosts: InfoPost[] = [
  {
    slug: "twibbon-uty-growpath-expo",
    title: "Twibbon – UTY Growpath Expo Season 4 x UKM Expo",
    category: "Panduan & Media",
    excerpt:
      "Berikut adalah twibbon resmi dan panduan penggunaan aset visual spesial UTY Growpath Expo Season 4 untuk memeriahkan kehadiran tenant di media sosial.",
    date: "2026-11-10",
    image: "/images/2026/season4/logo/gowpaths4.png",
    link: "https://twibbonize.com/utygrowpath2026",
    body: [
      "Halo seluruh tenant dan kreator UTY Growpath Expo Season 4! Menjelang pelaksanaan pameran kewirausahaan terbesar di kampus kita, panitia resmi merilis twibbon eksklusif bertema 'Vistara Navakarya'.",
      "Twibbon ini didesain khusus sebagai identitas kebersamaan kita sekaligus media promosi produk tenant kepada audiens yang lebih luas di platform Instagram, TikTok, dan WhatsApp.",
      "Seluruh peserta diharapkan mengunggah twibbon beserta foto produk atau tim pada rentang waktu H-7 hingga hari pelaksanaan expo. Jangan lupa tandai akun resmi @utygrowpath.expo dan gunakan tagar resmi #UTYGrowpathExpo #VistaraNavakarya.",
      "Aset twibbon dalam format PNG transparan serta template caption lengkap dapat diunduh langsung melalui tautan resmi yang telah disediakan di grup koordinasi tenant.",
    ],
  },
  {
    slug: "rundown-uty-growpath-expo",
    title: "Rundown Acara – UTY Growpath Expo Season 4",
    category: "Jadwal & Agenda",
    excerpt:
      "Rundown lengkap pelaksanaan kegiatan Day 1 dan Day 2, mencakup jadwal registrasi tenant, penampilan pentas seni tradisional, seremonial pembukaan, hingga sesi expo.",
    date: "2026-11-05",
    image: "/images/2026/season4/logo/gowpaths4.png",
    body: [
      "Pelaksanaan UTY Growpath Expo Season 4 akan berlangsung selama 2 hari berturut-turut di Kampus 1 Universitas Teknologi Yogyakarta dengan rangkaian jadwal terstruktur.",
      "Day 1: Registrasi ulang tenant dibuka mulai pukul 07.30 - 08.30 WIB. Acara pembukaan seremonial dimulai pukul 09.00 WIB dibuka dengan tarian tradisional nusantara, menyanyikan lagu Indonesia Raya dan Mars UTY, sambutan Rektorat, hingga pemotongan pita simbolis.",
      "Sesi bazaar pameran produk dan penilaian booth kompetisi wirausaha berlangsung sepanjang hari mulai pukul 10.00 hingga 17.00 WIB, diselingi talkshow inspiratif dan live acoustic music.",
      "Day 2: Dilanjutkan dengan sesi networking bisnis, pitching investor mahasiswa, awarding tenant terfavorit & tenant paling inovatif, serta seremoni penutupan expo.",
    ],
  },
  {
    slug: "layout-booth-denah-lokasi",
    title: "Layout Booth & Denah Lokasi – UTY Growpath Expo",
    category: "Tata Tertib",
    excerpt:
      "Panduan pembagian nomor booth, titik fasilitas listrik, denah panggung utama, dan alur pengunjung di Hall Utama Kampus 1 UTY Yogyakarta.",
    date: "2026-10-28",
    image: "/images/2026/season4/logo/gowpaths4.png",
    body: [
      "Demi kenyamanan bersama dan kelancaran sirkulasi pengunjung selama expo, panitia telah membagi area pameran ke dalam beberapa klaster tematik: Kuliner & Minuman Nusantara, Seni Kriya & Fashion Kreatif, serta Produk Digital & Jasa.",
      "Setiap tenant mendapatkan satu unit booth berukuran 2x2 meter yang telah dilengkapi meja display, 2 buah kursi, dan 1 titik stop kontak listrik standar (kapasitas 450 watt).",
      "Denah interaktif dan peta alur evakuasi/keamanan dapat dilihat secara digital melalui portal ini. Tenant dilarang mengubah posisi partisi booth tanpa izin tertulis dari Koordinator Lapangan.",
    ],
  },
  {
    slug: "ketentuan-loading-in-operasional",
    title: "Ketentuan Loading-In & Operasional Tenant",
    category: "Operasional",
    excerpt:
      "Informasi jadwal loading-in barang dagangan, jam buka booth, serta tata tertib kebersihan dan pengelolaan sampah selama pameran berlangsung.",
    date: "2026-10-20",
    image: "/images/2026/season4/logo/gowpaths4.png",
    body: [
      "Proses loading-in logistik dan dekorasi booth dijadwalkan pada H-1 expo, dimulai pukul 13.00 hingga 20.00 WIB. Kendaraan logistik hanya diperkenankan bongkar muat di pintu drop-zone timur.",
      "Tenant wajib menjaga kebersihan area masing-masing selama pameran. Sampah organik dan anorganik wajib dipisahkan pada kantong sampah yang telah disediakan panitia.",
      "Barang berharga dan uang tunai wajib dibawa pulang setiap malam saat penutupan venue. Panitia menyediakan petugas keamanan gedung namun tidak bertanggung jawab atas kehilangan barang pribadi tanpa pengawasan.",
    ],
  },
  {
    slug: "technical-meeting-tenant",
    title: "Jadwal & Pembekalan Technical Meeting Tenant",
    category: "Panduan & Media",
    excerpt:
      "Undangan resmi menghadiri Technical Meeting (TM) hybrid bagi seluruh perwakilan tim tenant yang lolos kurasi pameran Growpath Season 4.",
    date: "2026-10-12",
    image: "/images/2026/season4/logo/gowpaths4.png",
    body: [
      "Seluruh tenant yang dinyatakan lolos seleksi kurasi diwajibkan mengirimkan minimal 1 (satu) orang perwakilan untuk menghadiri agenda Technical Meeting.",
      "Agenda TM meliputi pengundian nomor booth resmi, penjelasan teknis penggunaan fasilitas listrik & air, tata cara pembayaran deposit kebersihan, serta sesi tanya jawab teknis operasional.",
      "Materi presentasi dan rekaman sesi TM akan diunggah ke arsip dokumen tenant setelah sesi selesai untuk referensi anggota tim lainnya.",
    ],
  },
];

export function getInfoPostBySlug(slug: string): InfoPost | undefined {
  return infoPosts.find((post) => post.slug === slug);
}
