import Image from "next/image";
import Link from "next/link";

import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { TenantDropdown } from "@/components/layout/tenant-dropdown";

const primaryLinks = [
  { href: "/sudut-inspirasi", label: "Sudut inspirasi" },
  { href: "/info", label: "Informasi" },
  { href: "/tentang-kami", label: "Tentang" },
  { href: "/tim-kami", label: "Tim" },
  { href: "/dokumentasi", label: "Dokumentasi" },
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

        <MobileNavigation links={primaryLinks} />
      </div>
    </header>
  );
}
