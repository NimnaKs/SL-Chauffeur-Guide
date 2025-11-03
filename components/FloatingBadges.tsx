import { useLanguage } from "@/components/LanguageProvider";

export default function FloatingBadges() {
  const { content } = useLanguage();
  const labels = content.floatingBadges;
  const WHATSAPP_LINK =
    "https://wa.me/94768539902?text=Hello%20I'm%20interested%20in%20a%20tour%20package";
  const TRIPADVISOR_LINK =
    "https://www.tripadvisor.com/Attraction_Review-g293962-d0000000";

  return (
    <div className="fixed right-4 md:right-6 bottom-6 z-50 flex flex-col items-center gap-3">
      {/* TripAdvisor */}
      <a
        href={TRIPADVISOR_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-green-500 text-white shadow-lg hover:scale-110 transition-all duration-300"
        aria-label={labels.tripAdvisor}
      >
        {/* Official TripAdvisor Owl Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="h-7 w-7"
          fill="currentColor"
        >
          <path d="M256 80C167 80 86.5 127.9 48.2 201.9C33.4 199.7 18.2 199.9 3.2 203.1L0 204.2L38.4 255.8C37.3 264.9 36.8 274.2 36.8 283.8C36.8 381.1 136.4 456 256 456C375.6 456 475.2 381.1 475.2 283.8C475.2 274.2 474.7 264.9 473.6 255.8L512 204.2L508.8 203.1C493.8 199.9 478.6 199.7 463.8 201.9C425.5 127.9 345 80 256 80zM256 112C326.7 112 389.4 152.4 422.8 212.1L424.5 215.2L426.6 214.8C439.5 212.3 452.6 211.8 465.5 213.2L437.8 250.9L440.1 254.2C442.8 258.3 444.7 263.7 445.8 269.8C447 276.3 447.6 283.1 447.6 289.8C447.6 374.4 364.6 432 256 432C147.4 432 64.4 374.4 64.4 289.8C64.4 283.1 65 276.3 66.2 269.8C67.3 263.7 69.2 258.3 71.9 254.2L74.2 250.9L46.5 213.2C59.4 211.8 72.5 212.3 85.4 214.8L87.5 215.2L89.2 212.1C122.6 152.4 185.3 112 256 112zM160 240A72 72 0 1 0 160 384A72 72 0 1 0 160 240zM352 240A72 72 0 1 0 352 384A72 72 0 1 0 352 240zM160 272A40 40 0 1 1 160 352A40 40 0 1 1 160 272zM352 272A40 40 0 1 1 352 352A40 40 0 1 1 352 272z" />
        </svg>
        <span className="pointer-events-none absolute right-16 hidden rounded-md bg-white text-gray-900 px-3 py-1.5 text-xs font-medium shadow-sm group-hover:block">
          {labels.tripAdvisor}
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg hover:scale-110 transition-all duration-300"
        aria-label={labels.whatsapp}
      >
        {/* Official WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="h-7 w-7"
          fill="currentColor"
        >
          <path d="M380.9 97.1C339 55.2 283.2 32 224.5 32c-117 0-212 95-212 212 0 37.4 9.8 73.9 28.5 106l-30.1 110.5 113.2-29.6c31.1 16.9 66.3 25.8 101.9 25.8h.1c117 0 212-95 212-212 0-58.7-23.2-114.5-65.1-156.4zM224.5 438.4h-.1c-30.9 0-61.2-8.1-87.8-23.5l-6.3-3.7-67.1 17.5 17.9-65.2-4.1-6.7c-17.6-28.9-26.9-62.3-26.9-96.5 0-99.5 81-180.5 180.5-180.5 48.2 0 93.5 18.8 127.6 52.9s52.9 79.4 52.9 127.6c0 99.5-81 180.6-180.6 180.6zM309.4 306.3c-5.1-2.5-30.2-14.9-34.9-16.6-4.7-1.8-8.1-2.5-11.5 2.5-3.3 5.1-13.1 16.6-16.1 20-3 3.4-5.9 3.8-11 1.3-30.1-15-49.8-26.8-69.8-60.6-5.3-9.1 5.3-8.5 15-28.4 1.7-3.4.9-6.4-.5-9-1.3-2.5-11.5-27.8-15.8-38.1-4.2-10.1-8.5-8.7-11.5-8.9-3-.2-6.4-.2-9.8-.2-3.4 0-8.9 1.3-13.6 6.4-4.7 5.1-17.9 17.5-17.9 42.7 0 25.2 18.3 49.5 20.8 52.9 2.5 3.4 35.9 54.9 87 77.1 12.1 5.2 21.6 8.3 29 10.6 12.2 3.9 23.3 3.4 32.1 2.1 9.8-1.5 30.2-12.3 34.5-24.1 4.2-11.8 4.2-22 2.9-24.1-1.2-2.1-4.7-3.4-9.8-5.9z" />
        </svg>
        <span className="pointer-events-none absolute right-16 hidden rounded-md bg-white text-gray-900 px-3 py-1.5 text-xs font-medium shadow-sm group-hover:block">
          {labels.whatsapp}
        </span>
      </a>
    </div>
  );
}
