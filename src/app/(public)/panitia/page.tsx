import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { getCommitteeByDivision } from "@/data/panitia";

export const metadata: Metadata = {
  title: "Panitia",
  description: "Susunan panitia UtyGrowPath.",
};

export default function PanitiaPage() {
  const groups = getCommitteeByDivision();

  return (
    <>
      <PageHero
        eyebrow="Panitia"
        title="Susunan panitia"
        description="Seluruh divisi yang menjalankan event dari persiapan hingga selesai."
      />

      <Container className="space-y-12 py-16">
        {Object.entries(groups).map(([division, members]) => (
          <section key={division} className="space-y-4">
            <h2 className="text-xl font-medium">{division}</h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((member) => (
                <li
                  key={`${member.division}-${member.name}`}
                  className="rounded-2xl border border-foreground/10 p-6"
                >
                  <p className="font-medium">{member.name}</p>
                  <p className="mt-1 text-sm text-foreground/60">{member.role}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </Container>
    </>
  );
}
