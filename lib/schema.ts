import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  projectType: z.enum(["AI Automation", "Custom Development", "Data Analytics", "Digital Strategy"], {
    error: "Please select a valid project type.",
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactInput = z.infer<typeof contactSchema>;
