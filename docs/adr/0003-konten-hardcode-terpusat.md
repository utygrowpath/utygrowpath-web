# ADR 0003 — Konten hardcode tapi terpusat di `src/data`

- **Status:** Diterima
- **Tanggal:** 2026-10-30

## Konteks

Panitia perlu mengubah teks, daftar tenant, artikel, pengumuman, dan susunan
panitia. Ada tiga pilihan umum:

1. **CMS** (Sanity/Contentful/Strapi) — ramah non-teknis, tapi butuh akun,
   biaya, dan setup lebih lama.
2. **MDX di repo** — konten sebagai file `.mdx`, tetap butuh Git.
3. **Hardcode di komponen** — paling cepat, tapi setiap perubahan teks harus
   menyisir banyak file.

Tim memilih pendekatan **tanpa CMS** (hardcode), dengan alasan kesederhanaan
dan tidak adanya biaya operasional tahunan.

## Keputusan

Hardcode **diperbolehkan**, tetapi **tidak boleh tersebar di JSX**.

Semua konten disimpan sebagai data TypeScript bertipe:

```
src/data/tenant.ts            → Tenant[]
src/data/sudut-inspirasi.ts   → InspirationPost[]
src/data/info.ts              → InfoPost[]
src/data/panitia.ts           → CommitteeMember[]
src/types/content.ts          → definisi tipe
```

Ditambah `src/config/site.ts` untuk identitas event (nama, tahun, navigasi,
email, media sosial).

## Konsekuensi

### Positif

- Tidak ada biaya dan tidak ada akun pihak ketiga yang harus diwariskan.
- Konten ikut ter-version: setiap perubahan tercatat dan bisa di-revert.
- TypeScript menandai data yang bentuknya salah saat `build`.
- Menambah tenant/artikel = menambah objek, **tanpa** membuat file route baru
  (berkat `generateStaticParams`).
- Ganti tahun cukup mengedit satu file (`siteConfig.year`).

### Negatif / risiko

- **Panitia non-teknis tidak bisa mengubah konten sendiri** tanpa lewat Git/PR.
  Mitigasi: [05 — Panduan Konten](../05-panduan-konten.md) menyediakan alur
  edit lewat antarmuka web GitHub.
- Setiap perubahan konten memicu **build ulang** (tidak ada preview instan di
  produksi).
- Data besar (ratusan tenant) akan membuat file panjang dan build lebih lambat.
- Tidak ada penjadwalan publikasi otomatis (konten tayang saat deploy).

## Kapan keputusan ini perlu ditinjau ulang

Buat ADR baru bila salah satu terjadi:

- Panitia perlu mengubah konten **lebih dari sekali seminggu**.
- Jumlah entri melebihi ~100 dan file data mulai sulit dirawat.
- Muncul kebutuhan multi-bahasa atau penjadwalan konten.
- Ada anggaran untuk CMS.

## Alternatif yang dipertimbangkan

| Alternatif | Alasan tidak dipilih (saat ini) |
|---|---|
| Headless CMS | Biaya, akun tambahan, setup lebih lama |
| MDX di repo | Manfaat kecil dibanding data `.ts` untuk konten terstruktur |
| Hardcode di JSX | Perubahan tersebar, sulit dirawat, rawan tidak konsisten |
| Google Sheets sebagai sumber | Rapuh: butuh kredensial, format mudah rusak |
