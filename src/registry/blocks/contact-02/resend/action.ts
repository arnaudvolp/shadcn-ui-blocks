"use server";

import { Resend } from "resend";
import { z } from "zod";

// ============================================================================
// Resend server action for the contact-02 block
//
// Required env vars:
// - RESEND_API_KEY        your Resend API key (https://resend.com/api-keys)
// - CONTACT_OWNER_EMAIL   where owner notifications are sent
// - CONTACT_FROM_EMAIL    verified sender (defaults to onboarding@resend.dev)
// ============================================================================

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  tour: z.string().min(1),
  date: z.string().optional(),
  travelers: z.string().optional(),
  message: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

interface SendContactResult {
  success: boolean;
  error?: string;
}

/**
 * Send the contact request through Resend: a notification email to the site
 * owner and a confirmation email to the visitor.
 *
 * @example
 * // page.tsx
 * import Contact02 from "@/components/contact-02/contact"
 *
 * export default function Page() {
 *   return <Contact02 />
 * }
 */
export async function sendContactEmail(
  values: ContactFormValues,
): Promise<SendContactResult> {
  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false, error: "Invalid form data" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { success: false, error: "Missing RESEND_API_KEY env var" };
  }

  const resend = new Resend(apiKey);
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";
  const owner = process.env.CONTACT_OWNER_EMAIL;
  const { name, email, phone, tour, date, travelers, message } = parsed.data;

  const details = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    `Tour: ${tour}`,
    date && `Preferred date: ${date}`,
    travelers && `Travelers: ${travelers}`,
    message && `Message: ${message}`,
  ]
    .filter(Boolean)
    .map((line) => `<p>${line}</p>`)
    .join("");

  try {
    if (owner) {
      const { error } = await resend.emails.send({
        from,
        to: owner,
        replyTo: email,
        subject: `New contact request from ${name}`,
        html: `<h2>New contact request</h2>${details}`,
      });
      if (error) {
        return { success: false, error: error.message };
      }
    }

    const { error } = await resend.emails.send({
      from,
      to: email,
      subject: "We received your request",
      html: `<h2>Thanks ${name}!</h2><p>We received your request and will confirm availability within 24 hours.</p>${details}`,
    });
    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch {
    return { success: false, error: "Failed to send email" };
  }
}
