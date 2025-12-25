/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mirissa Beach — Sri Lanka south coast",
    description: "Mirissa travel guide: whale watching, beach bars, Parrot Rock, surf, and practical tips.",
};

export default function MirissaArticle() {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            {/* Hero */}
            <header className="relative isolate">
                <div className="relative h-[56vh] min-h-[420px] w-full overflow-hidden">
                    <img
                        src="/img/destinations.png"
                        alt="Mirissa’s palm-fringed bay at sunrise"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/45" />
                </div>

                <div className="mx-auto -mt-24 max-w-5xl px-6">
                    <div className="rounded-3xl border border-slate-200 bg-white/95 p-7 shadow-sm backdrop-blur">
                        <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
                            <span>📍</span> Southern Province, Sri Lanka <span className="text-emerald-300">•</span> Beach & whale haven
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Mirissa</h1>
                        <p className="mt-2 text-base text-slate-600 sm:text-lg">
                            A laid-back crescent beach famous for whale watching, sunrise swims, and evenings under swaying palms.
                        </p>

                        {/* Quick facts */}
                        <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <dt className="text-sm font-medium text-slate-500">Best hours</dt>
                                <dd className="mt-1 text-sm text-slate-800">Sunrise to mid-morning</dd>
                            </div>
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <dt className="text-sm font-medium text-slate-500">Time needed</dt>
                                <dd className="mt-1 text-sm text-slate-800">1–2 days</dd>
                            </div>
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <dt className="text-sm font-medium text-slate-500">Best for</dt>
                                <dd className="mt-1 text-sm text-slate-800">Swimming • Whale watching • Beach bars</dd>
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
                        Mirissa wraps a sheltered bay in soft sand and palms. Boats leave before sunrise for blue whale and dolphin tours,
                        while cafes roll out daybeds, seafood grills, and sunset cocktails. Surf schools, turtle swims, and easy tuk-tuk hops
                        to coconut-tree viewpoints make Mirissa a favorite coastal stop.
                    </p>
                </section>

                {/* Gallery */}
                <section className="mt-10">
                    <h2 className="text-xl font-semibold">Photos</h2>
                    <p className="mt-1 text-sm text-slate-600">Sunrise bays, palm views, and whale-watch mornings.</p>

                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                        <div className="sm:col-span-2 overflow-hidden rounded-2xl border border-slate-200">
                            <img
                                src="/img/mirissa.png"
                                alt="Mirissa Bay with fishing boats at dawn"
                                className="h-80 w-full object-cover"
                            />
                        </div>

                        <div className="grid gap-4">
                            <div className="overflow-hidden rounded-2xl border border-slate-200">
                                <img
                                    src="/img/mirissa.jpeg"
                                    alt="Palms leaning over Mirissa’s shoreline"
                                    className="h-[9.5rem] w-full object-cover"
                                />
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-slate-200">
                                <img
                                    src="/img/img-2.jpg"
                                    alt="Beach swing and sunrise colors"
                                    className="h-[9.5rem] w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3 overflow-hidden rounded-2xl border border-slate-200">
                            <img
                                src="/img/img-2.jpg"
                                alt="Crescent beach with gentle waves"
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
                            Once a quiet fishing village, Mirissa grew with the rise of whale-watching in the 2000s. Its natural harbor offers one of Sri Lanka’s best launch points
                            for spotting blue whales migrating along the deep trench offshore. Today the bay balances fishing fleets with eco-certified tour boats and relaxed beach life.
                        </p>
                    </div>
                </section>

                {/* Highlights */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold">Highlights</h2>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">Whale watching</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Join an early boat (usually 6:00 AM) to spot blue whales, sperm whales, and spinner dolphins. Choose operators that brief on safety and keep respectful distances.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">Parrot Rock & Coconut Tree Hill</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Climb Parrot Rock at low tide for sweeping bay views, then tuk-tuk 5 minutes to the palm-studded headland of Coconut Tree Hill.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">Beach bars & seafood grills</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Daybeds, smoothies, and sunset BBQs line the sand. Try fresh tuna or prawns with lime and chili after an afternoon swim.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">Surf & turtle swims</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Beginners can join soft-wave lessons near the harbor, while nearby Weligama offers bigger breaks. Turtle encounters are best with snorkels near calmer reef pockets.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Best time */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold">Best time to visit</h2>

                    <div className="mt-3 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">November to April</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Calm seas and clear mornings mean smoother whale-watching and gentle swimming conditions.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">May to July & September</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Shoulder months bring fewer visitors; expect light showers but still warm water and good sunsets between clouds.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                        <p className="text-slate-800">
                            <span className="font-semibold">Tip:</span> Wear reef-friendly sunscreen and carry motion-sickness tablets for whale trips. Book the night before so you can depart by dawn.
                        </p>
                    </div>
                </section>

                {/* Practical tips */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold">Practical tips</h2>

                    <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                        <li>Tuk-tuks to the harbor cost about 300–800 LKR depending on distance; confirm an early pickup for whale tours.</li>
                        <li>Bring a dry bag for boat spray and keep footwear simple—many spots are sandy or reached at low tide.</li>
                        <li>Swimming is calm near the center of the bay; check flags and avoid strong currents around rocks.</li>
                        <li>Carry cash for beach cafes and board rentals; ATMs sit along the main Matara Road.</li>
                        <li>Combine Mirissa with a Galle Fort evening or a surf lesson in Weligama 15 minutes away.</li>
                    </ul>
                </section>
            </article>
        </main>
    );
}
