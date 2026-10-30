# ADR 0005 — TypeScript ditahan di 5.x sampai ekosistem siap

- **Status:** Diterima
- **Tanggal:** 2026-10-30

## Konteks

Dependabot mengusulkan `typescript` **5.9.3 → 7.0.2** (PR #5). CI langsung
merah. Penyebabnya bukan kode proyek:

```
typescript-eslint@8.72.1
  peer typescript: ">=4.8.4 <6.1.0"
```

`typescript-eslint` — yang dipakai `eslint-config-next@16.4.3` — belum
mendukung TypeScript 7. Selain itu, TypeScript 7 adalah **port native (Go)**,
bukan kenaikan versi biasa: ada perubahan tooling dan perilaku yang belum
tentu kompatibel dengan plugin ESLint yang ada.

Terkait hal yang sama, Dependabot juga mengusulkan
`@types/node` **20.19.43 → 26.6.5** (PR #6). CI-nya **hijau**, tetapi runtime
proyek adalah **Node 24** (`.nvmrc` = 24.12.0). Tipe yang lebih baru dari
runtime membuat TypeScript mengizinkan API yang belum ada di Node 24 — lolos
saat build, gagal saat dijalankan.

## Keputusan

1. **TypeScript tetap di 5.9.3.** Upgrade ke 7 ditunda.
2. `@types/node` disamakan dengan **runtime**, yaitu `^24` (bukan `^20` seperti
   bawaan template create-next-app).
3. Dependabot dikonfigurasi untuk tidak lagi mengusulkan:
   - `typescript >= 7.0.0`
   - `@types/node` major (agar tidak melompat dari 24 ke 26)
4. Aturan ini dicabut hanya setelah `typescript-eslint` menyatakan dukungan
   terhadap TypeScript 7.

## Konsekuensi

### Positif

- `npm run lint`, `typecheck`, dan `build` tetap hijau.
- Tidak ada lagi PR Dependabot yang pasti gagal (mengurangi noise).
- Tipe Node sesuai runtime → kesalahan "API belum ada" tertangkap saat build.
- Repo tetap deterministik: `npm ci` tidak menyentuh TypeScript 7.

### Negatif / risiko

- Tidak memakai perbaikan dan peningkatan kecepatan TypeScript 7.
- `@types/node` 24 hanya menerima update patch/minor, bukan fitur Node 26.
- Harus ada tindak lanjut; jangan sampai tertinggal terlalu lama.

## Rencana keluar (exit plan)

1. Pantau rilis `typescript-eslint` — cari peer range yang mencakup `^7`.
2. Saat tersedia, buat branch `chore/typescript-7`:
   ```bash
   npm install -D typescript@^7
   npm run lint
   npm run typecheck
   npm run build
   ```
3. Periksa juga `next.config.ts` dan `tsconfig.json` — TypeScript 7 dapat
   mengubah default konfigurasi.
4. Jika hijau, hapus aturan `ignore` untuk `typescript` di
   `.github/dependabot.yml`, lalu perbarui ADR ini.

## Alternatif yang dipertimbangkan

| Alternatif | Alasan tidak dipilih |
|---|---|
| Merge TS 7 + matikan `typescript-eslint` | Kehilangan aturan lint TypeScript; CI merah diabaikan |
| Merge TS 7 + `--force` | CI tetap gagal; hanya menunda masalah |
| Biarkan Dependabot terus membuka PR TS 7 | Noise berulang, mengaburkan PR yang benar-benar penting |
| `@types/node` 26 (sesuai usulan Dependabot) | Tidak cocok dengan runtime Node 24 |
