import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/Chatbot/ChatWidget";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";
import LoadingScreen from "@/components/LoadingScreen";

const baseUrl = "https://rrdigitalsolutions.org";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "R&R Digital Solutions | AI Automation, Custom Software & Data Analytics",
    template: "%s | R&R Digital Solutions",
  },
  description:
    "R&R Digital Solutions engineers AI automation, custom chatbots, full-stack web applications, and data analytics solutions from Hyderabad, Pakistan. Get a free project consultation today.",
  keywords: [
    "AI Automation",
    "Custom Software Development",
    "AI Chatbot Development",
    "Data Analytics",
    "Digital Solutions",
    "Full Stack Web Development",
    "Business Process Automation",
    "Software Architecture",
    "RAG Chatbot",
    "FastAPI Development",
    "Next.js Development",
    "Hyderabad",
    "Sindh",
    "Pakistan",
    "R&R Digital Solutions",
  ],
  authors: [{ name: "R&R Digital Solutions", url: baseUrl }],
  creator: "R&R Digital Solutions",
  publisher: "R&R Digital Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "R&R Digital Solutions",
    title: "R&R Digital Solutions | AI Automation, Custom Software & Data Analytics",
    description:
      "Pioneering digital transformation through bespoke AI automation, custom chatbots, and world-class software architecture. Based in Hyderabad, Pakistan.",
    images: [
      {
        url: `${baseUrl}/logo.png`,
        width: 512,
        height: 512,
        alt: "R&R Digital Solutions logo — teal and gold emblem representing AI automation and digital engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "R&R Digital Solutions | AI Automation, Custom Software & Data Analytics",
    description:
      "Pioneering digital transformation through bespoke AI automation, custom chatbots, and world-class software architecture.",
    images: [`${baseUrl}/logo.png`],
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
};

// JSON-LD Structured Data for rich results and AI search understanding
function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "R&R Digital Solutions",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/logo.png`,
    description:
      "R&R Digital Solutions is an engineering-first digital agency specializing in AI automation, custom chatbots, full-stack web development, and data analytics. Based in Hyderabad, Sindh, Pakistan.",
    foundingDate: "2025",
    founders: [
      { "@type": "Person", name: "Sheroz Khan", jobTitle: "Chief Strategy/Finance Officer" },
      { "@type": "Person", name: "Hasnain Zainulabdin", jobTitle: "Chief Technology/Production Officer" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@rr-solutions.tech",
      contactType: "customer service",
      availableLanguage: ["English", "Urdu"],
    },
    sameAs: [
      "https://linkedin.com/company/r&r-digital_solutions",
      "https://www.facebook.com/share/1BXWa6tvAP/",
      "https://www.instagram.com/rr_digitalsolution/",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "AI Chatbots",
      "RAG Systems",
      "Business Process Automation",
      "Full Stack Web Development",
      "Data Analytics",
      "Custom Software Development",
      "FastAPI",
      "Next.js",
      "React",
    ],
    areaServed: {
      "@type": "GeoShape",
      name: "Worldwide",
    },
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Solutions Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "AI & Automation", description: "Custom LLMs, predictive modeling, and autonomous workflows." },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Custom Chatbot Development", description: "Conversational AI agents trained on your business data." },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Full-Stack Web Development", description: "Scalable, cloud-native web and mobile applications." },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Data Analytics", description: "Real-time visualization dashboards and data lake architecture." },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Custom Software Development", description: "Bespoke software solutions designed around exact workflows." },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "AI Integration", description: "Embedding intelligent automation into existing tools and pipelines." },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "R&R Digital Solutions",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What tech stack does R&R Digital Solutions specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are language-agnostic but favor high-performance stacks including React/Next.js, Python, and FastAPI, deployed primarily on AWS or GCP infrastructure.",
        },
      },
      {
        "@type": "Question",
        name: "Does R&R Digital Solutions work with startups or only enterprises?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We maintain two distinct streams: Enterprise Transformation for established firms and Rapid Scale acceleration for high-growth, venture-backed startups.",
        },
      },
      {
        "@type": "Question",
        name: "What is R&R Digital Solutions' typical project timeline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depends upon project's complexity. Let's discuss your needs and find out the appropriate timeline for your project.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className="antialiased selection:bg-primary/30 selection:text-primary">
        <GoogleAnalytics />
        <LoadingScreen />
        <div className="flex flex-col min-h-screen bg-background-custom text-on-background selection:bg-primary/20">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <ChatWidget />
        <CookieBanner />
      </body>
    </html>
  );
}