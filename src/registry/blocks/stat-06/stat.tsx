import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Stat06Item {
  value: string;
  /** 0-100 — drives the card height: close to 0 = tallest, close to 100 = shortest */
  percent: number;
  description: React.ReactNode;
}

interface Stat06Props {
  label?: { text: string; highlight: string };
  description?: string;
  stats?: [Stat06Item, Stat06Item, Stat06Item];
  button?: { text: string; url?: string };
  className?: string;
}

const defaultStats: [Stat06Item, Stat06Item, Stat06Item] = [
  {
    value: "98%",
    percent: 98,
    description: (
      <>
        Our library has produced many blocks that have been shipped live,
        showcasing our expertise in{" "}
        <strong className="font-medium text-background">
          delivering high-quality
        </strong>
        .
      </>
    ),
  },
  {
    value: "64%",
    percent: 64,
    description: (
      <>
        Most developers using our components{" "}
        <strong className="font-medium text-background">ship faster</strong>,
        thanks to clean TypeScript APIs and a consistent design system.
      </>
    ),
  },
  {
    value: "0%",
    percent: 0,
    description: (
      <>
        Our blocks <strong className="font-medium text-background">never lock you in</strong>{" "}
        and are dedicated to staying free and open source — copy the code and
        own it.
      </>
    ),
  },
];

const hatchPattern = {
  backgroundImage:
    "repeating-linear-gradient(135deg, rgb(255 255 255 / 0.05) 0px, rgb(255 255 255 / 0.05) 1px, transparent 1px, transparent 8px)",
};

const Stat06 = ({
  label = { text: "Component library built on", highlight: "shadcn/ui" },
  description = "Explore our blocks, where clean design seamlessly meets developer experience, pushing boundaries and transforming ideas into impactful landing pages. We believe in crafting components that not only captivate but also drive meaningful conversions.",
  stats = defaultStats,
  button = { text: "Browse Components", url: "#" },
  className,
}: Stat06Props) => (
  <section className={cn("container mx-auto px-8 py-12 md:py-24", className)}>
    <div className="rounded-2xl border bg-card p-8 text-card-foreground md:p-12 lg:p-16">
      {/* Top: label left, catch paragraph right on the same line */}
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <div className="text-sm">
          <p className="text-muted-foreground">{label.text}</p>
          <p className="font-medium">{label.highlight}</p>
        </div>
        <p className="text-xl leading-snug tracking-tight md:text-2xl">
          {description}
        </p>
      </div>

      {/* Dark stat cards with hatch texture — the closer the stat is to 0, the taller the card */}
      <div className="mt-12 grid items-start gap-4 md:mt-16 md:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-end overflow-hidden rounded-xl bg-foreground p-6 text-background"
            style={{
              minHeight: `${Math.round(200 + ((100 - Math.min(Math.max(stat.percent, 0), 100)) / 100) * 120)}px`,
            }}
          >
            <div className="absolute inset-0" style={hatchPattern} />
            <div className="relative">
              <p className="text-5xl font-medium tracking-tight md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm text-background/70">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pill outline button bottom left */}
      {button && (
        <Button variant="outline" className="mt-8 rounded-full md:mt-12" asChild>
          <a href={button.url}>
            {button.text}
            <ArrowRight className="size-4" />
          </a>
        </Button>
      )}
    </div>
  </section>
);

export default Stat06;
export type { Stat06Props, Stat06Item };
