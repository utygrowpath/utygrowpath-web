import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Latar belakang dan tujuan ${siteConfig.name}.`,
};

export default function TentangKamiPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        title={`Apa itu ${siteConfig.name}?`}
        description="Halaman ini menjelaskan latar belakang, tujuan, dan nilai yang dibawa event."
      />

      <Container className="space-y-4 py-16">
        <p className="max-w-3xl text-foreground/70">
          Konten menyusul. Ganti bagian ini dengan penjelasan event: sejarah
          singkat, tujuan, siapa sasarannya, dan apa yang bisa didapat peserta.
        </p>
      </Container>
    </>
  );
}
