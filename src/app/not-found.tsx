import Link from "next/link";

import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-dvh flex-col items-start justify-center gap-4 py-16">
      <p className="text-sm font-medium tracking-wide text-foreground/50 uppercase">
        404
      </p>
      <h1 className="text-3xl font-semibold tracking-tight">
        Halaman tidak ditemukan
      </h1>
      <p className="max-w-md text-foreground/60">
        Alamat yang Anda buka tidak tersedia atau sudah dipindahkan.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
      >
        Kembali ke beranda
      </Link>
    </Container>
  );
}
