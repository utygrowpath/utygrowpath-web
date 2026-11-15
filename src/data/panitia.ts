import type { CommitteeMember } from "@/types/content";

/**
 * Data kepengurusan dan panitia UTY Growpath Expo Season 4.
 * Sumber: Mapping Growpath Expo #4 Team.xlsx
 *
 * - Halaman /our-team menampilkan seluruh tim dengan fokus pengelompokan divisi.
 * - Halaman /panitia menampilkan susunan per divisi lengkap.
 *
 * NOTE: Foto per anggota akan ditambahkan setelah aset gambar tersedia.
 *       Sementara ini placeholder menggunakan path generik per divisi.
 */
export const committee: CommitteeMember[] = [
  // ─── Formatur (Chief Executive) ───────────────────────────────────────────
  {
    name: "Syamil Ahmad Mudzakkir",
    role: "Chief Executive",
    division: "Formatur",
    isCore: true,
    // TODO: ganti dengan foto yang sebenarnya
    image: "/images/2026/our-team/formatur/syamil.jpg",
  },
  {
    name: "Neyla Az-zahrine Natayukhe",
    role: "Co-Chief Executive",
    division: "Formatur",
    isCore: true,
    image: "/images/2026/our-team/formatur/neyla.jpg",
  },

  // ─── Creative Event ────────────────────────────────────────────────────────
  {
    name: "Jeremia Tobing",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/images/2026/our-team/creative-event/placeholder.jpg",
  },
  {
    name: "Wiji Jahayu Muliani",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/images/2026/our-team/creative-event/placeholder.jpg",
  },
  {
    name: "Andini Angel M",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/images/2026/our-team/creative-event/placeholder.jpg",
  },
  {
    name: "Riana Intan Nekezmela",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/images/2026/our-team/creative-event/placeholder.jpg",
  },
  {
    name: "Amelia Trisia Anjelita",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/images/2026/our-team/creative-event/placeholder.jpg",
  },
  {
    name: "Jokin Kusuma Ningrum",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/images/2026/our-team/creative-event/placeholder.jpg",
  },
  {
    name: "Fara Naura Kanna Junaedi",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/images/2026/our-team/creative-event/placeholder.jpg",
  },
  {
    name: "Mughny Arkan Sobirin",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/images/2026/our-team/creative-event/placeholder.jpg",
  },
  {
    name: "Anindya Zahra Naila Rizqi",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/images/2026/our-team/creative-event/placeholder.jpg",
  },
  {
    name: "Cantika Amelia",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/images/2026/our-team/creative-event/placeholder.jpg",
  },
  {
    name: "Alvin Adira Winata",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/images/2026/our-team/creative-event/placeholder.jpg",
  },
  {
    name: "Cindy Karima",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/images/2026/our-team/creative-event/placeholder.jpg",
  },

  // ─── Equipment & Logistic Operations ─────────────────────────────────────
  {
    name: "Ulfah Nafiah",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/images/2026/our-team/equipment-logistic/placeholder.jpg",
  },
  {
    name: "Afif Tegar Saputra",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/images/2026/our-team/equipment-logistic/placeholder.jpg",
  },
  {
    name: "Muh Rangga Pratama",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/images/2026/our-team/equipment-logistic/placeholder.jpg",
  },
  {
    name: "Muhammad Faizun Nadhir Amrulloh",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/images/2026/our-team/equipment-logistic/placeholder.jpg",
  },
  {
    name: "Fadilah Ratu Azzahra",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/images/2026/our-team/equipment-logistic/placeholder.jpg",
  },
  {
    name: "Otniel Chresto Purwandi",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/images/2026/our-team/equipment-logistic/placeholder.jpg",
  },
  {
    name: "Fitra Surya Pratama",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/images/2026/our-team/equipment-logistic/placeholder.jpg",
  },
  {
    name: "Nashwa Maresa Putri",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/images/2026/our-team/equipment-logistic/placeholder.jpg",
  },
  {
    name: "Muhammad Yusuf Maulana",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/images/2026/our-team/equipment-logistic/placeholder.jpg",
  },
  {
    name: "Nanda Noviana",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/images/2026/our-team/equipment-logistic/placeholder.jpg",
  },
  {
    name: "Muhammad Fawwaz Attaqy",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/images/2026/our-team/equipment-logistic/placeholder.jpg",
  },
  {
    name: "Roy Febrian",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/images/2026/our-team/equipment-logistic/placeholder.jpg",
  },
  {
    name: "Dimas Agung Ali Munandar",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/images/2026/our-team/equipment-logistic/placeholder.jpg",
  },
  {
    name: "Muh Fa'iz Al-Hafidz",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/images/2026/our-team/equipment-logistic/placeholder.jpg",
  },
  {
    name: "Ahmad Nur Fathurrahman",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/images/2026/our-team/equipment-logistic/placeholder.jpg",
  },

  // ─── Finance Administrations ──────────────────────────────────────────────
  {
    name: "Gias Tri Gustyartaka",
    role: "Finance Administrations",
    division: "Finance Administrations",
    isCore: false,
    image: "/images/2026/our-team/finance/placeholder.jpg",
  },
  {
    name: "Petrina Desarni Zega",
    role: "Finance Administrations",
    division: "Finance Administrations",
    isCore: false,
    image: "/images/2026/our-team/finance/placeholder.jpg",
  },
  {
    name: "Silvia Halbibi Aryanto",
    role: "Finance Administrations",
    division: "Finance Administrations",
    isCore: false,
    image: "/images/2026/our-team/finance/placeholder.jpg",
  },
  {
    name: "Siti Ayum Sari",
    role: "Finance Administrations",
    division: "Finance Administrations",
    isCore: false,
    image: "/images/2026/our-team/finance/placeholder.jpg",
  },
  {
    name: "Shilsylia Putri Devitasary",
    role: "Finance Administrations",
    division: "Finance Administrations",
    isCore: false,
    image: "/images/2026/our-team/finance/placeholder.jpg",
  },

  // ─── Community Relations ──────────────────────────────────────────────────
  {
    name: "Cahya Fitria Dwi Wahyuni",
    role: "Community Relations",
    division: "Community Relations",
    isCore: false,
    image: "/images/2026/our-team/community-relations/placeholder.jpg",
  },
  {
    name: "Nazlia Madani Putri Modeong",
    role: "Community Relations",
    division: "Community Relations",
    isCore: false,
    image: "/images/2026/our-team/community-relations/placeholder.jpg",
  },
  {
    name: "Fransiska Rosalia Poti",
    role: "Community Relations",
    division: "Community Relations",
    isCore: false,
    image: "/images/2026/our-team/community-relations/placeholder.jpg",
  },
  {
    name: "Rahma Aisya Aulia",
    role: "Community Relations",
    division: "Community Relations",
    isCore: false,
    image: "/images/2026/our-team/community-relations/placeholder.jpg",
  },
  {
    name: "Kristin Sintike Setiawan",
    role: "Community Relations",
    division: "Community Relations",
    isCore: false,
    image: "/images/2026/our-team/community-relations/placeholder.jpg",
  },
  {
    name: "Antonia Idan Huler",
    role: "Community Relations",
    division: "Community Relations",
    isCore: false,
    image: "/images/2026/our-team/community-relations/placeholder.jpg",
  },
  {
    name: "Reveal Damaika",
    role: "Community Relations",
    division: "Community Relations",
    isCore: false,
    image: "/images/2026/our-team/community-relations/placeholder.jpg",
  },

  // ─── Story Hunter ──────────────────────────────────────────────────────────
  {
    name: "Frederika Angelina Aditya Priska",
    role: "Story Hunter",
    division: "Story Hunter",
    isCore: false,
    image: "/images/2026/our-team/story-hunter/placeholder.jpg",
  },
  {
    name: "Mohammad Luthfi Azzahidi",
    role: "Story Hunter",
    division: "Story Hunter",
    isCore: false,
    image: "/images/2026/our-team/story-hunter/placeholder.jpg",
  },
  {
    name: "Naufal Zaky Ramadhan",
    role: "Story Hunter",
    division: "Story Hunter",
    isCore: false,
    image: "/images/2026/our-team/story-hunter/placeholder.jpg",
  },
  {
    name: "Dela Safitri",
    role: "Story Hunter",
    division: "Story Hunter",
    isCore: false,
    image: "/images/2026/our-team/story-hunter/placeholder.jpg",
  },
  {
    name: "Dani Ardian Syach",
    role: "Story Hunter",
    division: "Story Hunter",
    isCore: false,
    image: "/images/2026/our-team/story-hunter/placeholder.jpg",
  },
  {
    name: "Egi Rizaldi",
    role: "Story Hunter",
    division: "Story Hunter",
    isCore: false,
    image: "/images/2026/our-team/story-hunter/placeholder.jpg",
  },

  // ─── Social Media Development ──────────────────────────────────────────────
  {
    name: "Priske Adittia",
    role: "Social Media Development",
    division: "Social Media Development",
    isCore: false,
    image: "/images/2026/our-team/social-media/placeholder.jpg",
  },
  {
    name: "Nor Mila",
    role: "Social Media Development",
    division: "Social Media Development",
    isCore: false,
    image: "/images/2026/our-team/social-media/placeholder.jpg",
  },
  {
    name: "Selvy Okta Ramadani",
    role: "Social Media Development",
    division: "Social Media Development",
    isCore: false,
    image: "/images/2026/our-team/social-media/placeholder.jpg",
  },
  {
    name: "Bekti Nurindah Havie",
    role: "Social Media Development",
    division: "Social Media Development",
    isCore: false,
    image: "/images/2026/our-team/social-media/placeholder.jpg",
  },
  {
    name: "Yusmarini Witana",
    role: "Social Media Development",
    division: "Social Media Development",
    isCore: false,
    image: "/images/2026/our-team/social-media/placeholder.jpg",
  },
  {
    name: "Lutfi Rahma Yulianti",
    role: "Social Media Development",
    division: "Social Media Development",
    isCore: false,
    image: "/images/2026/our-team/social-media/placeholder.jpg",
  },

  // ─── Photographer & Videographer ──────────────────────────────────────────
  {
    name: "Muhammad Fawaz Shofariel",
    role: "Photographer & Videographer",
    division: "Photographer & Videographer",
    isCore: false,
    image: "/images/2026/our-team/photo-video/placeholder.jpg",
  },
  {
    name: "Hanif Mufadoh Putranto",
    role: "Photographer & Videographer",
    division: "Photographer & Videographer",
    isCore: false,
    image: "/images/2026/our-team/photo-video/placeholder.jpg",
  },
  {
    name: "Siydiy Humam Nafi",
    role: "Photographer & Videographer",
    division: "Photographer & Videographer",
    isCore: false,
    image: "/images/2026/our-team/photo-video/placeholder.jpg",
  },
  {
    name: "Syahrani Tri Azzizah",
    role: "Photographer & Videographer",
    division: "Photographer & Videographer",
    isCore: false,
    image: "/images/2026/our-team/photo-video/placeholder.jpg",
  },
  {
    name: "Syahrul",
    role: "Photographer & Videographer",
    division: "Photographer & Videographer",
    isCore: false,
    image: "/images/2026/our-team/photo-video/placeholder.jpg",
  },
  {
    name: "Sisna Akbar Rahmanda",
    role: "Photographer & Videographer",
    division: "Photographer & Videographer",
    isCore: false,
    image: "/images/2026/our-team/photo-video/placeholder.jpg",
  },

  // ─── Website Development ───────────────────────────────────────────────────
  {
    name: "Nicho Arie Setiawan",
    role: "Website Development",
    division: "Website Development",
    isCore: false,
    image: "/images/2026/our-team/website-dev/placeholder.jpg",
  },
  {
    name: "Muhammad Raehan Robban",
    role: "Website Development",
    division: "Website Development",
    isCore: false,
    image: "/images/2026/our-team/website-dev/placeholder.jpg",
  },
  {
    name: "Yohanes",
    role: "Website Development",
    division: "Website Development",
    isCore: false,
    image: "/images/2026/our-team/website-dev/placeholder.jpg",
  },

  // ─── Graphic Designer ─────────────────────────────────────────────────────
  {
    name: "Faiz Herdian",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "/images/2026/our-team/graphic-designer/placeholder.jpg",
  },
  {
    name: "Muhammad Soleh",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "/images/2026/our-team/graphic-designer/placeholder.jpg",
  },
  {
    name: "Mauldhiva Nur Hasanah",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "/images/2026/our-team/graphic-designer/placeholder.jpg",
  },
  {
    name: "Ayudya Priagus",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "/images/2026/our-team/graphic-designer/placeholder.jpg",
  },
  {
    name: "M Nabhan Najih",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "/images/2026/our-team/graphic-designer/placeholder.jpg",
  },
  {
    name: "Riswar Fadli Rahmansah",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "/images/2026/our-team/graphic-designer/placeholder.jpg",
  },
  {
    name: "Akhdzan Mizyal Rohimi",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "/images/2026/our-team/graphic-designer/placeholder.jpg",
  },
  {
    name: "Nur Romadhoni",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "/images/2026/our-team/graphic-designer/placeholder.jpg",
  },
];

export const coreTeam = committee.filter((member) => member.isCore);

export function getCommitteeByDivision(): Record<string, CommitteeMember[]> {
  return committee.reduce<Record<string, CommitteeMember[]>>((groups, member) => {
    groups[member.division] = [...(groups[member.division] ?? []), member];
    return groups;
  }, {});
}
