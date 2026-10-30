# 03 — Struktur Folder

Tujuan: **tidak ada keraguan** saat menaruh file baru.

---

## Pohon folder

```
utygrowpath-web/
├─ .github/                     # CI, CODEOWNERS, template PR/issue, Dependabot
├─ docs/                        # dokumentasi (file yang sedang Anda baca)
│  └─ adr/                      # catatan keputusan arsitektur
├─ public/                      # aset statis, diakses lewat URL /...
│  └─ images/
│     └─ 2026/                  # dipisah per tahun
│        └─ tenant/
├─ src/
│  ├─ app/                      # ROUTING — hanya file konvensi Next
│  │  ├─ layout.tsx             # root layout (<html>, font, metadata)
│  │  ├─ not-found.tsx          # halaman 404
│  │  ├─ globals.css            # Tailwind + token desain
│  │  ├─ (public)/              # route group: halaman publik
│  │  │  ├─ layout.tsx          # Navbar + Footer
│  │  │  ├─ page.tsx            # /
│  │  │  ├─ tentang-kami/page.tsx
│  │  │  ├─ sudut-inspirasi/
│  │  │  │  ├─ page.tsx         # /sudut-inspirasi
│  │  │  │  └─ [slug]/page.tsx  # /sudut-inspirasi/<slug>
│  │  │  ├─ info-tenant/page.tsx
│  │  │  ├─ info/
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ [slug]/page.tsx
│  │  │  ├─ tenant/[slug]/page.tsx
│  │  │  ├─ tim-kami/page.tsx
│  │  │  ├─ panitia/page.tsx
│  │  │  └─ dokumentasi/page.tsx
│  │  └─ (pendaftaran)/         # route group: alur formulir
│  │     ├─ layout.tsx          # layout minimal (tanpa navbar penuh)
│  │     └─ submission/page.tsx # /submission
│  │
│  ├─ components/               # UI yang dipakai ulang
│  │  ├─ ui/                    # primitif: ButtonLink
│  │  ├─ layout/                # Container, SiteHeader, SiteFooter
│  │  ├─ sections/              # blok halaman: PageHero
│  │  └─ forms/                 # (menyusul) form pendaftaran
│  │
│  ├─ config/
│  │  └─ site.ts                # identitas event: nama, tahun, navigasi
│  ├─ data/                     # KONTEN
│  │  ├─ tenant.ts
│  │  ├─ sudut-inspirasi.ts
│  │  ├─ info.ts
│  │  └─ panitia.ts
│  ├─ lib/                      # util & (nanti) akses database
│  │  └─ format-date.ts
│  └─ types/
│     └─ content.ts             # tipe Tenant, InspirationPost, InfoPost, CommitteeMember
│
├─ next.config.ts
├─ eslint.config.mjs
├─ tsconfig.json
├─ .npmrc / .nvmrc
└─ package.json
```

---

## "Saya mau menambah X — taruh di mana?"

| Yang ingin dibuat | Lokasi | Contoh |
|---|---|---|
| Halaman baru dengan URL baru | `src/app/(public)/<slug>/page.tsx` | `src/app/(public)/faq/page.tsx` |
| Halaman dengan detail per item | `src/app/(public)/<slug>/[slug]/page.tsx` | sudah ada di `tenant/[slug]` |
| Komponen yang dipakai di banyak halaman | `src/components/<kategori>/` | `components/ui/card.tsx` |
| Bagian besar satu halaman (Hero, Timeline) | `src/components/sections/` | `components/sections/timeline.tsx` |
| Formulir | `src/components/forms/` | `components/forms/submission-form.tsx` |
| Teks/data konten | `src/data/` | `src/data/faq.ts` |
| Tipe data baru | `src/types/` | `src/types/content.ts` |
| Fungsi bantu (format, hitung) | `src/lib/` | `src/lib/format-currency.ts` |
| Gambar/foto | `public/images/<tahun>/<kategori>/` | `public/images/2026/dokumentasi/` |
| File yang **tidak boleh** jadi URL | folder berawalan `_` | `src/app/(public)/_components/` |
| Dokumentasi | `docs/` | `docs/10-faq-developer.md` |
| Keputusan arsitektur | `docs/adr/` | `docs/adr/0005-pakai-supabase.md` |

---

## Aturan penamaan

| Jenis | Gaya | Contoh |
|---|---|---|
| Folder route (URL) | kebab-case | `sudut-inspirasi`, `tentang-kami` |
| Komponen React | PascalCase | `SiteHeader.tsx`, `PageHero.tsx` |
| File non-komponen | kebab-case | `format-date.ts`, `site.ts` |
| Variabel & fungsi | camelCase | `getTenantBySlug` |
| Tipe & interface | PascalCase | `Tenant`, `CommitteeMember` |
| Konstanta | camelCase (default) | `siteConfig`, `tenants` |

**URL memakai Bahasa Indonesia** karena audiensnya berbahasa Indonesia.
Pengecualian: `/submission` (istilah yang sudah dipakai di dokumen event).

---

## Aturan teknis yang sering bikin bingung

### Route group `(nama)` tidak mengubah URL

```
src/app/(public)/tentang-kami/page.tsx  →  /tentang-kami
src/app/(pendaftaran)/submission/page.tsx →  /submission
```

Kurung **tidak** muncul di URL. Gunanya hanya mengelompokkan layout.

### Folder `_private` tidak bisa diakses lewat URL

Awali dengan `_` untuk file bantu yang harus tinggal dekat halamannya:

```
src/app/(public)/tenant/_components/tenant-card.tsx   → bukan route
```

### Git tidak menyimpan folder kosong

Jangan membuat folder "untuk nanti" tanpa file di dalamnya — folder itu tidak
akan ikut ter-commit dan akan membingungkan orang lain. Buat folder saat file
pertamanya benar-benar ada.

### `src/app/` hanya untuk file konvensi Next

`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`,
`route.ts`. Komponen biasa **jangan** ditaruh di sini — letakkan di
`src/components/`.

---

## Yang tidak boleh ada di repo

| ❌ | Alasan |
|---|---|
| `.env`, `.env.local` | Berisi kredensial (sudah di-`.gitignore`) |
| `node_modules/`, `.next/` | Hasil generate, besar |
| File desain mentah (`.psd`, `.ai`) | Besar; simpan di drive terpisah |
| Video mentah | Gunakan YouTube/Drive, embed |
| `next-env.d.ts` | Di-generate ulang oleh Next |
