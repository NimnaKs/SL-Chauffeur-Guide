"use client";
/* eslint-disable @next/next/no-img-element */

import { useMemo, useState } from "react";
import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";

const PAGE_SIZE = 6;

export default function FeaturedDestinationsPaginated() {
  const { content } = useLanguage();
  const destinations = content.destinations.items;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(destinations.length / PAGE_SIZE);
  const [notice, setNotice] = useState<string | null>(null);

  const publishedDestinations = useMemo(
    () => new Set(["sigiriya", "ella", "kandy", "galle", "mirissa", "nuwara-eliya"]),
    []
  );

  const items = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return destinations.slice(start, start + PAGE_SIZE);
  }, [destinations, page]);

  const goTo = (target: number) =>
    setPage(Math.min(Math.max(1, target), totalPages));

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((dest) => {
            const hasArticle = publishedDestinations.has(dest.id);
            return (
              <Link
                key={dest.id}
                href={hasArticle ? `/destinations/${dest.id}` : "#"}
                onClick={(e) => {
                  if (!hasArticle) {
                    e.preventDefault();
                    setNotice(`${dest.name} article is being written. Check back soon.`);
                  }
                }}
                className={`group block rounded-xl overflow-hidden border shadow-sm transition-all duration-300 ${hasArticle
                    ? "bg-white border-slate-100 hover:shadow-md"
                    : "bg-slate-50 border-dashed border-slate-200"}`}
                aria-disabled={!hasArticle}
                title={hasArticle ? "View article" : "Article coming soon"}
              >
                <article>
                  <div className="relative overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                      className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold tracking-wide shadow-sm ${hasArticle
                          ? "bg-emerald-600 text-white"
                          : "bg-amber-100 text-amber-800"}`}
                    >
                      {hasArticle ? "View articles" : "Writing soon"}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-lg font-medium text-slate-900">
                      {dest.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {dest.description}
                    </p>
                    {hasArticle && (
                      <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                        <span>Tap to read the guide</span>
                        <span aria-hidden>→</span>
                      </div>
                    )}
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {notice && (
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
            <div className="h-2.5 w-2.5 rounded-full bg-amber-500 mt-1" aria-hidden />
            <div className="flex-1 text-sm font-medium">{notice}</div>
            <button
              type="button"
              className="text-xs font-semibold text-amber-700 hover:text-amber-900"
              onClick={() => setNotice(null)}
            >
              Dismiss
            </button>
          </div>
        )}

        <div className="mt-10 flex items-center justify-center gap-2">
          <button
            onClick={() => goTo(page - 1)}
            className="inline-flex h-10 min-w-[40px] items-center justify-center rounded-full border border-slate-200 px-3 text-sm font-medium text-slate-600 hover:border-emerald-600 hover:text-emerald-600 transition"
            disabled={page === 1}
          >
            ‹
          </button>

          {Array.from({ length: totalPages }).map((_, idx) => {
            const pageNumber = idx + 1;
            const isActive = pageNumber === page;
            return (
              <button
                key={pageNumber}
                onClick={() => goTo(pageNumber)}
                className={`inline-flex h-10 min-w-[40px] items-center justify-center rounded-full border px-3 text-sm font-medium transition ${isActive
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : "border-slate-200 text-slate-600 hover:border-emerald-600 hover:text-emerald-600"
                  }`}
                aria-current={isActive ? "page" : undefined}
              >
                {pageNumber}
              </button>
            );
          })}

          <button
            onClick={() => goTo(page + 1)}
            className="inline-flex h-10 min-w-[40px] items-center justify-center rounded-full border border-slate-200 px-3 text-sm font-medium text-slate-600 hover:border-emerald-600 hover:text-emerald-600 transition"
            disabled={page === totalPages}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
