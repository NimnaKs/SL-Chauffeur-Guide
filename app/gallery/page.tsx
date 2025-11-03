"use client";
/* eslint-disable @next/next/no-img-element */

"use client";

import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";

type FeedPost = {
  id: string;
  mediaType: "IMAGE" | "CAROUSEL_ALBUM" | string;
  mediaUrl: string;
  caption?: string;
  permalink?: string;
  children?: {
    id: string;
    mediaType: string;
    mediaUrl: string;
  }[];
};

const FEED_URL = "https://feeds.behold.so/U14s3stbDdDIGlz4xwbt";

export default function GalleryPage() {
  const { content } = useLanguage();
  const page = content.pages.gallery;
  const [items, setItems] = useState<
    { id: string; image: string; caption: string; link: string }[]
  >([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(FEED_URL);
        if (!res.ok) throw new Error("Feed fetch failed");
        const data = await res.json();
        const posts: FeedPost[] = data.posts ?? [];

        const mapped = posts.map((p) => {
          const img =
            p.mediaType === "CAROUSEL_ALBUM" && p.children?.length
              ? p.children[0].mediaUrl
              : p.mediaUrl;
          return {
            id: p.id,
            image: img,
            caption: p.caption?.split("\n")[0] ?? "View on Instagram",
            link:
              p.permalink ?? "https://instagram.com/srilankanchauffeurguide",
          };
        });

        if (mapped.length > 0) setItems(mapped);
      } catch (e) {
        console.warn("Could not load Instagram feed:", e);
      }
    }

    load();
  }, []);

  return (
    <section className="bg-white">
      {/* 🌄 Hero Section */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden">
        <img
          src="/img/img-34.jpg"
          alt="Sri Lanka Travel Gallery"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end items-center text-center pb-20 lg:pb-24 px-4">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white drop-shadow-lg tracking-tight uppercase">
            {page.heroHeading}
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {page.heroSubheading}
          </p>
        </div>
      </div>

      {/* 📸 Instagram Gallery Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.length === 0
            ? Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-100 rounded-xl animate-pulse"
                />
              ))
            : items.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl aspect-square bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs leading-snug">
                      <p className="line-clamp-2">{item.caption}</p>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-pink-600/90 text-white rounded-full p-1.5">
                    <Instagram className="w-4 h-4" />
                  </div>
                </a>
              ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center space-y-6">
          <p className="text-base text-gray-600 font-medium">
            {page.ctaPrompt}
          </p>
          <a
            href="https://www.instagram.com/srilankanchauffeurguide"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-600 bg-emerald-600 px-8 py-3.5 text-sm font-medium text-white hover:bg-emerald-700 hover:border-emerald-700 transition-all duration-300"
          >
            <Instagram className="w-4 h-4" />
            {page.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
