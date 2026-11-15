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
    image: "",
  },
  {
    name: "Neyla Az-zahrine Natayukhe",
    role: "Co-Chief Executive",
    division: "Formatur",
    isCore: true,
    image: "",
  },

  // ─── Creative Event ────────────────────────────────────────────────────────
  {
    name: "Jeremia Tobing",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "",
  },
  {
    name: "Wiji Jahayu Muliani",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "",
  },
  {
    name: "Andini Angel M",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "",
  },
  {
    name: "Riana Intan Nekezmela",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "",
  },
  {
    name: "Amelia Trisia Anjelita",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "",
  },
  {
    name: "Jokin Kusuma Ningrum",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "",
  },
  {
    name: "Fara Naura Kanna Junaedi",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "",
  },
  {
    name: "Mughny Arkan Sobirin",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "",
  },
  {
    name: "Anindya Zahra Naila Rizqi",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "",
  },
  {
    name: "Cantika Amelia",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "",
  },
  {
    name: "Alvin Adira Winata",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "",
  },
  {
    name: "Cindy Karima",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "",
  },

  // ─── Equipment & Logistic Operations ─────────────────────────────────────
  {
    name: "Ulfah Nafiah",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "",
  },
  {
    name: "Afif Tegar Saputra",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "",
  },
  {
    name: "Muh Rangga Pratama",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "",
  },
  {
    name: "Muhammad Faizun Nadhir Amrulloh",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "",
  },
  {
    name: "Fadilah Ratu Azzahra",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "",
  },
  {
    name: "Otniel Chresto Purwandi",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "",
  },
  {
    name: "Fitra Surya Pratama",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "",
  },
  {
    name: "Nashwa Maresa Putri",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "",
  },
  {
    name: "Muhammad Yusuf Maulana",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "",
  },
  {
    name: "Nanda Noviana",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "",
  },
  {
    name: "Muhammad Fawwaz Attaqy",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "",
  },
  {
    name: "Roy Febrian",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "",
  },
  {
    name: "Dimas Agung Ali Munandar",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "",
  },
  {
    name: "Muh Fa'iz Al-Hafidz",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "",
  },
  {
    name: "Ahmad Nur Fathurrahman",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "",
  },

  // ─── Finance Administrations ──────────────────────────────────────────────
  {
    name: "Gias Tri Gustyartaka",
    role: "Finance Administrations",
    division: "Finance Administrations",
    isCore: false,
    image: "",
  },
  {
    name: "Petrina Desarni Zega",
    role: "Finance Administrations",
    division: "Finance Administrations",
    isCore: false,
    image: "",
  },
  {
    name: "Silvia Halbibi Aryanto",
    role: "Finance Administrations",
    division: "Finance Administrations",
    isCore: false,
    image: "",
  },
  {
    name: "Siti Ayum Sari",
    role: "Finance Administrations",
    division: "Finance Administrations",
    isCore: false,
    image: "",
  },
  {
    name: "Shilsylia Putri Devitasary",
    role: "Finance Administrations",
    division: "Finance Administrations",
    isCore: false,
    image: "",
  },

  // ─── Community Relations ──────────────────────────────────────────────────
  {
    name: "Cahya Fitria Dwi Wahyuni",
    role: "Community Relations",
    division: "Community Relations",
    isCore: false,
    image: "",
  },
  {
    name: "Nazlia Madani Putri Modeong",
    role: "Community Relations",
    division: "Community Relations",
    isCore: false,
    image: "",
  },
  {
    name: "Fransiska Rosalia Poti",
    role: "Community Relations",
    division: "Community Relations",
    isCore: false,
    image: "",
  },
  {
    name: "Rahma Aisya Aulia",
    role: "Community Relations",
    division: "Community Relations",
    isCore: false,
    image: "",
  },
  {
    name: "Kristin Sintike Setiawan",
    role: "Community Relations",
    division: "Community Relations",
    isCore: false,
    image: "",
  },
  {
    name: "Antonia Idan Huler",
    role: "Community Relations",
    division: "Community Relations",
    isCore: false,
    image: "",
  },
  {
    name: "Reveal Damaika",
    role: "Community Relations",
    division: "Community Relations",
    isCore: false,
    image: "",
  },

  // ─── Story Hunter ──────────────────────────────────────────────────────────
  {
    name: "Frederika Angelina Aditya Priska",
    role: "Story Hunter",
    division: "Story Hunter",
    isCore: false,
    image: "",
  },
  {
    name: "Mohammad Luthfi Azzahidi",
    role: "Story Hunter",
    division: "Story Hunter",
    isCore: false,
    image: "",
  },
  {
    name: "Naufal Zaky Ramadhan",
    role: "Story Hunter",
    division: "Story Hunter",
    isCore: false,
    image: "",
  },
  {
    name: "Dela Safitri",
    role: "Story Hunter",
    division: "Story Hunter",
    isCore: false,
    image: "",
  },
  {
    name: "Dani Ardian Syach",
    role: "Story Hunter",
    division: "Story Hunter",
    isCore: false,
    image: "",
  },
  {
    name: "Egi Rizaldi",
    role: "Story Hunter",
    division: "Story Hunter",
    isCore: false,
    image: "",
  },

  // ─── Social Media Development ──────────────────────────────────────────────
  {
    name: "Priske Adittia",
    role: "Social Media Development",
    division: "Social Media Development",
    isCore: false,
    image: "",
  },
  {
    name: "Nor Mila",
    role: "Social Media Development",
    division: "Social Media Development",
    isCore: false,
    image: "",
  },
  {
    name: "Selvy Okta Ramadani",
    role: "Social Media Development",
    division: "Social Media Development",
    isCore: false,
    image: "",
  },
  {
    name: "Bekti Nurindah Havie",
    role: "Social Media Development",
    division: "Social Media Development",
    isCore: false,
    image: "",
  },
  {
    name: "Yusmarini Witana",
    role: "Social Media Development",
    division: "Social Media Development",
    isCore: false,
    image: "",
  },
  {
    name: "Lutfi Rahma Yulianti",
    role: "Social Media Development",
    division: "Social Media Development",
    isCore: false,
    image: "",
  },

  // ─── Photographer & Videographer ──────────────────────────────────────────
  {
    name: "Muhammad Fawaz Shofariel",
    role: "Photographer & Videographer",
    division: "Photographer & Videographer",
    isCore: false,
    image: "",
  },
  {
    name: "Hanif Mufadoh Putranto",
    role: "Photographer & Videographer",
    division: "Photographer & Videographer",
    isCore: false,
    image: "",
  },
  {
    name: "Siydiy Humam Nafi",
    role: "Photographer & Videographer",
    division: "Photographer & Videographer",
    isCore: false,
    image: "",
  },
  {
    name: "Syahrani Tri Azzizah",
    role: "Photographer & Videographer",
    division: "Photographer & Videographer",
    isCore: false,
    image: "",
  },
  {
    name: "Syahrul",
    role: "Photographer & Videographer",
    division: "Photographer & Videographer",
    isCore: false,
    image: "",
  },
  {
    name: "Sisna Akbar Rahmanda",
    role: "Photographer & Videographer",
    division: "Photographer & Videographer",
    isCore: false,
    image: "",
  },

  // ─── Website Development ───────────────────────────────────────────────────
  {
    name: "Nicho Arie Setiawan",
    role: "Website Development",
    division: "Website Development",
    isCore: false,
    image: "",
  },
  {
    name: "Muhammad Raehan Robban",
    role: "Website Development",
    division: "Website Development",
    isCore: false,
    image: "",
  },
  {
    name: "Yohanes",
    role: "Website Development",
    division: "Website Development",
    isCore: false,
    image: "",
  },

  // ─── Graphic Designer ─────────────────────────────────────────────────────
  {
    name: "Faiz Herdian",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "",
  },
  {
    name: "Muhammad Soleh",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "",
  },
  {
    name: "Mauldhiva Nur Hasanah",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "",
  },
  {
    name: "Ayudya Priagus",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "",
  },
  {
    name: "M Nabhan Najih",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "",
  },
  {
    name: "Riswar Fadli Rahmansah",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "",
  },
  {
    name: "Akhdzan Mizyal Rohimi",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "",
  },
  {
    name: "Nur Romadhoni",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "",
  },
];

export const coreTeam = committee.filter((member) => member.isCore);

export function getCommitteeByDivision(): Record<string, CommitteeMember[]> {
  return committee.reduce<Record<string, CommitteeMember[]>>((groups, member) => {
    groups[member.division] = [...(groups[member.division] ?? []), member];
    return groups;
  }, {});
}
