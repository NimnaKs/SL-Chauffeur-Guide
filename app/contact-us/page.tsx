"use client";
/* eslint-disable @next/next/no-img-element */

// app/contact/page.tsx
import ContactUs from "@/components/contact-us";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactPage() {
  const { content } = useLanguage();
  const page = content.pages.contact;

  return (
    <main className="bg-white">
      {/* Hero (non-intrusive, no effect on the form styles) */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
        <img
          src="/img/contact-us.jpg"
          alt="Sri Lanka Tours & Travel"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end items-center text-center pb-16 lg:pb-24 px-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg tracking-tight">
            {page.heroHeading}
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl">
            {page.heroSubheading}
          </p>
        </div>
      </div>

      {/* Your existing form component (UNCHANGED) */}
      <ContactUs />
    </main>
  );
}
