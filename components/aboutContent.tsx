// components/AboutContent.tsx
"use client";

type Bullet = string;
type Stat = { value: string; label: string };

type Props = {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  body?: string;
  bullets?: Bullet[];
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  stats?: Stat[];
};

export default function AboutContent({
  imageSrc = "/img/chauffeur-guide-img.png",
  imageAlt = "Ella tea country",
  title = "More Than a Driver—Your Local Host",
  body = `From airport pickups to multi-day tours, we tailor routes to your pace—
  sharing our favorite backroads, viewpoints, and food stops from Sigiriya to Ella,
  Kandy to Galle. Expect comfortable AC vehicles, punctual service, and flexible plans.`,
  bullets = [
    "Private, customizable itineraries for couples, families, and solo travelers",
    "Clean, air-conditioned vehicles • Bottled water • Photo stops on request",
    "Honest local tips on timing, tickets, and the best viewpoints",
  ],
  primaryCtaHref = "/contact",
  primaryCtaLabel = "Get a Custom Quote",
  secondaryCtaHref = "/destinations",
  secondaryCtaLabel = "Explore Destinations",
  stats = [
    { value: "8+", label: "Years guiding" },
    { value: "1,200+", label: "Trips completed" },
    { value: "4.9★", label: "Avg. rating" },
    { value: "100%", label: "Custom routes" },
  ],
}: Props) {
  return (
    <section className="bg-white">
      {/* Main content */}
      <div className="mx-auto max-w-6xl px-6 lg:px-12 py-20 lg:py-32">
        {/* Header */}
        <div className="mb-16 text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            About Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Learn more about who we are, what we do, and our passion for showing
            you the best of Sri Lanka
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gray-50 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                {title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{body}</p>
            </div>

            {/* Bullets */}
            <ul className="space-y-4 text-sm text-gray-800">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-2 h-1 w-1 rounded-full bg-gray-900 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* CTAs (Destinations-style buttons) */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href={primaryCtaHref}
                className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-8 py-3.5 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                {primaryCtaLabel}
              </a>
              <a
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-8 py-3.5 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                {secondaryCtaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-5xl px-6 lg:px-12 pb-20 lg:pb-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((s) => (
            <div
              key={s.value + s.label}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 lg:p-8 text-center hover:border-gray-200 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="text-xl lg:text-2xl font-semibold text-gray-900">
                  {s.value}
                </div>
                <div className="mt-2 text-xs text-gray-600">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
