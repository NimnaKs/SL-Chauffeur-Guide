import Testimonials from "@/components/Testimonials";

export default function AboutPage() {
  return (
    <section className="bg-white">
      {/* 🌄 Hero Section */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden">
        <img
          src="/img/img-11.jpg"
          alt="Sri Lanka Tours & Travel"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end items-center text-center pb-20 lg:pb-24 px-4">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white drop-shadow-lg tracking-tight uppercase">
            About Us
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover Sri Lanka with trusted chauffeur guides — scenic, safe, and
            truly local.
          </p>
        </div>
      </div>

      {/* 💬 About Main Section */}
      <div className="mx-auto max-w-6xl px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — 4 Photo Collage */}
          <div className="order-1 lg:order-1">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {/* Column 1 */}
              <div className="space-y-4 sm:space-y-5">
                <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                  <img
                    src="/img/img-13.jpg"
                    alt="Hill country hike"
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm translate-y-2 sm:translate-y-4">
                  <img
                    src="/img/img-14.jpg"
                    alt="Safari jeep experience"
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
              {/* Column 2 */}
              <div className="space-y-4 sm:space-y-5 translate-y-6 sm:translate-y-10">
                <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                  <img
                    src="/img/img-16.jpg"
                    alt="Guests and guide beside jeep"
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                  <img
                    src="/img/img-17.jpg"
                    alt="Lagoon boat ride with guests"
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text Content */}
          <div className="order-2 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                More Than a Driver — Your Local Host
              </h2>
              <p className="text-gray-700 leading-relaxed">
                From airport pickups to multi-day tours, we tailor routes to
                your pace — sharing our favorite backroads, viewpoints, and food
                stops from Sigiriya to Ella, Kandy to Galle. Expect comfortable
                AC vehicles, punctual service, and flexible plans.
              </p>
            </div>

            <ul className="space-y-4 text-sm text-gray-800">
              <li className="flex items-start gap-4">
                <span className="mt-2 h-1.5 w-6 rounded-full bg-gray-900/90 flex-shrink-0" />
                <span>
                  Private, customizable itineraries for couples, families &
                  small groups
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-2 h-1.5 w-6 rounded-full bg-gray-900/90 flex-shrink-0" />
                <span>
                  Clean, air-conditioned vehicles • Bottled water • Photo stops
                  on request
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-2 h-1.5 w-6 rounded-full bg-gray-900/90 flex-shrink-0" />
                <span>
                  Honest local tips on timing, tickets, and the best viewpoints
                </span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-8 py-3.5 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Get a Custom Quote
              </a>
              <a
                href="/destinations"
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-8 py-3.5 text-sm font-medium text-gray-800 hover:border-gray-900 hover:bg-white transition-all duration-300"
              >
                Explore Destinations
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 📊 Stats Section */}
      <div className="mx-auto max-w-5xl px-6 lg:px-12 pb-20 lg:pb-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[
            ["8+", "Years guiding"],
            ["50+", "Trips completed"],
            ["5★", "Avg. rating"],
            ["100%", "Custom routes"],
          ].map(([value, label]) => (
            <div
              key={value}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 lg:p-8 text-center hover:border-gray-200 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="text-xl lg:text-2xl font-semibold text-gray-900">
                  {value}
                </div>
                <div className="mt-2 text-xs text-gray-600">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 💬 Testimonials Section */}
      <Testimonials />
    </section>
  );
}
