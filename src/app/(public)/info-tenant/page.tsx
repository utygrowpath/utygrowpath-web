import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { tenants } from "@/data/tenant";

export const metadata: Metadata = {
  title: "Info Tenant",
  description: "Informasi tenant dan calon tenant UtyGrowPath.",
};

export default function InfoTenantPage() {
  return (
    <>
      <PageHero
        eyebrow="Info Tenant"
        title="Informasi tenant"
        description="Ketentuan, fasilitas, dan daftar tenant yang berpartisipasi."
      />

      <Container className="space-y-12 py-16">
        <section className="max-w-3xl space-y-3">
          <h2 className="text-xl font-medium">Ketentuan umum</h2>
          <p className="text-foreground/70">
            Konten menyusul. Jelaskan syarat pendaftaran tenant, fasilitas yang
            didapat, serta kewajiban selama event berlangsung.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Daftar tenant</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tenants.map((tenant) => (
              <li key={tenant.slug}>
                <Link
                  href={`/tenant/${tenant.slug}`}
                  className="block h-full overflow-hidden rounded-2xl border border-foreground/10 transition hover:border-foreground/30"
                >
                  <Image
                    src={tenant.image ?? "/images/2026/tenant/placeholder.png"}
                    alt={`Foto ${tenant.name}`}
                    width={640}
                    height={360}
                    className="h-40 w-full object-cover"
                  />
                  <div className="space-y-1 p-5">
                    <p className="text-sm text-foreground/50">{tenant.category}</p>
                    <p className="font-medium">{tenant.name}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  );
}
