import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";

const Footer = () => {
  const { content } = useLanguage();
  const footer = content.footer;

  return (
    <footer className="mt-16 bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h4 className="text-white font-semibold">{footer.contactHeading}</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {footer.addressLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
              <li>
                <span className="block text-slate-400 text-xs uppercase tracking-wider">
                  {footer.phoneLabel}
                </span>
                <a
                  href={`tel:${footer.phoneNumber.replace(/\s+/g, "")}`}
                  className="hover:text-white transition"
                >
                  {footer.phoneNumber}
                </a>
              </li>
              <li>
                <span className="block text-slate-400 text-xs uppercase tracking-wider">
                  {footer.emailLabel}
                </span>
                <a
                  href={`mailto:${footer.emailAddress}`}
                  className="hover:text-white transition break-all"
                >
                  {footer.emailAddress}
                </a>
              </li>
              <li>
                <span className="block text-slate-400 text-xs uppercase tracking-wider">
                  {footer.hoursHeading}
                </span>
                <p>{footer.weekdayHours}</p>
                <p>{footer.weekendHours}</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold">{footer.exploreHeading}</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {footer.exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold">{footer.infoHeading}</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {footer.infoLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition"
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-white/10" />

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">{footer.copyright}</p>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span>WhatsApp:</span>
            <a
              href="https://wa.me/94768539902"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              {footer.phoneNumber}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
