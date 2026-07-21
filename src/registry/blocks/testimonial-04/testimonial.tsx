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
  featured?: Testimonial04Card;
  cards?: Testimonial04Card[];
  className?: string;
}

const Testimonial04 = ({
  title = "Loved by Developers",
  description = "See what developers are saying about building faster with our components",
  readMore = { text: "Read more", url: "#" },
  featured = {
    image:
      "https://www.shadcnship.com/images/placeholders/hero-architecture-7.webp",
    brand: "shadcnship",
    title: "How teams ship landing pages faster with reusable components",
    url: "#",
  },
  cards = [
    {
      image:
        "https://www.shadcnship.com/images/placeholders/hero-architecture-5.webp",
      brand: "Acme Corp",
      url: "#",
    },
    {
      image:
        "https://www.shadcnship.com/images/placeholders/hero-architecture-6.webp",
      brand: "Globex",
      url: "#",
    },
    {
      image:
        "https://www.shadcnship.com/images/placeholders/hero-architecture-8.webp",
      brand: "Initech",
      url: "#",
    },
  ],
  className,
}: Testimonial04Props) => (
  <section className={cn("container mx-auto px-8 py-12 md:py-24", className)}>
    {/* Header */}
    <div className="mb-12 flex flex-col items-center gap-4 text-center">
      <h2 className="max-w-2xl text-4xl leading-tight font-medium tracking-tight md:text-5xl">
        {title}
      </h2>
      <p className="max-w-xl text-muted-foreground md:text-lg">{description}</p>
    </div>

    {/* Unequal cards row: dominant featured card + 3 narrow portrait cards */}
    <div className="mx-auto grid h-[520px] max-w-5xl grid-cols-2 gap-4 md:h-80 md:grid-cols-[3fr_1fr_1fr_1fr]">
      {/* Featured landscape card */}
      <Card className="group relative col-span-2 overflow-hidden p-0 md:col-span-1">
        <a href={featured.url} className="absolute inset-0">
          {featured.image && (
            <img
              src={featured.image}
              alt={featured.title ?? featured.brand}
              className="size-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />
          {readMore && (
            <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 text-sm font-medium text-white">
              {readMore.text}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          )}
          <div className="absolute bottom-4 left-4 flex flex-col items-start gap-3">
            {featured.title && (
              <h3 className="max-w-sm text-lg leading-snug font-medium text-white">
                {featured.title}
              </h3>
            )}
            <span className="text-sm font-semibold tracking-wide text-white/90">
              {featured.brand}
            </span>
          </div>
        </a>
      </Card>

      {/* Narrow portrait cards */}
      {cards.map((card, index) => (
        <Card key={index} className="group relative overflow-hidden p-0">
          <a href={card.url} className="absolute inset-0">
            {card.image && (
              <img
                src={card.image}
                alt={card.brand}
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-semibold tracking-wide whitespace-nowrap text-white/90">
              {card.brand}
            </span>
          </a>
        </Card>
      ))}
    </div>
  </section>
);

export default Testimonial04;
export type { Testimonial04Props, Testimonial04Card };
