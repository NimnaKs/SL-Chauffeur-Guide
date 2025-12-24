/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sigiriya (Lion Rock) — Sri Lanka",
    description:
        "Sigiriya (Lion Rock) overview: history, highlights, best time to visit, and practical tips.",
};

export default function SigiriyaArticle() {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            {/* Hero */}
            <header className="relative isolate">
                <div className="relative h-[56vh] min-h-[420px] w-full overflow-hidden">
                    <img
                        src="/img/destinations.png"
                        alt="Sigiriya Lion Rock rising from the plains"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/45" />
                </div>

                <div className="mx-auto -mt-24 max-w-5xl px-6">
                    <div className="rounded-3xl border border-slate-200 bg-white/95 p-7 shadow-sm backdrop-blur">
                        <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
                            <span>📍</span> Central Province, Sri Lanka <span className="text-emerald-300">•</span>{" "}
                            UNESCO World Heritage
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
                            Sigiriya (Lion Rock)
                        </h1>
                        <p className="mt-2 text-base text-slate-600 sm:text-lg">
                            An ancient rock fortress, royal gardens, and panoramic views—one of Sri Lanka’s
                            most iconic climbs.
                        </p>

                        {/* Quick facts */}
                        <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <dt className="text-sm font-medium text-slate-500">Best hours</dt>
                                <dd className="mt-1 text-sm text-slate-800">
                                    7:00–10:00 AM or 3:00–5:00 PM
                                </dd>
                            </div>
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <dt className="text-sm font-medium text-slate-500">Time needed</dt>
                                <dd className="mt-1 text-sm text-slate-800">2–3 hours</dd>
                            </div>
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <dt className="text-sm font-medium text-slate-500">Difficulty</dt>
                                <dd className="mt-1 text-sm text-slate-800">Moderate (many steps)</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </header>

            {/* Content */}
            <article className="mx-auto max-w-5xl px-6 pb-20 pt-12">
                {/* Intro */}
                <section className="prose prose-slate max-w-none">
                    <p className="text-lg leading-relaxed text-slate-700">
                        Rising dramatically above the surrounding plains, Sigiriya—also known as Lion Rock—is
                        one of Sri Lanka’s most remarkable archaeological sites. Built in the 5th century by
                        King Kashyapa, the complex combines a rock-top fortress, elegant gardens, and enduring
                        art, offering visitors both history and an unforgettable climb.
                    </p>
                </section>

                {/* Gallery */}
                <section className="mt-10">
                    <h2 className="text-xl font-semibold">Photos</h2>
                    <p className="mt-1 text-sm text-slate-600">
                        A quick look at the fortress, gardens, and the surrounding landscape.
                    </p>

                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                        <div className="sm:col-span-2 overflow-hidden rounded-2xl border border-slate-200">
                            <img
                                src="/img/sigiriya-2.png"
                                alt="Sigiriya fortress view"
                                className="h-80 w-full object-cover"
                            />
                        </div>

                        <div className="grid gap-4">
                            <div className="overflow-hidden rounded-2xl border border-slate-200">
                                <img
                                    src="https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/e8d8dd16-5977-57ee-b0d9-95e251e3e37c/26b02642-acea-5f81-bffe-7266e8c45aa3.jpg"
                                    alt="Sigiriya gardens"
                                    className="h-[9.5rem] w-full object-cover"
                                />
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-slate-200">
                                <img
                                    src="https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/de45190f-dcb9-5208-8d37-504a2c76f75d/bfbe30ca-408e-5170-857f-6531fd6d6f87.jpg"
                                    alt="Sigiriya panorama"
                                    className="h-[9.5rem] w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* History */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold">History</h2>
                    <div className="mt-3 rounded-2xl border border-slate-200 p-6">
                        <p className="text-slate-700 leading-relaxed">
                            Sigiriya was developed by King Kashyapa as a fortified royal residence. The site
                            includes the remains of an upper palace on the summit, a monumental gateway once
                            shaped like a lion, and carefully planned gardens below. After Kashyapa’s reign,
                            the complex was used by Buddhist monks for centuries—leaving a distinct mix of royal
                            architecture and spiritual heritage.
                        </p>
                    </div>
                </section>

                {/* Highlights */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold">Highlights</h2>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">Frescoes & Mirror Wall</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                The famous 5th-century frescoes are among Sri Lanka’s most celebrated artworks.
                                Nearby, the Mirror Wall contains historic visitor inscriptions—an early record of
                                poetry and travel notes.
                            </p>
                            <a
                                className="mt-3 inline-flex text-sm font-medium text-emerald-700 hover:text-emerald-800"
                                href="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Sigiriya_Frescoes.jpg/800px-Sigiriya_Frescoes.jpg"
                                target="_blank"
                                rel="noopener"
                            >
                                View a fresco image →
                            </a>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">Water & Boulder Gardens</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Symmetrical pools, fountains, and terraced landscaping stretch across the lower
                                complex. The design is often highlighted as an outstanding example of ancient
                                urban planning and hydraulic engineering.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6 sm:col-span-2">
                            <h3 className="font-semibold">Summit Views</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                The climb ends on a broad rock-top plateau with palace ruins, rock-cut cisterns,
                                and far-reaching views. Go early to avoid heat and to enjoy quieter steps.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Best time */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold">Best time to visit</h2>

                    <div className="mt-3 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">January to April</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Generally the driest period with comfortable morning conditions—great for climbing.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">July to September</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Also a good option, especially if you plan to combine the trip with the east coast.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                        <p className="text-slate-800">
                            <span className="font-semibold">Tip:</span> Aim for early morning or late afternoon.
                            Check official ticket prices and opening hours before you go, as these can change.
                        </p>
                    </div>
                </section>

                {/* Practical tips */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold">Practical tips</h2>

                    <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                        <li>Wear shoes with good grip—steps can be steep and uneven.</li>
                        <li>Bring water and sun protection; it can get hot on the rock.</li>
                        <li>Plan 2–3 hours including the gardens and the climb.</li>
                        <li>
                            Pair with <span className="font-medium">Dambulla Cave Temple</span> for a full-day trip.
                        </li>
                        <li>If climbing is difficult, consider the museum and lower gardens.</li>
                    </ul>
                </section>

                {/* Simple CTA */}
                <section className="mt-14 rounded-3xl border border-slate-200 p-8">
                    <h2 className="text-2xl font-bold">Want to explore more?</h2>
                    <p className="mt-2 text-slate-700">
                        Sigiriya is one of the best single-day cultural trips in Sri Lanka—especially with an
                        early start.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                        <a
                            href="https://en.wikipedia.org/wiki/Sigiriya"
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                        >
                            Read more →
                        </a>
                        <a
                            href="https://whc.unesco.org/en/list/202/"
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                        >
                            UNESCO listing →
                        </a>
                    </div>
                </section>
            </article>
        </main>
    );
}
