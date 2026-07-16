"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Mail, Loader2, CheckCircle, AlertTriangle } from "lucide-react";
import type { SVGProps } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contactSchema, type ContactInput } from "@/lib/schema";
import { submitContactForm } from "@/app/actions/contact";

// Brand icons (kept as lightweight inline SVGs since lucide-react no longer ships brand/logo icons)
const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.558V9h3.556v11.452z" />
  </svg>
);

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.771-1.63 1.562v1.878h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
  </svg>
);

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.005c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm0 18.13h-.004a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.25 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.23-.73-.66-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.36-.77-1.86-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01a.93.93 0 0 0-.67.31c-.23.25-.88.86-.88 2.09 0 1.23.9 2.42 1.02 2.59.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29z" />
  </svg>
);

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "AI Automation",
      message: "",
    },
  });

  const onSubmit = async (data: ContactInput) => {
    setIsSubmitting(true);
    setSubmitResult(null);
    try {
      const res = await submitContactForm(data);
      if (res.success) {
        setSubmitResult({ success: true, message: res.message });
        reset();
      } else {
        setSubmitResult({
          success: false,
          message: res.message || "An unexpected error occurred.",
        });
      }
    } catch (_e) {
      setSubmitResult({
        success: false,
        message: "Network error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-5 md:px-8 lg:px-[64px] max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Column: Office Meta & Location Map */}
        <div className="flex flex-col">
          <div>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl mb-8 uppercase font-bold tracking-tight">
              Let&apos;s Build the Future
            </h2>
            <p className="text-on-surface-variant font-body text-base sm:text-lg mb-12 leading-relaxed">
              Ready to initiate your digital transformation? Our engineering team is standing by to audit your requirements.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/30 rounded-full text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-mono-custom text-[10px] text-on-surface-variant uppercase mb-1 font-semibold tracking-wider">
                    Global Headquarters
                  </p>
                  <p className="font-headline text-lg uppercase font-semibold text-on-surface">
                    Hyderabad, Sindh, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/30 rounded-full text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-mono-custom text-[10px] text-on-surface-variant uppercase mb-1 font-semibold tracking-wider">
                    Email Inquiries
                  </p>
                  <a
                    href="mailto:hasnainzainulabdin@gmail.com"
                    className="font-headline text-lg uppercase font-semibold text-on-surface hover:text-primary transition-colors"
                  >
                    hello@rr-solutions.tech
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <p className="font-mono-custom text-[10px] text-on-surface-variant uppercase mb-4 font-semibold tracking-wider">
                Connect With Us
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/company/r&r-digital_solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 flex items-center justify-center border border-primary/30 rounded-full text-primary hover:bg-primary hover:text-on-primary hover:border-primary transition-colors"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/1BXWa6tvAP/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 flex items-center justify-center border border-primary/30 rounded-full text-primary hover:bg-primary hover:text-on-primary hover:border-primary transition-colors"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/rr_digitalsolution/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 flex items-center justify-center border border-primary/30 rounded-full text-primary hover:bg-primary hover:text-on-primary hover:border-primary transition-colors"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/923343653550`"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-11 h-11 flex items-center justify-center border border-primary/30 rounded-full text-primary hover:bg-primary hover:text-on-primary hover:border-primary transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Styled Location Map */}
          <div className="mt-12 h-64 rounded-md overflow-hidden border border-outline-variant shadow-lg shadow-black/30 bg-surface-container-low">
            <img
              className="w-full h-full object-cover opacity-85 hover:scale-[1.02] transition-transform duration-700"
              alt="Headquarters map of Hyderabad, Sindh, Pakistan"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDexbWPPYm3miTi5L2cdSw6rtfutjHD4RVAUGQyyyBP21LdeNwueB7cLWGT9l3eBfSMmeQr3lzw75Y8H0aiY4rFSZNjVOvK0tHLAq3DozxsemZyRi6phfTKNUcBm6sCIU79Zf1E8z1JMnlqcHctiKiLukG4CyjHZv0V1GUi_j-PHe4inOgg031iW5ulI1FR5Q90W6gnpLkmg9EcF_qIOP-9XMfscxoe0UgAu-4yEtu2psxoQLm1AuaOhSIH2bcz-StbZ4_CTsD65wPg"
            />
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="glass-card p-6 sm:p-8 lg:p-12 rounded-md shadow-2xl shadow-black/45">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="font-mono-custom text-xs text-primary uppercase font-semibold tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                {...register("name")}
                className="w-full bg-surface-container-high border-b-2 border-primary focus:border-secondary focus:ring-0 text-on-surface p-4 transition-colors border-t-0 border-l-0 border-r-0 outline-none rounded-t-sm"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1 font-mono-custom">{errors.name.message}</p>
              )}
            </div>

            {/* Company Email */}
            <div className="space-y-2">
              <label className="font-mono-custom text-xs text-primary uppercase font-semibold tracking-wider">
                Your contact, Any
              </label>
              <input
                type="email"
                placeholder="Email or Whastapp number"
                {...register("email")}
                className="w-full bg-surface-container-high border-b-2 border-primary focus:border-secondary focus:ring-0 text-on-surface p-4 transition-colors border-t-0 border-l-0 border-r-0 outline-none rounded-t-sm"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1 font-mono-custom">{errors.email.message}</p>
              )}
            </div>

            {/* Project Type */}
            <div className="space-y-2">
              <label className="font-mono-custom text-xs text-primary uppercase font-semibold tracking-wider">
                Project Type
              </label>
              <select
                {...register("projectType")}
                className="w-full bg-surface-container-high border-b-2 border-primary focus:border-secondary focus:ring-0 text-on-surface p-4 transition-colors border-t-0 border-l-0 border-r-0 outline-none rounded-t-sm appearance-none cursor-pointer"
              >
                <option value="AI Automation">AI Automation</option>
                <option value="Custom Software Development">Custom Software Development</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="Digital Strategy">Digital Strategy</option>
                <option value="Web Application">Web Application</option>
                <option value="Custom Chatbots">Custom Chatbots</option>

              </select>
              {errors.projectType && (
                <p className="text-red-400 text-xs mt-1 font-mono-custom">{errors.projectType.message}</p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="font-mono-custom text-xs text-primary uppercase font-semibold tracking-wider">
                Message
              </label>
              <textarea
                placeholder="Tell us about your technical challenges..."
                rows={4}
                {...register("message")}
                className="w-full bg-surface-container-high border-b-2 border-primary focus:border-secondary focus:ring-0 text-on-surface p-4 transition-colors border-t-0 border-l-0 border-r-0 outline-none rounded-t-sm resize-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-xs mt-1 font-mono-custom">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Notification Bar */}
            <AnimatePresence mode="wait">
              {submitResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-4 rounded-sm flex items-start gap-3 text-sm font-body ${
                    submitResult.success
                      ? "bg-primary/10 border border-primary/20 text-primary"
                      : "bg-red-950/20 border border-red-900/35 text-red-400"
                  }`}
                >
                  {submitResult.success ? (
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                  )}
                  <p>{submitResult.message}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-on-primary py-4 font-mono-custom text-xs uppercase tracking-widest hover:bg-secondary hover:text-on-secondary transition-all font-semibold rounded-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Request"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}