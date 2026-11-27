export type VenueZoneCategory =
  | "tenant"
  | "sponsor"
  | "internal"
  | "stage"
  | "facility"
  | "gate";

export interface VenueSpot {
  id: string;
  label: string;
  title: string;
  category: VenueZoneCategory;
  description: string;
  x: number;
  y: number;
  w: number;
  h: number;
  /** Posisi strip warna pada booth ('top' | 'bottom' | 'left' | 'right' | 'full') */
  accentSide?: "top" | "bottom" | "left" | "right" | "full";
  color?: string;
}

const BOOTH_W = 28;
const BOOTH_H = 34;

function makeBooth(
  num: number,
  x: number,
  y: number,
  accentSide: "top" | "bottom" | "left" | "right" = "bottom",
  w = BOOTH_W,
  h = BOOTH_H,
): VenueSpot {
  return {
    id: `booth-${num}`,
    label: String(num),
    title: `Booth #${num}`,
    category: "tenant",
    description: `Area pameran produk & karya tenant UTY Growpath Expo Season 4 (Booth Nomor ${num}).`,
    x,
    y,
    w,
    h,
    accentSide,
  };
}

/**
 * Helper untuk membuat pasangan booth bersebelahan (kiri-kanan) dalam satu blok.
 * Contoh: [104, 103] di baris atas.
 */
function makePairRow(
  pairs: [number, number][],
  startX: number,
  y: number,
  gapX: number,
  accentSide: "top" | "bottom",
): VenueSpot[] {
  const spots: VenueSpot[] = [];
  pairs.forEach(([leftNum, rightNum], idx) => {
    const bx = startX + idx * (BOOTH_W * 2 + gapX);
    spots.push(makeBooth(leftNum, bx, y, accentSide));
    spots.push(makeBooth(rightNum, bx + BOOTH_W, y, accentSide));
  });
  return spots;
}

// 1. Baris Paling Atas (104-87) - 9 pasang
const topRowSpots = makePairRow(
  [
    [104, 103],
    [102, 101],
    [100, 99],
    [98, 97],
    [96, 95],
    [94, 93],
    [92, 91],
    [90, 89],
    [88, 87],
  ],
  24,
  24,
  12,
  "bottom",
);

// 2. Baris Kedua Atas (68-82) & Baris Ketiga (67-54)
const row2TopSpots = makePairRow(
  [
    [68, 69],
    [70, 71],
    [72, 73],
    [74, 75],
    [76, 78],
    [79, 80],
    [81, 82],
  ],
  24,
  74,
  12,
  "top",
);

const row2BottomSpots = makePairRow(
  [
    [67, 66],
    [65, 64],
    [63, 62],
    [61, 60],
    [59, 58],
    [57, 56],
    [55, 54],
  ],
  24,
  108,
  12,
  "bottom",
);

// 83-84 & 85-86 di sebelah kanan baris kedua
const row2RightSpots = makePairRow(
  [
    [83, 84],
    [85, 86],
  ],
  528,
  92,
  12,
  "bottom",
);

// 3. Lorong Tengah Atas (53..46) & Lorong Tengah Bawah (45..38) - 8 booth tunggal
const midTopNums = [53, 52, 51, 50, 49, 48, 47, 46];
const midTopSpots: VenueSpot[] = midTopNums.map((num, idx) =>
  makeBooth(num, 82 + idx * 46, 166, "right", 32, 34),
);

const midBottomNums = [45, 44, 43, 42, 41, 40, 39, 38];
const midBottomSpots: VenueSpot[] = midBottomNums.map((num, idx) =>
  makeBooth(num, 82 + idx * 46, 236, "right", 32, 34),
);

// 4. Baris Bawah Blok Atas (37-24)
const row4TopSpots = makePairRow(
  [
    [37, 36],
    [35, 34],
    [33, 32],
    [31, 30],
    [29, 28],
    [27, 26],
    [25, 24],
  ],
  24,
  288,
  12,
  "top",
);

// 5. Baris Bawah Blok Bawah: 3 Sponsor + (22-15) + (14-11)
const sponsorSpots: VenueSpot[] = [1, 2, 3].map((num, idx) => ({
  id: `sponsor-${num}`,
  label: "SPONSOR",
  title: `Booth Sponsor ${num}`,
  category: "sponsor",
  description: "Area booth mitra sponsor resmi UTY Growpath Expo Season 4.",
  x: 24 + idx * (BOOTH_W * 2 + 12),
  y: 322,
  w: BOOTH_W * 2,
  h: BOOTH_H,
  accentSide: "bottom",
}));

const row4BottomSpots = makePairRow(
  [
    [22, 21],
    [20, 19],
    [18, 17],
    [16, 15],
  ],
  24 + 3 * (BOOTH_W * 2 + 12),
  322,
  12,
  "bottom",
);

const row4RightSpots = makePairRow(
  [
    [14, 13],
    [12, 11],
  ],
  528,
  306,
  12,
  "top",
);

// 6. Baris Paling Bawah: 3 Internal + (1-10)
const internalSpots: VenueSpot[] = [1, 2, 3].map((num, idx) => ({
  id: `internal-${num}`,
  label: "INTERNAL",
  title: `Booth Internal ${num}`,
  category: "internal",
  description: "Area khusus tenant & unit kegiatan mahasiswa internal UTY.",
  x: 96 + idx * (BOOTH_W * 2 + 12),
  y: 376,
  w: BOOTH_W * 2,
  h: 30,
  accentSide: "top",
}));

const bottomTenantSpots = makePairRow(
  [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ],
  96 + 3 * (BOOTH_W * 2 + 12),
  376,
  12,
  "top",
);

// 7. Zona Khusus, Panggung, & Fasilitas
const specialZones: VenueSpot[] = [
  {
    id: "workshop",
    label: "Workshop",
    title: "Area Workshop",
    category: "facility",
    description: "Ruang sesi workshop kreatif, talkshow interaktif, dan mentoring bisnis.",
    x: 24,
    y: 166,
    w: 40,
    h: 104,
    accentSide: "full",
    color: "#ea7b2c",
  },
  {
    id: "zona-audience",
    label: "Zona Audience",
    title: "Zona Audience & Panggung",
    category: "stage",
    description: "Area utama pengunjung untuk menyaksikan penampilan band, vokal solo, dan awarding.",
    x: 472,
    y: 160,
    w: 224,
    h: 118,
    accentSide: "full",
    color: "#f7cb4d",
  },
  {
    id: "stage",
    label: "Stage",
    title: "Main Stage",
    category: "stage",
    description: "Panggung utama UTY Growpath Expo Season 4.",
    x: 696,
    y: 160,
    w: 36,
    h: 118,
    accentSide: "full",
    color: "#e13b43",
  },
  {
    id: "backstage",
    label: "Back Stage",
    title: "Back Stage",
    category: "stage",
    description: "Area persiapan pengisi acara, band, dan panitia panggung.",
    x: 732,
    y: 160,
    w: 36,
    h: 118,
    accentSide: "full",
    color: "#ffffff",
  },
  {
    id: "soundman",
    label: "Sound man",
    title: "Booth Soundman",
    category: "stage",
    description: "Pusat kontrol audio dan tata suara panggung utama.",
    x: 696,
    y: 120,
    w: 36,
    h: 36,
    accentSide: "full",
    color: "#e85d75",
  },
  {
    id: "photobox",
    label: "Photo box",
    title: "Area Photobox",
    category: "facility",
    description: "Abadikan momen seru bersama teman di area Photobox Season 4.",
    x: 696,
    y: 24,
    w: 36,
    h: 40,
    accentSide: "full",
    color: "#76b041",
  },
  {
    id: "gate-top",
    label: "Gate",
    title: "Pintu Masuk / Gate Utara",
    category: "gate",
    description: "Akses pintu keluar-masuk pengunjung di sisi utara venue.",
    x: 632,
    y: 2,
    w: 54,
    h: 18,
    accentSide: "full",
    color: "#4a89c8",
  },
  {
    id: "gate-stage",
    label: "Gate",
    title: "Gate Zona Audience",
    category: "gate",
    description: "Akses masuk menuju area penonton panggung utama.",
    x: 472,
    y: 196,
    w: 14,
    h: 46,
    accentSide: "full",
    color: "#4a89c8",
  },
  {
    id: "gate-bottom",
    label: "Gate",
    title: "Pintu Utama / Main Gate",
    category: "gate",
    description: "Pintu masuk utama pengunjung dari area registrasi.",
    x: 24,
    y: 422,
    w: 56,
    h: 18,
    accentSide: "full",
    color: "#4a89c8",
  },
  {
    id: "regist",
    label: "Regist",
    title: "Meja Registrasi & Check-In",
    category: "facility",
    description: "Tempat verifikasi tiket check-in pengunjung sebelum memasuki area expo.",
    x: 10,
    y: 448,
    w: 36,
    h: 34,
    accentSide: "full",
    color: "#8ab84b",
  },
  {
    id: "photobooth",
    label: "Photo booth",
    title: "Area Photobooth",
    category: "facility",
    description: "Spot foto resmi bertema Vistara Navakarya di dekat pintu masuk utama.",
    x: 84,
    y: 448,
    w: 36,
    h: 34,
    accentSide: "full",
    color: "#2d2d2c",
  },
];

export const VENUE_MAP_WIDTH = 788;
export const VENUE_MAP_HEIGHT = 492;

export const venueSpots: VenueSpot[] = [
  ...topRowSpots,
  ...row2TopSpots,
  ...row2BottomSpots,
  ...row2RightSpots,
  ...midTopSpots,
  ...midBottomSpots,
  ...row4TopSpots,
  ...sponsorSpots,
  ...row4BottomSpots,
  ...row4RightSpots,
  ...internalSpots,
  ...bottomTenantSpots,
  ...specialZones,
];
