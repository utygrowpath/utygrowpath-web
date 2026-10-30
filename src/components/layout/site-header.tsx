import Link from "next/link";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="shrink-0 font-semibold tracking-tight">
          {siteConfig.name}
          <span className="ml-1 text-foreground/50">{siteConfig.year}</span>
        </Link>

        <nav aria-label="Navigasi utama" className="overflow-x-auto">
          <ul className="flex items-center gap-5 text-sm whitespace-nowrap">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-foreground/70 transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/submission"
          className="hidden shrink-0 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90 md:inline-flex"
        >
          Daftar
        </Link>
      </Container>
    </header>
  );
}
