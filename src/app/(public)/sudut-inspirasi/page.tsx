import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { inspirationPosts } from "@/data/sudut-inspirasi";
import { formatDate } from "@/lib/format-date";

export const metadata: Metadata = {
  title: "Sudut Inspirasi",
  description: "Cerita dan tulisan dari komunitas UtyGrowPath.",
};

export default function SudutInspirasiPage() {
  return (
    <>
      <PageHero
        eyebrow="Sudut Inspirasi"
        title="Cerita yang menginspirasi"
        description="Kumpulan tulisan dan kisah dari tenant, peserta, dan panitia."
      />

      <Container className="py-16">
        <ul className="space-y-4">
          {inspirationPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/sudut-inspirasi/${post.slug}`}
                className="block rounded-2xl border border-foreground/10 p-6 transition hover:border-foreground/30"
              >
                <p className="text-sm text-foreground/50">
                  {formatDate(post.date)} · {post.author}
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
