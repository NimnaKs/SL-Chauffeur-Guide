"use client";

type Bullet = string;
type Stat = { value: string; label: string };

type Props = {
  title?: string;
  body?: string;
  bullets?: Bullet[];
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  stats?: Stat[];
  images?: { src: string; alt: string }[];
};

export default function AboutContent({
  title = "More Than a Driver — Your Local Host",
  body = `From airport pickups to multi-day tours, we tailor routes to your pace — sharing our favorite backroads, viewpoints, and food stops from Sigiriya to Ella, Kandy to Galle.`,
  bullets = [
    "Private, customizable itineraries for couples, families & small groups",
    "Clean, air-conditioned vehicles • Bottled water • Photo stops on request",
    "Honest local tips on timing, tickets, and the best viewpoints",
  ],
  primaryCtaHref = "/contact",
  primaryCtaLabel = "Get a Custom Quote",
  secondaryCtaHref = "/destinations",
  secondaryCtaLabel = "Explore Destinations",
  stats = [
    { value: "8+", label: "Years guiding" },
    { value: "50+", label: "Trips completed" },
    { value: "5★", label: "Avg. rating" },
    { value: "100%", label: "Custom routes" },
  ],
  // 👇 put your 4 photos here (save them to /public first)
  images = [
    {
      src: "/img/img-13.jpg",
      alt: "Hike with guests in hill country",
    },
    { src: "/img/img-14.jpg", alt: "Safari jeep experience in Yala" },
    { src: "/img/img-16.jpg", alt: "Guests with guide beside jeep" },
    { src: "/img/img-17.jpg", alt: "Lagoon/river boat ride with guests" },
  ],
}: Props) {
  return (
    <section className="bg-white">
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
          {/* 👇 Artistic 4-photo collage */}
          <div className="order-1 lg:order-1">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {/* column 1 */}
              <div className="space-y-4 sm:space-y-5">
                <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                  <img
                    src={images[0]?.src}
                    alt={images[0]?.alt}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm translate-y-2 sm:translate-y-4">
                  <img
                    src={images[1]?.src}
                    alt={images[1]?.alt}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* column 2 */}
              <div className="space-y-4 sm:space-y-5 translate-y-6 sm:translate-y-10">
                <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                  <img
                    src={images[2]?.src}
                    alt={images[2]?.alt}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                  <img
                    src={images[3]?.src}
                    alt={images[3]?.alt}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-2 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                {title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{body}</p>
            </div>

            <ul className="space-y-4 text-sm text-gray-800">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-2 h-1.5 w-6 rounded-full bg-gray-900/90 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href={primaryCtaHref}
                className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-8 py-3.5 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                {primaryCtaLabel}
              </a>
              <a
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-8 py-3.5 text-sm font-medium text-gray-800 hover:border-gray-900 hover:bg-white transition-all duration-300"
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
