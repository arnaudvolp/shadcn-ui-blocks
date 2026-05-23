import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Plan {
  name: string;
  badgeLabel?: boolean;
  price: string;
  suffix?: string;
  isCustom?: boolean;
  highlighted?: boolean;
  tagline: string;
  cta: { text: string; url: string };
  features: string[];
}

interface Pricing04Props {
  label?: string;
  title?: string;
  description?: string;
  plans?: Plan[];
  className?: string;
}

const Pricing04 = ({
  label = "Pricing",
  title = "Plans for every team",
  description = "Choose the right plan for your needs. No hidden fees.",
  plans = [
    {
      name: "Starter",
      price: "$0",
      suffix: "/month",
      tagline: "Perfect for small teams",
      cta: { text: "Start for free", url: "#" },
      features: ["3 projects", "AI applicant screening", "AI recruiter"],
    },
    {
      name: "Professional",
      badgeLabel: true,
      price: "$99",
      suffix: "/month",
      highlighted: true,
      tagline: "Perfect for growing teams",
      cta: { text: "Start hiring", url: "#" },
      features: [
        "Unlimited projects",
        "AI applicant screening",
        "AI recruiter",
        "Risk-free guarantee",
      ],
    },
    {
      name: "Enterprise",
      badgeLabel: true,
      price: "Custom",
      isCustom: true,
      tagline: "For large organizations",
      cta: { text: "Contact us", url: "#" },
      features: [
        "Unlimited projects",
        "AI applicant screening",
        "Custom skill assessments",
        "Custom AI recruiter",
      ],
    },
  ],
  className,
}: Pricing04Props) => (
  <section
    className={cn(
      "relative w-full overflow-hidden py-16 md:py-24",
      className,
    )}
  >
    <div className="container mx-auto px-4">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          {label}
        </p>
        <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
          {title}
        </h2>
        <p className="text-muted-foreground md:text-lg">{description}</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col shadow-none">
            <CardHeader className="pb-0">
              <div
                className={cn(
                  "rounded-2xl px-6 pt-5 pb-7",
                  plan.highlighted
                    ? "bg-primary/[0.07] dark:bg-primary/[0.14]"
                    : "bg-muted",
                )}
              >
                <Badge
                  variant="secondary"
                  className={cn(
                    plan.badgeLabel &&
                      "text-[11px] tracking-widest uppercase",
                  )}
                >
                  {plan.name}
                </Badge>
                <div className="mt-10 flex items-baseline gap-0.5">
                  <span
                    className={cn(
                      "font-semibold leading-none tracking-tight",
                      plan.isCustom ? "text-4xl" : "text-5xl",
                    )}
                  >
                    {plan.price}
                  </span>
                  {plan.suffix && (
                    <span className="ml-0.5 text-base font-normal text-muted-foreground">
                      {plan.suffix}
                    </span>
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col gap-4 pt-5">
              <p className="text-[15px] font-medium">{plan.tagline}</p>
              <Button size="lg" className="w-full rounded-full" asChild>
                <a href={plan.cta.url}>{plan.cta.text}</a>
              </Button>
              <Separator />
              <ul className="flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-[15px]"
                  >
                    <Check className="size-4 shrink-0 text-muted-foreground" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing04;
