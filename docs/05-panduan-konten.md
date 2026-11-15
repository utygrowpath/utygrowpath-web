# 05 — Panduan Konten

Untuk **panitia yang mengubah teks, foto, atau daftar** — tanpa perlu paham kode.

> Konten website ini disimpan di dalam repo (bukan dashboard CMS). Artinya setiap
> perubahan tercatat dan bisa dikembalikan. Konsekuensinya: perubahan dilakukan
> lewat Pull Request, dan harus di-approve sebelum tampil di website.

---

## Cara tercepat: edit lewat GitHub (tanpa install apa pun)

1. Buka repo di browser: `github.com/utygrowpath/utygrowpath-web`
2. Masuk ke file yang ingin diubah (lihat tabel di bawah).
3. Klik ikon **pensil** (Edit this file) di kanan atas.
4. Ubah teksnya.
5. Scroll ke bawah → pilih **Create a new branch for this commit** →
   beri nama, mis. `konten/tambah-tenant-baru`.
6. Klik **Propose changes** → **Create pull request**.
7. Tunggu review dari tim web. Setelah di-merge, website otomatis diperbarui.

> ⚠️ Hati-hati pada tanda kutip `"`, koma `,`, dan kurung kurawal `{ }`.
> Kalau salah satu hilang, website gagal build. Kalau ragu, minta bantuan tim web.

---

## Peta file: "teks apa ada di mana?"

| Yang ingin diubah | File |
|---|---|
| Nama event, tahun, tagline, deskripsi singkat | `src/config/site.ts` |
| Menu di navbar | `src/components/layout/site-header.tsx` → `primaryLinks` |
| Email & media sosial | `src/config/site.ts` → `email`, `socials` |
| Teks halaman Tentang Kami | `src/app/(public)/tentang-kami/page.tsx` |
| Daftar tenant | `src/data/tenant.ts` |
| Artikel Sudut Inspirasi | `src/data/sudut-inspirasi.ts` |
| Pengumuman / Info | `src/data/info.ts` |
| Susunan panitia | `src/data/panitia.ts` |
| Galeri dokumentasi | `src/data/dokumentasi.ts` |

---

## 1. Mengubah nama event / tahun

Buka `src/config/site.ts`:

```ts
export const siteConfig = {
  name: "UtyGrowPath",
  year: 2026,                     // ← ganti tiap tahun
  tagline: "Tumbuh bersama, berkarya nyata.",
  description: "UtyGrowPath adalah event tahunan ...",
  email: "halo@utygrowpath.example.com",
```

Nama dan tahun ini otomatis muncul di navbar, footer, judul tab browser, dan
halaman Home. **Jangan** mengetik ulang tahun di halaman lain.

---

## 2. Menambah tenant

Buka `src/data/tenant.ts`, tambahkan satu blok di dalam array `tenants`:

```ts
{
  slug: "kopi-rakyat",
  name: "Kopi Rakyat",
  category: "Kuliner",
  description: "Kedai kopi rumahan dengan biji lokal.",
  image: "/images/2026/tenant/kopi-rakyat.jpg",
  instagram: "kopirakyat",          // opsional, tanpa @
},
```

| Kolom | Aturan |
|---|---|
| `slug` | huruf kecil, tanpa spasi, unik. **Jangan diubah setelah publikasi.** |
| `name` | Nama tampilan |
| `category` | Contoh: Kuliner, Kriya, Fashion, Jasa |
| `description` | 1–3 kalimat |
| `image` | Path di `public/images/2026/tenant/` |
| `instagram` | Opsional |

Halaman `/tenant/<slug>` otomatis dibuat. Tidak perlu file baru.

---

## 3. Menambah artikel Sudut Inspirasi

Buka `src/data/sudut-inspirasi.ts`:

```ts
{
  slug: "kisah-tenant-pertama",
  title: "Kisah Tenant Pertama",
  excerpt: "Ringkasan 1–2 kalimat untuk halaman daftar.",
  author: "Nama Penulis",
  date: "2026-08-17",             // format: TAHUN-BULAN-TANGGAL
  body: [
    "Paragraf pertama.",
    "Paragraf kedua.",
  ],
},
```

- `body` adalah daftar paragraf. Satu baris kutip = satu paragraf.
- Tanggal **wajib** format `YYYY-MM-DD` (contoh: `2026-08-17`).
- Butuh sub-judul atau daftar? Hubungi tim web — saat ini hanya mendukung paragraf.

---

## 4. Menambah pengumuman (Info)

Sama seperti artikel, tapi di `src/data/info.ts` dengan bentuk:

```ts
{
  slug: "pembukaan-pendaftaran",
  title: "Pembukaan Pendaftaran",
  excerpt: "Pendaftaran dibuka mulai 1 September.",
  date: "2026-09-01",
  body: ["Isi pengumuman..."],
},
```

---

## 5. Menambah / mengubah panitia

Buka `src/data/panitia.ts`:

```ts
{
  name: "Nama Lengkap",
  role: "Koordinator",
  division: "Divisi Acara",
  isCore: true,        // true = tampil juga di halaman "Tim Kami"
},
```

- `division` menentukan pengelompokan di halaman `/panitia`.
- `isCore: true` hanya untuk pengurus inti.
- Nama divisi baru otomatis muncul sebagai bagian baru — tidak perlu ubah kode.

---

## 6. Mengganti foto

1. Siapkan foto:
   - format **JPG / PNG / WebP** (SVG tidak didukung)
   - lebar ideal **1200–1600 px**
   - ukuran file **< 500 KB** (kompres di [squoosh.app](https://squoosh.app))
   - nama file huruf kecil, pakai tanda hubung: `kopi-rakyat.jpg`
2. Letakkan di folder yang sesuai:
   ```
   public/images/2026/tenant/
   public/images/2026/dokumentasi/
   public/media/season-4/        # foto besar untuk lightbox galeri dokumentasi
   ```
3. Rujuk dari data dengan path yang diawali `/`:
   ```ts
   image: "/images/2026/tenant/kopi-rakyat.jpg",
   ```
4. Jangan hapus foto lama yang masih dipakai tahun lalu — simpan di folder
   tahunnya masing-masing.

---

## 7. Menambah menu di navbar

Buka `src/components/layout/site-header.tsx`, tambahkan satu baris ke
`primaryLinks`:

```ts
const primaryLinks = [
  { href: "/sudut-inspirasi", label: "Sudut inspirasi" },
  { href: "/faq", label: "FAQ" },     // ← tambahan
];
```

Menu itu otomatis muncul di navbar desktop dan di menu ponsel. Pastikan
halamannya sudah ada, kalau tidak akan jadi link mati.

---

## 8. Menambah foto / video galeri dokumentasi

Buka `src/data/dokumentasi.ts`, tambahkan satu blok di dalam array
`documentationItems`:

```ts
{
  slug: "lomba-band",
  title: "Lomba Band",
  kind: "photo",
  src: "/images/2026/season4/dokumentasi/lomba-band.jpg",
  fullSrc: "/media/season-4/lomba-band.jpg",   // opsional, versi besar untuk lightbox
  alt: "Grup band tampil di panggung UTY Growpath Expo",
  season: "season-4",
  caption: "Babak final lomba band.",
},
```

| Kolom | Aturan |
|---|---|
| `slug` | huruf kecil, tanpa spasi, **unik**, jangan diubah setelah tayang (jadi link `?item=`) |
| `title` | Judul yang tampil di kartu dan popup |
| `kind` | `"photo"` atau `"video"` |
| `src` | Foto: path gambarnya. Video: thumbnail, kalau tidak pakai YouTube |
| `youtubeId` | **Untuk video YouTube:** isi kolom ini dengan id dari URL `youtu.be/ID` atau `watch?v=ID` |
| `videoSrc` + `poster` | Untuk video file (`.mp4` di `public/media/...`) — pakai salah satu: `youtubeId` **atau** `videoSrc` |
| `alt` | Wajib. Tulis deskripsi isinya untuk pembaca layar |
| `season` | `"season-1"` … `"season-4"`. Menentukan tab tempat item muncul |
| `caption` | Opsional, satu-dua baris di bawah judul |

⚠️ **Jangan simpan video dengan `youtubeId` kosong** — kartunya akan
menampilkan gambar rusak. Kalau id-nya belum ada, jangan tambahkan itemnya
dulu.

Musim yang belum punya item tetap muncul sebagai tab dan menampilkan tulisan
"Dokumentasi Season X belum tersedia".

---

## Yang perlu dihindari

| ❌ | Kenapa |
|---|---|
| Mengetik tahun/nama event langsung di halaman | Tidak ikut berubah tahun depan |
| Mengubah `slug` yang sudah dipublikasikan | Link yang beredar jadi rusak |
| Upload foto > 2 MB | Website lambat |
| Menghapus tanda kutip/koma di file data | Build gagal |
| Menaruh data pribadi pendaftar di repo | Melanggar privasi |
| Edit langsung di `main` | Tidak ada review, sulit dikembalikan |

---

## Kalau website error setelah perubahan

Jangan panik — semua tercatat.

1. Beri tahu tim web di grup.
2. Tim web akan melihat PR Anda dan memperbaiki, atau
3. Batalkan lewat tombol **Revert** pada Pull Request yang bermasalah.

Website produksi tidak akan ikut rusak sampai PR di-merge.
