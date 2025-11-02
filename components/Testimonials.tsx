"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type Testimonial = {
  quote: string;
  author: string;
  meta?: string;
  rating?: number;
};

const DEFAULTS: Testimonial[] = [
  {
    quote:
      "Suresh looked after us so well — courteous, punctual and safe. A knowledgeable guide who made our trip a pleasure.",
    author: "glendogs",
    meta: "Grantham, UK · Mar 2018 · Couples",
    rating: 5,
  },
  {
    quote:
      "Suresh was the best guide and driver we could imagine. His experience, flexibility and warmth made our trip unforgettable.",
    author: "Janine V",
    meta: "Netherlands · Jul 2019 · Family",
    rating: 5,
  },
  {
    quote:
      "During our trip, Suresh felt like family — helpful, calm and always making sure we were safe. Highly recommended!",
    author: "Valerie B",
    meta: "France · Apr 2019 · Family",
    rating: 5,
  },
  {
    quote:
      "Our six-day journey through Sri Lanka was seamless thanks to Suresh’s expertise and attention to detail.",
    author: "Shiv",
    meta: "Kuala Lumpur, Malaysia · Mar 2019 · Couples",
    rating: 5,
  },
  {
    quote:
      "Best guide ever! Deep local knowledge, speaks perfect English and German. I always felt safe and cared for.",
    author: "Suse Mergner",
    meta: "Germany · Dec 2018",
    rating: 5,
  },
  {
    quote:
      "We had a fantastic two weeks in Sri Lanka — Suresh ensured everything ran smoothly. 10/10 recommendation.",
    author: "azbs121",
    meta: "Chester, UK · Jul 2018 · Couples",
    rating: 5,
  },
  {
    quote:
      "Suresh met us at the airport and took care of everything. Friendly, experienced and trustworthy — 100% recommended.",
    author: "Ozoilo J",
    meta: "UK · Aug 2018 · Couples",
    rating: 5,
  },
  {
    quote:
      "Our honeymoon was made perfect thanks to Suresh’s insight and professionalism. We saw everything we wanted and more.",
    author: "CSJ",
    meta: "Cotswolds, UK · Jul 2018 · Couples",
    rating: 5,
  },
  {
    quote:
      "Suresh gave us far more than a chauffeur service — a deep cultural journey through Sri Lanka’s history and nature.",
    author: "Andrea K",
    meta: "Germany · Apr 2018 · Family",
    rating: 5,
  },
];

export default function Testimonials({
  items = DEFAULTS,
}: {
  items?: Testimonial[];
}) {
  const [index, setIndex] = useState(0);

  // Auto-advance every 7 seconds
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % items.length),
      7000
    );
    return () => clearInterval(interval);
  }, [items.length]);

  const current = items[index];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-neutral-50/80 to-white py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Client Testimonials
        </h2>
        <p className="text-gray-600 mb-8">
          Real experiences from travelers who explored Sri Lanka with Suresh
        </p>

        <div className="relative h-60 sm:h-52">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col items-center justify-center px-4"
            >
              {typeof current.rating === "number" && (
                <div className="mb-2 flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg
                      key={s}
                      className={`h-4 w-4 ${
                        s < (current.rating ?? 0)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.175 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              )}

              <blockquote className="text-lg text-gray-800 leading-relaxed max-w-2xl italic">
                “{current.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-gray-500">
                —{" "}
                <span className="font-medium text-gray-900">
                  {current.author}
                </span>
                {current.meta ? ` (${current.meta})` : ""}
              </figcaption>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-10 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                i === index ? "bg-blue-600 w-4" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
