/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ella — Sri Lanka hill country",
    description: "Ella travel guide: history, highlights, best time to visit, and practical tips.",
};

export default function EllaArticle() {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            {/* Hero */}
            <header className="relative isolate">
                <div className="relative h-[56vh] min-h-[420px] w-full overflow-hidden">
                    <img
                        src="https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/424cf592-1130-586a-af0b-fa7de18f02c9/55893c7f-19da-5ada-9aaa-affb4cda084f.jpg"
                        alt="Tea ridges and misty hills around Ella"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/45" />
                </div>

                <div className="mx-auto -mt-24 max-w-5xl px-6">
                    <div className="rounded-3xl border border-slate-200 bg-white/95 p-7 shadow-sm backdrop-blur">
                        <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
                            <span>📍</span> Uva Province, Sri Lanka <span className="text-emerald-300">•</span> Hill country escape
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Ella</h1>
                        <p className="mt-2 text-base text-slate-600 sm:text-lg">
                            Misty tea estates, laid-back cafes, and famous hikes like Little Adam’s Peak and Ella Rock—Ella blends
                            adventure and slow travel perfectly.
                        </p>

                        {/* Quick facts */}
                        <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <dt className="text-sm font-medium text-slate-500">Best hours</dt>
                                <dd className="mt-1 text-sm text-slate-800">Sunrise to mid-morning</dd>
                            </div>
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <dt className="text-sm font-medium text-slate-500">Time needed</dt>
                                <dd className="mt-1 text-sm text-slate-800">2–3 days in town</dd>
                            </div>
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <dt className="text-sm font-medium text-slate-500">Difficulty</dt>
                                <dd className="mt-1 text-sm text-slate-800">Easy to moderate (depending on hike)</dd>
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
                        Ella sits in Sri Lanka’s hill country, surrounded by lush tea plantations and mountain ridges. The town’s
                        relaxed pace, scenic train links, and easy access to waterfalls, bridges, and viewpoints make it a
                        favorite stop for travelers heading between Kandy, the south coast, and the highlands.
                    </p>
                </section>

                {/* Gallery */}
                <section className="mt-10">
                    <h2 className="text-xl font-semibold">Photos</h2>
                    <p className="mt-1 text-sm text-slate-600">A glimpse of Ella’s landscapes, tracks, and trails.</p>

                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                        <div className="sm:col-span-2 overflow-hidden rounded-2xl border border-slate-200">
                            <img
                                src="https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/9087021b-5987-5106-8adb-0ae5e452d5aa/c61ffcdf-ce92-53d1-9ca8-b78abca078fe.jpg"
                                alt="Train line curving toward the Nine Arch Bridge"
                                className="h-80 w-full object-cover"
                            />
                        </div>

                        <div className="grid gap-4">
                            <div className="overflow-hidden rounded-2xl border border-slate-200">
                                <img
                                    src="https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/54f8e709-6c9d-50e1-af45-625dccc29bba/c61ffcdf-ce92-53d1-9ca8-b78abca078fe.jpg"
                                    alt="Viewpoint over Ella’s misty hills"
                                    className="h-[9.5rem] w-full object-cover"
                                />
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-slate-200">
                                <img
                                    src="https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/0b136d21-1ac4-5597-a2f2-8047e7290aaa/c61ffcdf-ce92-53d1-9ca8-b78abca078fe.jpg"
                                    alt="Tea fields and walking paths near Ella"
                                    className="h-[9.5rem] w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3 overflow-hidden rounded-2xl border border-slate-200">
                            <img
                                src="/img/ella.jpeg"
                                alt="Sunrise light over hills near Ella"
                                className="h-64 w-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* History */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold">History</h2>
                    <div className="mt-3 rounded-2xl border border-slate-200 p-6">
                        <p className="text-slate-700 leading-relaxed">
                            Ella’s fame grew alongside Sri Lanka’s tea boom in the 19th century. Colonial planters established
                            estates and factories across the surrounding hills, with figures like Sir Thomas Lipton promoting tea
                            to global markets. Legends connect Ravana Falls and nearby caves to the Ramayana epic, while the
                            colonial-era rail line and the Nine Arch Bridge showcase British engineering set amid green valleys.
                        </p>
                    </div>
                </section>

                {/* Highlights */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold">Highlights</h2>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">Nine Arch Bridge</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                A stone viaduct surrounded by tea fields. Arrive for the first trains around sunrise to enjoy the
                                arches in soft light with fewer visitors.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">Little Adam’s Peak</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                A short, family-friendly hike that rewards you with sweeping views of Ella Gap, plantations, and
                                nearby ridges. Plan 45–60 minutes from the trailhead.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">Ravana Falls & Ella Rock</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Cool off in the upper pools of 220-meter Ravana Falls, then tackle the more demanding 3–4 hour hike
                                to Ella Rock for 360° panoramas of the valley.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">Tea factories & zipline</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Tour estates such as Halpewatte to learn how leaves are withered, rolled, and fired. Combine a visit
                                with cooking classes or a zipline run near Little Adam’s Peak for extra thrills.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Best time */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold">Best time to visit</h2>

                    <div className="mt-3 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">January to March</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Dry, clear mornings make trails less slippery and views crisp—ideal for Ella Rock sunrises.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">April to May & July to September</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Shoulder months are great for tea lovers: plantations are vibrant, crowds lighter, and temperatures
                                mild.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                        <p className="text-slate-800">
                            <span className="font-semibold">Tip:</span> Avoid peak monsoon rains (October–December) and pack a
                            light layer for cool evenings. Early starts help you beat both heat and crowds.
                        </p>
                    </div>
                </section>

                {/* Practical tips */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold">Practical tips</h2>

                    <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                        <li>Use tuk-tuks for short hops (roughly 300–2,000 LKR) or walk between trailheads in town.</li>
                        <li>Book the Kandy–Ella train early if you want reserved seats; scenic sections are between Nanu Oya and Ella.</li>
                        <li>Hike at sunrise for cooler weather and better light, especially for Little Adam’s Peak and Ella Rock.</li>
                        <li>Pack water, a rain shell, and grippy shoes—paths can be slick after showers.</li>
                        <li>Stay 2–3 nights to pair hikes with tea factory tours, cooking classes, or a side trip to a nearby safari.</li>
                    </ul>
                </section>

                {/* Simple CTA */}
                <section className="mt-14 rounded-3xl border border-slate-200 p-8">
                    <h2 className="text-2xl font-bold">Ready for the hills?</h2>
                    <p className="mt-2 text-slate-700">
                        Ella offers some of Sri Lanka’s easiest highland adventures—perfect for slow mornings, scenic train rides,
                        and sunset hikes.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                        <a
                            href="https://en.wikipedia.org/wiki/Ella,_Sri_Lanka"
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                        >
                            Read more →
                        </a>
                        <a
                            href="https://www.srilanka.travel/ella"
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                        >
                            Official tourism info →
                        </a>
                    </div>
                </section>
            </article>
        </main>
    );
}
