import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface Feature15Props {
  badge?: { text: string; icon?: React.ReactNode; url?: string };
  title?: string;
  description?: React.ReactNode;
  img?: string;
  className?: string;
}

const Feature15 = ({
  badge = {
    text: "Production-ready components",
    url: "#",
  },
  title = "Shadcn UI Blocks, Copy & Customize",
  description = (
    <>
      Pre-built landing page components for React. Just{" "}
      <strong className="font-semibold text-foreground">copy the code</strong>{" "}
      and focus on what matters —{" "}
      <strong className="font-semibold text-foreground">your product</strong>.
    </>
  ),
  img = "/images/mockups/iphone-crop.webp",
  className,
}: Feature15Props) => {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden py-16 md:py-24",
        className,
      )}
    >
      {/* Dot pattern background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(var(--border) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 40%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 40%, #000 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          {badge && (
            <Badge
              variant="outline"
              className="gap-1.5 border border-border py-1"
              asChild
            >
              <a href={badge.url}>
                {badge.icon}
                {badge.text}
              </a>
            </Badge>
          )}

          <h2 className="max-w-5xl text-4xl leading-tight font-semibold tracking-tight whitespace-pre-line md:text-5xl">
            {title}
          </h2>

          {/* Product image, centered and fully visible */}
          <div className="flex h-64 w-full max-w-lg items-center justify-center overflow-hidden md:h-80">
            <img
              src={img}
              alt=""
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <p className="max-w-xl text-muted-foreground md:text-lg">
            {description}
          </p>

          {/* Decorative dots row */}
          <div
            aria-hidden
            className="mt-10 flex items-center justify-center gap-3 md:mt-16"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className={cn(
                  "size-1.5 bg-muted-foreground/40",
                  i % 2 === 0 ? "rotate-45" : "rounded-full",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature15;
