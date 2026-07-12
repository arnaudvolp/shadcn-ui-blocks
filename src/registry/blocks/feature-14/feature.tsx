import { cn } from "@/lib/utils";

interface Feature14Item {
  title: string;
  description: string;
  image?: string;
}

interface Feature14Props {
  label?: string;
  title?: string;
  description?: string;
  items?: Feature14Item[];
  className?: string;
}

const defaultItems: Feature14Item[] = [
  {
    title: "Copy & Paste Ready",
    description:
      "Every component is ready to use. Just copy the code and paste it into your project.",
    image:
      "https://www.shadcnship.com/images/placeholders/hero-architecture-7.webp",
  },
  {
    title: "Fully Customizable",
    description:
      "Built with Tailwind CSS, every component can be easily modified to match your brand.",
    image:
      "https://www.shadcnship.com/images/placeholders/hero-architecture-5.webp",
  },
];

const Feature14 = ({
  label = "Features",
  title = "Everything You Need\nto Build Faster",
  description = "Production-ready blocks built with shadcn/ui and Tailwind CSS. Copy, customize, and ship.",
  items = defaultItems,
  className,
}: Feature14Props) => (
  <section className={cn("container mx-auto px-8 py-12 md:py-24", className)}>
    {/* Header */}
    <div className="mb-12 flex flex-col items-center gap-2 text-center">
      <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
        {label}
      </p>
      <h2 className="text-4xl leading-tight font-medium tracking-tight whitespace-pre-line md:text-5xl">
        {title}
      </h2>
      <p className="max-w-xl text-muted-foreground md:text-lg">{description}</p>
    </div>

    {/* 2-column grid */}
    <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center rounded-xl bg-muted/50 p-8 text-center md:p-10"
        >
          <div className="w-full max-w-xs overflow-hidden rounded-xl bg-muted">
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="aspect-square w-full object-cover"
              />
            ) : (
              <div className="aspect-square w-full" />
            )}
          </div>
          <h3 className="mt-8 text-xl font-medium tracking-tight">
            {item.title}
          </h3>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Feature14;
export type { Feature14Props, Feature14Item };
