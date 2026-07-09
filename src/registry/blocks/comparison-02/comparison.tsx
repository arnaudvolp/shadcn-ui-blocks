import { Gauge } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComparisonBar {
  name: string;
  value: number;
  featured?: boolean;
  icon?: React.ReactNode;
}

interface Comparison02Props {
  title?: string;
  description?: string;
  tooltip?: string;
  bars?: ComparisonBar[];
  className?: string;
}

const defaultBars: ComparisonBar[] = [
  { name: "Competitor 1", value: 35 },
  { name: "Competitor 2", value: 25 },
  { name: "shadcnship", value: 99, featured: true },
  { name: "Competitor 4", value: 37 },
];

const hatchPattern = {
  backgroundImage:
    "repeating-linear-gradient(135deg, var(--muted) 0px, var(--muted) 6px, transparent 6px, transparent 14px)",
};

const Comparison02 = ({
  title = "Not all blocks are\ncreated equal",
  description = "See how shadcnship compares to the competition. Production-ready blocks built with shadcn/ui and Tailwind CSS.",
  tooltip = "productivity",
  bars = defaultBars,
  className,
}: Comparison02Props) => (
  <section className={cn("container mx-auto px-8 py-12 md:py-24", className)}>
    {/* Header */}
    <div className="mb-16 flex flex-col items-center gap-4 text-center md:mb-24">
      <h2 className="max-w-2xl text-4xl leading-tight font-medium tracking-tight whitespace-pre-line md:text-5xl">
        {title}
      </h2>
      <p className="max-w-xl text-muted-foreground md:text-lg">{description}</p>
    </div>

    {/* Bars */}
    <div className="grid h-80 w-full grid-cols-2 items-end gap-x-4 gap-y-10 md:h-96 md:grid-cols-4 md:gap-6">
      {bars.map((bar) => (
        <div key={bar.name} className="relative flex h-full flex-col">
          {/* Hatched track */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={hatchPattern}
          />

          {/* Floating tooltip above the featured bar */}
          {bar.featured && (
            <div className="absolute -top-4 left-1/2 z-10 flex -translate-x-1/2 -translate-y-full flex-col items-center">
              <div className="rounded-md bg-primary px-3 py-1 text-xs font-medium whitespace-nowrap text-primary-foreground">
                {tooltip}
              </div>
              <div className="-mt-1 size-2 rotate-45 bg-primary" />
            </div>
          )}

          {/* Value fill, anchored at the bottom */}
          <div
            className={cn(
              "absolute right-0 bottom-0 left-0 flex min-h-16 flex-col rounded-3xl p-2.5",
              bar.featured
                ? "bg-primary text-primary-foreground"
                : "bg-foreground text-background",
            )}
            style={{ height: `${bar.value}%` }}
          >
            {/* Round icon + percentage badge at the top of the fill */}
            <div
              className={cn(
                "flex w-fit items-center gap-2 rounded-full py-1.5 pr-4 pl-1.5",
                bar.featured
                  ? "bg-primary-foreground/20"
                  : "bg-background/20",
              )}
            >
              <span
                className={cn(
                  "flex size-8 items-center justify-center rounded-full",
                  bar.featured ? "bg-primary-foreground/25" : "bg-background/25",
                )}
              >
                {bar.icon ?? <Gauge className="size-4" />}
              </span>
              <span className="text-sm font-medium">{bar.value}%</span>
            </div>
          </div>

          {/* Name below the bar */}
          <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap text-muted-foreground">
            {bar.name}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Comparison02;
export type { Comparison02Props, ComparisonBar };
