import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature16Column {
  label: string;
  title: string;
  description: string;
  link?: { text: string; url?: string };
  image?: string;
}

interface Feature16Props {
  columns?: [Feature16Column, Feature16Column];
  className?: string;
}

const defaultColumns: [Feature16Column, Feature16Column] = [
  {
    label: "Copy & paste",
    title: "Every component\nready for production",
    description:
      "Speed up your workflow by making it simple to build your landing page. Every block is ready to use — just copy the code, paste it into your project, and it works out of the box with your existing shadcn/ui setup.",
    link: { text: "Learn more", url: "#" },
    image:
      "https://www.shadcnship.com/images/placeholders/hero-architecture-7.webp",
  },
  {
    label: "Customization",
    title: "Make every block\nyour own",
    description:
      "Want to match your brand down to the last pixel? Built with Tailwind CSS and typed props, every component can be easily modified — swap colors, spacing, and copy without fighting CSS specificity.",
    link: { text: "Learn more", url: "#" },
    image:
      "https://www.shadcnship.com/images/placeholders/hero-architecture-5.webp",
  },
];

const Feature16 = ({
  columns = defaultColumns,
  className,
}: Feature16Props) => (
  <section className={cn("container mx-auto px-8 py-12 md:py-24", className)}>
    <div className="grid gap-12 md:grid-cols-2 md:gap-16">
      {columns.map((column, index) => (
        <div key={index} className="flex flex-col border-t pt-6">
          <p className="text-sm text-muted-foreground">{column.label}</p>
          <h3 className="mt-6 text-2xl leading-tight font-medium tracking-tight whitespace-pre-line md:text-3xl">
            {column.title}
          </h3>
          <p className="mt-4 max-w-md text-sm text-muted-foreground md:text-base">
            {column.description}
          </p>
          {column.link && (
            <a
              href={column.link.url}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
            >
              {column.link.text}
              <ArrowRight className="size-4" />
            </a>
          )}
          <div className="mt-8 overflow-hidden rounded-xl border bg-muted/30">
            {column.image ? (
              <img
                src={column.image}
                alt={column.title}
                className="aspect-4/3 w-full object-cover"
              />
            ) : (
              <div className="aspect-4/3 w-full" />
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Feature16;
export type { Feature16Props, Feature16Column };
