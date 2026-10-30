import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { coreTeam } from "@/data/panitia";

export const metadata: Metadata = {
  title: "Tim Kami",
  description: "Pengurus inti UtyGrowPath.",
};

export default function TimKamiPage() {
  return (
    <>
      <PageHero
        eyebrow="Tim Kami"
        title="Orang di balik UtyGrowPath"
        description="Pengurus inti yang mengoordinasikan seluruh rangkaian event."
      />

      <Container className="py-16">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreTeam.map((member) => (
            <li
              key={`${member.division}-${member.name}`}
              className="rounded-2xl border border-foreground/10 p-6"
            >
              <p className="font-medium">{member.name}</p>
              <p className="mt-1 text-sm text-foreground/60">{member.role}</p>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
