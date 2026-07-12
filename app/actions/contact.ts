"use server";

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

  try {
    // Simulate sending an email or saving to database
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Server received contact submission:", validation.data);

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
