import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { infoPosts } from "@/data/info";
import { formatDate } from "@/lib/format-date";

export const metadata: Metadata = {
  title: "Info",
  description: "Pengumuman dan informasi terbaru UtyGrowPath.",
};

export default function InfoPage() {
  return (
    <>
      <PageHero
        eyebrow="Info"
        title="Pengumuman"
        description="Informasi terbaru seputar pendaftaran, jadwal, dan ketentuan event."
      />

      <Container className="py-16">
        <ul className="space-y-4">
          {infoPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/info/${post.slug}`}
                className="block rounded-2xl border border-foreground/10 p-6 transition hover:border-foreground/30"
              >
                <p className="text-sm text-foreground/50">
                  {formatDate(post.date)}
                </p>
                <p className="mt-2 text-xl font-medium">{post.title}</p>
                <p className="mt-2 text-foreground/60">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
