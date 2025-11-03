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

import { useLanguage } from "@/components/LanguageProvider";

const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/people/Sri-Lankan-Chauffeur-Guide/61557670539868/",
  twitter: "https://x.com/slchauffeur",
  instagram: "https://www.instagram.com/srilankanchauffeurguide",
  pinterest: "https://www.pinterest.com/srilankanchauffeurguide/",
  tiktok: "https://www.tiktok.com/@srilankanchauffeurguide",
};

export default function TopBar() {
  const { content } = useLanguage();
  const { email, phone, location } = content.topBar;

  return (
    <div className="w-full bg-gradient-to-r from-amber-50 to-amber-100 border-b border-amber-200">
      <div className="mx-auto px-3 sm:px-6 lg:px-8 py-2.5">
        {/* --- Mobile: ONE marquee line (socials + contact) --- */}
        <div className="sm:hidden overflow-hidden">
          <div className="flex whitespace-nowrap gap-6 animate-marquee-mobile">
            <MarqueeSegment email={email} phone={phone} location={location} />
            <MarqueeSegment email={email} phone={phone} location={location} />
          </div>
        </div>

        {/* --- Desktop / Tablet: static two-sides --- */}
        <div className="hidden sm:flex items-center justify-between">
          {/* left: socials */}
          <div className="flex items-center gap-4 text-gray-600">
            <a href={SOCIAL_LINKS.facebook} aria-label="Facebook" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={14} />
            </a>
            <a href={SOCIAL_LINKS.twitter} aria-label="X" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={14} />
            </a>
            <a href={SOCIAL_LINKS.instagram} aria-label="Instagram" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={14} />
            </a>
            <a href={SOCIAL_LINKS.pinterest} aria-label="Pinterest" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
              <FaPinterestP size={14} />
            </a>
            <a href={SOCIAL_LINKS.tiktok} aria-label="TikTok" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={14} />
            </a>
          </div>

          {/* right: contact */}
          <div className="flex items-center gap-6 text-xs text-gray-600">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <FaEnvelope size={13} />
              <span>{email}</span>
            </a>

            <div className="h-4 w-px bg-gray-300" />

            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <FaPhone size={13} />
              <span>{phone}</span>
            </a>

            <div className="h-4 w-px bg-gray-300" />

            <div className="flex items-center gap-2">
              <PiMapPinFill size={15} />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** One continuous row: socials • email • phone • address (used twice for seamless loop on mobile) */
function MarqueeSegment({
  email,
  phone,
  location,
}: {
  email: string;
  phone: string;
  location: string;
}) {
  return (
    <div className="flex items-center gap-6 text-xs text-gray-700">
      {/* socials */}
      <div className="flex items-center gap-4">
        <a
          href={SOCIAL_LINKS.facebook}
          aria-label="Facebook"
          className="hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={14} />
        </a>
        <a
          href={SOCIAL_LINKS.twitter}
          aria-label="X"
          className="hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={14} />
        </a>
        <a
          href={SOCIAL_LINKS.instagram}
          aria-label="Instagram"
          className="hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={14} />
        </a>
        <a
          href={SOCIAL_LINKS.pinterest}
          aria-label="Pinterest"
          className="hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPinterestP size={14} />
        </a>
        <a
          href={SOCIAL_LINKS.tiktok}
          aria-label="TikTok"
          className="hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok size={14} />
        </a>
      </div>

      <span className="opacity-40">•</span>

      {/* email */}
      <a
        href={`mailto:${email}`}
        className="flex items-center gap-2 hover:text-blue-600"
      >
        <FaEnvelope size={13} />
        <span>{email}</span>
      </a>

      <span className="opacity-40">•</span>

      {/* phone */}
      <div className="flex items-center gap-2">
        <FaPhone size={13} />
        <span>{phone}</span>
      </div>

      <span className="opacity-40">•</span>

      {/* address */}
      <div className="flex items-center gap-2">
        <PiMapPinFill size={15} />
        <span>{location}</span>
      </div>
    </div>
  );
}
