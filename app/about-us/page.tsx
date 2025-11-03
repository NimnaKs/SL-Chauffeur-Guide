"use client";
/* eslint-disable @next/next/no-img-element */

import Testimonials from "@/components/Testimonials";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { content } = useLanguage();
  const aboutPage = content.pages.about;

  return (
    <section className="bg-white">
      {/* 🌄 Hero Section */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden">
        <img
          src="/img/img-11.jpg"
          alt="Sri Lanka Tours & Travel"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end items-center text-center pb-20 lg:pb-24 px-4">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white drop-shadow-lg tracking-tight uppercase">
            {aboutPage.heroHeading}
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {aboutPage.heroSubheading}
          </p>
        </div>
      </div>

      {/* 💬 About Main Section */}
      <div className="mx-auto max-w-6xl px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — 4 Photo Collage */}
          <div className="order-1 lg:order-1">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {/* Column 1 */}
              <div className="space-y-4 sm:space-y-5">
                <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                  <img
                    src="/img/img-13.jpg"
                    alt="Hill country hike"
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm translate-y-2 sm:translate-y-4">
                  <img
                    src="/img/img-14.jpg"
                    alt="Safari jeep experience"
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
              {/* Column 2 */}
              <div className="space-y-4 sm:space-y-5 translate-y-6 sm:translate-y-10">
                <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                  <img
                    src="/img/img-16.JPG"
                    alt="Guests and guide beside jeep"
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                  <img
                    src="/img/img-17.JPG"
                    alt="Lagoon boat ride with guests"
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text Content */}
          <div className="order-2 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {aboutPage.highlightTitle}
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {aboutPage.highlightBody}
              </p>
            </div>

            <ul className="space-y-4 text-sm text-gray-800">
              {aboutPage.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-4">
                  <span className="mt-2 h-1.5 w-6 rounded-full bg-emerald-600 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-lg border border-emerald-600 px-8 py-3.5 text-sm font-medium text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all duration-300"
              >
                {aboutPage.primaryCtaLabel}
              </a>
              <a
                href="/destinations"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-8 py-3.5 text-sm font-medium text-slate-800 hover:border-emerald-600 hover:bg-white transition-all duration-300"
              >
                {aboutPage.secondaryCtaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 📊 Stats Section */}
      <div className="mx-auto max-w-5xl px-6 lg:px-12 pb-20 lg:pb-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {aboutPage.stats.map(({ value, label }) => (
            <div
              key={value}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 lg:p-8 text-center hover:border-emerald-200 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="text-xl lg:text-2xl font-semibold text-slate-900">
                  {value}
                </div>
                <div className="mt-2 text-xs text-slate-600">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 💬 Testimonials Section */}
      <Testimonials />
    </section>
  );
}
