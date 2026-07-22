"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowUpRight, Clock, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import { sendContactEmail } from "./resend/action";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  tour: z.string().min(1, "Please choose a tour"),
  date: z.string().optional(),
  travelers: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactInfoItem {
  icon: React.ReactNode;
  label: string;
  details: string[];
}

interface Contact02Props {
  label?: string;
  title?: string;
  description?: string;
  tours?: string[];
  img?: string;
  imgBadge?: string;
  contactInfo?: ContactInfoItem[];
  teaser?: {
    chip: string;
    title: string;
    description: string;
    images: [string, string];
  };
  className?: string;
}

const defaultContactInfo: ContactInfoItem[] = [
  {
    icon: <Phone className="size-5" />,
    label: "Call Us",
    details: ["+1 (555) 123-4567", "Mon–Fri from 9am to 6pm"],
  },
  {
    icon: <Clock className="size-5" />,
    label: "Availability",
    details: ["We confirm every request", "within 24 hours"],
  },
  {
    icon: <Mail className="size-5" />,
    label: "Email Us",
    details: ["hello@example.com", "We reply to every message"],
  },
];

const Contact02 = ({
  label = "Plan Trip",
  title = "Contact Us",
  description = "Tell us when and where you'd like to go and we'll confirm availability within 24 hours.",
  tours = ["City Highlights", "Desert Safari", "Coastal Escape", "Mountain Trek"],
  img = "https://www.shadcnship.com/images/placeholders/hero-architecture-7.webp",
  imgBadge = "Your Journey",
  contactInfo = defaultContactInfo,
  teaser = {
    chip: "Start now",
    title: "Ready for your next adventure?",
    description:
      "Browse our most popular tours and find the journey that fits you best.",
    images: [
      "https://www.shadcnship.com/images/placeholders/hero-architecture-5.webp",
      "https://www.shadcnship.com/images/placeholders/hero-architecture-6.webp",
    ],
  },
  className,
}: Contact02Props) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      tour: "",
      date: "",
      travelers: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    const result = await sendContactEmail(values);
    if (result.success) {
      toast.success("Request sent! We'll get back to you within 24 hours.");
      form.reset();
    } else {
      toast.error(result.error ?? "Something went wrong. Please try again.");
    }
  };

  return (
    <section className={cn("container mx-auto px-8 py-12 md:py-24", className)}>
      <Toaster />

      {/* Header: label + display title left, subtitle top-right */}
      <div className="grid gap-6 md:grid-cols-2 md:items-end">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            {label}
          </p>
          <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
            {title}
          </h2>
        </div>
        <p className="max-w-sm text-muted-foreground md:justify-self-end">
          {description}
        </p>
      </div>

      {/* Form + image */}
      <div className="mt-12 grid gap-8 lg:grid-cols-[3fr_2fr]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+966 55 123 4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tour"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Your Tour</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Choose your tour..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {tours.map((tour) => (
                          <SelectItem key={tour} value={tour}>
                            {tour}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Date</FormLabel>
                    <FormControl>
                      <Input placeholder="dd/mm/yyyy" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="travelers"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Travelers</FormLabel>
                    <FormControl>
                      <Input placeholder="2 adults, 1 child" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message / Special Requests</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={4}
                      placeholder="Anything else we should know?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="mt-2 flex items-center gap-3">
              <Button
                type="submit"
                size="lg"
                className="rounded-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Sending..." : "Reserve Your Spot"}
              </Button>
              <Button
                type="submit"
                size="icon"
                className="rounded-full"
                disabled={form.formState.isSubmitting}
                aria-label="Reserve Your Spot"
              >
                <ArrowUpRight className="size-4" />
              </Button>
            </div>
          </form>
        </Form>

        {/* Image slot with badge overlay */}
        <div className="relative order-first min-h-64 overflow-hidden rounded-xl bg-muted lg:order-none lg:min-h-full">
          {img && (
            <img
              src={img}
              alt=""
              className="absolute inset-0 size-full object-cover"
            />
          )}
          {imgBadge && (
            <Badge
              variant="secondary"
              className="absolute top-4 right-4 rounded-full py-1"
            >
              {imgBadge}
            </Badge>
          )}
        </div>
      </div>

      {/* Contact info strip */}
      <div className="mt-12 grid gap-8 border-t pt-10 md:grid-cols-3 md:gap-6">
        {contactInfo.map((info) => (
          <div key={info.label} className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              {info.icon}
            </div>
            <div>
              <p className="font-semibold">{info.label}</p>
              {info.details.map((line, i) => (
                <p key={i} className="text-sm text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Teaser */}
      {teaser && (
        <div className="mt-16 flex flex-col items-center gap-4 text-center md:mt-24">
          <Badge variant="secondary" className="rounded-full border border-border py-1">
            {teaser.chip}
          </Badge>
          <h3 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
            {teaser.title}
          </h3>
          <p className="max-w-md text-muted-foreground">{teaser.description}</p>
          <div className="mt-6 grid w-full grid-cols-2 gap-4">
            {teaser.images.map((src, i) => (
              <div
                key={i}
                className="aspect-video overflow-hidden rounded-xl bg-muted"
              >
                <img src={src} alt="" className="size-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact02;
export type { Contact02Props, ContactInfoItem };
