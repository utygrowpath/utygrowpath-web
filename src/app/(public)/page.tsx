import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";

const sections = [
  { href: "/tentang-kami", label: "Tentang Kami", description: "Latar belakang dan tujuan event." },
  { href: "/sudut-inspirasi", label: "Sudut Inspirasi", description: "Cerita dan tulisan dari komunitas." },
  { href: "/info-tenant", label: "Info Tenant", description: "Informasi bagi tenant dan calon tenant." },
  { href: "/tim-kami", label: "Tim Kami", description: "Orang-orang di balik event ini." },
  { href: "/dokumentasi", label: "Dokumentasi", description: "Liputan dan galeri kegiatan." },
  { href: "/info", label: "Info", description: "Pengumuman dan informasi terbaru." },
];

export default function HomePage() {
  return (
    <>
      <section className="py-24">
        <Container className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-medium tracking-wide text-foreground/50 uppercase">
              {siteConfig.year}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="max-w-2xl text-lg text-foreground/60">
              {siteConfig.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/submission">Daftar Sekarang</ButtonLink>
            <ButtonLink href="/info-tenant" variant="secondary">
              Info Tenant
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="border-t border-foreground/10 py-16">
        <Container>
          <h2 className="text-sm font-medium tracking-wide text-foreground/50 uppercase">
            Jelajahi
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <li key={section.href}>
                <Link
                  href={section.href}
                  className="block h-full rounded-2xl border border-foreground/10 p-6 transition hover:border-foreground/30"
                >
                  <p className="font-medium">{section.label}</p>
                  <p className="mt-1 text-sm text-foreground/60">
                    {section.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
