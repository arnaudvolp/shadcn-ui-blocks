import { ArrowUpRight, Blocks, Package, TrendingUp, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Stat05Item {
  icon?: React.ReactNode;
  label: string;
  value: string;
  description: string;
}

interface Stat05Props {
  badge?: { text: string; icon?: React.ReactNode };
  title?: string;
  description?: string;
  link?: { text: string; url?: string };
  footer?: React.ReactNode;
  avatars?: string[];
  rating?: string;
  stats?: [Stat05Item, Stat05Item, Stat05Item];
  className?: string;
}

const defaultStats: [Stat05Item, Stat05Item, Stat05Item] = [
  {
    icon: <Blocks className="size-4" />,
    label: "Ready-to-Use Blocks",
    value: "50+",
    description: "Hero sections, feature grids, pricing tables and more",
  },
  {
    icon: <Users className="size-4" />,
    label: "Developers Using",
    value: "1000+",
    description: "Building  faster",
  },
  {
    icon: <Package className="size-4" />,
    label: "Free & Open Source",
    value: "100%",
    description: "No lock-in, copy the code",
  },
];

const Stat05 = ({
  badge = {
    text: "Performance stats",
    icon: <TrendingUp className="size-3.5" />,
  },
  title = "Trusted by\nDevelopers",
  description = "Production-ready components built with shadcn/ui and Tailwind CSS. Copy, customize, and ship faster.",
  link = { text: "Browse Components", url: "#" },
  footer = (
    <>
      <strong className="font-medium text-foreground">
        Copy, customize, and ship —
      </strong>{" "}
      production-ready blocks for your next landing page.
    </>
  ),
  avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
  ],
  rating = "rated 4.8/5",
  stats = defaultStats,
  className,
}: Stat05Props) => (
  <section className={cn("container mx-auto px-8 py-12 md:py-24", className)}>
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      {/* Left: text column */}
      <div className="flex flex-col">
        <div className="flex flex-col items-start gap-4">
          {badge && (
            <Badge
              variant="outline"
              className="gap-1.5 border border-border py-1"
            >
              {badge.icon}
              {badge.text}
            </Badge>
          )}
          <h2 className="text-4xl leading-tight font-medium tracking-tight whitespace-pre-line md:text-5xl">
            {title}
          </h2>
          <p className="max-w-md text-muted-foreground md:text-lg">
            {description}
          </p>
          {link && (
            <a
              href={link.url}
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              {link.text}
              <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>

        {/* Bottom: footer text + avatars + rating */}
        <div className="mt-12 flex flex-col gap-4 lg:mt-auto">
          <p className="max-w-sm text-sm text-muted-foreground">{footer}</p>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <Avatar key={i} className="size-7 border-2 border-background">
                  <AvatarImage src={src} alt="" />
                  <AvatarFallback className="text-xs">{i + 1}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">— {rating}</span>
          </div>
        </div>
      </div>

      {/* Right: asymmetric cards grid (1 large on top, 2 small below) */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={cn(
              "flex min-h-48 flex-col justify-between rounded-xl bg-muted p-6 md:min-h-56",
              index === 0 && "col-span-2",
            )}
          >
            <div className="flex items-center gap-2">
              <span className="text-primary">{stat.icon}</span>
              <span className="text-sm font-medium">{stat.label}</span>
            </div>
            <div>
              <p className="text-3xl font-medium tracking-tight md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stat05;
export type { Stat05Props, Stat05Item };
