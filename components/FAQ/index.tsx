"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      q: "What tech stack do you specialize in?",
      a: "We are language-agnostic but favor high-performance stacks including React/Next.js, Rust, Python, and Go, deployed primarily on AWS or GCP infrastructure.",
    },
    {
      q: "Do you work with startups or only enterprises?",
      a: "We maintain two distinct streams: Enterprise Transformation for established firms and Rapid Scale acceleration for high-growth, venture-backed startups.",
    },
    {
      q: "What is your typical project timeline?",
      a: "Initial MVP builds typically span 6-10 weeks, while full-scale digital transformations are ongoing partnerships structured in 3-month milestones.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-surface-container-lowest">
      <div className="max-w-3xl mx-auto px-5 md:px-0">
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-center mb-16 uppercase font-bold tracking-tight">
          System Clarifications
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card border border-outline-variant rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="flex justify-between items-center w-full p-6 text-left cursor-pointer transition-colors hover:bg-surface-container/35"
                >
                  <span className="font-headline text-lg uppercase font-semibold text-on-surface">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-primary"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-on-surface-variant font-body text-sm leading-relaxed border-t border-outline-variant/10 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
