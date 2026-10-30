# Dokumentasi UtyGrowPath

Pintu masuk semua dokumentasi. Baca sesuai peran Anda.

---

## Mulai dari mana?

| Saya... | Baca ini |
|---|---|
| Developer baru / baru pegang repo | [01 — Mulai Cepat](./01-mulai-cepat.md) → [02 — Arsitektur](./02-arsitektur.md) → [03 — Struktur Folder](./03-struktur-folder.md) |
| Mau menambah/mengubah halaman | [04 — Peta Routing](./04-peta-routing.md) |
| Panitia yang mengubah teks atau foto | [05 — Panduan Konten](./05-panduan-konten.md) |
| Mau menulis kode | [06 — Konvensi Kode](./06-konvensi-kode.md) |
| Mau membuat PR | [07 — Git Workflow](./07-git-workflow.md) |
| Mau deploy / urus domain | [08 — Deployment](./08-deployment.md) |
| Pengurus tahun berikutnya | [09 — Handover](./09-handover.md) |
| Penasaran kenapa keputusan teknis diambil | [adr/](./adr/) |

---

## Daftar isi

### Untuk developer

| # | Dokumen | Isi |
|---|---|---|
| 01 | [Mulai Cepat](./01-mulai-cepat.md) | Prasyarat, instalasi, perintah, troubleshooting |
| 02 | [Arsitektur](./02-arsitektur.md) | Stack, strategi rendering, alur data, styling |
| 03 | [Struktur Folder](./03-struktur-folder.md) | Peta folder + aturan "taruh file di mana" |
| 04 | [Peta Routing](./04-peta-routing.md) | URL → file → sumber data |
| 06 | [Konvensi Kode](./06-konvensi-kode.md) | Penamaan, server/client component, aksesibilitas |
| 07 | [Git Workflow](./07-git-workflow.md) | Branch, commit, PR, rollback |

### Untuk non-developer

| # | Dokumen | Isi |
|---|---|---|
| 05 | [Panduan Konten](./05-panduan-konten.md) | Ganti teks, tambah tenant, tambah pengumuman, ganti foto |

### Untuk operasional & serah terima

| # | Dokumen | Isi |
|---|---|---|
| 08 | [Deployment](./08-deployment.md) | Vercel, environment variable, domain, rollback |
| 09 | [Handover](./09-handover.md) | Checklist serah terima, kepemilikan akun, agenda tahunan |

### Keputusan teknis (ADR)

| # | Keputusan | Status |
|---|---|---|
| 0001 | [App Router + route group](./adr/0001-app-router-dan-route-group.md) | Diterima |
| 0002 | [ESLint 9.39.5 meski sudah EOL](./adr/0002-eslint-9-sampai-next-mendukung-10.md) | Diterima |
| 0003 | [Konten hardcode tapi terpusat di `src/data`](./adr/0003-konten-hardcode-terpusat.md) | Diterima |
| 0004 | [Form pendaftaran: Server Action + database](./adr/0004-form-pendaftaran-server-action-database.md) | Diusulkan |
| 0005 | [TypeScript ditahan di 5.x](./adr/0005-typescript-ditahan-di-5x.md) | Diterima |

---

## Konvensi dokumentasi ini

- **Bahasa Indonesia**, kecuali istilah teknis yang lazim berbahasa Inggris.
- Nama file: `NN-topik.md` (angka menentukan urutan baca).
- Setiap dokumen menjawab satu pertanyaan utama.
- Kalau kode berubah, dokumentasi di PR yang sama **ikut** diperbarui.
- Keputusan arsitektur **tidak** ditulis di sini, tapi di `adr/`.

---

## Aturan penting untuk tahun berikutnya

1. Semua yang berubah tiap tahun ada di **`src/config/site.ts`** dan **`src/data/`**.
2. Aset gambar dipisah per tahun: `public/images/<tahun>/`.
3. Jangan hapus dokumentasi tahun lalu — tambahkan bagian baru dan tandai yang usang.
