"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string().min(2, { error: "Name is too short" }),
  email: z.email({ error: "Invalid email format" }),
  subject: z.string().min(2, { error: "Subject is required" }),
  message: z
    .string()
    .min(10, { error: "Message must be at least 10 characters" }),
});

const AdoptionSchema = z.object({
  q1: z.string().min(1, { error: "Animal name is required" }),
  q2: z.string().min(1, { error: "Applicant name is required" }),
  q3: z.string().min(1, { error: "Phone number is required" }),
  q4: z.email({ error: "Invalid email address" }),
  q5: z.string().min(1, { error: "Experience details are required" }),
  q6: z.string().min(1, { error: "Home setup details are required" }),
});

export type FormState = {
  success?: boolean;
  error?: string;
  fields?: Record<string, string>;
};

export async function sendContactEmail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const fields = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  const validated = ContactSchema.safeParse(fields);
  if (!validated.success)
    return { success: false, error: "Validation failed", fields };

  try {
    await resend.emails.send({
      from: "Sanctuary Contact <website@animalshepherd.org>",
      to: "animalshepherd.tech@gmail.com",
      replyTo: fields.email,
      subject: `Contact: ${fields.subject}`,
      html: `<p><strong>From:</strong> ${fields.name}</p><p>${fields.message}</p>`,
    });
    return { success: true };
  } catch {
    return { success: false, error: "Server error", fields };
  }
}

export async function sendAdoptionEmail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const fields = {
    q1: formData.get("q1") as string,
    q2: formData.get("q2") as string,
    q3: formData.get("q3") as string,
    q4: formData.get("q4") as string,
    q5: formData.get("q5") as string,
    q6: formData.get("q6") as string,
  };

  const validated = AdoptionSchema.safeParse(fields);
  if (!validated.success)
    return { success: false, error: "Validation failed", fields };

  try {
    await resend.emails.send({
      from: "Adoption Desk <website@animalshepherd.org>",
      to: "animalshepherd.tech@gmail.com",
      replyTo: fields.q4,
      subject: "New Adoption Application",
      html: `<h2>Application from ${fields.q2}</h2><p>Animal: ${fields.q1}</p>`,
    });
    return { success: true };
  } catch {
    return { success: false, error: "Server error", fields };
  }
}
