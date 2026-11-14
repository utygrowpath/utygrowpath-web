import Image from "next/image";
import Link from "next/link";

import { TenantDropdown } from "@/components/layout/tenant-dropdown";

const primaryLinks = [
  { href: "/sudut-inspirasi", label: "Sudut inspirasi" },
  { href: "/info", label: "Informasi" },
  { href: "/tentang-kami", label: "Tentang" },
  { href: "/tim-kami", label: "Tim" },
];

const linkClass = "whitespace-nowrap py-2 text-[13px] font-normal tracking-[0.01em] text-[#4e5660] transition-colors hover:text-[#e13b43] xl:text-sm";

export function SiteHeader() {
  return (
    <header className="relative z-40 bg-[#fffdf8] [font-family:var(--font-geist-sans),Arial,sans-serif]">
      <div className="mx-auto flex min-h-[82px] w-full max-w-[1600px] items-center justify-between gap-5 px-5 sm:px-8">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-3" aria-label="UTY Growpath Expo Season 4, beranda">
          <Image
            src="/images/2026/season4/logo/gowpaths4.png"
            width={410}
            height={500}
            alt=""
            priority
            className="h-11 w-9 object-contain sm:h-12 sm:w-10"
          />
          <span className="min-w-0">
            <span className="flex items-center gap-2">
              <span className="block truncate text-[17px] leading-tight font-semibold tracking-[-0.035em] text-[#30302f] sm:text-[19px]">UTY Growpath Expo</span>
              <span className="rounded-full bg-[#f7cb4d]/35 px-2 py-0.5 text-[10px] font-medium text-[#795f1c]">Season 4</span>
            </span>
            <span className="mt-1 block truncate text-[12px] leading-tight font-normal tracking-[0.02em] text-[#77716a] sm:text-[13px]">Vistara Navakarya</span>
          </span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-5 lg:flex xl:gap-7">
          <Link href="/" className={linkClass}>Home</Link>
          <TenantDropdown />
          {primaryLinks.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>{item.label}</Link>
          ))}
          <Link href="/kontak" className={linkClass}>Kontak</Link>
        </nav>

        <details className="group relative lg:hidden">
          <summary
            aria-label="Buka menu navigasi"
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl bg-[#f6ebd5] text-[#4e5660] transition-colors hover:bg-[#f7cb4d]/50 hover:text-[#30302f] [&::-webkit-details-marker]:hidden"
          >
            {/* Hamburger Icon (saat menu tertutup) */}
            <svg
              className="h-5 w-5 block group-open:hidden"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            {/* Close / X Icon (saat menu terbuka) */}
            <svg
              className="h-5 w-5 hidden group-open:block"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </summary>
          <nav aria-label="Navigasi seluler" className="invisible absolute right-0 top-full z-50 mt-3 w-64 translate-y-1 rounded-md border border-[#e9dfca] bg-white p-2 opacity-0 shadow-md transition-all group-open:visible group-open:translate-y-0 group-open:opacity-100">
            <Link href="/" className="block rounded px-3 py-2.5 text-[13px] text-[#4e5660] hover:bg-[#fff9f0]">Home</Link>
            <p className="px-3 pt-3 pb-1 text-[11px] font-medium text-[#8a8580]">Tenant</p>
            <Link href="/info-tenant" className="block rounded px-3 py-2.5 text-[13px] text-[#4e5660] hover:bg-[#fff9f0]">Informasi tenant</Link>
            <Link href="/submission" className="block rounded px-3 py-2.5 text-[13px] text-[#4e5660] hover:bg-[#fff9f0]">Pendaftaran tenant</Link>
            {primaryLinks.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded px-3 py-2.5 text-[13px] text-[#4e5660] hover:bg-[#fff9f0]">{item.label}</Link>
            ))}
            <Link href="/kontak" className="block rounded px-3 py-2.5 text-[13px] text-[#4e5660] hover:bg-[#fff9f0]">Kontak</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
