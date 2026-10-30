import { Container } from "@/components/layout/container";

type PageHeroProps = {
  title: string;
  description?: string;
  eyebrow?: string;
};

export function PageHero({ title, description, eyebrow }: PageHeroProps) {
  return (
    <section className="border-b border-foreground/10 py-16">
      <Container className="space-y-4">
        {eyebrow ? (
          <p className="text-sm font-medium tracking-wide text-foreground/50 uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-2xl text-lg text-foreground/60">{description}</p>
        ) : null}
      </Container>
    </section>
  );
}
