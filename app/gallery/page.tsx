// app/gallery/page.tsx
export default function GalleryPage() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          Gallery
        </h1>
        <p className="mt-3 text-gray-600">
          Moments from across the island—nature, heritage, and hidden gems.
        </p>

        {/* TODO: replace with your own gallery grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="aspect-square bg-gray-100 rounded-xl" />
          <div className="aspect-square bg-gray-100 rounded-xl" />
          <div className="aspect-square bg-gray-100 rounded-xl" />
          <div className="aspect-square bg-gray-100 rounded-xl" />
          <div className="aspect-square bg-gray-100 rounded-xl" />
          <div className="aspect-square bg-gray-100 rounded-xl" />
        </div>
      </div>
    </section>
  );
}
