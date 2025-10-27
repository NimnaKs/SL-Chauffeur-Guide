// components/Testimonials.tsx
export type Testimonial = {
  quote: string;
  author: string;
  meta?: string; // country, trip type, etc.
  rating?: number; // 1..5
};

const DEFAULTS: Testimonial[] = [
  {
    quote:
      "Smooth, safe, and flexible itinerary. Perfect pacing for our family.",
    author: "A. Müller",
    meta: "Germany — 7-day tour",
    rating: 5,
  },
  {
    quote: "Knew all the best viewpoints in Ella and hidden food stops!",
    author: "S. Patel",
    meta: "UK — Hill Country",
    rating: 5,
  },
  {
    quote: "Professional, punctual, and super friendly. Highly recommended.",
    author: "D. Chan",
    meta: "Singapore — South Coast",
    rating: 5,
  },
];

export default function Testimonials({
  items = DEFAULTS,
}: {
  items?: Testimonial[];
}) {
  return (
    <section className="bg-neutral-50/70 py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Client Testimonials
          </h2>
          <p className="mt-2 text-gray-600">
            Real stories from recent trips around Sri Lanka
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <figure
              key={i}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              {typeof t.rating === "number" && (
                <div
                  className="mb-3 flex gap-1"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg
                      key={s}
                      className={`h-4 w-4 ${
                        s < (t.rating ?? 0) ? "text-blue-600" : "text-gray-300"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.175 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              )}
              <blockquote className="text-gray-800">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-gray-500">
                — <span className="font-medium text-gray-900">{t.author}</span>
                {t.meta ? ` (${t.meta})` : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
