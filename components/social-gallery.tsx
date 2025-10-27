"use client";

import { useState } from "react";
import { Instagram, Music } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    type: "instagram",
    image: "/sri-lanka-beach-sunset.jpg",
    caption: "Golden hour at Mirissa Beach",
    link: "https://instagram.com",
  },
  {
    id: 2,
    type: "instagram",
    image: "/placeholder.svg?height=300&width=300",
    caption: "Tea plantations in Nuwara Eliya",
    link: "https://instagram.com",
  },
  {
    id: 3,
    type: "tiktok",
    image: "/placeholder.svg?height=300&width=300",
    caption: "Climbing Sigiriya Rock",
    link: "https://tiktok.com",
  },
  {
    id: 4,
    type: "instagram",
    image: "/placeholder.svg?height=300&width=300",
    caption: "Historic Galle Fort",
    link: "https://instagram.com",
  },
  {
    id: 5,
    type: "tiktok",
    image: "https://pin.it/7Lzk9Jvze",
    caption: "Whale watching adventure",
    link: "https://pin.it/7Lzk9Jvze",
  },
  {
    id: 6,
    type: "instagram",
    image: "/placeholder.svg?height=300&width=300",
    caption: "Temple of the Tooth at night",
    link: "https://instagram.com",
  },
];

export default function SocialGallery() {
  const [selectedType, setSelectedType] = useState<
    "all" | "instagram" | "tiktok"
  >("all");

  const filtered =
    selectedType === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.type === selectedType);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Follow Our Journey
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Connect with us on Instagram and TikTok for daily travel inspiration
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-3 flex-wrap mb-12">
          <button
            onClick={() => setSelectedType("all")}
            className={`inline-flex items-center justify-center rounded-lg border px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
              selectedType === "all"
                ? "border-gray-900 bg-gray-900 text-white"
                : "border-gray-300 text-gray-700 hover:border-gray-900"
            }`}
          >
            All Posts
          </button>
          <button
            onClick={() => setSelectedType("instagram")}
            className={`inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
              selectedType === "instagram"
                ? "border-pink-600 bg-pink-600 text-white"
                : "border-gray-300 text-gray-700 hover:border-pink-600"
            }`}
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </button>
          <button
            onClick={() => setSelectedType("tiktok")}
            className={`inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
              selectedType === "tiktok"
                ? "border-gray-900 bg-gray-900 text-white"
                : "border-gray-300 text-gray-700 hover:border-gray-900"
            }`}
          >
            <Music className="w-4 h-4" />
            TikTok
          </button>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
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
                    {item.type === "instagram" ? (
                      <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                        <Instagram className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Music className="w-4 h-4 text-gray-900" />
                      </div>
                    )}
                    <span className="text-xs font-medium uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-sm font-medium leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center space-y-6">
          <p className="text-base text-gray-600 font-medium">
            Follow us for more amazing travel content
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-pink-600 bg-pink-600 px-8 py-3.5 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              Follow on Instagram
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-900 bg-gray-900 px-8 py-3.5 text-sm font-medium text-white hover:bg-gray-800 hover:border-gray-800 transition-all duration-300"
            >
              <Music className="w-4 h-4" />
              Follow on TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
