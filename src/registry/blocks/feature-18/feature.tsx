import { ArrowRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature18Card {
  category: string;
  title: string;
  image?: string;
  url?: string;
}

interface Feature18Props {
  title?: string;
  cards?: Feature18Card[];
  link?: { text: string; url?: string };
  className?: string;
}

const defaultCards: Feature18Card[] = [
  {
    category: "SaaS",
    title: "How to ship a landing page in a single day?",
    image:
      "https://www.shadcnship.com/images/placeholders/hero-architecture-7.webp",
    url: "#",
  },
  {
    category: "E-commerce",
    title: "How to durably cut development costs?",
    image:
      "https://www.shadcnship.com/images/placeholders/hero-architecture-5.webp",
    url: "#",
  },
  {
    category: "Agency",
    title: "How to balance consistency and custom design?",
    image:
      "https://www.shadcnship.com/images/placeholders/hero-architecture-6.webp",
    url: "#",
  },
];

const Feature18 = ({
  title = "Our case studies:\nat the heart of every launch",
  cards = defaultCards,
  link = { text: "View all", url: "#" },
  className,
}: Feature18Props) => (
  <section className={cn("bg-foreground py-12 md:py-24", className)}>
    <div className="container mx-auto px-8">
      {/* Gradient title with decorative icon */}
      <div className="flex items-start gap-4">
        <Plus className="mt-2 size-5 shrink-0 text-background/50" />
        <h2 className="bg-linear-to-r from-background to-background/60 bg-clip-text text-3xl leading-tight font-medium tracking-tight whitespace-pre-line text-transparent md:text-4xl">
          {title}
        </h2>
      </div>

      {/* White cards */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.url}
            className="group flex flex-col overflow-hidden rounded-xl bg-background text-foreground"
          >
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                {card.category}
              </p>
              <h3 className="mt-4 text-xl font-medium tracking-tight">
                {card.title}
              </h3>
              <div className="mt-6 flex flex-1 items-end justify-end">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-90">
                  <Plus className="size-4" />
                </span>
              </div>
            </div>
            {/* Image band at the bottom of the card */}
            <div className="h-20 w-full bg-muted">
              {card.image && (
                <img
                  src={card.image}
                  alt={card.title}
                  className="size-full object-cover"
                />
              )}
            </div>
          </a>
        ))}
      </div>

      {/* View all link */}
      {link && (
        <a
          href={link.url}
          className="group mt-10 inline-flex items-center gap-3 text-background"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-0.5">
            <ArrowRight className="size-4" />
          </span>
          <span className="text-xs font-medium tracking-widest uppercase">
            {link.text}
          </span>
        </a>
      )}
    </div>
  </section>
);

export default Feature18;
export type { Feature18Props, Feature18Card };
