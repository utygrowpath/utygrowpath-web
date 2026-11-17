import type { ReactNode } from "react";

/**
 * Layout khusus alur pendaftaran peserta: full screen tanpa navbar/header,
 * fokus murni untuk scan QR/barcode on-the-spot.
 */
export default function PendaftaranLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-dvh bg-[#fff9f0]">{children}</div>;
}

