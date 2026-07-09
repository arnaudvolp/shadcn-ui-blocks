import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Iphone } from "@/components/ui/iphone";

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
    icon: <Sparkles className="size-3.5" />,
    url: "#",
  },
  title = "Shadcn UI Blocks,\nCopy & Customize",
  description = (
    <>
      Pre-built landing page components for React. Just{" "}
      <strong className="font-semibold text-foreground">copy the code</strong>{" "}
      and focus on what matters —{" "}
      <strong className="font-semibold text-foreground">your product</strong>.
    </>
  ),
  img = "https://www.shadcnship.com/images/image-preview.webp",
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

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          {badge && (
            <Badge
              variant="secondary"
              className="gap-1.5 border border-border py-1"
              asChild
            >
              <a href={badge.url}>
                {badge.icon}
                {badge.text}
              </a>
            </Badge>
          )}

          <h2 className="max-w-5xl text-4xl leading-tight font-semibold tracking-tight whitespace-pre-line md:text-5xl lg:text-6xl">
            {title}
          </h2>

          {/* Phone mockup, cropped at the bottom */}
          <div className="mt-6 max-h-64 w-56 overflow-hidden md:max-h-80 md:w-72">
            <Iphone src={img} />
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
