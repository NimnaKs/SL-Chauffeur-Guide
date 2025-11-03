"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";

interface Slide {
  id: number;
  title: string;
  image: string;
}

const SLIDES: Slide[] = [
  { id: 1, title: "Sigiriya Rock Fortress", image: "/img/img-1.jpg" },
  { id: 2, title: "Mirissa Beach", image: "/img/img-2.jpg" },
  { id: 3, title: "Ella Nine Arch Bridge", image: "/img/img-3.jpg" },
  { id: 4, title: "Kandy Temple of the Tooth", image: "/img/img-4.jpg" },
  { id: 5, title: "Galle Fort", image: "/img/img-5.png" },
  { id: 6, title: "Nuwara Eliya Tea Plantations", image: "/img/img-6.jpg" },
  { id: 7, title: "Yala National Park", image: "/img/img-7.jpg" },
  { id: 8, title: "Anuradhapura Ancient City", image: "/img/img-8.jpg" },
  { id: 9, title: "Polonnaruwa Ancient City", image: "/img/img-30.jpg" },
  { id: 10, title: "Adams Peak Sri Pada", image: "/img/img-10.jpg" },
];

// Clone 1 & 2 at end to avoid black gap on forward slide
const TRACK_SLIDES: Slide[] = [...SLIDES, SLIDES[0], SLIDES[1]];

export default function HeroSlideshow() {
  const { content } = useLanguage();
  const hero = content.hero;
  const [index, setIndex] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const [visible, setVisible] = useState<1 | 2 | 3>(1);
  const [transitionOn, setTransitionOn] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  // Breakpoints: <1024 => 1, 1024–1279 => 2, >=1280 => 3
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1280) setVisible(3);
      else if (w >= 1024) setVisible(2);
      else setVisible(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Autoplay
  useEffect(() => {
    if (!isAuto) return;
    const id = setInterval(() => next(), 5000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuto, visible]);

  const itemWidthPct = useMemo(() => 100 / visible, [visible]);
  const trackTranslatePct = useMemo(
    () => index * itemWidthPct,
    [index, itemWidthPct]
  );

  // Wrap logic on forward pass (snap back after clones)
  const handleTransitionEnd = () => {
    if (index >= SLIDES.length) {
      const realIndex = index % SLIDES.length;
      setTransitionOn(false);
      setIndex(realIndex);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setTransitionOn(true))
      );
    }
  };

  const prev = () => {
    setIsAuto(false);
    if (index === 0) {
      setTransitionOn(false);
      const wrap = SLIDES.length - (SLIDES.length % visible);
      const target = wrap === SLIDES.length ? SLIDES.length - visible : wrap;
      setIndex(target < 0 ? SLIDES.length - visible : target);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionOn(true);
          setIndex(
            (i) => (i - visible + TRACK_SLIDES.length) % TRACK_SLIDES.length
          );
        });
      });
    } else {
      setIndex(
        (i) => (i - visible + TRACK_SLIDES.length) % TRACK_SLIDES.length
      );
    }
  };
  const next = () => setIndex((i) => i + visible);
  const goPrev = () => prev();
  const goNext = () => {
    setIsAuto(false);
    next();
  };
  const goTo = (n: number) => {
    setIsAuto(false);
    setIndex(n);
  };

  return (
    <section className="relative w-full h-[75vh] md:h-[80vh] overflow-hidden bg-black">
      {/* Track */}
      <div
        ref={trackRef}
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateX(-${trackTranslatePct}%)`,
          transition: transitionOn ? "transform 800ms ease" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        <div className="flex h-full">
          {TRACK_SLIDES.map((s, i) => (
            <div
              key={`${s.id}-${i}`}
              className="relative h-full flex-shrink-0"
              style={{ width: `${itemWidthPct}%` }}
              aria-label={s.title}
            >
              <div className="relative h-full w-full">
                <Image
                  src={s.image || "/placeholder.svg"}
                  alt={s.title}
                  fill
                  priority={i < visible}
                  className="object-cover object-center"
                  sizes="(min-width:1280px) 33vw, (min-width:1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white/90 text-xs md:text-sm font-medium drop-shadow">
                  {s.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Headline + tiny CTA (replaces form) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="pointer-events-auto text-center px-3 sm:px-4 max-w-3xl">
          <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold drop-shadow mb-3">
            {hero.heading}
          </h1>
          <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-4">
            {hero.subheading}
          </p>

          {/* Small button only */}
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-md bg-emerald-500 text-white text-xs sm:text-sm font-semibold px-4 py-2 shadow hover:bg-emerald-600 transition"
          >
            {hero.ctaLabel}
          </Link>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => {
          setIsAuto(false);
          goPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40
                   text-white p-2 sm:p-2.5 rounded-full transition backdrop-blur"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => {
          setIsAuto(false);
          goNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40
                   text-white p-2 sm:p-2.5 rounded-full transition backdrop-blur"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              index % SLIDES.length === i
                ? "w-8 bg-white"
                : "w-2 bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div
        className="absolute top-4 right-4 z-20 text-white text-[11px] bg-black/30
                      px-2.5 py-1 rounded-full backdrop-blur"
      >
        {(index % SLIDES.length) + 1} / {SLIDES.length}
      </div>
    </section>
  );
}
