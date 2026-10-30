import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { getTenantBySlug, tenants } from "@/data/tenant";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tenants.map((tenant) => ({ slug: tenant.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tenant = getTenantBySlug(slug);

  if (!tenant) {
    return { title: "Tenant tidak ditemukan" };
  }

  return { title: tenant.name, description: tenant.description };
}

export default async function TenantDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tenant = getTenantBySlug(slug);

  if (!tenant) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow={tenant.category} title={tenant.name} />

      <Container className="space-y-6 py-16">
        <Image
          src={tenant.image ?? "/images/2026/tenant/placeholder.png"}
          alt={`Foto ${tenant.name}`}
          width={640}
          height={360}
          className="w-full max-w-2xl rounded-2xl object-cover"
        />
        <p className="max-w-3xl text-foreground/70">{tenant.description}</p>
      </Container>
    </>
  );
}
