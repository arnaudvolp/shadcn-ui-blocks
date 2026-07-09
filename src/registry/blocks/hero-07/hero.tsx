import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Iphone } from "@/components/ui/iphone";

interface Hero07Props {
  badge?: { text: string; icon?: React.ReactNode; url?: string };
  title?: string;
  description?: React.ReactNode;
  img?: string;
  className?: string;
}

const Hero07 = ({
  badge = {
    text: "Sell Everywhere",
    icon: <Sparkles className="size-3.5" />,
    url: "#",
  },
  title = "Run your business effortlessly,\nanytime and anywhere!",
  description = (
    <>
      Manage everything effortlessly from your pocket with the{" "}
      <strong className="font-semibold text-foreground">powerful</strong>,{" "}
      <strong className="font-semibold text-foreground">full-featured</strong>{" "}
      mobile app, keeping your store running{" "}
      <strong className="font-semibold text-foreground">smoothly</strong>{" "}
      anywhere.
    </>
  ),
  img = "https://www.shadcnship.com/images/image-preview.webp",
  className,
}: Hero07Props) => {
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

          <h1 className="max-w-5xl text-4xl leading-tight font-semibold tracking-tight whitespace-pre-line md:text-5xl lg:text-6xl">
            {title}
          </h1>

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

export default Hero07;
