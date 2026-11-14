import type { CommitteeMember } from "@/types/content";

/**
 * Data kepengurusan dan panitia UTY Growpath Expo Season 4.
 *
 * - Halaman /tim-kami menampilkan seluruh tim dengan fokus pengelompokan divisi dan BPH.
 * - Halaman /panitia menampilkan susunan per divisi lengkap.
 */
export const committee: CommitteeMember[] = [
  // Chief Executive & Pengurus Inti
  {
    name: "Adithio Budi Saputro",
    role: "Chief Executive",
    division: "Chief Executive",
    isCore: true,
    image: "/images/2026/season4/dokumentasi/docum1.png",
  },
  {
    name: "Vania Natasha",
    role: "Vice Chief Executive",
    division: "Chief Executive",
    isCore: true,
    image: "/images/2026/season4/dokumentasi/docum2.png",
  },
  {
    name: "Sekar Ayu Prameswari",
    role: "Secretary General",
    division: "Chief Executive",
    isCore: true,
    image: "/images/2026/season4/dokumentasi/docum1.png",
  },
  {
    name: "Dimas Prasetyo",
    role: "Chief Financial Officer",
    division: "Chief Executive",
    isCore: true,
    image: "/images/2026/season4/dokumentasi/docum2.png",
  },

  // Story Hunter (Divisi Acara)
  {
    name: "Nadia Larasati",
    role: "Head of Event & Story Hunter",
    division: "Story Hunter",
    isCore: false,
    image: "/images/2026/season4/dokumentasi/docum1.png",
  },
  {
    name: "Fajar Ramadan",
    role: "Story Hunter Specialist",
    division: "Story Hunter",
    isCore: false,
    image: "/images/2026/season4/dokumentasi/docum2.png",
  },
  {
    name: "Angga Pratama",
    role: "Show & Stage Director",
    division: "Story Hunter",
    isCore: false,
    image: "/images/2026/season4/dokumentasi/docum1.png",
  },

  // Community Relation (Humas & Publikasi)
  {
    name: "Salsa Kirana",
    role: "Head of Community Relation",
    division: "Community Relation",
    isCore: false,
    image: "/images/2026/season4/dokumentasi/docum2.png",
  },
  {
    name: "Bima Satria",
    role: "Public Relations Officer",
    division: "Community Relation",
    isCore: false,
    image: "/images/2026/season4/dokumentasi/docum1.png",
  },
  {
    name: "Rizky Ananda",
    role: "Media & Outreach Lead",
    division: "Community Relation",
    isCore: false,
    image: "/images/2026/season4/dokumentasi/docum2.png",
  },

  // Creative & Media
  {
    name: "Yohanes Kevin",
    role: "Lead Creative Designer",
    division: "Creative & Media",
    isCore: false,
    image: "/images/2026/season4/dokumentasi/docum1.png",
  },
  {
    name: "Alika Putri",
    role: "Visual & Brand Designer",
    division: "Creative & Media",
    isCore: false,
    image: "/images/2026/season4/dokumentasi/docum2.png",
  },
  {
    name: "Farhan Maulana",
    role: "Videographer & Documentation",
    division: "Creative & Media",
    isCore: false,
    image: "/images/2026/season4/dokumentasi/docum1.png",
  },

  // Logistics & Operational
  {
    name: "Bayu Nugroho",
    role: "Head of Logistics",
    division: "Logistics & Operational",
    isCore: false,
    image: "/images/2026/season4/dokumentasi/docum2.png",
  },
  {
    name: "Tegar Wibowo",
    role: "Venue & Equipment Master",
    division: "Logistics & Operational",
    isCore: false,
    image: "/images/2026/season4/dokumentasi/docum1.png",
  },
  {
    name: "Ilham Saputra",
    role: "Field Operational Support",
    division: "Logistics & Operational",
    isCore: false,
    image: "/images/2026/season4/dokumentasi/docum2.png",
  },

  // Sponsorship & Partnership
  {
    name: "Cantika Dewi",
    role: "Head of Sponsorship",
    division: "Sponsorship & Partnership",
    isCore: false,
    image: "/images/2026/season4/dokumentasi/docum1.png",
  },
  {
    name: "Arya Kusuma",
    role: "Partnership Executive",
    division: "Sponsorship & Partnership",
    isCore: false,
    image: "/images/2026/season4/dokumentasi/docum2.png",
  },
  {
    name: "Sarah Amalia",
    role: "Tenant Care & Liaison",
    division: "Sponsorship & Partnership",
    isCore: false,
    image: "/images/2026/season4/dokumentasi/docum1.png",
  },
];

export const coreTeam = committee.filter((member) => member.isCore);

export function getCommitteeByDivision(): Record<string, CommitteeMember[]> {
  return committee.reduce<Record<string, CommitteeMember[]>>((groups, member) => {
    groups[member.division] = [...(groups[member.division] ?? []), member];
    return groups;
  }, {});
}
