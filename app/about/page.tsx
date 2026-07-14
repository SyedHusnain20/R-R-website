import type { Metadata } from "next";
import Link from "next/link";
import { Target, ShieldCheck, Rocket, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | R&R Digital Solutions",
  description:
    "Meet the founders of R&R Digital Solutions — an engineering-first digital agency building AI automation, custom software, and data analytics solutions.",
};

export default function AboutPage() {
  const founders = [
    {
      name: "Sheroz Khan",
      role: "Chief Strategy/Finance Officer",
      accent: "secondary",
      img: "/images/sheroz.jpg",
      bio: "Sheroz leads strategy, client partnerships, and the financial backbone of R&R Digital Solutions — making sure every engagement is scoped clearly, priced fairly, and delivered with a clear return on investment for the client.",
    },
    {
      name: "Hasnain Zainulabdin",
      role: "Chief Technology/Production Officer",
      accent: "primary",
      img: "/hasnain-portrait.png",
      bio: "Hasnain leads engineering and production at R&R — designing and building the RAG chatbots, FastAPI backends, and automation pipelines the agency ships for clients, with a background in Software Engineering and applied AI/Data Science.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Precision Engineering",
      desc: "Every system is architected deliberately — clean data models, sound APIs, and code built to be maintained, not just shipped.",
    },
    {
      icon: ShieldCheck,
      title: "Transparent Partnership",
      desc: "Clear scopes, honest timelines, and no black-box decisions. You always know what's being built and why.",
    },
    {
      icon: Rocket,
      title: "Practical Innovation",
      desc: "We use AI and automation where they genuinely save time or money — not as a buzzword bolted onto a proposal.",
    },
    {
      icon: Users,
      title: "Client-Centric Delivery",
      desc: "Small enough to stay hands-on with every project, and structured enough to deliver production-grade results.",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 md:pt-40 pb-16 px-5 md:px-[64px] max-w-[1280px] mx-auto">
        <h6 className="font-mono-custom text-xs text-primary uppercase mb-4 tracking-widest font-semibold">
          Who We Are
        </h6>
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl uppercase mb-8 font-bold tracking-tight border-l-4 border-secondary pl-6">
          About R&amp;R Digital Solutions
        </h1>
        <p className="text-on-surface-variant font-body text-base sm:text-lg leading-relaxed max-w-3xl">
          R&amp;R Digital Solutions is a two-person engineering studio built around a simple idea: bring senior-level
          technical execution — AI chatbots, automation, full-stack development, and data analytics — to businesses
          that don&apos;t want to compromise on quality to get it.
        </p>
      </section>

      {/* Founders */}
      <section className="px-5 md:px-[64px] max-w-[1280px] mx-auto pb-24">
        <h2 className="font-headline text-2xl sm:text-3xl uppercase mb-12 font-bold tracking-tight">
          The Founders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder) => {
            const isSecondary = founder.accent === "secondary";
            const ringClass = isSecondary ? "border-secondary" : "border-primary";
            const roleClass = isSecondary ? "text-secondary" : "text-primary";
            return (
              <div
                key={founder.name}
                className="border border-outline-variant bg-surface-container-low rounded-sm p-8 flex flex-col items-start"
              >
                <div
                  className={`w-24 h-24 mb-6 rounded-full border-2 ${ringClass} p-1 overflow-hidden bg-surface-container-low`}
                >
                  <img
                    className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                    alt={founder.name}
                    src={founder.img}
                  />
                </div>
                <h3 className="font-headline text-xl uppercase font-bold text-on-surface mb-1">
                  {founder.name}
                </h3>
                <p className={`font-mono-custom text-xs tracking-wider font-semibold mb-4 ${roleClass}`}>
                  {founder.role}
                </p>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Values */}
      <section className="px-5 md:px-[64px] max-w-[1280px] mx-auto pb-24">
        <h2 className="font-headline text-2xl sm:text-3xl uppercase mb-12 font-bold tracking-tight">
          How We Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center border border-primary/20 bg-on-primary/10 text-primary shrink-0">
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <h5 className="font-headline text-lg uppercase font-semibold text-on-surface mb-2">
                    {value.title}
                  </h5>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-[64px] max-w-[1280px] mx-auto pb-32">
        <div className="border border-outline-variant/30 rounded-md bg-surface-container-low/40 backdrop-blur-sm py-14 px-8 text-center">
          <h3 className="font-headline text-2xl sm:text-3xl uppercase font-bold tracking-tight mb-4">
            Want to work with us?
          </h3>
          <p className="text-on-surface-variant font-body text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Tell us about your project and we&apos;ll get back to you with an honest read on scope, timeline, and cost.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-8 py-4 font-mono-custom text-xs uppercase tracking-widest hover:brightness-110 transition-all duration-300 font-semibold rounded-sm"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
