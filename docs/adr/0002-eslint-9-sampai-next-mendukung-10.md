# ADR 0002 — ESLint 9.39.5 meski sudah EOL

- **Status:** Diterima
- **Tanggal:** 2026-10-30

## Konteks

- **ESLint v9 mencapai End of Life pada 2026-08-06.** Rilis terakhirnya
  `9.39.5` (2026-07-10). Versi terkini adalah **v10.13.0**.
- Proyek ini memakai `eslint-config-next@16.4.3` — versi **terbaru** saat
  keputusan ini diambil (termasuk canary `16.5.0-canary.34`).
- `eslint-config-next` menarik plugin yang **belum mendukung ESLint 10**:

  | Paket | Versi | Peer `eslint` |
  |---|---|---|
  | `eslint-plugin-react` | 7.37.5 | `^3 … ^9.7` |
  | `eslint-plugin-jsx-a11y` | 6.10.2 | `^3 … ^9` |
  | `eslint-plugin-import` | 2.32.0 | `^2 … ^9` |

- Saat dicoba memasang ESLint 10 di proyek ini, muncul 3 peringatan
  `ERESOLVE overriding peer dependency`. Lint **berjalan** (0 masalah), tetapi
  kombinasi tersebut berada di luar rentang yang didukung plugin.
- Dampak `ERESOLVE` berbeda antar tooling: npm 11 hanya memberi *warning*,
  sedangkan npm versi lama / pnpm / yarn dapat **gagal total**.

## Keputusan

Tetap memakai **ESLint 9.39.5**, dikunci persis (bukan `^9`), dengan:

- `package-lock.json` di-commit → `npm ci` deterministik, tanpa resolusi ulang.
- `engines` (`node >=22`, `npm >=10`) + `.npmrc` `engine-strict=true`.
- Dependabot diaktifkan untuk memantau pembaruan.
- Upgrade ke v10 **ditunda** sampai `eslint-config-next` merilis dependency yang
  mendukung `^10`.

## Konsekuensi

### Positif

- Kombinasi yang **didukung** oleh ekosistem Next saat ini.
- `npm ci` di CI dan di laptop rekan menghasilkan tree identik — tidak ada
  `ERESOLVE`.
- Tidak ada `--legacy-peer-deps` / `--force` yang menyembunyikan masalah.

### Negatif / risiko

- Tidak ada patch keamanan untuk ESLint sendiri selama periode ini.
  Mitigasi: risiko rendah untuk proyek statis; `npm audit` tetap dipantau.
- `npm ci` menampilkan peringatan deprecation:
  `eslint@9.39.5: This version is no longer supported.` — ini **diharapkan**,
  bukan error.
- Harus ada tindak lanjut. Jangan biarkan keputusan ini mengendap tanpa ditinjau.

## Rencana keluar (exit plan)

1. Pantau rilis `eslint-config-next` berikutnya.
2. Saat plugin sudah mendukung `^10`, buat branch `chore/eslint-10`:
   ```bash
   npm install -D eslint@^10
   npm run lint
   npx tsc --noEmit
   npm run build
   ```
3. Jika hijau, merge dan perbarui ADR ini dengan status
   **"Digantikan oleh ADR NNNN"**.

## Alternatif yang dipertimbangkan

| Alternatif | Alasan tidak dipilih |
|---|---|
| ESLint 10 + `--legacy-peer-deps` | Hasil install bergantung mesin; CI tidak deterministik |
| ESLint 10 + `overrides` paksa | Rentang peer plugin tetap tidak mendukung; rapuh |
| Repo private | Kehilangan proteksi branch & Actions gratis di plan Free |
| Tanpa ESLint | Kehilangan `jsx-a11y` dan aturan React/Next |
