import type { CommitteeMember } from "@/types/content";

/**
 * Data kepengurusan dan panitia UTY Growpath Expo Season 4.
 * Sumber: Mapping Growpath Expo #4 Team.xlsx
 *
 * - Halaman /our-team menampilkan seluruh tim dengan fokus pengelompokan divisi.
 * - Halaman /panitia menampilkan susunan per divisi lengkap.
 *
 * NOTE: Foto per anggota telah dipetakan dan dihubungkan ke berkas kartu profil
 *       di public/tim/<Divisi>/ sesuai nama masing-masing panitia.
 */
export const committee: CommitteeMember[] = [
  // ─── Formatur (Chief Executive) ───────────────────────────────────────────
  {
    name: "Syamil Ahmad Mudzakkir",
    role: "Chief Executive",
    division: "Formatur",
    isCore: true,
    image: "/tim/Formatur/FM - 2.webp",
  },
  {
    name: "Neyla Az-zahrine Natayukhe",
    role: "Co-Chief Executive",
    division: "Formatur",
    isCore: true,
    image: "/tim/Formatur/FM - 3.webp",
  },

  // ─── Creative Event ────────────────────────────────────────────────────────
  {
    name: "Jeremia Tobing",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/tim/CreativeEvent/CE - 2.webp",
  },
  {
    name: "Wiji Jahayu Muliani",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/tim/CreativeEvent/CE - 9.webp",
  },
  {
    name: "Andini Angel M",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/tim/CreativeEvent/CE - 3.webp",
  },
  {
    name: "Riana Intan Nekezmela",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/tim/CreativeEvent/CE - 8.webp",
  },
  {
    name: "Amelia Trisia Anjelita",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/tim/CreativeEvent/CE - 4.webp",
  },
  {
    name: "Jokin Kusuma Ningrum",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/tim/CreativeEvent/CE - 7.webp",
  },
  {
    name: "Fara Naura Kanna Junaedi",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/tim/CreativeEvent/CE - 13.webp",
  },
  {
    name: "Mughny Arkan Sobirin",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/tim/CreativeEvent/CE - 11.webp",
  },
  {
    name: "Anindya Zahra Naila Rizqi",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/tim/CreativeEvent/CE - 5.webp",
  },
  {
    name: "Cantika Amelia",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/tim/CreativeEvent/CE - 10.webp",
  },
  {
    name: "Alvin Adira Winata",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/tim/CreativeEvent/CE - 12.webp",
  },
  {
    name: "Cindy Karima",
    role: "Creative Event",
    division: "Creative Event",
    isCore: false,
    image: "/tim/CreativeEvent/CE - 6.webp",
  },

  // ─── Equipment & Logistic Operations ─────────────────────────────────────
  {
    name: "Ulfah Nafiah",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/tim/LO/ELO - 2.webp",
  },
  {
    name: "Afif Tegar Saputra",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/tim/LO/ELO - 3.webp",
  },
  {
    name: "Muh Rangga Pratama",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/tim/LO/ELO - 9.webp",
  },
  {
    name: "Muhammad Faizun Nadhir Amrulloh",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/tim/LO/ELO - 13.webp",
  },
  {
    name: "Fadilah Ratu Azzahra",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/tim/LO/ELO - 4.webp",
  },
  {
    name: "Otniel Chresto Purwandi",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/tim/LO/ELO - 5.webp",
  },
  {
    name: "Fitra Surya Pratama",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/tim/LO/ELO - 8.webp",
  },
  {
    name: "Nashwa Maresa Putri",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/tim/LO/ELO - 11.webp",
  },
  {
    name: "Muhammad Yusuf Maulana",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/tim/LO/ELO - 10.webp",
  },
  {
    name: "Nanda Noviana",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/tim/LO/ELO - 15.webp",
  },
  {
    name: "Muhammad Fawwaz Attaqy",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/tim/LO/ELO - 14.webp",
  },
  {
    name: "Roy Febrian",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/tim/LO/ELO - 12.webp",
  },
  {
    name: "Dimas Agung Ali Munandar",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/tim/LO/ELO - 7.webp",
  },
  {
    name: "Muh Fa'iz Al-Hafidz",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/tim/LO/ELO - 16.webp",
  },
  {
    name: "Ahmad Nur Fathurrahman",
    role: "Equipment & Logistic Operations",
    division: "Equipment & Logistic Operations",
    isCore: false,
    image: "/tim/LO/ELO - 6.webp",
  },

  // ─── Finance Administrations ──────────────────────────────────────────────
  {
    name: "Gias Tri Gustyartaka",
    role: "Finance Administrations",
    division: "Finance Administrations",
    isCore: false,
    image: "/tim/Finance/FA - 2.webp",
  },
  {
    name: "Petrina Desarni Zega",
    role: "Finance Administrations",
    division: "Finance Administrations",
    isCore: false,
    image: "/tim/Finance/FA - 4.webp",
  },
  {
    name: "Silvia Halbibi Aryanto",
    role: "Finance Administrations",
    division: "Finance Administrations",
    isCore: false,
    image: "/tim/Finance/FA - 5.webp",
  },
  {
    name: "Siti Ayum Sari",
    role: "Finance Administrations",
    division: "Finance Administrations",
    isCore: false,
    image: "/tim/Finance/FA - 6.webp",
  },
  {
    name: "Shilsylia Putri Devitasary",
    role: "Finance Administrations",
    division: "Finance Administrations",
    isCore: false,
    image: "/tim/Finance/FA - 3.webp",
  },

  // ─── Community Relations ──────────────────────────────────────────────────
  {
    name: "Cahya Fitria Dwi Wahyuni",
    role: "Community Relations",
    division: "Community Relations",
    isCore: false,
    image: "/tim/CommunityRelations/CR - 2.webp",
  },
  {
    name: "Nazlia Madani Putri Modeong",
    role: "Community Relations",
    division: "Community Relations",
    isCore: false,
    image: "/tim/CommunityRelations/CR - 7.webp",
  },
  {
    name: "Fransiska Rosalia Poti",
    role: "Community Relations",
    division: "Community Relations",
    isCore: false,
    image: "/tim/CommunityRelations/CR - 4.webp",
  },
  {
    name: "Rahma Aisya Aulia",
    role: "Community Relations",
    division: "Community Relations",
    isCore: false,
    image: "/tim/CommunityRelations/CR - 5.webp",
  },
  {
    name: "Kristin Sintike Setiawan",
    role: "Community Relations",
    division: "Community Relations",
    isCore: false,
    image: "/tim/CommunityRelations/CR - 8.webp",
  },
  {
    name: "Antonia Idan Huler",
    role: "Community Relations",
    division: "Community Relations",
    isCore: false,
    image: "/tim/CommunityRelations/CR - 3.webp",
  },
  {
    name: "Reveal Damaika",
    role: "Community Relations",
    division: "Community Relations",
    isCore: false,
    image: "/tim/CommunityRelations/CR - 6.webp",
  },

  // ─── Story Hunter ──────────────────────────────────────────────────────────
  {
    name: "Frederika Angelina Aditya Priska",
    role: "Story Hunter",
    division: "Story Hunter",
    isCore: false,
    image: "/tim/StoryHunter/SH - 2.webp",
  },
  {
    name: "Mohammad Luthfi Azzahidi",
    role: "Story Hunter",
    division: "Story Hunter",
    isCore: false,
    image: "/tim/StoryHunter/SH - 6.webp",
  },
  {
    name: "Naufal Zaky Ramadhan",
    role: "Story Hunter",
    division: "Story Hunter",
    isCore: false,
    image: "/tim/StoryHunter/SH - 7.webp",
  },
  {
    name: "Dela Safitri",
    role: "Story Hunter",
    division: "Story Hunter",
    isCore: false,
    image: "/tim/StoryHunter/SH - 4.webp",
  },
  {
    name: "Dani Ardian Syach",
    role: "Story Hunter",
    division: "Story Hunter",
    isCore: false,
    image: "/tim/StoryHunter/SH - 3.webp",
  },
  {
    name: "Egi Rizaldi",
    role: "Story Hunter",
    division: "Story Hunter",
    isCore: false,
    image: "/tim/StoryHunter/SH - 5.webp",
  },

  // ─── Social Media Development ──────────────────────────────────────────────
  {
    name: "Priske Adittia",
    role: "Social Media Development",
    division: "Social Media Development",
    isCore: false,
    image: "/tim/SocialMedia/SMD - 2.webp",
  },
  {
    name: "Nor Mila",
    role: "Social Media Development",
    division: "Social Media Development",
    isCore: false,
    image: "/tim/SocialMedia/SMD - 7.webp",
  },
  {
    name: "Selvy Okta Ramadani",
    role: "Social Media Development",
    division: "Social Media Development",
    isCore: false,
    image: "/tim/SocialMedia/SMD - 5.webp",
  },
  {
    name: "Bekti Nurindah Havie",
    role: "Social Media Development",
    division: "Social Media Development",
    isCore: false,
    image: "/tim/SocialMedia/SMD - 3.webp",
  },
  {
    name: "Yusmarini Witana",
    role: "Social Media Development",
    division: "Social Media Development",
    isCore: false,
    image: "/tim/SocialMedia/SMD - 6.webp",
  },
  {
    name: "Lutfi Rahma Yulianti",
    role: "Social Media Development",
    division: "Social Media Development",
    isCore: false,
    image: "/tim/SocialMedia/SMD - 4.webp",
  },

  // ─── Photographer & Videographer ──────────────────────────────────────────
  {
    name: "Muhammad Fawaz Shofariel",
    role: "Photographer & Videographer",
    division: "Photographer & Videographer",
    isCore: false,
    image: "/tim/Photographer/Pnv - 2.webp",
  },
  {
    name: "Hanif Mufadoh Putranto",
    role: "Photographer & Videographer",
    division: "Photographer & Videographer",
    isCore: false,
    image: "/tim/Photographer/Pnv - 3.webp",
  },
  {
    name: "Siydiy Humam Nafi",
    role: "Photographer & Videographer",
    division: "Photographer & Videographer",
    isCore: false,
    image: "/tim/Photographer/Pnv - 5.webp",
  },
  {
    name: "Syahrani Tri Azzizah",
    role: "Photographer & Videographer",
    division: "Photographer & Videographer",
    isCore: false,
    image: "/tim/Photographer/Pnv - 6.webp",
  },
  {
    name: "Syahrul",
    role: "Photographer & Videographer",
    division: "Photographer & Videographer",
    isCore: false,
    image: "/tim/Photographer/Pnv - 7.webp",
  },
  {
    name: "Sisna Akbar Rahmanda",
    role: "Photographer & Videographer",
    division: "Photographer & Videographer",
    isCore: false,
    image: "/tim/Photographer/Pnv - 4.webp",
  },

  // ─── Website Development ───────────────────────────────────────────────────
  {
    name: "Nicho Arie Setiawan",
    role: "Website Development",
    division: "Website Development",
    isCore: false,
    image: "/tim/web/WD - 2.webp",
  },
  {
    name: "Muhammad Raehan Robban",
    role: "Website Development",
    division: "Website Development",
    isCore: false,
    image: "/tim/web/WD - 3.webp",
  },
  {
    name: "Yohanes",
    role: "Website Development",
    division: "Website Development",
    isCore: false,
    image: "/tim/web/WD - 4.webp",
  },

  // ─── Graphic Designer ─────────────────────────────────────────────────────
  {
    name: "Faiz Herdian",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "/tim/GraphicDesign/GD - 2.webp",
  },
  {
    name: "Muhammad Soleh",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "/tim/GraphicDesign/GD - 3.webp",
  },
  {
    name: "Mauldhiva Nur Hasanah",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "/tim/GraphicDesign/GD - 5.webp",
  },
  {
    name: "Ayudya Priagus",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "/tim/GraphicDesign/GD - 4.webp",
  },
  {
    name: "M Nabhan Najih",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "/tim/GraphicDesign/GD - 6.webp",
  },
  {
    name: "Riswar Fadli Rahmansah",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "/tim/GraphicDesign/GD - 7.webp",
  },
  {
    name: "Akhdzan Mizyal Rohimi",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "/tim/GraphicDesign/GD - 8.webp",
  },
  {
    name: "Nur Romadhoni",
    role: "Graphic Designer",
    division: "Graphic Designer",
    isCore: false,
    image: "/tim/GraphicDesign/GD - 9.webp",
  },
];

export const coreTeam = committee.filter((member) => member.isCore);

export function getCommitteeByDivision(): Record<string, CommitteeMember[]> {
  return committee.reduce<Record<string, CommitteeMember[]>>((groups, member) => {
    groups[member.division] = [...(groups[member.division] ?? []), member];
    return groups;
  }, {});
}
