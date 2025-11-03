"use client";
/* eslint-disable @next/next/no-img-element */

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

const FALLBACK_ITEMS = [
  {
    id: "local-1",
    image: "/sri-lanka-beach-sunset.jpg",
    caption: "Golden hour at Mirissa Beach",
    link: "https://instagram.com",
  },
  {
    id: "local-2",
    image: "/placeholder.svg?height=300&width=300",
    caption: "Tea plantations in Nuwara Eliya",
    link: "https://instagram.com",
  },
];

const FEED_URL = "https://feeds.behold.so/U14s3stbDdDIGlz4xwbt";

export default function SocialGallery() {
  const { content } = useLanguage();
  const gallery = content.home.socialGallery;
  const [items, setItems] = useState<
    {
      id: string;
      image: string;
      caption: string;
      link: string;
    }[]
  >(FALLBACK_ITEMS);

  useEffect(() => {
    async function loadFeed() {
      try {
        const res = await fetch(FEED_URL);
        if (!res.ok) throw new Error("Failed to fetch feed");
        const data = await res.json();

        const posts: FeedPost[] = data.posts ?? [];

        const mapped = posts.map((post) => {
          const img =
            post.mediaType === "CAROUSEL_ALBUM" && post.children?.length
              ? post.children[0].mediaUrl
              : post.mediaUrl;

          return {
            id: post.id,
            image: img,
            caption: post.caption?.split("\n")[0] ?? "View on Instagram",
            link:
              post.permalink ??
              "https://www.instagram.com/srilankanchauffeurguide",
          };
        });

        if (mapped.length > 0) setItems(mapped);
      } catch (err) {
        console.warn("Could not load Instagram feed:", err);
      }
    }

    loadFeed();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden">
      {/* background blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            {gallery.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            {gallery.subheading}
          </p>
        </div>

        {/* Grid (Instagram only) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-2xl aspect-square bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider">
                      Instagram
                    </span>
                  </div>
                  <p className="text-sm font-medium leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center space-y-6">
          <p className="text-base text-slate-600 font-medium">
            {gallery.ctaPrompt}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://www.instagram.com/srilankanchauffeurguide"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-600 bg-emerald-600 px-8 py-3.5 text-sm font-medium text-white hover:bg-emerald-700 hover:border-emerald-700 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              {gallery.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
