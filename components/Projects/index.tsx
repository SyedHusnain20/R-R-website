"use client";

import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  QrCode,
  ClipboardCheck,
  Scale,
  Bell,
  FileSearch,
} from "lucide-react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const smallTriggerRef = useRef<HTMLDivElement>(null);

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

    const smallCards = smallTriggerRef.current?.children;
    if (smallCards) {
      gsap.fromTo(
        Array.from(smallCards),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: smallTriggerRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  // Flagship deployments
  const cases = [
    {
      title: "ShariahEase — Islamic Finance Platform",
      desc: "An AI-powered Islamic finance suite pairing a Shariah-compliant RAG chatbot with a Zakat calculator, halal stock screener, and a live WhatsApp assistant for on-demand guidance.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3V2D1liB7TBzchWrDGRmbBfhaUXpET6T9vs5gv6l8wlKLl4VR_Uv0W51c-sWwlfu7QkdyQFwmGxon-ZTr1cDHjYCuQK84KwGJEnHZvv5SwoZn3KZRXGtZhSvKUVT__Qc1f1_LNgzfYkKyLf1YqSjoq2796JpckHTfdLRzjNBmFrXurINZzETMLjRVukWzfHsadDIlUZz7j1WAGmRn3Nr_PTf8ERHpX7INfEjB1kyTnMQzPU475-Lyvb7kIGdG_u5dwv-vfR6EGWO5",
      tag: "FinTech",
      techs: ["FastAPI", "Llama 3.3-70B", "FAISS", "RAG", "WhatsApp API"],
      borderColor: "hover:border-secondary",
      glowColor: "hover:shadow-[0_0_30px_rgba(251,186,107,0.15)]",
      badgeClass: "text-secondary bg-on-secondary/10 border-secondary/20",
      link: "https://www.xyz.com",
    },
    {
      title: "5S Digitization & QR Audit System",
      desc: "A digitized material-addressing audit system built for a live manufacturing floor — QR codes on every rack trigger a mobile Microsoft Forms audit, with Power Automate routing real-time discrepancy alerts over Outlook.",
      icons: [QrCode, ClipboardCheck],
      tag: "Process Automation",
      techs: ["QR Code", "Microsoft Forms", "Power Automate", "Outlook API"],
      borderColor: "hover:border-primary",
      glowColor: "hover:shadow-[0_0_30px_rgba(105,216,208,0.15)]",
      badgeClass: "text-primary bg-on-primary/10 border-primary/20",
      link: null,
    },
  ];

  // Additional deployments
  const smallCases = [
    {
      title: "QanoonDaan",
      desc: "A Pakistani legal-advisory RAG chatbot with hybrid BM25 + FAISS retrieval, a 6-way query classifier, and hardened anti-hallucination prompting.",
      icon: Scale,
      tag: "LegalTech",
      techs: ["FastAPI", "Groq Llama 3.3", "BM25+FAISS"],
      accent: "secondary",
      link: "https://www.xyz.com",
    },
    {
      title: "Shelf-Life Item Alert Mechanism",
      desc: "An automated Power Automate flow that scans inventory daily, flags items nearing expiry, and emails stakeholders a formatted alert table.",
      icon: Bell,
      tag: "Process Automation",
      techs: ["Power Automate", "Excel", "Outlook"],
      accent: "primary",
      link: null,
    },
    {
      title: "ResuFit",
      desc: "An AI-powered resume screening API that scores candidate fit with NLP similarity models, deployed as a live FastAPI service.",
      icon: FileSearch,
      tag: "AI/ML",
      techs: ["FastAPI", "spaCy", "Scikit-learn"],
      accent: "secondary",
      link: "https://www.xyz.com",
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

      {/* Grid of Flagship Case Studies */}
      <div ref={triggerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mb-[24px]">
        {cases.map((project, idx) => (
          <div
            key={idx}
            className={`group border border-outline-variant bg-surface-container-low overflow-hidden transition-all duration-500 rounded-sm ${project.borderColor} ${project.glowColor}`}
          >
            {/* Visual Aspect Ratio Container */}
            <div className="aspect-video relative overflow-hidden bg-surface-container-lowest">
              {project.img ? (
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={project.title}
                  src={project.img}
                />
              ) : (
                <div className="circuit-bg absolute inset-0 flex items-center justify-center gap-8 transition-transform duration-700 group-hover:scale-105">
                  {project.icons?.map((Icon, iconIdx) => (
                    <Icon
                      key={iconIdx}
                      className={iconIdx === 0 ? "text-primary" : "text-secondary"}
                      size={64}
                      strokeWidth={1.25}
                    />
                  ))}
                </div>
              )}
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
              {project.link && (
                <a
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline font-mono-custom text-xs uppercase tracking-widest group/link"
                  href={project.link}
                >
                  Analyze Solution{" "}
                  <ArrowUpRight
                    size={14}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Deployments label */}
      <h6 className="font-mono-custom text-xs text-primary uppercase mb-4 tracking-widest font-semibold">
        Additional Deployments
      </h6>

      {/* Grid of Additional Deployments — aligned under the flagship cards above */}
      <div
        ref={smallTriggerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] mb-24"
      >
        {smallCases.map((project, idx) => {
          const Icon = project.icon;
          const isSecondary = project.accent === "secondary";
          const iconWrapClass = isSecondary
            ? "bg-on-secondary/10 border-secondary/20 text-secondary"
            : "bg-on-primary/10 border-primary/20 text-primary";
          const badgeClass = isSecondary
            ? "text-secondary bg-on-secondary/10 border-secondary/20"
            : "text-primary bg-on-primary/10 border-primary/20";
          const borderColor = isSecondary ? "hover:border-secondary" : "hover:border-primary";
          const glowColor = isSecondary
            ? "hover:shadow-[0_0_25px_rgba(251,186,107,0.12)]"
            : "hover:shadow-[0_0_25px_rgba(105,216,208,0.12)]";
          const titleHoverClass = isSecondary
            ? "group-hover:text-secondary"
            : "group-hover:text-primary";

          return (
            <div
              key={idx}
              className={`group border border-outline-variant bg-surface-container-low p-6 transition-all duration-500 rounded-sm flex flex-col ${borderColor} ${glowColor}`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-10 h-10 rounded-sm flex items-center justify-center border ${iconWrapClass}`}>
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <span className={`font-mono-custom text-[9px] px-2 py-1 rounded-sm border ${badgeClass}`}>
                  {project.tag}
                </span>
              </div>

              <h4 className={`font-headline text-base font-bold mb-3 uppercase tracking-tight transition-colors ${titleHoverClass}`}>
                {project.title}
              </h4>
              <p className="text-on-surface-variant font-body text-xs leading-relaxed mb-4 flex-grow">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono-custom text-[9px] text-primary px-2 py-0.5 border border-primary/20 bg-primary/5 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline font-mono-custom text-[10px] uppercase tracking-widest group/link mt-auto"
                  href={project.link}
                >
                  Analyze Solution{" "}
                  <ArrowUpRight
                    size={12}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                </a>
              )}
            </div>
          );
        })}
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