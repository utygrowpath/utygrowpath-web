# 08 — Deployment

---

## Ringkasan

| Item | Nilai |
|---|---|
| Platform | Vercel (disarankan) |
| Build command | `npm run build` |
| Install command | `npm ci` |
| Output | Dikelola Next.js (jangan diubah) |
| Node | >= 22 (samakan dengan `.nvmrc`) |
| Environment variable | Belum ada (menyusul saat database) |

Alternatif self-host juga dimungkinkan (`npm run build` lalu `npm run start`),
tapi butuh server Node yang selalu hidup — tidak disarankan untuk event tahunan.

---

## Deploy pertama (Vercel)

1. Login ke Vercel dengan akun **organization** (bukan akun pribadi), lalu
   buat/ gabung ke **Team** yang sama dengan pengurus lain.
2. **Add New → Project → Import Git Repository** → pilih
   `utygrowpath/utygrowpath-web`.
3. Framework preset: **Next.js** (terdeteksi otomatis).
4. Pastikan:
   - Install Command: `npm ci`
   - Build Command: `npm run build`
   - Node.js Version: **22.x atau 24.x**
5. **Deploy**.
6. Setelah sukses, Anda mendapat URL `*.vercel.app`.

> Vercel membaca `package.json` (`engines`) dan `.nvmrc`. Kalau keduanya tidak
> cocok, build bisa gagal — samakan versinya.

---

## Preview deployment

Setiap Pull Request otomatis mendapat URL preview. Manfaatkan ini:

- Kirim link preview ke panitia untuk **approve tampilan** sebelum merge.
- Review konten di preview, bukan di produksi.
- Preview tidak mengganggu website live.

---

## Environment variable

Saat ini **belum ada** variable yang dibutuhkan. Nanti, ketika form pendaftaran
dan database dikerjakan, variable berikut akan diperlukan:

| Nama | Dipakai untuk | Contoh |
|---|---|---|
| `DATABASE_URL` | Koneksi database | `postgres://...` |
| `ADMIN_ALLOWED_EMAILS` | Allowlist login panitia | `a@x.com,b@x.com` |
| `TURNSTILE_SECRET_KEY` | Proteksi spam (opsional) | — |

Aturan:

- **Jangan pernah** commit nilai asli ke repo.
- Simpan di **Vercel → Project → Settings → Environment Variables**.
- Bedakan nilai untuk Production / Preview / Development.
- Dokumentasikan **nama** variable di `.env.example` (tanpa nilainya).
- Saat pergantian pengurus, **rotasi** semua kredensial.

---

## Domain

1. Beli/pegang domain atas nama organisasi (bukan pribadi).
2. Vercel → **Settings → Domains → Add**.
3. Ikuti instruksi DNS:
   - `A` record ke IP Vercel, atau
   - `CNAME` untuk subdomain (`www`, `event`).
4. Tunggu propagasi (5 menit – 24 jam).
5. Aktifkan HTTPS (otomatis oleh Vercel).

**Penting:** pastikan akses registrar domain dan DNS tercatat di
[09 — Handover](./09-handover.md). Domain yang terdaftar atas nama pribadi
adalah penyebab paling umum website "hilang" saat pergantian pengurus.

---

## Rollback

### Lewat Vercel

**Deployments → pilih deployment terakhir yang sehat → Promote to Production.**
Cara ini paling cepat (detik) dan tidak mengubah kode.

### Lewat Git

Revert PR yang bermasalah (lihat [07 — Git Workflow](./07-git-workflow.md)).
Gunakan ini bila masalahnya ada di kode, bukan di platform.

---

## Checklist sebelum go-live

- [ ] `siteConfig.url` sudah diganti ke domain asli (bukan `example.com`)
- [ ] `siteConfig.email` aktif dan dipantau
- [ ] Semua konten placeholder (`Contoh Tenant`, `TODO(handover)`) sudah diganti
- [ ] `npm run build` sukses di lokal
- [ ] Dicek di mobile (lebar 375px) dan desktop
- [ ] Metadata/OG tampil benar saat link dibagikan
- [ ] Tidak ada `.env` yang ter-commit
- [ ] Form pendaftaran (bila aktif) sudah diuji end-to-end
- [ ] Domain mengarah ke deployment produksi
- [ ] Minimal 2 orang punya akses Vercel

---

## Biaya

| Layanan | Perkiraan |
|---|---|
| Vercel Hobby/Free | Gratis (cukup untuk event) |
| Domain `.com`/`.id` | ~Rp150–250 rb/tahun |
| Database (nanti) | Free tier Supabase/Neon cukup untuk skala event |

Catat siapa yang membayar dan kapan jatuh tempo di dokumen handover.
