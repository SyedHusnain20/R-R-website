"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";

// Dynamically load the 3D NetworkGlobe component to bypass SSR
const NetworkGlobe = dynamic(() => import("./NetworkGlobe"), { ssr: false });

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const globeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Entrance Animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    
    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, delay: 0.2 }
    )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0 },
        "-=0.7"
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 },
        "-=0.7"
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0 },
        "-=0.7"
      )
      .fromTo(
        globeContainerRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.5 },
        "-=1"
      );
  }, []);

  return (
    <header
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden max-w-[1280px] mx-auto px-5 md:px-[64px]"
    >
      {/* Background radial gradient to give atmospheric depth */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A1E] to-[#0D2126]"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch w-full">
        {/* Left Column: Information & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center text-left">
          <div
            ref={badgeRef}
            className="inline-block border border-primary/30 px-4 py-1 mb-6 rounded-full bg-surface-container-lowest/50 backdrop-blur-sm"
          >
            <span className="font-mono-custom text-[10px] uppercase tracking-widest text-primary font-semibold">
              Precision Engineering
            </span>
          </div>

          <h1
            ref={titleRef}
            className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-none uppercase font-bold tracking-tight mb-6"
          >
            Where <span className="text-primary">Intelligence</span> <br className="hidden sm:inline" />
            Meets <span className="text-secondary">Innovation</span>
          </h1>

          <p
            ref={textRef}
            className="font-body text-on-surface-variant text-base sm:text-lg max-w-2xl mb-10 leading-relaxed"
          >
            Pioneering digital transformation through bespoke AI automation and world-class software architecture.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="bg-secondary text-on-secondary px-8 py-4 font-mono-custom text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(251,186,107,0.4)] transition-all duration-300 font-semibold text-center rounded-sm flex items-center justify-center gap-2 group"
            >
              Get a Quote
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#projects"
              className="border border-outline-variant text-on-surface px-8 py-4 font-mono-custom text-xs uppercase tracking-widest hover:bg-surface-container-high transition-all duration-300 font-semibold text-center rounded-sm"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right Column: 3D Globe Visualization */}
        <div
          ref={globeContainerRef}
          className="lg:col-span-6 w-full h-[420px] sm:h-[520px] lg:h-[75vh] lg:max-h-[780px] flex items-center justify-center relative"
        >
          <div className="absolute w-[130%] h-[130%] bg-radial from-primary/10 to-transparent blur-3xl rounded-full -z-10 pointer-events-none"></div>
          <NetworkGlobe />
        </div>
      </div>

      {/* Decorative Bottom Line Tracer */}
      <div className="absolute bottom-0 left-0 w-full line-fade-gold opacity-50"></div>
    </header>
  );
}
