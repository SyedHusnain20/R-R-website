import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | R&R Digital Solutions",
  description: "The terms and conditions governing use of the R&R Digital Solutions website and services.",
};

const h2 = "font-headline text-xl sm:text-2xl uppercase font-bold tracking-tight text-on-surface mt-12 mb-4";
const p = "font-body text-sm sm:text-base text-on-surface-variant leading-relaxed mb-4";
const ul = "list-disc list-outside pl-5 space-y-2 font-body text-sm sm:text-base text-on-surface-variant leading-relaxed mb-4";

export default function TermsPage() {
  return (
    <section className="pt-32 md:pt-40 pb-24 px-5 md:px-[64px] max-w-[1280px] mx-auto">
      <h6 className="font-mono-custom text-xs text-primary uppercase mb-4 tracking-widest font-semibold">
        Legal
      </h6>
      <h1 className="font-headline text-4xl sm:text-5xl uppercase mb-4 font-bold tracking-tight border-l-4 border-secondary pl-6">
        Terms &amp; Conditions
      </h1>
      <p className="font-mono-custom text-xs text-on-surface-variant mb-16 pl-6">
        Last updated: July 15, 2026
      </p>

      <div className="max-w-3xl">
        <p className={p}>
          These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of rrdigitalsolutions.org (the
          &quot;Site&quot;) and your engagement with R&amp;R Digital Solutions (&quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;). By using the Site or engaging our services, you agree to these Terms.
        </p>

        <h2 className={h2}>1. Services</h2>
        <p className={p}>
          R&amp;R Digital Solutions provides AI chatbots and automation, full-stack software development, and data
          analytics services. The specific scope, deliverables, timeline, and cost for any paid engagement are
          defined in a separate written proposal or agreement between us and the client, not by this Site alone.
        </p>

        <h2 className={h2}>2. Use of This Website</h2>
        <p className={p}>
          The Site is provided for informational purposes — to showcase our work and let prospective clients get in
          touch. You agree not to misuse the Site, attempt to interfere with its normal operation, or use it for any
          unlawful purpose.
        </p>

        <h2 className={h2}>3. Project Engagements</h2>
        <p className={p}>
          Submitting our contact form does not create a binding agreement for services. A project begins only once
          both parties agree in writing to a scope, timeline, and payment terms.
        </p>

        <h2 className={h2}>4. Intellectual Property</h2>
        <ul className={ul}>
          <li>
            The Site&apos;s content, branding, and design — including the R&amp;R logo and visual identity — belong
            to R&amp;R Digital Solutions unless otherwise stated.
          </li>
          <li>
            Ownership of deliverables created for a specific client project is governed by that project&apos;s
            individual agreement, typically transferring to the client upon full payment.
          </li>
          <li>
            We retain the right to reuse general methodologies, frameworks, and non-confidential know-how developed
            during an engagement in future work.
          </li>
        </ul>

        <h2 className={h2}>5. Confidentiality</h2>
        <p className={p}>
          We treat client project details as confidential and will not share them publicly without permission, except
          for general case-study descriptions that a client has approved for our portfolio.
        </p>

        <h2 className={h2}>6. Limitation of Liability</h2>
        <p className={p}>
          The Site and its content are provided &quot;as is,&quot; without warranties of any kind. To the fullest
          extent permitted by law, R&amp;R Digital Solutions is not liable for any indirect, incidental, or
          consequential damages arising from your use of the Site. Liability related to a specific paid engagement is
          governed by that engagement&apos;s written agreement.
        </p>

        <h2 className={h2}>7. Third-Party Links</h2>
        <p className={p}>
          The Site may link to third-party websites (such as social media profiles or deployed project demos). We
          are not responsible for the content or practices of those external sites.
        </p>

        <h2 className={h2}>8. Governing Law</h2>
        <p className={p}>
          These Terms are governed by the laws of the Islamic Republic of Pakistan, without regard to conflict-of-law
          principles.
        </p>

        <h2 className={h2}>9. Changes to These Terms</h2>
        <p className={p}>
          We may update these Terms from time to time. Continued use of the Site after changes are posted constitutes
          acceptance of the updated Terms.
        </p>

        <h2 className={h2}>10. Contact Us</h2>
        <p className={p}>
          Questions about these Terms can be sent to{" "}
          <a href="mailto:hasnainzainulabdin@gmail.com" className="text-primary hover:underline">
            contact@rrdigitalsolutions.org
          </a>
          .
        </p>

        <p className="font-body text-xs text-on-surface-variant/60 italic leading-relaxed mt-16 pt-8 border-t border-outline-variant/20">
          This document is a general template provided for informational purposes and does not constitute legal
          advice. Please have it reviewed by a qualified legal professional before relying on it, particularly for
          the governing-law and liability clauses.
        </p>
      </div>
    </section>
  );
}
