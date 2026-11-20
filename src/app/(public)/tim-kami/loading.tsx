import { Container } from "@/components/layout/container";

export default function TimKamiLoading() {
  return (
    <div className="overflow-hidden bg-[#fff9f0] py-12 text-[#30302f] sm:py-16">
      <Container className="space-y-12">
        {/* Division Heading Skeleton */}
        <div className="mx-auto flex max-w-sm flex-col items-center gap-2">
          <div className="shimmer-placeholder h-7 w-48 rounded-lg bg-[#f3e9d8]" />
          <div className="shimmer-placeholder h-4 w-32 rounded bg-[#f3e9d8]" />
        </div>

        {/* Team Cards Grid Skeleton */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div
              key={item}
              className="flex flex-col items-center rounded-2xl border border-[#e9dcc3] bg-[#fffdf8] p-4 text-center shadow-sm"
            >
              <div className="shimmer-placeholder h-24 w-24 rounded-full bg-[#f3e9d8] sm:h-28 sm:w-28" />
              <div className="mt-4 h-4 w-24 rounded bg-[#f3e9d8] shimmer-placeholder" />
              <div className="mt-2 h-3 w-16 rounded bg-[#f3e9d8] shimmer-placeholder" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
