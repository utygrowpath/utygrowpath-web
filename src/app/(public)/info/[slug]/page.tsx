import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { getInfoPostBySlug, infoPosts } from "@/data/info";
import { formatDate } from "@/lib/format-date";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return infoPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getInfoPostBySlug(slug);

  if (!post) {
    return { title: "Pengumuman tidak ditemukan" };
  }

  return { title: post.title, description: post.excerpt };
}

export default async function InfoDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getInfoPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={formatDate(post.date)}
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
