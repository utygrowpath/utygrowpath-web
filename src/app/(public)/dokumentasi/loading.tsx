import { Container } from "@/components/layout/container";

export default function DokumentasiLoading() {
  return (
    <div className="overflow-hidden bg-[#fff9f0] py-12 text-[#30302f] sm:py-16">
      <Container className="space-y-8">
        {/* Filter Pills Skeleton */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[90, 110, 80, 100].map((w, i) => (
            <div
              key={i}
              style={{ width: `${w}px` }}
              className="shimmer-placeholder h-9 rounded-full bg-[#f3e9d8]"
            />
          ))}
        </div>

        {/* Gallery Photobook Grid Skeleton */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#e9dcc3] bg-[#fffdf8] p-3 shadow-sm"
            >
              <div className="shimmer-placeholder aspect-[4/3] w-full rounded-xl bg-[#f3e9d8]" />
              <div className="mt-3 space-y-2 px-1">
                <div className="shimmer-placeholder h-4 w-3/4 rounded bg-[#f3e9d8]" />
                <div className="shimmer-placeholder h-3 w-1/2 rounded bg-[#f3e9d8]" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
