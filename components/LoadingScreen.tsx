"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for window load event, then play exit animation
    const handleLoad = () => {
      // Small pause to let CSS paint settle
      setTimeout(() => setLoading(false), 400);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background-custom"
        >
          {/* Logo pulse */}
          <motion.img
            src="/logo.png"
            alt="R&R Digital Solutions loading"
            className="h-16 w-auto mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Animated bar */}
          <div className="w-48 h-[2px] bg-outline-variant/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Subtle text */}
          <motion.p
            className="font-mono-custom text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/60 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Initializing
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
