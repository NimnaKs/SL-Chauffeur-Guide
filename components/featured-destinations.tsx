"use client";

import Link from "next/link";
import Image from "next/image";

import { useLanguage } from "@/components/LanguageProvider";

export default function FeaturedDestinations() {
  const { content } = useLanguage();
  const featured = content.home.featuredDestinations;
  const destinations = content.destinations.items.slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            {featured.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            {featured.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Link
              key={dest.id}
              href={`/destinations#${dest.id}`}
              className="group block rounded-xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5 space-y-1.5">
                <h3 className="text-lg font-medium text-slate-900 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {dest.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/destinations"
            className="inline-flex items-center justify-center rounded-lg border border-emerald-600 px-8 py-3.5 text-sm font-medium text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all duration-300"
          >
            {featured.viewAllLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
