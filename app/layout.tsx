import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "R&R Digital Solutions | Engineering the Future",
  description:
    "Pioneering digital transformation through bespoke AI automation, data analytics, and world-class software architecture.",
  keywords: ["AI Automation", "Software Architecture", "Data Analytics", "Digital Solutions", "Hyderabad", "Sindh", "Pakistan"],
  authors: [{ name: "R&R Digital Solutions" }],
  openGraph: {
    title: "R&R Digital Solutions | Engineering the Future",
    description:
      "Pioneering digital transformation through bespoke AI automation, data analytics, and world-class software architecture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="antialiased selection:bg-primary/30 selection:text-primary">
        <div className="flex flex-col min-h-screen bg-background-custom text-on-background selection:bg-primary/20">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
