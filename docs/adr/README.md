# Architecture Decision Records (ADR)

Catatan **keputusan arsitektur**: apa yang diputuskan, kenapa, dan apa
konsekuensinya.

## Kenapa perlu?

Tahun depan, keputusan yang terlihat "aneh" akan dipertanyakan. Tanpa catatan,
seseorang akan "memperbaikinya" dan mengulang masalah yang sudah dihindari.
ADR mencegah itu.

## Kapan membuat ADR baru?

Bila keputusan tersebut:

- sulit dibalik (pilihan database, struktur routing, platform deploy),
- memengaruhi lebih dari satu bagian sistem,
- atau berpotensi dipertanyakan orang lain di kemudian hari.

Tidak perlu ADR untuk hal kecil seperti mengganti warna tombol.

## Format

```
NNNN-judul-singkat.md
```

```md
# ADR NNNN — Judul

- **Status:** Diusulkan | Diterima | Ditolak | Digantikan oleh ADR NNNN
- **Tanggal:** YYYY-MM-DD

## Konteks
## Keputusan
## Konsekuensi
## Alternatif yang dipertimbangkan
```

## Daftar

| # | Judul | Status |
|---|---|---|
| [0001](./0001-app-router-dan-route-group.md) | App Router + route group | Diterima |
| [0002](./0002-eslint-9-sampai-next-mendukung-10.md) | ESLint 9.39.5 meski sudah EOL | Diterima |
| [0003](./0003-konten-hardcode-terpusat.md) | Konten hardcode tapi terpusat di `src/data` | Diterima |
| [0004](./0004-form-pendaftaran-server-action-database.md) | Form pendaftaran: Server Action + database | Diusulkan |

ADR yang sudah tidak berlaku **jangan dihapus** — ubah statusnya dan tautkan
penggantinya.
