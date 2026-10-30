## Ringkasan

<!-- Apa yang berubah? Satu sampai dua kalimat. -->

## Kenapa

<!-- Alasan perubahan. Tautkan Issue bila ada: "Closes #12" -->

## Cara menguji

<!-- Langkah manual untuk reviewer, misal:
1. npm ci
2. npm run dev
3. Buka /tentang-kami, cek ...
-->

## Jenis perubahan

- [ ] `feat` — fitur/halaman baru
- [ ] `fix` — perbaikan bug
- [ ] `docs` — dokumentasi
- [ ] `chore` — tooling/dependency
- [ ] `refactor` — rapi-rapi tanpa ubah perilaku

## Checklist

- [ ] `npm run lint` bersih
- [ ] `npm run typecheck` bersih
- [ ] `npm run build` sukses
- [ ] Sudah dicek di mobile (375px) dan desktop
- [ ] Konten/data ditaruh di `src/data/`, bukan di dalam JSX
- [ ] Tidak ada `.env`, token, atau data pribadi yang ikut ter-commit
- [ ] Dokumentasi diperbarui bila mengubah struktur/alur
- [ ] Tahun/nama event diambil dari `src/config/site.ts`

## Screenshot (untuk perubahan tampilan)

<!-- Sebelum / Sesudah -->
