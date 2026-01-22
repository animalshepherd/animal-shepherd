"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  success?: boolean;
  error?: string;
  fields?: Record<string, string>;
};

export async function sendContactEmail(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const fields = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  try {
    await resend.emails.send({
      from: "Sanctuary Contact <website@animalshepherd.org>",
      to: "info@animalshepherd.org",
      replyTo: fields.email,
      subject: `Contact: ${fields.subject}`,
      html: `<p><strong>From:</strong> ${fields.name}</p><p>${fields.message}</p>`,
    });

    return { success: true };
  } catch {
    return { success: false, error: "Server error" };
  }
}

export async function sendAdoptionEmail(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const fields = {
    q1: formData.get("q1") as string,
    q2: formData.get("q2") as string,
    q3: formData.get("q3") as string,
    q4: formData.get("q4") as string,
    q5: formData.get("q5") as string,
    q6: formData.get("q6") as string,
  };

  try {
    await resend.emails.send({
      from: "Adoption Desk <website@animalshepherd.org>",
      to: "info@animalshepherd.org",
      replyTo: fields.q4,
      subject: "New Adoption Application",
      html: `<h2>Application from ${fields.q2}</h2><p>Animal: ${fields.q1}</p>`,
    });

    return { success: true };
  } catch {
    return { success: false, error: "Server error" };
  }
}
