import type { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="mt-16 bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Main footer content */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Colombo, Sri Lanka</li>
              <li>
                <a
                  href="tel:+94768539902"
                  className="hover:text-white transition"
                >
                  +94 76 853 9902
                </a>
              </li>
              <li>
                <a
                  href="mailto:tours@example.com"
                  className="hover:text-white transition"
                >
                  tours@example.com
                </a>
              </li>
              <li>Mon–Fri: 08:00–22:00</li>
              <li>Sat–Sun: 07:00–21:00</li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-white font-semibold">Destinations</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/destinations/sigiriya"
                  className="hover:text-white transition"
                >
                  Sigiriya
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/ella"
                  className="hover:text-white transition"
                >
                  Ella
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/kandy"
                  className="hover:text-white transition"
                >
                  Kandy
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/galle"
                  className="hover:text-white transition"
                >
                  Galle
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-white transition">
                  Tours
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold">Support</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/help" className="hover:text-white transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-white/10" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Look Lanka Tours • All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <SocialLink icon="facebook" href="#" />
            <SocialLink icon="instagram" href="#" />
            <SocialLink icon="youtube" href="#" />
            <SocialLink icon="tiktok" href="#" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const SocialLink: FC<{
  icon: "facebook" | "instagram" | "youtube" | "tiktok";
  href: string;
}> = ({ icon, href }) => {
  const icons = {
    facebook:
      "M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z",
    instagram:
      "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18 6.5a1.1 1.1 0 1 1-1.1 1.1A1.1 1.1 0 0 1 18 6.5z",
    youtube:
      "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1C4.4 20.5 12 20.5 12 20.5s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.8 15.5v-7l6 3.5-6 3.5z",
    tiktok:
      "M21 7.5a6.8 6.8 0 0 1-4.8-2V14a5.5 5.5 0 1 1-5.5-5.5h.7v3a2.5 2.5 0 1 0 0 4.9A2.5 2.5 0 0 0 14 13.9V2h3a6.8 6.8 0 0 0 4 4.2V7.5z",
  };

  return (
    <Link
      href={href}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
      aria-label={icon}
    >
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="currentColor"
        className="text-slate-300"
      >
        <path d={icons[icon]} />
      </svg>
    </Link>
  );
};
