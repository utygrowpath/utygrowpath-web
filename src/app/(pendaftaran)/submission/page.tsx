import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Pendaftaran",
  description: `Formulir pendaftaran ${siteConfig.name}.`,
};

export default function SubmissionPage() {
  return (
    <Container className="max-w-2xl py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Pendaftaran
      </h1>
      <p className="mt-3 text-foreground/60">
        Formulir pendaftaran akan tersedia di halaman ini.
      </p>

      {/*
        TODO(handover): formulir ini akan memakai Server Action + database.
        Rencana implementasi (belum dikerjakan):
        1. src/db/schema.ts        -> definisi tabel pendaftar
        2. src/lib/validation/     -> validasi input (zod)
        3. src/lib/actions/        -> Server Action penyimpanan data
        4. src/app/(admin)/        -> halaman panitia untuk membaca data
        Jangan menampilkan formulir sebelum validasi & proteksi spam siap.
      */}
      <div className="mt-8 rounded-2xl border border-dashed border-foreground/20 p-8 text-sm text-foreground/60">
        <p className="font-medium text-foreground">Belum dibuka</p>
        <p className="mt-2">
          Formulir sedang disiapkan. Informasi jadwal pembukaan akan diumumkan
          di halaman <span className="font-medium text-foreground">Info</span>.
        </p>
      </div>
    </Container>
  );
}
