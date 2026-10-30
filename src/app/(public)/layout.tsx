import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

/**
 * Layout untuk seluruh halaman publik: memakai Navbar + Footer.
 * Halaman yang butuh tampilan berbeda (mis. formulir pendaftaran) punya
 * route group sendiri, lihat src/app/(pendaftaran)/layout.tsx.
 */
export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
