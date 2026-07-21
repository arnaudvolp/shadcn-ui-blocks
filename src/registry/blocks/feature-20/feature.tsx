import { Phone, PhoneOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface Feature20Item {
  title: string;
  description: string;
  mockup?: React.ReactNode;
}

interface Feature20Props {
  title?: string;
  description?: string;
  items?: [Feature20Item, Feature20Item, Feature20Item];
  className?: string;
}

/* Decorative UI mockups suggesting real product surfaces */
const FormMockup = () => (
  <div className="w-3/4 rounded-lg border bg-background p-4 shadow-sm">
    <p className="text-sm font-medium">Type of Block</p>
    <div className="mt-3 flex items-center gap-2 rounded-md border px-3 py-2 shadow-sm">
      <Checkbox checked aria-label="Selected" />
      <span className="text-sm">Hero Section</span>
    </div>
    <div className="mt-3 flex flex-col gap-2">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="h-2 rounded-full bg-muted" />
      ))}
    </div>
  </div>
);

const CallMockup = () => (
  <div className="w-3/4 overflow-hidden rounded-lg border bg-background shadow-sm">
    <img
      src="https://www.shadcnship.com/images/placeholders/hero-architecture-5.webp"
      alt=""
      className="aspect-video w-full object-cover"
    />
    <div className="flex items-center gap-2 p-3">
      <Avatar className="size-8">
        <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
        <AvatarFallback className="text-xs">JR</AvatarFallback>
      </Avatar>
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-sm font-medium">Jack Riley</span>
        <span className="text-xs text-muted-foreground">Incoming call...</span>
      </div>
      <Button size="icon" variant="secondary" className="size-8 rounded-full" aria-label="Decline">
        <PhoneOff className="size-3.5" />
      </Button>
      <Button size="icon" className="size-8 rounded-full" aria-label="Answer">
        <Phone className="size-3.5" />
      </Button>
    </div>
  </div>
);

const PricingMockup = () => (
  <div className="w-3/4 rounded-lg border bg-background p-4 shadow-sm">
    <div className="flex items-start justify-between gap-2">
      <p className="text-sm font-medium">All Blocks</p>
      <p className="text-sm text-muted-foreground">$0/year</p>
    </div>
    <div className="mt-3 flex flex-col gap-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="h-2 rounded-full bg-muted" />
      ))}
    </div>
    <Button className="mt-4 w-full">Start Now</Button>
  </div>
);

const defaultItems: [Feature20Item, Feature20Item, Feature20Item] = [
  {
    title: "Copy & Paste\nReady",
    description:
      "Every component is ready to use. Just copy the code and paste it into your project.",
    mockup: <FormMockup />,
  },
  {
    title: "Fully\nCustomizable",
    description:
      "Built with Tailwind CSS, every component can be easily modified to match your brand.",
    mockup: <CallMockup />,
  },
  {
    title: "TypeScript\nFirst",
    description:
      "All components are fully typed with TypeScript for better developer experience.",
    mockup: <PricingMockup />,
  },
];

const Feature20 = ({
  title = "Everything You Need\nto Build Faster",
  description = "Production-ready blocks built with shadcn/ui and Tailwind CSS. Copy, customize, and ship.",
  items = defaultItems,
  className,
}: Feature20Props) => (
  <section className={cn("container mx-auto px-8 py-12 md:py-24", className)}>
    {/* Header: title left, paragraph right on the same row */}
    <div className="mb-12 grid gap-6 md:grid-cols-[3fr_2fr] md:items-start md:gap-16">
      <h2 className="text-4xl leading-tight font-medium tracking-tight whitespace-pre-line md:text-5xl">
        {title}
      </h2>
      <p className="text-muted-foreground md:justify-self-end md:text-right lg:max-w-sm">
        {description}
      </p>
    </div>

    {/* 3 equal cards with UI mockups */}
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item, index) => (
        <Card key={index} className="gap-0 p-0 shadow-none">
          <div className="flex items-center justify-center rounded-t-xl bg-muted/50 p-8">
            {item.mockup}
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl leading-snug font-medium tracking-tight whitespace-pre-line">
              {item.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default Feature20;
export type { Feature20Props, Feature20Item };
