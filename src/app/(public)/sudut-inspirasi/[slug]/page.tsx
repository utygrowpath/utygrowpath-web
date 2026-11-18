import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { Container } from "@/components/layout/container";
import {
  getInspirationPostBySlug,
  inspirationPosts,
} from "@/data/sudut-inspirasi";

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

export default function SudutInspirasiDetailPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center bg-[#fff9f0] px-6 text-center text-[#625b54]" role="status">
          Memuat cerita inspirasi...
        </div>
      }
    >
      <SudutInspirasiDetailContent params={params} />
    </Suspense>
  );
}

async function SudutInspirasiDetailContent({ params }: PageProps) {
  const { slug } = await params;
  const post = getInspirationPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const currentPostIndex = inspirationPosts.findIndex((item) => item.slug === post.slug);
  const relatedPosts = Array.from(
    { length: Math.min(3, inspirationPosts.length - 1) },
    (_, index) => inspirationPosts[(currentPostIndex + index + 1) % inspirationPosts.length],
  );

  return (
    <div className="min-h-screen bg-[#fff9f0] text-[#30302f]">
      {/* Header Banner */}
      <section className="relative isolate overflow-hidden border-b border-[#e9dcc3] bg-[radial-gradient(ellipse_at_center,_#fffdf8_0%,_#fff5df_58%,_#f8e9c9_100%)] py-12 sm:py-16">

        <Container className="relative z-10 max-w-4xl">
          <Link
            href="/sudut-inspirasi"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8d493a] transition-colors hover:text-[#2b4869] sm:text-sm"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
            Kembali ke Sudut Inspirasi
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#8a8580]">
            {post.category && (
              <span className="rounded-full bg-[#f7cb4d]/40 px-3.5 py-1 font-bold text-[#795f1c]">
                {post.category}
              </span>
            )}
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
          src="/images/2026/season4/motif/line-batik - 2.svg"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover opacity-90"
        />
      </div>

      {/* Article Content & Image */}
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

        <Container className="relative z-10 max-w-3xl space-y-8">
          {/* Footage Media: Simple Layout (Landscape = 1 foto, Potret = Maksimal 2 foto) */}
          {(() => {
            const isLandscape =
              post.slug === "feys-kitchen-gluten-free-healthy" ||
              post.slug === "moron-jasa-gb-dan-moron-pay-now" ||
              post.slug === "zimotive-studio-transformasi-hobi-desain-global" ||
              post.slug === "dari-tradisi-menjadi-usaha-keluarga" ||
              post.slug === "cerita-sekala-outdoor-perjalanan-dhea-tim" ||
              post.slug === "meraih-peluang-meramu-rasa-perjalanan-world-tea";

            // Jika ada multiple product images, ambil maksimal 2 foto (potret)
            if (post.productImages && post.productImages.length > 1) {
              const displayImages = post.productImages.slice(0, 2);
              return (
                <div className="mx-auto grid w-full max-w-2xl grid-cols-2 gap-4 sm:gap-6">
                  {displayImages.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_16px_36px_-20px_rgba(43,72,105,0.35)]"
                    >
                      <Image
                        src={imgSrc}
                        fill
                        priority={idx === 0}
                        sizes="(max-width: 768px) 50vw, 384px"
                        alt={`${post.title} - Footage ${idx + 1}`}
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              );
            }

            // Single image (Landscape atau Potret 1 foto)
            const singleImg =
              (post.productImages && post.productImages[0]) ||
              post.productImage ||
              post.image;

            if (!singleImg) return null;

            if (isLandscape) {
              return (
                <div className="relative mx-auto w-full max-w-3xl aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_16px_36px_-20px_rgba(43,72,105,0.35)]">
                  <Image
                    src={singleImg}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 768px"
                    alt={post.title}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              );
            }

            // Default: Potret 1 foto
            return (
              <div className="relative mx-auto w-full max-w-[380px] aspect-[3/4] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_16px_36px_-20px_rgba(43,72,105,0.35)]">
                <Image
                  src={singleImg}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 380px"
                  alt={post.title}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            );
          })()}

          <div className="rounded-3xl border border-[#eadbbd] bg-white p-6 shadow-[0_16px_40px_-20px_rgba(77,55,28,0.2)] sm:p-8 md:p-12">
            {/* Body paragraphs (Welcome) */}
            <div className="space-y-4 text-left text-sm leading-relaxed text-[#544d47] sm:text-justify sm:text-base sm:leading-7">
              {post.body.map((paragraph, index) => (
                <p key={index} className="whitespace-pre-line font-medium text-[#403a35]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Subsections: Editorial Style with Highlighted Headings & Clean Pill/Cards */}
            {post.subsections && post.subsections.length > 0 && (
              <div className="mt-8 space-y-6 sm:space-y-8">
                {post.subsections.map((sub, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#eadbbd]/60 bg-[#fffdfa] p-5 sm:p-7 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.03)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-[#2b4869] text-xs sm:text-sm font-bold text-white shadow-sm">
                        {idx + 1}
                      </span>
                      <h2 className="text-base font-bold text-[#2b4869] sm:text-lg">
                        {sub.heading}
                      </h2>
                    </div>

                    {sub.content && (
                      <p className="mt-3.5 text-left text-sm leading-relaxed text-[#625b54] whitespace-pre-line sm:text-justify sm:text-base sm:leading-7">
                        {sub.content}
                      </p>
                    )}

                    {sub.list && sub.list.length > 0 && (
                      <div className="mt-4 grid gap-2.5 sm:grid-cols-1 md:grid-cols-1">
                        {sub.list.map((item, itemIdx) => {
                          const [boldPart, ...restParts] = item.split(":");
                          return (
                            <div
                              key={itemIdx}
                              className="flex items-start gap-3 rounded-xl border border-[#eadbbd]/70 bg-white p-3.5 shadow-sm text-sm sm:text-base leading-relaxed text-[#625b54]"
                            >
                              <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#ed8b36]/20 text-[#ed8b36]">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#ed8b36]" />
                              </span>
                              <div className="flex-1">
                                {restParts.length > 0 ? (
                                  <>
                                    <strong className="font-semibold text-[#2b4869]">
                                      {boldPart.trim()}:
                                    </strong>{" "}
                                    <span>{restParts.join(":").trim()}</span>
                                  </>
                                ) : (
                                  <span>{item}</span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="mt-10 border-t border-[#eadbbd] pt-6 sm:mt-12">
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-[#8a8580]">Dipublikasikan oleh</p>
                <p className="text-base font-bold text-[#2b4869]">UTY Growpath Expo</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="related-stories-heading" className="border-t border-[#eadbbd]/80 bg-[#fffbf2] py-14 sm:py-20">
        <Container className="max-w-5xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 id="related-stories-heading" className="mt-2 text-2xl font-bold tracking-tight text-[#2b4869] sm:text-3xl">
                Jelajahi Cerita Inspiratif
              </h2>
              <p className="mt-1 text-lg text-[#7a746e]">
                Temukan kisah perjalanan usaha dan inovasi seru lainnya.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/sudut-inspirasi/${relatedPost.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#eadbbd] bg-white shadow-[0_4px_16px_-4px_rgba(43,72,105,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2b4869]/30 hover:shadow-[0_16px_32px_-12px_rgba(43,72,105,0.18)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b4869]"
              >
                {/* Image Container with native poster aspect ratio */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#fbf6ed]">
                  <Image
                    src={relatedPost.image || "/images/2026/season4/dokumentasi/docum1.png"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                    alt={relatedPost.title}
                    className="object-contain p-2.5 transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Subtle inner top-edge vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="line-clamp-2 text-base font-bold leading-snug text-[#2b4869] transition-colors group-hover:text-[#8d493a]">
                    {relatedPost.title}
                  </h3>

                  <p className="mt-2.5 line-clamp-2 flex-1 text-xs sm:text-sm leading-relaxed text-[#625b54]">
                    {relatedPost.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-[#eadbbd]/60 pt-3">
                    <span className="text-sm font-bold text-[#2b4869] transition-colors group-hover:text-[#ed8b36]">
                      Baca Selengkapnya
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
