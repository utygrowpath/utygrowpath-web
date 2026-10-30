import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Dokumentasi",
  description: "Galeri dan liputan kegiatan UtyGrowPath.",
};

const galleryItems = [
  { id: "dokumentasi-1", caption: "Foto kegiatan 1" },
  { id: "dokumentasi-2", caption: "Foto kegiatan 2" },
  { id: "dokumentasi-3", caption: "Foto kegiatan 3" },
  { id: "dokumentasi-4", caption: "Foto kegiatan 4" },
];

export default function DokumentasiPage() {
  return (
    <>
      <PageHero
        eyebrow="Dokumentasi"
        title="Galeri kegiatan"
        description="Liputan dan dokumentasi visual dari rangkaian acara."
      />

      <Container className="py-16">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <li
              key={item.id}
              className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-foreground/20 text-sm text-foreground/50"
            >
              {item.caption}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-foreground/50">
          TODO(handover): ganti placeholder ini dengan galeri asli. Simpan foto
          di /public/images/2026/dokumentasi/.
        </p>
      </Container>
    </>
  );
}
