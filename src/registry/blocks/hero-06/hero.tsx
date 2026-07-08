import { ExternalLink, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Hero06Props {
  badge?: {
    tag?: string;
    text: string;
    url?: string;
  };
  title?: string;
  description?: string;
  primaryButton?: { text: string; url?: string };
  secondaryButton?: { text: string; url?: string };
  backgroundImage?: string;
  backgroundImageDark?: string;
  className?: string;
}

const Hero06 = ({
  badge = {
    tag: "New",
    text: "See what's new in our latest release",
    url: "#",
  },
  title = "Build Faster with Shadcn UI Blocks",
  description = "Pre-built landing page components for React. Copy, paste, and customize to ship your product faster.",
  primaryButton = { text: "Get started", url: "#" },
  secondaryButton = { text: "Watch demo", url: "#" },
  backgroundImage = "/images/backgrounds/background-1.webp",
  backgroundImageDark = "/images/backgrounds/background-1-dark.webp",
  className,
}: Hero06Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full items-center overflow-hidden py-16 md:py-24",
        className,
      )}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center dark:hidden"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      {backgroundImageDark && (
        <div
          className="absolute inset-0 hidden bg-cover bg-center dark:block"
          style={{ backgroundImage: `url(${backgroundImageDark})` }}
        />
      )}

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          {badge && (
            <Badge
              variant="outline"
              className="gap-2 border border-border py-1 pr-3 pl-1"
              asChild
            >
              <a href={badge.url || "#"}>
                {badge.tag && (
                  <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
                    {badge.tag}
                  </span>
                )}
                <span>{badge.text}</span>
                <ExternalLink className="size-3" />
              </a>
            </Badge>
          )}

          <h1 className="max-w-5xl text-4xl leading-tight font-medium tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="max-w-2xl text-muted-foreground md:text-lg">
            {description}
          </p>

          <div className="grid w-full grid-cols-1 gap-4 sm:w-fit sm:grid-cols-2">
            {primaryButton && (
              <Button size="lg" variant="default" className="w-full" asChild>
                <a href={primaryButton.url || "#"}>{primaryButton.text}</a>
              </Button>
            )}
            {secondaryButton && (
              <Button size="lg" variant="outline" className="w-full" asChild>
                <a href={secondaryButton.url || "#"}>
                  {secondaryButton.text}
                  <Play className="size-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero06;
