import { Container } from "@/components/layout/container";

export default function SudutInspirasiLoading() {
  return (
    <div className="overflow-hidden bg-[#fff9f0] py-12 text-[#30302f] sm:py-16">
      <Container className="space-y-8">
        {/* Category Filter Pills Skeleton */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[80, 96, 72, 110, 88].map((w, i) => (
            <div
              key={i}
              style={{ width: `${w}px` }}
              className="shimmer-placeholder h-9 rounded-full bg-[#f3e9d8]"
            />
          ))}
        </div>

        {/* Article Cards Skeleton Grid */}
        <div className="mx-auto max-w-4xl space-y-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex flex-col gap-5 rounded-3xl border border-[#e9dcc3] bg-[#fffdf8] p-6 shadow-sm sm:flex-row sm:items-center sm:p-7"
            >
              {/* Image Thumbnail Skeleton */}
              <div className="shimmer-placeholder h-48 w-full shrink-0 rounded-2xl bg-[#f3e9d8] sm:h-36 sm:w-48" />

              {/* Text Meta Skeleton */}
              <div className="flex flex-1 flex-col justify-center space-y-3">
                <div className="shimmer-placeholder h-4 w-28 rounded-md bg-[#f3e9d8]" />
                <div className="shimmer-placeholder h-6 w-4/5 rounded-md bg-[#f3e9d8]" />
                <div className="shimmer-placeholder h-4 w-full rounded-md bg-[#f3e9d8]" />
                <div className="shimmer-placeholder h-4 w-2/3 rounded-md bg-[#f3e9d8]" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
