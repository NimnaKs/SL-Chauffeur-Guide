"use client";

import { useMemo, useState } from "react";

type Destination = {
  id: string;
  name: string;
  description: string;
  image: string; // e.g. /img/ambuluwawa.png
};

const DESTINATIONS: Destination[] = [
  // —— Your original 6 ——
  {
    id: "sigiriya",
    name: "Sigiriya",
    description: "Ancient rock fortress with stunning views.",
    image: "/img/sigiriya.png",
  },
  {
    id: "ella",
    name: "Ella",
    description: "Tea country hikes and epic viewpoints.",
    image: "/img/ella.png",
  },
  {
    id: "kandy",
    name: "Kandy",
    description: "Cultural heart and sacred Temple of the Tooth.",
    image: "/img/kandy.png",
  },
  {
    id: "galle",
    name: "Galle",
    description: "Historic fort walls and coastal charm.",
    image: "/img/galle.png",
  },
  {
    id: "mirissa",
    name: "Mirissa",
    description: "Golden bay and whale-watch mornings.",
    image: "/img/mirissa.png",
  },
  {
    id: "nuwara-eliya",
    name: "Nuwara Eliya",
    description: "Cool climate, tea estates, colonial vibe.",
    image: "/img/nuwara-eliya.png",
  },

  // —— The additional destinations you asked for ——
  {
    id: "ambuluwawa",
    name: "Ambuluwawa",
    description: "Iconic spiral tower with 360° mountain views.",
    image: "/img/ambuluwawa.png",
  },
  {
    id: "anuradhapura",
    name: "Anuradhapura",
    description: "Sacred city of ancient stupas and ruins.",
    image: "/img/anuradhapura.png",
  },
  {
    id: "arugambay",
    name: "Arugam Bay",
    description: "Laid-back surf town on the east coast.",
    image: "/img/arugambay.png",
  },
  {
    id: "awissawella",
    name: "Awissawella",
    description: "Gateway town to lush waterfalls and hills.",
    image: "/img/awissawella.png",
  },
  {
    id: "belihuloya",
    name: "Belihuloya",
    description: "Quiet rivers, trekking, and eco stays.",
    image: "/img/belihuloya.png",
  },
  {
    id: "colombo",
    name: "Colombo",
    description: "Cosmopolitan capital with heritage lanes.",
    image: "/img/colombo.png",
  },
  /*{
    id: "dambulla",
    name: "Dambulla",
    description: "UNESCO cave temple complex with murals.",
    image: "/img/dambulla.png",
  },
  {
    id: "jaffna",
    name: "Jaffna",
    description: "Northern culture, temples, and lagoons.",
    image: "/img/jaffna.png",
  },
  {
    id: "kalutara",
    name: "Kalutara",
    description: "Beach town and the grand Kalutara Vihara.",
    image: "/img/kalutara.png",
  },
  {
    id: "maskeliya",
    name: "Maskeliya",
    description: "Lakeside base for Adam’s Peak treks.",
    image: "/img/maskeliya.png",
  },
  {
    id: "polonnaruwa",
    name: "Polonnaruwa",
    description: "Medieval capital with exquisite stoneworks.",
    image: "/img/polonnaruwa.png",
  },
  {
    id: "sinharajaya",
    name: "Sinharaja",
    description: "Pristine rainforest and endemic wildlife.",
    image: "/img/sinharajaya.png",
  },
  {
    id: "siripadaya",
    name: "Sri Pada (Adam’s Peak)",
    description: "Pilgrimage mountain and sunrise climb.",
    image: "/img/siripadaya.png",
  },
  {
    id: "yala",
    name: "Yala",
    description: "Leopards, elephants, and classic safaris.",
    image: "/img/yala.png",
  },
  {
    id: "yatiyanthota",
    name: "Yatiyanthota",
    description: "Waterfalls and lush hill country drives.",
    image: "/img/yatiyanthota.png",
  },

  // —— Add 3 more to reach 24 (common picks; edit if you prefer others) ——
  {
    id: "trincomalee",
    name: "Trincomalee",
    description: "Blue bays, whale watching, and temples.",
    image: "/img/trincomalee.png",
  },
  {
    id: "bentota",
    name: "Bentota",
    description: "Resort beaches and river cruises.",
    image: "/img/bentota.png",
  },
  {
    id: "hikkaduwa",
    name: "Hikkaduwa",
    description: "Reefs, turtles, and lively beach strip.",
    image: "/img/hikkaduwa.png",
  }*/
];

const PAGE_SIZE = 6;

export default function FeaturedDestinationsPaginated() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(DESTINATIONS.length / PAGE_SIZE);

  const items = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return DESTINATIONS.slice(start, start + PAGE_SIZE);
  }, [page]);

  const goTo = (p: number) => setPage(Math.min(Math.max(1, p), totalPages));

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Grid only (no header, no CTA) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((dest) => (
            <a
              key={dest.id}
              href={`#${dest.id}`}
              className="group block rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5 space-y-1.5">
                <h3 className="text-lg font-medium text-gray-900">
                  {dest.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {dest.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination (6 per page) */}
        <nav
          className="mt-10 flex items-center justify-center gap-2"
          aria-label="Pagination"
        >
          <button
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
            className="inline-flex items-center rounded-lg border border-gray-200 px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-900 hover:text-white disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-gray-700 transition"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => goTo(p)}
              aria-current={p === page ? "page" : undefined}
              className={[
                "inline-flex h-9 min-w-[2.25rem] items-center justify-center rounded-lg border px-2 text-sm transition",
                p === page
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-200 text-gray-700 hover:bg-gray-900 hover:text-white",
              ].join(" ")}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages}
            className="inline-flex items-center rounded-lg border border-gray-200 px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-900 hover:text-white disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-gray-700 transition"
          >
            Next
          </button>
        </nav>
      </div>
    </section>
  );
}
