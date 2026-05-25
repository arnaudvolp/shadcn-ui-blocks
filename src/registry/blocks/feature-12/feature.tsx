"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Feature12Item {
  title: string;
  description: string;
  image?: string;
}

interface Feature12Props {
  label?: string;
  items?: Feature12Item[];
  className?: string;
}

const defaultItems: Feature12Item[] = [
  {
    title: "Components.",
    description:
      "Production-ready blocks built on shadcn/ui and Tailwind CSS. Every component is accessible by default, dark mode ready, and fully consistent with your design system.",
    image:
      "https://www.shadcnship.com/images/placeholders/hero-architecture-7.webp",
  },
  {
    title: "Customization.",
    description:
      "Fully typed and themeable from top to bottom. Swap colors, spacing, and copy through clean props — no digging through opaque internals or fighting CSS specificity.",
    image:
      "https://www.shadcnship.com/images/placeholders/hero-architecture-5.webp",
  },
  {
    title: "Performance.",
    description:
      "Zero runtime overhead. Components ship as plain React and Tailwind — no CSS-in-JS, no heavy runtimes, no layout shift. Just fast, static HTML from the first byte.",
    image:
      "https://www.shadcnship.com/images/placeholders/hero-architecture-10.webp",
  },
  {
    title: "Accessibility.",
    description:
      "Every interactive element follows WAI-ARIA patterns out of the box. Keyboard navigation, focus management, and screen reader support are built in — not bolted on.",
    image:
      "https://www.shadcnship.com/images/placeholders/hero-architecture-12.webp",
  },
  {
    title: "Developer Experience.",
    description:
      "TypeScript-first APIs, consistent naming, and self-contained files. Copy a block, drop it in, and ship — the entire surface fits in your head after five minutes.",
    image:
      "https://www.shadcnship.com/images/placeholders/hero-architecture-7.webp",
  },
];

const Feature12 = ({
  label = "Why shadcnship",
  items = defaultItems,
  className,
}: Feature12Props) => {
  const [active, setActive] = useState(0);
  const activeItem = items[active];

  return (
    <section className={cn("container mx-auto px-8 py-12 md:py-24", className)}>
      {label && (
        <p className="mb-12 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          {label}
        </p>
      )}

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        {/* Left: clickable title list */}
        <div className="flex flex-col">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                "group flex cursor-pointer items-center gap-4 py-2 text-left transition-colors duration-200",
                i === active
                  ? "text-foreground"
                  : "text-muted-foreground/50 hover:text-muted-foreground",
              )}
            >
              <span
                className={cn(
                  "size-1.5 shrink-0 rounded-full transition-colors duration-200",
                  i === active ? "bg-foreground" : "bg-transparent",
                )}
              />
              <span className="text-4xl font-medium tracking-tight md:text-5xl">
                {item.title}
              </span>
            </button>
          ))}
        </div>

        {/* Right: active item content */}
        <div className="flex flex-col gap-6">
          {/* Image with index badge */}
          <div className="relative overflow-hidden rounded-2xl bg-muted">
            {activeItem.image ? (
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="aspect-video w-full object-cover"
              />
            ) : (
              <div className="aspect-video w-full" />
            )}
            <div className="absolute bottom-4 left-4">
              <span className="text-2xl font-medium text-white/70 tabular-nums">
                {String(active + 1).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground md:text-lg">
            {activeItem.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature12;
export type { Feature12Props, Feature12Item };
