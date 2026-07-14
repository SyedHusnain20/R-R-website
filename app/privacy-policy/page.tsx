import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | R&R Digital Solutions",
  description: "How R&R Digital Solutions collects, uses, and protects your information.",
};

const h2 = "font-headline text-xl sm:text-2xl uppercase font-bold tracking-tight text-on-surface mt-12 mb-4";
const p = "font-body text-sm sm:text-base text-on-surface-variant leading-relaxed mb-4";
const ul = "list-disc list-outside pl-5 space-y-2 font-body text-sm sm:text-base text-on-surface-variant leading-relaxed mb-4";

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 md:pt-40 pb-24 px-5 md:px-[64px] max-w-[1280px] mx-auto">
      <h6 className="font-mono-custom text-xs text-primary uppercase mb-4 tracking-widest font-semibold">
        Legal
      </h6>
      <h1 className="font-headline text-4xl sm:text-5xl uppercase mb-4 font-bold tracking-tight border-l-4 border-secondary pl-6">
        Privacy Policy
      </h1>
      <p className="font-mono-custom text-xs text-on-surface-variant mb-16 pl-6">
        Last updated: July 15, 2026
      </p>

      <div className="max-w-3xl">
        <p className={p}>
          This Privacy Policy explains how R&amp;R Digital Solutions (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
          collects, uses, and protects information when you visit rrdigitalsolutions.org (the &quot;Site&quot;) or
          contact us about our services.
        </p>

        <h2 className={h2}>1. Information We Collect</h2>
        <p className={p}>We collect information in two ways:</p>
        <ul className={ul}>
          <li>
            <span className="text-on-surface font-semibold">Information you provide directly:</span> when you submit
            our contact form, we collect your name, email address, selected project type, and the message you send us.
          </li>
          <li>
            <span className="text-on-surface font-semibold">Information collected automatically:</span> like most
            websites, our hosting provider&apos;s server logs may record standard technical data such as your IP
            address, browser type, device type, and pages visited.
          </li>
        </ul>

        <h2 className={h2}>2. How We Use Your Information</h2>
        <ul className={ul}>
          <li>To respond to your inquiries and discuss potential projects.</li>
          <li>To scope, estimate, and plan work you&apos;ve asked us about.</li>
          <li>To maintain records of client communications.</li>
          <li>To monitor and improve the performance and security of the Site.</li>
        </ul>

        <h2 className={h2}>3. How We Share Your Information</h2>
        <p className={p}>
          We do not sell, rent, or trade your personal information. We may share information with trusted service
          providers who help us run our business — such as hosting and email-delivery providers — solely so they can
          perform those services on our behalf. We may also disclose information if required to do so by law.
        </p>

        <h2 className={h2}>4. Cookies</h2>
        <p className={p}>
          The Site does not currently use advertising or analytics cookies. See our{" "}
          <Link href="/cookie-policy" className="text-primary hover:underline">
            Cookie Policy
          </Link>{" "}
          for full details on what is used and why.
        </p>

        <h2 className={h2}>5. Data Retention</h2>
        <p className={p}>
          We retain contact form submissions and related correspondence only for as long as reasonably necessary to
          respond to your inquiry, deliver any agreed services, and maintain business records.
        </p>

        <h2 className={h2}>6. Your Rights</h2>
        <p className={p}>
          You may request access to, correction of, or deletion of the personal information you&apos;ve shared with
          us at any time by contacting us using the details below.
        </p>

        <h2 className={h2}>7. Data Security</h2>
        <p className={p}>
          We take reasonable technical and organizational measures to protect the information you share with us.
          However, no method of transmission or storage over the internet is 100% secure, and we cannot guarantee
          absolute security.
        </p>

        <h2 className={h2}>8. Children&apos;s Privacy</h2>
        <p className={p}>
          The Site is not directed at children, and we do not knowingly collect personal information from anyone
          under the age of 16.
        </p>

        <h2 className={h2}>9. Changes to This Policy</h2>
        <p className={p}>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised
          &quot;Last updated&quot; date.
        </p>

        <h2 className={h2}>10. Contact Us</h2>
        <p className={p}>
          If you have questions about this Privacy Policy or how your information is handled, contact us at{" "}
          <a href="mailto:contact@rrdigitalsolutions.org" className="text-primary hover:underline">
            contact@rrdigitalsolutions.org
          </a>
          .
        </p>

        <p className="font-body text-xs text-on-surface-variant/60 italic leading-relaxed mt-16 pt-8 border-t border-outline-variant/20">
          This document is a general template provided for informational purposes and does not constitute legal
          advice. Please have it reviewed by a qualified legal professional to confirm it meets the requirements of
          the jurisdictions in which you and your clients operate (for example, GDPR in the EU or CCPA in
          California).
        </p>
      </div>
    </section>
  );
}
