import type { CommitteeMember } from "@/types/content";

/**
 * Data panitia.
 *
 * - Halaman /tim-kami menampilkan anggota dengan `isCore: true`.
 * - Halaman /panitia menampilkan seluruh anggota, dikelompokkan per divisi.
 *
 * TODO(handover): ganti dengan susunan panitia asli.
 */
export const committee: CommitteeMember[] = [
  {
    name: "Nama Ketua Pelaksana",
    role: "Ketua Pelaksana",
    division: "Pengurus Inti",
    isCore: true,
  },
  {
    name: "Nama Wakil Ketua",
    role: "Wakil Ketua",
    division: "Pengurus Inti",
    isCore: true,
  },
  {
    name: "Nama Koordinator Acara",
    role: "Koordinator",
    division: "Divisi Acara",
  },
  {
    name: "Nama Anggota Acara",
    role: "Anggota",
    division: "Divisi Acara",
  },
];

export const coreTeam = committee.filter((member) => member.isCore);

export function getCommitteeByDivision(): Record<string, CommitteeMember[]> {
  return committee.reduce<Record<string, CommitteeMember[]>>((groups, member) => {
    groups[member.division] = [...(groups[member.division] ?? []), member];
    return groups;
  }, {});
}
