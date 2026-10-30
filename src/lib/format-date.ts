/**
 * Format tanggal ISO ("2026-08-17") menjadi teks Bahasa Indonesia
 * ("17 Agustus 2026").
 */
export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(iso));
}
