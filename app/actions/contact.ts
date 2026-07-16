"use server";

import { Resend } from "resend";
import { contactSchema, type ContactInput } from "@/lib/schema";

export async function submitContactForm(data: ContactInput) {
  // Validate input schema on server side
  const validation = contactSchema.safeParse(data);

  if (!validation.success) {
    const errors = validation.error.flatten().fieldErrors;
    return {
      success: false,
      errors: errors,
      message: "Validation failed.",
    };
  }

  const { name, email, projectType, message } = validation.data;

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL_TO) {
    console.error(
      "Contact form is not configured: missing RESEND_API_KEY or CONTACT_EMAIL_TO env vars."
    );
    return {
      success: false,
      message: "An internal system error occurred. Please try again.",
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      // Using Resend's shared sending domain for now — no setup required.
      // Once you verify rrdigitalsolutions.org with Resend, change this to
      // something like "R&R Digital Solutions <contact@rrdigitalsolutions.org>".
      from: "R&R Digital Solutions <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO as string,
      replyTo: email,
      subject: `New Project Inquiry: ${projectType} — ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin-bottom: 4px;">New Contact Form Submission</h2>
          <p style="color: #666; margin-top: 0;">via rrdigitalsolutions.org</p>
          <table style="border-collapse: collapse; margin: 16px 0;">
            <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Name</td><td>${name}</td></tr>
            <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Email</td><td>${email}</td></tr>
            <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Project Type</td><td>${projectType}</td></tr>
          </table>
          <p style="font-weight: bold; margin-bottom: 4px;">Message</p>
          <p style="white-space: pre-wrap; border-left: 3px solid #69d8d0; padding-left: 12px;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        message: "An internal system error occurred. Please try again.",
      };
    }

    return {
      success: true,
      message: "Transmission received. Our engineering team will review your requirements.",
    };
  } catch (error) {
    console.error("Contact submission error:", error);
    return {
      success: false,
      message: "An internal system error occurred. Please try again.",
    };
  }
}
