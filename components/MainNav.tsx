"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

import { useLanguage } from "@/components/LanguageProvider";
import type { Language } from "@/lib/translations";

function clsx(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(" ");
}

const LANG_OPTIONS: Record<Language, { code: Language; label: string; short: string; flag: string }> = {
  en: {
    code: "en",
    label: "English",
    short: "EN",
    flag: "https://flagcdn.com/w20/gb.png",
  },
  de: {
    code: "de",
    label: "Deutsch",
    short: "DE",
    flag: "https://flagcdn.com/w20/de.png",
  },
};

export default function MainNav() {
  const { content, language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const menu = content.nav.menu;
  const ctaLabel = content.nav.ctaLabel;

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Sri Lankan Chauffeur Guide">
          <Image
            src="/img/logo.png"
            alt="Sri Lankan Chauffeur Guide"
            width={120}
            height={40}
            priority
            className="h-auto w-[110px] sm:w-[120px]"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {menu.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSelect language={language} setLanguage={setLanguage} />
          <Link
            href="/contact-us"
            className="block w-full text-center rounded-lg border border-emerald-600 px-5 py-2.5 text-sm font-medium text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-sm"
          >
            {ctaLabel}
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
          aria-label="Open menu"
        >
          <FiMenu size={22} />
        </button>
      </div>

      <div
        className={clsx(
          "fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
        onClick={() => setOpen(false)}
      >
        <aside
          onClick={(event) => event.stopPropagation()}
          className={clsx(
            "absolute left-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-2xl transition-transform duration-300",
            open ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <Image
              src="/img/logo.png"
              alt="Sri Lankan Chauffeur Guide"
              width={110}
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

          <nav className="p-3 space-y-1">
            {menu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 p-4 space-y-3 bg-gray-50">
            <LanguageSelect
              language={language}
              setLanguage={(lang) => {
                setLanguage(lang);
                setOpen(false);
              }}
            />
            <Link
              href="/contact-us"
              onClick={() => setOpen(false)}
              className="block w-full text-center rounded-lg border border-emerald-600 px-6 py-3.5 text-sm font-medium text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-sm"
            >
              {ctaLabel}
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}

function LanguageSelect({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  const [open, setOpen] = useState(false);
  const current = LANG_OPTIONS[language];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center gap-2 h-[42px] px-4 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Image src={current.flag} alt={current.label} width={24} height={16} />
        <span className="hidden sm:inline">{current.label}</span>
        <span className="sm:hidden">{current.short}</span>
        <FiChevronDown
          className={clsx(
            "text-slate-500 text-xs transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-44 rounded-lg border border-gray-100 bg-white shadow-xl z-20 overflow-hidden">
            {Object.values(LANG_OPTIONS).map((option) => (
              <button
                key={option.code}
                onClick={() => {
                  setLanguage(option.code);
                  setOpen(false);
                }}
                className={clsx(
                  "flex w-full items-center gap-3 px-3 py-2.5 text-sm transition-colors",
                  option.code === language
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-slate-700 hover:bg-slate-50"
                )}
              >
                <Image src={option.flag} alt={option.label} width={24} height={16} />
                <span className="font-medium">{option.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
