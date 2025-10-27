import Link from "next/link";
import Image from "next/image";

type Destination = {
  id: string;
  name: string;
  description: string;
  image: string;
};

const DESTINATIONS: Destination[] = [
  {
    id: "sigiriya",
    name: "Sigiriya",
    description: "Ancient rock fortress with stunning views",
    image: "/img/sigiriya.png",
  },
  {
    id: "ella",
    name: "Ella",
    description: "Mountain town with tea plantations and hiking",
    image: "/img/ella.png",
  },
  {
    id: "kandy",
    name: "Kandy",
    description: "Cultural heart with sacred temple",
    image: "/img/kandy.png",
  },
  {
    id: "galle",
    name: "Galle",
    description: "Historic fort and coastal charm",
    image: "/img/galle.png",
  },
  {
    id: "mirissa",
    name: "Mirissa",
    description: "Beautiful beach for whale watching",
    image: "/img/mirissa.png",
  },
  {
    id: "nuwara-eliya",
    name: "Nuwara Eliya",
    description: "Cool mountain retreat with tea estates",
    image: "/img/nuwara-eliya.png",
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Popular Destinations
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Discover Sri Lanka's most iconic locations
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest) => (
            <a
              key={dest.id}
              href={`#${dest.id}`}
              className="group block rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative  overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5 space-y-1.5">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-900 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {dest.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="#destinations"
            className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-8 py-3.5 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            View All Destinations
          </a>
        </div>
      </div>
    </section>
  );
}
