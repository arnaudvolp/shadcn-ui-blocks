"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface Testimonial04Card {
  image?: string;
  brand: string;
  title?: string;
  url?: string;
}

interface Testimonial04Props {
  title?: string;
  description?: string;
  readMore?: { text: string; url?: string };
  cards?: Testimonial04Card[];
  className?: string;
}

const defaultCards: Testimonial04Card[] = [
  {
    image:
      "https://www.shadcnship.com/images/placeholders/hero-architecture-7.webp",
    brand: "shadcnship",
    title: "How teams ship landing pages faster with reusable components",
    url: "#",
  },
  {
    image:
      "https://www.shadcnship.com/images/placeholders/hero-architecture-5.webp",
    brand: "Acme Corp",
    title: "How Acme scaled their design system with copy & paste blocks",
    url: "#",
  },
  {
    image:
      "https://www.shadcnship.com/images/placeholders/hero-architecture-6.webp",
    brand: "Globex",
    title: "How Globex rebuilt their marketing site in a week",
    url: "#",
  },
  {
    image:
      "https://www.shadcnship.com/images/placeholders/hero-architecture-8.webp",
    brand: "Initech",
    title: "How Initech kept brand consistency across every launch",
    url: "#",
  },
];

const Testimonial04 = ({
  title = "Loved by Developers",
  description = "See what developers are saying about building faster with our components",
  readMore = { text: "Read more", url: "#" },
  cards = defaultCards,
  className,
}: Testimonial04Props) => {
  const [active, setActive] = useState(0);

  return (
    <section className={cn("container mx-auto px-8 py-12 md:py-24", className)}>
      {/* Header */}
      <div className="mb-12 flex flex-col items-center gap-4 text-center">
        <h2 className="max-w-2xl text-4xl leading-tight font-medium tracking-tight md:text-5xl">
          {title}
        </h2>
        <p className="max-w-xl text-muted-foreground md:text-lg">
          {description}
        </p>
      </div>

      {/* Cards row — the hovered card expands, the others shrink.
          The last hovered card keeps the expanded width. */}
      <div className="mx-auto flex max-w-5xl flex-col gap-4 md:h-80 md:flex-row">
        {cards.map((card, index) => {
          const isActive = index === active;

          return (
            <Card
              key={index}
              onMouseEnter={() => setActive(index)}
              className="group relative h-48 min-w-0 basis-0 overflow-hidden p-0 transition-all duration-500 ease-in-out md:h-full"
              style={{ flexGrow: isActive ? 3 : 1 }}
            >
              <a href={card.url} className="absolute inset-0">
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title ?? card.brand}
                    className="size-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />

                {/* Expanded content, visible on the active card only */}
                {readMore && (
                  <span
                    className={cn(
                      "absolute top-4 right-4 inline-flex items-center gap-1.5 text-sm font-medium whitespace-nowrap text-white transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                  >
                    {readMore.text}
                    <ArrowRight className="size-4" />
                  </span>
                )}
                {card.title && (
                  <h3
                    className={cn(
                      "absolute bottom-12 left-4 max-w-sm text-lg leading-snug font-medium text-white transition-opacity duration-300",
                      isActive ? "opacity-100 delay-200" : "opacity-0",
                    )}
                  >
                    {card.title}
                  </h3>
                )}

                {/* Brand: bottom-left when active, bottom-center otherwise */}
                <span
                  className={cn(
                    "absolute bottom-4 text-sm font-semibold tracking-wide whitespace-nowrap text-white/90 transition-all duration-500",
                    isActive ? "left-4" : "left-1/2 -translate-x-1/2",
                  )}
                >
                  {card.brand}
                </span>
              </a>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial04;
export type { Testimonial04Props, Testimonial04Card };
