"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Home() {
  // Activate Lenis smooth scrolling and GSAP integration
  useSmoothScroll();

  return (
    <div className="flex flex-col min-h-screen bg-background-custom text-on-background selection:bg-primary/20">
      {/* Header Navigation */}
      <Header />

      <main className="flex-grow">
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
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
