# ADR 0004 — Form pendaftaran: Server Action + database

- **Status:** **Diusulkan** (belum diimplementasikan)
- **Tanggal:** 2026-10-30

> ADR ini mencatat arah yang **disepakati**, bukan pekerjaan yang sudah selesai.
> Halaman `/submission` saat ini masih placeholder.

## Konteks

Halaman pendaftaran perlu menerima data peserta dan menyimpannya agar dapat
dibaca panitia. Pilihan yang dipertimbangkan:

1. Form eksternal (Tally / Google Form) — tautan keluar dari website.
2. Server Action + Google Sheets.
3. Server Action + database (Postgres).

Tim memilih opsi 3 dengan alasan data sepenuhnya milik sendiri dan fleksibel
untuk kebutuhan seleksi/verifikasi.

## Keputusan

Formulir dibangun di dalam aplikasi:

```
src/app/(pendaftaran)/submission/page.tsx   → halaman form
src/components/forms/submission-form.tsx     → UI form (client component)
src/lib/validation/submission.ts             → skema validasi (zod)
src/lib/actions/submission.ts                → Server Action ("use server")
src/db/schema.ts                             → definisi tabel
src/db/index.ts                              → koneksi database
drizzle/                                     → migrasi (di-commit)
```

Konsekuensi arsitektural yang mengikuti:

- Diperlukan **halaman admin** `(admin)/dashboard/pendaftar` untuk membaca data.
- Diperlukan **autentikasi** admin (disarankan Google OAuth + allowlist email
  panitia, agar akses otomatis dicabut saat kepengurusan berganti).
- Diperlukan **proteksi spam** (honeypot minimal, Turnstile ideal).
- Diperlukan **environment variable** (`DATABASE_URL`, dst.) yang disimpan di
  Vercel — tidak di repo.
- Diperlukan **prosedur export/backup** data sebelum serah terima.

## Konsekuensi

### Positif

- Data milik organisasi, tidak bergantung pada pihak ketiga.
- Bisa divalidasi ketat di server (bukan hanya di browser).
- Bisa dikembangkan: status seleksi, verifikasi berkas, pengumuman lolos.

### Negatif / risiko

- Website tidak lagi sepenuhnya statis → butuh runtime Node (Vercel mendukung).
- Menambah permukaan keamanan: validasi, rate limit, auth, kebocoran data.
- Bertentangan dengan semangat "sederhana" pada ADR 0003 — beban perawatan naik.
- Data pribadi peserta menuntut kebijakan penyimpanan & penghapusan.
- `cacheComponents: true` di `next.config.ts` mengubah cara caching data dinamis;
  wajib membaca panduan caching versi Next ini sebelum menulis query.

## Belum diputuskan (perlu ADR lanjutan)

| Pertanyaan | Opsi |
|---|---|
| Penyedia database | Supabase / Neon / Postgres lokal saat dev |
| ORM & migrasi | Drizzle (disarankan) / Prisma |
| Metode login admin | Google OAuth + allowlist / password tunggal |
| Proteksi spam | Turnstile / honeypot saja |

## Alternatif yang dipertimbangkan

| Alternatif | Alasan tidak dipilih |
|---|---|
| Google Form / Tally | Data di luar kendali; branding keluar dari website |
| Server Action + Google Sheets | Format mudah rusak; tidak cocok untuk seleksi |
| Tanpa penyimpanan (email saja) | Rawan hilang; tidak bisa direkap otomatis |

## Prasyarat sebelum implementasi

- [ ] CI aktif (lint + typecheck + build)
- [ ] `.env.example` tersedia
- [ ] Keputusan penyedia database & ORM
- [ ] Rencana auth admin
- [ ] Rencana backup & kebijakan privasi data
