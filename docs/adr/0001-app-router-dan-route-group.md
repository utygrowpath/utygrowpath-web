# ADR 0001 — App Router + route group

- **Status:** Diterima
- **Tanggal:** 2026-10-30

## Konteks

Website ini punya 10 halaman publik dengan kebutuhan tampilan yang berbeda:

- Halaman informasi: butuh Navbar + Footer lengkap.
- Halaman pendaftaran: butuh tampilan fokus, tanpa navigasi yang mengalihkan.
- Nanti: halaman panitia (admin) yang butuh proteksi autentikasi.

Kami memakai Next.js 16, yang menjadikan **App Router** sebagai konvensi utama.

## Keputusan

1. Memakai **App Router** (`src/app/`), bukan Pages Router.
2. Mengelompokkan halaman dengan **route group**:
   - `(public)` → Navbar + Footer
   - `(pendaftaran)` → layout minimal
   - `(admin)` → menyusul, dengan proteksi
3. Nama folder route memakai **Bahasa Indonesia** (`/tentang-kami`,
   `/sudut-inspirasi`), kecuali `/submission` yang sudah menjadi istilah baku
   di dokumen event.

## Konsekuensi

### Positif

- Satu layout per kelompok halaman, tanpa duplikasi Navbar/Footer.
- URL tidak terpengaruh nama group — `(public)/page.tsx` tetap `/`.
- Menambah area admin nanti tidak mengganggu halaman publik.
- Server Component default → JavaScript di browser minimal.

### Negatif / risiko

- Nama folder dalam kurung membingungkan developer baru → dijelaskan di
  [03 — Struktur Folder](../03-struktur-folder.md).
- `LayoutProps`/`PageProps` adalah tipe hasil generate; `tsc` di checkout bersih
  butuh `next typegen` lebih dulu. Karena itu tipe props ditulis eksplisit.
- Route group tidak memvalidasi akses — `(admin)` **wajib** punya proteksi
  sendiri, bukan hanya "disembunyikan".

## Alternatif yang dipertimbangkan

| Alternatif | Alasan tidak dipilih |
|---|---|
| Pages Router | Bukan arah Next 16; Server Component terbatas |
| Satu layout untuk semua halaman | Halaman pendaftaran butuh fokus berbeda |
| Prefix URL (`/publik/...`) | URL jadi lebih panjang tanpa manfaat |
| Bahasa Inggris untuk URL | Audiens utama berbahasa Indonesia |
