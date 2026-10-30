# 01 — Mulai Cepat

Tujuan: dari clone kosong sampai `localhost:3000` menyala, dalam ~5 menit.

---

## Prasyarat

| Kebutuhan | Versi | Cara cek |
|---|---|---|
| Node.js | **>= 22** (disarankan 24.12.0) | `node --version` |
| npm | **>= 10** (disarankan 11.x) | `npm --version` |
| Git | terbaru | `git --version` |

Versi Node yang dipakai proyek tertulis di `.nvmrc`.

```bash
nvm install 24.12.0
nvm use              # otomatis membaca .nvmrc
```

> `.npmrc` berisi `engine-strict=true`. Kalau Node/npm Anda di bawah syarat,
> install akan **gagal dengan pesan jelas** — itu disengaja, bukan bug.

---

## Instalasi

```bash
git clone https://github.com/utygrowpath/utygrowpath-web.git
cd utygrowpath-web
npm ci
npm run dev
```

Buka <http://localhost:3000>.

### Kenapa `npm ci`, bukan `npm install`?

| | `npm ci` | `npm install` |
|---|---|---|
| Sumber versi | `package-lock.json` (persis) | resolusi ulang dari `package.json` |
| Mengubah lockfile | Tidak | Bisa |
| Kecepatan di CI | Lebih cepat | Lebih lambat |
| Hasil di mesin lain | Identik | Bisa berbeda |

`npm install` hanya dipakai saat **menambah/mengubah dependency**.

---

## Perintah harian

```bash
npm run dev            # dev server + hot reload
npm run lint           # ESLint
npx tsc --noEmit       # type check
npm run build          # build produksi
npm run start          # jalankan hasil build
```

Urutan yang disarankan sebelum membuka PR:

```bash
npm run lint && npx tsc --noEmit && npm run build
```

---

## Struktur hasil build

`npm run build` menghasilkan 19 route. Output-nya menampilkan jenis rendering:

| Simbol | Arti |
|---|---|
| `○` (Static) | Dirender saat build, disajikan sebagai HTML statis |
| `◐` (Partial Prerender) | Shell statis + bagian dinamis di-stream |

Detail per route: [04 — Peta Routing](./04-peta-routing.md).

---

## Troubleshooting

### `Unsupported engine` saat install

```
npm error code EBADENGINE
```

Node/npm Anda terlalu lama. Jalankan `nvm use`, lalu ulangi `npm ci`.

### `ERESOLVE` / peer dependency conflict

**Jangan** pakai `--legacy-peer-deps` atau `--force`. Konflik peer saat ini
dijelaskan di [ADR 0002](./adr/0002-eslint-9-sampai-next-mendukung-10.md).
Solusi yang benar: kembali ke `npm ci`.

### `Cannot find name 'LayoutProps'` atau error aneh di `.next/types`

Tipe route belum/gagal di-generate (mis. setelah menghapus/memindahkan `page.tsx`).

```bash
npx next typegen
npx tsc --noEmit
```

Kalau masih gagal, hapus cache lalu ulangi:

```bash
rm -rf .next        # PowerShell: Remove-Item -Recurse -Force .next
npm run dev
```

### Port 3000 sudah dipakai

```bash
npm run dev -- --port 3001
```

### Perubahan tidak muncul

- Hentikan dev server, hapus `.next`, jalankan ulang.
- Pastikan tidak ada dua dev server berjalan.

### Gambar SVG tidak muncul

`next/image` memblokir SVG secara default. Gunakan PNG/JPG/WebP.
Lihat [06 — Konvensi Kode](./06-konvensi-kode.md#gambar).

---

## Di mana membaca dokumentasi Next.js versi ini?

Versi Next di proyek ini punya perubahan besar dibanding tutorial lama.
Dokumentasi resmi yang **sesuai versi terpasang** ada di:

```
node_modules/next/dist/docs/
```

Mulai dari `01-app/01-getting-started/`. Selalu cek folder ini sebelum
mengikuti tutorial dari internet.
