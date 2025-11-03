// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBadges from "@/components/FloatingBadges";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "Sri Lankan Chauffeur Guide",
  description: "Private drivers and tours across Sri Lanka",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-slate-900 antialiased">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingBadges />
        </LanguageProvider>
      </body>
    </html>
  );
}
