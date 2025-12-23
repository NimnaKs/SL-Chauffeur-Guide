/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sigiriya (Lion Rock) — Sri Lanka",
  description:
    "Sigiriya (Lion Rock) overview: history, attractions, best time to visit, and visitor tips.",
};

export default function SigiriyaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="space-y-4">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            <span>📍 Central Province, Sri Lanka</span>
            <span className="text-emerald-300">•</span>
            <span>UNESCO World Heritage Site</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Sigiriya (Lion Rock)
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Sigiriya, known as the Lion Rock, is an ancient rock fortress in Sri
            Lanka&apos;s Central Province that draws adventurers with its dramatic
            200-meter granite peak, stunning frescoes, and lush gardens. Built
            in the 5th century by King Kashyapa, this UNESCO World Heritage Site
            offers breathtaking panoramic views after climbing 1,200 steps,
            making it a must-visit for history buffs and nature lovers.
            <a
              className="ml-2 inline-flex items-center rounded-full border border-emerald-100 bg-white px-2 py-0.5 text-xs font-medium text-emerald-700 hover:border-emerald-200"
              href="https://en.wikipedia.org/wiki/Sigiriya"
              target="_blank"
              rel="noopener"
            >
              wikipedia
            </a>
          </p>
        </header>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-sm font-semibold text-slate-900">Photos</span>
            <span className="text-xs font-medium text-slate-500">
              Scroll sideways
            </span>
          </div>
          <div className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
            {[
              {
                src: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/59bc636a-e539-5c32-aa8d-127157d99eec/9144589d-bfc9-5727-bb8f-4f8484ca34a6.jpg",
                caption: "Tours to Sigiriya in Sri Lanka 2025/2026",
              },
              {
                src: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/e8d8dd16-5977-57ee-b0d9-95e251e3e37c/26b02642-acea-5f81-bffe-7266e8c45aa3.jpg",
                caption: "My visit to Sigiriya – Sri Lanka",
              },
              {
                src: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/de45190f-dcb9-5208-8d37-504a2c76f75d/bfbe30ca-408e-5170-857f-6531fd6d6f87.jpg",
                caption: "Sigiriya, Sri Lanka",
              },
            ].map((photo) => (
              <figure
                key={photo.src}
                className="min-w-[240px] max-w-[260px] snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="px-3 py-2 text-xs text-slate-500">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <main className="mt-8 rounded-3xl border border-slate-200 bg-white/90 p-8 text-slate-700 shadow-sm backdrop-blur">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              Dramatic History
            </h2>
            <p className="mt-3 leading-relaxed">
              King Kashyapa constructed Sigiriya as a fortress and pleasure
              palace after usurping the throne, fearing revenge from his exiled
              half-brother. The site features ruins of an upper palace,
              lion-shaped gateways, and intricate water gardens with
              still-working fountains fed by underground conduits. Later used
              as a Buddhist monastery until the 14th century, it showcases
              ancient urban planning blending symmetry with natural rock
              formations.
              <span className="ml-2 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-500">
                ceylonexpeditions
              </span>
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Iconic Attractions
            </h2>
            <ul className="mt-3 space-y-4 pl-5">
              <li className="text-sm leading-relaxed text-slate-600">
                <strong className="text-slate-900">
                  Frescoes and Mirror Wall
                </strong>
                : Vibrant 5th-century paintings of celestial damsels adorn the
                rock face, while the polished mirror wall bears over 1,500
                ancient graffiti poems praising their beauty.
                <a
                  className="ml-2 inline-flex items-center rounded-full border border-emerald-100 bg-white px-2 py-0.5 text-xs font-medium text-emerald-700 hover:border-emerald-200"
                  href="https://en.wikipedia.org/wiki/Sigiriya"
                  target="_blank"
                  rel="noopener"
                >
                  wikipedia
                </a>
              </li>
              <li className="text-sm leading-relaxed text-slate-600">
                <strong className="text-slate-900">
                  Water and Boulder Gardens
                </strong>
                : Explore symmetrical pools, fountains, and terraced landscapes
                among massive boulders, some topped with ancient pavilions.
                <span className="ml-2 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-500">
                  ceylonexpeditions
                </span>
              </li>
              <li className="text-sm leading-relaxed text-slate-600">
                <strong className="text-slate-900">Lion Gate Summit</strong>:
                Ascend through massive lion paws to the flat-topped palace ruins
                with rock-cut cisterns and thrones offering jungle vistas.
                <span className="ml-2 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-500">
                  muchbetteradventures
                </span>
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 p-4 text-sm text-slate-500">
              View the majestic Lion Rock rising from the plains:{" "}
              <a
                className="font-medium text-emerald-700 hover:text-emerald-600"
                href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sigiriya_2007.jpg/800px-Sigiriya_2007.jpg"
                target="_blank"
                rel="noopener"
              >
                image link
              </a>
              <br />
              Gaze at the famous frescoes of ethereal maidens:{" "}
              <a
                className="font-medium text-emerald-700 hover:text-emerald-600"
                href="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Sigiriya_Frescoes.jpg/800px-Sigiriya_Frescoes.jpg"
                target="_blank"
                rel="noopener"
              >
                image link
              </a>
              <a
                className="ml-2 inline-flex items-center rounded-full border border-emerald-100 bg-white px-2 py-0.5 text-xs font-medium text-emerald-700 hover:border-emerald-200"
                href="https://en.wikipedia.org/wiki/Sigiriya"
                target="_blank"
                rel="noopener"
              >
                wikipedia
              </a>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Best Time to Visit
            </h2>
            <p className="mt-3 leading-relaxed">
              January to April offers ideal dry weather with moderate
              temperatures (22-26°C), perfect for sunrise climbs to catch golden
              light and avoid crowds. July to September suits beach combos on
              the east coast, though May-September is generally dry. Arrive
              early (7-10 AM) or late afternoon (3-5 PM); entry is $30 USD for
              foreigners, open 7 AM-5 PM.
              <span className="ml-2 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-500">
                havenlanka
              </span>
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Visitor Tips
            </h2>
            <p className="mt-3 leading-relaxed">
              Wear grippy shoes for steep steps, carry water, and allocate 2-3
              hours. Nearby Dambulla Cave Temple pairs well for a full day.
              Families note it&apos;s challenging for young kids or seniors—consider
              the Sigiriya Museum instead.
              <span className="ml-2 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-500">
                tristanbalme
              </span>
            </p>
          </section>

          <footer className="mt-8 text-sm text-slate-500">
            Tip: save this file as <code>sigiriya.html</code> and open it in
            your browser.
          </footer>
        </main>
      </div>
    </div>
  );
}
