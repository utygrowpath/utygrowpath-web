# 04 — Peta Routing

Daftar lengkap URL, file yang menghasilkannya, dan sumber datanya.
Gunakan tabel ini saat ingin **mengubah** halaman tertentu.

---

## Peta URL

| URL | File | Jenis | Sumber data |
|---|---|---|---|
| `/` | `src/app/(public)/page.tsx` | Static | `src/config/site.ts` |
| `/tentang-kami` | `src/app/(public)/tentang-kami/page.tsx` | Static | teks di file |
| `/sudut-inspirasi` | `src/app/(public)/sudut-inspirasi/page.tsx` | Static | `src/data/sudut-inspirasi.ts` |
| `/sudut-inspirasi/<slug>` | `src/app/(public)/sudut-inspirasi/[slug]/page.tsx` | Static (dari `generateStaticParams`) | `src/data/sudut-inspirasi.ts` |
| `/tenant/<slug>` | `src/app/(public)/tenant/[slug]/page.tsx` | Static (dari `generateStaticParams`) | `src/data/tenant.ts` |
| `/tim-kami` | `src/app/(public)/tim-kami/page.tsx` | Static | `src/data/panitia.ts` (`isCore`) |
| `/panitia` | `src/app/(public)/panitia/page.tsx` | Static | `src/data/panitia.ts` (semua) |
| `/dokumentasi` | `src/app/(public)/dokumentasi/page.tsx` | Static | `src/data/dokumentasi.ts` |
| `/info` | `src/app/(public)/info/page.tsx` | Static | `src/data/info.ts` |
| `/info/<slug>` | `src/app/(public)/info/[slug]/page.tsx` | Static (dari `generateStaticParams`) | `src/data/info.ts` |
| `/pendaftaran/umum` | `src/app/(public)/pendaftaran/umum/page.tsx` | Static | `src/data/pendaftaran-umum.ts` |
| `/pendaftaran/mahasiswa` | `src/app/(public)/pendaftaran/mahasiswa/page.tsx` | Static | `src/data/pendaftaran-mahasiswa.ts` |
| `/submission` | `src/app/(pendaftaran)/submission/page.tsx` | Static | placeholder (form belum aktif) |
| `/404` | `src/app/not-found.tsx` | Static | — |

---

## Layout bertingkat

```
src/app/layout.tsx                  <html>, font, metadata global
│
├─ (public)/layout.tsx              SiteHeader + SiteFooter
│  ├─ page.tsx                      /
│  ├─ tentang-kami/page.tsx
│  ├─ sudut-inspirasi/page.tsx
│  └─ ...
│
└─ (pendaftaran)/layout.tsx         header minimal + "Kembali ke beranda"
   └─ submission/page.tsx
```

`layout.tsx` membungkus semua halaman di bawahnya. Menambah item navigasi
dilakukan di `primaryLinks` pada `src/components/layout/site-header.tsx`.

---

## Route group

| Group | URL prefix | Layout | Isi |
|---|---|---|---|
| `(public)` | tidak ada | Navbar + Footer | Halaman informasi |
| `(pendaftaran)` | tidak ada | Minimal | Alur formulir |

Nama dalam kurung **tidak muncul** di URL. Kalau nanti perlu area panitia,
tambahkan `(admin)` dengan layout dan proteksi sendiri — **jangan** membuat
halaman admin tanpa autentikasi.

---

## Menambah halaman baru

Contoh: halaman **FAQ** di `/faq`.

1. Buat file:
   ```
   src/app/(public)/faq/page.tsx
   ```
2. Isi minimal:
   ```tsx
   import type { Metadata } from "next";
   import { PageHero } from "@/components/sections/page-hero";
   import { Container } from "@/components/layout/container";

   export const metadata: Metadata = {
     title: "FAQ",
     description: "Pertanyaan yang sering diajukan.",
   };

   export default function FaqPage() {
     return (
       <>
         <PageHero eyebrow="FAQ" title="Pertanyaan yang sering diajukan" />
         <Container className="py-16">
           {/* isi */}
         </Container>
       </>
     );
   }
   ```
3. Tambahkan ke `primaryLinks` di `src/components/layout/site-header.tsx` (kalau perlu muncul di navbar).
4. Verifikasi:
   ```bash
   npm run dev     # buka /faq
   npm run build   # pastikan route muncul di output
   ```

---

## Menambah item dinamis

Contoh: menambah tenant baru.

1. Buka `src/data/tenant.ts`.
2. Tambahkan objek ke array `tenants`:
   ```ts
   {
     slug: "nama-tenant-baru",
     name: "Nama Tenant Baru",
     category: "Kuliner",
     description: "Deskripsi singkat.",
     image: "/images/2026/tenant/nama-tenant-baru.jpg",
   }
   ```
3. Simpan gambar di `public/images/2026/tenant/`.
4. Halaman `/tenant/nama-tenant-baru` otomatis ada — tidak perlu membuat file.

Aturan `slug`:

- huruf kecil semua
- tanpa spasi (pakai `-`)
- unik, tidak boleh sama dengan tenant lain
- **jangan diubah** setelah dipublikasikan (link yang beredar akan rusak)

---

## Menghapus halaman

1. Hapus foldernya.
2. Hapus juga entri di `primaryLinks` (`src/components/layout/site-header.tsx`)
   dan link di `SiteFooter` bila ada.
3. Cari referensi yang tersisa:
   ```bash
   git grep "nama-halaman"
   ```
4. `npm run build` — kalau ada link rusak, TypeScript/ESLint akan menandai.
