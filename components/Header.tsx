"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Mission", href: "#mission" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full max-w-[1280px] mx-auto transition-all duration-300 ease-in-out px-5 md:px-[64px] border-b",
          scrolled
            ? "py-3 bg-background-custom/95 backdrop-blur-md border-outline-variant/30 shadow-lg shadow-black/10"
            : "py-5 bg-background-custom/80 backdrop-blur-sm border-transparent"
        )}
      >
        <div className="flex items-center gap-3">
          <img
            alt="R&R Logo"
            className="h-10 w-auto"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX-Q6Su-LPEnn-nNhgl9Bd0lB0TawW6b8DNHoFQj6tnsa2Ac1Iz4mGBg7Y6Xeib-g1rn8v00I76mbF8WTXD5uHSwAPaBfT3Q3eCNnPfU6GhcMTKpowUnMUDlScrbh44oFLeNFayRqiDRKlO9ofIGAsHyfQRoSgyVNLnEXbuOIj3IruIUeXYOVV3sfgvQ8LMJuugAeY2xU9RGox8BPIVWvfaY9YvcqtIJw4Q-ruyesFek923gbrOolBANAeK1K2qVjOXtrwtpOAID2U"
          />
          <span className="font-headline font-bold text-lg md:text-xl tracking-tighter text-primary">
            R&R Digital Solutions
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-mono-custom text-xs uppercase tracking-wider"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-primary text-on-primary px-6 py-2 font-mono-custom text-xs uppercase tracking-widest hover:brightness-110 transition-all font-semibold rounded-sm">
            Get Started
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-primary hover:text-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-20 px-5 bg-background-custom/95 backdrop-blur-lg flex flex-col gap-6 md:hidden"
          >
            <div className="flex flex-col gap-5 mt-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-on-surface hover:text-primary transition-colors font-headline text-2xl uppercase font-semibold"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-primary text-on-primary py-4 mt-8 font-mono-custom text-sm uppercase tracking-widest hover:brightness-110 transition-all font-semibold rounded-sm"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
