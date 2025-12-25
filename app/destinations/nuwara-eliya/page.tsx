/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nuwara Eliya — Sri Lanka tea highlands",
    description: "Nuwara Eliya travel guide: tea estates, Horton Plains, colonial charm, best time to visit, and tips.",
};

export default function NuwaraEliyaArticle() {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            {/* Hero */}
            <header className="relative isolate">
                <div className="relative h-[56vh] min-h-[420px] w-full overflow-hidden">
                    <img
                        src="/img/destinations.png"
                        alt="Tea ridges and cool mist around Nuwara Eliya"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/45" />
                </div>

                <div className="mx-auto -mt-24 max-w-5xl px-6">
                    <div className="rounded-3xl border border-slate-200 bg-white/95 p-7 shadow-sm backdrop-blur">
                        <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
                            <span>📍</span> Central Highlands, Sri Lanka <span className="text-emerald-300">•</span> Cool tea country
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Nuwara Eliya</h1>
                        <p className="mt-2 text-base text-slate-600 sm:text-lg">
                            Lakes, waterfalls, and tea estates wrapped in misty hills—Sri Lanka’s “Little England” with crisp mornings and cozy evenings.
                        </p>

                        {/* Quick facts */}
                        <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <dt className="text-sm font-medium text-slate-500">Best hours</dt>
                                <dd className="mt-1 text-sm text-slate-800">6:30–10:30 AM</dd>
                            </div>
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <dt className="text-sm font-medium text-slate-500">Time needed</dt>
                                <dd className="mt-1 text-sm text-slate-800">1–2 days</dd>
                            </div>
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <dt className="text-sm font-medium text-slate-500">Best for</dt>
                                <dd className="mt-1 text-sm text-slate-800">Tea trails • Cool weather • Hikes</dd>
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
                        Perched at 1,868 meters, Nuwara Eliya blends colonial-era bungalows with emerald tea fields and crisp air.
                        It’s the gateway to Horton Plains National Park, with dawn treks to World’s End, and a base for visiting storied estates like Pedro and Lover’s Leap.
                        Golf courses, bakeries, and British-style gardens add a quaint charm between highland adventures.
                    </p>
                </section>

                {/* Gallery */}
                <section className="mt-10">
                    <h2 className="text-xl font-semibold">Photos</h2>
                    <p className="mt-1 text-sm text-slate-600">Tea country ridges, misty lakes, and Horton Plains mornings.</p>

                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                        <div className="sm:col-span-2 overflow-hidden rounded-2xl border border-slate-200">
                            <img
                                src="/img/nuwara-eliya/nuwara-eliya-1.webp"
                                alt="Tea plantation terraces near Nuwara Eliya"
                                className="h-80 w-full object-cover"
                            />
                        </div>

                        <div className="grid gap-4">
                            <div className="overflow-hidden rounded-2xl border border-slate-200">
                                <img
                                    src="/img/nuwara-eliya/nuwara-eliya-3.webp"
                                    alt="Misty morning over Gregory Lake"
                                    className="h-[9.5rem] w-full object-cover"
                                />
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-slate-200">
                                <img
                                    src="/img/nuwara-eliya/nuwara-eliya-4.webp"
                                    alt="Tea pickers working on green slopes"
                                    className="h-[9.5rem] w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3 overflow-hidden rounded-2xl border border-slate-200">
                            <img
                                src="/img/nuwara-eliya/nuwara-eliya-2.webp"
                                alt="Rolling hills and clouds in the highlands"
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
                            Established as a hill-station retreat by British planters in the 19th century, Nuwara Eliya became the heart of Ceylon tea.
                            Estates thrived on the cool climate and fertile soil, exporting leaves worldwide. Colonial clubs, racecourses, and stone churches remain today,
                            while modern factories offer tastings that trace the journey from leaf to cup.
                        </p>
                    </div>
                </section>

                {/* Highlights */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold">Highlights</h2>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">Horton Plains & World’s End</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Start before sunrise for the 9 km loop to World’s End cliff and Baker’s Falls. Clear mornings reveal sweeping escarpment views.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">Tea factory tours</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Visit Pedro, Damro, or Lover’s Leap factories to see withering, rolling, and tasting in action—paired with fresh cups overlooking the fields.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">Gregory Lake & waterfalls</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Stroll or cycle around Gregory Lake, then detour to Lover’s Leap Falls or Ramboda Falls for cool spray and photo stops.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">Colonial cottages & markets</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Wander past rose gardens and brick bungalows, then warm up with pastries or hot tea at the town market after dusk.
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
                                Clearer skies and crisp mornings suit Horton Plains hikes and tea-factory visits.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">June to September</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Pleasant daytime temperatures with occasional showers keep the hills lush and cool.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                        <p className="text-slate-800">
                            <span className="font-semibold">Tip:</span> Pack layers—mornings and nights can drop below 12°C. Book Horton Plains permits and transport the day before to start early.
                        </p>
                    </div>
                </section>

                {/* Practical tips */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold">Practical tips</h2>

                    <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                        <li>Layer up: light fleece, rain shell, and comfy walking shoes for damp trails.</li>
                        <li>Arrange a pre-dawn car for Horton Plains (about 1 hour); the park closes entry by mid-morning.</li>
                        <li>Train rides from Kandy or Ella offer scenic arrivals—book seats in advance during holidays.</li>
                        <li>Carry cash for market snacks; some tea factories accept cards for tastings and gifts.</li>
                        <li>Stay 1–2 nights to combine tea tours with waterfalls, gardens, and a cool evening by the fire.</li>
                    </ul>
                </section>
            </article>
        </main>
    );
}
