"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature13Step {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
}

interface Feature13Props {
  label?: string;
  title?: string;
  steps?: Feature13Step[];
  className?: string;
}

const defaultSteps: Feature13Step[] = [
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
  {
    title: "TypeScript First",
    description:
      "All components are fully typed with TypeScript for better developer experience.",
    image:
      "https://www.shadcnship.com/images/placeholders/hero-architecture-6.webp",
  },
];

// Each slide takes this share of the container width; side cards peek at the edges
const SLIDE_WIDTH = 70;

const Feature13 = ({
  label = "Features",
  title = "Everything You Need to Build Faster",
  steps = defaultSteps,
  className,
}: Feature13Props) => {
  const [active, setActive] = useState(0);
  const activeStep = steps[active];

  return (
    <section className={cn("container mx-auto px-8 py-12 md:py-24", className)}>
      {/* Header */}
      <div className="mb-12 flex flex-col items-center gap-2 text-center">
        <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          {label}
        </p>
        <h2 className="text-4xl leading-tight font-medium tracking-tight md:text-5xl">
          {title}
        </h2>
      </div>

      {/* Carousel with partially visible side cards */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${(100 - SLIDE_WIDTH) / 2 - active * SLIDE_WIDTH}%)`,
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="shrink-0 px-2 md:px-3"
              style={{ width: `${SLIDE_WIDTH}%` }}
            >
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={step.title}
                className={cn(
                  "block w-full cursor-pointer overflow-hidden rounded-xl bg-muted transition-all duration-500",
                  index === active
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-60",
                )}
              >
                {step.image ? (
                  <img
                    src={step.image}
                    alt={step.title}
                    className="aspect-square w-full object-cover md:aspect-video"
                  />
                ) : (
                  <div className="aspect-square w-full md:aspect-video" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Progress tab bar */}
      <div
        className="mx-auto mt-6 flex gap-2 px-2 md:px-3"
        style={{ width: `${SLIDE_WIDTH}%` }}
      >
        {steps.map((step, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Go to step ${index + 1}`}
            className={cn(
              "h-0.5 flex-1 cursor-pointer transition-colors duration-300",
              index === active ? "bg-foreground" : "bg-border",
            )}
          />
        ))}
      </div>

      {/* Active step details */}
      <div
        className="mx-auto mt-10 flex items-start gap-4 px-2 md:px-3"
        style={{ width: `${SLIDE_WIDTH}%` }}
      >
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
          {activeStep.icon ?? <ArrowUpRight className="size-5" />}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
            {activeStep.title}
          </h3>
          <p className="max-w-xl text-muted-foreground">
            {activeStep.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature13;
export type { Feature13Props, Feature13Step };
