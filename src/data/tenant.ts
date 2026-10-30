import type { Tenant } from "@/types/content";

/**
 * Daftar tenant.
 *
 * TODO(handover): ganti isi array ini dengan data tenant asli.
 * Setiap tenant otomatis mendapat halaman di /tenant/<slug>.
 * `slug` harus unik, huruf kecil, dan tanpa spasi.
 */
export const tenants: Tenant[] = [
  {
    slug: "contoh-tenant-satu",
    name: "Contoh Tenant Satu",
    category: "Kuliner",
    description:
      "Deskripsi singkat tenant. Ganti teks ini dengan profil tenant yang sebenarnya.",
    image: "/images/2026/tenant/placeholder.png",
  },
  {
    slug: "contoh-tenant-dua",
    name: "Contoh Tenant Dua",
    category: "Kriya",
    description:
      "Deskripsi singkat tenant. Ganti teks ini dengan profil tenant yang sebenarnya.",
    image: "/images/2026/tenant/placeholder.png",
  },
];

export function getTenantBySlug(slug: string): Tenant | undefined {
  return tenants.find((tenant) => tenant.slug === slug);
}
