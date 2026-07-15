import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | R&R Digital Solutions",
  description: "How R&R Digital Solutions uses cookies and similar technologies.",
};

const h2 = "font-headline text-xl sm:text-2xl uppercase font-bold tracking-tight text-on-surface mt-12 mb-4";
const p = "font-body text-sm sm:text-base text-on-surface-variant leading-relaxed mb-4";

export default function CookiePolicyPage() {
  return (
    <section className="pt-32 md:pt-40 pb-24 px-5 md:px-[64px] max-w-[1280px] mx-auto">
      <h6 className="font-mono-custom text-xs text-primary uppercase mb-4 tracking-widest font-semibold">
        Legal
      </h6>
      <h1 className="font-headline text-4xl sm:text-5xl uppercase mb-4 font-bold tracking-tight border-l-4 border-secondary pl-6">
        Cookie Policy
      </h1>
      <p className="font-mono-custom text-xs text-on-surface-variant mb-16 pl-6">
        Last updated: July 15, 2026
      </p>

      <div className="max-w-3xl">
        <p className={p}>
          This Cookie Policy explains how R&amp;R Digital Solutions uses cookies and similar technologies on
          rrdigitalsolutions.org (the &quot;Site&quot;).
        </p>

        <h2 className={h2}>1. What Are Cookies</h2>
        <p className={p}>
          Cookies are small text files stored on your device by your browser. They&apos;re commonly used to remember
          preferences, keep you signed in, or measure how a site is used.
        </p>

        <h2 className={h2}>2. What We Currently Use</h2>
        <p className={p}>
          The Site does not currently set any advertising or analytics cookies, and does not track you across other
          websites. As the Site evolves — for example, if we add analytics to understand traffic, or a live chat
          widget — this policy will be updated to reflect exactly what&apos;s in use and why.
        </p>

        <h2 className={h2}>3. Third-Party Content</h2>
        <p className={p}>
          The Site loads fonts directly from Google Fonts&apos; servers. Loading these fonts may share your IP
          address with Google as part of that request, in line with Google&apos;s own privacy practices.
        </p>

        <h2 className={h2}>4. Managing Cookies</h2>
        <p className={p}>
          Most browsers let you block or delete cookies through their settings. Since this Site does not rely on
          cookies for core functionality, disabling them should not affect your ability to browse the Site or use the
          contact form.
        </p>

        <h2 className={h2}>5. Changes to This Policy</h2>
        <p className={p}>
          We may update this Cookie Policy as the Site changes. Any updates will be posted here with a revised
          &quot;Last updated&quot; date.
        </p>

        <h2 className={h2}>6. Contact Us</h2>
        <p className={p}>
          Questions about this Cookie Policy can be sent to{" "}
          <a href="mailto:hasnainzainulabdin@gmail.com" className="text-primary hover:underline">
            contact@rrdigitalsolutions.org
          </a>
          .
        </p>

        <p className="font-body text-xs text-on-surface-variant/60 italic leading-relaxed mt-16 pt-8 border-t border-outline-variant/20">
          This document is a general template provided for informational purposes and does not constitute legal
          advice. Please have it reviewed by a qualified legal professional, and keep it updated any time you add new
          cookies, tracking scripts, or third-party tools to the Site.
        </p>
      </div>
    </section>
  );
}
