# 07 — Git Workflow

---

## Model branch

Kami memakai **trunk-based dengan branch pendek**:

- `main` = produksi. Selalu bisa di-deploy.
- Branch fitur berumur pendek (idealnya < 3 hari), lalu di-merge dan dihapus.

```
main  ──●────────────●────────────●──►
         \          /             /
          ●──●──●──●   PR #1     ●   PR #2
```

Tidak ada branch `develop`, `staging`, atau `release` — belum perlu untuk
skala tim ini, dan menambah beban perawatan.

---

## Langkah harian

```bash
git checkout main
git pull --ff-only
git checkout -b feat/nama-singkat

# ... kerjakan ...

git add .
git commit -m "feat(scope): ringkasan"
git push -u origin feat/nama-singkat
```

Lalu buka Pull Request di GitHub.

---

## Konvensi commit

Format: `<tipe>(<cakupan>): <ringkasan>`

| Tipe | Kapan dipakai |
|---|---|
| `feat` | Menambah kemampuan/halaman baru |
| `fix` | Memperbaiki yang salah |
| `docs` | Hanya dokumentasi |
| `chore` | Tooling, dependency, konfigurasi |
| `refactor` | Merapikan tanpa mengubah perilaku |
| `style` | Formatting, spasi (bukan desain) |

Contoh baik:

```
feat(tenant): tambah halaman detail tenant
fix(info): perbaiki format tanggal pengumuman
docs(handover): tambah checklist serah terima
chore(deps): pin eslint 9.39.5
```

Contoh kurang baik:

```
update          ← update apa?
fix bug         ← bug mana?
wip             ← jangan di-push ke main
asdfgh          ← tidak bisa ditelusuri tahun depan
```

---

## Pull Request

### Ukuran

- Idealnya < 400 baris perubahan.
- Satu PR = satu tujuan. Kalau judul butuh "dan", pecah.

### Isi PR

- **Apa** yang berubah
- **Kenapa** (tautan ke Issue bila ada)
- **Cara menguji** (langkah manual)
- Screenshot untuk perubahan tampilan

### Review

- Minimal **1 approval** sebelum merge.
- Reviewer mengecek [Definition of Done](../CONTRIBUTING.md#6-definition-of-done).
- Penulis PR tidak boleh me-merge PR-nya sendiri tanpa review (kecuali darurat
  dan dicatat alasannya).

### Merge

Gunakan **Squash and merge**. Alasannya:

- `main` tetap satu commit per PR — mudah dibaca dan di-revert.
- Commit "wip"/"fix typo" tidak mengotori riwayat.

Branch sumber otomatis terhapus setelah merge.

---

## Proteksi `main`

Repo ini memakai Ruleset `protect-main`:

| Aturan | Status |
|---|---|
| Wajib lewat Pull Request | ✅ |
| Blokir force push | ✅ |
| Blokir penghapusan branch | ✅ |
| Wajib status check CI | ✅ (`verify`) |
| Jumlah approval | 0–1 (sesuai jumlah reviewer aktif) |

> Catatan: pada plan **GitHub Free**, proteksi branch hanya tersedia untuk repo
> **public**. Kalau repo diubah menjadi private, aturan ini tidak lagi berlaku.

---

## Kalau CI gagal

1. Buka tab **Checks** di PR, baca job yang merah.
2. Jalankan perintah yang sama di lokal:
   ```bash
   npm run lint
   npx next typegen && npm run typecheck
   npm run build
   ```
3. Perbaiki, commit, push — CI jalan ulang otomatis.

Jangan menonaktifkan aturan lint hanya agar CI hijau.

---

## Membatalkan perubahan

### Sebelum merge

Cukup tutup PR dan hapus branch.

### Setelah merge (cara aman)

Gunakan tombol **Revert** pada PR di GitHub — ini membuat PR baru yang
membatalkan perubahan, dan tetap tercatat di riwayat.

```bash
# alternatif lewat terminal
git checkout main
git pull
git revert <commit-sha>
git push
```

**Jangan** `git reset --hard` pada `main` yang sudah di-push, dan jangan
force push ke `main` — akan merusak riwayat orang lain.

---

## Sinkronisasi branch yang tertinggal

Kalau `main` sudah maju dan branch Anda konflik:

```bash
git checkout feat/nama-singkat
git fetch origin
git rebase origin/main
# selesaikan konflik, lalu
git push --force-with-lease
```

`--force-with-lease` (bukan `--force`) aman karena menolak menimpa commit orang
lain yang belum Anda lihat.

---

## Tag rilis (opsional)

Saat website live untuk event:

```bash
git tag -a v2026.1 -m "Rilis website UtyGrowPath 2026"
git push origin v2026.1
```

Berguna untuk menandai "versi yang dipakai saat acara" agar tahun depan mudah
melihat kondisi terakhir.
