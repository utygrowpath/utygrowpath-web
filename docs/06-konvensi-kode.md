# 06 — Konvensi Kode

Aturan agar kode tetap konsisten saat dikerjakan banyak orang dan dilanjutkan
tahun berikutnya.

---

## Bahasa & tipe

- **TypeScript strict** (`"strict": true` di `tsconfig.json`).
- **Jangan** memakai `any`. Kalau terpaksa, gunakan `unknown` lalu persempit.
- Tipe data konten didefinisikan di `src/types/content.ts`.
- Props komponen ditulis inline atau sebagai `type` di atas komponen.

```tsx
// ✅
type CardProps = { title: string; description?: string };

// ❌
function Card(props: any) { ... }
```

---

## Server vs Client Component

Default-nya **Server Component**. Tambahkan `"use client"` hanya bila butuh:

- `useState` / `useReducer`
- `onClick`, `onChange`, dan event handler lain
- `useEffect`, `window`, `document`, `localStorage`
- library yang memakai hook browser

```tsx
"use client";

import { useState } from "react";
```

Aturan penempatan:

| ✅ | ❌ |
|---|---|
| Di komponen daun (`components/forms/...`) | Di `page.tsx` seluruh halaman |
| Hanya file yang benar-benar butuh | Menambahkan ke semua file "supaya aman" |

Saat ini **tidak ada** file dengan `"use client"`. Jaga agar tetap minimal.

---

## Import

Selalu pakai alias `@/` (memetakan ke `src/`):

```tsx
// ✅
import { Container } from "@/components/layout/container";
import { tenants } from "@/data/tenant";

// ❌
import { Container } from "../../../components/layout/container";
```

Urutan import:

1. `next/*` dan `react`
2. library eksternal
3. `@/` internal
4. aset relatif (`./`)

---

## Penamaan file & komponen

| Jenis | Gaya | Contoh |
|---|---|---|
| Komponen | PascalCase | `SiteHeader.tsx` |
| File util | kebab-case | `format-date.ts` |
| Folder | kebab-case | `sudut-inspirasi` |
| Fungsi | camelCase, kata kerja | `getTenantBySlug` |

Satu file = satu komponen utama. Kalau satu komponen butuh banyak file bantu,
jadikan folder:

```
components/sections/timeline/
├─ timeline.tsx
├─ timeline-item.tsx
└─ index.ts
```

---

## Data & konten

**Jangan** menulis array data di dalam JSX:

```tsx
// ❌
const items = [{ name: "A" }, { name: "B" }];

// ✅
import { tenants } from "@/data/tenant";
```

Aturan:

- Data konten → `src/data/*.ts`
- Tipe data → `src/types/`
- Identitas event (nama, tahun, navigasi) → `src/config/site.ts`
- Jangan ada tahun hardcode di komponen; ambil dari `siteConfig.year`

---

## Styling

Tailwind utility-first, memakai **token** yang sudah didefinisikan:

| ✅ Gunakan | ❌ Hindari |
|---|---|
| `bg-background`, `text-foreground` | `bg-white`, `text-black` |
| `text-foreground/60` untuk teks sekunder | `text-gray-500` |
| `font-sans`, `font-mono` | `font-family` manual |

Alasan: token mengikuti mode gelap otomatis (`prefers-color-scheme`).

Pedoman lain:

- Utamakan utility class; buat komponen bila pola terulang 3×.
- Hindari `style={{ ... }}` kecuali nilainya benar-benar dinamis.
- Gunakan `gap-*` untuk jarak antar elemen, bukan `margin` pada anak.
- Kelas panjang: susun dengan urutan layout → spacing → tipografi → warna.

---

## Aksesibilitas (a11y)

Wajib, bukan opsional — `eslint-plugin-jsx-a11y` akan menandai pelanggaran.

- Setiap `<Image>` / `<img>` punya `alt` yang bermakna
  (kosongkan `alt=""` hanya untuk gambar dekoratif).
- Hierarki heading: satu `<h1>` per halaman, lalu `h2`, `h3` berurutan.
- Elemen interaktif memakai `<button>` atau `<Link>` — bukan `<div onClick>`.
- `nav` diberi `aria-label` bila ada lebih dari satu navigasi.
- Teks link harus deskriptif: hindari "klik di sini".

---

## Gambar

Gunakan `next/image`, bukan `<img>`:

```tsx
<Image src="/images/2026/tenant/kopi.jpg" alt="Foto tenant Kopi Rakyat"
       width={640} height={360} className="h-40 w-full object-cover" />
```

- **SVG tidak didukung** oleh optimizer Next secara default. Pakai JPG/PNG/WebP.
- Selalu isi `width` dan `height` (mencegah layout shift).
- Untuk gambar di atas layar (hero), tambahkan `priority`.

---

## Format tanggal

Gunakan helper, jangan format manual:

```tsx
import { formatDate } from "@/lib/format-date";

formatDate("2026-08-17"); // "17 Agustus 2026"
```

Data tanggal selalu disimpan format ISO `YYYY-MM-DD`.

---

## Metadata

Setiap halaman mengekspor `metadata`:

```tsx
export const metadata: Metadata = {
  title: "Nama Halaman",        // template menambahkan "· UtyGrowPath 2026"
  description: "Deskripsi singkat untuk mesin pencari.",
};
```

Halaman dinamis memakai `generateMetadata` (lihat `tenant/[slug]/page.tsx`).

---

## Yang dilarang

| ❌ | Alasan |
|---|---|
| `console.log` tertinggal | Berisik di produksi |
| `any` | Menghilangkan manfaat TypeScript |
| Kredensial di kode | Akan bocor di repo publik |
| Query database di komponen | Tidak bisa di-cache, sulit diuji |
| `useEffect` untuk data fetching | Gunakan Server Component |
| Mengubah `slug` yang sudah live | Link rusak |
| Menonaktifkan aturan ESLint tanpa alasan | `// eslint-disable-next-line` harus disertai komentar alasan |

---

## Sebelum commit

```bash
npm run lint
npx tsc --noEmit
npm run build
```
