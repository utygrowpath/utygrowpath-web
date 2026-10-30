# 09 — Handover

Dokumen untuk **pengurus tahun berikutnya**. Baca ini lebih dulu sebelum
mengubah apa pun.

> Prinsip: kepengurusan berganti, sistem harus tetap hidup. Semua yang hanya
> dipegang satu orang adalah risiko.

---

## 1. Baca dulu (30 menit)

| Urutan | Dokumen | Kenapa |
|---|---|---|
| 1 | [01 — Mulai Cepat](./01-mulai-cepat.md) | Bisa menjalankan proyek |
| 2 | [02 — Arsitektur](./02-arsitektur.md) | Paham susunannya |
| 3 | [03 — Struktur Folder](./03-struktur-folder.md) | Tahu menaruh file |
| 4 | [adr/](./adr/) | Tahu **kenapa** keputusan diambil |

Jangan mengubah keputusan yang sudah tercatat di ADR tanpa membaca alasannya.

---

## 2. Checklist kepemilikan akun

Isi tabel ini **sebelum** kepengurusan lama bubar. Minimal 2 pemegang akses
untuk setiap baris.

| Aset | Dipegang siapa | Pemegang cadangan | Status transfer |
|---|---|---|---|
| GitHub Organization `utygrowpath` | | | ☐ |
| GitHub repo `utygrowpath-web` | | | ☐ |
| Vercel Team/Project | | | ☐ |
| Domain & akun registrar | | | ☐ |
| DNS management | | | ☐ |
| Email resmi (`halo@...`) | | | ☐ |
| Database (nanti) | | | ☐ |
| Analytics (bila dipakai) | | | ☐ |
| Akun media sosial | | | ☐ |

> ⚠️ Jangan menyerahkan akses lewat berbagi password. Gunakan **undang sebagai
> member/owner** di platform masing-masing, lalu cabut akses akun lama.

---

## 3. Yang wajib diganti setiap tahun

| Item | Lokasi | Contoh |
|---|---|---|
| Tahun event | `src/config/site.ts` → `year` | `2026` → `2027` |
| Tagline & deskripsi | `src/config/site.ts` | — |
| Email & media sosial | `src/config/site.ts` → `email`, `socials` | — |
| Daftar tenant | `src/data/tenant.ts` | kosongkan, isi baru |
| Artikel inspirasi | `src/data/sudut-inspirasi.ts` | arsipkan yang lama |
| Pengumuman | `src/data/info.ts` | — |
| Susunan panitia | `src/data/panitia.ts` | — |
| Galeri | `src/app/(public)/dokumentasi/page.tsx` + `public/images/<tahun>/` | — |
| Foto tenant | `public/images/<tahun>/tenant/` | buat folder tahun baru |

### Prosedur ganti tahun (aman)

1. Buat branch `chore/arsip-2026` → pindahkan konten tahun lalu ke
   `public/images/2026/` (sudah) dan **biarkan** data lama di git history.
2. Buat branch `feat/konten-2027`:
   - ubah `siteConfig.year`
   - kosongkan `tenants`, `inspirationPosts`, `infoPosts`
   - isi `committee` dengan panitia baru
3. Update `docs/` bila ada perubahan alur.
4. Merge setelah website tahun baru siap — jangan sebelum.

> Jangan menghapus folder `public/images/2026/` selama masih ada kemungkinan
> dibutuhkan untuk arsip. Ukuran repo masih wajar.

---

## 4. Timeline serah terima

| Kapan | Yang dilakukan |
|---|---|
| **H-30 sebelum acara** | Pastikan 2 owner di semua akun; dokumentasi terbaru |
| **H-7** | Freeze fitur; hanya perbaikan konten & bug |
| **H+7 setelah acara** | Arsipkan data pendaftar; tag rilis `v2026.1` |
| **H+30** | Serah terima resmi: undang pengurus baru, cabut akses lama |
| **Awal kepengurusan baru** | Ganti tahun di `siteConfig`, mulai konten baru |

---

## 5. Data pendaftar (setelah database aktif)

Saat form pendaftaran sudah memakai database, **wajib** dilakukan sebelum
akun lama dicabut:

1. **Export** seluruh data ke CSV.
2. Simpan di drive organisasi (bukan repo, bukan laptop pribadi).
3. Catat siapa yang memegang salinan dan sampai kapan disimpan.
4. Hapus data yang tidak lagi diperlukan sesuai kebijakan privasi.
5. Rotasi password database.

> Data pendaftar berisi informasi pribadi. Jangan pernah di-commit ke repo,
> jangan dikirim lewat grup chat publik.

---

## 6. Utang teknis yang diketahui

Per kondisi terakhir:

| Item | Dampak | Prioritas |
|---|---|---|
| `/dokumentasi` masih menulis array di dalam file halaman | Tidak konsisten dengan aturan `src/data` | Rendah |
| Halaman admin belum ada | Data pendaftar belum bisa dibaca panitia | Tinggi (saat DB) |
| CI belum ada | PR tidak tervalidasi otomatis | Tinggi |
| ESLint 9 sudah EOL sejak 2026-08-06 | Tidak ada patch keamanan | Sedang |
| Belum ada test otomatis | Regresi hanya terdeteksi manual | Rendah |
| `siteConfig.url` masih placeholder | OG/canonical salah sebelum diganti | Tinggi (saat deploy) |

Lihat juga [ADR 0002](./adr/0002-eslint-9-sampai-next-mendukung-10.md) untuk
alasan ESLint belum dinaikkan.

---

## 7. Keputusan yang sudah dikunci (jangan diubah tanpa ADR baru)

| Keputusan | Alasan | ADR |
|---|---|---|
| App Router + route group | Konvensi Next 16, layout terpisah | 0001 |
| ESLint 9.39.5 | Ekosistem Next belum mendukung v10 | 0002 |
| Konten hardcode terpusat di `src/data` | Tanpa CMS, tapi tetap rapi | 0003 |
| Form → Server Action + database | Data milik sendiri, fleksibel | 0004 |

Kalau ingin mengubah salah satunya: buat ADR baru yang menjelaskan konteks dan
konsekuensinya, jangan diam-diam mengganti.

---

## 8. Kontak darurat

| Peran | Nama | Kontak |
|---|---|---|
| Penanggung jawab web | | |
| Owner GitHub cadangan | | |
| Pembina / dosen | | |
| Vendor domain | | |

Minimal **dua** orang yang bisa deploy dan mengakses repo saat acara berlangsung.

---

## 9. Pesan untuk pengurus berikutnya

Beberapa hal yang biasanya baru disadari setelah terlambat:

1. **Jangan menunggu sampai acara untuk mencoba deploy.** Deploy pertama sering
   memunculkan masalah domain, bukan masalah kode.
2. **Dokumentasi yang tidak diperbarui lebih berbahaya daripada tidak ada
   dokumentasi** — karena menyesatkan. Update di PR yang sama.
3. **Satu orang memegang semua akses = risiko mati.** Dua owner, selalu.
4. **Konten lebih sering berubah daripada kode.** Itu sebabnya
   [05 — Panduan Konten](./05-panduan-konten.md) ditulis untuk non-developer.
5. Kalau bingung, baca ADR sebelum "memperbaiki" sesuatu. Banyak keputusan
   terlihat aneh sampai alasannya diketahui.
