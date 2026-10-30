# 02 — Arsitektur

Dokumen ini menjelaskan **bagaimana sistem ini disusun** dan **kenapa**.

---

## Stack

| Lapisan | Pilihan | Versi | Alasan singkat |
|---|---|---|---|
| Framework | Next.js App Router | 16.4.3 | Routing berbasis file, server component, build statis |
| UI | React | 19.3.0 | Server Components + Suspense |
| Bahasa | TypeScript `strict` | 5.9.3 | Kesalahan data terdeteksi saat build, bukan saat live |
| Styling | Tailwind CSS | 4.3.3 | Utility-first, tanpa file CSS per komponen |
| Lint | ESLint + `eslint-config-next` | 9.39.5 / 16.4.3 | Aturan Next + React + a11y |
| Build tool | Turbopack | bawaan Next 16 | Build & dev lebih cepat |

---

## Peta tingkat tinggi

```
Pengunjung
    │
    ▼
Next.js App Router (src/app)
    │
    ├─ (public)      → Navbar + Footer + 10 halaman
    ├─ (pendaftaran) → layout minimal + /submission
    │
    ├─ src/data/*.ts   ← konten (build-time, statis)
    └─ src/lib/*       ← util; nanti: akses database (runtime)
```

---

## Strategi rendering

Saat ini **seluruh halaman statis**. Tidak ada data yang diambil saat request,
sehingga situs bisa disajikan dari CDN dan cepat.

| Jenis | Contoh | Cara kerja |
|---|---|---|
| Static | `/`, `/tentang-kami`, `/info-tenant` | Dirender sekali saat `build` |
| Static + dynamic segment | `/tenant/[slug]` | Semua slug di-`generateStaticParams` saat build |
| Partial Prerender | route dengan `generateStaticParams` | Shell statis, konten dinamis di-stream |

Konsekuensinya: **mengubah konten = build ulang**. Itu wajar karena konten
disimpan di repo (lihat [ADR 0003](./adr/0003-konten-hardcode-terpusat.md)).

---

## ⚠️ `cacheComponents` dan `partialPrefetching` aktif

`next.config.ts` mengaktifkan dua fitur yang mengubah perilaku default Next:

```ts
const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: { /* loader Tailwind */ },
};
```

**Sebelum menulis data fetching atau form yang menyimpan data, baca dulu:**

```
node_modules/next/dist/docs/01-app/02-guides/caching-without-cache-components.md
node_modules/next/dist/docs/01-app/02-guides/partial-prefetching.md
node_modules/next/dist/docs/01-app/02-guides/adopting-partial-prefetching.md
```

Ringkasnya: dengan `cacheComponents`, komponen yang mengakses data dinamis
harus dibungkus `Suspense`, dan cache tidak lagi implisit. Ini akan relevan
saat form pendaftaran + database dikerjakan ([ADR 0004](./adr/0004-form-pendaftaran-server-action-database.md)).

---

## Alur data

### Sekarang (statis)

```
src/data/tenant.ts ──► page.tsx ──► HTML (saat build)
```

- Halaman **mengimpor** data dari `src/data/`, tidak menulis array di dalam JSX.
- Tipe data ada di `src/types/content.ts`.
- Menambah entri = menambah objek di array.

### Nanti (pendaftaran)

```
Form (client) ──► Server Action ──► validasi (zod) ──► database
                                                  └──► halaman (admin) panitia
```

Belum diimplementasikan. Rencananya dicatat di ADR 0004.

---

## Batas server vs client

Saat ini **tidak ada satu pun komponen `"use client"`**. Semua halaman adalah
Server Component — lebih ringan, tanpa JavaScript tambahan di browser.

Aturan:

- Default: **Server Component**.
- Tambahkan `"use client"` **hanya** bila butuh state, event handler, atau
  browser API (`useState`, `onClick`, `window`).
- Letakkan `"use client"` sedalam mungkin (komponen daun), bukan di `page.tsx`.

---

## Styling

Tailwind v4 memakai pendekatan **CSS-first**. Tidak ada `tailwind.config.js`.

Token desain didefinisikan di `src/app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
}
```

Karena itu kelas seperti `bg-background`, `text-foreground`, dan `font-sans`
tersedia otomatis. **Gunakan token ini**, bukan `bg-white`/`text-black`, agar
mode gelap (`prefers-color-scheme`) tetap bekerja.

Loader Tailwind dijalankan lewat Turbopack:

```ts
turbopack: {
  rules: {
    "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" },
  },
}
```

---

## Metadata & SEO

Metadata global di `src/app/layout.tsx`:

```ts
title: { default: "UtyGrowPath 2026", template: "%s · UtyGrowPath 2026" }
metadataBase: new URL(siteConfig.url)
```

Setiap halaman mengekspor `metadata` sendiri (judul + deskripsi). Untuk halaman
dinamis, gunakan `generateMetadata`.

`siteConfig.url` masih placeholder (`example.com`) — **wajib diganti** sebelum
deploy produksi, kalau tidak URL absolut (OG image, canonical) akan salah.

---

## Utang teknis yang diketahui

| Item | Dampak | Rencana |
|---|---|---|
| `/dokumentasi` masih menulis array di dalam file halaman | Tidak konsisten dengan aturan `src/data` | Pindahkan ke `src/data/dokumentasi.ts` |
| Belum ada halaman admin | Data pendaftar belum bisa dibaca panitia | Ikut PR database |
| Belum ada CI | PR tidak tervalidasi otomatis | PR berikutnya |
| ESLint 9 sudah EOL | Tidak ada patch keamanan | Tunggu dukungan `eslint-config-next` (ADR 0002) |

Daftar lengkap ada di [09 — Handover](./09-handover.md).
