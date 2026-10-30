import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import {
  getInspirationPostBySlug,
  inspirationPosts,
} from "@/data/sudut-inspirasi";
import { formatDate } from "@/lib/format-date";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return inspirationPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getInspirationPostBySlug(slug);

  if (!post) {
    return { title: "Artikel tidak ditemukan" };
  }

  return { title: post.title, description: post.excerpt };
}

export default async function SudutInspirasiDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getInspirationPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={`${formatDate(post.date)} · ${post.author}`}
        title={post.title}
        description={post.excerpt}
      />

      <Container className="space-y-4 py-16">
        {post.body.map((paragraph, index) => (
          <p key={index} className="max-w-3xl text-foreground/70">
            {paragraph}
          </p>
        ))}
      </Container>
    </>
  );
}
