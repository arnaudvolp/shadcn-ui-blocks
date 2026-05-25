"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageCompareProps {
  label?: string;
  title?: string;
  description?: string;
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  initialPosition?: number;
  className?: string;
}

const ImageCompare = ({
  label = "Before & After",
  title = "See the difference, instantly.",
  description = "Drag the slider to compare both sides and see the result in real time.",
  beforeImage = "https://www.shadcnship.com/images/placeholders/hero-architecture-10.webp",
  afterImage = "https://www.shadcnship.com/images/placeholders/hero-architecture-12.webp",
  beforeLabel = "Before",
  afterLabel = "After",
  initialPosition = 50,
  className,
}: ImageCompareProps) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setPosition(pct);
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    const onMouseMove = (e: MouseEvent) => updatePosition(e.clientX);
    const onMouseUp = () => setIsDragging(false);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <section className={cn("container mx-auto px-8 py-12 md:py-24", className)}>
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        {label && (
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            {label}
          </p>
        )}
        <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground md:text-lg">{description}</p>
        )}
      </div>

      <div className="mx-auto mt-12 max-w-5xl">
        <div
          ref={containerRef}
          className={cn(
            "relative aspect-square overflow-hidden rounded-2xl select-none md:aspect-video",
            isDragging ? "cursor-grabbing" : "cursor-col-resize",
          )}
          onMouseDown={(e) => {
            setIsDragging(true);
            updatePosition(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            updatePosition(e.touches[0].clientX);
          }}
          onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
          onTouchEnd={() => setIsDragging(false)}
        >
          {/* After image — base layer (right side) */}
          <img
            src={afterImage}
            alt={afterLabel}
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Before image — clipped to the left of the slider */}
          <img
            src={beforeImage}
            alt={beforeLabel}
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          />

          {/* Vertical divider line */}
          <div
            className="pointer-events-none absolute inset-y-0 w-px bg-white"
            style={{
              left: `${position}%`,
              transform: "translateX(-50%)",
            }}
          />

          {/* Handle */}
          <div
            className="pointer-events-none absolute top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg"
            style={{ left: `${position}%` }}
          >
            <ChevronsLeftRight className="size-4 text-foreground dark:text-background" />
          </div>

          {/* Before label */}
          <div className="pointer-events-none absolute top-4 left-4">
            <span className="rounded-full bg-foreground px-3 py-1.5 text-sm font-medium text-background">
              {beforeLabel}
            </span>
          </div>

          {/* After label */}
          <div className="pointer-events-none absolute top-4 right-4">
            <span className="rounded-full bg-foreground px-3 py-1.5 text-sm font-medium text-background">
              {afterLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCompare;
export type { ImageCompareProps };
