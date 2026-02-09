/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Galle Fort — Sri Lanka south coast",
    description: "Galle travel guide: ramparts, lighthouse sunsets, cafes, beaches, and practical tips.",
};

export default function GalleArticle() {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            {/* Hero */}
            <header className="relative isolate">
                <div className="relative h-[56vh] min-h-[420px] w-full overflow-hidden">
                    <img
                        src="/img/destinations.webp"
                        alt="Galle Fort walls facing the Indian Ocean"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/45" />
                </div>

                <div className="mx-auto -mt-24 max-w-5xl px-6">
                    <div className="rounded-3xl border border-slate-200 bg-white/95 p-7 shadow-sm backdrop-blur">
                        <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
                            <span>📍</span> Southern Province, Sri Lanka <span className="text-emerald-300">•</span> UNESCO seaside fort
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Galle</h1>
                        <p className="mt-2 text-base text-slate-600 sm:text-lg">
                            A Dutch-era fort town with rampart walks, boutique cafes, and sunset viewpoints overlooking the Indian Ocean.
                        </p>

                        {/* Quick facts */}
                        <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <dt className="text-sm font-medium text-slate-500">Best hours</dt>
                                <dd className="mt-1 text-sm text-slate-800">4:30–6:30 PM for golden light</dd>
                            </div>
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <dt className="text-sm font-medium text-slate-500">Time needed</dt>
                                <dd className="mt-1 text-sm text-slate-800">Half-day to 1 night</dd>
                            </div>
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <dt className="text-sm font-medium text-slate-500">Best for</dt>
                                <dd className="mt-1 text-sm text-slate-800">History • Food • Coastal walks</dd>
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
                        Galle Fort is a living museum on Sri Lanka’s south coast. Cobblestone lanes hide Dutch villas, art shops, and gelato stands,
                        while the thick ramparts deliver wide-open ocean views. It’s a relaxed stop between beach towns like Unawatuna and Mirissa,
                        perfect for evening strolls and heritage architecture.
                    </p>
                </section>

                {/* Gallery */}
                <section className="mt-10">
                    <h2 className="text-xl font-semibold">Photos</h2>
                    <p className="mt-1 text-sm text-slate-600">Ramparts, lighthouse sunsets, and coastal lanes.</p>

                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                        <div className="sm:col-span-2 overflow-hidden rounded-2xl border border-slate-200">
                            <img
                                src="/img/galle/galle-1.webp"
                                alt="Galle lighthouse and ramparts at sunset"
                                className="h-80 w-full object-cover"
                            />
                        </div>

                        <div className="grid gap-4">
                            <div className="overflow-hidden rounded-2xl border border-slate-200">
                                <img
                                    src="/img/galle/galle-2.webp"
                                    alt="Coastal bastion on Galle’s fort walls"
                                    className="h-[9.5rem] w-full object-cover"
                                />
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-slate-200">
                                <img
                                    src="/img/galle/galle-3.webp"
                                    alt="Old town street with colonial buildings"
                                    className="h-[9.5rem] w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3 overflow-hidden rounded-2xl border border-slate-200">
                            <img
                                src="/img/galle/galle-4.webp"
                                alt="Fort rampart walkway facing the sea"
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
                            Built by the Portuguese in the 16th century and expanded by the Dutch, Galle Fort became a key spice-trade hub and naval outpost.
                            The British added administrative buildings in the 1800s, leaving a blend of European and Sri Lankan craftsmanship.
                            Today, the UNESCO-listed fort still houses families, churches, and mosques within its walls.
                        </p>
                    </div>
                </section>

                {/* Highlights */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold">Highlights</h2>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">Rampart sunset walk</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Start near the lighthouse and follow the sea-facing walls toward Flag Rock Bastion for golden-hour light, sea spray,
                                and cliff-diving locals.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">Old town cafes & boutiques</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Browse local design shops, cinnamon-scented spice stores, and gelato bars along Pedlar Street and Church Street.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">National Maritime Museum</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Step into the Dutch warehouse to see shipwreck relics, colonial charts, and exhibits on Sri Lanka’s seafaring past.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">Nearby beaches</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Pair your fort walk with a swim at Jungle Beach or snorkeling stops around Unawatuna, 10–15 minutes away by tuk-tuk.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Best time */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold">Best time to visit</h2>

                    <div className="mt-3 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">December to April</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Dry, sunny evenings bring clear horizons and calm seas—ideal for lighthouse sunsets and beach hops.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">July to September</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Shoulder months with lighter crowds; occasional showers keep the ramparts breezy and green.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                        <p className="text-slate-800">
                            <span className="font-semibold">Tip:</span> Evenings are cooler for walking the walls. Wear light clothing and bring water—shade is limited on the ramparts.
                        </p>
                    </div>
                </section>

                {/* Practical tips */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold">Practical tips</h2>

                    <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                        <li>Tuk-tuks from Unawatuna or Galle railway station cost roughly 400–1,000 LKR.</li>
                        <li>Most cafes accept cards, but keep cash for rampart snacks and small boutiques.</li>
                        <li>Dress modestly if visiting churches or mosques inside the fort.</li>
                        <li>Stay the night if you want quieter dawn walks and early-morning photo light.</li>
                        <li>Pair Galle with whale watching in Mirissa or a beach day around Talpe.</li>
                    </ul>
                </section>
            </article>
        </main>
    );
}
