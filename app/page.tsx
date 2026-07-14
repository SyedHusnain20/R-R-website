"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Home() {
  // Activate Lenis smooth scrolling and GSAP integration
  useSmoothScroll();

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Capabilities (Services) & The Engineering Protocol */}
      <Services />

      {/* Technical Case Studies (Projects) & Why R&R */}
      <Projects />

      {/* Founder Profiles & Stats Grid (About) */}
      <About />

      {/* System Clarifications (FAQ) */}
      <FAQ />

      {/* Request Transmission Form (Contact) */}
      <Contact />
    </>
  );
}
