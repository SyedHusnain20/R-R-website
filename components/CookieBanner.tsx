"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_CONSENT_KEY = "rr_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the banner only if the user hasn't already responded
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay so it doesn't fight the page load animation
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
    // Enable GA4 after consent
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const decline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
        >
          <div className="max-w-[1280px] mx-auto">
            <div className="glass-card border border-outline-variant/40 rounded-md p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xl shadow-black/50">
              {/* Icon */}
              <div className="w-10 h-10 rounded-full border border-secondary/30 flex items-center justify-center text-secondary shrink-0">
                <Cookie size={20} />
              </div>

              {/* Copy */}
              <div className="flex-grow">
                <p className="font-body text-sm text-on-surface leading-relaxed">
                  We use cookies for analytics and to improve your experience.
                  By clicking &ldquo;Accept&rdquo;, you consent to our use of cookies.{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-primary hover:underline font-semibold"
                  >
                    Cookie Policy
                  </Link>
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                <button
                  onClick={decline}
                  className="flex-1 sm:flex-initial px-5 py-2.5 font-mono-custom text-xs uppercase tracking-widest border border-outline-variant text-on-surface-variant hover:text-on-surface hover:border-on-surface transition-all rounded-sm font-semibold cursor-pointer"
                >
                  Decline
                </button>
                <button
                  onClick={accept}
                  className="flex-1 sm:flex-initial px-5 py-2.5 font-mono-custom text-xs uppercase tracking-widest bg-primary text-on-primary hover:bg-secondary hover:text-on-secondary transition-all rounded-sm font-semibold cursor-pointer"
                >
                  Accept
                </button>
              </div>

              {/* Close */}
              <button
                onClick={decline}
                className="absolute top-3 right-3 sm:static text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                aria-label="Close cookie banner"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
