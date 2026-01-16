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

export async function sendContactEmail(formData: FormData) {
  const validatedFields = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return { success: false, error: "Validation failed" };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    await resend.emails.send({
      from: "Sanctuary Contact <website@animalshepherd.org>",
      to: "animalshepherd.tech@gmail.com",
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New General Inquiry</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    return { success: true };
  } catch {
    return { success: false, error: "Failed to send email" };
  }
}

export async function sendAdoptionEmail(formData: FormData) {
  const validatedFields = AdoptionSchema.safeParse({
    q1: formData.get("q1"),
    q2: formData.get("q2"),
    q3: formData.get("q3"),
    q4: formData.get("q4"),
    q5: formData.get("q5"),
    q6: formData.get("q6"),
  });

  if (!validatedFields.success) {
    return { success: false, error: "Validation failed" };
  }

  const { q1, q2, q3, q4, q5, q6 } = validatedFields.data;

  try {
    await resend.emails.send({
      from: "Adoption Desk <website@animalshepherd.org>",
      to: "animalshepherd.tech@gmail.com",
      replyTo: q4,
      subject: "New Adoption Application",
      html: `
        <h2>New Adoption Inquiry</h2>
        <p><strong>Animal:</strong> ${q1}</p>
        <p><strong>Applicant:</strong> ${q2}</p>
        <p><strong>Phone:</strong> ${q3}</p>
        <p><strong>Email:</strong> ${q4}</p>
        <p><strong>Experience:</strong> ${q5}</p>
        <p><strong>Home Setup:</strong> ${q6}</p>
      `,
    });
    return { success: true };
  } catch {
    return { success: false, error: "Failed to send application" };
  }
}
