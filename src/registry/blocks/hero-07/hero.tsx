import { ChevronRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  AppleIcon,
  GithubIcon,
  GoogleIcon,
  MicrosoftIcon,
  SlackIcon,
} from "@/registry/blocks/social-icons/icons";

interface HeroTestimonial {
  quote: string;
  name: string;
  subtitle: string;
  avatar?: string;
}

interface Hero07Props {
  badge?: { text: string; url?: string };
  title?: string;
  description?: string;
  searchPlaceholder?: string;
  brandsLabel?: string;
  brands?: React.ReactNode[];
  img?: string;
  testimonialsTitle?: string;
  testimonials?: HeroTestimonial[];
  className?: string;
}

const defaultTestimonials: HeroTestimonial[] = [
  {
    quote:
      "These components saved me weeks of development time. Copy, paste, customize—it's that simple!",
    name: "Alex Chen",
    subtitle: "Frontend Developer",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "The components are beautifully designed and fully customizable. Perfect for rapid prototyping and production.",
    name: "Sarah Johnson",
    subtitle: "UI/UX Designer",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "TypeScript support and accessibility built-in? This is exactly what I need to ship faster.",
    name: "Michael Rodriguez",
    subtitle: "Full-Stack Engineer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
];

const defaultBrands: React.ReactNode[] = [
  <GoogleIcon key="google" className="size-6 grayscale" />,
  <MicrosoftIcon key="microsoft" className="size-6 grayscale" />,
  <AppleIcon key="apple" className="size-6" />,
  <GithubIcon key="github" className="size-6" />,
  <SlackIcon key="slack" className="size-6 grayscale" />,
];

const Hero07 = ({
  badge = { text: "50+ production-ready blocks and counting", url: "#" },
  title = "Blocks Made for\nPages You'll\nShip Faster",
  description = "Pre-built landing page components for React. Just copy the code and focus on what matters — your product.",
  searchPlaceholder = "Search blocks...",
  brandsLabel = "Built on tools you know and trust",
  brands = defaultBrands,
  img = "https://www.shadcnship.com/images/placeholders/hero-architecture-7.webp",
  testimonialsTitle = "Loved by Developers",
  testimonials = defaultTestimonials,
  className,
}: Hero07Props) => (
  <section className={cn("container mx-auto px-6 py-8 md:py-12", className)}>
    <div className="grid gap-8 lg:min-h-[85vh] lg:grid-cols-[11fr_9fr]">
      {/* Left column */}
      <div className="flex flex-col">
        {/* Main content */}
        <div className="mt-8 flex flex-col items-start gap-6 md:mt-16">
          {badge && (
            <Badge className="gap-1 py-1" asChild>
              <a href={badge.url}>
                {badge.text}
                <ChevronRight className="size-3.5" />
              </a>
            </Badge>
          )}

          <h1 className="text-4xl leading-tight font-semibold tracking-tight whitespace-pre-line md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="max-w-md text-muted-foreground">{description}</p>

          {/* Search input with icon button */}
          <div className="relative w-full max-w-md">
            <Input
              placeholder={searchPlaceholder}
              className="h-12 pr-14"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-1/2 right-1.5 -translate-y-1/2"
              aria-label="Search"
            >
              <Search className="size-4" />
            </Button>
          </div>
        </div>

        {/* Bottom brands */}
        <div className="mt-16 flex flex-col gap-4 lg:mt-auto">
          <p className="text-sm text-muted-foreground">{brandsLabel}</p>
          <div className="flex items-center gap-6 opacity-70">{brands}</div>
        </div>
      </div>

      {/* Right column: image card with floating testimonials */}
      <Card className="relative min-h-[420px] overflow-hidden p-0 lg:min-h-full">
        {img && (
          <img src={img} alt="" className="absolute inset-0 size-full object-cover" />
        )}

        {/* Floating testimonials overlay */}
        <div className="absolute top-8 right-6 z-10 flex w-[85%] max-w-sm flex-col gap-3 md:right-8">
          <h2 className="text-center text-xl font-medium text-white">
            {testimonialsTitle}
          </h2>

          {/* Overlapping stack: the featured quote card stays on top */}
          <div className="flex flex-col">
            {testimonials.slice(0, 1).map((item, index) => (
              <Card
                key={index}
                className="relative z-30 gap-3 border-0 bg-background/70 p-5 text-card-foreground backdrop-blur-sm"
              >
                <p className="text-sm leading-relaxed font-medium md:text-base">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="size-8">
                    <AvatarImage src={item.avatar} alt="" />
                    <AvatarFallback className="text-xs">
                      {item.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              </Card>
            ))}

            {/* Smaller cards sliding under the previous one */}
            {testimonials.slice(1, 3).map((item, index) => (
              <Card
                key={index}
                className={cn(
                  "relative -mt-4 flex-row items-center gap-3 border-0 bg-background/40 p-4 pt-7 text-card-foreground backdrop-blur-sm",
                  index === 0 ? "z-20" : "z-10 opacity-70",
                )}
              >
                <Avatar className="size-7">
                  <AvatarImage src={item.avatar} alt="" />
                  <AvatarFallback className="text-xs">
                    {item.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex min-w-0 flex-col">
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {item.subtitle}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Card>
    </div>
  </section>
);

export default Hero07;
export type { Hero07Props, HeroTestimonial };
