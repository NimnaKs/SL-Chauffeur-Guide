"use client";
/* eslint-disable @next/next/no-img-element */

// app/destinations/page.tsx
import FeaturedDestinationsPaginated from "@/components/destinations";
import { useLanguage } from "@/components/LanguageProvider";

export default function DestinationsPage() {
  const { content } = useLanguage();
  const page = content.pages.destinations;

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden">
        {/* Background Image */}
        <img
          src="/img/destinations.png"
          alt="Sri Lanka Tours & Travel"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col justify-end items-center text-center pb-20 lg:pb-24 px-4">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white drop-shadow-lg tracking-tight uppercase">
            {page.heroHeading}
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {page.heroSubheading}
          </p>
        </div>
      </div>

      <FeaturedDestinationsPaginated />
    </section>
  );
}
