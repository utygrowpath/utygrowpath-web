# Panduan Kontribusi

Dokumen ini menjelaskan cara berkontribusi pada repo ini agar riwayat perubahan
tetap rapi dan mudah ditelusuri pengurus tahun berikutnya.

---

## 1. Prasyarat

- **Node.js >= 22** dan **npm >= 10** (lihat `.nvmrc`, gunakan `nvm use`)
- Git
- Akses tulis ke repo (minta owner organization)

Setup awal:

```bash
npm ci
npm run dev
```

---

## 2. Aturan yang tidak boleh dilanggar

| ❌ Jangan | ✅ Lakukan |
|---|---|
| `git push` langsung ke `main` | Buat branch + Pull Request |
| Commit file `.env` atau token | Simpan di environment / Vercel |
| `npm install --legacy-peer-deps` | `npm ci` |
| `npm install --force` | Perbaiki penyebab konfliknya |
| Commit `node_modules/` atau `.next/` | Sudah di-`.gitignore` |
| Menulis tahun/nama event di komponen | Ambil dari `src/config/site.ts` |

Alasan aturan dependency ada di [`docs/adr/0002-eslint-9-sampai-next-mendukung-10.md`](./docs/adr/0002-eslint-9-sampai-next-mendukung-10.md).

---

## 3. Alur kerja

```
main  ──●──────────────●────────────●──►
         \            /             /
          ●──●──●────●   PR #1     ●   PR #2
          feat/nama-fitur
```

1. Selalu mulai dari `main` yang terbaru:
   ```bash
   git checkout main
   git pull --ff-only
   git checkout -b feat/nama-singkat
   ```
2. Kerjakan perubahan, commit dalam unit kecil.
3. Push branch:
   ```bash
   git push -u origin feat/nama-singkat
   ```
4. Buka Pull Request ke `main`, isi template.
5. Tunggu review + CI hijau.
6. Merge dengan **Squash and merge** (riwayat `main` tetap satu commit per PR).

---

## 4. Penamaan branch

| Prefix | Dipakai untuk | Contoh |
|---|---|---|
| `feat/` | Fitur baru | `feat/halaman-dokumentasi` |
| `fix/` | Perbaikan bug | `fix/navbar-mobile` |
| `docs/` | Dokumentasi saja | `docs/panduan-tenant` |
| `chore/` | Tooling, dependency | `chore/upgrade-eslint` |
| `refactor/` | Rapi-rapi tanpa ubah perilaku | `refactor/komponen-card` |

Gunakan huruf kecil dan tanda hubung. Hindari nama seperti `update`, `fix2`, `coba`.

---

## 5. Format commit

Gunakan [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipe>(<cakupan opsional>): <ringkasan singkat>

<penjelasan opsional: kenapa, bukan apa>
```

| Tipe | Contoh |
|---|---|
| `feat` | `feat(tenant): tambah halaman detail tenant` |
| `fix` | `fix(info): perbaiki tanggal yang salah format` |
| `docs` | `docs(handover): tambah checklist serah terima` |
| `chore` | `chore(deps): pin eslint 9.39.5` |
| `refactor` | `refactor(components): pisahkan SiteHeader` |

Aturan praktis:
- Baris pertama maksimal ~72 karakter, tanpa titik di akhir.
- Tulis **kenapa** di body, bukan mengulang **apa** (apa sudah terlihat di diff).
- Satu commit = satu niat. Kalau pesannya butuh kata "dan", mungkin perlu dipecah.

---

## 6. Definition of Done

Sebelum minta review, pastikan:

- [ ] `npm run lint` bersih
- [ ] `npx tsc --noEmit` bersih
- [ ] `npm run build` sukses
- [ ] Sudah dicek di layar kecil (mobile) dan besar
- [ ] Tidak ada `console.log` / kode mati yang tertinggal
- [ ] Tidak ada data sensitif
- [ ] Dokumentasi diperbarui bila mengubah struktur atau alur

---

## 7. Review

Reviewer memeriksa:

1. Apakah perubahan sesuai tujuan PR (tidak melebar)?
2. Apakah data konten ditaruh di `src/data/`, bukan di dalam JSX?
3. Apakah teks memakai Bahasa Indonesia yang konsisten?
4. Apakah `alt` gambar terisi dan hierarki heading benar (`h1` → `h2`)?
5. Apakah tahun/nama event diambil dari `src/config/site.ts`?

---

## 8. Menambah dependency

```bash
npm install nama-paket --save-exact   # dependency baru
npm ci                                # verifikasi lockfile
```

Lalu:
1. Commit `package.json` **dan** `package-lock.json` bersama.
2. Jelaskan di PR kenapa dependency itu perlu.
3. Pastikan `npm run build` masih sukses.

> Untuk upgrade ESLint, baca dulu ADR 0002 — jangan naikkan ke v10 sebelum
> `eslint-config-next` mendukungnya.

---

## 9. Melaporkan bug

Buka Issue dengan menyertakan:
- Langkah reproduksi
- Yang diharapkan vs yang terjadi
- Browser/perangkat
- Screenshot bila perlu

Jangan sertakan data pribadi pendaftar di Issue publik.
