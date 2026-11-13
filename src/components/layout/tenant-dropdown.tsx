"use client";

import { useState } from "react";
import Link from "next/link";

const tenantLinks = [
  { href: "/info-tenant", label: "Informasi tenant" },
  { href: "/pendaftaran/umum", label: "Pendaftaran umum" },
];

export function TenantDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative py-2">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen((open) => !open)}
        className="whitespace-nowrap py-2 text-[13px] font-normal tracking-[0.01em] text-[#4e5660] transition-colors hover:text-[#e13b43] xl:text-sm"
      >
        Tenant <span aria-hidden="true" className="ml-1 text-[10px] text-[#8a8580]">⌄</span>
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 min-w-48 rounded-md border border-[#e9dfca] bg-white p-1.5 shadow-md">
          {tenantLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block rounded px-3 py-2.5 text-[13px] text-[#4e5660] hover:bg-[#fff9f0] hover:text-[#e13b43]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
