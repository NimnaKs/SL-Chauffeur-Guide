"use client";
/* eslint-disable @next/next/no-img-element */

import { useLanguage } from "@/components/LanguageProvider";

type Stat = { value: string; label: string };

type GalleryImage = { src: string; alt: string };

const IMAGES: GalleryImage[] = [
  {
    src: "/img/img-13.jpg",
    alt: "Hike with guests in hill country",
  },
  {
    src: "/img/img-14.jpg",
    alt: "Safari jeep experience in Yala",
  },
  {
    src: "/img/img-16.JPG",
    alt: "Guests with guide beside jeep",
  },
  {
    src: "/img/img-17.JPG",
    alt: "Lagoon boat ride with guests",
  },
];

export default function AboutContent() {
  const { content } = useLanguage();
  const about = content.home.about;
  const stats = about.stats as Stat[];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-12 py-20 lg:py-32">
        <div className="mb-16 text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            {about.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            {about.subheading}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="order-1 lg:order-1">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-4 sm:space-y-5">
                <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                  <img
                    src={IMAGES[0]?.src}
                    alt={IMAGES[0]?.alt}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm translate-y-2 sm:translate-y-4">
                  <img
                    src={IMAGES[1]?.src}
                    alt={IMAGES[1]?.alt}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>

              <div className="space-y-4 sm:space-y-5 translate-y-6 sm:translate-y-10">
                <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                  <img
                    src={IMAGES[2]?.src}
                    alt={IMAGES[2]?.alt}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                  <img
                    src={IMAGES[3]?.src}
                    alt={IMAGES[3]?.alt}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {about.highlightTitle}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {about.highlightBody}
              </p>
            </div>

            <ul className="space-y-4 text-sm text-slate-800">
              {about.bullets.map((bullet) => (
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
                {about.primaryCtaLabel}
              </a>
              <a
                href="/destinations"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-8 py-3.5 text-sm font-medium text-slate-800 hover:border-emerald-600 hover:bg-white transition-all duration-300"
              >
                {about.secondaryCtaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-12 pb-20 lg:pb-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat) => (
            <div
              key={`${stat.value}-${stat.label}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 lg:p-8 text-center hover:border-emerald-200 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="text-xl lg:text-2xl font-semibold text-slate-900">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs text-slate-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
