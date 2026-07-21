import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Feature19Panel {
  label: string;
  image?: string;
  description: string;
}

interface Feature19Props {
  title?: string;
  panels?: [Feature19Panel, Feature19Panel];
  footer?: { left: string; center?: string; right: string };
  className?: string;
}

const Feature19 = ({
  title = "Stop building landing pages from scratch.",
  panels = [
    {
      label: "From scratch",
      image:
        "https://www.shadcnship.com/images/placeholders/hero-architecture-5.webp",
      description:
        "Custom CSS and one-off components might get you there, but perpetually rebuilding the same sections severely slows your team down.",
    },
    {
      label: "With blocks",
      image:
        "https://www.shadcnship.com/images/placeholders/hero-architecture-7.webp",
      description:
        "With production-ready blocks, a landing page can come together through copy, paste and customization — and your brand can be part of the process.",
    },
  ],
  footer = {
    left: "shadcnship",
    center: "Introduction",
    right: "01",
  },
  className,
}: Feature19Props) => (
  <section className={cn("container mx-auto px-8 py-12 md:py-24", className)}>
    <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
      {/* Left: large editorial title, flush to top */}
      <h2 className="text-4xl leading-tight font-medium tracking-tight md:text-5xl">
        {title}
      </h2>

      {/* Right: two compared image panels with circular arrow between */}
      <div className="relative">
        <div className="grid grid-cols-2 gap-4">
          {panels.map((panel, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-xl bg-muted">
                {panel.image ? (
                  <img
                    src={panel.image}
                    alt={panel.label}
                    className="aspect-3/4 w-full object-cover"
                  />
                ) : (
                  <div className="aspect-3/4 w-full" />
                )}
                <span className="absolute top-4 left-4 text-sm font-medium text-white">
                  {panel.label}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {panel.description}
              </p>
            </div>
          ))}
        </div>

        {/* Circular arrow button overlapping both panels */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-[40%] left-1/2 z-10 size-12 -translate-x-1/2 rounded-full shadow-md"
          aria-label="Compare"
        >
          <ArrowRight className="size-5" />
        </Button>
      </div>
    </div>

    {/* Minimal footer bar */}
    {footer && (
      <div className="mt-12 flex items-center justify-between border-t pt-4 text-xs text-muted-foreground md:mt-16">
        <span className="font-semibold text-foreground">{footer.left}</span>
        {footer.center && (
          <span className="rounded-full border px-3 py-0.5">
            {footer.center}
          </span>
        )}
        <span>{footer.right}</span>
      </div>
    )}
  </section>
);

export default Feature19;
export type { Feature19Props, Feature19Panel };
