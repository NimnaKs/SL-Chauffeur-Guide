"use client";

import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { PiMapPinFill } from "react-icons/pi";

export default function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-amber-50 to-amber-100 border-b border-amber-200">
      <div className="mx-auto px-3 sm:px-6 lg:px-8 py-2.5">
        {/* --- Mobile: ONE marquee line (socials + contact) --- */}
        <div className="sm:hidden overflow-hidden">
          <div className="flex whitespace-nowrap gap-6 animate-marquee-mobile">
            {/* segment A */}
            <MarqueeSegment />
            {/* segment B (duplicate for seamless loop) */}
            <MarqueeSegment />
          </div>
        </div>

        {/* --- Desktop / Tablet: static two-sides --- */}
        <div className="hidden sm:flex items-center justify-between">
          {/* left: socials */}
          <div className="flex items-center gap-4 text-gray-600">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              <FaFacebookF size={14} />
            </a>
            <a href="#" aria-label="X" className="hover:text-blue-600">
              <FaXTwitter size={14} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-600">
              <FaInstagram size={14} />
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-blue-600">
              <FaPinterestP size={14} />
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-blue-600">
              <FaTiktok size={14} />
            </a>
          </div>

          {/* right: contact */}
          <div className="flex items-center gap-6 text-xs text-gray-600">
            <a
              href="mailto:slchauffeurguide@gmail.com"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <FaEnvelope size={13} />
              <span>slchauffeurguide@gmail.com</span>
            </a>

            <div className="h-4 w-px bg-gray-300" />

            <a
              href="tel:+94768539902"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <FaPhone size={13} />
              <span>+94 76 853 9902</span>
            </a>

            <div className="h-4 w-px bg-gray-300" />

            <div className="flex items-center gap-2">
              <PiMapPinFill size={15} />
              <span>Kalutara North, Sri Lanka</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** One continuous row: socials • email • phone • address (used twice for seamless loop on mobile) */
function MarqueeSegment() {
  return (
    <div className="flex items-center gap-6 text-xs text-gray-700">
      {/* socials */}
      <div className="flex items-center gap-4">
        <a href="#" aria-label="Facebook" className="hover:text-blue-600">
          <FaFacebookF size={14} />
        </a>
        <a href="#" aria-label="X" className="hover:text-blue-600">
          <FaXTwitter size={14} />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-blue-600">
          <FaInstagram size={14} />
        </a>
        <a href="#" aria-label="Pinterest" className="hover:text-blue-600">
          <FaPinterestP size={14} />
        </a>
        <a href="#" aria-label="TikTok" className="hover:text-blue-600">
          <FaTiktok size={14} />
        </a>
      </div>

      <span className="opacity-40">•</span>

      {/* email */}
      <a
        href="mailto:slchauffeurguide@gmail.com"
        className="flex items-center gap-2 hover:text-blue-600"
      >
        <FaEnvelope size={13} />
        <span>slchauffeurguide@gmail.com</span>
      </a>

      <span className="opacity-40">•</span>

      {/* phone */}
      <div className="flex items-center gap-2">
        <FaPhone size={13} />
        <span>+94 76 853 9902</span>
      </div>

      <span className="opacity-40">•</span>

      {/* address */}
      <div className="flex items-center gap-2">
        <PiMapPinFill size={15} />
        <span>Kalutara North, Sri Lanka</span>
      </div>
    </div>
  );
}
