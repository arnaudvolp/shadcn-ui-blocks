"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Testimonial03Item {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

interface Testimonial03Props {
  label?: string;
  title?: string;
  description?: string;
  testimonials?: Testimonial03Item[];
  cta?: {
    primary?: { text: string; url: string };
    secondary?: { text: string; url: string };
  };
  footnote?: string;
  className?: string;
}

const StarRating = ({
  rating,
  white,
  className,
}: {
  rating: number;
  white?: boolean;
  className?: string;
}) => (
  <div className={cn("flex gap-0.5", className)}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={cn(
          "size-3",
          white
            ? i < Math.round(rating)
              ? "fill-white text-white"
              : "fill-white/20 text-white/20"
            : i < Math.round(rating)
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted-foreground/20 text-muted-foreground/20",
        )}
      />
    ))}
  </div>
);

const defaultTestimonials: Testimonial03Item[] = [
  {
    name: "Emily Watson",
    role: "Product Manager",
    image: "https://www.shadcnship.com/images/avatars/avatar-1.webp",
    content:
      "Our team's velocity increased significantly. The components are production-ready and beautifully designed — we went from prototype to live in days, not weeks.",
    rating: 5,
  },
  {
    name: "Alex Chen",
    role: "Frontend Developer",
    image: "https://www.shadcnship.com/images/avatars/avatar-3.webp",
    content:
      "These components saved me weeks of development time. Copy, paste, customize — it's that simple. The TypeScript support and accessibility built-in are exactly what I need.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    image: "https://www.shadcnship.com/images/avatars/avatar-2.webp",
    content:
      "The components are beautifully designed and fully customizable. Perfect for rapid prototyping and production alike. Dark mode works flawlessly out of the box.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Full-Stack Engineer",
    image: "https://www.shadcnship.com/images/avatars/avatar-4.webp",
    content:
      "Zero dependencies, fully typed, and production-ready. This is how component libraries should be built. No fighting with CSS frameworks or complex overrides. I dropped it into three different Next.js projects in a week — the API surface stayed consistent and nothing broke. It genuinely saved me days of setup and lets me focus on shipping features instead of maintaining UI primitives.",
    rating: 5,
  },
];

const Testimonial03 = ({
  label = "Testimonials",
  title = "Loved by thousands of users.",
  description = "See what developers, designers, and product teams are saying about shipping faster with our components.",
  testimonials = defaultTestimonials,
  cta = {
    primary: { text: "Get started", url: "#" },
    secondary: { text: "Browse blocks", url: "#" },
  },
  footnote = "Build faster and ship better — with production-ready components. Available for React and Next.js.",
  className,
}: Testimonial03Props) => {
  const [current, setCurrent] = useState(0);
  const n = testimonials.length;
  const prevIdx = (current - 1 + n) % n;
  const nextIdx = (current + 1) % n;

  const active = testimonials[current];
  const prev = testimonials[prevIdx];
  const next = testimonials[nextIdx];

  return (
    <section className={cn("container mx-auto px-8 py-12 md:py-24", className)}>
      {/* ── Header ── */}
      <div className="flex max-w-2xl flex-col gap-4">
        <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          {label}
        </p>
        <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
          {title}
        </h2>
        <p className="text-muted-foreground md:text-lg">{description}</p>
      </div>

      {/* ── Carousel ── */}
      <div className="mt-12 flex flex-col gap-6 lg:grid lg:grid-cols-[auto_1fr] lg:items-end">
        {/* Left col: ← nav + prev card — desktop only */}
        <div className="hidden lg:flex lg:flex-col lg:justify-between lg:gap-8">
          <button
            onClick={() => setCurrent(prevIdx)}
            aria-label="Previous testimonial"
            className="flex size-10 items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-80"
          >
            <ArrowLeft className="size-4" />
          </button>

          {/* Prev card */}
          <div className="w-52 rounded-2xl border bg-card p-4 shadow-none">
            <div className="mb-3 size-12 overflow-hidden rounded-full">
              <img
                src={prev.image}
                alt={prev.name}
                className="size-full object-cover"
              />
            </div>
            <div className="flex items-start justify-between gap-2">
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-medium">{prev.name}</p>
                <p className="text-xs text-muted-foreground">{prev.role}</p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-0.5">
                <p className="text-xs text-muted-foreground">Grade</p>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold">{prev.rating}.0</span>
                  <StarRating rating={prev.rating} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right col: photo + content + info bar */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-8">
          {/* Center photo */}
          <img
            src={active.image}
            alt={active.name}
            className="w-full rounded-2xl object-cover aspect-video lg:aspect-3/4 lg:w-64 lg:shrink-0"
          />

          {/* Right inner col: quote+next card on top, info bar on bottom */}
          <div className="flex flex-1 flex-col gap-4">
            {/* Content row: stacked on mobile, side-by-side on desktop */}
            <div className="flex flex-col gap-4 lg:flex-row lg:min-h-0 lg:flex-1 lg:items-start lg:gap-6">
              {/* Quote text */}
              <p className="text-sm leading-relaxed text-muted-foreground lg:flex-1">
                &ldquo;{active.content}&rdquo;
              </p>

              {/* Next card */}
              <div className="relative w-full self-start overflow-hidden rounded-2xl lg:w-2/5 lg:shrink-0">
                <img
                  src={next.image}
                  alt={next.name}
                  className="aspect-video w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/20 to-transparent p-4">
                  <div className="flex items-end justify-between gap-2">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-medium text-white">
                        {next.name}
                      </p>
                      <p className="text-xs text-white/60">{next.role}</p>
                    </div>
                    <div className="flex flex-col items-end gap-0.5">
                      <p className="text-xs text-white/50">Rating</p>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-semibold text-white">
                          {next.rating}.0
                        </span>
                        <StarRating rating={next.rating} white />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info bar */}
            <div className="flex w-full items-center gap-4 border-t pt-4 lg:w-2/3">
              {/* ← button — mobile only */}
              <button
                onClick={() => setCurrent(prevIdx)}
                aria-label="Previous testimonial"
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-80 lg:hidden"
              >
                <ArrowLeft className="size-4" />
              </button>

              <div className="flex flex-1 flex-col gap-0.5">
                <p className="font-medium">{active.name}</p>
                <p className="text-sm text-muted-foreground">{active.role}</p>
              </div>
              <div className="flex items-center gap-3 border-l pl-4">
                <div className="flex flex-col items-end gap-0.5">
                  <p className="text-xs text-muted-foreground">Rating</p>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold">
                      {active.rating}.0
                    </span>
                    <StarRating rating={active.rating} />
                  </div>
                </div>
                <button
                  onClick={() => setCurrent(nextIdx)}
                  aria-label="Next testimonial"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-80"
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="mt-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex flex-wrap items-center gap-3">
          {cta?.primary && (
            <Button size="lg" className="rounded-full" asChild>
              <a href={cta.primary.url}>
                {cta.primary.text}
                <ArrowRight className="ml-1 size-4" />
              </a>
            </Button>
          )}
          {cta?.secondary && (
            <Button
              size="lg"
              variant="outline"
              className="rounded-full"
              asChild
            >
              <a href={cta.secondary.url}>{cta.secondary.text}</a>
            </Button>
          )}
        </div>
        {footnote && (
          <p className="max-w-xs text-sm text-muted-foreground sm:text-right">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
};

export default Testimonial03;
export type { Testimonial03Props, Testimonial03Item };
