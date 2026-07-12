import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface StackImage {
  src: string;
  alt?: string;
}

interface Cta05Props {
  images?: [StackImage, StackImage, StackImage];
  badge?: { text: string };
  title?: React.ReactNode;
  button?: { text: string; url?: string };
  className?: string;
}

const defaultImages: [StackImage, StackImage, StackImage] = [
  {
    src: "https://www.shadcnship.com/images/placeholders/hero-architecture-7.webp",
  },
  {
    src: "https://www.shadcnship.com/images/placeholders/hero-architecture-5.webp",
  },
  {
    src: "https://www.shadcnship.com/images/placeholders/hero-architecture-6.webp",
  },
];

// Fanned stack: left tilted back, center raised, right tilted forward on top
const stackClasses = [
  "-translate-x-[60%] translate-y-4 -rotate-12",
  "-translate-y-2 -rotate-2 z-10",
  "translate-x-[55%] translate-y-3 rotate-10 z-20",
];

const Cta05 = ({
  images = defaultImages,
  badge = { text: "Production-ready components" },
  title = (
    <>
      Ship faster. Build better.{" "}
      <span className="text-muted-foreground">
        Production-ready shadcn/ui blocks for your next project.
      </span>
    </>
  ),
  button = { text: "Get started now", url: "#" },
  className,
}: Cta05Props) => (
  <section className={cn("container mx-auto px-8 py-12 md:py-24", className)}>
    <div className="flex flex-col items-center text-center">
      {/* Fanned photo stack */}
      <div className="relative flex h-56 w-full items-center justify-center md:h-72">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute size-40 overflow-hidden rounded-3xl border-6 border-background shadow-2xl md:size-52",
              stackClasses[index],
            )}
          >
            <img
              src={image.src}
              alt={image.alt ?? ""}
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Reference badge */}
      {badge && (
        <Badge variant="secondary" className="mt-8 border border-border py-1">
          {badge.text}
        </Badge>
      )}

      {/* Two-line title with strong/soft contrast */}
      <h2 className="mt-4 max-w-2xl text-2xl leading-snug font-medium tracking-tight md:text-3xl">
        {title}
      </h2>

      {/* Pill button */}
      {button && (
        <Button size="lg" className="mt-6 rounded-full" asChild>
          <a href={button.url}>
            {button.text}
            <ArrowRight className="size-4" />
          </a>
        </Button>
      )}
    </div>
  </section>
);

export default Cta05;
export type { Cta05Props, StackImage };
