"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowUpRight, Clock, Mail, Mountain, Phone } from "lucide-react";
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
  logo?: string;
  basedIn?: { label: string; place: string };
  links?: { text: string; url?: string }[];
  badge?: string;
  title?: string;
  description?: string;
  tours?: string[];
  img?: string;
  imgBadge?: string;
  contactInfo?: ContactInfoItem[];
  className?: string;
}

const defaultContactInfo: ContactInfoItem[] = [
  {
    icon: <Phone className="size-5" />,
    label: "Call & WhatsApp",
    details: ["+966 55 123 4567", "+966 53 987 6543"],
  },
  {
    icon: <Clock className="size-5" />,
    label: "Working Hours",
    details: ["Daily: 8am–5pm", "Friday: Closed"],
  },
  {
    icon: <Mail className="size-5" />,
    label: "Write to Us",
    details: ["info@example.com", "booking@example.com"],
  },
];

const Contact02 = ({
  logo = "Marwa",
  basedIn = { label: "Based in", place: "AlUla Region" },
  links = [
    { text: "Tours", url: "#" },
    { text: "About", url: "#" },
    { text: "Blog", url: "#" },
    { text: "Gallery", url: "#" },
  ],
  badge = "Plan Trip",
  title = "Contact Us",
  description = "Tell us when and where you'd like to go and we'll confirm availability within 24 hours.",
  tours = ["City Highlights", "Desert Safari", "Coastal Escape", "Mountain Trek"],
  img = "https://www.shadcnship.com/images/placeholders/hero-architecture-7.webp",
  imgBadge = "Your Journey",
  contactInfo = defaultContactInfo,
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
    <section className={cn("container mx-auto px-8 py-8 md:py-12", className)}>
      <Toaster />

      {/* Top navbar */}
      <nav className="flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <Mountain className="size-5" />
          {logo}
        </a>
        <p className="hidden text-sm text-muted-foreground md:block">
          {basedIn.label}: <span className="text-foreground">{basedIn.place}</span>
        </p>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.text}
              href={link.url}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.text}
            </a>
          ))}
        </div>
      </nav>

      {/* Header: badge + display title left, subtitle bottom-right */}
      <div className="mt-16 flex flex-col gap-6 md:mt-24">
        <Badge variant="secondary" className="w-fit rounded-full py-1">
          {badge}
        </Badge>
        <div className="grid gap-4 md:grid-cols-2 md:items-end">
          <h2 className="text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            {title}
          </h2>
          <p className="max-w-sm text-muted-foreground md:justify-self-end md:text-right">
            {description}
          </p>
        </div>
      </div>

      {/* Form + image */}
      <div className="mt-12 grid gap-6 lg:grid-cols-[3fr_2fr]">
        <div className="rounded-2xl bg-muted/40 p-6 md:p-8">
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
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          {...field}
                        />
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
                        <Input type="date" placeholder="dd/mm/yyyy" {...field} />
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

              <div className="flex items-center gap-3">
                <Button
                  type="submit"
                  size="lg"
                  className="rounded-full"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting
                    ? "Sending..."
                    : "Reserve Your Spot"}
                </Button>
                <Button
                  type="submit"
                  size="icon"
                  className="size-11 rounded-full"
                  disabled={form.formState.isSubmitting}
                  aria-label="Reserve Your Spot"
                >
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>
            </form>
          </Form>
        </div>

        {/* Image slot with badge overlay */}
        <div className="relative order-first min-h-72 overflow-hidden rounded-2xl bg-muted lg:order-none lg:min-h-full">
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

      {/* Contact info strip — centered columns */}
      <div className="mt-12 grid gap-10 border-t pt-12 md:grid-cols-3 md:gap-6">
        {contactInfo.map((info) => (
          <div
            key={info.label}
            className="flex flex-col items-center gap-3 text-center"
          >
            <div className="flex size-11 items-center justify-center rounded-full bg-muted">
              {info.icon}
            </div>
            <p className="font-semibold">{info.label}</p>
            <div>
              {info.details.map((line, i) => (
                <p key={i} className="text-sm text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact02;
export type { Contact02Props, ContactInfoItem };
