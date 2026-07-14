"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const deploymentsRef = useRef<HTMLSpanElement>(null);
  const retentionRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP Stat Counters Animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        deploymentsRef.current,
        { textContent: "0" },
        {
          textContent: "200",
          duration: 2.5,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        retentionRef.current,
        { textContent: "0" },
        {
          textContent: "98",
          duration: 2.5,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 px-5 md:px-[64px] max-w-[1280px] mx-auto relative overflow-hidden"
    >
      {/* Background visual tracing detail */}
      <div className="absolute bottom-0 left-0 w-64 h-64 circuit-bg opacity-10 pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row gap-20 items-center">
        {/* Left Column: Founders Info */}
        <div className="lg:w-1/2 flex flex-col items-start">
          <h6 className="font-mono-custom text-xs text-primary uppercase mb-2 tracking-widest font-semibold">
            The Architects
          </h6>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl uppercase mb-8 font-bold tracking-tight">
            Guided by Technical Mastery
          </h2>
          <p className="text-on-surface-variant font-body text-base sm:text-lg mb-12 leading-relaxed">
            Founded by industry veterans with a combined 20+ years in systems architecture and digital product strategy. R&R Digital Solutions was born out of a desire to bring high-level engineering precision to companies of all sizes.
          </p>

          {/* Founders Grid */}
          <div className="grid grid-cols-2 gap-12 w-full">
            <div className="text-center md:text-left">
              <div className="w-32 h-32 mx-auto md:mx-0 mb-6 rounded-full border-2 border-secondary p-1 overflow-hidden bg-surface-container-low">
                <img
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                alt="Sheroz Khan"
                src="/images/sheroz.jpg"
              />
              </div>
              <h4 className="font-headline text-lg uppercase font-bold text-on-surface">Sheroz Khan</h4>
              <p className="font-mono-custom text-xs text-secondary tracking-wider font-semibold">
                Chief Strategy/Finance Officer
              </p>
            </div>

            <div className="text-center md:text-left">
              <div className="w-32 h-32 mx-auto md:mx-0 mb-6 rounded-full border-2 border-primary p-1 overflow-hidden bg-surface-container-low">
                <img
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                  alt="Hasnain Zainulabdin"
                  src="/hasnain-portrait.png"
                />
              </div>
              <h4 className="font-headline text-lg uppercase font-bold text-on-surface">Hasnain Zainulabdin</h4>
              <p className="font-mono-custom text-xs text-primary tracking-wider font-semibold">
                Chief Technology/Production Officer
              </p>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 mt-10 text-primary font-semibold hover:underline font-mono-custom text-xs uppercase tracking-widest"
          >
            Meet the Full Team →
          </Link>
        </div>

        {/* Right Column: Visual Layout & Counters */}
        <div ref={triggerRef} className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
          <div className="space-y-4 pt-12">
            <div className="h-64 rounded-md bg-surface-container-high border border-outline-variant relative overflow-hidden shadow-lg shadow-black/20">
              <img
                className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                alt="Microprocessor board closeup"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxPpR5m9BirrajBlmQlW6bEGZLo-Yn0mCEHxCmC5ZrLBfwocANry5EjZt-_QyV9DAT_QnMFGi2nsxizwgXfz4t11iryDhEJ3yec10bhkKH00-LbcrQe2YGDfB6n5k6TfDthHyvL4oq1M1drnZA1cnWvB3d5wUFxxN-n4FShIPv1UUPjx1NlmIfgOO0i8q4qiAlmhLYI6Aky0y_nNe8wPibY7TtI4wgYSeYEPgn-k2g7p9at2ZcCZs68z8JJFDgoPT83yksWOx_0ohk"
              />
            </div>
            <div className="h-48 rounded-md bg-surface-container-high border border-outline-variant relative overflow-hidden shadow-lg shadow-black/20 flex flex-col justify-end p-6">
              <span className="font-headline text-5xl md:text-6xl text-primary opacity-20 absolute top-4 right-6 font-bold">
                <span ref={deploymentsRef}>0</span>+
              </span>
              <p className="font-mono-custom text-xs uppercase tracking-wider text-on-surface font-semibold relative z-10">
                Successful Deployments Globally
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="h-48 rounded-md bg-surface-container-high border border-outline-variant relative overflow-hidden shadow-lg shadow-black/20 flex flex-col justify-end p-6">
              <span className="font-headline text-5xl md:text-6xl text-secondary opacity-20 absolute top-4 right-6 font-bold">
                <span ref={retentionRef}>0</span>%
              </span>
              <p className="font-mono-custom text-xs uppercase tracking-wider text-on-surface font-semibold relative z-10">
                Client Retention Rate
              </p>
            </div>
            <div className="h-64 rounded-md bg-surface-container-high border border-outline-variant relative overflow-hidden shadow-lg shadow-black/20">
              <img
                className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                alt="Architect workspace displays"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL26Vjzu5gYb4XJxgriEiXUAgPimcF0t8Qtqgr1bhl2SZ_XIu0_oNtTKmcTovBus5nnTFwS-rJ8JrOFueGRJi7_rd5fugK7F5G8OGQuYE59qhYDHaV_j0clE4HrqdAh65luTmaknmSLXPclgkqeGVMNArOMRjUQRoLx33jgw7f2Nv3qDYZSNq_jMi3JtZKymCG91GJ64fnMJYwbvqCwy-Wmn7ltGV5vY5-JNEdCrHlCK08z7a3VzZVbTaiExXwkhTAoOg3ox0YEgbB"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
