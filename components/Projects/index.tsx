"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = triggerRef.current?.children;
    if (cards) {
      gsap.fromTo(
        Array.from(cards),
        { opacity: 0, scale: 0.95, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.25,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  const cases = [
    {
      title: "Islamic Finance Assistant AI",
      desc: "A chatbot having agentic featres can get real-time data of stocks, gold, silver etc. Give fully analyzed suggestions",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3V2D1liB7TBzchWrDGRmbBfhaUXpET6T9vs5gv6l8wlKLl4VR_Uv0W51c-sWwlfu7QkdyQFwmGxon-ZTr1cDHjYCuQK84KwGJEnHZvv5SwoZn3KZRXGtZhSvKUVT__Qc1f1_LNgzfYkKyLf1YqSjoq2796JpckHTfdLRzjNBmFrXurINZzETMLjRVukWzfHsadDIlUZz7j1WAGmRn3Nr_PTf8ERHpX7INfEjB1kyTnMQzPU475-Lyvb7kIGdG_u5dwv-vfR6EGWO5",
      tag: "FinTech",
      techs: ["Python", "LLM", "RAG", "TensorFlow", "FastAPI", "STT-TTS"],
      borderColor: "hover:border-secondary",
      glowColor: "hover:shadow-[0_0_30px_rgba(251,186,107,0.15)]",
      badgeClass: "text-secondary bg-on-secondary/10 border-secondary/20",
    },
    {
      title: "Omni-Supply Chain AI",
      desc: "Autonomous logistics coordination for a global manufacturing giant, reducing lead times by 22%.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJktX5KVx2IxeQ89rw03Ve_re9idH1g7ogCxk40BeiXKNKr_n07StjiGZgraCU12dTpHMl4mtwFVEzvrGPsF_N88B0dYtCCHW19RFeCJvf1RezAEvlMlm1qptiV1oD1sJRoIQ0ZS3pCUpr1p5YTbed2dkzqRcow-aCosImIWMXtdbZIAzFTbCqwh0te6Yqu_nfUR7nn74VpqVXanrp6zsiSlAdA6pEm7A6jANZJKaoXe11HXboNv6pBalV7BapN7obhszDJPlIXzVI",
      tag: "Industrial",
      techs: ["Node.js", "PostgreSQL", "GCP", "Rust"],
      borderColor: "hover:border-primary",
      glowColor: "hover:shadow-[0_0_30px_rgba(105,216,208,0.15)]",
      badgeClass: "text-primary bg-on-primary/10 border-primary/20",
    },
  ];

  const highlights = [
    {
      title: "99.9% Uptime",
      desc: "Architecture designed for resilience.",
    },
    {
      title: "Zero Tech Debt",
      desc: "Clean code principles as standard.",
    },
    {
      title: "Rapid Prototyping",
      desc: "MVP delivery in weeks, not months.",
    },
    {
      title: "Global Standard",
      desc: "ISO-certified security frameworks.",
    },
  ];

  return (
    <section ref={containerRef} id="projects" className="py-24 max-w-[1280px] mx-auto px-5 md:px-[64px]">
      {/* Title */}
      <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl mb-16 uppercase border-l-4 border-secondary pl-6 font-bold tracking-tight">
        Technical Case Studies
      </h2>

      {/* Grid of Case Studies */}
      <div ref={triggerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mb-24">
        {cases.map((project, idx) => (
          <div
            key={idx}
            className={`group border border-outline-variant bg-surface-container-low overflow-hidden transition-all duration-500 rounded-sm ${project.borderColor} ${project.glowColor}`}
          >
            {/* Visual Aspect Ratio Container */}
            <div className="aspect-video relative overflow-hidden bg-surface-container-lowest">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={project.title}
                src={project.img}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-custom to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6">
                <span
                  className={`font-mono-custom text-xs px-3 py-1 rounded-sm border ${project.badgeClass}`}
                >
                  {project.tag}
                </span>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8">
              <h3 className="font-headline text-2xl font-bold mb-4 group-hover:text-primary transition-colors uppercase tracking-tight">
                {project.title}
              </h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6">
                {project.desc}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono-custom text-[10px] text-primary px-2.5 py-1 border border-primary/20 bg-primary/5 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link CTA */}
              <a
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline font-mono-custom text-xs uppercase tracking-widest group/link"
                href="#"
              >
                Analyze Solution{" "}
                <ArrowUpRight
                  size={14}
                  className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Why R&R Section Banner */}
      <div className="py-16 px-8 border border-outline-variant/30 rounded-md bg-surface-container-low/40 backdrop-blur-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <CheckCircle2 className="text-secondary w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-headline text-lg uppercase font-semibold text-on-surface mb-1">
                {item.title}
              </h5>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
