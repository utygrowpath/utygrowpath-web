import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
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
    <div className="min-h-screen bg-[#fff9f0] text-[#30302f]">
      {/* Header banner */}
      <section className="relative isolate overflow-hidden border-b border-[#e9dcc3] bg-[radial-gradient(ellipse_at_center,_#fffdf8_0%,_#fff5df_58%,_#f8e9c9_100%)] py-12 sm:py-16">
        <Image
          src="/images/2026/season4/motif/motif1.png"
          width={400}
          height={400}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 top-1/2 z-0 w-60 -translate-y-1/2 opacity-[0.14] animate-float-slow"
        />
        <Image
          src="/images/2026/season4/motif/motif3.png"
          width={400}
          height={400}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-1/2 z-0 w-60 -translate-y-1/2 opacity-[0.12] animate-float-reverse"
        />

        <Container className="relative z-10 max-w-4xl">
          <Link
            href="/info"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8d493a] transition-colors hover:text-[#2b4869] sm:text-sm"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
            Kembali ke Informasi
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#8a8580]">
            {post.category && (
              <span className="rounded-full bg-[#f7cb4d]/40 px-3.5 py-1 font-bold text-[#795f1c]">
                {post.category}
              </span>
            )}
            <span>•</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>

          <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-[#2b4869] sm:text-3xl md:text-4xl">
            {post.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-[#625b54] sm:text-lg">
            {post.excerpt}
          </p>
        </Container>
      </section>

      {/* Decorative Ribbon */}
      <div className="relative z-20 h-2.5 w-full overflow-hidden bg-[#2b4869]">
        <Image
          src="/images/2026/season4/motif/line-batik - 1.svg"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover opacity-90"
        />
      </div>

      {/* Article Content */}
      <section className="relative isolate py-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage: "url('/images/2026/season4/motif/motif2.png')",
            backgroundSize: "160px",
            backgroundRepeat: "repeat",
          }}
        />

        <Container className="relative z-10 max-w-4xl">
          <div className="rounded-3xl border border-[#eadbbd] bg-white p-8 shadow-[0_20px_45px_-24px_rgba(77,55,28,0.25)] sm:p-12">
            <div className="space-y-6 text-justify text-base leading-8 text-[#544d47] sm:text-lg sm:leading-9">
              {post.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {post.link && (
              <div className="mt-10 rounded-2xl border border-[#e0b83e]/50 bg-gradient-to-r from-[#fff9f0] to-[#fff5df] p-6">
                <p className="text-sm font-semibold text-[#8d493a]">Tautan Penting Terkait:</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 font-medium text-[#2b4869] underline hover:text-[#8d493a]"
                >
                  {post.link}
                  <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path
                      fillRule="evenodd"
                      d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h4a.75.75 0 010 1.5h-4z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6.194 12.753a.75.75 0 001.06 1.06l7.5-7.5V9a.75.75 0 001.5 0V4.25a.75.75 0 00-.75-.75H10.75a.75.75 0 000 1.5h2.69l-7.246 7.253z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
