"use client";

import { useEffect, useRef } from "react";
import { BrainCircuit, AreaChart, Terminal, Cpu, Target } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const protocolRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Staggered entrance for Service Cards
    const cards = gridRef.current?.children;
    if (cards) {
      gsap.fromTo(
        Array.from(cards),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Staggered entrance for Protocol Steps
    const steps = protocolRef.current?.querySelectorAll(".protocol-step");
    if (steps) {
      gsap.fromTo(
        Array.from(steps),
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: protocolRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  const coreServices = [
    {
      title: "AI & Automation",
      desc: "Custom LLMs, predictive modeling, and autonomous workflows that redefine operational efficiency.",
      icon: <BrainCircuit className="text-primary w-6 h-6" />,
    },
    {
      title: "Data Analytics",
      desc: "Architecting data lakes and real-time visualization dashboards for informed decision-making.",
      icon: <AreaChart className="text-primary w-6 h-6" />,
    },
    {
      title: "Full-Stack Dev",
      desc: "Scalable, cloud-native web and mobile applications built with cutting-edge tech stacks.",
      icon: <Terminal className="text-primary w-6 h-6" />,
    },
    {
      title: "Digitalization",
      desc: "Modernizing legacy systems and migrating infrastructure to secure, high-performance cloud environments.",
      icon: <Cpu className="text-primary w-6 h-6" />,
    },
  ];

  const protocolSteps = [
    {
      step: "01",
      title: "Discovery",
      desc: "Deep audit of existing infrastructure and objective alignment.",
    },
    {
      step: "02",
      title: "Build",
      desc: "Agile development cycles with extreme emphasis on code quality.",
    },
    {
      step: "03",
      title: "Deploy",
      desc: "Seamless integration via CI/CD pipelines and load testing.",
    },
    {
      step: "04",
      title: "Support",
      desc: "Continuous monitoring and optimization for maximum uptime.",
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-24 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-0 right-0 w-64 h-64 circuit-bg opacity-15 rotate-180 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-[64px]">
        {/* Specializations Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h6 className="font-mono-custom text-xs text-secondary uppercase mb-2 tracking-widest font-semibold">
              Capabilities
            </h6>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl uppercase font-bold tracking-tight">
              Core Specializations
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-md font-body text-sm sm:text-base">
            End-to-end technical mastery to accelerate your digital maturity.
          </p>
        </div>

        {/* Bento Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {coreServices.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card p-8 rounded-md transition-all glow-teal flex flex-col items-start cursor-default"
            >
              <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center mb-6 bg-surface-container-low/40">
                {service.icon}
              </div>
              <h3 className="font-headline text-xl uppercase font-semibold mb-4 text-on-surface">
                {service.title}
              </h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission statement overlay block */}
        <div id="mission" className="py-20 mb-32 border-y border-outline-variant/20 relative flex flex-col items-center text-center">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-32 line-fade"></div>
          <Target className="text-primary w-12 h-12 mb-6 animate-pulse" />
          <h3 className="font-headline text-2xl sm:text-3xl uppercase font-bold tracking-tight mb-6">
            Engineering the Future of Business
          </h3>
          <p className="font-body text-on-surface-variant text-base sm:text-lg italic max-w-3xl leading-relaxed">
            "Our mission is to empower global enterprises by bridging the gap between complex technical challenges and elegant, scalable digital solutions. We don't just build software; we engineer competitive advantages."
          </p>
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-32 line-fade-gold"></div>
        </div>

        {/* How We Work: The Engineering Protocol */}
        <div className="py-10">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-center mb-24 uppercase font-bold tracking-tight">
            The Engineering Protocol
          </h2>

          <div ref={protocolRef} className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
            {/* Connecting Horizontal Line in Desktop */}
            <div className="absolute top-6 left-[10%] right-[10%] h-[1px] bg-outline-variant/30 hidden lg:block -z-10"></div>

            {protocolSteps.map((step, idx) => (
              <div key={idx} className="protocol-step relative flex flex-col items-start group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-12 h-12 bg-surface-container-highest border border-primary text-primary flex items-center justify-center rounded-sm mb-6 font-mono-custom text-xs font-semibold group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 shadow-md shadow-black/20 cursor-default"
                >
                  {step.step}
                </motion.div>
                <h4 className="font-headline text-lg uppercase font-semibold mb-2 text-on-surface">
                  {step.title}
                </h4>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
