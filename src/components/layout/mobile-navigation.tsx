"use client";

import { useRef } from "react";
import Link from "next/link";

type NavigationItem = {
  href: string;
  label: string;
};

export function MobileNavigation({
  links,
}: {
  links: readonly NavigationItem[];
}) {
  const menuRef = useRef<HTMLDetailsElement>(null);

  return (
    <details ref={menuRef} className="group relative lg:hidden">
      <summary
        aria-label="Buka menu navigasi"
        className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl bg-[#f6ebd5] text-[#4e5660] transition-colors hover:bg-[#f7cb4d]/50 hover:text-[#30302f] [&::-webkit-details-marker]:hidden"
      >
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
      <nav
        aria-label="Navigasi seluler"
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("a")) {
            if (menuRef.current) menuRef.current.open = false;
          }
        }}
        className="invisible absolute right-0 top-full z-50 mt-3 w-64 translate-y-1 rounded-md border border-[#e9dfca] bg-white p-2 opacity-0 shadow-md transition-all group-open:visible group-open:translate-y-0 group-open:opacity-100"
      >
        <Link href="/" className="block rounded px-3 py-2.5 text-[13px] text-[#4e5660] hover:bg-[#fff9f0]">Home</Link>
        <p className="px-3 pt-3 pb-1 text-[11px] font-medium text-[#8a8580]">Tenant</p>
        <Link href="/pendaftaran/umum" className="block rounded px-3 py-2.5 text-[13px] text-[#4e5660] hover:bg-[#fff9f0]">Pendaftaran Umum</Link>
        <Link href="/pendaftaran/mahasiswa" className="block rounded px-3 py-2.5 text-[13px] text-[#4e5660] hover:bg-[#fff9f0]">Pendaftaran KWU/Mahasiswa</Link>
        {links.map((item) => (
          <Link key={item.href} href={item.href} className="block rounded px-3 py-2.5 text-[13px] text-[#4e5660] hover:bg-[#fff9f0]">{item.label}</Link>
        ))}
        <Link href="/kontak" className="block rounded px-3 py-2.5 text-[13px] text-[#4e5660] hover:bg-[#fff9f0]">Kontak</Link>
      </nav>
    </details>
  );
}
