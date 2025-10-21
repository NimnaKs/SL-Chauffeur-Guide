"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const MENU: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Destinations", href: "/destinations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

function clsx(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(" ");
}

export default function MainNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/img/logo.png"
            alt="Sri Lankan Chauffeur Guide"
            width={100}
            height={32}
            priority
            className="h-auto w-[100px] sm:w-[110px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {MENU.map((item) => (
            <Link
              key={item.label}
              href={item.href!}
              className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSelect />
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[42px] px-4 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md min-w-[130px]"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
          aria-label="Open menu"
        >
          <FiMenu size={22} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={clsx(
          "fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
        onClick={() => setOpen(false)}
      >
        <aside
          onClick={(e) => e.stopPropagation()}
          className={clsx(
            "absolute left-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-2xl transition-transform duration-300",
            open ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <Image
              src="/img/logo.png"
              alt="Sri Lankan Chauffeur Guide"
              width={100}
              height={40}
              className="h-auto"
            />
            <button
              onClick={() => setOpen(false)}
              className="rounded-lg border border-gray-200 p-2 hover:bg-gray-50 transition-colors"
              aria-label="Close menu"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="p-3">
            {MENU.map((item) => (
              <Link
                key={item.label}
                href={item.href!}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Footer */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 p-4 space-y-3 bg-gray-50">
            <LanguageSelect />
            <Link
              href="/contact"
              className="block w-full rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-sm"
              onClick={() => setOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}

/* Language Selector Component */
function LanguageSelect() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  const langs = [
    {
      code: "EN",
      name: "English",
      flag: "https://flagcdn.com/w20/gb.png",
    },
    {
      code: "DE",
      name: "German",
      flag: "https://flagcdn.com/w20/de.png",
    },
    {
      code: "SI",
      name: "Sinhala",
      flag: "https://flagcdn.com/w20/lk.png",
    },
  ];

  const current = langs.find((l) => l.code === lang)!;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center gap-2 h-[42px] px-4 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
      >
        <Image src={current.flag} alt={current.name} width={24} height={16} />
        <span className="hidden sm:inline">{current.name}</span>
        <span className="sm:hidden">{current.code}</span>
        <FiChevronDown
          className={clsx(
            "text-gray-500 text-xs transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-44 rounded-lg border border-gray-100 bg-white shadow-xl z-20 overflow-hidden">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={clsx(
                  "flex w-full items-center gap-3 px-3 py-2.5 text-sm transition-colors",
                  l.code === lang
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                )}
              >
                <Image src={l.flag} alt={l.name} width={24} height={16} />
                <span className="font-medium">{l.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
