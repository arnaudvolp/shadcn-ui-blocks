import { Blocks, ChevronRight, Cloud, SquareTerminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature17Item {
  icon?: React.ReactNode;
  label: string;
  title: string;
  description: string;
  link?: { text: string; url?: string };
  image?: string;
  tags?: string[];
}

interface Feature17Props {
  items?: Feature17Item[];
  className?: string;
}

const defaultItems: Feature17Item[] = [
  {
    icon: <Blocks className="size-4" />,
    label: "Components",
    title: "Copy & Paste Ready",
    description:
      "Every component is ready to use. Just copy the code and paste it into your project.",
    link: { text: "Learn More", url: "#" },
    image:
      "https://www.shadcnship.com/images/placeholders/hero-architecture-7.webp",
    tags: ["Hero", "Features", "Pricing", "Testimonials", "FAQ"],
  },
  {
    icon: <SquareTerminal className="size-4" />,
    label: "Customization",
    title: "Fully Customizable",
    description:
      "Built with Tailwind CSS, every component can be easily modified to match your brand.",
    link: { text: "Learn More", url: "#" },
    image:
      "https://www.shadcnship.com/images/placeholders/hero-architecture-5.webp",
  },
  {
    icon: <Cloud className="size-4" />,
    label: "Developer Experience",
    title: "TypeScript First",
    description:
      "All components are fully typed with TypeScript for better developer experience.",
    link: { text: "Learn More", url: "#" },
    image:
      "https://www.shadcnship.com/images/placeholders/hero-architecture-6.webp",
  },
];

const Feature17 = ({ items = defaultItems, className }: Feature17Props) => (
  <section className={cn("container mx-auto px-8 py-12 md:py-24", className)}>
    <div className="border-y">
      {items.map((item, index) => {
        const reversed = index % 2 === 1;

        return (
          <div
            key={index}
            className="grid border-b last:border-b-0 md:grid-cols-2 md:divide-x"
          >
            {/* Text cell */}
            <div
              className={cn(
                "flex flex-col items-start justify-center gap-4 p-8 md:p-12 lg:p-16",
                reversed && "md:order-2",
              )}
            >
              <div className="flex items-center gap-2 text-sm font-medium">
                {item.icon}
                {item.label}
              </div>
              <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                {item.title}
              </h3>
              <p className="max-w-md text-sm text-muted-foreground md:text-base">
                {item.description}
              </p>
              {item.link && (
                <a
                  href={item.link.url}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  {item.link.text}
                  <ChevronRight className="size-3.5" />
                </a>
              )}
            </div>

            {/* Illustration cell */}
            <div
              className={cn(
                "flex flex-col items-center justify-center gap-6 p-8 md:p-12",
                reversed && "md:order-1",
              )}
            >
              <div className="w-full max-w-sm overflow-hidden rounded-xl bg-muted/30">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-4/3 w-full object-cover"
                  />
                ) : (
                  <div className="aspect-4/3 w-full" />
                )}
              </div>
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={cn(
                        "text-xs",
                        tagIndex === 0
                          ? "rounded-full border px-3 py-1 font-medium"
                          : "text-muted-foreground",
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default Feature17;
export type { Feature17Props, Feature17Item };
