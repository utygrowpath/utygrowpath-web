# UtyGrowPath — Website Event

Website resmi event tahunan **UtyGrowPath**. Berisi informasi event, profil tenant,
sudut inspirasi, dokumentasi, susunan panitia, dan alur pendaftaran.

Dokumentasi lengkap ada di [`docs/`](./docs/README.md). Kalau Anda baru bergabung,
mulai dari situ — bukan dari file ini.

---

## Stack

| Bagian | Teknologi | Versi |
|---|---|---|
| Framework | Next.js (App Router, Turbopack) | 16.4.3 |
| UI | React | 19.3.0 |
| Bahasa | TypeScript (strict) | 5.9.3 |
| Styling | Tailwind CSS | 4.3.3 |
| Lint | ESLint + eslint-config-next | 9.39.5 / 16.4.3 |

Versi Node & npm dikunci lewat `engines` + `.nvmrc` + `.npmrc` (`engine-strict=true`).

---

## Mulai cepat

```bash
# 1. Pakai versi Node yang benar
nvm use            # membaca .nvmrc -> 24.12.0

# 2. Install dependency (SELALU npm ci, bukan npm install)
npm ci

# 3. Jalankan
npm run dev        # http://localhost:3000
```

> **Kenapa `npm ci`?** Perintah ini memasang persis sesuai `package-lock.json`,
> tanpa resolusi ulang. Hasilnya identik di laptop, CI, dan server.

---

## Perintah

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Development server (hot reload) |
| `npm run build` | Build produksi |
| `npm run start` | Jalankan hasil build |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Type check (script `typecheck` menyusul di CI) |

Sebelum membuka Pull Request, minimal jalankan `npm run lint` dan `npx tsc --noEmit`.

---

## Struktur singkat

```
src/
├─ app/           # routing (App Router) — lihat docs/04-peta-routing.md
├─ components/    # UI bersama: ui/, layout/, sections/, forms/
├─ config/        # site.ts — identitas event (nama, tahun, navigasi)
├─ data/          # konten: tenant, sudut inspirasi, info, panitia
├─ lib/           # util & (nanti) akses database
└─ types/         # tipe TypeScript bersama
```

Penjelasan lengkap: [`docs/03-struktur-folder.md`](./docs/03-struktur-folder.md).

---

## Kontribusi

Baca [`CONTRIBUTING.md`](./CONTRIBUTING.md) sebelum membuat branch.
Aturan singkat:

- Jangan push langsung ke `main` — selalu lewat Pull Request.
- Jangan commit `.env`, password, atau token apa pun.
- Jangan pakai `--legacy-peer-deps` / `--force` saat install.

---

## Dokumentasi

| Dokumen | Untuk siapa |
|---|---|
| [`docs/README.md`](./docs/README.md) | **Index** — mulai di sini |
| [`docs/01-mulai-cepat.md`](./docs/01-mulai-cepat.md) | Developer baru |
| [`docs/05-panduan-konten.md`](./docs/05-panduan-konten.md) | Panitia yang mengubah teks/foto |
| [`docs/09-handover.md`](./docs/09-handover.md) | Pengurus tahun berikutnya |

---

## Kepemilikan

Repo ini berada di bawah GitHub Organization **utygrowpath** (bukan akun pribadi)
agar dapat dialihkan antar kepengurusan. Lihat [`docs/09-handover.md`](./docs/09-handover.md).
