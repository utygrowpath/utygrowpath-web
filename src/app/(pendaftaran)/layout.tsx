import type { ReactNode } from "react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

/**
 * Layout khusus alur pendaftaran: tanpa navbar penuh agar fokus peserta
 * tidak teralihkan. Hanya menyediakan jalan kembali ke halaman utama.
 */
export default function PendaftaranLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="border-b border-foreground/10">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="font-semibold tracking-tight">
            {siteConfig.name}
            <span className="ml-1 text-foreground/50">{siteConfig.year}</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            Kembali ke beranda
          </Link>
        </Container>
      </header>

      <main className="flex-1">{children}</main>
    </div>
  );
}
