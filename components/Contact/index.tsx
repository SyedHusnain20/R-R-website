"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Mail, Loader2, CheckCircle, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { contactSchema, type ContactInput } from "@/lib/schema";
import { submitContactForm } from "@/app/actions/contact";

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
    <section id="contact" className="py-32 px-5 md:px-[64px] max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Left Column: Office Meta & Location Map */}
        <div className="flex flex-col justify-between">
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
                  <p className="font-headline text-lg uppercase font-semibold text-on-surface">
                    hello@rr-solutions.tech
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Styled Location Map */}
          <div className="h-64 rounded-md overflow-hidden border border-outline-variant shadow-lg shadow-black/30 bg-surface-container-low">
            <img
              className="w-full h-full object-cover opacity-85 hover:scale-[1.02] transition-transform duration-700"
              alt="Headquarters map of Hyderabad, Sindh, Pakistan"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDexbWPPYm3miTi5L2cdSw6rtfutjHD4RVAUGQyyyBP21LdeNwueB7cLWGT9l3eBfSMmeQr3lzw75Y8H0aiY4rFSZNjVOvK0tHLAq3DozxsemZyRi6phfTKNUcBm6sCIU79Zf1E8z1JMnlqcHctiKiLukG4CyjHZv0V1GUi_j-PHe4inOgg031iW5ulI1FR5Q90W6gnpLkmg9EcF_qIOP-9XMfscxoe0UgAu-4yEtu2psxoQLm1AuaOhSIH2bcz-StbZ4_CTsD65wPg"
            />
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="glass-card p-8 sm:p-12 rounded-md shadow-2xl shadow-black/45">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="font-mono-custom text-xs text-primary uppercase font-semibold tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
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
                Company Email
              </label>
              <input
                type="email"
                placeholder="john@company.com"
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
                <option value="Custom Development">Custom Development</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="Digital Strategy">Digital Strategy</option>
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
                  Transmitting...
                </>
              ) : (
                "Transmit Request"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
