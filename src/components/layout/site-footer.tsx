import Link from "next/link";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <p className="font-semibold">
            {siteConfig.name} {siteConfig.year}
          </p>
          <p className="max-w-sm text-sm text-foreground/60">
            {siteConfig.tagline}
          </p>
        </div>

        <nav aria-label="Navigasi footer" className="text-sm">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <Link href="/panitia" className="text-foreground/70 hover:text-foreground">
                Panitia
              </Link>
            </li>
            <li>
              <Link href="/info-tenant" className="text-foreground/70 hover:text-foreground">
                Info Tenant
              </Link>
            </li>
            <li>
              <Link href="/submission" className="text-foreground/70 hover:text-foreground">
                Pendaftaran
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-foreground/70 hover:text-foreground"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
