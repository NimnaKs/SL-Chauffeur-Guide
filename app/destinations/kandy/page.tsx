/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kandy — Sri Lanka",
    description:
        "Kandy travel guide: Temple of the Tooth, Kandy Lake, Peradeniya Gardens, best things to do, best time to visit, and practical tips.",
};

export default function KandyArticle() {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            {/* Hero */}
            <header className="relative isolate">
                <div className="relative h-[56vh] min-h-[420px] w-full overflow-hidden">
                    <img
                        src="/img/destinations.png"
                        alt="Kandy city and lake in Sri Lanka’s hill country"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/45" />
                </div>

                <div className="mx-auto -mt-28 max-w-5xl px-6">
                    <div className="rounded-3xl border border-slate-200 bg-white/90 p-7 shadow-sm backdrop-blur">
                        <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
                            <span>📍</span> Central Highlands, Sri Lanka{" "}
                            <span className="text-emerald-300">•</span> Cultural Capital
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
                            Kandy
                        </h1>
                        <p className="mt-2 text-base text-slate-600 sm:text-lg">
                            A sacred lakeside city of temples, gardens, and hill-country
                            scenery—perfect for culture lovers and slow travelers.
                        </p>

                        {/* Quick facts */}
                        <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <dt className="text-sm font-medium text-slate-500">Best hours</dt>
                                <dd className="mt-1 text-sm text-slate-800">
                                    6:30–10:00 AM or 4:00–7:30 PM
                                </dd>
                            </div>
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <dt className="text-sm font-medium text-slate-500">Time needed</dt>
                                <dd className="mt-1 text-sm text-slate-800">1–2 days</dd>
                            </div>
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <dt className="text-sm font-medium text-slate-500">Best for</dt>
                                <dd className="mt-1 text-sm text-slate-800">
                                    Culture • Nature • Food
                                </dd>
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
                        Kandy is Sri Lanka’s cultural heart of the hill country—famous for its
                        sacred Temple of the Tooth Relic, a peaceful lake walk, and green
                        highland landscapes just beyond the city. Once the last royal capital
                        of the Sinhala kings, Kandy still feels ceremonial and alive: you’ll
                        hear drums and chanting near the temple, smell jasmine and incense in
                        the evenings, and find viewpoints, forests, and tea-growing hills a
                        short drive away.
                    </p>
                    <p className="leading-relaxed text-slate-700">
                        Whether you’re traveling from Colombo, pairing Kandy with Sigiriya and
                        Dambulla, or starting a hill-country train journey, this city makes a
                        perfect 1–2 day stop. It’s compact enough to explore slowly, but rich
                        enough to reward anyone who enjoys history, art, architecture, and
                        nature.
                    </p>
                </section>

                {/* Gallery */}
                <section className="mt-10">
                    <h2 className="text-xl font-semibold">Photos</h2>
                    <p className="mt-1 text-sm text-slate-600">
                        Sacred sites, lakeside views, and lush gardens around Kandy.
                    </p>

                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                        <div className="sm:col-span-2 overflow-hidden rounded-2xl border border-slate-200">
                            <img
                                src="/img/kandy/kandy-1.webp"
                                alt="Kandy Lake with hills in the background"
                                className="h-80 w-full object-cover"
                            />
                        </div>

                        <div className="grid gap-4">
                            <div className="overflow-hidden rounded-2xl border border-slate-200">
                                <img
                                    src="/img/kandy/kandy-2.webp"
                                    alt="Temple of the Tooth in Kandy"
                                    className="h-[9.5rem] w-full object-cover"
                                />
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-slate-200">
                                <img
                                    src="/img/kandy/kandy-4.webp"
                                    alt="Kandy city view at sunset"
                                    className="h-[9.5rem] w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3 overflow-hidden rounded-2xl border border-slate-200">
                            <img
                                src="/img/kandy/kandy-3.webp"
                                alt="Royal Botanic Gardens, Peradeniya"
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
                            Kandy’s story is woven into Sri Lanka’s royal and religious
                            traditions. As the last seat of the island’s kings, the city became
                            the guardian of the Sacred Tooth Relic—a symbol of sovereignty and
                            spiritual authority. Today, that heritage is felt in the rituals at
                            the temple, the elegance of Kandyan dance and drumming, and the
                            historic neighborhoods that curve around the lake.
                        </p>
                        <p className="mt-3 text-slate-700 leading-relaxed">
                            One landmark that ties everything together is Kandy Lake. Built as a
                            royal project, it now forms the city’s most relaxing walking route,
                            especially at sunrise and dusk when the air is cool and the hills
                            appear misty in the distance.
                        </p>
                    </div>
                </section>

                {/* Top things to do */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold">Top things to do in Kandy</h2>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">1) Visit the Temple of the Tooth</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                The Temple of the Sacred Tooth Relic (Sri Dalada Maligawa) is the
                                spiritual centerpiece of the city. Visit with respectful clothing
                                (shoulders and knees covered), remove shoes at the entrance, and
                                keep an eye out for ceremonial times when drumming and offerings
                                fill the courtyards.
                            </p>
                            <p className="mt-3 text-slate-700 leading-relaxed">
                                Go early morning for a quieter atmosphere, or in the evening when
                                the temple lights glow and the city feels most alive.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">2) Walk the Kandy Lake loop</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                This is Kandy’s simplest pleasure: a gentle lakeside walk with
                                views of the temple rooftops, trees, and hills beyond. It’s great
                                for photos, people-watching, and a slow reset between sightseeing.
                            </p>
                            <p className="mt-3 text-slate-700 leading-relaxed">
                                If you love calm mornings, do the loop around 6:30–8:00 AM. If you
                                prefer atmosphere, aim for golden hour before sunset.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">3) Explore Udawattakele Forest Reserve</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Just behind the temple area, Udawattakele is a small sanctuary of
                                shaded trails and birdsong. It’s ideal if you want a short hike
                                without leaving the city. Expect monkeys, tall trees, and a cooler
                                temperature than the streets below.
                            </p>
                            <p className="mt-3 text-slate-700 leading-relaxed">
                                Bring water, wear good shoes, and go in the morning for the best
                                chance of seeing wildlife.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">4) Visit Peradeniya Royal Botanic Gardens</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                A short drive from the city, the gardens at Peradeniya are one of
                                the best places in Sri Lanka for an easy, beautiful stroll. Think
                                tall palm avenues, huge shady trees, orchids, and open lawns.
                            </p>
                            <p className="mt-3 text-slate-700 leading-relaxed">
                                Go early for cooler weather and softer light. Plan 2–3 hours if you
                                enjoy walking slowly and taking photos.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6 sm:col-span-2">
                            <h3 className="font-semibold">5) Catch a cultural show (dance & drumming)</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Kandyan dance is powerful and rhythmic, featuring traditional
                                drumming, spinning costumes, and ceremonial movements. A cultural
                                show in the evening is a fun way to connect with local tradition
                                after a day of sightseeing—especially if you’re not visiting
                                during festival season.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Festival */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold">Esala Perahera (festival season)</h2>
                    <div className="mt-3 rounded-2xl border border-slate-200 p-6">
                        <p className="text-slate-700 leading-relaxed">
                            If you visit in July or August, you may catch the Esala Perahera,
                            Kandy’s most famous cultural celebration. During this period, the
                            city’s nights can include processions, drummers, dancers, and
                            ceremonial pageantry connected to the temple traditions.
                        </p>
                        <p className="mt-3 text-slate-700 leading-relaxed">
                            It’s a wonderful experience—but it also means more crowds and traffic
                            near the city center. If festival dates overlap with your trip, book
                            accommodation early and plan to walk instead of relying on vehicles
                            near the lake.
                        </p>
                    </div>
                </section>

                {/* Food */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold">What to eat in Kandy</h2>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">Local rice & curry</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                The classic Sri Lankan plate—rice with a mix of vegetable curries,
                                sambol, and sometimes fish or chicken. Try it for lunch when places
                                are freshest and the city is buzzing.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">Kottu & street snacks</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Kottu (chopped roti stir-fried with vegetables, egg, and meat) is a
                                Sri Lankan favorite—loud, delicious, and best enjoyed fresh. For
                                snacks, look for short eats like patties, rolls, and vadai.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6 sm:col-span-2">
                            <h3 className="font-semibold">Tea in the hills</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Kandy sits close to tea-growing regions, so don’t miss a tea stop—
                                whether it’s a simple cup with a view, or a factory visit on the
                                way to the highlands.
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
                                Generally drier and comfortable—great for walking the lake and
                                combining Kandy with the hill country.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">May to October</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                                Expect more rain and mist, but the hills look lush and dramatic.
                                Plan indoor-friendly activities (temple, museums, cafés) as backups.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                        <p className="text-slate-800">
                            <span className="font-semibold">Tip:</span> In any season, mornings
                            are cooler and calmer. Start early, then save gardens and viewpoints
                            for later in the day.
                        </p>
                    </div>
                </section>

                {/* Itinerary */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold">Suggested 1–2 day itinerary</h2>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">Day 1: City + sacred sites</h3>
                            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                                <li>Early: Temple of the Tooth + temple museum areas</li>
                                <li>Mid-morning: Kandy Lake walk + photos</li>
                                <li>Afternoon: café break + shopping (handicrafts / markets)</li>
                                <li>Evening: cultural show or relaxed sunset by the lake</li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-semibold">Day 2: Gardens + nature</h3>
                            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                                <li>Morning: Peradeniya Royal Botanic Gardens</li>
                                <li>Midday: local lunch (rice & curry)</li>
                                <li>Afternoon: Udawattakele Forest Reserve (short hike)</li>
                                <li>Evening: viewpoint stop or tea break outside the city</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Practical tips */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold">Practical tips</h2>

                    <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                        <li>
                            Dress respectfully for temples: cover shoulders and knees; you’ll
                            remove shoes at entrances (carry socks if the ground is hot).
                        </li>
                        <li>
                            Start early—Kandy feels best in cool morning air and you’ll avoid
                            peak crowds in the center.
                        </li>
                        <li>
                            Keep small cash for tickets, tuk-tuks, and snacks (especially around
                            markets).
                        </li>
                        <li>
                            If you’re sensitive to rain, bring a light jacket or umbrella; hill
                            weather can change quickly.
                        </li>
                        <li>
                            For onward travel, Kandy is a great hub to continue into the highlands
                            (Nuwara Eliya / Ella routes) or back to Colombo.
                        </li>
                    </ul>
                </section>

                {/* Simple CTA */}
                <section className="mt-14 rounded-3xl border border-slate-200 p-8">
                    <h2 className="text-2xl font-bold">Want to explore more?</h2>
                    <p className="mt-2 text-slate-700">
                        Kandy is one of Sri Lanka’s best cultural stops—easy to explore, deeply
                        meaningful, and perfectly placed for hill-country adventures.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                        <a
                            href="https://en.wikipedia.org/wiki/Kandy"
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                        >
                            Read more →
                        </a>
                        <a
                            href="/destinations"
                            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                        >
                            Browse destinations →
                        </a>
                    </div>
                </section>
            </article>
        </main>
    );
}
