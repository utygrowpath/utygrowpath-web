import type { Metadata } from "next";
import { VenueMapExplorer } from "@/components/sections/venue-map-explorer";

export const metadata: Metadata = {
  title: "Eksplor Denah Venue | UTY Growpath Expo Season 4",
  description:
    "Denah interaktif bergaya Google Maps untuk lokasi booth tenant, panggung utama, dan fasilitas UTY Growpath Expo Season 4.",
};

export default function EksplorVenuePage() {
  return (
    <main className="relative h-dvh w-screen overflow-hidden bg-[#faf4ea]">
      <VenueMapExplorer />
    </main>
  );
}
